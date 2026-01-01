import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

export async function POST() {
  const cookieStore = cookies();
  const cpf = cookieStore.get("otia_cpf")?.value;

  if (!cpf) {
    return NextResponse.json(
      { ok: false, reason: "not_authenticated" },
      { status: 401 }
    );
  }

  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("profiles")
    .select("plano")
    .eq("cpf", cpf)
    .single();

  if (error || !data?.plano) {
    return NextResponse.json(
      { ok: false, reason: "no_plan" },
      { status: 404 }
    );
  }

  const res = NextResponse.json({ ok: true, plano: data.plano });

  // 🔐 Cookie que o middleware entende
  res.cookies.set("otia_plan", "active", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return res;
}
