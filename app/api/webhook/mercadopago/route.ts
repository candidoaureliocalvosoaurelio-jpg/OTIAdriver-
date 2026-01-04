// app/api/webhook/mercadopago/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}

export async function POST(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) return NextResponse.json({ ok: true });

    const body = await req.json().catch(() => null);
    const paymentId = body?.data?.id || body?.id;
    if (!paymentId) return NextResponse.json({ ok: true });

    // Consulta pagamento no MP
    const resp = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    if (!resp.ok) return NextResponse.json({ ok: true });

    const payment = await resp.json();

    // ✅ PROCESSA SOMENTE PAGAMENTO APROVADO
    if (payment.status !== "approved") {
      return NextResponse.json({ ok: true });
    }

    const cpf = String(payment.external_reference || "").replace(/\D+/g, "");
    let plano = String(payment.metadata?.plano || "").toLowerCase();

    if (cpf.length !== 11) return NextResponse.json({ ok: true });
    if (!["basico", "pro", "premium"].includes(plano)) return NextResponse.json({ ok: true });

    const supabase = getSupabaseAdmin();

    const now = new Date();
    const baseDate = new Date();

    const { data: profile } = await supabase
      .from("profiles")
      .select("plan_expires_at")
      .eq("cpf", cpf)
      .maybeSingle(); // 🔑 evita exception

    if (profile?.plan_expires_at) {
      const exp = new Date(profile.plan_expires_at);
      if (exp > now) baseDate.setTime(exp.getTime());
    }

    baseDate.setDate(baseDate.getDate() + 30);

    await supabase.from("profiles").upsert(
      {
        cpf,
        plano,
        plan_expires_at: baseDate.toISOString(),
        updated_at: now.toISOString(),
      },
      { onConflict: "cpf" }
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    // ❗ Nunca propague erro de webhook
    console.error("MP_WEBHOOK_ERROR", err);
    return NextResponse.json({ ok: true });
  }
}
