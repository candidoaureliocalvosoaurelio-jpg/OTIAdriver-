import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { hostname, pathname } = url;

  // ✅ FORÇA WWW SEM EXCEÇÕES
  if (hostname === "otiadriver.com.br") {
    const newUrl = url.clone();
    newUrl.hostname = "www.otiadriver.com.br";
    return NextResponse.redirect(newUrl, 308);
  }

  // (o resto da sua lógica continua aqui)
  const auth = req.cookies.get("otia_auth")?.value;
  const plan = req.cookies.get("otia_plan")?.value;

  if (pathname.startsWith("/checkout")) {
    if (auth !== "1") {
      const nextUrl = req.nextUrl.clone();
      nextUrl.pathname = "/entrar";
      nextUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(nextUrl);
    }
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/catalogo") ||
    pathname.startsWith("/treinamentos") ||
    pathname.startsWith("/pneus")
  ) {
    if (auth !== "1") {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/entrar";
      loginUrl.searchParams.set("reason", "auth");
      return NextResponse.redirect(loginUrl);
    }

    if (!plan || plan === "none") {
      const planosUrl = req.nextUrl.clone();
      planosUrl.pathname = "/planos";
      planosUrl.searchParams.set("reason", "paywall");
      return NextResponse.redirect(planosUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
