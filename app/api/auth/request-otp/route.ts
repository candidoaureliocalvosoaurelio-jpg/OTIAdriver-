import { NextResponse } from "next/server";
import twilio from "twilio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

function normalizeToE164(phoneRaw: string) {
  const digits = onlyDigits(phoneRaw);
  // Se tiver DDD + número (10 ou 11 dígitos)
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;
  // Se já tiver o 55 (12 ou 13 dígitos)
  if (digits.length === 12 || digits.length === 13) return `+${digits}`;
  return null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const cpfDigits = onlyDigits(body?.cpf);
    const phoneRaw = body?.phone;

    if (!cpfDigits || cpfDigits.length !== 11) {
      return NextResponse.json({ error: "CPF inválido. Digite 11 números." }, { status: 400 });
    }

    const to = normalizeToE164(phoneRaw);
    if (!to) {
      return NextResponse.json({ error: "Celular inválido. Use DDD + Número." }, { status: 400 });
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!accountSid || !authToken || !serviceSid) {
      return NextResponse.json({ error: "Configuração do SMS pendente." }, { status: 500 });
    }

    const client = twilio(accountSid, authToken);

    await client.verify.v2.services(serviceSid).verifications.create({
      to,
      channel: "sms",
    });

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("Erro Twilio:", e.message);
    return NextResponse.json(
      { error: "Não foi possível enviar o SMS. Verifique o número." },
      { status: 500 }
    );
  }
}
