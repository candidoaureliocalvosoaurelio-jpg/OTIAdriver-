// middleware.ts (na RAIZ do projeto)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_PREFIXES = [
  "/catalogo",
  "/caminhoes",
  "/caminhoes-eletricos",
  "/treinamentos",
  "/simbolos-painel",
  "/inspecao-manutencao",
  "/pneus",
  "/ebook-driver",          // ✅ protege a rota real
  "/ebook-driver-economy",  // (opcional) se você tiver essa rota também

  // ✅ Copilot IA (protegido: só pagante)
  "/copilot",
];

const PUBLIC_PREFIXES = [
  "/",
  "/inicio",
  "/proposito",
  "/planos",
  "/contato",
  "/sobre",
  "/privacy",
  "/termos",
  "/robots.txt",
  "/favicon.ico",
];

const AUTH_PREFIXES = ["/entrar", "/verificar-otp"];

const PAYMENT_PREFIXES = ["/checkout", "/pagamento"];

const API_ALLOW_PREFIXES = [
  "/api/auth", // request-otp, verify-otp, session, logout...
  "/api/webhook", // mercadopago webhook
  "/api/pagamentos", // criar preferencia etc
  "/api/me/sync", // se existir no seu projeto

  // ✅ Copilot IA API (precisa estar liberado)
  "/api/ai",
];

function isStatic(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/public") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".js") ||
    pathname.endsWith(".map") ||
    pathname.endsWith(".txt") ||
    pathname.endsWith(".pdf")
  );
}

function startsWithAny(pathname: string, prefixes: string[]) {
  return prefixes.some((p) => (p === "/" ? pathname === "/" : pathname.startsWith(p)));
}

function redirectTo(req: NextRequest, pathname: string, reason: string) {
  const url = req.nextUrl.clone();
  url.pathname = pathname;

  // preserva idioma se existir
  const lang = req.nextUrl.searchParams.get("lang");
  if (lang) url.searchParams.set("lang", lang);

  // next = página original
  const nextPath = req.nextUrl.pathname + (req.nextUrl.search || "");
  url.searchParams.set("next", nextPath);
  url.searchParams.set("reason", reason);

  return NextResponse.redirect(url, 307);
}

async function fetchSession(req: NextRequest) {
  // chama sua API (fonte da verdade: Supabase)
  const url = new URL("/api/auth/session", req.nextUrl.origin);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      // passa cookies do usuário para o endpoint enxergar auth/cpf
      cookie: req.headers.get("cookie") || "",
    },
    cache: "no-store",
  });

  if (!res.ok) return null;
  return (await res.json()) as
    | { authenticated?: boolean; planStatus?: string; plan?: string; expiresAt?: string | null }
    | null;
}

export async function middleware(req: NextRequest) {
  const { pathname, hostname } = req.nextUrl;

  // ✅ 0) ignora estáticos
  if (isStatic(pathname)) return NextResponse.next();

  // ✅ 1) força WWW
  if (hostname === "otiadriver.com.br") {
    const url = req.nextUrl.clone();
    url.hostname = "www.otiadriver.com.br";
    return NextResponse.redirect(url, 308);
  }

  // ✅ 2) libera APIs permitidas
  if (pathname.startsWith("/api")) {
    if (startsWithAny(pathname, API_ALLOW_PREFIXES)) return NextResponse.next();
    return NextResponse.next();
  }

  // ✅ 3) libera rotas públicas + auth + pagamento
  if (
    startsWithAny(pathname, PUBLIC_PREFIXES) ||
    startsWithAny(pathname, AUTH_PREFIXES) ||
    startsWithAny(pathname, PAYMENT_PREFIXES)
  ) {
    return NextResponse.next();
  }

  // ✅ 4) aplica proteção (plataforma)
  const isProtected = startsWithAny(pathname, PROTECTED_PREFIXES);
  if (!isProtected) return NextResponse.next();

  // ✅ 5) checa sessão real no servidor (Supabase)
  const session = await fetchSession(req);

  const authenticated = Boolean(session?.authenticated);
  const planStatus = String(session?.planStatus || "inactive").toLowerCase();

  // 🔒 sem login -> manda entrar
  if (!authenticated) return redirectTo(req, "/entrar", "auth");

  // 🔒 logado mas não pagante -> manda planos
  if (planStatus !== "active") return redirectTo(req, "/planos", "paywall");

  // ✅ pagante
  return NextResponse.next();
}

// ✅ roda “praticamente em tudo”, mas ignora assets via isStatic()
export const config = {
  matcher: ["/:path*"],
};
