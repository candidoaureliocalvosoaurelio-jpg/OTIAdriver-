import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { cpf, phone, code } = await req.json();

    if (!cpf || !phone || !code) {
      return NextResponse.json(
        { error: "Dados incompletos." },
        { status: 400 }
      );
    }

    // Em DEV, qualquer código de 6 dígitos passa
    if (code.length !== 6) {
      return NextResponse.json(
        { error: "Código inválido." },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao verificar código." },
      { status: 500 }
    );
  }
}
