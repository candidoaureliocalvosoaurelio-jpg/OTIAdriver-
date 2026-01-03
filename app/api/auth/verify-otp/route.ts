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
  if (digits.length === 12 || digits.length === 13) return `+${digits}`;
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;
  return digits.length > 8 ? `+${digits}` : null;
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

    if (!code || cpfDigits.length !== 11 || !phoneE164) {
      return NextResponse.json({ ok: false, error: "Dados incompletos" }, { status: 400 });
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!accountSid || !authToken || !verifyServiceSid) {
      return NextResponse.json({ ok: false, error: "Configuração Twilio ausente" }, { status: 500 });
    }

    const client = twilio(accountSid, authToken);

    // Validação do código no Twilio
    const verification = await client.verify.v2
      .services(verifyServiceSid)
      .verificationChecks.create({ to: phoneE164, code });

    if (verification.status !== "approved") {
      return NextResponse.json({ ok: false, error: "Código incorreto ou expirado" }, { status: 400 });
    }

    const response = NextResponse.json({ ok: true });

    const cookieBase = {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // Cookie dura 30 dias
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
    };

    response.cookies.set("otia_auth", "1", cookieBase);
    response.cookies.set("otia_cpf", cpfDigits, cookieBase);

    // --- LÓGICA DE VALIDAÇÃO DO PLANO E EXPIRAÇÃO ---
    let planCookieValue = "none";

    try {
      const supabase = getSupabaseAdmin();
      const { data, error } = await supabase
        .from("profiles")
        .select("plano, plan_expires_at")
        .eq("cpf", cpfDigits)
        .single();

      if (!error && data?.plano) {
        const planoNome = data.plano.toLowerCase().trim();
        
        // Se houver data de expiração, verificamos se ainda é válida
        if (data.plan_expires_at) {
          const agora = new Date();
          const expiraEm = new Date(data.plan_expires_at);

          if (agora < expiraEm) {
            // Plano ainda é válido!
            planCookieValue = planoNome;
          } else {
            // Plano venceu os 30 dias
            planCookieValue = "expired";
          }
        } else {
          // Fallback caso não tenha data (usuários antigos ou manuais)
          planCookieValue = planoNome;
        }
      }
    } catch (e) {
      planCookieValue = "none";
    }

    // Grava o cookie final que o Middleware vai ler
    response.cookies.set("otia_plan", planCookieValue, cookieBase);

    return response;

  } catch (err: any) {
    console.error("Erro na verificação:", err);
    return NextResponse.json({ ok: false, error: "Erro ao validar código" }, { status: 500 });
  }
}