// app/api/auth/verify-otp/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";
import { createClient } from "@supabase/supabase-js";

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

/**
 * CONFIGURAÇÃO DE COOKIES DESTRAVADA
 * Resolve o erro UNAUTHORIZED e o loop de login no localhost
 */
function cookieBase() {
  const isProd = process.env.NODE_ENV === "production";

  return {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 dias
    httpOnly: true,
    sameSite: "lax" as const, // Essencial para persistir após redirecionamento do Mercado Pago
    
    // 🔥 AJUSTE CRÍTICO: No localhost (isProd = false), secure deve ser false para o navegador aceitar
    secure: isProd, 
    
    // 🔥 AJUSTE CRÍTICO: No localhost, o domain deve ser undefined ou o cookie será rejeitado
    domain: isProd ? ".otiadriver.com.br" : undefined,
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as any;
    const { code, cpf, phone } = body;

    const cpfDigits = onlyDigits(cpf || "");
    const phoneE164 = normalizeToE164(phone || "");
    const otp = onlyDigits(code || "");

    if (cpfDigits.length !== 11 || !phoneE164 || otp.length !== 6) {
      return NextResponse.json({ ok: false, error: "Dados inválidos." }, { status: 400 });
    }

    // --- TWILIO ---
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!sid || !token || !serviceSid) {
      return NextResponse.json({ ok: false, error: "Erro no servidor (Twilio config)." }, { status: 500 });
    }

    const client = twilio(sid, token);
    const verification = await client.verify.v2.services(serviceSid).verificationChecks.create({ to: phoneE164, code: otp });

    if (verification.status !== "approved") {
      return NextResponse.json({ ok: false, error: "Código incorreto." }, { status: 400 });
    }

    // --- SUPABASE ---
    const supaUrl = process.env.SUPABASE_URL;
    const supaServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    let plano = "none";

    if (supaUrl && supaServiceKey) {
      const supabase = createClient(supaUrl, supaServiceKey, { auth: { persistSession: false } });
      const { data } = await supabase.from("profiles").select("plano").eq("cpf", cpfDigits).maybeSingle();
      plano = data?.plano || "none";
    }

    const res = NextResponse.json({ ok: true, plano });
    const base = cookieBase();

    // Aplica cookies com a nova configuração segura para localhost
    res.cookies.set("otia_auth", "1", base);
    res.cookies.set("otia_cpf", cpfDigits, base);
    res.cookies.set("otia_plan", plano, base);

    return res;
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: "Erro interno no servidor." }, { status: 500 });
  }
}