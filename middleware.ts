// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const PAID_PREFIXES = [
  "/app",
  "/premium",

  // BLOQUEAR ATÉ PAGAR:
  "/caminhoes-eletricos",
  "/pneus",
  "/inspecao-manutencao",
  "/treinamentos",
  "/simbolos-painel",
  "/ebook-driver",
];

const ACTIVE_PLANS = new Set(["basico", "pro", "premium"]);

function matchesPrefix(pathname: string, prefixes: string[]) {
  return prefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Libera rotas públicas essenciais
  if (
    pathname.startsWith("/entrar") ||
    pathname.startsWith("/planos") ||
    pathname.startsWith("/pagamento")
  ) {
    return NextResponse.next();
  }

  // Ignora assets e rotas internas
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/simbolos") || // pasta de imagens em /public/simbolos
    pathname.startsWith("/fichas-tecnicas")
  ) {
    return NextResponse.next();
  }

  const needsPaid = matchesPrefix(pathname, PAID_PREFIXES);
  if (!needsPaid) return NextResponse.next();

  const auth = req.cookies.get("otia_auth")?.value;
  const cpf = req.cookies.get("otia_cpf")?.value;
  const plan = req.cookies.get("otia_plan")?.value; // free | basico | pro | premium

  if (!auth || !cpf) {
    const url = req.nextUrl.clone();
    url.pathname = "/entrar";
    url.searchParams.set("next", pathname + search);
    url.searchParams.set("reason", "auth");
    return NextResponse.redirect(url);
  }

  if (!ACTIVE_PLANS.has(plan ?? "")) {
    const url = req.nextUrl.clone();
    url.pathname = "/planos";
    url.searchParams.set("reason", "paywall");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
