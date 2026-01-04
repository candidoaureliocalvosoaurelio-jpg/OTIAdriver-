// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ACTIVE_PLANS = ["basico", "pro", "premium", "active"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const auth = req.cookies.get("otia_auth")?.value;
  const plan = req.cookies.get("otia_plan")?.value;

  const isAuthenticated = auth === "1";
  const hasActivePlan = plan && ACTIVE_PLANS.includes(plan.toLowerCase());

  // 🔓 REGRA DE OURO: Checkout deve ser público ou exigir apenas login, nunca o plano!
  if (pathname.startsWith("/checkout")) {
    if (!isAuthenticated) {
      const url = req.nextUrl.clone();
      url.pathname = "/entrar";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next(); // Libera o acesso ao Mercado Pago se estiver logado
  }

  // 🛡️ PROTEÇÃO DO CATÁLOGO: Exige login E plano
  if (pathname.startsWith("/catalogo") || pathname.startsWith("/treinamentos")) {
    if (!isAuthenticated) {
      const url = req.nextUrl.clone();
      url.pathname = "/entrar";
      return NextResponse.redirect(url);
    }
    if (!hasActivePlan) {
      const url = req.nextUrl.clone();
      url.pathname = "/planos";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/catalogo/:path*", "/checkout/:path*", "/treinamentos/:path*"],
};
