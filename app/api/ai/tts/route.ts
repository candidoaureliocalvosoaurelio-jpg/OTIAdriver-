// app/api/ai/tts/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import OpenAI from "openai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Ajuste as vozes permitidas (evita alguém mandar string maluca)
const ALLOWED_VOICES = new Set([
  "alloy",
  "ash",
  "coral",
  "echo",
  "fable",
  "onyx",
  "nova",
  "sage",
  "shimmer",
]);

function isPaidPlan(p: string) {
  const plan = String(p || "").toLowerCase();
  return plan === "basico" || plan === "pro" || plan === "premium" || plan === "active";
}

// ✅ Bloqueio simples no TTS (igual seu modelo de acesso do Copilot)
async function assertPaidAccessOrThrow() {
  const c = await cookies();
  const auth = c.get("otia_auth")?.value || "";
  const plan = (c.get("otia_plan")?.value || "none").toLowerCase();

  const paid = auth === "1" && isPaidPlan(plan);
  if (!paid) {
    const err: any = new Error("Acesso restrito. Assine um plano para usar o áudio do Copilot.");
    err.status = 402;
    throw err;
  }

  return { plan };
}

export async function POST(req: Request) {
  try {
    // ✅ bloqueio simples
    await assertPaidAccessOrThrow();

    const body = await req.json().catch(() => ({}));
    const text = String(body?.text ?? "").trim();
    const voice = String(body?.voice ?? "onyx").trim().toLowerCase(); // padrão: onyx (masc.)

    if (!text) {
      return NextResponse.json({ error: "Texto inválido." }, { status: 400 });
    }

    if (!ALLOWED_VOICES.has(voice)) {
      return NextResponse.json(
        {
          error: "Voz inválida.",
          details: `Use uma destas: ${Array.from(ALLOWED_VOICES).join(", ")}`,
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "OPENAI_API_KEY ausente." }, { status: 500 });
    }

    const client = new OpenAI({ apiKey });

    // ✅ CORREÇÃO: no SDK atual é "response_format" (não "format")
    const audio = await client.audio.speech.create({
      model: "gpt-4o-mini-tts",
      voice: voice as any,
      input: text,
      response_format: "mp3",
    });

    const arrayBuffer = await audio.arrayBuffer();

    return new NextResponse(Buffer.from(arrayBuffer), {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": "inline; filename=otiadriver-tts.mp3",
        "Cache-Control": "no-store",
      },
    });
  } catch (err: any) {
    const status = Number.isFinite(err?.status) ? err.status : 500;

    return NextResponse.json(
      { error: "Falha no TTS", details: String(err?.message || err) },
      { status }
    );
  }
}
