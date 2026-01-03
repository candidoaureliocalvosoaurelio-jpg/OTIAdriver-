import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Rotas que não exigem login nem plano (Públicas)
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
 * Rotas que exigem login e plano ativo (Protegidas)
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
 * LISTA OFICIAL DE PLANOS OTIAdriver
 */
const VALID_PLANS = ["basico", "pro", "premium", "active"];

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Cookies de sessão
  const auth = req.cookies.get("otia_auth")?.value; // "1"
  const planStatus = req.cookies.get("otia_plan_status")?.value; // "active" | "inactive" | undefined

  // helper: preserva lang se existir
  const lang = searchParams.get("lang");

  // 1) Home: se logado + plano ativo => /catalogo
  if (pathname === "/") {
    if (auth === "1" && planStatus === "active") {
      const url = req.nextUrl.clone();
      url.pathname = "/catalogo";
      if (lang) url.searchParams.set("lang", lang);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // 2) Rotas públicas passam direto
  if (isPublicPath(pathname)) return NextResponse.next();

  // 3) Se não é protegida, passa
  if (!isProtectedPath(pathname)) return NextResponse.next();

  // 4) Protegida: exige login
  if (auth !== "1") {
    const url = req.nextUrl.clone();
    url.pathname = "/entrar";
    if (lang) url.searchParams.set("lang", lang);

    // next = rota completa (pathname + query atual)
    url.searchParams.set("next", pathname + req.nextUrl.search);
    url.searchParams.set("reason", "auth");
    return NextResponse.redirect(url);
  }

  // 5) Protegida: exige plano ativo
  if (planStatus !== "active") {
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
