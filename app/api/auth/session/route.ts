// app/api/auth/session/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const c = cookies();

    const auth = c.get("otia_auth")?.value || "";
    const cpf = c.get("otia_cpf")?.value || "";
    const plan = c.get("otia_plan")?.value || "none";

    const authenticated = auth === "1" && cpf.length === 11;

    if (!authenticated) {
      return NextResponse.json(
        { authenticated: false, cpf: "", plan: "none" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { authenticated: true, cpf, plan },
      { status: 200 }
    );
  } catch (err) {
    console.error("AUTH_SESSION_ERROR:", err);
    return NextResponse.json(
      { authenticated: false, cpf: "", plan: "none" },
      { status: 500 }
    );
  }
}
