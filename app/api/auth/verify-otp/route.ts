// app/api/auth/verify-otp/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

/**
 * Normaliza telefone BR para E.164 (+55DDDNXXXXXXXX ou +55DDDXXXXXXXX)
 * Aceita entradas como:
 *  - "(62) 98286-8061"
 *  - "62982868061"
 *  - "+55 (62) 98286-8061"
 */
function normalizeToE164(phoneRaw: string): string | null {
  const d = onlyDigits(phoneRaw);

  // Já veio com 55 + DDD + número (13 dígitos para celular, 12 para fixo)
  if (d.startsWith("55") && (d.length === 12 || d.length === 13)) {
    return `+${d}`;
  }

  // Veio como DDD + número (11 celular, 10 fixo)
  if (d.length === 10 || d.length === 11) {
    return `+55${d}`;
  }

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
    const codeDigits = onlyDigits(code || "");

    if (cpfDigits.length !== 11) {
      return NextResponse.json({ ok: false, error: "CPF inválido" }, { status: 400 });
    }
    if (!phoneE164) {
      return NextResponse.json({ ok: false, error: "Telefone inválido (use DDD)" }, { status: 400 });
    }
    if (codeDigits.length !== 6) {
      return NextResponse.json({ ok: false, error: "Código deve ter 6 dígitos" }, { status: 400 });
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!accountSid || !authToken || !verifyServiceSid) {
      return NextResponse.json({ ok: false, error: "Configuração Twilio ausente" }, { status: 500 });
    }

    const client = twilio(accountSid, authToken);

    // Log leve (não expõe dados completos)
    console.log("VERIFY_OTP: start", {
      cpfLast2: cpfDigits.slice(-2),
      phoneTail: phoneE164.slice(-4),
      serviceTail: verifyServiceSid.slice(-6),
    });

    // Validação do código no Twilio (to + code precisam bater com o request-otp)
    const verification = await client.verify.v2
      .services(verifyServiceSid)
      .verificationChecks.create({
        to: phoneE164,
        code: codeDigits,
      });

    console.log("VERIFY_OTP: twilio status", { status: verification.status });

    if (verification.status !== "approved") {
      return NextResponse.json(
        { ok: false, error: "Código incorreto ou expirado" },
        { status: 400 }
      );
    }

    const response = NextResponse.json({ ok: true });

    // Cookie domain (www e sem www)
    const cookieDomain =
      process.env.NODE_ENV === "production" ? process.env.COOKIE_DOMAIN : undefined;

    const cookieBase = {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      ...(cookieDomain ? { domain: cookieDomain } : {}),
    };

    response.cookies.set("otia_auth", "1", cookieBase);
    response.cookies.set("otia_cpf", cpfDigits, cookieBase);

    // --- PLANO (lê do banco) ---
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
    } catch {
      planCookieValue = "none";
    }

    response.cookies.set("otia_plan", planCookieValue, cookieBase);

    console.log("VERIFY_OTP: ok", { planCookieValue });
    return response;

  } catch (err: any) {
    // Se for erro do Twilio, ele costuma vir com "code" e "message"
    console.error("VERIFY_OTP: error", {
      code: err?.code,
      message: err?.message,
      moreInfo: err?.moreInfo,
      status: err?.status,
    });

    // Ajuda a diagnosticar rápido no frontend (sem expor segredos)
    return NextResponse.json(
      {
        ok: false,
        error: "Erro ao validar código",
        twilio_code: err?.code ?? null,
      },
      { status: 500 }
    );
  }
}
