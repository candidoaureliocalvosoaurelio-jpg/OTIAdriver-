// app/api/auth/verify-otp/route.ts
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

/**
 * MVP: regra temporária para simular "plano ativo".
 * Depois você troca isso por consulta real (Mercado Pago / DB).
 */
function hasActivePlan(cpfDigits: string): boolean {
  const activeCpfs = new Set<string>([
    // Exemplo:
    // "62833030134",
  ]);
  return activeCpfs.has(cpfDigits);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const cpfDigits = onlyDigits(body?.cpf);
    const phoneRaw = body?.phone;
    const codeDigits = onlyDigits(body?.code);

    if (!cpfDigits || !phoneRaw || !codeDigits) {
      return NextResponse.json({ error: "Dados incompletos." }, { status: 400 });
    }

    if (cpfDigits.length !== 11) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    if (codeDigits.length !== 6) {
      return NextResponse.json({ error: "Código inválido." }, { status: 400 });
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID!;
    const authToken = process.env.TWILIO_AUTH_TOKEN!;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID!;

    if (!accountSid || !authToken || !serviceSid) {
      return NextResponse.json(
        { error: "Twilio não configurado (variáveis ausentes)." },
        { status: 500 }
      );
    }

    const to = toE164BR(phoneRaw);

    const client = twilio(accountSid, authToken);

    const check = await client.verify.v2
      .services(serviceSid)
      .verificationChecks.create({ to, code: codeDigits });

    if (check.status !== "approved") {
      return NextResponse.json({ error: "Código incorreto." }, { status: 400 });
    }

    // Decide destino pelo status do plano (MVP)
    const active = hasActivePlan(cpfDigits);
    const redirectTo = active ? "/app" : "/planos";

    // Cookie simples para o middleware liberar páginas (paywall)
    const res = NextResponse.json({
      success: true,
      status: active ? "active" : "inactive",
      redirectTo,
    });

    // Cookies (ajuste os nomes se seu middleware usar outros)
    res.cookies.set("otia_auth", "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    });

    res.cookies.set("otia_plan", active ? "active" : "inactive", {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return res;
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Erro ao verificar código." },
      { status: 500 }
    );
  }
}
