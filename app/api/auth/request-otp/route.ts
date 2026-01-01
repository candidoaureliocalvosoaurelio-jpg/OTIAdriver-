import { NextResponse } from "next/server";
import twilio from "twilio";

// Garante execução em Node.js (necessário para o SDK da Twilio)
export const runtime = "nodejs";
// Evita cache em rotas dinâmicas de API
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

/**
 * Normaliza o telefone para o formato E.164 exigido pelo Twilio (+55XXXXXXXXXXX)
 * Aceita números com ou sem o código do país (55)
 */
function normalizeToE164(phoneRaw: string) {
  const digits = onlyDigits(phoneRaw);

  // Se já tiver o 55 (12 ou 13 dígitos: 55 + DDD + número)
  if (digits.length === 12 || digits.length === 13) return `+${digits}`;

  // Se tiver DDD + número (10 ou 11 dígitos), assume Brasil e adiciona +55
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;

  // Fallback: se parecer número, tenta prefixar +
  return digits.length > 8 ? `+${digits}` : null;
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
        { ok: false, error: "Twilio não configurado (variáveis de ambiente ausentes)" },
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
    return NextResponse.json(
      { ok: false, error: err?.message || "Erro ao enviar OTP" },
      { status: 500 }
    );
  }
}