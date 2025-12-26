// app/api/auth/request-otp/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";

// Garante execução em Node.js (env funciona corretamente)
export const runtime = "nodejs";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

// Converte telefone BR para E.164 (+55XXXXXXXXXXX)
function toE164BR(phoneRaw: string) {
  const p = onlyDigits(phoneRaw);

  // DDD + número (10 ou 11 dígitos, sem o 55)
  if (p.length === 10 || p.length === 11) return `+55${p}`;

  // Já veio com 55 (12 ou 13 dígitos)
  if ((p.length === 12 || p.length === 13) && p.startsWith("55")) {
    return `+${p}`;
  }

  throw new Error("Celular inválido. Use DDD + número.");
}

export async function POST(req: Request) {
  try {
    const { cpf, phone } = await req.json();

    // Validação de CPF
    const cpfDigits = onlyDigits(cpf);
    if (cpfDigits.length !== 11) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    // Normaliza telefone
    const to = toE164BR(phone);

    // Variáveis de ambiente obrigatórias
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!accountSid || !authToken || !serviceSid) {
      return NextResponse.json(
        { error: "Serviço de autenticação indisponível no momento." },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    // Envia código OTP via Twilio Verify (SMS)
    await client.verify.v2
      .services(serviceSid)
      .verifications.create({
        to,
        channel: "sms",
      });

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("request-otp error:", e);
    return NextResponse.json(
      { error: "Erro ao enviar código. Tente novamente." },
      { status: 500 }
    );
  }
}
