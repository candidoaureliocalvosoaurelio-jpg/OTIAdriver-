// middleware.ts (NA RAIZ)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// =====================
// ✅ ROTAS PROTEGIDAS (somente Premium ativo)
// =====================
const PROTECTED_PREFIXES = [
  "/catalogo",
  "/caminhoes",
  "/caminhoes-eletricos",
  "/treinamentos",
  "/simbolos-painel",
  "/inspecao-manutencao",
  "/pneus",

  // ✅ ebooks (conteúdo premium)
  "/ebook-driver",
  "/ebook-driver-economy",

  // ✅ Copilot IA premium
  "/copilot",
];

// =====================
// ✅ ROTAS PÚBLICAS (VITRINE)
// =====================
const PUBLIC_PREFIXES = [
  "/", // ✅ VITRINE principal (NÃO BLOQUEIA)
  "/inicio",
  "/proposito",
  "/planos",
  "/contato",
  "/sobre",
  "/privacy",
  "/privacidade",
  "/termos",

  // SEO/infra
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
];

// =====================
// ✅ AUTH + PAGAMENTO (sempre liberado)
// =====================
const AUTH_PREFIXES = ["/entrar", "/verificar-otp"];
const PAYMENT_PREFIXES = ["/checkout", "/pagamento"];

// =====================
// ✅ APIs permitidas (nunca bloqueia no middleware)
// =====================
const API_ALLOW_PREFIXES = [
  "/api/auth", // request-otp, verify-otp, session, logout...
  "/api/webhook", // mercadopago webhook
  "/api/pagamentos", // criar preferencia etc
  "/api/me/sync", // sync de plano/conta
  "/api/mp/status", // ✅ status do pagamento (polling)
  "/api/ai", // Copilot IA API
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

  // next = página original (pra voltar depois do login/pagamento)
  const nextPath = req.nextUrl.pathname + (req.nextUrl.search || "");
  url.searchParams.set("next", nextPath);
  url.searchParams.set("reason", reason);

  return NextResponse.redirect(url, 307);
}

async function fetchSession(req: NextRequest) {
  // fonte da verdade (seu endpoint server-side)
  const url = new URL("/api/auth/session", req.nextUrl.origin);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      cookie: req.headers.get("cookie") || "",
    },
    cache: "no-store",
  });

  if (!res.ok) return null;

  return (await res.json()) as
    | {
        authenticated?: boolean;
        planStatus?: string; // "active" | "inactive"
        plan?: string; // "premium" etc (se existir)
        expiresAt?: string | null;
      }
    | null;
}

function readCookieValue(cookieHeader: string, name: string) {
  const m = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return m?.[1] ? decodeURIComponent(m[1]) : "";
}

export async function middleware(req: NextRequest) {
  const { pathname, hostname } = req.nextUrl;

  // 0) ignora assets
  if (isStatic(pathname)) return NextResponse.next();

  // 1) força WWW
  if (hostname === "otiadriver.com.br") {
    const url = req.nextUrl.clone();
    url.hostname = "www.otiadriver.com.br";
    return NextResponse.redirect(url, 308);
  }

  // 2) libera APIs (não faz paywall em /api)
  if (pathname.startsWith("/api")) {
    if (startsWithAny(pathname, API_ALLOW_PREFIXES)) return NextResponse.next();
    return NextResponse.next();
  }

  // 3) libera vitrine + auth + pagamento
  if (
    startsWithAny(pathname, PUBLIC_PREFIXES) ||
    startsWithAny(pathname, AUTH_PREFIXES) ||
    startsWithAny(pathname, PAYMENT_PREFIXES)
  ) {
    return NextResponse.next();
  }

  // 4) se não for rota protegida, deixa passar
  const isProtected = startsWithAny(pathname, PROTECTED_PREFIXES);
  if (!isProtected) return NextResponse.next();

  // 5) ✅ FLASH CHECK: primeiro pelos cookies setados em /api/me/sync
  const cookieHeader = req.headers.get("cookie") || "";

  const otiaAuth = readCookieValue(cookieHeader, "otia_auth"); // "1" quando logado
  const planStatusCookie = readCookieValue(cookieHeader, "otia_plan_status").toLowerCase(); // "active" | "inactive"

  // sem login -> entrar
  if (otiaAuth !== "1") return redirectTo(req, "/entrar", "auth");

  // se cookie já diz active -> libera sem fetch (⚡)
  if (planStatusCookie === "active") return NextResponse.next();

  // 6) fallback: fonte da verdade server-side (caso cookie ainda não tenha atualizado)
  const session = await fetchSession(req);
  const authenticated = Boolean(session?.authenticated);
  const planStatus = String(session?.planStatus || "inactive").toLowerCase();

  if (!authenticated) return redirectTo(req, "/entrar", "auth");
  if (planStatus !== "active") return redirectTo(req, "/planos", "paywall");

  return NextResponse.next();
}

// ✅ DEIXAR APENAS 1 CONFIG (sem duplicar)
export const config = {
  matcher: ["/:path*"],
};
