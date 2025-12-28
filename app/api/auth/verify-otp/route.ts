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

  if (p.length === 10 || p.length === 11) return `+55${p}`;
  if ((p.length === 12 || p.length === 13) && p.startsWith("55")) return `+${p}`;

  throw new Error("Celular inválido. Use DDD + número.");
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) {
    throw new Error("SUPABASE_URL / SERVICE_ROLE_KEY ausentes");
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    const cpf = onlyDigits(body?.cpf);
    const phoneRaw = body?.phone;
    const code = onlyDigits(body?.code);

    if (!cpf || !phoneRaw || !code) {
      return NextResponse.json({ error: "Dados incompletos." }, { status: 400 });
    }

    if (cpf.length !== 11) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    if (code.length !== 6) {
      return NextResponse.json({ error: "Código inválido." }, { status: 400 });
    }

    // ===== 1) Verifica OTP na Twilio =====
    const accountSid = process.env.TWILIO_ACCOUNT_SID!;
    const authToken = process.env.TWILIO_AUTH_TOKEN!;
    const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID!;

    if (!accountSid || !authToken || !verifyServiceSid) {
      return NextResponse.json({ error: "Twilio não configurado." }, { status: 500 });
    }

    const to = toE164BR(phoneRaw);
    const client = twilio(accountSid, authToken);

    const check = await client.verify.v2
      .services(verifyServiceSid)
      .verificationChecks.create({ to, code });

    if (check.status !== "approved") {
      return NextResponse.json({ error: "Código incorreto." }, { status: 400 });
    }

    // ===== 2) Busca perfil e plano no Supabase =====
    const supabase = getSupabaseAdmin();

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("plano")
      .eq("cpf", cpf)
      .maybeSingle();

    if (error) {
      return NextResponse.json(
        { error: "Erro ao buscar perfil." },
        { status: 500 }
      );
    }

    const plano =
      profile?.plano && ["basico", "pro", "premium"].includes(profile.plano)
        ? profile.plano
        : "free";

    const redirectTo = plano === "free" ? "/planos" : "/app";

    // ===== 3) Atualiza telefone (opcional) =====
    await supabase
      .from("profiles")
      .upsert(
        { cpf, phone: to },
        { onConflict: "cpf" }
      );

    // ===== 4) Cookies =====
    const res = NextResponse.json({
      success: true,
      plano,
      redirectTo,
    });

    const secure = process.env.NODE_ENV === "production";

    res.cookies.set("otia_auth", "1", {
      httpOnly: true,
      sameSite: "lax",
      secure,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    res.cookies.set("otia_plan", plano, {
      httpOnly: true,
      sameSite: "lax",
      secure,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    res.cookies.set("otia_cpf", cpf, {
      httpOnly: true,
      sameSite: "lax",
      secure,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return res;
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Erro ao verificar código." },
      { status: 500 }
    );
  }
}
