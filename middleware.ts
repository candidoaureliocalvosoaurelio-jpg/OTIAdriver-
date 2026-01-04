import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ACTIVE_PLANS = ["basico", "pro", "premium", "active"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const auth = req.cookies.get("otia_auth")?.value;
  const plan = req.cookies.get("otia_plan")?.value;

  const isAuthenticated = auth === "1";
  const hasActivePlan = plan && ACTIVE_PLANS.includes(plan.toLowerCase());

  // SOLUÇÃO: Se for CHECKOUT, exige apenas LOGIN, nunca PLANO
  if (pathname.startsWith("/checkout")) {
    if (!isAuthenticated) {
      const url = req.nextUrl.clone();
      url.pathname = "/entrar";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next(); // Libera para o Mercado Pago
  }

  // PROTEÇÃO DO CATÁLOGO: Aqui sim exige ambos
  if (pathname.startsWith("/catalogo") || pathname.startsWith("/treinamentos")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/entrar", req.url));
    }
    if (!hasActivePlan) {
      return NextResponse.redirect(new URL("/planos", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/catalogo/:path*", "/checkout/:path*", "/treinamentos/:path*"],
};
