// app/api/auth/request-otp/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";

// Garante que essa rota rode em Node.js (evita problemas de env no Edge)
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
  if ((p.length === 12 || p.length === 13) && p.startsWith("55")) return `+${p}`;

  throw new Error("Celular inválido. Use DDD + número.");
}

export async function POST(req: Request) {
  try {
    const { cpf, phone } = await req.json();

    // Logs para diagnóstico (aparecem no terminal ao clicar "Enviar código")
    console.log("SID:", process.env.TWILIO_ACCOUNT_SID);
    console.log("TOKEN:", process.env.TWILIO_AUTH_TOKEN ? "OK" : "MISSING");
    console.log("FROM:", process.env.TWILIO_PHONE_NUMBER);
    console.log("VERIFY_SID:", process.env.TWILIO_VERIFY_SERVICE_SID);

    const cpfDigits = onlyDigits(cpf);
    if (cpfDigits.length !== 11) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    const to = toE164BR(phone);

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    // OBS: Aqui não precisamos do TWILIO_PHONE_NUMBER porque você está usando Verify,
    // e não SMS direto via client.messages.create({ from, to, body }).
    if (!accountSid || !authToken || !serviceSid) {
      return NextResponse.json(
        {
          error:
            "Twilio não configurado. Verifique TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN e TWILIO_VERIFY_SERVICE_SID no .env.local e reinicie o servidor.",
        },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    await client.verify.v2
      .services(serviceSid)
      .verifications.create({ to, channel: "sms" });

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("request-otp error:", e);
    return NextResponse.json(
      { error: e?.message || "Erro ao enviar código." },
      { status: 500 }
    );
  }
}
