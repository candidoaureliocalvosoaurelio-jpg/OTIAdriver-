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
 * Agora inclui todos os prefixos necessários para as marcas de caminhões
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
 * O middleware aceitará qualquer um destes valores no cookie 'otia_plan'
 */
const VALID_PLANS = ["basico", "pro", "premium", "active"];

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  
  // Recuperação dos cookies de sessão
  const auth = req.cookies.get("otia_auth")?.value;
  const planStatus = req.cookies.get("otia_plan")?.value;

  // 1) Redirecionamento da Home para o Catálogo se já estiver logado e com plano
  if (pathname === "/") {
    if (auth === "1" && VALID_PLANS.includes(planStatus || "")) {
      const url = req.nextUrl.clone();
      url.pathname = "/catalogo";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // 2) Liberar rotas públicas imediatamente
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // 3) Verificar proteção de rotas de conteúdo (Caminhões, Treinamentos, etc.)
  if (isProtectedPath(pathname)) {
    
    // A) Bloqueio por falta de Login: Se não houver cookie de auth, vai para /entrar
    if (auth !== "1") {
      const url = req.nextUrl.clone();
      url.pathname = "/entrar";
      // Preserva a página que o usuário tentou acessar para voltar depois do login
      url.searchParams.set("next", pathname + req.nextUrl.search);
      url.searchParams.set("reason", "auth");
      return NextResponse.redirect(url);
    }

    // B) Bloqueio por falta de Plano Ativo:
    // Se o plano gravado (basico, pro, ou premium) não for reconhecido, vai para /planos
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
  // O matcher evita que o middleware rode em arquivos de sistema e imagens otimizadas
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
