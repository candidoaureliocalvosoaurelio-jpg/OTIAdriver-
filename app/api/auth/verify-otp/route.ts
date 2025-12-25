// app/api/auth/verify-otp/route.ts
import { NextResponse } from "next/server";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
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
    const phone = onlyDigits(body?.phone);
    const code = onlyDigits(body?.code);

    if (!cpf || !phone || !code) {
      return NextResponse.json({ error: "Dados incompletos." }, { status: 400 });
    }

    if (cpf.length !== 11) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    // No MVP, aceitamos código com 6 dígitos (padrão Verify é 6)
    if (code.length !== 6) {
      return NextResponse.json({ error: "Código inválido." }, { status: 401 });
    }

    // Opção A: decide destino pelo status do plano
    const active = hasActivePlan(cpf);

    return NextResponse.json({
      success: true,
      status: active ? "active" : "inactive",
      redirectTo: active ? "/app" : "/planos",
    });
  } catch {
    return NextResponse.json(
      { error: "Erro ao verificar código." },
      { status: 500 }
    );
  }
}
