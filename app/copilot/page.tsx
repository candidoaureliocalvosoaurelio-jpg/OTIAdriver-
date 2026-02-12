"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Role = "user" | "assistant" | "system";
type Msg = { id: string; role: Role; content: string; ts: number };

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

const STORAGE_KEY = "otiadriver_copilot_history_v1";

const SUGGESTIONS = [
  "Acendeu a luz do motor e perdeu força. Posso rodar?",
  "Qual a pressão ideal do pneu e como conferir corretamente?",
  "Como fazer rodízio de pneus e quando é recomendado?",
  "O que significa alerta de temperatura alta e o que fazer na hora?",
  "DPF/ARLA: quando precisa regenerar e o que NÃO fazer?",
];

type Quota = {
  limit: number;
  used: number;
  remaining: number;
  monthKey?: string;
};

type TopAlert =
  | null
  | {
      type: "danger" | "warning" | "info";
      title: string;
      message?: string;
      actionHref?: string;
      actionLabel?: string;
    };

function parseQuotaHeaders(res: Response): Partial<Quota> | null {
  const limit = res.headers.get("X-Copilot-Limit");
  const used = res.headers.get("X-Copilot-Used");
  const remaining = res.headers.get("X-Copilot-Remaining");
  if (!limit && !used && !remaining) return null;

  const out: Partial<Quota> = {};
  if (limit) out.limit = Number(limit);
  if (used) out.used = Number(used);
  if (remaining) out.remaining = Number(remaining);
  return out;
}

function quotaBadgeClass(remaining: number) {
  if (remaining <= 0) return "border-red-300 bg-red-50 text-red-800";
  if (remaining < 10) return "border-red-200 bg-red-50 text-red-800";
  if (remaining <= 50) return "border-yellow-200 bg-yellow-50 text-yellow-800";
  return "border-emerald-200 bg-emerald-50 text-emerald-800";
}

function quotaDotClass(remaining: number) {
  if (remaining <= 0) return "bg-red-500";
  if (remaining < 10) return "bg-red-500";
  if (remaining <= 50) return "bg-yellow-500";
  return "bg-emerald-500";
}

function alertBoxClass(type: NonNullable<TopAlert>["type"]) {
  if (type === "danger") return "border-red-300 bg-red-50 text-red-800";
  if (type === "warning") return "border-yellow-200 bg-yellow-50 text-yellow-800";
  return "border-blue-200 bg-blue-50 text-blue-800";
}

