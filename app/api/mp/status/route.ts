// app/api/mp/status/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) throw new Error("Missing Supabase env vars");
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const paymentIdRaw = (url.searchParams.get("payment_id") || "").trim();
    const paymentId = onlyDigits(paymentIdRaw);

    // valida formato (mesmo padrão seguro do webhook)
    if (!paymentId || paymentId.length < 6 || paymentId.length > 25) {
      return NextResponse.json(
        { ok: false, error: "Invalid payment_id" },
        { status: 400, headers: { "cache-control": "no-store" } }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("mp_payments")
      .select("payment_id, status, applied_at")
      .eq("payment_id", paymentId)
      .maybeSingle();

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500, headers: { "cache-control": "no-store" } }
      );
    }

    const exists = Boolean(data?.payment_id);
    const applied = Boolean(data?.applied_at);
    const status = data?.status || null;

    return NextResponse.json(
      { ok: true, payment_id: paymentId, exists, status, applied },
      { status: 200, headers: { "cache-control": "no-store" } }
    );
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: "Internal error" },
      { status: 500, headers: { "cache-control": "no-store" } }
    );
  }
}
