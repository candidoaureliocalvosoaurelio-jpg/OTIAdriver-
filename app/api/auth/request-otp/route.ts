// app/api/auth/request-otp/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

/**
 * ✅ Normaliza telefone BR para E.164 (+55DDDNXXXXXXXX ou +55DDDXXXXXXXX)
 * Regras (iguais ao verify-otp):
 * - Se vier com 55 + DDD + número: 12 ou 13 dígitos, e PRECISA começar com "55" => +55...
 * - Se vier com DDD + número: 10 ou 11 dígitos => +55...
 * - Caso contrário: inválido
 */
function normalizeToE164(phoneRaw: string): string | null {
  const d = onlyDigits(phoneRaw);

  // Já veio com 55 + DDD + número
  if (d.startsWith("55") && (d.length === 12 || d.length === 13)) {
    return `+${d}`;
  }

  // Veio como DDD + número
  if (d.length === 10 || d.length === 11) {
    return `+55${d}`;
  }

  return null;
}

function twilioPublicMessage(err: any) {
  const status = err?.status;

  if (status === 404) {
    return "Serviço Twilio Verify não encontrado. Verifique TWILIO_VERIFY_SERVICE_SID e a conta.";
  }
  if (status === 429) {
    return "Muitas tentativas. Aguarde um pouco e tente novamente.";
  }
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
      return NextResponse.json({ ok: false, error: "Telefone inválido (use DDD)" }, { status: 400 });
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

    // Log leve (não expõe dados completos)
    console.log("REQUEST_OTP: start", {
      cpfLast2: cpfDigits.slice(-2),
      phoneTail: phoneE164.slice(-4),
      serviceTail: verifyServiceSid.slice(-6),
    });

    const client = twilio(accountSid, authToken);

    const verification = await client.verify.v2.services(verifyServiceSid).verifications.create({
      to: phoneE164,
      channel: "sms",
    });

    console.log("REQUEST_OTP: twilio status", { status: verification.status });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("REQUEST_OTP: twilio error", {
      message: err?.message,
      status: err?.status,
      code: err?.code,
      moreInfo: err?.moreInfo,
      details: err?.details,
    });

    return NextResponse.json(
      { ok: false, error: twilioPublicMessage(err), twilio_code: err?.code ?? null },
      { status: 500 }
    );
  }
}
