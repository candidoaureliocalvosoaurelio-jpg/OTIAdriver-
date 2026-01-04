"use server";

import { cookies } from "next/headers";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

export async function irParaMercadoPago(planoId: string) {
  const cookieStore = cookies();
  const auth = cookieStore.get("otia_auth")?.value || "";
  const cpfRaw = cookieStore.get("otia_cpf")?.value || "";
  const cpf = onlyDigits(cpfRaw);

  if (auth !== "1" || cpf.length !== 11) {
    return {
      error: "not_authenticated",
      debug: { auth, cpfLength: cpf.length },
    };
  }

  const token = process.env.MP_ACCESS_TOKEN;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!token || !siteUrl) {
    return { error: "server_config_missing" };
  }

  const unit_price =
    planoId === "premium" ? 99.9 : planoId === "pro" ? 49.9 : 29.9;

  const response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        items: [
          {
            title: `Assinatura OTIAdriver - ${planoId.toUpperCase()}`,
            quantity: 1,
            unit_price,
            currency_id: "BRL",
          },
        ],
        external_reference: cpf,
        metadata: { cpf, plano: planoId },
        back_urls: {
          success: `${siteUrl}/pagamento/concluido`,
          failure: `${siteUrl}/planos`,
        },
        auto_return: "approved",
      }),
      cache: "no-store",
    }
  );

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data?.init_point) {
    return { error: "mp_error", mp: data };
  }

  return { init_point: data.init_point };
}
