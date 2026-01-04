import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const auth = req.cookies.get("otia_auth")?.value;
  const plan = req.cookies.get("otia_plan")?.value;

  // 🔓 REGRA DE OURO PARA FATURAR: 
  // O checkout não pode exigir plano. Se ele exigir plano, o botão de pagar nunca funciona!
  if (pathname.startsWith("/checkout")) {
    if (auth !== "1") {
      const url = req.nextUrl.clone();
      url.pathname = "/entrar";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    // Se estiver logado (auth === "1"), LIBERA O MERCADO PAGO IMEDIATAMENTE
    return NextResponse.next();
  }

  // 🛡️ PROTEÇÃO DO CONTEÚDO (Catálogo, Treinamentos, etc.)
  if (pathname.startsWith("/catalogo") || pathname.startsWith("/treinamentos") || pathname.startsWith("/pneus")) {
    if (auth !== "1") {
      return NextResponse.redirect(new URL("/entrar", req.url));
    }
    // Se estiver logado mas o plano for "none", aí sim manda para /planos
    if (!plan || plan === "none") {
      return NextResponse.redirect(new URL("/planos", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/catalogo/:path*", "/checkout/:path*", "/treinamentos/:path*", "/pneus/:path*"],
};
