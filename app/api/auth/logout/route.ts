// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function cookieBase() {
  const isProd = process.env.NODE_ENV === "production";
  return {
    path: "/",
    httpOnly: true,
    sameSite: "lax" as const,
    secure: isProd,
    domain: isProd ? ".otiadriver.com.br" : undefined,
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
  const base = cookieBase();

  // 🔥 limpa todos os cookies de auth/plano (inclui status)
  res.cookies.set("otia_auth", "", { ...base, maxAge: 0 });
  res.cookies.set("otia_cpf", "", { ...base, maxAge: 0 });
  res.cookies.set("otia_plan", "", { ...base, maxAge: 0 });
  res.cookies.set("otia_plan_status", "", { ...base, maxAge: 0 });

  return res;
}
