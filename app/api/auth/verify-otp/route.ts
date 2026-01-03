import { NextResponse } from "next/server";
import twilio from "twilio";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

/** Normaliza telefone e garante que SEMPRE retorne uma string */
function normalizeToE164(phoneRaw: string): string {
  const digits = onlyDigits(phoneRaw);
  if (digits.length === 12 || digits.length === 13) return `+${digits}`;
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;
  return ""; // Retorna string vazia para evitar erro de 'null' no TS
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { code, cpf, phone } = body;

    const cpfDigits = onlyDigits(cpf || "");
    const phoneE164 = normalizeToE164(phone || "");
    const otp = onlyDigits(code || "");

    // Se os dados estiverem errados, para aqui antes de chamar o Twilio
    if (cpfDigits.length !== 11 || phoneE164 === "" || otp.length !== 6) {
      return NextResponse.json({ ok: false, error: "Dados inválidos." }, { status: 400 });
    }

    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    
    // Validação no Twilio (Agora sem erro de 'null')
    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
      .verificationChecks.create({ to: phoneE164, code: otp });

    if (verification.status !== "approved") {
      return NextResponse.json({ ok: false, error: "Código incorreto." }, { status: 400 });
    }

    const response = NextResponse.json({ ok: true });

    // Configuração de cookies para funcionar em qualquer dispositivo (Smartphone/PC)
    const cookieBase = {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
    };

    response.cookies.set("otia_auth", "1", cookieBase);
    response.cookies.set("otia_cpf", cpfDigits, cookieBase);

    // Busca seu status PREMIUM vitalício (2050)
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
    const { data } = await supabase.from("profiles").select("plano").eq("cpf", cpfDigits).single();
    
    response.cookies.set("otia_plan", data?.plano || "none", cookieBase);

    return response;
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Erro no servidor." }, { status: 500 });
  }
}
