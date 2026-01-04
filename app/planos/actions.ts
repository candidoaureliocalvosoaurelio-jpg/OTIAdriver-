"use server";

import { cookies } from "next/headers";

export async function irParaMercadoPago(planoId: string) {
  const cookieStore = cookies();
  const auth = cookieStore.get("otia_auth")?.value;
  const cpf = cookieStore.get("otia_cpf")?.value;

  // 1. Verifica se o motorista está logado antes de cobrar
  if (auth !== "1" || !cpf) {
    return { error: "not_authenticated" };
  }

  try {
    // 2. Chama a API oficial do Mercado Pago
    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        items: [
          {
            title: `Assinatura OTIAdriver - ${planoId.toUpperCase()}`,
            quantity: 1,
            unit_price: planoId === "premium" ? 99.90 : planoId === "pro" ? 49.90 : 29.90,
            currency_id: "BRL",
          },
        ],
        external_reference: cpf, // O seu Webhook usa isso para liberar o acesso
        metadata: { cpf, plano: planoId },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_URL}/pagamento/concluido`,
          failure: `${process.env.NEXT_PUBLIC_SITE_URL}/planos`,
        },
        auto_return: "approved",
      }),
    });

    const data = await response.json();
    return { init_point: data.init_point };

  } catch (err) {
    console.error("Erro no Mercado Pago:", err);
    return { error: "server_error" };
  }
}
