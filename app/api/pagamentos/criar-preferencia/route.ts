// app/api/pagamentos/criar-preferencia/route.ts
import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Remove tudo que não for número
function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

// Preços oficiais dos planos
const PLAN_PRICES: Record<"basico" | "pro" | "premium", number> = {
  basico: 29.9,
  pro: 49.9,
  premium: 99.9,
};

function getCookie(req: Request, name: string) {
  const cookie = req.headers.get("cookie") || "";
  const m = cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : "";
}

function isLocalhost(url: string) {
  return /localhost|127\.0\.0\.1/i.test(url);
}

function normalizeBaseUrl(url: string) {
  // remove barra final para evitar //pagamento/...
  return (url || "").trim().replace(/\/+$/, "");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as any;

    // 1) CPF: primeiro cookie (se existir), depois body (fallback)
    let cpf = onlyDigits(getCookie(req, "otia_cpf"));
    if (!cpf || cpf.length !== 11) {
      cpf = onlyDigits(body?.cpf);
    }

    const plano = String(body?.plano || "").toLowerCase() as "basico" | "pro" | "premium";

    // Validações
    if (!cpf || cpf.length !== 11) {
      return NextResponse.json(
        { error: "CPF ausente ou inválido no checkout." },
        { status: 400 }
      );
    }

    if (!PLAN_PRICES[plano]) {
      return NextResponse.json({ error: "Plano inválido" }, { status: 400 });
    }

    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json({ error: "MP_ACCESS_TOKEN ausente" }, { status: 500 });
    }

    // 2) Base URL: env > origin > fallback
    const envBaseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const origin = req.headers.get("origin") || "";
    const baseUrl = normalizeBaseUrl(envBaseUrl || origin || "https://www.otiadriver.com.br");
    const local = isLocalhost(baseUrl);

    // 3) Mercado Pago client
    const mp = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(mp);

    // Localhost não recebe webhook do Mercado Pago
    const notification_url = local ? undefined : `${baseUrl}/api/webhook/mercadopago`;

    const pref = await preference.create({
      body: {
        items: [
          {
            id: `plano-${plano}`,
            title: `Plano ${plano.toUpperCase()} — OTIAdriver`,
            quantity: 1,
            unit_price: PLAN_PRICES[plano],
            currency_id: "BRL",
          },
        ],
        external_reference: cpf, // vínculo com o usuário
        metadata: {
          cpf,
          plano,
          product: "otiadriver-subscription",
        },
        back_urls: {
          success: `${baseUrl}/pagamento/concluido`,
          pending: `${baseUrl}/pagamento/pendente`,
          failure: `${baseUrl}/pagamento/erro`,
        },
        auto_return: "approved",
        ...(notification_url ? { notification_url } : {}),
      },
    });

    return NextResponse.json({
      id: pref.id,
      init_point: pref.init_point,
      sandbox_init_point: pref.sandbox_init_point,
    });
  } catch (e: any) {
    console.error("MP_PREF_ERROR:", {
      message: e?.message,
      stack: e?.stack,
    });

    return NextResponse.json(
      { error: e?.message || "Erro ao criar preferência" },
      { status: 500 }
    );
  }
}
