// app/api/auth/verify-otp/route.ts
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
  return "";
}

function cookieBase() {
  const isProd = process.env.NODE_ENV === "production";

  return {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 dias
    httpOnly: true,
    sameSite: "lax" as const,
    secure: isProd, // ✅ true em produção (HTTPS)
    // ✅ importantíssimo: cobre www e sem www
    domain: isProd ? ".otiadriver.com.br" : undefined,
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { code, cpf, phone } = body;

    const cpfDigits = onlyDigits(cpf || "");
    const phoneE164 = normalizeToE164(phone || "");
    const otp = onlyDigits(code || "");

    if (cpfDigits.length !== 11 || phoneE164 === "" || otp.length !== 6) {
      return NextResponse.json({ ok: false, error: "Dados inválidos." }, { status: 400 });
    }

    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
      .verificationChecks.create({ to: phoneE164, code: otp });

    if (verification.status !== "approved") {
      return NextResponse.json({ ok: false, error: "Código incorreto." }, { status: 400 });
    }

    const res = NextResponse.json({ ok: true });

    // ✅ cookies de sessão
    const base = cookieBase();
    res.cookies.set("otia_auth", "1", base);
    res.cookies.set("otia_cpf", cpfDigits, base);

    // ✅ busca plano no banco
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } }
    );

    const { data } = await supabase.from("profiles").select("plano").eq("cpf", cpfDigits).maybeSingle();

    res.cookies.set("otia_plan", data?.plano || "none", base);

    return res;
  } catch (err) {
    console.error("VERIFY_OTP_ERROR:", err);
    return NextResponse.json({ ok: false, error: "Erro no servidor." }, { status: 500 });
  }
}
