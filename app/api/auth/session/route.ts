// app/api/auth/session/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie") || "";

  const getCookie = (name: string) => {
    const m = cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return m ? decodeURIComponent(m[1]) : "";
  };

  const auth = getCookie("otia_auth"); // "1"
  const cpf = onlyDigits(getCookie("otia_cpf")); // "628..."
  const plan = getCookie("otia_plan"); // "free" | "basico" | "pro" | "premium"

  return NextResponse.json({
    authenticated: auth === "1" && cpf.length === 11,
    cpf: cpf.length === 11 ? cpf : "",
    plan: plan || "free",
  });
}
