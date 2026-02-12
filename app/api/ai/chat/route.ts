// app/api/ai/chat/route.ts
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MONTHLY_LIMIT = 150;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY ausentes no .env.local");
  return createClient(url, key, { auth: { persistSession: false } });
}

function isPaidPlan(p: string) {
  const plan = String(p || "").toLowerCase();
  return plan === "basico" || plan === "pro" || plan === "premium" || plan === "active";
}

function monthKeyUTC(d = new Date()) {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  return `${y}-${m}`; // YYYY-MM
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function isRetryableOpenAIError(e: any) {
  const status = e?.status;
  const type = e?.type;
  return status === 429 || status === 500 || status === 502 || status === 503 || status === 504 || type === "server_error";
}

async function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), ms);

  try {
    return await Promise.race([
      p,
      new Promise<T>((_, rej) => {
        ac.signal.addEventListener("abort", () => rej(new Error(`Timeout (${label}) após ${ms}ms`)));
      }),
    ]);
  } finally {
    clearTimeout(t);
  }
}

async function embedQuery(text: string) {
  const models = ["text-embedding-3-small", "text-embedding-3-large"] as const;

  let lastErr: any = null;

  for (const model of models) {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const req = openai.embeddings.create({ model, input: text });
        const r = await withTimeout(req, 20000, `embeddings:${model}:attempt${attempt}`);
        return r.data[0].embedding;
      } catch (e: any) {
        lastErr = e;
        if (!isRetryableOpenAIError(e)) throw e;

        const wait = 800 * attempt + Math.floor(Math.random() * 250);
        await sleep(wait);
      }
    }
  }

  throw lastErr || new Error("Falha ao gerar embedding (sem detalhes).");
}

async function retrieveContext(question: string) {
  const supabase = getSupabaseAdmin();
  const qEmb = await embedQuery(question);

  const { data, error } = await supabase.rpc("match_kb_chunks", {
    query_embedding: qEmb,
    match_count: 10,
    min_similarity: 0.2,
  });

  if (error) throw new Error(`Supabase RPC match_kb_chunks falhou: ${error.message}`);
  if (!data?.length) return "(Sem contexto OTIAdriver suficiente para responder com certeza.)";

  const hits = data as Array<{ content: string; similarity: number; meta: any }>;

  return hits
    .map((h, i) => {
      const title = h.meta?.title ? `Título: ${h.meta.title}` : "";
      const source = h.meta?.source ? `Fonte: ${h.meta.source}` : "";
      const p = h.meta?.path ? `Path: ${h.meta.path}` : "";
      return `[#${i + 1}] ${title}\n${source}\n${p}\nTrecho:\n${h.content}`.trim();
    })
    .join("\n\n---\n\n");
}

const SYSTEM_PROMPT = `
Você é a OTIAdriver Copilot IA (instrutor e copiloto de caminhoneiros).
Use PRIORITARIAMENTE o "Contexto OTIAdriver". Se não tiver certeza, faça perguntas objetivas.
Formato obrigatório:
1) Diagnóstico rápido
2) Ação imediata (passo a passo)
3) Pode rodar? (SIM / COM CUIDADO / NÃO)
4) Próximos passos (manutenção/oficina)
5) Prevenção
Regras:
- PT-BR, direto, prático, linguagem de estrada.
- Segurança acima de tudo.
- NÃO inventar especificação/manuais.
`.trim();

/**
 * ✅ Identidade para quota:
 * - Preferência: cookie "otia_uid" (uuid)
 * - Fallback: buscar profiles.id pelo cookie "otia_cpf" (se você tiver essa coluna)
 */
async function getUserIdOrThrow() {
  const c = await cookies();

  const uid = c.get("otia_uid")?.value?.trim() || "";
  if (uid) return uid;

  const cpf = (c.get("otia_cpf")?.value || "").replace(/\D+/g, "");
  if (cpf.length !== 11) {
    throw Object.assign(new Error("Usuário não identificado (cookie uid ausente)."), { status: 401 });
  }

  // fallback via profiles (precisa existir coluna id uuid em profiles)
  const sb = getSupabaseAdmin();
  const prof = await sb.from("profiles").select("id").eq("cpf", cpf).maybeSingle();

  const pid = (prof.data as any)?.id;
  if (!pid) {
    throw Object.assign(new Error("Usuário não identificado (profiles.id não encontrado)."), { status: 401 });
  }

  return String(pid);
}

