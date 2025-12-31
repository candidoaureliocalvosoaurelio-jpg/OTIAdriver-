import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

// Tipagem para o corpo do Webhook do Mercado Pago
type WebhookBody = {
  action?: string;
  type?: string;
  data?: { id?: string | number };
  id?: string | number;
};

// Extrai o ID do pagamento enviado pelo Mercado Pago
function asPaymentId(body: any): string | null {
  const id = body?.data?.id ?? body?.id;
  if (!id) return null;
  return String(id).trim();
}

// Inicializa o Supabase com a Service Role (ignora travas de segurança RLS)
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  
  if (!url || !serviceKey) {
    throw new Error("Configurações do Supabase ausentes.");
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

export async function POST(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      console.error("MP_WEBHOOK: Token do Mercado Pago ausente.");
      return NextResponse.json({ ok: true }); 
    }

    const body = await req.json().catch(() => null);
    const paymentId = asPaymentId(body);

    if (!paymentId) return NextResponse.json({ ok: true });

    // 1. Consulta os detalhes do pagamento na API do Mercado Pago
    const resp = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!resp.ok) return NextResponse.json({ ok: true });

    const payment = await resp.json();

    // 2. Captura os dados REAIS do pagamento (CPF e Plano)
    const status = payment?.status;
    const cpfDinamico = String(payment?.external_reference || "").replace(/\D+/g, "");
    let planoDinamico = String(payment?.metadata?.plano || "").toLowerCase().trim();

    // 3. Só libera se o status for 'approved'
    if (status !== "approved") return NextResponse.json({ ok: true });

    // 4. Valida se temos o CPF de quem pagou
    if (!cpfDinamico || cpfDinamico.length !== 11) {
      console.error("MP_WEBHOOK: CPF não encontrado no pagamento.");
      return NextResponse.json({ ok: true });
    }

    // Fallback: Tenta identificar o plano pelo nome do produto
    if (!["basico", "pro", "premium"].includes(planoDinamico)) {
        const title = String(payment?.additional_info?.items?.[0]?.title || "").toLowerCase();
        if (title.includes("premium")) planoDinamico = "premium";
        else if (title.includes("pro")) planoDinamico = "pro";
        else if (title.includes("basico")) planoDinamico = "basico";
    }

    // 5. ATUALIZAÇÃO DINÂMICA: Funciona para qualquer CPF
    const supabase = getSupabaseAdmin();
    const { error: dbError } = await supabase
      .from("profiles")
      .upsert(
        {
          cpf: cpfDinamico,   // Aqui o sistema usa o CPF de quem pagou
          plano: planoDinamico, // Aqui o plano que ele comprou
          updated_at: new Date().toISOString(),
        },
        { onConflict: "cpf" }
      );

    if (dbError) {
      console.error("MP_WEBHOOK Erro no banco:", dbError.message);
      return NextResponse.json({ ok: true });
    }

    console.log(`SUCESSO: Plano ${planoDinamico} ativado para o CPF ${cpfDinamico}`);
    return NextResponse.json({ ok: true });

  } catch (e: any) {
    console.error("MP_WEBHOOK: Erro crítico", e?.message);
    return NextResponse.json({ ok: true });
  }
}
