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

// Extrai o ID do pagamento de forma segura
function asPaymentId(body: any): string | null {
  const id = body?.data?.id ?? body?.id;
  if (!id) return null;
  return String(id).trim();
}

// Inicializa Supabase com Service Role para garantir a atualização ignorando RLS
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  
  if (!url || !serviceKey) {
    throw new Error("Configurações do Supabase (URL ou Service Key) ausentes.");
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

export async function POST(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      console.error("MP_WEBHOOK Error: MP_ACCESS_TOKEN não configurado.");
      return NextResponse.json({ ok: true }); 
    }

    const body = await req.json().catch(() => null);
    const paymentId = asPaymentId(body);

    if (!paymentId) {
      return NextResponse.json({ ok: true });
    }

    // 🔎 1. Consulta o pagamento detalhado na API do Mercado Pago
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
      console.error(`MP_WEBHOOK Error: Falha ao consultar pagamento ${paymentId}`);
      return NextResponse.json({ ok: true });
    }

    const payment = await resp.json();

    // Extração e normalização de dados
    const status = payment?.status;
    const cpf = String(payment?.external_reference || "").replace(/\D+/g, "");
    
    // Normalização do plano vindo do metadata
    let plano = String(payment?.metadata?.plano || "").toLowerCase().trim();

    console.log(`MP_WEBHOOK Debug: ID ${paymentId} | Status: ${status} | CPF: ${cpf} | Plano: ${plano}`);

    // ✅ 2. Validação: Só processa se estiver aprovado
    if (status !== "approved") {
      return NextResponse.json({ ok: true });
    }

    if (!cpf || cpf.length !== 11) {
      console.error("MP_WEBHOOK Error: CPF ausente ou inválido no external_reference.");
      return NextResponse.json({ ok: true });
    }

    // Fallback: Se o plano não estiver no metadata, tenta pelo título do item
    if (!["basico", "pro", "premium"].includes(plano)) {
        const itemTitle = String(payment?.additional_info?.items?.[0]?.title || "").toLowerCase();
        if (itemTitle.includes("premium")) plano = "premium";
        else if (itemTitle.includes("pro")) plano = "pro";
        else if (itemTitle.includes("basico")) plano = "basico";
        else {
            console.error("MP_WEBHOOK Error: Não foi possível identificar o plano.");
            return NextResponse.json({ ok: true });
        }
    }

    // 🗄️ 3. Atualiza o perfil no Supabase (Corrigido sem 'plano_ativo')
    const supabase = getSupabaseAdmin();

    const { error: dbError } = await supabase
      .from("profiles")
      .upsert(
        {
          cpf,
          plano,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "cpf" }
      );

    if (dbError) {
      console.error("MP_WEBHOOK Error: Falha ao atualizar Supabase:", dbError.message);
      return NextResponse.json({ ok: true });
    }

    console.log(`MP_WEBHOOK Success: Plano ${plano.toUpperCase()} ativado para CPF ${cpf}`);

    return NextResponse.json({ ok: true });

  } catch (e: any) {
    console.error("MP_WEBHOOK Critical Error:", e?.message || e);
    return NextResponse.json({ ok: true });
  }
}
