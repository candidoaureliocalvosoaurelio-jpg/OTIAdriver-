// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function cookieBase() {
  return {
    path: "/",
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  };
}

function safeNext(nextRaw: string | null, lang: string) {
  if (nextRaw && nextRaw.startsWith("/")) return nextRaw;
  return `/?lang=${lang}`;
}

export async function GET(req: NextRequest) {
  const url = req.nextUrl.clone();

  const lang = url.searchParams.get("lang") ?? "pt";
  const nextRaw = url.searchParams.get("next");
  const next = safeNext(nextRaw, lang);

  const res = NextResponse.redirect(new URL(next, req.url));

  // 🔐 Limpa cookies de autenticação
  res.cookies.set("otia_auth", "", { ...cookieBase(), maxAge: 0 });
  res.cookies.set("otia_cpf", "", { ...cookieBase(), maxAge: 0 });
  res.cookies.set("otia_plan", "", { ...cookieBase(), maxAge: 0 });

  return res;
}
