// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function buildRedirectToEntrar(req: NextRequest) {
  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = "/entrar";

  // mantém o destino que o usuário tentou acessar (com querystring)
  const nextPath = req.nextUrl.pathname + req.nextUrl.search;
  loginUrl.searchParams.set("next", nextPath);
  loginUrl.searchParams.set("reason", "auth");

  // mantém lang se existir
  const lang = req.nextUrl.searchParams.get("lang");
  if (lang) loginUrl.searchParams.set("lang", lang);

  return NextResponse.redirect(loginUrl);
}

function buildRedirectToPlanos(req: NextRequest) {
  const planosUrl = req.nextUrl.clone();
  planosUrl.pathname = "/planos";
  planosUrl.searchParams.set("reason", "paywall");

  // mantém lang se existir
  const lang = req.nextUrl.searchParams.get("lang");
  if (lang) planosUrl.searchParams.set("lang", lang);

  return NextResponse.redirect(planosUrl);
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { hostname, pathname } = url;

  // 🔁 Força WWW (corrige perda de cookies entre www e sem-www)
  if (hostname === "otiadriver.com.br") {
    const newUrl = url.clone();
    newUrl.hostname = "www.otiadriver.com.br";
    return NextResponse.redirect(newUrl, 308);
  }

  const auth = req.cookies.get("otia_auth")?.value || "";
  const cpf = (req.cookies.get("otia_cpf")?.value || "").replace(/\D/g, "");
  const plan = req.cookies.get("otia_plan")?.value || "none";

  const isLogged = auth === "1" && cpf.length === 11;

  // ✅ Se entrou na vitrine e está logado, manda para home interna
  if (pathname === "/" && isLogged) {
    const lang = req.nextUrl.searchParams.get("lang") ?? "pt";
    const home = req.nextUrl.clone();
    home.pathname = "/caminhoes";
    home.searchParams.set("lang", lang);
    return NextResponse.redirect(home);
  }

  // 🔓 Checkout: só exige login (para pagar)
  if (pathname.startsWith("/checkout")) {
    if (!isLogged) return buildRedirectToEntrar(req);
    return NextResponse.next();
  }

  // ✅ SOMENTE estas áreas ficam bloqueadas até pagar
  // (inclui /caminhoes como home da plataforma)
  const protectedExactPaths = new Set([
    "/caminhoes",
    "/caminhoes-eletricos",
    "/pneus",
    "/inspecao-manutencao",
    "/treinamentos",
    "/simbolos-painel",
    "/ebook-driver",
  ]);

  const isProtected = protectedExactPaths.has(pathname);

  if (isProtected) {
    // 1) precisa estar logado
    if (!isLogged) return buildRedirectToEntrar(req);

    // 2) precisa ter pago (regra de faturamento)
    if (!plan || plan === "none") return buildRedirectToPlanos(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
