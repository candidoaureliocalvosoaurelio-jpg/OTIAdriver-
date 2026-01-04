// app/api/me/sync/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) throw new Error("Configurações do Supabase ausentes.");
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}

function normalizePlan(v?: string | null) {
  return String(v || "").trim().toLowerCase();
}

function cookieBase() {
  const isProd = process.env.NODE_ENV === "production";
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 dias
    secure: isProd,
    domain: isProd ? ".otiadriver.com.br" : undefined,
  };
}

export async function POST() {
  try {
    const cookieStore = cookies();
    const cpf = cookieStore.get("otia_cpf")?.value || "";

    if (!cpf) {
      return NextResponse.json({ ok: false, reason: "not_authenticated" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("profiles")
      .select("plano")
      .eq("cpf", cpf)
      .maybeSingle();

    if (error) {
      return NextResponse.json({ ok: false, reason: "db_error" }, { status: 500 });
    }

    const planoDoBanco = normalizePlan(data?.plano);

    const paidPlans = new Set(["basico", "pro", "premium", "active"]);
    const planStatus = paidPlans.has(planoDoBanco) ? "active" : "inactive";

    const res = NextResponse.json({
      ok: true,
      plano: planoDoBanco || "none",
      status: planStatus,
    });

    const base = cookieBase();

    res.cookies.set("otia_plan", planoDoBanco || "none", base);
    res.cookies.set("otia_plan_status", planStatus, base);

    return res;
  } catch (e) {
    console.error("ME_SYNC_ERROR:", e);
    return NextResponse.json({ ok: false, reason: "server_error" }, { status: 500 });
  }
}
