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
  // Aceita 12/13 dígitos apenas se começar com 55 (Brasil)
  if ((digits.length === 12 || digits.length === 13) && digits.startsWith("55")) return `+${digits}`;
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;
  return "";
}

/**
 * CONFIGURAÇÃO DE COOKIES DESTRAVADA
 * Remove a marcação 'Secure' e o 'Domain' para garantir que o navegador 
 * entregue os cookies ao servidor sem bloqueios de HTTPS/SSL.
 */
function cookieBase() {
  return {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 dias
    httpOnly: true,
    sameSite: "lax" as const,
    secure: true, // HTTPS
    // ✅ NÃO definir domain (deixe o browser/Vercel cuidar)
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
      return NextResponse.json(
        { ok: false, error: "Dados inválidos." },
        { status: 400, headers: { "Cache-Control": "no-store, max-age=0" } }
      );
    }

    // --- CONEXÃO TWILIO ---
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!sid || !token || !serviceSid) {
      return NextResponse.json(
        { ok: false, error: "Erro no servidor (Twilio config)." },
        { status: 500, headers: { "Cache-Control": "no-store, max-age=0" } }
      );
    }

    const client = twilio(sid, token);
    const verification = await client.verify.v2.services(serviceSid).verificationChecks.create({
      to: phoneE164,
      code: otp,
    });

    if (verification.status !== "approved") {
      return NextResponse.json(
        { ok: false, error: "Código incorreto." },
        { status: 400, headers: { "Cache-Control": "no-store, max-age=0" } }
      );
    }

    // --- CONEXÃO SUPABASE (CONSULTA PLANO) ---
    const supaUrl = process.env.SUPABASE_URL;
    const supaServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    let plano = "none";

    if (supaUrl && supaServiceKey) {
      const supabase = createClient(supaUrl, supaServiceKey, { auth: { persistSession: false } });
      const { data } = await supabase
        .from("profiles")
        .select("plano")
        .eq("cpf", cpfDigits)
        .maybeSingle();

      // Identifica o plano real do banco (ex: premium)
      plano = data?.plano || "none";
    }

    // --- VALIDAÇÃO DE PLANO ATIVO ---
    // Garante que 'premium' libera o status como 'active'
    const ACTIVE_PLANS = new Set(["basico", "pro", "premium", "active"]);
    const planStatus = ACTIVE_PLANS.has(plano) ? "active" : "inactive";

    const res = NextResponse.json(
      { ok: true, plano, planStatus },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );

    const base = cookieBase();
    
    // Grava os cookies de sessão que o Middleware agora conseguirá ler
    res.cookies.set("otia_auth", "1", base);
    res.cookies.set("otia_cpf", cpfDigits, base);
    res.cookies.set("otia_plan", plano, base);
    res.cookies.set("otia_plan_status", planStatus, base);

    return res;
  } catch (err: any) {
    console.error("VERIFY_OTP_ERROR:", err);
    return NextResponse.json(
      { ok: false, error: "Erro interno no servidor." },
      { status: 500, headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  }
}
