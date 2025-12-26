import { NextResponse } from "next/server";
import twilio from "twilio";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

// Converte telefone BR para E.164 (+55XXXXXXXXXXX)
function toE164BR(phoneRaw: string) {
  const p = onlyDigits(phoneRaw);
  if (p.length === 10 || p.length === 11) return `+55${p}`;
  if ((p.length === 12 || p.length === 13) && p.startsWith("55")) return `+${p}`;
  throw new Error("Celular inválido. Use DDD + número.");
}

export async function POST(req: Request) {
  try {
    const { cpf, phone } = await req.json();

    const cpfDigits = onlyDigits(cpf);
    if (cpfDigits.length !== 11) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    const to = toE164BR(phone);

    const accountSid = process.env.TWILIO_ACCOUNT_SID!;
    const authToken = process.env.TWILIO_AUTH_TOKEN!;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID!;

    if (!accountSid || !authToken || !serviceSid) {
      return NextResponse.json(
        { error: "Twilio não configurado." },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    await client.verify.v2
      .services(serviceSid)
      .verifications.create({ to, channel: "sms" });

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Erro ao enviar código." },
      { status: 500 }
    );
  }
}
