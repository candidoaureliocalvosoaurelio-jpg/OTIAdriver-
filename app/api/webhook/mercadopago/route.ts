// app/api/webhook/mercadopago/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type WebhookBody = {
  action?: string;
  type?: string;
  data?: { id?: string | number };
  id?: string | number;
};

function asPaymentId(body: any): string | null {
  const id = body?.data?.id ?? body?.id;
  if (!id) return null;
  return String(id).trim();
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) throw new Error("Configurações do Supabase ausentes.");
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}

export async function POST(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) return NextResponse.json({ ok: true });

    const body = await req.json().catch(() => null);
    const paymentId = asPaymentId(body);
    if (!paymentId) return NextResponse.json({ ok: true });

    const resp = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!resp.ok) return NextResponse.json({ ok: true });

    const payment = await resp.json();
    const status = payment?.status;
    const cpfDinamico = String(payment?.external_reference || "").replace(/\D+/g, "");
    let planoDinamico = String(payment?.metadata?.plano || "").toLowerCase().trim();

    if (status !== "approved") return NextResponse.json({ ok: true });
    if (!cpfDinamico || cpfDinamico.length !== 11) return NextResponse.json({ ok: true });

    if (!["basico", "pro", "premium"].includes(planoDinamico)) {
      const title = String(payment?.additional_info?.items?.[0]?.title || "").toLowerCase();
      if (title.includes("premium")) planoDinamico = "premium";
      else if (title.includes("pro")) planoDinamico = "pro";
      else if (title.includes("basico")) planoDinamico = "basico";
      else return NextResponse.json({ ok: true });
    }

    const supabase = getSupabaseAdmin();

    // --- LÓGICA DE SOMA INTELIGENTE (30 DIAS) ---
    const { data: profile } = await supabase
      .from("profiles")
      .select("plan_expires_at")
      .eq("cpf", cpfDinamico)
      .single();

    let baseDate = new Date();
    const now = new Date();

    if (profile?.plan_expires_at) {
      const currentExpiration = new Date(profile.plan_expires_at);
      if (currentExpiration > now) baseDate = currentExpiration;
    }

    baseDate.setDate(baseDate.getDate() + 30);
    const newPlanExpiresAt = baseDate.toISOString();

    const { error: dbError } = await supabase
      .from("profiles")
      .upsert(
        {
          cpf: cpfDinamico,
          plano: planoDinamico,
          plan_expires_at: newPlanExpiresAt,
          updated_at: now.toISOString(),
        },
        { onConflict: "cpf" }
      );

    if (dbError) {
      console.error("MP_WEBHOOK: Erro ao salvar:", dbError.message);
      return NextResponse.json({ ok: true });
    }

    console.log(`MP_WEBHOOK SUCESSO: CPF ${cpfDinamico} renovado até ${newPlanExpiresAt}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
