// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isPublicPath(pathname: string) {
  // OBS: "/" é público, mas vamos tratar o redirect do premium ANTES disso no middleware()
  if (pathname === "/") return true;

  const publicPrefixes = [
    "/entrar",
    "/planos",
    "/checkout",
    "/pagamento",
    "/catalogo", // ✅ início real da plataforma (espelho controlado pela página)
    "/api/me",   // ✅ libera /api/me/sync
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

    // ✅ rotas que estavam abertas (ajuste os slugs conforme seu projeto)
    "/pneus",
    "/inspecao",
    "/inspecao-manutencao",
    "/caminhoes-eletricos",
  ];

  return protectedPrefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // 🔁 Se usuário logado + plano ativo acessar "/" → manda para /catalogo
  // (resolve o "voltar" cair na vitrine)
  if (pathname === "/") {
    const auth = req.cookies.get("otia_auth")?.value; // "1"
    const plan = req.cookies.get("otia_plan")?.value; // "active" | "inactive"

    if (auth === "1" && plan === "active") {
      const url = req.nextUrl.clone();
      url.pathname = "/catalogo";
      // preserva lang se existir na URL da home
      if (searchParams.get("lang")) url.searchParams.set("lang", searchParams.get("lang")!);
      return NextResponse.redirect(url);
    }

    // visitante (ou sem plano) continua vendo a vitrine
    return NextResponse.next();
  }

  // Público -> passa
  if (isPublicPath(pathname)) return NextResponse.next();

  // Se não estiver na lista de protegidas -> passa
  if (!isProtectedPath(pathname)) return NextResponse.next();

  // 1) Verifica login (alinhado com verify-otp)
  const auth = req.cookies.get("otia_auth")?.value; // "1"
  if (auth !== "1") {
    const url = req.nextUrl.clone();
    url.pathname = "/entrar";
    if (searchParams.get("lang")) url.searchParams.set("lang", searchParams.get("lang")!);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  // 2) Verifica plano ativo
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
