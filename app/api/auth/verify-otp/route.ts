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

    // ✅ Login aprovado pela Twilio
    const response = NextResponse.json({ ok: true });

    const cookieBase = {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
    };

    // Identidade / sessão
    response.cookies.set("otia_auth", "1", cookieBase);
    response.cookies.set("otia_cpf", cpfDigits, cookieBase);

    // ✅ Plano real: consulta no Supabase
    // O middleware agora espera um destes: "basico" | "pro" | "premium"
    let planCookieValue = "none"; 

    try {
      const supabase = getSupabaseAdmin();
      const { data, error } = await supabase
        .from("profiles")
        .select("plano")
        .eq("cpf", cpfDigits)
        .single();

      // Mapeia o valor do banco para o que o Middleware aceita
      if (!error && data?.plano) {
        // Converte para minúsculas para bater com a lista VALID_PLANS do middleware
        const planoDb = data.plano.toLowerCase().trim();
        
        // Se for um plano reconhecido, atribui ao cookie
        if (["basico", "pro", "premium"].includes(planoDb)) {
          planCookieValue = planoDb;
        } else {
          // Caso exista um plano mas o nome seja diferente (ex: "BASIC"), define o padrão
          planCookieValue = "basico"; 
        }
      }
    } catch (e) {
      console.error("Erro ao buscar plano no Supabase:", e);
      planCookieValue = "none";
    }

    // Grava o cookie com o nome oficial do plano para o Middleware liberar as marcas
    response.cookies.set("otia_plan", planCookieValue, cookieBase);

    return response;

  } catch (err: any) {
    console.error("Erro técnico na verificação:", {
      message: err?.message,
      status: err?.status,
      code: err?.code,
    });

    const msg =
      err?.status === 404
        ? "Sessão de verificação não encontrada. Solicite um novo código SMS."
        : "Erro ao validar código. Tente reenviar o SMS.";

    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
