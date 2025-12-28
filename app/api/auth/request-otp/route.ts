// app/api/auth/request-otp/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";

// Garante execução em Node.js (Twilio SDK)
export const runtime = "nodejs";
// Evita cache acidental em rotas dinâmicas
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

// Converte telefone BR para E.164 (+55XXXXXXXXXXX)
function toE164BR(phoneRaw: string) {
  const p = onlyDigits(phoneRaw);

  // DDD + número (10 ou 11 dígitos, sem o 55)
  if (p.length === 10 || p.length === 11) return `+55${p}`;

  // Já veio com 55 (12 ou 13 dígitos)
  if ((p.length === 12 || p.length === 13) && p.startsWith("55")) return `+${p}`;

  throw new Error("Celular inválido. Use DDD + número.");
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const cpfDigits = onlyDigits(body?.cpf);
    const phoneRaw = body?.phone;

    // Validação de CPF
    if (!cpfDigits || cpfDigits.length !== 11) {
      return NextResponse.json({ error: "CPF inválido. Digite 11 números." }, { status: 400 });
    }

    if (!phoneRaw) {
      return NextResponse.json({ error: "Celular obrigatório." }, { status: 400 });
    }

    // Normaliza telefone para E.164
    const to = toE164BR(phoneRaw);

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
    await client.verify.v2.services(serviceSid).verifications.create({
      to,
      channel: "sms",
    });

    return NextResponse.json({ success: true });
  } catch (e: any) {
    // Em produção, o Twilio pode responder com erros de rate limit/blocked/invalid etc.
    console.error("request-otp error:", e?.message || e);

    return NextResponse.json(
      { error: e?.message || "Erro ao enviar código. Tente novamente." },
      { status: 500 }
    );
  }
}
