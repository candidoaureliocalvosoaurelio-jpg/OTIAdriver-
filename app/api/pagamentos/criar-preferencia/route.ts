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

    const externalReference = `otiariver_${plano}_${Date.now()}`;

    const result = await preference.create({
      body: {
        items: [
          {
            title: plan.title,
            quantity: 1,
            unit_price: plan.price,
            currency_id: "BRL",
          },
        ],

        // Para o usuário voltar para seu site após o pagamento
        back_urls: {
          success: `${siteUrl}/pagamento/concluido?plano=${plano}`,
          failure: `${siteUrl}/pagamento/erro?plano=${plano}`,
          pending: `${siteUrl}/pagamento/pendente?plano=${plano}`,
        },

        // Faz retornar automaticamente quando aprovado (quando aplicável)
        auto_return: "approved",

        // Webhook (notificação server-to-server)
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
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "Erro ao criar preferência." },
      { status: 500 }
    );
  }
}
