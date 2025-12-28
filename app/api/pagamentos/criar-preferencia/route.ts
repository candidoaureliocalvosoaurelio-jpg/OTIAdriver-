// app/api/pagamentos/criar-preferencia/route.ts
import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export const dynamic = "force-dynamic";

type Body = {
  plano: "basico" | "pro" | "premium";
  email?: string;
};

function getPlan(plano: Body["plano"]) {
  switch (plano) {
    case "basico":
      return { id: "plan_basico", title: "Plano Básico — OTIAdriver", price: 29.9 };
    case "pro":
      return { id: "plan_pro", title: "Plano PRO — OTIAdriver", price: 49.9 };
    case "premium":
      return { id: "plan_premium", title: "Plano Premium — OTIAdriver", price: 99.9 };
    default:
      return null;
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as Body | null;

    const plano = body?.plano;
    if (!plano) {
      return NextResponse.json({ error: "Plano ausente." }, { status: 400 });
    }

    const plan = getPlan(plano);
    if (!plan) {
      return NextResponse.json({ error: "Plano inválido." }, { status: 400 });
    }

    const accessToken = process.env.MP_ACCESS_TOKEN;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!accessToken || !siteUrl) {
      return NextResponse.json(
        { error: "Config ausente: MP_ACCESS_TOKEN / NEXT_PUBLIC_SITE_URL" },
        { status: 500 }
      );
    }

    const mp = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(mp);

    const externalReference = `otiadriver_${plano}_${Date.now()}`;

    const result = await preference.create({
      body: {
        items: [
          {
            id: plan.id, // obrigatório no types do SDK
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
        external_reference: externalReference,
      },
    });

    // init_point é o link do checkout
    const initPoint = (result as any)?.init_point;
    if (!initPoint) {
      return NextResponse.json(
        { error: "Falha ao gerar init_point." },
        { status: 500 }
      );
    }

    return NextResponse.json({ initPoint });
  } catch (err: any) {
    console.error("MP ERROR:", err?.message || err);
    return NextResponse.json(
      { error: err?.message ?? "Erro ao criar preferência." },
      { status: 500 }
    );
  }
}
