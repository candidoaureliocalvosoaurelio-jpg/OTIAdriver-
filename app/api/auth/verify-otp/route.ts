import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/**
 * STORE EM MEMÓRIA (DEV)
 */
const globalAny = globalThis as any;

globalAny.__OTIA_OTP_STORE =
  globalAny.__OTIA_OTP_STORE ||
  new Map<
    string,
    {
      code: string;
      expiresAt: number;
      attempts: number;
    }
  >();

globalAny.__OTIA_DEVICE_BY_CPF =
  globalAny.__OTIA_DEVICE_BY_CPF || new Map<string, string>();

const OTP_STORE: Map<
  string,
  {
    code: string;
    expiresAt: number;
    attempts: number;
  }
> = globalAny.__OTIA_OTP_STORE;

const DEVICE_BY_CPF: Map<string, string> = globalAny.__OTIA_DEVICE_BY_CPF;

function onlyDigits(value: string) {
  return (value || "").replace(/\D/g, "");
}

function signSession(payload: object) {
  const secret = process.env.AUTH_JWT_SECRET || "DEV_SECRET_CHANGE_ME";

  const header = Buffer.from(
    JSON.stringify({ alg: "HS256", typ: "JWT" })
  ).toString("base64url");

  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");

  const data = `${header}.${body}`;

  const signature = crypto
    .createHmac("sha256", secret)
    .update(data)
    .digest("base64url");

  return `${data}.${signature}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const cpf = onlyDigits(body?.cpf);
    const phone = onlyDigits(body?.phone);
    const code = onlyDigits(body?.code);

    if (!cpf || cpf.length !== 11) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    if (!phone || phone.length < 10 || phone.length > 13) {
      return NextResponse.json({ error: "Celular inválido." }, { status: 400 });
    }

    if (!code) {
      return NextResponse.json(
        { error: "Código inválido." },
        { status: 400 }
      );
    }

    const key = `${cpf}:${phone}`;
    const record = OTP_STORE.get(key);

    if (!record) {
      return NextResponse.json(
        { error: "Código expirado. Solicite novamente." },
        { status: 400 }
      );
    }

    if (Date.now() > record.expiresAt) {
      OTP_STORE.delete(key);
      return NextResponse.json(
        { error: "Código expirado. Solicite novamente." },
        { status: 400 }
      );
    }

    record.attempts += 1;

    if (record.attempts > 5) {
      OTP_STORE.delete(key);
      return NextResponse.json(
        { error: "Muitas tentativas. Solicite novo código." },
        { status: 429 }
      );
    }

    if (record.code !== code) {
      OTP_STORE.set(key, record);
      return NextResponse.json(
        { error: "Código incorreto." },
        { status: 400 }
      );
    }

    // 🔐 REGRA: 1 DISPOSITIVO POR CPF
    const deviceId =
      req.headers.get("x-device-id") || crypto.randomUUID();
    DEVICE_BY_CPF.set(cpf, deviceId);

    const token = signSession({
      cpf,
      phone,
      deviceId,
      iat: Date.now(),
    });

    OTP_STORE.delete(key);

    const res = NextResponse.json({ success: true });

    res.cookies.set("otia_session", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return res;
  } catch {
    return NextResponse.json(
      { error: "Erro ao validar código." },
      { status: 500 }
    );
  }
}
