// app/api/webhook/mercadopago/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}

function extractPaymentId(req: Request, body: any) {
  // 1) body padrão do webhook
  const fromBody = body?.data?.id || body?.id;
  if (fromBody) return String(fromBody);

  // 2) fallback por querystring (alguns formatos)
  const url = new URL(req.url);
  const qs =
    url.searchParams.get("data.id") ||
    url.searchParams.get("id") ||
    url.searchParams.get("payment_id");
  if (qs) return String(qs);

  return "";
}

function normalizePlan(p: string) {
  const plan = String(p || "").toLowerCase();
  if (plan === "basico" || plan === "pro" || plan === "premium") return plan;
  return "";
}

export async function POST(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) return NextResponse.json({ ok: true });

    const body = await req.json().catch(() => ({}));
    const paymentId = extractPaymentId(req, body);
    if (!paymentId) return NextResponse.json({ ok: true });

    // Consulta pagamento no MP (fonte da verdade)
    const resp = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    if (!resp.ok) return NextResponse.json({ ok: true });

    const payment = await resp.json();

    const status = String(payment?.status || "");
    const cpf = onlyDigits(String(payment?.external_reference || ""));
    const plano = normalizePlan(payment?.metadata?.plano);

    // Registra no banco para auditoria / idempotência
    const supabase = getSupabaseAdmin();
    const nowIso = new Date().toISOString();

    // Upsert do evento/pagamento (histórico + status)
    await supabase.from("mp_payments").upsert(
      {
        payment_id: String(paymentId),
        cpf: cpf || null,
        plano: plano || null,
        status: status || null,
        raw: payment,
        updated_at: nowIso,
      },
      { onConflict: "payment_id" }
    );

    // Só aplica se aprovado e com dados válidos
    if (status !== "approved") return NextResponse.json({ ok: true });
    if (cpf.length !== 11) return NextResponse.json({ ok: true });
    if (!plano) return NextResponse.json({ ok: true });

    // Checa se já foi aplicado (idempotência)
    const { data: mpRow } = await supabase
      .from("mp_payments")
      .select("applied_at")
      .eq("payment_id", String(paymentId))
      .maybeSingle();

    if (mpRow?.applied_at) return NextResponse.json({ ok: true });

    // Calcula expiração: +30 dias do maior entre (agora) e (plan_expires_at atual)
    const now = new Date();
    const baseDate = new Date();

    const { data: profile, error: profileErr } = await supabase
      .from("profiles")
      .select("plan_expires_at")
      .eq("cpf", cpf)
      .maybeSingle();

    if (profileErr) {
      console.error("WEBHOOK_PROFILE_READ_ERROR", profileErr);
      // não aborta
    }

    if (profile?.plan_expires_at) {
      const exp = new Date(profile.plan_expires_at);
      if (!isNaN(exp.getTime()) && exp > now) {
        baseDate.setTime(exp.getTime());
      }
    }

    baseDate.setDate(baseDate.getDate() + 30);

    // ✅ Aplica plano no profiles (SEM updated_at, porque sua tabela não tem essa coluna)
    const { error: upsertErr } = await supabase.from("profiles").upsert(
      {
        cpf,
        plano,
        plan_expires_at: baseDate.toISOString(),
      },
      { onConflict: "cpf" }
    );

    if (upsertErr) {
      console.error("WEBHOOK_PROFILE_UPSERT_ERROR", upsertErr);
      return NextResponse.json({ ok: true });
    }

    // Marca como aplicado (selo de idempotência)
    const { error: appliedErr } = await supabase
      .from("mp_payments")
      .update({ applied_at: nowIso, updated_at: nowIso })
      .eq("payment_id", String(paymentId));

    if (appliedErr) {
      console.error("WEBHOOK_APPLIED_MARK_ERROR", appliedErr);
      // mesmo se falhar marcar, o plano já foi aplicado
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("MP_WEBHOOK_ERROR", err);
    // nunca estoure erro para o MP
    return NextResponse.json({ ok: true });
  }
}
