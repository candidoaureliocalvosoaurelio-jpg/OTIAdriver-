// app/api/auth/session/route.ts
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

function isPaidPlan(p: string) {
  const plan = String(p || "").toLowerCase();
  return plan === "basico" || plan === "pro" || plan === "premium";
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

function jsonNoStore(data: any, init?: ResponseInit) {
  return NextResponse.json(data, {
    ...init,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      ...(init?.headers || {}),
    },
  });
}

export async function GET() {
  try {
    const c = await cookies();

    const auth = c.get("otia_auth")?.value || "";
    const cpfRaw = c.get("otia_cpf")?.value || "";
    const cpf = onlyDigits(cpfRaw);

    const authenticated = auth === "1" && cpf.length === 11;

    if (!authenticated) {
      return jsonNoStore({
        authenticated: false,
        cpf: "",
        plan: "none",
        planStatus: "inactive",
        expiresAt: null,
      });
    }

    // ==========================
    // ⚡ FLASH PATH: usa cookies
    // ==========================
    const cookiePlan = String(c.get("otia_plan")?.value || "").toLowerCase();
    const cookiePlanStatus = String(c.get("otia_plan_status")?.value || "").toLowerCase();
    const cookieExpiresAt = c.get("otia_plan_expires_at")?.value || null;

    // Se cookie já diz active, devolve na hora (sem DB)
    if (cookiePlanStatus === "active") {
      return jsonNoStore({
        authenticated: true,
        cpf,
        plan: isPaidPlan(cookiePlan) ? cookiePlan : "premium", // fallback defensivo
        planStatus: "active",
        expiresAt: cookieExpiresAt,
      });
    }

    // ==========================
    // Fallback: fonte da verdade DB
    // ==========================
    const sb = getSupabaseAdmin();

    const { data, error } = await sb
      .from("profiles")
      .select("plano, plan_expires_at")
      .eq("cpf", cpf)
      .maybeSingle();

    if (error) {
      console.error("[AUTH_SESSION_DB_ERROR]", error);
      // mantém como inativo, mas não quebra
      return jsonNoStore({
        authenticated: true,
        cpf,
        plan: "none",
        planStatus: "inactive",
        expiresAt: null,
      });
    }

    const planDb = String(data?.plano || "none").toLowerCase();
    const expiresAtRaw = data?.plan_expires_at ?? null;

    const now = new Date();
    const exp = expiresAtRaw ? new Date(expiresAtRaw) : null;

    const notExpired = !!exp && !isNaN(exp.getTime()) && exp > now;
    const planStatus = isPaidPlan(planDb) && notExpired ? "active" : "inactive";
    const planOut = isPaidPlan(planDb) ? planDb : "none";

    // ==========================
    // (Opcional, mas recomendado)
    // auto-corrige cookies se DB disser active
    // ==========================
    const res = jsonNoStore({
      authenticated: true,
      cpf,
      plan: planOut,
      planStatus,
      expiresAt: expiresAtRaw,
    });

    const base = cookieBase();

    // mantém consistência mínima
    res.cookies.set("otia_auth", "1", base);
    res.cookies.set("otia_cpf", cpf, base);

    // só seta plan cookies com base no DB (fonte da verdade)
    res.cookies.set("otia_plan", planOut, base);
    res.cookies.set("otia_plan_status", planStatus, base);

    // opcional: gravar expiração em cookie (ajuda a evitar DB em chamadas futuras)
    if (expiresAtRaw) res.cookies.set("otia_plan_expires_at", String(expiresAtRaw), base);

    return res;
  } catch (err) {
    console.error("AUTH_SESSION_ERROR:", err);
    return jsonNoStore(
      { authenticated: false, cpf: "", plan: "none", planStatus: "inactive", expiresAt: null },
      { status: 500 }
    );
  }
}
