// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isPublicPath(pathname: string) {
  // rotas públicas (ajuste conforme seu projeto)
  if (pathname === "/") return true;

  const publicPrefixes = [
    "/entrar",
    "/planos",
    "/checkout",
    "/pagamento",
    "/api/webhook",
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
  ];
  return protectedPrefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Se for público, deixa passar
  if (isPublicPath(pathname)) return NextResponse.next();

  // Se não for área protegida, deixa passar (ou trate como protegido por padrão, se preferir)
  if (!isProtectedPath(pathname)) return NextResponse.next();

  // 1) Verifica se está logado
  const session = req.cookies.get("otia_session")?.value; // você vai criar esse cookie no login
  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = "/entrar";
    // mantém o lang se existir
    if (searchParams.get("lang")) url.searchParams.set("lang", searchParams.get("lang")!);
    // guarda pra voltar depois
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  // 2) Verifica se tem assinatura ativa
  const planStatus = req.cookies.get("otia_plan")?.value; // "active" | "inactive"
  if (planStatus !== "active") {
    const url = req.nextUrl.clone();
    url.pathname = "/planos";
    if (searchParams.get("lang")) url.searchParams.set("lang", searchParams.get("lang")!);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // roda em tudo, exceto arquivos estáticos do Next
  matcher: ["/((?!_next/static|_next/image).*)"],
};
