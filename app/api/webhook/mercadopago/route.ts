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

function normalizePlan(p: any) {
  const plan = String(p || "").toLowerCase();
  if (plan === "basico" || plan === "pro" || plan === "premium") return plan;
  return "";
}

// ✅ fallback pelo external_reference: "cpf|plano"
function parseExternalReference(ext: any) {
  const raw = String(ext || "");
  const parts = raw.split("|").map((s) => s.trim());
  const cpf = onlyDigits(parts[0] || "");
  const plano = normalizePlan(parts[1] || "");
  return { cpf, plano };
}

// ✅ fallback por texto ("Plano PREMIUM", etc.)
function inferPlanFromText(txt: any) {
  const t = String(txt || "").toLowerCase();
  if (t.includes("premium")) return "premium";
  if (t.includes("pro")) return "pro";
  if (t.includes("basico") || t.includes("básico")) return "basico";
  return "";
}

// ✅ tenta montar phone com area_code + number (quando existir)
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
    // (Opcional, mas recomendado) valida content-type
    const ct = req.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      return NextResponse.json(
        { ok: false, error: "Unsupported Media Type (expected application/json)" },
        { status: 415 }
      );
    }

    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      console.error("MP_WEBHOOK: MP_ACCESS_TOKEN missing");
      return NextResponse.json(
        { ok: false, error: "MP_ACCESS_TOKEN missing" },
        { status: 500 }
      );
    }

    // ✅ JSON inválido deve retornar 400
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }

    const paymentId = extractPaymentId(req, body);

    if (!paymentId) {
      console.error("MP_WEBHOOK: paymentId missing", { body });
      return NextResponse.json(
        { ok: false, error: "Missing payment id" },
        { status: 400 }
      );
    }

    // ============================================================
    // ✅ FIX CODEQL (SSRF CRITICAL) — definitivo
    // 1) normaliza para dígitos
    // 2) valida tamanho
    // 3) valida numérico seguro
    // 4) monta URL com base fixa via URL()
    // ============================================================
    const safePaymentId = onlyDigits(String(paymentId));

    if (!safePaymentId || safePaymentId.length < 6 || safePaymentId.length > 25) {
      console.error("MP_WEBHOOK: invalid paymentId format", { paymentId, safePaymentId });
      return NextResponse.json(
        { ok: false, error: "Invalid payment id" },
        { status: 400 }
      );
    }

    const safePaymentIdNum = Number(safePaymentId);
    if (!Number.isSafeInteger(safePaymentIdNum) || safePaymentIdNum <= 0) {
      console.error("MP_WEBHOOK: invalid paymentId numeric", { paymentId, safePaymentId });
      return NextResponse.json(
        { ok: false, error: "Invalid payment id" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // ✅ URL base fixa (anti-SSRF) — CodeQL-friendly
    const mpUrl = new URL("https://api.mercadopago.com/v1/payments/");
    mpUrl.pathname = `/v1/payments/${encodeURIComponent(String(safePaymentIdNum))}`;

    // 1) Busca pagamento no MP (fonte da verdade)
    const resp = await fetch(mpUrl.toString(), {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    // ❌ MP falhou
    if (!resp.ok) {
      const txt = await resp.text().catch(() => "");

      console.error("MP_WEBHOOK: MP fetch failed", {
        paymentId: String(safePaymentIdNum),
        status: resp.status,
        body: txt?.slice?.(0, 500),
      });

      // Auditoria/idempotência (mesmo falhando)
      const { error: e0 } = await supabase.from("mp_payments").upsert(
        {
          payment_id: String(safePaymentIdNum),
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
          paymentId: String(safePaymentIdNum),
          message: e0.message,
        });
      }

      // ✅ Retornar status REAL (para diagnosticar 4001/404)
      if (resp.status === 404) {
        return NextResponse.json(
          { ok: false, error: "Payment not found" },
          { status: 404 }
        );
      }

      // credenciais/token inválido
      if (resp.status === 401 || resp.status === 403) {
        return NextResponse.json(
          { ok: false, error: "MercadoPago credentials error", code: "MP_AUTH" },
          { status: 502 }
        );
      }

      // alguns retornos do MP vêm com "4001" no body
      if (txt.includes("4001")) {
        return NextResponse.json(
          { ok: false, error: "MercadoPago credentials error", code: "MP_4001" },
          { status: 502 }
        );
      }

      return NextResponse.json(
        { ok: false, error: "MercadoPago fetch failed", status: resp.status },
        { status: 502 }
      );
    }

    // 2) Pagamento OK
    const payment = await resp.json();
    const status = String(payment?.status || "");

    // cpf/plano: metadata -> external_reference -> texto
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

    // 3) Sempre grava auditoria/idempotência
    const { error: upErr } = await supabase.from("mp_payments").upsert(
      {
        payment_id: String(safePaymentIdNum),
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
        paymentId: String(safePaymentIdNum),
        message: upErr.message,
        cpf,
        plano,
        status,
      });

      return NextResponse.json(
        { ok: false, error: "Database error: mp_payments upsert failed" },
        { status: 500 }
      );
    }

    // 4) Só aplica se aprovado
    if (status !== "approved") {
      return NextResponse.json({ ok: true });
    }

    if (cpf.length !== 11) {
      console.error("MP_WEBHOOK: cpf invalid after MP fetch", {
        paymentId: String(safePaymentIdNum),
        cpf,
      });

      return NextResponse.json(
        { ok: false, error: "CPF invalid after MP fetch" },
        { status: 400 }
      );
    }

    if (!plano) {
      console.error("MP_WEBHOOK: plano not inferred", {
        paymentId: String(safePaymentIdNum),
        cpf,
        desc: payment?.description,
      });

      return NextResponse.json(
        { ok: false, error: "Plan not inferred from payment" },
        { status: 400 }
      );
    }

    // 5) Idempotência: já aplicado?
    const { data: mpRow, error: mpRowErr } = await supabase
      .from("mp_payments")
      .select("applied_at")
      .eq("payment_id", String(safePaymentIdNum))
      .maybeSingle();

    if (mpRowErr) {
      console.error("MP_WEBHOOK: read mp_payments failed", {
        paymentId: String(safePaymentIdNum),
        message: mpRowErr.message,
      });

      return NextResponse.json(
        { ok: false, error: "Database error: mp_payments read failed" },
        { status: 500 }
      );
    }

    if (mpRow?.applied_at) {
      return NextResponse.json({ ok: true });
    }

    // 6) Calcula expiração (30 dias; se já tem expiração futura, soma a partir dela)
    const now = new Date();
    let baseDate = now;

    const { data: profile, error: profErr } = await supabase
      .from("profiles")
      .select("plan_expires_at, phone")
      .eq("cpf", cpf)
      .maybeSingle();

    if (profErr) {
      console.error("MP_WEBHOOK: profiles select failed", {
        cpf,
        message: profErr.message,
      });

      return NextResponse.json(
        { ok: false, error: "Database error: profiles select failed" },
        { status: 500 }
      );
    }

    if (profile?.plan_expires_at) {
      const exp = new Date(profile.plan_expires_at);
      if (!isNaN(exp.getTime()) && exp > now) baseDate = exp;
    }

    const newExp = new Date(baseDate);
    newExp.setDate(newExp.getDate() + 30);

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
        paymentId: String(safePaymentIdNum),
        message: upsertProfileErr.message,
        finalPhone,
      });

      return NextResponse.json(
        { ok: false, error: "Database error: profile upsert failed" },
        { status: 500 }
      );
    }

    // 7) Marca aplicado
    const { error: appliedErr } = await supabase
      .from("mp_payments")
      .update({ applied_at: nowIso, updated_at: nowIso })
      .eq("payment_id", String(safePaymentIdNum));

    if (appliedErr) {
      console.error("MP_WEBHOOK: applied mark failed", {
        paymentId: String(safePaymentIdNum),
        message: appliedErr.message,
      });

      return NextResponse.json(
        { ok: false, error: "Database error: applied mark failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("MP_WEBHOOK_ERROR", {
      message: err?.message,
      stack: err?.stack,
    });

    return NextResponse.json(
      { ok: false, error: "Internal error" },
      { status: 500 }
    );
  }
}
