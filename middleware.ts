// middleware.ts
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

    // APIs públicas
    "/api/me",
    "/api/auth",
    "/api/pagamentos",
    "/api/webhook",

    // Assets
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml",
    "/images",
    "/fichas-tecnicas",
  ];

  return publicPrefixes.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
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

  return protectedPrefixes.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
}

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  const host = (req.headers.get("host") || "").toLowerCase();
  const hostNoPort = host.split(":")[0];

  const isApi = pathname.startsWith("/api/");
  const isWebhook = pathname.startsWith("/api/webhook/");

  // 1) Ignorar assets internos do Next.js
  if (pathname.startsWith("/_next") || pathname.includes("/static")) {
    return NextResponse.next();
  }

  // 2) Normalização de domínio (forçar www em produção)
  if (
    process.env.NODE_ENV === "production" &&
    hostNoPort === "otiadriver.com.br" &&
    !isApi &&
    !isWebhook
  ) {
    const url = req.nextUrl.clone();
    url.host = "www.otiadriver.com.br";
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  // Cookies de sessão
  const auth = req.cookies.get("otia_auth")?.value;
  const planStatus = req.cookies.get("otia_plan_status")?.value;
  const plan = req.cookies.get("otia_plan")?.value;

  const hasAuth = auth === "1";
  const hasActivePlan =
    planStatus === "active" ||
    ["basico", "pro", "premium", "active"].includes(
      String(plan || "").toLowerCase()
    );

  const openBeta = process.env.OPEN_BETA === "1";
  const lang = searchParams.get("lang");

  // 3) 🔥 HOME (/) — NÃO interceptar quando vier do checkout
  if (pathname === "/") {
    const fromCheckout =
      searchParams.get("from") === "checkout" ||
      searchParams.get("fc") === "1";

    // ✅ Só redireciona para /catalogo se NÃO vier do checkout
    if (!fromCheckout && hasAuth && (hasActivePlan || openBeta)) {
      const go = req.nextUrl.clone();
      go.pathname = "/catalogo";
      if (lang) go.searchParams.set("lang", lang);
      return NextResponse.redirect(go);
    }

    return NextResponse.next();
  }

  // 4) Rotas públicas passam direto
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // 5) Rotas protegidas
  if (isProtectedPath(pathname)) {
    // 5.1) Não autenticado → login
    if (!hasAuth) {
      const go = req.nextUrl.clone();
      go.pathname = "/entrar";
      if (lang) go.searchParams.set("lang", lang);
      go.searchParams.set("next", pathname + req.nextUrl.search);
      go.searchParams.set("reason", "auth");
      return NextResponse.redirect(go);
    }

    // 5.2) Autenticado sem plano → paywall
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
