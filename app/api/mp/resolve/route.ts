// app/api/mp/resolve/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

// ✅ Agora aceita path + query corretamente (new URL resolve searchParams)
async function mpFetchJson(pathWithQuery: string, accessToken: string) {
  const url = new URL(pathWithQuery, "https://api.mercadopago.com");

  const resp = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  const text = await resp.text().catch(() => "");
  let json: any = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }

  return { ok: resp.ok, status: resp.status, json, text, url: url.toString() };
}

function pickPaymentIdFromMerchantOrdersResponse(moJson: any): string {
  const elements = Array.isArray(moJson?.elements) ? moJson.elements : [];
  if (!elements.length) return "";

  // ✅ tenta pegar o “melhor” elemento: primeiro com payments, senão o primeiro
  const el =
    elements.find((e: any) => Array.isArray(e?.payments) && e.payments.length > 0) || elements[0];

  const payments = Array.isArray(el?.payments) ? el.payments : [];
  if (!payments.length) return "";

  // ✅ prioridade: approved > in_process/pending > o primeiro
  const byStatus = (s: string) =>
    payments.find((p: any) => String(p?.status || "").toLowerCase() === s);

  const chosen =
    byStatus("approved") ||
    byStatus("in_process") ||
    byStatus("pending") ||
    payments[0];

  const pid = onlyDigits(String(chosen?.id || ""));
  return pid;
}

export async function GET(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json(
        { ok: false, error: "MP_ACCESS_TOKEN missing" },
        { status: 500, headers: { "Cache-Control": "no-store, max-age=0" } }
      );
    }

    const url = new URL(req.url);
    const preferenceId = String(url.searchParams.get("preference_id") || "").trim();

    if (!preferenceId) {
      return NextResponse.json(
        { ok: false, error: "missing preference_id" },
        { status: 400, headers: { "Cache-Control": "no-store, max-age=0" } }
      );
    }

    // ✅ 1) Merchant Orders search por preference_id
    const mo = await mpFetchJson(
      `/merchant_orders/search?preference_id=${encodeURIComponent(preferenceId)}`,
      accessToken
    );

    if (mo.ok && mo.json) {
      const pid = pickPaymentIdFromMerchantOrdersResponse(mo.json);
      if (pid) {
        return NextResponse.json(
          { ok: true, payment_id: pid, preference_id: preferenceId, source: "merchant_orders" },
          { status: 200, headers: { "Cache-Control": "no-store, max-age=0" } }
        );
      }
    }

    // ✅ 2) Ainda não apareceu (PIX pode demorar alguns segundos/minutos)
    // Retorna pending:true pro front continuar no polling
    return NextResponse.json(
      { ok: true, payment_id: "", preference_id: preferenceId, pending: true },
      { status: 200, headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "resolve_failed" },
      { status: 500, headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  }
}
