import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const auth = req.cookies.get("otia_auth")?.value;
  const plan = req.cookies.get("otia_plan")?.value;

  // 🔓 LIBERAÇÃO PARA VENDER: O Checkout NUNCA é bloqueado
  if (pathname.startsWith("/checkout")) {
    return NextResponse.next();
  }

  // 🛡️ PROTEÇÃO DO CONTEÚDO (Catálogo, Treinamentos, Pneus)
  if (pathname.startsWith("/catalogo") || pathname.startsWith("/treinamentos") || pathname.startsWith("/pneus")) {
    // 1. Se não estiver logado, manda para o login
    if (auth !== "1") {
      return NextResponse.redirect(new URL("/entrar", req.url));
    }
    // 2. Se logado mas sem plano (ou plano 'none'), manda para escolher planos
    if (!plan || plan === "none" || plan === "") {
      return NextResponse.redirect(new URL("/planos", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/catalogo/:path*", "/checkout/:path*", "/treinamentos/:path*", "/pneus/:path*"],
};
