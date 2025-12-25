import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { cpf, phone } = await req.json();

    if (!cpf || !phone) {
      return NextResponse.json(
        { error: "CPF e telefone são obrigatórios." },
        { status: 400 }
      );
    }

    // Gera código OTP simples (DEV)
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    console.log("[OTIADRIVER OTP DEV]", {
      cpf,
      phone,
      code,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao gerar o código." },
      { status: 500 }
    );
  }
}
