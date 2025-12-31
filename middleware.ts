import { NextRequest, NextResponse } from "next/server";

/**
 * ROTAS LIBERADAS PARA PLANO BÁSICO
 */
const BASIC_ALLOWED = [
  "/caminhoes",     // Página Início dos caminhões
  "/treinamentos",  // Página de Treinamentos
  "/pneus",         // Página dos Pneus
];

/**
 * ROTAS PÚBLICAS (sempre acessíveis, sem login)
 */
const PUBLIC_PREFIXES = [
  "/",
  "/entrar",
  "/planos",
  "/pagamento",
  "/api", // Permite chamadas de API (Webhooks, etc)
];

const ACTIVE_PLANS = new Set(["basico", "pro", "premium"]);

function matchesPrefix(pathname: string, prefixes: string[]) {
  return prefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // 1. Ignorar arquivos estáticos e imagens
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".") || 
    pathname.startsWith("/images") ||
    pathname.startsWith("/simbolos")
  ) {
    return NextResponse.next();
  }

  // 2. Liberar Rotas Públicas
  if (matchesPrefix(pathname, PUBLIC_PREFIXES)) {
    return NextResponse.next();
  }

  // 3. Verificar Cookies de Sessão
  const auth = req.cookies.get("otia_auth")?.value;
  const cpf = req.cookies.get("otia_cpf")?.value;
  const plan = req.cookies.get("otia_plan")?.value; // basico | pro | premium

  // 4. Se não estiver logado -> Redireciona para login
  if (!auth || !cpf) {
    const url = req.nextUrl.clone();
    url.pathname = "/entrar";
    url.searchParams.set("next", pathname + search);
    return NextResponse.redirect(url);
  }

  // 5. Se não tem plano ativo -> Redireciona para escolher plano
  if (!ACTIVE_PLANS.has(plan ?? "")) {
    const url = req.nextUrl.clone();
    url.pathname = "/planos";
    return NextResponse.redirect(url);
  }

  // 6. REGRA PLANO PRO / PREMIUM (Acesso Completo)
  // Ambos os planos agora possuem acesso irrestrito às rotas privadas
  if (plan === "pro" || plan === "premium") {
    return NextResponse.next(); // Libera todas as rotas para ambos
  }

  // 7. REGRA PLANO BÁSICO (Restrito)
  if (plan === "basico") {
    // Se a rota está na lista permitida, libera
    if (matchesPrefix(pathname, BASIC_ALLOWED)) {
      return NextResponse.next();
    }

    // Se tentar acessar conteúdo exclusivo (ex: /app), redireciona para upgrade
    const url = req.nextUrl.clone();
    url.pathname = "/planos";
    url.searchParams.set("reason", "upgrade"); 
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
