// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isPublicPath(pathname: string) {
  if (pathname === "/") return true;

  const publicPrefixes = [
    "/entrar",
    "/planos",
    "/checkout",
    "/pagamento",
    "/catalogo",
    "/api/me",
    "/api/auth",      // ✅ recomendado
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
    "/pneus",
    "/inspecao",
    "/inspecao-manutencao",
    "/caminhoes-eletricos",
  ];

  return protectedPrefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // 🔁 Premium em "/" vai para o catálogo
  if (pathname === "/") {
    const auth = req.cookies.get("otia_auth")?.value;
    const plan = req.cookies.get("otia_plan")?.value;

    if (auth === "1" && plan === "active") {
      const url = req.nextUrl.clone();
      url.pathname = "/catalogo";
      if (searchParams.get("lang")) url.searchParams.set("lang", searchParams.get("lang")!);
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  // Público -> passa
  if (isPublicPath(pathname)) return NextResponse.next();

  // Se não estiver protegido -> passa
  if (!isProtectedPath(pathname)) return NextResponse.next();

  // 1) Login
  const auth = req.cookies.get("otia_auth")?.value;
  if (auth !== "1") {
    const url = req.nextUrl.clone();
    url.pathname = "/entrar";
    if (searchParams.get("lang")) url.searchParams.set("lang", searchParams.get("lang")!);

    // ✅ preserva query do destino também
    url.searchParams.set("next", req.nextUrl.pathname + req.nextUrl.search);

    return NextResponse.redirect(url);
  }

  // 2) Plano ativo
  const planStatus = req.cookies.get("otia_plan")?.value;
  if (planStatus !== "active") {
    const url = req.nextUrl.clone();
    url.pathname = "/planos";
    if (searchParams.get("lang")) url.searchParams.set("lang", searchParams.get("lang")!);

    // ✅ preserva query do destino também
    url.searchParams.set("next", req.nextUrl.pathname + req.nextUrl.search);

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
