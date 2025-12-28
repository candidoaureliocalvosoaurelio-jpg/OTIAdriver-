// middleware.ts
import { NextRequest, NextResponse } from "next/server";

// Rotas pagas (bloqueadas sem plano)
const PAID_PREFIXES = [
  "/app",
  "/premium",

  // BLOQUEAR ATÉ PAGAR:
  "/caminhoes-eletricos",
  "/pneus",
  "/inspecao-manutencao",
  "/treinamentos",
  "/simbolos-painel",
  "/ebook-driver",
];

// Rotas que exigem apenas login (se um dia quiser)
const AUTH_ONLY_PREFIXES: string[] = [];

// Planos pagos (ativos)
const ACTIVE_PLANS = new Set(["basico", "pro", "premium"]);

function matchesPrefix(pathname: string, prefixes: string[]) {
  return prefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Libera rotas públicas importantes (evita loop)
  if (pathname.startsWith("/entrar") || pathname.startsWith("/planos")) {
    return NextResponse.next();
  }

  // Ignora arquivos e rotas do Next / assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/simbolos") ||
    pathname.startsWith("/fichas-tecnicas")
  ) {
    return NextResponse.next();
  }

  const needsPaid = matchesPrefix(pathname, PAID_PREFIXES);
  const needsAuth = matchesPrefix(pathname, AUTH_ONLY_PREFIXES);

  // Se não exige nada, libera
  if (!needsPaid && !needsAuth) return NextResponse.next();

  const auth = req.cookies.get("otia_auth")?.value; // "1"
  const cpf = req.cookies.get("otia_cpf")?.value; // "62833030134"
  const plan = req.cookies.get("otia_plan")?.value; // "free" | "basico" | "pro" | "premium"

  // 1) Precisa login
  if (!auth || !cpf) {
    const url = req.nextUrl.clone();
    url.pathname = "/entrar";
    url.searchParams.set("next", pathname + search);
    url.searchParams.set("reason", "auth");
    return NextResponse.redirect(url);
  }

  // 2) Precisa plano pago (basico/pro/premium)
  if (needsPaid && !ACTIVE_PLANS.has(plan ?? "")) {
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
