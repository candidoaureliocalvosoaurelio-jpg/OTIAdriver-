import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Rotas públicas (NÃO bloquear)
  const publicRoutes = [
    "/",
    "/entrar",
    "/planos",
    "/checkout",
    "/api/auth/request-otp",
    "/api/auth/verify-otp",
  ];

  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Token de autenticação
  const token = req.cookies.get("otidriver_token")?.value;

  // Se não tiver token, bloqueia
  if (!token) {
    return NextResponse.redirect(new URL("/entrar", req.url));
  }

  return NextResponse.next();
}

// Define quais rotas o middleware protege
export const config = {
  matcher: [
    "/modulos/:path*",
    "/recursos/:path*",
    "/simbolos-painel/:path*",
    "/pneus/:path*",
    "/suporte/:path*",
  ],
};
