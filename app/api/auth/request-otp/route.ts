import { NextResponse } from "next/server";
import twilio from "twilio";

<<<<<<< HEAD
export const runtime = "nodejs";
=======
// Garante execução em Node.js (necessário para o SDK da Twilio)
export const runtime = "nodejs";
// Evita cache em rotas dinâmicas de API
>>>>>>> 6f54644 (fix(auth): request/verify otp and session cookies)
export const dynamic = "force-dynamic";

/**
 * Remove caracteres não numéricos
 */
function onlyDigits(v: string) {
  return (v || "").replace(/\D+/g, "");
}

<<<<<<< HEAD
function normalizeToE164(phoneRaw: string) {
  const digits = onlyDigits(phoneRaw);
  // Se tiver DDD + número (10 ou 11 dígitos)
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;
  // Se já tiver o 55 (12 ou 13 dígitos)
  if (digits.length === 12 || digits.length === 13) return `+${digits}`;
  return null;
=======
/**
 * Normaliza o telefone para o formato E.164 exigido pelo Twilio (+55XXXXXXXXXXX)
 * Aceita números com ou sem o código do país (55)
 */
function normalizeToE164(phoneRaw: string) {
  const digits = onlyDigits(phoneRaw);
  
  // Caso 1: Usuário digitou DDD + número (ex: 62982868061) -> 10 ou 11 dígitos
  if (digits.length === 10 || digits.length === 11) {
    return `+55${digits}`;
  }
  
  // Caso 2: Já inclui o 55 (ex: 5562982868061) -> 12 ou 13 dígitos
  if (digits.length === 12 || digits.length === 13) {
    return `+${digits}`;
  }

  // Fallback para outros formatos ou erro
  return digits.length > 8 ? `+${digits}` : null;
>>>>>>> 6f54644 (fix(auth): request/verify otp and session cookies)
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const cpfDigits = onlyDigits(body?.cpf);
    const phoneRaw = body?.phone;

<<<<<<< HEAD
=======
    // 1. Validação de CPF
>>>>>>> 6f54644 (fix(auth): request/verify otp and session cookies)
    if (!cpfDigits || cpfDigits.length !== 11) {
      return NextResponse.json(
        { error: "CPF inválido. Digite os 11 números." }, 
        { status: 400 }
      );
    }

<<<<<<< HEAD
    const to = normalizeToE164(phoneRaw);
    if (!to) {
      return NextResponse.json({ error: "Celular inválido. Use DDD + Número." }, { status: 400 });
    }

=======
    // 2. Normalização do Telefone
    const to = normalizeToE164(phoneRaw);
    if (!to) {
      return NextResponse.json(
        { error: "Celular inválido. Use DDD + Número (ex: 62982868061)." }, 
        { status: 400 }
      );
    }

    // 3. Verificação de Variáveis de Ambiente
>>>>>>> 6f54644 (fix(auth): request/verify otp and session cookies)
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!accountSid || !authToken || !serviceSid) {
<<<<<<< HEAD
      return NextResponse.json({ error: "Configuração do SMS pendente." }, { status: 500 });
=======
      console.error("ERRO CRÍTICO: Variáveis TWILIO ausentes no ambiente.");
      return NextResponse.json(
        { error: "Serviço de SMS indisponível (Erro de configuração)." }, 
        { status: 500 }
      );
>>>>>>> 6f54644 (fix(auth): request/verify otp and session cookies)
    }

    // 4. Inicialização do Cliente Twilio
    const client = twilio(accountSid, authToken);

<<<<<<< HEAD
=======
    // 5. Envio do Código via Twilio Verify
    // O Twilio Verify gerencia a geração e expiração do código automaticamente
>>>>>>> 6f54644 (fix(auth): request/verify otp and session cookies)
    await client.verify.v2.services(serviceSid).verifications.create({
      to,
      channel: "sms",
    });

    return NextResponse.json({ success: true });

  } catch (e: any) {
<<<<<<< HEAD
    console.error("Erro Twilio:", e.message);
    return NextResponse.json(
      { error: "Não foi possível enviar o SMS. Verifique o número." },
=======
    // Log detalhado para depuração no painel da Vercel
    console.error("DETALHES DO ERRO TWILIO:", {
      message: e.message,
      code: e.code,
      status: e.status
    });

    // Tratamento de erro específico do Twilio para número inválido
    if (e.code === 21211 || e.code === 60200) {
      return NextResponse.json(
        { error: "Número de celular inválido para envio de SMS." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Não foi possível enviar o código agora. Verifique suas credenciais." },
>>>>>>> 6f54644 (fix(auth): request/verify otp and session cookies)
      { status: 500 }
    );
  }
}