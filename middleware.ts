import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Rotas que não exigem verificação de plano ou login.
 * Inclui o checkout para permitir que o usuário inicie o pagamento.
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
    "/api/pagamentos",
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
 * Rotas que exigem obrigatoriamente login e plano ativo.
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

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  const host = (req.headers.get("host") || "").toLowerCase();
  const hostNoPort = host.split(":")[0];
  const isApi = pathname.startsWith("/api/");
  const isWebhook = pathname.startsWith("/api/webhook/");

  // 1) Ignorar assets internos do Next.js e arquivos estáticos
  if (pathname.startsWith("/_next") || pathname.includes("/static")) {
    return NextResponse.next();
  }

  // 2) Normalização de Domínio (Forçar WWW em produção)
  // Fazemos isso ANTES da verificação de autenticação para evitar inconsistência de cookies
  
  if (pathname === "/") {
  // ✅ se veio do checkout, NÃO intercepta
  const fromCheckout = searchParams.get("from") === "checkout=1";

  if (!fromCheckout && hasAuth && (hasActivePlan || openBeta)) {
    const go = req.nextUrl.clone();
    go.pathname = "/catalogo";
    if (lang) go.searchParams.set("lang", lang);
    return NextResponse.redirect(go);
  }

  return NextResponse.next();
}

  // Captura dos Cookies de Sessão
  const auth = req.cookies.get("otia_auth")?.value; 
  const planStatus = req.cookies.get("otia_plan_status")?.value;
  const plan = req.cookies.get("otia_plan")?.value;

  const hasAuth = auth === "1";
  const hasActivePlan =
    planStatus === "active" || 
    ["basico", "pro", "premium", "active"].includes(String(plan || "").toLowerCase());
  
  const openBeta = process.env.OPEN_BETA === "1";
  const lang = searchParams.get("lang");

  // 3) Redirecionamento da Home (/) para usuários já ativos
  if (pathname === "/") {
    if (hasAuth && (hasActivePlan || openBeta)) {
      const go = req.nextUrl.clone();
      go.pathname = "/catalogo";
      if (lang) go.searchParams.set("lang", lang);
      return NextResponse.redirect(go);
    }
    return NextResponse.next();
  }

  // 4) Liberar Rotas Públicas (Checkout, APIs de autenticação, etc)
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // 5) Verificação de Rotas Protegidas
  if (isProtectedPath(pathname)) {
    // Se não estiver logado -> Login
    if (!hasAuth) {
      const go = req.nextUrl.clone();
      go.pathname = "/entrar";
      if (lang) go.searchParams.set("lang", lang);
      go.searchParams.set("next", pathname + req.nextUrl.search);
      go.searchParams.set("reason", "auth");
      return NextResponse.redirect(go);
    }

    // Se logado mas sem plano -> Planos (bloqueio por paywall)
    if (!openBeta && !hasActivePlan) {
      const go = req.nextUrl.clone();
      go.pathname = "/planos";
      if (lang) go.searchParams.set("lang", lang);
      go.searchParams.set("next", pathname + req.nextUrl.search);
      go.searchParams.set("reason", "paywall");
      return NextResponse.redirect(go);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
