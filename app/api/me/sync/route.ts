import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Configuração do cliente administrativo do Supabase
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

export async function POST() {
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
  const { data, error } = await supabase
    .from("profiles")
    .select("plano")
    .eq("cpf", cpf)
    .single();

  // Se houver erro ou plano não encontrado, retorna erro
  if (error || !data?.plano) {
    return NextResponse.json(
      { ok: false, reason: "no_plan" },
      { status: 404 }
    );
  }

  const planoDoBanco = data.plano; // Ex: 'premium', 'basico' ou 'pro'

  // Prepara a resposta de sucesso enviando o plano para o frontend
  const res = NextResponse.json({ ok: true, plano: planoDoBanco });

  /**
   * 🔐 ATUALIZAÇÃO DO COOKIE
   * Agora o cookie 'otia_plan' recebe o valor real do banco de dados.
   * Isso permite que o Header mude as cores e nomes automaticamente.
   */
  res.cookies.set("otia_plan", planoDoBanco, {
    httpOnly: true,
    secure: true, // Apenas em conexões HTTPS
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // Expiração de 30 dias para o cookie
  });

  return res;
}
