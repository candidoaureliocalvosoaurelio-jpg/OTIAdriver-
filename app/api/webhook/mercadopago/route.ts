// app/api/webhook/mercadopago/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

type WebhookBody =
  | {
      action?: string;
      type?: string;
      data?: { id?: string | number };
      id?: string | number;
    }
  | any;

function asPaymentId(body: WebhookBody): string | null {
  const id = body?.data?.id ?? body?.id;
  if (!id) return null;
  const str = String(id).trim();
  return str.length ? str : null;
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) {
    throw new Error("SUPABASE env ausente");
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

export async function POST(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      console.error("MP_WEBHOOK: MP_ACCESS_TOKEN ausente");
      return NextResponse.json({ ok: true });
    }

    const body = (await req.json().catch(() => null)) as WebhookBody | null;
    console.log("MP_WEBHOOK: payload recebido:", body);

    const paymentId = body ? asPaymentId(body) : null;
    if (!paymentId) {
      console.warn("MP_WEBHOOK: paymentId não encontrado");
      return NextResponse.json({ ok: true });
    }

    // 🔎 Consulta pagamento no Mercado Pago
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

    const payment = await resp.json().catch(() => null);

    if (!resp.ok) {
      console.error("MP_WEBHOOK: erro ao consultar pagamento", payment);
      return NextResponse.json({ ok: true });
    }

    const status = payment?.status; // approved | pending | rejected
    const cpf = String(payment?.external_reference || "").replace(/\D+/g, "");
    const plano = payment?.metadata?.plano;

    console.log("MP_WEBHOOK: pagamento verificado", {
      paymentId,
      status,
      cpf,
      plano,
    });

    // ✅ Só age se aprovado
    if (status !== "approved") {
      return NextResponse.json({ ok: true });
    }

    // Valida dados mínimos
    if (!cpf || cpf.length !== 11) {
      console.error("MP_WEBHOOK: CPF inválido", cpf);
      return NextResponse.json({ ok: true });
    }

    if (!["basico", "pro", "premium"].includes(plano)) {
      console.error("MP_WEBHOOK: plano inválido", plano);
      return NextResponse.json({ ok: true });
    }

    // 🗄️ Atualiza o Supabase
    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("profiles")
      .upsert(
        {
          cpf,
          plano,               // basico | pro | premium
          plano_ativo: true,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "cpf" }
      );

    if (error) {
      console.error("MP_WEBHOOK: erro ao atualizar profile", error);
      return NextResponse.json({ ok: true });
    }

    console.log("MP_WEBHOOK: plano ativado com sucesso", {
      cpf,
      plano,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("MP_WEBHOOK: erro inesperado", e?.message ?? e);
    return NextResponse.json({ ok: true });
  }
}
