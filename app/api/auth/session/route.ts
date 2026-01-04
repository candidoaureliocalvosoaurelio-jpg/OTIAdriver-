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

    // ✅ IMPORTANTE: sessão SEM LOGIN NÃO É ERRO → retorna 200 com authenticated=false
    return NextResponse.json(
      {
        authenticated,
        cpf: authenticated ? cpf : "",
        plan: authenticated ? plan : "none",
      },
      {
        status: 200,
        headers: {
          // ✅ evita cache "enganando" mobile/edge cases
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (err) {
    console.error("AUTH_SESSION_ERROR:", err);
    // ✅ até erro interno retorna 200 para não derrubar checkout por "falha de sessão"
    return NextResponse.json(
      { authenticated: false, cpf: "", plan: "none" },
      {
        status: 200,
        headers: { "Cache-Control": "no-store, max-age=0" },
      }
    );
  }
}
