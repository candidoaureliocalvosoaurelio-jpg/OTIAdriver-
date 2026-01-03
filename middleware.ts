// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Rotas públicas (não exigem login nem plano)
 */
function isPublicPath(pathname: string) {
  if (pathname === "/") return true;

  const publicPrefixes = [
    "/entrar",
    "/planos",
    "/checkout",
    "/pagamento",
    "/catalogo",
    "/api/me",
    "/api/auth",
    "/api/webhook",
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml",
    "/images",
    "/fichas-tecnicas",
  ];

  return publicPrefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

/**
 * Rotas protegidas (exigem login; e normalmente exigem plano)
 */
function isProtectedPath(pathname: string) {
  const protectedPrefixes = [
    "/treinamentos",
    "/caminhoes",
    "/simbolos-painel",
    "/ebook-driver",
    "/pneus",
    "/inspecao",
    "/inspecao-manutencao",
    "/caminhoes-eletricos",
  ];

  return protectedPrefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

/**
 * Planos considerados ativos
 */
const ACTIVE_PLANS = new Set(["basico", "pro", "premium", "active"]);

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Cookies
  const auth = req.cookies.get("otia_auth")?.value; // "1"
  const plan = req.cookies.get("otia_plan")?.value; // "basico" | "pro" | "premium" | etc

  const lang = searchParams.get("lang");

  const hasAuth = auth === "1";
  const hasActivePlan = !!plan && ACTIVE_PLANS.has(plan);

  // ✅ MODO INAUGURAÇÃO (OPEN_BETA=1):
  // - Continua exigindo LOGIN nas rotas protegidas
  // - NÃO exige plano ativo nas rotas protegidas (libera após login)
  const openBeta = process.env.OPEN_BETA === "1";

  // 1) Home: se logado e (plano ativo OU openBeta) => /catalogo
  if (pathname === "/") {
    if (hasAuth && (hasActivePlan || openBeta)) {
      const url = req.nextUrl.clone();
      url.pathname = "/catalogo";
      if (lang) url.searchParams.set("lang", lang);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // 2) Rotas públicas
  if (isPublicPath(pathname)) return NextResponse.next();

  // 3) Se não é protegida, passa
  if (!isProtectedPath(pathname)) return NextResponse.next();

  // 4) Protegida: exige login SEMPRE
  if (!hasAuth) {
    const url = req.nextUrl.clone();
    url.pathname = "/entrar";
    if (lang) url.searchParams.set("lang", lang);

    url.searchParams.set("next", pathname + req.nextUrl.search);
    url.searchParams.set("reason", "auth");
    return NextResponse.redirect(url);
  }

  // 5) Protegida: exige plano, EXCETO se OPEN_BETA=1
  if (!openBeta && !hasActivePlan) {
    const url = req.nextUrl.clone();
    url.pathname = "/planos";
    if (lang) url.searchParams.set("lang", lang);

    url.searchParams.set("next", pathname + req.nextUrl.search);
    url.searchParams.set("reason", "paywall");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
