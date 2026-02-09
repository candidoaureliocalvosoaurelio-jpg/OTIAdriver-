// app/api/me/sync/route.ts
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

export async function POST() {
  try {
    const c = await cookies();
    const cpf = onlyDigits(c.get("otia_cpf")?.value || "");

    if (cpf.length !== 11) {
      return NextResponse.json({ ok: false, reason: "not_authenticated" }, { status: 401 });
    }

    const sb = getSupabaseAdmin();

    // 1) Primeiro tenta pelo profiles (se já estiver aplicado, ótimo)
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
      const res = NextResponse.json(
        { ok: true, plano: plan, status: "active" as const },
        { headers: { "Cache-Control": "no-store, max-age=0" } }
      );

      const base = cookieBase();
      res.cookies.set("otia_auth", "1", base);
      res.cookies.set("otia_cpf", cpf, base);
      res.cookies.set("otia_plan", plan, base);
      res.cookies.set("otia_plan_status", "active", base);
      return res;
    }

    // 2) Fallback: se webhook não aplicou, usa mp_payments aprovado e applied_at NULL
    const pay = await sb
      .from("mp_payments")
      .select("payment_id, plano, status, applied_at, updated_at")
      .eq("cpf", cpf)
      .eq("status", "approved")
      .is("applied_at", null)
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    const paymentId = String(pay.data?.payment_id || "");
    const planoFromMp = String(pay.data?.plano || "").toLowerCase();

    if (!paymentId || !isPaidPlan(planoFromMp)) {
      const res = NextResponse.json(
        { ok: true, plano: "none", status: "inactive" as const, reason: "not_applied_yet" },
        { headers: { "Cache-Control": "no-store, max-age=0" } }
      );

      const base = cookieBase();
      res.cookies.set("otia_auth", "1", base);
      res.cookies.set("otia_cpf", cpf, base);
      res.cookies.set("otia_plan", "none", base);
      res.cookies.set("otia_plan_status", "inactive", base);
      return res;
    }

    // 3) Aplica aqui mesmo (+30 dias a partir do maior entre agora e expiração atual)
    let baseDate = now;
    if (exp && !isNaN(exp.getTime()) && exp > now) baseDate = exp;

    const newExp = new Date(baseDate);
    newExp.setDate(newExp.getDate() + 30);

    const up = await sb.from("profiles").upsert(
      {
        cpf,
        plano: planoFromMp,
        plan_expires_at: newExp.toISOString(),
      },
      { onConflict: "cpf" }
    );

    if (up.error) {
      console.error("ME_SYNC_PROFILE_UPSERT_ERROR", up.error);
      return NextResponse.json({ ok: false, reason: "profile_upsert_failed" }, { status: 500 });
    }

    const mark = await sb
      .from("mp_payments")
      .update({ applied_at: new Date().toISOString() })
      .eq("payment_id", paymentId);

    if (mark.error) {
      console.error("ME_SYNC_MARK_APPLIED_ERROR", mark.error);
      // mesmo se falhar marcar, o plano já foi aplicado no profiles
    }

    // 4) Cookies liberados
    const res = NextResponse.json(
      { ok: true, plano: planoFromMp, status: "active" as const },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );

    const base = cookieBase();
    res.cookies.set("otia_auth", "1", base);
    res.cookies.set("otia_cpf", cpf, base);
    res.cookies.set("otia_plan", planoFromMp, base);
    res.cookies.set("otia_plan_status", "active", base);

    return res;
  } catch (e) {
    console.error("ME_SYNC_ERROR:", e);
    return NextResponse.json({ ok: false, reason: "server_error" }, { status: 500 });
  }
}
