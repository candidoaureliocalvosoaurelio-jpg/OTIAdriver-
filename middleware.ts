// middleware.ts
import { NextRequest, NextResponse } from "next/server";

// Rotas que exigem LOGIN + PLANO ATIVO
const PAID_PREFIXES = ["/app", "/treinamentos", "/premium"];

// Rotas que exigem apenas LOGIN (se você quiser depois, por enquanto não usamos)
const AUTH_ONLY_PREFIXES: string[] = [];

function isProtectedPaid(pathname: string) {
  return PAID_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

function isAuthOnly(pathname: string) {
  return AUTH_ONLY_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Ignora arquivos e rotas do Next (garante que não quebra nada)
  // (matcher abaixo também ajuda, mas aqui é proteção extra)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/simbolos") ||
    pathname.startsWith("/fichas-tecnicas") ||
    pathname.startsWith("/public")
  ) {
    return NextResponse.next();
  }

  // Só aplica regras se for rota protegida
  const needsPaid = isProtectedPaid(pathname);
  const needsAuth = isAuthOnly(pathname);

  if (!needsPaid && !needsAuth) {
    return NextResponse.next();
  }

  // Cookies que vamos usar como "sinal"
  const auth = req.cookies.get("otia_auth")?.value; // "1"
  const plan = req.cookies.get("otia_plan")?.value; // "active" | "inactive"

  // 1) Se precisa login e não tem login -> manda para /entrar
  if (!auth) {
    const url = req.nextUrl.clone();
    url.pathname = "/entrar";
    url.searchParams.set("next", pathname + search);
    url.searchParams.set("reason", "auth");
    return NextResponse.redirect(url);
  }

  // 2) Se precisa plano ativo e não está active -> manda para /planos
  if (needsPaid && plan !== "active") {
    const url = req.nextUrl.clone();
    url.pathname = "/planos";
    url.searchParams.set("reason", "paywall");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// IMPORTANTÍSSIMO: não aplicar em /api, nem em arquivos estáticos
export const config = {
  matcher: [
    // aplica em todas rotas, exceto:
    // - /api
    // - /_next
    // - arquivos com extensão (.png, .jpg, .css, .js, etc.)
    "/((?!api|_next|.*\\..*).*)",
  ],
};
