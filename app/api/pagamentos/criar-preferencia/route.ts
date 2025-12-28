import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export const dynamic = "force-dynamic";

type Body = {
  plano: "basico" | "pro" | "premium";
};

function getPlan(plano: Body["plano"]) {
  switch (plano) {
    case "basico":
      return { title: "Plano Básico — OTIAdriver", price: 29.9 };
    case "pro":
      return { title: "Plano PRO — OTIAdriver", price: 49.9 };
    case "premium":
      return { title: "Plano Premium — OTIAdriver", price: 99.9 };
    default:
      return null;
  }
}

export async function POST(req: Request) {
  try {
    const { plano } = (await req.json()) as Body;

    const plan = getPlan(plano);
    if (!plan) {
      return NextResponse.json({ error: "Plano inválido" }, { status: 400 });
    }

    const accessToken = process.env.MP_ACCESS_TOKEN;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!accessToken || !siteUrl) {
      return NextResponse.json(
        { error: "Variáveis de ambiente ausentes" },
        { status: 500 }
      );
    }

    const mp = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(mp);

    const result = await preference.create({
      body: {
        items: [
          items: [
  {
    id: `plan_${plano}`,          // 👈 ADICIONAR ISTO
    title: plan.title,
    quantity: 1,
    unit_price: plan.price,
    currency_id: "BRL",
  },
],

        back_urls: {
          success: `${siteUrl}/pagamento/concluido?plano=${plano}`,
          failure: `${siteUrl}/pagamento/erro?plano=${plano}`,
          pending: `${siteUrl}/pagamento/pendente?plano=${plano}`,
        },
        auto_return: "approved",
        notification_url: `${siteUrl}/api/webhook/mercadopago`,
      },
    });

    return NextResponse.json({ initPoint: result.init_point });
  } catch (err: any) {
    console.error("MP ERROR:", err);
    return NextResponse.json(
      { error: "Erro ao criar preferência" },
      { status: 500 }
    );
  }
}
