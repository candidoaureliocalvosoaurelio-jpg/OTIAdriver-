import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Store em memória (DEV)
const g = globalThis as any;
g.__OTIA_OTP_STORE =
  g.__OTIA_OTP_STORE ||
  new Map<string, { code: string; expiresAt: number; attempts: number }>();

const OTP_STORE: Map<
  string,
  { code: string; expiresAt: number; attempts: number }
> = g.__OTIA_OTP_STORE;

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const cpf = onlyDigits(body.cpf);
    const phone = onlyDigits(body.phone);

    if (cpf.length !== 11) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    if (phone.length < 10 || phone.length > 13) {
      return NextResponse.json({ error: "Celular inválido." }, { status: 400 });
    }

    const code = generateCode();
    const expiresAt = Date.now() + 5 * 60 * 1000;

    OTP_STORE.set(`${cpf}:${phone}`, {
      code,
      expiresAt,
      attempts: 0,
    });

    console.log(
      `[OTIAdriver OTP DEV] CPF=${cpf} PHONE=${phone} CODE=${code}`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("request-otp error:", err);
    return NextResponse.json(
      { error: "Erro ao gerar o código." },
      { status: 500 }
    );
  }
}
