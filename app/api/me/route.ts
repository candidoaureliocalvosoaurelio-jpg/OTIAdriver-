import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = cookies();

  const auth = cookieStore.get("otia_auth")?.value || "";
  const plan = cookieStore.get("otia_plan")?.value || "none";

  const authenticated = auth === "1";

  return NextResponse.json(
    {
      authenticated,
      plan: authenticated ? plan : "none",
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
