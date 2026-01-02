import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Rotas que não exigem login nem plano
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
 * Rotas que exigem login e plano ativo
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

// Lista de valores aceitos como "plano válido"
const VALID_PLANS = ["basico", "pro", "premium", "active"];

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  const auth = req.cookies.get("otia_auth")?.value;
  const planStatus = req.cookies.get("otia_plan")?.value;

  // 1) Redirecionamento da Home para o Catálogo se já estiver logado e ativo
  if (pathname === "/") {
    if (auth === "1" && VALID_PLANS.includes(planStatus || "")) {
      const url = req.nextUrl.clone();
      url.pathname = "/catalogo";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // 2) Liberar rotas públicas (Imagens, Login, API Auth, etc)
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // 3) Verificar proteção de rotas de conteúdo
  if (isProtectedPath(pathname)) {
    
    // A) Bloqueio por falta de Login
    if (auth !== "1") {
      const url = req.nextUrl.clone();
      url.pathname = "/entrar";
      url.searchParams.set("next", pathname + req.nextUrl.search);
      url.searchParams.set("reason", "auth");
      return NextResponse.redirect(url);
    }

    // B) Bloqueio por falta de Plano Ativo
    // Se o cookie otia_plan não estiver na lista de válidos, manda para /planos
    if (!VALID_PLANS.includes(planStatus || "")) {
      const url = req.nextUrl.clone();
      url.pathname = "/planos";
      url.searchParams.set("next", pathname + req.nextUrl.search);
      url.searchParams.set("reason", "paywall");
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Executa em tudo exceto arquivos estáticos internos do Next.js
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
