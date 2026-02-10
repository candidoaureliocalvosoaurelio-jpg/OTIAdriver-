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

export async function POST(req: Request) {
  try {
    const c = await cookies();

    const cpf = onlyDigits(c.get("otia_cpf")?.value || "");
    const phone = onlyDigits(c.get("otia_phone")?.value || "");

    // ✅ sem CPF no cookie = sem sessão
    if (cpf.length !== 11) {
      return jsonNoStore({ ok: false, reason: "not_authenticated" }, { status: 401 });
    }

    // ✅ profiles.phone é NOT NULL no seu banco
    // então se não vier, não pode sincronizar
    if (phone.length < 10 || phone.length > 11) {
      return jsonNoStore({ ok: false, reason: "missing_phone" }, { status: 400 });
    }

    // body é opcional (não pode quebrar)
    const body = (await req.json().catch(() => ({}))) as any;
    const hintedPaymentId = String(body?.payment_id || body?.paymentId || "").trim();
    const hintedPlano = String(body?.plano || "").toLowerCase();
    const hintedStatus = String(body?.status || "").toLowerCase();

    const sb = getSupabaseAdmin();

    // 1) Primeiro tenta pelo profiles (fonte da verdade)
    const prof = await sb
      .from("profiles")
      .select("plano, plan_expires_at")
      .eq("cpf", cpf)
      .maybeSingle();

    const now = new Date();
    const plan = String(prof.data?.plano || "").toLowerCase();
    const expRaw = prof.data?.plan_expires_at ?? null;
    const exp = expRaw ? new Date(expRaw) : null;

    const active =
      isPaidPlan(plan) && !!exp && !isNaN(exp.getTime()) && exp > now;

    if (active) {
      const res = jsonNoStore({ ok: true, plano: plan, status: "active" as const });

      const base = cookieBase();
      res.cookies.set("otia_auth", "1", base);
      res.cookies.set("otia_cpf", cpf, base);
      res.cookies.set("otia_phone", phone, base);
      res.cookies.set("otia_plan", plan, base);
      res.cookies.set("otia_plan_status", "active", base);

      return res;
    }

    // 2) Se veio payment_id do retorno, tenta sincronizar ESSE pagamento primeiro
    let pay: any = null;

    if (hintedPaymentId) {
      const payById = await sb
        .from("mp_payments")
        .select("payment_id, plano, status, applied_at, updated_at")
        .eq("cpf", cpf)
        .eq("payment_id", hintedPaymentId)
        .maybeSingle();

      if (payById.data) pay = payById.data;
    }

    // 3) Se não achou pelo payment_id, pega o último aprovado
    if (!pay) {
      const lastApproved = await sb
        .from("mp_payments")
        .select("payment_id, plano, status, applied_at, updated_at")
        .eq("cpf", cpf)
        .eq("status", "approved")
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (lastApproved.data) pay = lastApproved.data;
    }

    const paymentId = String(pay?.payment_id || hintedPaymentId || "");
    const planoFromMp = String(pay?.plano || hintedPlano || "").toLowerCase();
    const statusFromMp = String(pay?.status || hintedStatus || "").toLowerCase();

    // ❌ ainda não tem pagamento aprovado
    if (!paymentId || !isPaidPlan(planoFromMp) || statusFromMp !== "approved") {
      const res = jsonNoStore(
        { ok: true, plano: "none", status: "inactive" as const, reason: "not_applied_yet" },
        { status: 200 }
      );

      const base = cookieBase();
      res.cookies.set("otia_auth", "1", base);
      res.cookies.set("otia_cpf", cpf, base);
      res.cookies.set("otia_phone", phone, base);
      res.cookies.set("otia_plan", "none", base);
      res.cookies.set("otia_plan_status", "inactive", base);

      return res;
    }

    // 4) Aplica +30 dias a partir do maior entre agora e expiração atual
    let baseDate = now;
    if (exp && !isNaN(exp.getTime()) && exp > now) baseDate = exp;

    const newExp = new Date(baseDate);
    newExp.setDate(newExp.getDate() + 30);

    const up = await sb.from("profiles").upsert(
      {
        cpf,
        phone, // ✅ IMPORTANTE: evita erro NOT NULL
        plano: planoFromMp,
        plan_expires_at: newExp.toISOString(),
      },
      { onConflict: "cpf" }
    );

    if (up.error) {
      console.error("ME_SYNC_PROFILE_UPSERT_ERROR", up.error);
      return jsonNoStore({ ok: false, reason: "profile_upsert_failed" }, { status: 500 });
    }

    const mark = await sb
      .from("mp_payments")
      .update({ applied_at: new Date().toISOString() })
      .eq("payment_id", paymentId);

    if (mark.error) {
      console.error("ME_SYNC_MARK_APPLIED_ERROR", mark.error);
    }

    // 5) Cookies liberados
    const res = jsonNoStore({ ok: true, plano: planoFromMp, status: "active" as const });

    const base = cookieBase();
    res.cookies.set("otia_auth", "1", base);
    res.cookies.set("otia_cpf", cpf, base);
    res.cookies.set("otia_phone", phone, base);
    res.cookies.set("otia_plan", planoFromMp, base);
    res.cookies.set("otia_plan_status", "active", base);

    return res;
  } catch (e) {
    console.error("ME_SYNC_ERROR:", e);
    return jsonNoStore({ ok: false, reason: "server_error" }, { status: 500 });
  }
}
