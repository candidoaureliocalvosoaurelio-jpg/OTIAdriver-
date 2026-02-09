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

function planFromItems(payment: any) {
  // tenta deduzir do item: "Plano PRO — OTIAdriver" ou id "plano-pro"
  const items = payment?.additional_info?.items;
  if (!Array.isArray(items) || !items.length) return "";

  const it0 = items[0] || {};
  const title = String(it0?.title || "").toLowerCase();
  const id = String(it0?.id || "").toLowerCase();

  if (id.includes("plano-basico") || title.includes("basico")) return "basico";
  if (id.includes("plano-pro") || title.includes("pro")) return "pro";
  if (id.includes("plano-premium") || title.includes("premium")) return "premium";
  return "";
}

function extractCpf(payment: any) {
  // 1) external_reference
  const ext = onlyDigits(String(payment?.external_reference || ""));
  if (ext.length === 11) return ext;

  // 2) metadata.cpf
  const metaCpf = onlyDigits(String(payment?.metadata?.cpf || ""));
  if (metaCpf.length === 11) return metaCpf;

  // 3) payer.identification.number (às vezes vem CPF aqui)
  const payerCpf = onlyDigits(String(payment?.payer?.identification?.number || ""));
  if (payerCpf.length === 11) return payerCpf;

  return "";
}

export async function POST(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) return NextResponse.json({ ok: true });

    const body = await req.json().catch(() => ({}));
    const paymentId = extractPaymentId(req, body);
    if (!paymentId) return NextResponse.json({ ok: true });

    // fonte da verdade
    const resp = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });
    if (!resp.ok) return NextResponse.json({ ok: true });

    const payment = await resp.json();

    const status = String(payment?.status || "");
    const cpf = extractCpf(payment);
    const plano =
      normalizePlan(payment?.metadata?.plano) ||
      normalizePlan(payment?.metadata?.plan) ||
      planFromItems(payment);

    const supabase = getSupabaseAdmin();
    const nowIso = new Date().toISOString();

    // sempre registra auditoria
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

    // só aplica quando aprovado + dados bons
    if (status !== "approved") return NextResponse.json({ ok: true });
    if (cpf.length !== 11) return NextResponse.json({ ok: true });
    if (!plano) return NextResponse.json({ ok: true });

    // idempotência
    const { data: mpRow } = await supabase
      .from("mp_payments")
      .select("applied_at")
      .eq("payment_id", String(paymentId))
      .maybeSingle();

    if (mpRow?.applied_at) return NextResponse.json({ ok: true });

    // calcula expiração
    const now = new Date();
    let baseDate = now;

    const { data: profile, error: profileReadErr } = await supabase
      .from("profiles")
      .select("plan_expires_at")
      .eq("cpf", cpf)
      .maybeSingle();

    if (profileReadErr) {
      console.error("WEBHOOK_PROFILE_READ_ERROR", { message: profileReadErr.message });
    }

    if (profile?.plan_expires_at) {
      const exp = new Date(profile.plan_expires_at);
      if (!isNaN(exp.getTime()) && exp > now) baseDate = exp;
    }

    const newExp = new Date(baseDate);
    newExp.setDate(newExp.getDate() + 30);

    // aplica no profiles (sem updated_at)
    const { error: upsertErr } = await supabase.from("profiles").upsert(
      {
        cpf,
        plano, // <-- precisa existir coluna "plano"
        plan_expires_at: newExp.toISOString(),
      },
      { onConflict: "cpf" }
    );

    if (upsertErr) {
      console.error("WEBHOOK_PROFILE_UPSERT_ERROR", { message: upsertErr.message });
      return NextResponse.json({ ok: true });
    }

    // marca aplicado
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
