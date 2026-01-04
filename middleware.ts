// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Rotas públicas (não exigem login nem plano)
 * ✅ Checkout é público (o checkout decide via /api/auth/session)
 * ✅ /api/pagamentos é público para criar preferência
 */
function isPublicPath(pathname: string) {
  if (pathname === "/") return true;

  const publicPrefixes = [
    "/entrar",
    "/planos",

    // checkout e retornos do pagamento
    "/checkout",
    "/pagamento",

    // áreas públicas
    "/catalogo",

    // APIs
    "/api/me",
    "/api/auth",
    "/api/pagamentos",
    "/api/webhook",

    // Assets / estáticos
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

const ACTIVE_PLANS = new Set(["basico", "pro", "premium", "active"]);

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();

  // ✅ 0) Em produção, forçar www (isso estabiliza cookies e fluxo)
  if (process.env.NODE_ENV === "production") {
    if (host === "otiadriver.com.br") {
      url.host = "www.otiadriver.com.br";
      url.protocol = "https:";
      return NextResponse.redirect(url, 308);
    }
  }

  const { pathname, searchParams } = req.nextUrl;

  const auth = req.cookies.get("otia_auth")?.value; // "1"
  const plan = req.cookies.get("otia_plan")?.value; // "basico" | "pro" | "premium" | etc

  const lang = searchParams.get("lang");

  const hasAuth = auth === "1";
  const hasActivePlan = !!plan && ACTIVE_PLANS.has(plan);

  // Se você usa esse modo:
  const openBeta = process.env.OPEN_BETA === "1";

  // 1) Home: se logado e (plano ativo OU openBeta) => /catalogo
  if (pathname === "/") {
    if (hasAuth && (hasActivePlan || openBeta)) {
      const go = req.nextUrl.clone();
      go.pathname = "/catalogo";
      if (lang) go.searchParams.set("lang", lang);
      return NextResponse.redirect(go);
    }
    return NextResponse.next();
  }

  // 2) Rotas públicas passam
  if (isPublicPath(pathname)) return NextResponse.next();

  // 3) Se não é protegida, passa
  if (!isProtectedPath(pathname)) return NextResponse.next();

  // 4) Protegida: exige login
  if (!hasAuth) {
    const go = req.nextUrl.clone();
    go.pathname = "/entrar";
    if (lang) go.searchParams.set("lang", lang);
    go.searchParams.set("next", pathname + req.nextUrl.search);
    go.searchParams.set("reason", "auth");
    return NextResponse.redirect(go);
  }

  // 5) Protegida: exige plano (exceto open beta)
  if (!openBeta && !hasActivePlan) {
    const go = req.nextUrl.clone();
    go.pathname = "/planos";
    if (lang) go.searchParams.set("lang", lang);
    go.searchParams.set("next", pathname + req.nextUrl.search);
    go.searchParams.set("reason", "paywall");
    return NextResponse.redirect(go);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