async function assertPaidAccessOrThrow() {
  const c = await cookies();
  const auth = c.get("otia_auth")?.value || "";
  const plan = (c.get("otia_plan")?.value || "none").toLowerCase();

  const paid = auth === "1" && isPaidPlan(plan);
  if (!paid) {
    throw Object.assign(new Error("Acesso restrito. Assine um plano para usar a Copilot IA."), { status: 402 });
  }

  return { plan };
}

async function getQuotaSnapshot(userId: string) {
  const sb = getSupabaseAdmin();
  const mk = monthKeyUTC();

  const { data, error } = await sb
    .from("copilot_usage")
    .select("questions_used")
    .eq("user_id", userId)
    .eq("month_key", mk)
    .maybeSingle();

  if (error) throw new Error(`Falha ao consultar quota: ${error.message}`);

  const used = Number(data?.questions_used || 0);
  const remaining = Math.max(MONTHLY_LIMIT - used, 0);
  return { monthKey: mk, used, remaining, limit: MONTHLY_LIMIT };
}

async function consumeQuota(userId: string) {
  const sb = getSupabaseAdmin();
  const mk = monthKeyUTC();

  const { data, error } = await sb.rpc("consume_copilot_quota", {
    p_user_id: userId,
    p_month_key: mk,
    p_limit: MONTHLY_LIMIT,
  });

  if (error) throw new Error(`Falha ao consumir quota: ${error.message}`);

  // rpc retorna TABLE(allowed boolean, used int, remaining int)
  const row = Array.isArray(data) ? data[0] : data;
  const allowed = !!row?.allowed;
  const used = Number(row?.used || 0);
  const remaining = Number(row?.remaining || 0);

  return { monthKey: mk, allowed, used, remaining, limit: MONTHLY_LIMIT };
}

/**
 * ✅ GET /api/ai/chat
 * Para o Copilot buscar o contador (sem consumir)
 */
export async function GET() {
  try {
    await assertPaidAccessOrThrow();
    const userId = await getUserIdOrThrow();
    const snap = await getQuotaSnapshot(userId);

    return new Response(JSON.stringify({ ok: true, ...snap }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        "X-Copilot-Limit": String(snap.limit),
        "X-Copilot-Used": String(snap.used),
        "X-Copilot-Remaining": String(snap.remaining),
      },
    });
  } catch (e: any) {
    const status = Number.isFinite(e?.status) ? e.status : 500;
    return new Response(JSON.stringify({ ok: false, error: e?.message || "Falha ao consultar quota." }), {
      status,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  }
}

/**
 * ✅ POST /api/ai/chat
 * Consome 1 quota e responde (stream)
 */
export async function POST(req: NextRequest) {
  try {
    await assertPaidAccessOrThrow();
    const userId = await getUserIdOrThrow();

    const body = await req.json().catch(() => null);
    const message = String(body?.message || "").trim();
    if (!message) {
      return new Response(JSON.stringify({ error: "Mensagem vazia." }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      });
    }

    // ✅ consome quota ANTES de chamar OpenAI (pra não gastar custo sem quota)
    const quota = await consumeQuota(userId);

    if (!quota.allowed) {
      return new Response(
        JSON.stringify({
          error: "Limite mensal atingido.",
          details: `Você já usou ${quota.used}/${quota.limit}. Renove no próximo mês ou ajuste seu plano.`,
          used: quota.used,
          remaining: quota.remaining,
          limit: quota.limit,
          monthKey: quota.monthKey,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
            "X-Copilot-Limit": String(quota.limit),
            "X-Copilot-Used": String(quota.used),
            "X-Copilot-Remaining": String(quota.remaining),
          },
        }
      );
    }

    const context = await retrieveContext(message);

    const stream = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      stream: true,
      temperature: 0.2,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "system", content: `Contexto OTIAdriver (base interna):\n\n${context}` },
        { role: "user", content: message },
      ],
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const part of stream) {
            const token = part.choices?.[0]?.delta?.content || "";
            if (token) controller.enqueue(encoder.encode(token));
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        // ✅ headers para a UI atualizar o badge imediatamente
        "X-Copilot-Limit": String(quota.limit),
        "X-Copilot-Used": String(quota.used),
        "X-Copilot-Remaining": String(quota.remaining),
      },
    });
  } catch (e: any) {
    console.error("AI_CHAT_ERROR:", e);

    const status = Number.isFinite(e?.status) ? e.status : 500;
    const requestId = e?.requestID || e?.requestId || null;

    return new Response(
      JSON.stringify({
        error: "Falha ao chamar IA.",
        details: e?.message || String(e),
        requestId,
      }),
      {
        status,
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      }
    );
  }
}
