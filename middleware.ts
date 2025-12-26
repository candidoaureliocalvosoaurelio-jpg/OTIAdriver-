// middleware.ts
import { NextRequest, NextResponse } from "next/server";

// Conteúdo premium (bloqueado)
const PAID_PREFIXES = ["/app", "/premium"];

// Se um dia você quiser rotas que exigem apenas login (sem plano)
const AUTH_ONLY_PREFIXES: string[] = [];

function matchesPrefix(pathname: string, prefixes: string[]) {
  return prefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Ignora arquivos e rotas do Next
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

  const needsPaid = matchesPrefix(pathname, PAID_PREFIXES);
  const needsAuth = matchesPrefix(pathname, AUTH_ONLY_PREFIXES);

  // Catálogo (público): /treinamentos
  // Conteúdo premium: /app/treinamentos/...
  if (!needsPaid && !needsAuth) return NextResponse.next();

  const auth = req.cookies.get("otia_auth")?.value; // "1"
  const plan = req.cookies.get("otia_plan")?.value; // "active" | "inactive"

  // 1) Precisa login
  if (!auth) {
    const url = req.nextUrl.clone();
    url.pathname = "/entrar";
    url.searchParams.set("next", pathname + search);
    url.searchParams.set("reason", "auth");
    return NextResponse.redirect(url);
  }

  // 2) Precisa plano
  if (needsPaid && plan !== "active") {
    const url = req.nextUrl.clone();
    url.pathname = "/planos";
    url.searchParams.set("reason", "paywall");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
