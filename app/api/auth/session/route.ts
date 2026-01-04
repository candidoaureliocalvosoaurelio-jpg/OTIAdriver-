// app/api/auth/session/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // ✅ Next 14: cookies() NÃO é async
    const cookieStore = cookies();

    const auth = cookieStore.get("otia_auth")?.value || "";
    const cpfRaw = cookieStore.get("otia_cpf")?.value || "";
    const plan = cookieStore.get("otia_plan")?.value || "none";

    const cleanCpf = cpfRaw.replace(/\D/g, "");
    const authenticated = auth === "1" && cleanCpf.length === 11;

    // opcional: log (vai para logs da Vercel)
    console.log(
      `[AUTH_SESSION] auth=${auth} cpfLength=${cleanCpf.length} authenticated=${authenticated} plan=${plan}`
    );

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
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (err) {
    console.error("AUTH_SESSION_ERROR:", err);

    return NextResponse.json(
      { authenticated: false, cpf: "", plan: "none" },
      {
        status: 500, // ✅ importante
        headers: { "Cache-Control": "no-store" },
      }
    );
  }
}
