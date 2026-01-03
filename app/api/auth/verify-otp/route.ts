// app/api/auth/verify-otp/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

/** Normaliza telefone para E.164 (+55XXXXXXXXXXX) */
function normalizeToE164(phoneRaw: string) {
  const digits = onlyDigits(phoneRaw);

  // já com DDI 55 (55 + DDD + número)
  if (digits.length === 12 || digits.length === 13) return `+${digits}`;

  // BR sem DDI (DDD + número)
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;

  return null;
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) throw new Error("Configurações do Supabase ausentes.");
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}

function publicTwilioError(err: any) {
  const status = err?.status;
  const code = err?.code;

  if (status === 404) return "Twilio Verify Service não encontrado (SID errado).";
  if (status === 429) return "Muitas tentativas. Aguarde e tente novamente.";
  if (status === 400) return "Código inválido ou expirado. Solicite um novo código.";
  if (code) return `Falha na validação (Twilio ${code}). Solicite novo código.`;

  return "Erro ao validar código. Tente novamente.";
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { code, cpf, phone } = body as { code?: string; cpf?: string; phone?: string };

    const cpfDigits = onlyDigits(cpf || "");
    const phoneE164 = normalizeToE164(phone || "");
    const otp = onlyDigits(code || "");

    if (cpfDigits.length !== 11 || !phoneE164 || otp.length !== 6) {
      return NextResponse.json(
        { ok: false, error: "Dados incompletos (CPF/telefone/código)." },
        { status: 400 }
      );
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!accountSid || !authToken || !verifyServiceSid) {
      return NextResponse.json(
        { ok: false, error: "Configuração Twilio ausente (env)." },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    // LOG de depuração
    console.log("VERIFY_OTP: tentando validar", { to: phoneE164, service: verifyServiceSid });

    const verification = await client.verify.v2
      .services(verifyServiceSid)
      .verificationChecks.create({ to: phoneE164, code: otp });

    if (verification.status !== "approved") {
      return NextResponse.json(
        { ok: false, error: "Código incorreto ou expirado. Solicite um novo código." },
        { status: 400 }
      );
    }

    const response = NextResponse.json({ ok: true });

    // --- BLOCO DE COOKIES ATUALIZADO PARA COMPATIBILIDADE COM SMARTPHONE ---
    const cookieBase = {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      httpOnly: true,
      sameSite: "lax" as const,
      // Deixamos 'false' se não estiver em produção para facilitar testes no Wi-Fi
      secure: process.env.NODE_ENV === "production",
      // Comentamos o domain para aceitar acessos via IP ou domínios variados no celular
      // domain: process.env.COOKIE_DOMAIN, 
    };

    response.cookies.set("otia_auth", "1", cookieBase);
    response.cookies.set("otia_cpf", cpfDigits, cookieBase);

    // Busca o plano no Supabase
    let planCookieValue = "none";
    try {
      const supabase = getSupabaseAdmin();
      const { data, error } = await supabase
        .from("profiles")
        .select("plano, plan_expires_at")
        .eq("cpf", cpfDigits)
        .single();

      if (!error && data?.plano) {
        const planoNome = String(data.plano).toLowerCase().trim();
        if (data.plan_expires_at) {
          const agora = new Date();
          const expiraEm = new Date(data.plan_expires_at);
          planCookieValue = agora < expiraEm ? planoNome : "expired";
        } else {
          planCookieValue = planoNome;
        }
      }
    } catch (e) {
      console.error("Erro ao buscar plano:", e);
    }

    response.cookies.set("otia_plan", planCookieValue, cookieBase);

    return response;
  } catch (err: any) {
    console.error("VERIFY_OTP: erro crítico", err);
    return NextResponse.json({ ok: false, error: publicTwilioError(err) }, { status: 500 });
  }
}
