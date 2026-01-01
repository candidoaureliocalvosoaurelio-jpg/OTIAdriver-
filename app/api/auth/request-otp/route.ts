import { NextResponse } from "next/server";
import twilio from "twilio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

/**
 * Normaliza telefone para E.164 (+55XXXXXXXXXXX)
 * Aceita:
 * - "62982868061" -> +5562982868061
 * - "5562982868061" -> +5562982868061
 * - "+55 (62) 98286-8061" -> +5562982868061
 */
function normalizeToE164(phoneRaw: string) {
  const digits = onlyDigits(phoneRaw);

  // já com DDI (55 + DDD + número)
  if (digits.length === 12 || digits.length === 13) return `+${digits}`;

  // BR sem DDI (DDD + número)
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;

  return null;
}

function twilioPublicMessage(err: any) {
  const status = err?.status;
  const code = err?.code;

  // 404 costuma ser ServiceSid errado / conta errada
  if (status === 404) {
    return "Serviço Twilio Verify não encontrado. Verifique TWILIO_VERIFY_SERVICE_SID e a conta.";
  }

  // 429 = rate limit / tentativas demais
  if (status === 429) {
    return "Muitas tentativas. Aguarde um pouco e tente novamente.";
  }

  // erros comuns de parâmetro
  if (status === 400) {
    return "Não foi possível enviar o SMS. Verifique o número e tente novamente.";
  }

  return "Erro ao enviar o código. Tente novamente em instantes.";
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const cpfDigits = onlyDigits(body?.cpf);
    const phoneE164 = normalizeToE164(body?.phone);

    if (cpfDigits.length !== 11) {
      return NextResponse.json({ ok: false, error: "CPF inválido" }, { status: 400 });
    }

    if (!phoneE164) {
      return NextResponse.json({ ok: false, error: "Telefone inválido" }, { status: 400 });
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!accountSid || !authToken || !verifyServiceSid) {
      return NextResponse.json(
        { ok: false, error: "Twilio não configurado (env ausentes)" },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    await client.verify.v2.services(verifyServiceSid).verifications.create({
      to: phoneE164,
      channel: "sms",
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    // log técnico no servidor (não vai para o usuário)
    console.error("request-otp Twilio error:", {
      message: err?.message,
      status: err?.status,
      code: err?.code,
      moreInfo: err?.moreInfo,
      details: err?.details,
    });

    return NextResponse.json(
      { ok: false, error: twilioPublicMessage(err) },
      { status: 500 }
    );
  }
}
