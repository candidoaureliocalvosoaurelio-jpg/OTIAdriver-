// app/api/me/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = cookies();

  const auth = cookieStore.get("otia_auth")?.value; // "1"
  const planCookie = cookieStore.get("otia_plan")?.value; // "active" | "inactive" | undefined

  const authenticated = auth === "1";

  // Normaliza para o que o middleware entende
  const plan = authenticated && planCookie === "active" ? "active" : "inactive";

  const res = NextResponse.json({
    authenticated,
    plan,
  });

  // evita qualquer cache intermediário
  res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.headers.set("Pragma", "no-cache");
  res.headers.set("Expires", "0");

  return res;
}
