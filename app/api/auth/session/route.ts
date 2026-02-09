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

export async function GET() {
  try {
    const c = await cookies();

    const auth = c.get("otia_auth")?.value || "";
    const cpfRaw = c.get("otia_cpf")?.value || "";

    const cpf = onlyDigits(cpfRaw);
    const authenticated = auth === "1" && cpf.length === 11;

    if (!authenticated) {
      return NextResponse.json(
        { authenticated: false, cpf: "", plan: "none", planStatus: "inactive", expiresAt: null },
        { status: 200, headers: { "Cache-Control": "no-store" } }
      );
    }

    const sb = getSupabaseAdmin();

    const { data, error } = await sb
      .from("profiles")
      .select("plano, plan_expires_at")
      .eq("cpf", cpf)
      .maybeSingle();

    if (error) {
      console.error("[AUTH_SESSION_DB_ERROR]", error);
      return NextResponse.json(
        { authenticated: true, cpf, plan: "none", planStatus: "inactive", expiresAt: null },
        { status: 200, headers: { "Cache-Control": "no-store" } }
      );
    }

    const plan = String(data?.plano || "none").toLowerCase();
    const expiresAtRaw = data?.plan_expires_at ?? null;

    const now = new Date();
    const exp = expiresAtRaw ? new Date(expiresAtRaw) : null;

    const notExpired = !!exp && !isNaN(exp.getTime()) && exp > now;
    const planStatus = isPaidPlan(plan) && notExpired ? "active" : "inactive";

    return NextResponse.json(
      {
        authenticated: true,
        cpf,
        plan: isPaidPlan(plan) ? plan : "none",
        planStatus,
        expiresAt: expiresAtRaw,
      },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    console.error("AUTH_SESSION_ERROR:", err);
    return NextResponse.json(
      { authenticated: false, cpf: "", plan: "none", planStatus: "inactive", expiresAt: null },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
