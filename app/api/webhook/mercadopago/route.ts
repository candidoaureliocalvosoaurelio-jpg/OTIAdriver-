import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
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

// Inicializa o Supabase com a Service Role (essencial para ignorar RLS e atualizar o banco)
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

    // 1. Consulta os detalhes REAIS do pagamento na API do Mercado Pago (Segurança)
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

    if (!resp.ok) {
      console.error(`MP_WEBHOOK: Erro ao consultar pagamento ${paymentId}`);
      return NextResponse.json({ ok: true });
    }

    const payment = await resp.json();

    // 2. Captura os dados dinâmicos
    const status = payment?.status;
    const cpfDinamico = String(payment?.external_reference || "").replace(/\D+/g, "");
    let planoDinamico = String(payment?.metadata?.plano || "").toLowerCase().trim();

    // 3. Só processa se o status for 'approved'
    if (status !== "approved") {
      console.log(`MP_WEBHOOK: Pagamento ${paymentId} ignorado (status: ${status})`);
      return NextResponse.json({ ok: true });
    }

    // 4. Validação de dados mínimos
    if (!cpfDinamico || cpfDinamico.length !== 11) {
      console.error("MP_WEBHOOK: CPF não encontrado no external_reference.");
      return NextResponse.json({ ok: true });
    }

    // Fallback Inteligente: Tenta identificar o plano pelo título se o metadata falhar
    if (!["basico", "pro", "premium"].includes(planoDinamico)) {
        const title = String(payment?.additional_info?.items?.[0]?.title || "").toLowerCase();
        if (title.includes("premium")) planoDinamico = "premium";
        else if (title.includes("pro")) planoDinamico = "pro";
        else if (title.includes("basico")) planoDinamico = "basico";
        else {
            console.error("MP_WEBHOOK: Não foi possível determinar o plano.");
            return NextResponse.json({ ok: true });
        }
    }

    // 5. ATUALIZAÇÃO NO BANCO (CORRIGIDA): Removida a coluna 'plano_ativo'
    const supabase = getSupabaseAdmin();
    const { error: dbError } = await supabase
      .from("profiles")
      .upsert(
        {
          cpf: cpfDinamico,
          plano: planoDinamico,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "cpf" }
      );

    if (dbError) {
      console.error("MP_WEBHOOK: Erro ao salvar no Supabase:", dbError.message);
      // Retornamos 200 para o Mercado Pago parar de tentar, mas registramos o erro no log
      return NextResponse.json({ ok: true });
    }

    console.log(`MP_WEBHOOK SUCESSO: Plano ${planoDinamico.toUpperCase()} liberado para CPF ${cpfDinamico}`);
    return NextResponse.json({ ok: true });

  } catch (e: any) {
    console.error("MP_WEBHOOK: Erro inesperado:", e?.message);
    return NextResponse.json({ ok: true });
  }
}
