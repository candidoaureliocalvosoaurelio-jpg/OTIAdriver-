import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 1. Defina exatamente quais planos liberam o site
const ACTIVE_PLANS = ["basico", "pro", "premium", "active"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 2. Busque os cookies (o navegador agora vai enviar porque mudamos para secure: false)
  const auth = req.cookies.get("otia_auth")?.value;
  const plan = req.cookies.get("otia_plan")?.value;

  const isAuthenticated = auth === "1";
  const hasActivePlan = plan && ACTIVE_PLANS.includes(plan);

  // 3. LÃ³gica de ProteÃ§Ã£o
  // Se tentar entrar no catÃ¡logo ou checkout sem estar logado
  if (pathname.startsWith("/catalogo") || pathname.startsWith("/checkout")) {
    if (!isAuthenticated) {
      const url = req.nextUrl.clone();
      url.pathname = "/entrar";
      url.searchParams.set("reason", "auth");
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }

    // Se estiver logado mas o plano nÃ£o for reconhecido
    if (!hasActivePlan) {
      const url = req.nextUrl.clone();
      url.pathname = "/planos";
      url.searchParams.set("reason", "no_plan");
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/catalogo/:path*",
    "/checkout/:path*",
    "/treinamentos/:path*",
  ],
};
