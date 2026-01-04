import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // No Next.js 15+, cookies() deve ser aguardado
    const cookieStore = await cookies();

    // Pegamos os valores brutos
    const auth = cookieStore.get("otia_auth")?.value || "";
    const cpf = cookieStore.get("otia_cpf")?.value || "";
    const plan = cookieStore.get("otia_plan")?.value || "none";

    // Limpeza de CPF (remove pontos/traços caso existam no cookie)
    const cleanCpf = cpf.replace(/\D/g, "");
    
    // Validação rigorosa
    const authenticated = auth === "1" && cleanCpf.length === 11;

    console.log(`[AUTH_SESSION] Check: auth=${auth}, cpfLength=${cleanCpf.length}, result=${authenticated}`);

    return NextResponse.json(
      {
        authenticated,
        cpf: authenticated ? cleanCpf : "",
        plan: authenticated ? plan : "none",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          "Pragma": "no-cache",
          "Expires": "0",
        },
      }
    );
  } catch (err) {
    console.error("AUTH_SESSION_ERROR:", err);
    return NextResponse.json(
      { authenticated: false, cpf: "", plan: "none" },
      { status: 200 }
    );
  }
}
