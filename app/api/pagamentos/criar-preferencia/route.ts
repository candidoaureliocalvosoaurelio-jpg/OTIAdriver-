// app/api/pagamentos/criar-preferencia/route.ts
import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

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
  return (url || "").trim().replace(/\/+$/, "");
}

function prodWwwBaseUrl(baseUrl: string) {
  const isProd = process.env.NODE_ENV === "production";
  if (!isProd) return baseUrl;

  // garante www em produção
  if (baseUrl.includes("://otiadriver.com.br")) {
    return baseUrl.replace("://otiadriver.com.br", "://www.otiadriver.com.br");
  }
  return baseUrl;
}

function normalizeLang(v: any) {
  const s = String(v || "").toLowerCase();
  return s === "en" ? "en" : "pt";
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as any;

    // CPF: cookie -> body
    let cpf = onlyDigits(getCookie(req, "otia_cpf"));
    if (!cpf || cpf.length !== 11) cpf = onlyDigits(body?.cpf);

    const plano = String(body?.plano || "").toLowerCase() as "basico" | "pro" | "premium";
    const lang = normalizeLang(body?.lang);

    if (!cpf || cpf.length !== 11) {
      return NextResponse.json(
        { error: "CPF ausente ou inválido no checkout." },
        { status: 400, headers: { "Cache-Control": "no-store, max-age=0" } }
      );
    }

    if (!PLAN_PRICES[plano]) {
      return NextResponse.json(
        { error: "Plano inválido" },
        { status: 400, headers: { "Cache-Control": "no-store, max-age=0" } }
      );
    }

    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json(
        { error: "MP_ACCESS_TOKEN ausente" },
        { status: 500, headers: { "Cache-Control": "no-store, max-age=0" } }
      );
    }

    // ✅ Base URL: prioriza env var, fallback seguro
    const envBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
    const fallbackProd = "https://www.otiadriver.com.br";
    const fallbackLocal = "http://localhost:3000";

    let baseUrl = normalizeBaseUrl(envBaseUrl || fallbackProd);
    baseUrl = prodWwwBaseUrl(baseUrl);

    // se alguém rodar sem NEXT_PUBLIC_SITE_URL no dev
    if (!envBaseUrl && process.env.NODE_ENV !== "production") {
      baseUrl = fallbackLocal;
    }

    const local = isLocalhost(baseUrl);

    const mp = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(mp);

    const notification_url = local ? undefined : `${baseUrl}/api/webhook/mercadopago`;

    // ✅ querystring para manter contexto no retorno (PIX precisa muito disso)
    const qs = `?lang=${encodeURIComponent(lang)}&plano=${encodeURIComponent(plano)}`;

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
        external_reference: cpf,
        metadata: { cpf, plano, lang, product: "otiadriver-subscription" },

        back_urls: {
          // PIX: pode cair em pending; precisa mandar contexto
          success: `${baseUrl}/pagamento/concluido${qs}`,
          pending: `${baseUrl}/pagamento/pendente${qs}`,
          failure: `${baseUrl}/pagamento/erro${qs}`,
        },

        // ok manter, mas não depende disso para PIX
        auto_return: "approved",

        ...(notification_url ? { notification_url } : {}),
      },
    });

    return NextResponse.json(
      {
        id: pref.id,
        init_point: pref.init_point,
        sandbox_init_point: pref.sandbox_init_point,
      },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (e: any) {
    console.error("MP_PREF_ERROR:", { message: e?.message, stack: e?.stack });

    return NextResponse.json(
      { error: e?.message || "Erro ao criar preferência" },
      { status: 500, headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  }
}
