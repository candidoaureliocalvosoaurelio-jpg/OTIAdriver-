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

function normalizePlan(p: any) {
  const plan = String(p || "").toLowerCase();
  if (plan === "basico" || plan === "pro" || plan === "premium") return plan;
  return "";
}

function parseExternalReference(ext: any) {
  const raw = String(ext || "");
  const parts = raw.split("|").map((s) => s.trim());
  const cpf = onlyDigits(parts[0] || "");
  const plano = normalizePlan(parts[1] || "");
  return { cpf, plano };
}

function inferPlanFromText(txt: any) {
  const t = String(txt || "").toLowerCase();
  if (t.includes("premium")) return "premium";
  if (t.includes("pro")) return "pro";
  if (t.includes("basico") || t.includes("básico")) return "basico";
  return "";
}

function extractPhoneDigits(payment: any) {
  const metaPhone = onlyDigits(payment?.metadata?.phone || "");
  if (metaPhone) return metaPhone;

  const area = onlyDigits(payment?.payer?.phone?.area_code || "");
  const num = onlyDigits(payment?.payer?.phone?.number || "");
  const combined = (area + num).trim();
  return combined || "";
}

export async function POST(req: Request) {
  const nowIso = new Date().toISOString();

  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      console.error("MP_WEBHOOK: MP_ACCESS_TOKEN missing");
      return NextResponse.json({ ok: true });
    }

    const body = await req.json().catch(() => ({}));
    const paymentId = extractPaymentId(req, body);

    if (!paymentId) {
      console.error("MP_WEBHOOK: paymentId missing", { body });
      return NextResponse.json({ ok: true });
    }

    const supabase = getSupabaseAdmin();

    // 1) Busca pagamento no MP (fonte da verdade)
    const resp = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    if (!resp.ok) {
      const txt = await resp.text().catch(() => "");
      console.error("MP_WEBHOOK: MP fetch failed", {
        paymentId,
        status: resp.status,
        body: txt?.slice?.(0, 500),
      });

      // ✅ IMPORTANTÍSSIMO: tenta ao menos registrar que chegou o evento
      // (isso só funciona se sua tabela permitir cpf/plano/status null)
      const { error: e0 } = await supabase.from("mp_payments").upsert(
        {
          payment_id: String(paymentId),
          cpf: null,
          plano: null,
          status: `mp_fetch_failed_${resp.status}`,
          raw: { note: "mp_fetch_failed", status: resp.status, body: txt },
          updated_at: nowIso,
        },
        { onConflict: "payment_id" }
      );

      if (e0) {
        console.error("MP_WEBHOOK: mp_payments upsert failed (fetch_failed)", {
          paymentId,
          message: e0.message,
        });
      }

      return NextResponse.json({ ok: true });
    }

    const payment = await resp.json();
    const status = String(payment?.status || "");

    const extParsed = parseExternalReference(payment?.external_reference);

    const cpf =
      onlyDigits(String(payment?.metadata?.cpf || "")) ||
      extParsed.cpf ||
      onlyDigits(String(payment?.external_reference || ""));

    const plano =
      normalizePlan(payment?.metadata?.plano) ||
      extParsed.plano ||
      inferPlanFromText(payment?.description) ||
      inferPlanFromText(payment?.additional_info?.items?.[0]?.title) ||
      inferPlanFromText(payment?.statement_descriptor);

    const phone = extractPhoneDigits(payment);

    // 2) Sempre grava auditoria/idempotência (AGORA com checagem de erro)
    const { error: upErr } = await supabase.from("mp_payments").upsert(
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

    if (upErr) {
      console.error("MP_WEBHOOK: mp_payments upsert error", {
        paymentId,
        message: upErr.message,
        cpf,
        plano,
        status,
      });
      // Sem registrar mp_payments, não tem como seguir com segurança
      return NextResponse.json({ ok: true });
    }

    // 3) Só aplica se aprovado e válido
    if (status !== "approved") return NextResponse.json({ ok: true });
    if (cpf.length !== 11) {
      console.error("MP_WEBHOOK: cpf invalid after MP fetch", { paymentId, cpf });
      return NextResponse.json({ ok: true });
    }
    if (!plano) {
      console.error("MP_WEBHOOK: plano not inferred", { paymentId, cpf, desc: payment?.description });
      return NextResponse.json({ ok: true });
    }

    // 4) Idempotência: já aplicado?
    const { data: mpRow, error: mpRowErr } = await supabase
      .from("mp_payments")
      .select("applied_at")
      .eq("payment_id", String(paymentId))
      .maybeSingle();

    if (mpRowErr) {
      console.error("MP_WEBHOOK: read mp_payments failed", { paymentId, message: mpRowErr.message });
      return NextResponse.json({ ok: true });
    }

    if (mpRow?.applied_at) return NextResponse.json({ ok: true });

    // 5) Calcula expiração
    const now = new Date();
    let baseDate = now;

    const { data: profile, error: profErr } = await supabase
      .from("profiles")
      .select("plan_expires_at, phone")
      .eq("cpf", cpf)
      .maybeSingle();

    if (profErr) {
      console.error("MP_WEBHOOK: profiles select failed", { cpf, message: profErr.message });
      return NextResponse.json({ ok: true });
    }

    if (profile?.plan_expires_at) {
      const exp = new Date(profile.plan_expires_at);
      if (!isNaN(exp.getTime()) && exp > now) baseDate = exp;
    }

    const newExp = new Date(baseDate);
    newExp.setDate(newExp.getDate() + 30);

    // ⚠️ Se profiles.phone for NOT NULL e o profile não existir,
    // este upsert pode falhar se finalPhone ficar null.
    const finalPhone = onlyDigits(profile?.phone || "") || phone || null;

    const { error: upsertProfileErr } = await supabase.from("profiles").upsert(
      {
        cpf,
        plano,
        plan_expires_at: newExp.toISOString(),
        ...(finalPhone ? { phone: finalPhone } : {}),
      },
      { onConflict: "cpf" }
    );

    if (upsertProfileErr) {
      console.error("MP_WEBHOOK: profile upsert failed", {
        cpf,
        plano,
        paymentId,
        message: upsertProfileErr.message,
        finalPhone,
      });
      return NextResponse.json({ ok: true });
    }

    // 7) Marca aplicado
    const { error: appliedErr } = await supabase
      .from("mp_payments")
      .update({ applied_at: nowIso, updated_at: nowIso })
      .eq("payment_id", String(paymentId));

    if (appliedErr) {
      console.error("MP_WEBHOOK: applied mark failed", { paymentId, message: appliedErr.message });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("MP_WEBHOOK_ERROR", { message: err?.message, stack: err?.stack });
    return NextResponse.json({ ok: true });
  }
}
