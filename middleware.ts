import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { hostname, pathname } = url;

  // 🔁 Força WWW
  if (hostname === "otiadriver.com.br") {
    const newUrl = url.clone();
    newUrl.hostname = "www.otiadriver.com.br";
    return NextResponse.redirect(newUrl, 308);
  }

  const auth = req.cookies.get("otia_auth")?.value || "";
  const plan = req.cookies.get("otia_plan")?.value || "none";

  // 🔓 Checkout: só exige login (para pagar)
  if (pathname.startsWith("/checkout")) {
    if (auth !== "1") {
      const nextUrl = req.nextUrl.clone();
      nextUrl.pathname = "/entrar";
      return NextResponse.redirect(nextUrl);
    }
    return NextResponse.next();
  }

  // 🛡️ Conteúdo da plataforma (só entra quem PAGOU)
  const isProtected =
    pathname.startsWith("/catalogo") ||
    pathname.startsWith("/caminhoes") ||
    pathname.startsWith("/treinamentos") ||
    pathname.startsWith("/pneus");

  if (isProtected) {
    if (auth !== "1") {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/entrar";
      return NextResponse.redirect(loginUrl);
    }

    // 🚨 REGRA DE FATURAMENTO
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
