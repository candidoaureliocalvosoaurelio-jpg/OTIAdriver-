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
  throw new Error("Celular inválido.");
}

/**
 * MVP: regra temporária para simular "plano ativo".
 * - No começo, você pode colocar CPFs liberados aqui.
 * - Depois, isso vira consulta no banco/Stripe/Mercado Pago (status ativo).
 */
function hasActivePlan(cpfDigits: string): boolean {
  const activeCpfs = new Set<string>([
    // Coloque aqui CPFs que você quer testar como "ativos"
    // "62833030134",
  ]);

  return activeCpfs.has(cpfDigits);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const cpf = onlyDigits(body?.cpf);
    const phoneRaw = body?.phone;
    const code = onlyDigits(body?.code);

    if (!cpf || !phoneRaw || !code) {
      return NextResponse.json({ error: "Dados incompletos." }, { status: 400 });
    }

    if (cpf.length !== 11) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    if (code.length !== 6) {
      return NextResponse.json({ error: "Código inválido." }, { status: 400 });
    }

    const to = toE164BR(phoneRaw);

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!accountSid || !authToken || !serviceSid) {
      return NextResponse.json(
        { error: "Variáveis do Twilio não configuradas." },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    const check = await client.verify.v2
      .services(serviceSid)
      .verificationChecks.create({ to, code });

    if (check.status !== "approved") {
      return NextResponse.json({ error: "Código incorreto." }, { status: 400 });
    }

    // Opção A: decide destino pelo status do plano
    const active = hasActivePlan(cpf);

    return NextResponse.json({
      success: true,
      status: active ? "active" : "inactive",
      redirectTo: active ? "/app" : "/planos",
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Erro ao verificar código." },
      { status: 500 }
    );
  }
}
