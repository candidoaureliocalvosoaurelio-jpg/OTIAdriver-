import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type WebhookBody =
  | {
      action?: string;
      type?: string; // ex: "payment"
      data?: { id?: string | number };
      id?: string | number;
    }
  | any;

function asPaymentId(body: WebhookBody): string | null {
  const id1 = body?.data?.id;
  const id2 = body?.id;

  const id = id1 ?? id2;
  if (id === undefined || id === null) return null;

  const str = String(id).trim();
  return str.length ? str : null;
}

export async function POST(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      console.error("MP_WEBHOOK: MP_ACCESS_TOKEN ausente no ambiente.");
      // responde 200 mesmo assim para evitar retries agressivos
      return NextResponse.json({ ok: true });
    }

    const body = (await req.json().catch(() => null)) as WebhookBody | null;

    // 1) Log básico do payload recebido
    console.log("MP_WEBHOOK: payload:", body);

    // 2) Tenta extrair paymentId
    const paymentId = body ? asPaymentId(body) : null;

    if (!paymentId) {
      console.warn("MP_WEBHOOK: sem data.id / id no payload. (Nada para validar)");
      return NextResponse.json({ ok: true });
    }

    // 3) Consulta pagamento no Mercado Pago (server-to-server)
    // Endpoint de pagamentos: /v1/payments/{id}
    const url = `https://api.mercadopago.com/v1/payments/${paymentId}`;

    const resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      // evita cache em runtime
      cache: "no-store",
    });

    const payment = await resp.json().catch(() => null);

    if (!resp.ok) {
      console.error("MP_WEBHOOK: falha ao consultar pagamento", {
        paymentId,
        status: resp.status,
        payment,
      });
      return NextResponse.json({ ok: true });
    }

    const status = payment?.status; // approved | pending | rejected | etc
    const externalReference = payment?.external_reference;

    console.log("MP_WEBHOOK: pagamento consultado:", {
      paymentId,
      status,
      externalReference,
      payerEmail: payment?.payer?.email,
      transactionAmount: payment?.transaction_amount,
      currency: payment?.currency_id,
    });

    /**
     * PRÓXIMA ETAPA (quando você ligar com usuário/banco):
     * - Se status === "approved":
     *   - descobrir qual usuário é dono do pagamento (via external_reference)
     *   - gravar assinatura ativa no banco
     *   - liberar acesso
     */

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("MP_WEBHOOK: erro inesperado:", e?.message ?? e);
    // Responder 200 para evitar repetição infinita
    return NextResponse.json({ ok: true });
  }
}
