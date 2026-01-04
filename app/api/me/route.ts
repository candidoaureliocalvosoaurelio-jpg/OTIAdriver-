import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Esta rota informa ao sistema se o motorista está logado e qual seu plano real.
 * Removemos a conversão para "active" para evitar loops de login.
 */
export async function GET() {
  const cookieStore = cookies();

  // 1. Busca os cookies brutos gravados no navegador
  const auth = cookieStore.get("otia_auth")?.value;
  const plan = cookieStore.get("otia_plan")?.value; // premium | pro | basico | none

  const authenticated = auth === "1";

  // 2. Retorna a resposta limpa para o front-end e middleware
  const res = NextResponse.json({
    authenticated,
    plan: authenticated ? (plan || "none") : "none",
  });

  // 3. Cabeçalhos rigorosos para evitar que o navegador use um login antigo (cache)
  res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.headers.set("Pragma", "no-cache");
  res.headers.set("Expires", "0");

  return res;
}
