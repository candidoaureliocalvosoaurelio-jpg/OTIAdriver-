// app/api/auth/verify-otp/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

function normalizeToE164(phoneRaw: string) {
  const digits = onlyDigits(phoneRaw);
  if (digits.length === 12 || digits.length === 13) return `+${digits}`;
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;
  return null;
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) throw new Error("Configurações do Supabase ausentes.");
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { code, cpf, phone } = body as { code?: string; cpf?: string; phone?: string };

    const cpfDigits = onlyDigits(cpf || "");
    const phoneE164 = normalizeToE164(phone || "");
    const otp = onlyDigits(code || "");

    if (cpfDigits.length !== 11 || !phoneE164 || otp.length !== 6) {
      return NextResponse.json({ ok: false, error: "Dados incompletos." }, { status: 400 });
    }

    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
      .verificationChecks.create({ to: phoneE164, code: otp });

    if (verification.status !== "approved") {
      return NextResponse.json({ ok: false, error: "Código incorreto ou expirado." }, { status: 400 });
    }

    const response = NextResponse.json({ ok: true });

    // --- CONFIGURAÇÃO DE COOKIES FLEXÍVEL ---
    const cookieBase = {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      httpOnly: true,
      sameSite: "lax" as const,
      // Se estiver testando no Wi-Fi sem HTTPS, deixe como false
      secure: process.env.NODE_ENV === "production",
    };

    response.cookies.set("otia_auth", "1", cookieBase);
    response.cookies.set("otia_cpf", cpfDigits, cookieBase);

    // Identifica o plano do banco (Seu plano 2050 Premium)
    let planCookieValue = "none";
    try {
      const supabase = getSupabaseAdmin();
      const { data } = await supabase
        .from("profiles")
        .select("plano, plan_expires_at")
        .eq("cpf", cpfDigits)
        .single();

      if (data?.plano) {
        const planoNome = String(data.plano).toLowerCase().trim();
        if (data.plan_expires_at) {
          const agora = new Date();
          const expiraEm = new Date(data.plan_expires_at);
          planCookieValue = agora < expiraEm ? planoNome : "expired";
        } else {
          planCookieValue = planoNome;
        }
      }
    } catch (e) { console.error("Erro plano:", e); }

    response.cookies.set("otia_plan", planCookieValue, cookieBase);
    return response;

  } catch (err: any) {
    return NextResponse.json({ ok: false, error: "Erro na validação." }, { status: 500 });
  }
}
