// app/api/auth/request-otp/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

function normalizeToE164(phoneRaw: string): string {
  const digits = onlyDigits(phoneRaw);
  if (digits.length === 12 || digits.length === 13) return `+${digits}`;
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;
  return "";
}

function cookieBase() {
  const isProd = process.env.NODE_ENV === "production";
  return {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 dias
    httpOnly: true,
    sameSite: "lax" as const,
    secure: isProd,
    domain: isProd ? ".otiadriver.com.br" : undefined,
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as any;
    const cpfDigits = onlyDigits(body?.cpf || "");
    const phoneE164 = normalizeToE164(body?.phone || "");

    if (cpfDigits.length !== 11 || !phoneE164) {
      return NextResponse.json({ ok: false, error: "Dados inválidos." }, { status: 400 });
    }

    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!sid || !token || !serviceSid) {
      return NextResponse.json(
        { ok: false, error: "Erro no servidor (Twilio config)." },
        { status: 500 }
      );
    }

    const client = twilio(sid, token);

    await client.verify.v2.services(serviceSid).verifications.create({
      to: phoneE164,
      channel: "sms",
    });

    // ✅ opcional: já grava cpf em cookie para facilitar fluxo do checkout
    const res = NextResponse.json({ ok: true });
    const base = cookieBase();
    res.cookies.set("otia_cpf", cpfDigits, base);

    return res;
  } catch (err: any) {
    console.error("REQUEST_OTP_ERROR", {
      message: err?.message,
      stack: err?.stack,
      hasTwilioSid: !!process.env.TWILIO_ACCOUNT_SID,
      hasTwilioToken: !!process.env.TWILIO_AUTH_TOKEN,
      hasTwilioService: !!process.env.TWILIO_VERIFY_SERVICE_SID,
    });

    return NextResponse.json({ ok: false, error: "Erro no servidor." }, { status: 500 });
  }
}
