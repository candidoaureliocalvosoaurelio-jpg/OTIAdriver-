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
  if (digits.length === 12 || digits.length === 13) return `+${digits}`; // já com DDI
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`; // BR sem DDI
  return digits.length > 8 ? `+${digits}` : null;
}

// Supabase admin (service role) para ler o plano com segurança
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
      return NextResponse.json(
        { ok: false, error: "Configuração ausente (Twilio env)" },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    const verification = await client.verify.v2
      .services(verifyServiceSid)
      .verificationChecks.create({ to: phoneE164, code });

    if (verification.status !== "approved") {
      return NextResponse.json({ ok: false, error: "Código incorreto ou expirado" }, { status: 400 });
    }

    // ✅ Login aprovado
    const response = NextResponse.json({ ok: true });

    const cookieBase = {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
    };

    // Identidade / sessão
    response.cookies.set("otia_auth", "1", cookieBase);
    response.cookies.set("otia_cpf", cpfDigits, cookieBase);

    // ✅ Plano real: consulta no Supabase
    // O middleware espera: otia_plan = "active" | "inactive"
    let planCookieValue: "active" | "inactive" = "inactive";

    try {
      const supabase = getSupabaseAdmin();
      const { data, error } = await supabase
        .from("profiles")
        .select("plano")
        .eq("cpf", cpfDigits)
        .single();

      // Se existe um plano no perfil, consideramos "active"
      // (se você tiver uma coluna de status, aqui é onde você valida)
      if (!error && data?.plano) {
        planCookieValue = "active";
      }
    } catch (e) {
      // Se o Supabase falhar, não libera acesso
      planCookieValue = "inactive";
    }

    response.cookies.set("otia_plan", planCookieValue, cookieBase);

    return response;
  } catch (err: any) {
    console.error("Erro na verificação Twilio:", {
      message: err?.message,
      status: err?.status,
      code: err?.code,
      moreInfo: err?.moreInfo,
      details: err?.details,
    });

    const msg =
      err?.status === 404
        ? "Serviço de verificação Twilio (VERIFY_SERVICE_SID) não encontrado. Confirme o Service SID e a conta."
        : "Erro ao validar código. Tente reenviar o SMS.";

    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
