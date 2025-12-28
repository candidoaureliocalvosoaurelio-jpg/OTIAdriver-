// app/api/auth/verify-otp/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

// Converte telefone BR para E.164 (+55XXXXXXXXXXX)
function toE164BR(phoneRaw: string) {
  const p = onlyDigits(phoneRaw);

  // DDD + número (10 ou 11 dígitos, sem 55)
  if (p.length === 10 || p.length === 11) return `+55${p}`;

  // Já veio com 55 (12 ou 13 dígitos)
  if ((p.length === 12 || p.length === 13) && p.startsWith("55")) return `+${p}`;

  throw new Error("Celular inválido. Use DDD + número.");
}

/**
 * MVP: regra temporária para simular "plano ativo".
 * Depois você troca isso por consulta real (Mercado Pago / DB).
 */
function hasActivePlan(cpfDigits: string): boolean {
  const activeCpfs = new Set<string>([
    // "62833030134",
  ]);
  return activeCpfs.has(cpfDigits);
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) throw new Error("SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY ausentes.");

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    const cpfDigits = onlyDigits(body?.cpf);
    const phoneRaw = body?.phone;
    const codeDigits = onlyDigits(body?.code);

    if (!cpfDigits || !phoneRaw || !codeDigits) {
      return NextResponse.json({ error: "Dados incompletos." }, { status: 400 });
    }

    if (cpfDigits.length !== 11) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    if (codeDigits.length !== 6) {
      return NextResponse.json({ error: "Código inválido." }, { status: 400 });
    }

    // ===== 1) Confere OTP na Twilio Verify =====
    const accountSid = process.env.TWILIO_ACCOUNT_SID!;
    const authToken = process.env.TWILIO_AUTH_TOKEN!;
    const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID!;

    if (!accountSid || !authToken || !verifyServiceSid) {
      return NextResponse.json({ error: "Twilio não configurado (env)." }, { status: 500 });
    }

    const to = toE164BR(phoneRaw);
    const client = twilio(accountSid, authToken);

    const check = await client.verify.v2
      .services(verifyServiceSid)
      .verificationChecks.create({ to, code: codeDigits });

    if (check.status !== "approved") {
      return NextResponse.json({ error: "Código incorreto." }, { status: 400 });
    }

    // ===== 2) Decide plano =====
    const active = hasActivePlan(cpfDigits);
    const planoValue = active ? "active" : "free";
    const redirectTo = active ? "/app" : "/planos";

    // ===== 3) Salva no Supabase (DB-only) =====
    const supabaseAdmin = getSupabaseAdmin();

    // Upsert usando CPF como chave (cpf é UNIQUE)
    const { error: upsertErr } = await supabaseAdmin
      .from("profiles")
      .upsert(
        {
          cpf: cpfDigits,
          phone: to,
          plano: planoValue,
        },
        { onConflict: "cpf" }
      );

    if (upsertErr) {
      return NextResponse.json({ error: `Erro ao salvar profile: ${upsertErr.message}` }, { status: 500 });
    }

    // ===== 4) Cookies e resposta =====
    const res = NextResponse.json({
      success: true,
      status: active ? "active" : "inactive",
      redirectTo,
    });

    // Em localhost (http), secure=true não grava cookie. Então:
    const secure = process.env.NODE_ENV === "production";

    res.cookies.set("otia_auth", "1", {
      httpOnly: true,
      sameSite: "lax",
      secure,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    res.cookies.set("otia_plan", active ? "active" : "inactive", {
      httpOnly: true,
      sameSite: "lax",
      secure,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    // (Opcional) guardar CPF para identificar o usuário no backend
    res.cookies.set("otia_cpf", cpfDigits, {
      httpOnly: true,
      sameSite: "lax",
      secure,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return res;
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Erro ao verificar código." }, { status: 500 });
  }
}