export default function CopilotPage() {
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      id: uid(),
      role: "assistant",
      ts: Date.now(),
      content:
        "🔥🚛 Sou a OTIAdriver Copilot IA. Me diga o que apareceu no painel, o modelo do caminhão (se souber) e o que o caminhão está fazendo.",
    },
  ]);

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"online" | "erro" | "off">("online");

  // ✅ quota
  const [quota, setQuota] = useState<Quota>({ limit: 150, used: 0, remaining: 150 });
  const [quotaLoading, setQuotaLoading] = useState(true);

  // ✅ top alert (vermelho importante)
  const [topAlert, setTopAlert] = useState<TopAlert>(null);

  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const blocked = quota.remaining <= 0;

  const canSend = useMemo(
    () => text.trim().length > 0 && !loading && !blocked,
    [text, loading, blocked]
  );

  // Auto-scroll
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [msgs, loading]);

  // Persist history
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
    } catch {}
  }, [msgs]);

  // Load history once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Msg[];
      if (Array.isArray(parsed) && parsed.length) setMsgs(parsed);
    } catch {}
  }, []);

  // ✅ Load quota on open (GET /api/ai/chat)
  useEffect(() => {
    let alive = true;

    async function loadQuota() {
      setQuotaLoading(true);
      try {
        const res = await fetch("/api/ai/chat", { method: "GET" });

        const json = await res.json().catch(() => null);
        const h = parseQuotaHeaders(res);

        if (!alive) return;

        // Se o backend devolver erro no GET, sobe o alerta
        if (!res.ok) {
          setStatus("erro");

          const code = res.status;
          const msg =
            json?.error ||
            (code === 401
              ? "Usuário não identificado. Faça login novamente."
              : code === 402
                ? "Acesso restrito. Assine um plano para usar o Copilot."
                : "Falha ao carregar cota do Copilot.");

          setTopAlert({
            type: "danger",
            title: "⚠️ Atenção",
            message: msg,
            // ✅ 401 -> entrar e voltar pro /copilot
            actionHref: code === 401 ? "/entrar?next=/copilot" : "/planos",
            actionLabel: code === 401 ? "Entrar" : "Ver planos",
          });

          // Mesmo com erro, mantém default de quota
          return;
        }

        const q: Quota = {
          limit: Number(json?.limit ?? h?.limit ?? 150),
          used: Number(json?.used ?? h?.used ?? 0),
          remaining: Number(json?.remaining ?? h?.remaining ?? 150),
          monthKey: json?.monthKey,
        };

        setQuota(q);

        // Se carregou ok, limpa alerta (exceto se já estiver bloqueado)
        setStatus("online");
        setTopAlert(null);
      } catch {
        // não mata a página, só avisa
        if (!alive) return;
        setStatus("erro");
        setTopAlert({
          type: "warning",
          title: "⚠️ Atenção",
          message: "Não consegui carregar a cota agora. Tente atualizar a página.",
        });
      } finally {
        if (alive) setQuotaLoading(false);
      }
    }

    loadQuota();
    return () => {
      alive = false;
    };
  }, []);

  // ✅ Se bloquear, garante alerta vermelho forte (IMPORTANTE)
  useEffect(() => {
    if (quotaLoading) return;
    if (blocked) {
      setTopAlert({
        type: "danger",
        title: "⛔ Limite mensal atingido",
        message: `Você já usou ${quota.used}/${quota.limit}. Renove no próximo mês ou veja os planos.`,
        actionHref: "/planos",
        actionLabel: "Ver planos / Renovar",
      });
      setStatus("erro");
    }
  }, [blocked, quotaLoading, quota.used, quota.limit]);

  function clearChat() {
    const base: Msg[] = [
      {
        id: uid(),
        role: "assistant",
        ts: Date.now(),
        content:
          "🔥🚛 Sou a OTIAdriver Copilot IA. Me diga o que apareceu no painel, o modelo do caminhão (se souber) e o que o caminhão está fazendo.",
      },
    ];
    setMsgs(base);
    setText("");
    setStatus("online");
    // não limpa alerta se estiver bloqueado
    if (!blocked) setTopAlert(null);
    inputRef.current?.focus();
  }

  function pushUser(content: string) {
    const m: Msg = { id: uid(), role: "user", content, ts: Date.now() };
    setMsgs((prev) => [...prev, m]);
  }

  function pushAssistantEmpty() {
    const m: Msg = { id: uid(), role: "assistant", content: "", ts: Date.now() };
    setMsgs((prev) => [...prev, m]);
    return m.id;
  }

  function setAssistantContent(id: string, content: string) {
    setMsgs((prev) => prev.map((m) => (m.id === id ? { ...m, content } : m)));
  }

  function raiseTopErrorFromStatus(code: number, errJson: any) {
    const errMsg = String(errJson?.error || "Falha ao chamar IA.");
    const details = String(errJson?.details || "");

    if (code === 401) {
      setTopAlert({
        type: "danger",
        title: "⚠️ Sessão inválida",
        message: "Usuário não identificado. Faça login novamente para usar o Copilot.",
        // ✅ 401 -> entrar e voltar pro /copilot
        actionHref: "/entrar?next=/copilot",
        actionLabel: "Entrar",
      });
      return;
    }

    if (code === 402) {
      setTopAlert({
        type: "danger",
        title: "🔒 Acesso restrito",
        message: errMsg || "Assine um plano para usar o Copilot IA.",
        actionHref: "/planos",
        actionLabel: "Ver planos",
      });
      return;
    }

    if (code === 429) {
      setTopAlert({
        type: "danger",
        title: "⛔ Limite atingido",
        message: errMsg || "Você atingiu o limite mensal de perguntas.",
        actionHref: "/planos",
        actionLabel: "Ver planos / Renovar",
      });
      return;
    }

    // genérico
    setTopAlert({
      type: "danger",
      title: "⚠️ Atenção",
      message: details ? `${errMsg} — ${details}` : errMsg,
    });
  }

  async function send(custom?: string) {
    const message = (custom ?? text).trim();
    if (!message || loading || blocked) return;

    setStatus("online");
    if (!blocked) setTopAlert(null);

    pushUser(message);
    setText("");
    const assistantId = pushAssistantEmpty();
    setLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      // ✅ Atualiza quota pelos headers (mesmo stream)
      const qh = parseQuotaHeaders(res);
      if (qh) {
        setQuota((prev) => ({
          ...prev,
          limit: qh.limit ?? prev.limit,
          used: qh.used ?? prev.used,
          remaining: qh.remaining ?? prev.remaining,
        }));
      }

      // Erro JSON
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Falha ao chamar IA." }));
        setStatus("erro");

        if (typeof err?.remaining === "number") {
          setQuota((prev) => ({
            ...prev,
            limit: Number(err?.limit ?? prev.limit),
            used: Number(err?.used ?? prev.used),
            remaining: Number(err?.remaining ?? prev.remaining),
          }));
        }

        raiseTopErrorFromStatus(res.status, err);

        const isQuota = res.status === 429;
        setAssistantContent(
          assistantId,
          isQuota
            ? `⛔ ${err?.error || "Limite atingido."}\n\n${err?.details || ""}`
            : `⚠️ ${err?.error || "Falha ao chamar IA."}\n\n${err?.details ? "Detalhes: " + err.details : ""}`
        );
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) {
        setStatus("erro");
        setTopAlert({
          type: "danger",
          title: "⚠️ Atenção",
          message: "Resposta sem stream. Tente novamente.",
        });
        setAssistantContent(assistantId, "⚠️ Resposta sem stream. Tente novamente.");
        return;
      }

      const decoder = new TextDecoder("utf-8");
      let acc = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        acc += decoder.decode(value, { stream: true });
        setAssistantContent(assistantId, acc);
      }

      if (!acc.trim()) {
        setStatus("erro");
        setTopAlert({
          type: "warning",
          title: "⚠️ Atenção",
          message: "A IA não retornou texto. Tente novamente em alguns segundos.",
        });
        setAssistantContent(assistantId, "⚠️ A IA não retornou texto. Tente novamente em alguns segundos.");
      } else {
        setStatus("online");
        // limpa alerta se não estiver bloqueado
        if (!blocked) setTopAlert(null);
      }
    } catch {
      setStatus("erro");
      setTopAlert({
        type: "danger",
        title: "⚠️ Falha de conexão",
        message: "Não consegui chamar a IA. Verifique sua internet e tente novamente.",
      });
      setAssistantContent(assistantId, "⚠️ Falha de conexão ao chamar a IA. Verifique internet e tente novamente.");
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-4xl flex-col p-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 rounded-2xl border p-4">
        <div className="min-w-0">
          <h1 className="text-2xl font-black">OTIAdriver Copilot IA</h1>
          <p className="text-sm opacity-80">
            Respostas práticas e seguras com base no conteúdo oficial da OTIAdriver.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            {/* Online badge */}
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
              <span
                className={[
                  "inline-block h-2 w-2 rounded-full",
                  status === "online"
                    ? "bg-green-500"
                    : status === "erro"
                      ? "bg-red-500"
                      : "bg-gray-400",
                ].join(" ")}
              />
              <span className="font-semibold">
                {status === "online" ? "Online" : status === "erro" ? "Atenção" : "Offline"}
              </span>
              <span className="opacity-70">{loading ? "• pensando..." : "• pronto"}</span>
            </div>

            {/* QUOTA badge colorido */}
            <div
              className={[
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
                quotaLoading ? "bg-black/5" : quotaBadgeClass(quota.remaining),
              ].join(" ")}
              title="Cota mensal do Copilot"
            >
              <span
                className={[
                  "h-2 w-2 rounded-full",
                  quotaLoading ? "bg-gray-400" : quotaDotClass(quota.remaining),
                ].join(" ")}
              />
              {quotaLoading ? (
                <span>Carregando cota...</span>
              ) : (
                <>
                  <span>
                    Você tem <b>{quota.remaining}</b> perguntas restantes este mês
                  </span>
                  <span className="opacity-70">• usado {quota.used}/{quota.limit}</span>
                </>
              )}
            </div>

            {/* Botão aparecer quando zerar */}
            {blocked && !quotaLoading ? (
              <a
                href="/planos"
                className="rounded-full border border-red-300 bg-red-50 px-4 py-2 text-xs font-black text-red-800 hover:opacity-90"
                title="Ver planos / Renovar"
              >
                Ver planos / Renovar
              </a>
            ) : null}
          </div>

          {/* ✅ BANNER VERMELHO (IMPORTANTE) / AMARELO (AVISO) */}
          {topAlert ? (
            <div
              className={[
                "mt-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border px-3 py-2 text-xs",
                alertBoxClass(topAlert.type),
              ].join(" ")}
              role="alert"
            >
              <div className="min-w-0">
                <b className="block">{topAlert.title}</b>
                {topAlert.message ? (
                  <div className="mt-1 whitespace-pre-wrap opacity-90">{topAlert.message}</div>
                ) : null}
              </div>

              {topAlert.actionHref && topAlert.actionLabel ? (
                <a
                  href={topAlert.actionHref}
                  className={[
                    "shrink-0 rounded-lg border px-3 py-2 text-xs font-black hover:opacity-90",
                    topAlert.type === "danger"
                      ? "border-red-300 bg-white/60 text-red-800"
                      : topAlert.type === "warning"
                        ? "border-yellow-200 bg-white/60 text-yellow-900"
                        : "border-blue-200 bg-white/60 text-blue-900",
                  ].join(" ")}
                >
                  {topAlert.actionLabel}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            onClick={clearChat}
            className="rounded-xl border px-3 py-2 text-sm font-bold hover:opacity-90"
            type="button"
          >
            Limpar
          </button>
          <a
            href="/planos"
            className="rounded-xl border px-3 py-2 text-sm font-bold hover:opacity-90"
          >
            Planos
          </a>
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-3 flex flex-wrap gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => send(s)}
            disabled={loading || blocked}
            className="rounded-full border px-3 py-2 text-xs font-semibold hover:opacity-90 disabled:opacity-50"
            title={blocked ? "Limite mensal atingido" : "Clique para enviar"}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Chat */}
      <div ref={listRef} className="mt-4 flex-1 overflow-auto rounded-2xl border p-4">
        <div className="space-y-3">
          {msgs.map((m) => {
            const isUser = m.role === "user";
            return (
              <div
                key={m.id}
                className={["flex", isUser ? "justify-end" : "justify-start"].join(" ")}
              >
                <div
                  className={[
                    "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    isUser ? "border" : "bg-black/5",
                  ].join(" ")}
                >
                  {m.content || (m.role === "assistant" && loading ? "..." : "")}

                  {m.role === "assistant" && loading && !m.content ? (
                    <span className="ml-1 inline-flex items-center gap-1 align-middle">
                      <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-current/60 [animation-delay:-0.2s]" />
                      <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-current/60 [animation-delay:-0.1s]" />
                      <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-current/60" />
                      <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-current/60" />
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Composer */}
      <div className="mt-4 flex gap-2">
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          disabled={blocked}
          className="w-full rounded-xl border px-4 py-3 disabled:opacity-60"
          placeholder={
            blocked
              ? "Limite mensal atingido. Clique em “Ver planos / Renovar”."
              : "Ex: Acendeu luz do motor e perdeu força na subida..."
          }
        />
        <button
          onClick={() => send()}
          disabled={!canSend}
          className="rounded-xl border px-5 py-3 font-black disabled:opacity-50"
          type="button"
          title={blocked ? "Limite mensal atingido" : "Enviar"}
        >
          {loading ? "..." : "Enviar"}
        </button>
      </div>

      {/* Footer tip */}
      <div className="mt-3 text-xs opacity-70">
        Dica: para resposta mais precisa, informe: <b>marca/modelo</b>, <b>ano</b>, se a luz é{" "}
        <b>amarela/vermelha</b> e se houve <b>perda de potência</b>.
      </div>
    </div>
  );
}
