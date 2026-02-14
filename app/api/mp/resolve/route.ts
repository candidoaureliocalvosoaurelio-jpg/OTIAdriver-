// app/api/mp/resolve/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

async function mpFetchJson(path: string, accessToken: string) {
  const base = new URL("https://api.mercadopago.com/");
  base.pathname = path;

  const resp = await fetch(base.toString(), {
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

  return { ok: resp.ok, status: resp.status, json, text };
}

export async function GET(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json({ ok: false, error: "MP_ACCESS_TOKEN missing" }, { status: 500 });
    }

    const url = new URL(req.url);
    const preferenceId = String(url.searchParams.get("preference_id") || "").trim();

    if (!preferenceId) {
      return NextResponse.json({ ok: false, error: "missing preference_id" }, { status: 400 });
    }

    // ✅ 1) tenta achar Merchant Order pela preference (mais comum)
    // endpoint costuma responder com "elements" e dentro "payments"
    const mo = await mpFetchJson(`/merchant_orders/search?preference_id=${encodeURIComponent(preferenceId)}`, accessToken);

    if (mo.ok && mo.json) {
      const elements = Array.isArray(mo.json?.elements) ? mo.json.elements : [];
      // pega o mais recente
      const el = elements[0];
      const payments = Array.isArray(el?.payments) ? el.payments : [];
      const approved = payments.find((p: any) => String(p?.status || "").toLowerCase() === "approved") || payments[0];

      const pid = onlyDigits(String(approved?.id || ""));
      if (pid) {
        return NextResponse.json({ ok: true, payment_id: pid, source: "merchant_orders" }, { status: 200 });
      }
    }

    // ✅ 2) fallback: nada encontrado ainda (PIX pode demorar aparecer na API)
    return NextResponse.json({ ok: true, payment_id: "", pending: true }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "resolve_failed" }, { status: 500 });
  }
}
