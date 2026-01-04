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

  // ✅ 0) Em produção, forçar www (estabiliza cookies e fluxo no celular)
  // Mas NÃO redirecionar webhooks/APIs (evita quebrar chamadas server-to-server).
  const host = (req.headers.get("host") || "").toLowerCase();
  const hostNoPort = host.split(":")[0];

  const isApi = pathname.startsWith("/api/");
  const isWebhook = pathname.startsWith("/api/webhook/");

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

  // Cookies
  const auth = req.cookies.get("otia_auth")?.value; // "1"
  const planStatus = req.cookies.get("otia_plan_status")?.value; // "active" | "inactive"
  const plan = req.cookies.get("otia_plan")?.value; // fallback (basico|pro|premium|none)

  const lang = searchParams.get("lang");

  const hasAuth = auth === "1";
  const hasActivePlan =
    planStatus === "active" || ["basico", "pro", "premium", "active"].includes(String(plan || "").toLowerCase());

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
