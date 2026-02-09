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
  return qs ? String(qs) : "";
}

function normalizePlan(p: string) {
  const plan = String(p || "").toLowerCase();
  return plan === "basico" || plan === "pro" || plan === "premium" ? plan : "";
}

async function applyPlanToProfiles(params: {
  supabase: ReturnType<typeof getSupabaseAdmin>;
  cpf: string;
  plano: string;
}) {
  const { supabase, cpf, plano } = params;

  // pega expiração atual (se existir)
  const now = new Date();

  const { data: profile } = await supabase
    .from("profiles")
    .select("plan_expires_at")
    .eq("cpf", cpf)
    .maybeSingle();

  let baseDate = now;
  if (profile?.plan_expires_at) {
    const exp = new Date(profile.plan_expires_at);
    if (!isNaN(exp.getTime()) && exp > now) baseDate = exp;
  }

  const newExp = new Date(baseDate);
  newExp.setDate(newExp.getDate() + 30);

  // ✅ tenta UPDATE primeiro (funciona mesmo sem UNIQUE)
  const upd = await supabase
    .from("profiles")
    .update({
      plano,
      plan_expires_at: newExp.toISOString(),
    })
    .eq("cpf", cpf);

  if (upd.error) {
    console.error("WEBHOOK_PROFILE_UPDATE_ERROR", { message: upd.error.message });
  }

  // Se atualizou alguém, acabou
  if ((upd.data?.length || 0) > 0) return { ok: true };

  // ✅ se não existia, tenta INSERT (id uuid normalmente tem default no banco)
  const ins = await supabase.from("profiles").insert({
    cpf,
    plano,
    plan_expires_at: newExp.toISOString(),
  });

  if (ins.error) {
    console.error("WEBHOOK_PROFILE_INSERT_ERROR", { message: ins.error.message });
    return { ok: false, error: ins.error.message };
  }

  return { ok: true };
}

export async function POST(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) return NextResponse.json({ ok: true });

    const body = await req.json().catch(() => ({}));
    const paymentId = extractPaymentId(req, body);
    if (!paymentId) return NextResponse.json({ ok: true });

    // 1) consulta no MP (fonte da verdade)
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

    // 2) auditoria/idempotência
    await supabase.from("mp_payments").upsert(
      {
        payment_id: String(paymentId),
        cpf: cpf || null,
        plano: plano || null,
        status: status || null,
        raw: payment,
        updated_at: nowIso,
      },
      { onConflict: "payment_id" }
    );

    // 3) só aplica aprovado + dados válidos
    if (status !== "approved") return NextResponse.json({ ok: true });
    if (cpf.length !== 11) return NextResponse.json({ ok: true });
    if (!plano) return NextResponse.json({ ok: true });

    // 4) idempotência
    const { data: mpRow } = await supabase
      .from("mp_payments")
      .select("applied_at")
      .eq("payment_id", String(paymentId))
      .maybeSingle();

    if (mpRow?.applied_at) return NextResponse.json({ ok: true });

    // 5) aplica plano (robusto)
    const applied = await applyPlanToProfiles({ supabase, cpf, plano });
    if (!applied.ok) return NextResponse.json({ ok: true });

    // 6) marca como aplicado
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
