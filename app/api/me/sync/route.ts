import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Configuração do cliente administrativo do Supabase
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) throw new Error("Configurações do Supabase ausentes.");
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

function normalizePlan(v?: string | null) {
  const p = String(v || "").trim().toLowerCase();
  return p;
}

export async function POST() {
  try {
    const cookieStore = cookies();
    const cpf = cookieStore.get("otia_cpf")?.value;

    // Verifica se o usuário está autenticado pelo CPF no cookie
    if (!cpf) {
      return NextResponse.json(
        { ok: false, reason: "not_authenticated" },
        { status: 401 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Busca o plano real cadastrado no banco de dados para este CPF
    // (Se você tiver expiração: selecione também "plan_expires_at")
    const { data, error } = await supabase
      .from("profiles")
      .select("plano")
      .eq("cpf", cpf)
      .single();

    if (error) {
      return NextResponse.json(
        { ok: false, reason: "db_error" },
        { status: 500 }
      );
    }

    const planoDoBanco = normalizePlan(data?.plano);

    // Define quais valores contam como plano pago (libera conteúdo)
    const paidPlans = new Set(["basico", "pro", "premium", "active"]);
    const planStatus = paidPlans.has(planoDoBanco) ? "active" : "inactive";

    // Resposta
    const res = NextResponse.json({
      ok: true,
      plano: planoDoBanco || "none",
      status: planStatus,
    });

    const cookieBase = {
      httpOnly: true,
      sameSite: "lax" as const,
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      secure: process.env.NODE_ENV === "production",
    };

    /**
     * ✅ Cookie do "nome do plano" (UI/Header)
     * basico | pro | premium | none
     */
    res.cookies.set("otia_plan", planoDoBanco || "none", cookieBase);

    /**
     * ✅ Cookie de "status" (Middleware)
     * active | inactive
     */
    res.cookies.set("otia_plan_status", planStatus, cookieBase);

    return res;
  } catch (e) {
    console.error("Erro no /api/me/sync:", e);
    return NextResponse.json({ ok: false, reason: "server_error" }, { status: 500 });
  }
}
