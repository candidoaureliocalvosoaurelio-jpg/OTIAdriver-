import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

// Store em memória (DEV). Em produção, use banco/redis.
const g = globalThis as any;
g.__OTIA_OTP_STORE = g.__OTIA_OTP_STORE || new Map<string, { code: string; expiresAt: number; attempts: number }>();
const OTP_STORE: Map<string, { code: string; expiresAt: number; attempts: number }> = g.__OTIA_OTP_STORE;

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

// JWT simplificado (HS256). Em produção, você pode usar lib robusta.
function signSession(payload: object) {
  const secret = process.env.AUTH_JWT_SECRET;
  if (!secret) {
    // sem secret, build pode funcionar mas segurança não. Defina na Vercel.
    throw new Error("Missing AUTH_JWT_SECRET env var");
  }

  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const data = `${header}.${body}`;

  const signature = crypto.createHmac("sha256", secret).update(data).digest("base64url");
  return `${data}.${signature}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));

    const cpf = onlyDigits(body?.cpf);
    const phone = onlyDigits(body?.phone);
    const code = onlyDigits(body?.code);

    if (!cpf || cpf.length !== 11) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }
    if (!phone || phone.length < 10 || phone.length > 13) {
      return NextResponse.json({ error: "Celular inválido." }, { status: 400 });
    }
    if (!code || code.length < 4) {
      return NextResponse.json({ error: "Código inválido." }, { status: 400 });
    }

    const key = `${cpf}:${phone}`;
    const rec = OTP_STORE.get(key);

    if (!rec) {
      return NextResponse.json({ error: "Código expirado. Solicite novamente." }, { status: 400 });
    }
    if (Date.now() > rec.expiresAt) {
      OTP_STORE.delete(key);
      return NextResponse.json({ error: "Código expirado. Solicite novamente." }, { status: 400 });
    }

    rec.attempts += 1;
    if (rec.attempts > 5) {
      OTP_STORE.delete(key);
      return NextResponse.json({ error: "Muitas tentativas. Solicite um novo código." }, { status: 429 });
    }

    if (rec.code !== code) {
      OTP_STORE.set(key, rec);
      return NextResponse.json({ error: "Código incorreto." }, { status: 400 });
    }

    // sucesso
    OTP_STORE.delete(key);

    const deviceId = req.headers.get("x-device-id") || crypto.randomUUID();

    // Sessão: já inclui deviceId (para 1 dispositivo na próxima etapa)
    const token = signSession({
      cpf,
      phone,
      deviceId,
      // status de assinatura ainda será integrado com Mercado Pago
      subscriptionStatus: "pending",
      iat: Date.now(),
    });

    const res = NextResponse.json({ success: true });

    res.cookies.set("otia_session", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      // 30 dias (ajustável)
      maxAge: 60 * 60 * 24 * 30,
    });

    return res;
  } catch (err: any) {
    // se faltar AUTH_JWT_SECRET, vamos deixar claro
    const msg = typeof err?.message === "string" ? err.message : "Erro ao validar o código.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
