// app/api/webhook/mercadopago/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) throw new Error("Missing Supabase env vars");
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}

function extractPaymentId(req: Request, body: any) {
  const fromBody = body?.data?.id || body?.id;
  if (fromBody) return String(fromBody);

  const url = new URL(req.url);
  const qs =
    url.searchParams.get("data.id") ||
    url.searchParams.get("id") ||
    url.searchParams.get("payment_id");
  if (qs) return String(qs);

  return "";
}

function normalizePlan(p: string) {
  const plan = String(p || "").toLowerCase();
  if (plan === "basico" || plan === "pro" || plan === "premium") return plan;
  return "";
}

export async function POST(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) return NextResponse.json({ ok: true });

    const body = await req.json().catch(() => ({}));
    const paymentId = extractPaymentId(req, body);
    if (!paymentId) return NextResponse.json({ ok: true });

    // 1) Consulta no MP (fonte da verdade)
    const resp = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });
    if (!resp.ok) return NextResponse.json({ ok: true });

    const payment = await resp.json();

    const status = String(payment?.status || "");
    const cpf = onlyDigits(String(payment?.external_reference || ""));
    const plano = normalizePlan(payment?.metadata?.plano);

    const supabase = getSupabaseAdmin();
    const nowIso = new Date().toISOString();

    // 2) Salva auditoria/idempotência em mp_payments
    await supabase.from("mp_payments").upsert(
      {
        payment_id: String(paymentId),
        cpf: cpf || null,
        plano: plano || null,
        status: status || null,
        raw: payment,
        updated_at: nowIso, // <- aqui pode ficar, pq na sua mp_payments existe updated_at
      },
      { onConflict: "payment_id" }
    );

    // 3) Só aplica quando aprovado e dados válidos
    if (status !== "approved") return NextResponse.json({ ok: true });
    if (cpf.length !== 11) return NextResponse.json({ ok: true });
    if (!plano) return NextResponse.json({ ok: true });

    // 4) Idempotência: já aplicado?
    const { data: mpRow } = await supabase
      .from("mp_payments")
      .select("applied_at")
      .eq("payment_id", String(paymentId))
      .maybeSingle();

    if (mpRow?.applied_at) return NextResponse.json({ ok: true });

    // 5) Calcula nova expiração (+30 dias a partir do maior entre agora e expiração atual)
    const now = new Date();
    let baseDate = now;

    const { data: profile } = await supabase
      .from("profiles")
      .select("plan_expires_at")
      .eq("cpf", cpf)
      .maybeSingle();

    if (profile?.plan_expires_at) {
      const exp = new Date(profile.plan_expires_at);
      if (!isNaN(exp.getTime()) && exp > now) baseDate = exp;
    }

    const newExp = new Date(baseDate);
    newExp.setDate(newExp.getDate() + 30);

    // 6) Aplica plano no profiles
    // ⚠️ removido updated_at porque sua tabela profiles (pelo print) não tem essa coluna
    const { error: upsertErr } = await supabase.from("profiles").upsert(
      {
        cpf,
        plano,
        plan_expires_at: newExp.toISOString(),
      },
      { onConflict: "cpf" }
    );

    if (upsertErr) {
      console.error("WEBHOOK_PROFILE_UPSERT_ERROR", { message: upsertErr.message });
      return NextResponse.json({ ok: true });
    }

    // 7) Marca como aplicado (idempotência)
    const { error: appliedErr } = await supabase
      .from("mp_payments")
      .update({ applied_at: nowIso, updated_at: nowIso })
      .eq("payment_id", String(paymentId));

    if (appliedErr) {
      console.error("WEBHOOK_APPLIED_MARK_ERROR", { message: appliedErr.message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("MP_WEBHOOK_ERROR", err);
    return NextResponse.json({ ok: true });
  }
}
