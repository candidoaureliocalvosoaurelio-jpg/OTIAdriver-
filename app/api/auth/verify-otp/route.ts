import { NextResponse } from "next/server";
import twilio from "twilio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

/** Normaliza telefone para E.164 (+55XXXXXXXXXXX) */
function normalizeToE164(phoneRaw: string) {
  const digits = onlyDigits(phoneRaw);
  if (digits.length === 12 || digits.length === 13) return `+${digits}`; // já com DDI
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`; // BR sem DDI
  return digits.length > 8 ? `+${digits}` : null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { code, cpf, phone } = body as { code?: string; cpf?: string; phone?: string };

    const cpfDigits = onlyDigits(cpf || "");
    const phoneE164 = normalizeToE164(phone || "");

    if (!code || cpfDigits.length !== 11 || !phoneE164) {
      return NextResponse.json(
        { ok: false, error: "Dados incompletos" },
        { status: 400 }
      );
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!accountSid || !authToken || !verifyServiceSid) {
      return NextResponse.json(
        { ok: false, error: "Configuração ausente (Twilio env)" },
        { status: 500 }
      );
    }

    // Dica: Service SID de Verify deve começar com "VA"
    // (não bloqueio por isso, mas ajuda a evitar confusão)
    const client = twilio(accountSid, authToken);

    const verification = await client.verify.v2
      .services(verifyServiceSid)
      .verificationChecks.create({ to: phoneE164, code });

    if (verification.status !== "approved") {
      return NextResponse.json(
        { ok: false, error: "Código incorreto ou expirado" },
        { status: 400 }
      );
    }

    // ✅ Login aprovado
    const response = NextResponse.json({ ok: true });

    // Cookies de sessão (recomendo httpOnly + sameSite)
    const cookieBase = {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
    };

    response.cookies.set("otia_auth", "1", cookieBase);
    response.cookies.set("otia_cpf", cpfDigits, cookieBase);

    // ✅ MUITO IMPORTANTE: definir plano para não voltar pra /planos sempre
    // Até você integrar com DB/pagamento, defina "basico" como default.
    response.cookies.set("otia_plan", "basico", cookieBase);

    return response;
  } catch (err: any) {
    // Log completo ajuda MUITO quando é 404 do Twilio
    console.error("Erro na verificação Twilio:", {
      message: err?.message,
      status: err?.status,
      code: err?.code,
      moreInfo: err?.moreInfo,
      details: err?.details,
    });

    // Se for erro de serviço não encontrado, devolve mensagem mais clara
    const msg =
      err?.status === 404
        ? "Serviço de verificação Twilio (VERIFY_SERVICE_SID) não encontrado. Confirme o Service SID e a conta."
        : "Erro ao validar código. Tente reenviar o SMS.";

    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
