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
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) throw new Error("Configurações do Supabase ausentes.");
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
    // ✅ sem domain
  };
}

export async function POST() {
  try {
    const cookieStore = cookies();
    const cpfRaw = cookieStore.get("otia_cpf")?.value || "";
    const cpf = onlyDigits(cpfRaw);

    // Precisa de CPF válido para sincronizar
    if (cpf.length !== 11) {
      return NextResponse.json({ ok: false, reason: "not_authenticated" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();

    // ✅ Para faturar AGORA: se no banco estiver com qualquer plano pago, libera TUDO
    // (Opcionalmente, você pode checar plan_expires_at depois; agora vamos simplificar.)
    const { data, error } = await supabase
      .from("profiles")
      .select("plano")
      .eq("cpf", cpf)
      .maybeSingle();

    if (error) {
      return NextResponse.json({ ok: false, reason: "db_error" }, { status: 500 });
    }

    const planoDoBanco = String(data?.plano || "").trim().toLowerCase();
    const paidPlans = new Set(["basico", "pro", "premium", "active"]);

    const isPaid = paidPlans.has(planoDoBanco);

    // 🔥 MODO FATURAMENTO: pagou = acesso total
    const planoFinal = isPaid ? "premium" : "none";
    const planStatus = isPaid ? "active" : "inactive";

    const res = NextResponse.json(
      { ok: true, plano: planoFinal, status: planStatus },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );

    const base = cookieBase();

    // ✅ garante sessão "logada" no servidor
    res.cookies.set("otia_auth", "1", base);
    res.cookies.set("otia_cpf", cpf, base);

    // ✅ libera acesso total
    res.cookies.set("otia_plan", planoFinal, base);
    res.cookies.set("otia_plan_status", planStatus, base);

    return res;
  } catch (e) {
    console.error("ME_SYNC_ERROR:", e);
    return NextResponse.json({ ok: false, reason: "server_error" }, { status: 500 });
  }
}
