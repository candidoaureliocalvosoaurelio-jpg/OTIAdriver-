import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname, hostname } = url;

  // =========================================================
  // 1) ✅ FORÇAR WWW EM PRODUÇÃO (Opção A)
  // =========================================================
  // Se alguém acessar sem www, redireciona para www mantendo path + query.
  // Importante: isso deve vir ANTES da lógica de auth/planos.
  const isProd = process.env.NODE_ENV === "production";

  // Evita mexer em rotas internas/arquivos estáticos
  const isStatic =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap") ||
    pathname.match(/\.(png|jpg|jpeg|webp|svg|ico|css|js|map|txt|xml|pdf)$/);

  if (isProd && !isStatic && hostname === "otiadriver.com.br") {
    const newUrl = url.clone();
    newUrl.hostname = "www.otiadriver.com.br";
    return NextResponse.redirect(newUrl, 308);
  }

  // =========================================================
  // 2) ✅ SUA LÓGICA ATUAL DE AUTENTICAÇÃO / PAYWALL
  // =========================================================
  const auth = req.cookies.get("otia_auth")?.value;
  const plan = req.cookies.get("otia_plan")?.value;

  // 🔓 REGRA DE OURO PARA FATURAR:
  // checkout exige apenas login, nunca plano
  if (pathname.startsWith("/checkout")) {
    if (auth !== "1") {
      const nextUrl = req.nextUrl.clone();
      nextUrl.pathname = "/entrar";
      nextUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(nextUrl);
    }
    return NextResponse.next();
  }

  // 🛡️ PROTEÇÃO DO CONTEÚDO
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

// =========================================================
// 3) Matcher: precisa pegar TUDO para forçar www
//    mas ignorar _next e arquivos via "isStatic" acima
// =========================================================
export const config = {
  matcher: ["/:path*"],
};
