// app/api/me/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = cookies();

  const auth = cookieStore.get("otia_auth")?.value || "";
  const plan = cookieStore.get("otia_plan")?.value || "none";
  const planStatus = cookieStore.get("otia_plan_status")?.value || "inactive";

  const authenticated = auth === "1";

  const res = NextResponse.json({
    authenticated,
    plan,         // basico | pro | premium | none
    planStatus,   // active | inactive
  });

  res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.headers.set("Pragma", "no-cache");
  res.headers.set("Expires", "0");

  return res;
}
