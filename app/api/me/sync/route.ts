import { NextResponse } from "next/server";
import { cookies } from "next/headers";
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

function cookieBase() {
  const isProd = process.env.NODE_ENV === "production";
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    secure: isProd,
  };
}

function isPaidPlan(p: string) {
  const plan = String(p || "").toLowerCase();
  return plan === "basico" || plan === "pro" || plan === "premium";
}

function jsonNoStore(data: any, init?: ResponseInit) {
  return NextResponse.json(data, {
    ...init,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      ...(init?.headers || {}),
    },
  });
}

/**
 * Pega UID (uuid) do usuário no profiles.
 * Tenta coluna "id"; se não existir, tenta "user_id".
 */
async function getProfileUid(sb: ReturnType<typeof getSupabaseAdmin>, cpf: string) {
  const r1 = await sb.from("profiles").select("id").eq("cpf", cpf).maybeSingle();
  if (!r1.error && r1.data?.id) return String(r1.data.id);

  const r2 = await sb.from("profiles").select("user_id").eq("cpf", cpf).maybeSingle();
  if (!r2.error && (r2.data as any)?.user_id) return String((r2.data as any).user_id);

  return null;
}

async function mpFetchJson(path: string, accessToken: string) {
  const base = new URL("https://api.mercadopago.com/");
  base.pathname = path;

  const resp = await fetch(base.toString(), {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  const text = await resp.text().catch(() => "");
  let json: any = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }

  return { ok: resp.ok, status: resp.status, text, json };
}

function normalizePlan(p: any) {
  const plan = String(p || "").toLowerCase();
  if (plan === "basico" || plan === "pro" || plan === "premium") return plan;
  return "";
}

// external_reference: "cpf|plano"
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

/**
 * Turbo apply: dado um payment, grava em mp_payments e aplica plano no profiles.
 * Idempotência via applied_at em mp_payments.
 */
async function applyPaymentIfApproved(sb: ReturnType<typeof getSupabaseAdmin>, payment: any, cpfFromCookie: string) {
  const nowIso = new Date().toISOString();

  const paymentId = String(payment?.id || "");
  const status = String(payment?.status || "").toLowerCase();
  if (!paymentId) return { ok: false as const, reason: "payment_missing_id" as const };

  const extParsed = parseExternalReference(payment?.external_reference);

  const cpf =
    onlyDigits(String(payment?.metadata?.cpf || "")) ||
    extParsed.cpf ||
    onlyDigits(String(payment?.external_reference || "")) ||
    cpfFromCookie;

  const plano =
    normalizePlan(payment?.metadata?.plano) ||
    extParsed.plano ||
    inferPlanFromText(payment?.description) ||
    inferPlanFromText(payment?.additional_info?.items?.[0]?.title) ||
    inferPlanFromText(payment?.statement_descriptor);

  const phoneFromMp = extractPhoneDigits(payment);

  // Audita sempre
  await sb.from("mp_payments").upsert(
    {
      payment_id: paymentId,
      cpf: cpf || null,
      plano: plano || null,
      status: status || null,
      raw: payment,
      updated_at: nowIso,
    },
    { onConflict: "payment_id" }
  );

  if (status !== "approved") return { ok: true as const, applied: false as const };

  if (cpf.length !== 11) return { ok: false as const, reason: "cpf_invalid" as const };
  if (!isPaidPlan(plano)) return { ok: false as const, reason: "plan_invalid" as const };

  // Idempotência
  const { data: mpRow } = await sb
    .from("mp_payments")
    .select("applied_at")
    .eq("payment_id", paymentId)
    .maybeSingle();

  if (mpRow?.applied_at) return { ok: true as const, applied: false as const, already: true as const };

  // Lê expiração atual
  const now = new Date();
  let baseDate = now;

  const { data: prof } = await sb
    .from("profiles")
    .select("plan_expires_at, phone")
    .eq("cpf", cpf)
    .maybeSingle();

  if (prof?.plan_expires_at) {
    const exp = new Date(prof.plan_expires_at);
    if (!isNaN(exp.getTime()) && exp > now) baseDate = exp;
  }

  const newExp = new Date(baseDate);
  newExp.setDate(newExp.getDate() + 30);

  const finalPhone = onlyDigits(prof?.phone || "") || phoneFromMp || null;

  await sb.from("profiles").upsert(
    {
      cpf,
      plano,
      plan_expires_at: newExp.toISOString(),
      ...(finalPhone ? { phone: finalPhone } : {}),
    },
    { onConflict: "cpf" }
  );

  await sb.from("mp_payments").update({ applied_at: nowIso, updated_at: nowIso }).eq("payment_id", paymentId);

  return { ok: true as const, applied: true as const, plano };
}

export async function POST(req: Request) {
  try {
    const c = await cookies();

    const cpf = onlyDigits(c.get("otia_cpf")?.value || "");
    // ⚡ phone NÃO pode quebrar o sync:
    const phoneCookie = onlyDigits(c.get("otia_phone")?.value || "");

    if (cpf.length !== 11) {
      return jsonNoStore({ ok: false, reason: "not_authenticated" }, { status: 401 });
    }

    const sb = getSupabaseAdmin();

    // Body opcional: payment_id + topic (payment | merchant_order)
    const body = (await req.json().catch(() => ({}))) as any;
    const hintedPaymentId = onlyDigits(String(body?.payment_id || body?.paymentId || "").trim());
    const hintedTopic = String(body?.topic || body?.type || "").toLowerCase();

    // 1) Fonte da verdade: profiles
    const profRes = await sb
      .from("profiles")
      .select("plano, plan_expires_at, phone")
      .eq("cpf", cpf)
      .maybeSingle();

    const now = new Date();
    const plan = String(profRes.data?.plano || "").toLowerCase();
    const expRaw = profRes.data?.plan_expires_at ?? null;
    const exp = expRaw ? new Date(expRaw) : null;

    const active = isPaidPlan(plan) && !!exp && !isNaN(exp.getTime()) && exp > now;

    // UID (pra quota/copilot)
    const uid = await getProfileUid(sb, cpf);

    // Se já está ativo, só seta cookies e sai ⚡
    if (active) {
      const res = jsonNoStore({ ok: true, plan, plano: plan, status: "active" as const });

      const base = cookieBase();
      res.cookies.set("otia_auth", "1", base);
      res.cookies.set("otia_cpf", cpf, base);

      // phone: pega do profile ou cookie (se tiver)
      const phoneFinal = onlyDigits(profRes.data?.phone || "") || phoneCookie || "";
      if (phoneFinal) res.cookies.set("otia_phone", phoneFinal, base);

      res.cookies.set("otia_plan", plan, base);
      res.cookies.set("otia_plan_status", "active", base);

      if (uid) res.cookies.set("otia_uid", uid, base);
      return res;
    }

    // 2) TURBO: se veio payment_id, tenta confirmar no MP e aplicar agora
    //    (funciona mesmo se webhook atrasou)
    if (hintedPaymentId) {
      const accessToken = process.env.MP_ACCESS_TOKEN;
      if (accessToken) {
        // Se vier como merchant_order, resolve primeiro
        if (hintedTopic === "merchant_order" || hintedTopic === "merchant_orders") {
          const mo = await mpFetchJson(`/merchant_orders/${encodeURIComponent(hintedPaymentId)}`, accessToken);
          if (mo.ok && mo.json) {
            const payments = Array.isArray(mo.json?.payments) ? mo.json.payments : [];
            for (const p of payments) {
              const pid = onlyDigits(String(p?.id || ""));
              if (!pid) continue;
              const pay = await mpFetchJson(`/v1/payments/${encodeURIComponent(pid)}`, accessToken);
              if (pay.ok && pay.json) {
                const applied = await applyPaymentIfApproved(sb, pay.json, cpf);
                if (applied.ok && (applied as any).applied) break;
              }
            }
          }
        } else {
          // Default: trata como payment_id
          const pay = await mpFetchJson(`/v1/payments/${encodeURIComponent(hintedPaymentId)}`, accessToken);
          if (pay.ok && pay.json) {
            await applyPaymentIfApproved(sb, pay.json, cpf);
          }
        }
      }
    }

    // 3) Releia profiles depois do turbo
    const prof2 = await sb
      .from("profiles")
      .select("plano, plan_expires_at, phone")
      .eq("cpf", cpf)
      .maybeSingle();

    const plan2 = String(prof2.data?.plano || "").toLowerCase();
    const exp2Raw = prof2.data?.plan_expires_at ?? null;
    const exp2 = exp2Raw ? new Date(exp2Raw) : null;
    const active2 = isPaidPlan(plan2) && !!exp2 && !isNaN(exp2.getTime()) && exp2 > new Date();

    const res = jsonNoStore({
      ok: true,
      plan: active2 ? plan2 : "none",
      plano: active2 ? plan2 : "none",
      status: active2 ? ("active" as const) : ("inactive" as const),
    });

    const base = cookieBase();
    res.cookies.set("otia_auth", "1", base);
    res.cookies.set("otia_cpf", cpf, base);

    const phoneFinal2 = onlyDigits(prof2.data?.phone || "") || phoneCookie || "";
    if (phoneFinal2) res.cookies.set("otia_phone", phoneFinal2, base);

    res.cookies.set("otia_plan", active2 ? plan2 : "none", base);
    res.cookies.set("otia_plan_status", active2 ? "active" : "inactive", base);

    const uid2 = uid || (await getProfileUid(sb, cpf));
    if (uid2) res.cookies.set("otia_uid", uid2, base);

    return res;
  } catch (e) {
    console.error("ME_SYNC_ERROR:", e);
    return jsonNoStore({ ok: false, reason: "server_error" }, { status: 500 });
  }
}
