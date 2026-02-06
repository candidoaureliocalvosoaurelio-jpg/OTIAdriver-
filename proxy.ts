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

// ✅ Next 16: middleware.ts -> proxy.ts e a função exportada vira "proxy"
export function proxy(req: NextRequest) {
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
    if (auth !== "1") return buildRedirectToEntrar(req);
    return NextResponse.next();
  }

  // ✅ SOMENTE estas áreas ficam bloqueadas até pagar
  const protectedExactPaths = new Set([
    "/caminhoes", // (recomendado) home da plataforma
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
    if (auth !== "1") return buildRedirectToEntrar(req);

    // 2) precisa ter pago (regra de faturamento)
    if (!plan || plan === "none") return buildRedirectToPlanos(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
