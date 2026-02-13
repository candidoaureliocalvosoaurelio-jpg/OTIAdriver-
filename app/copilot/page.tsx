"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Role = "user" | "assistant" | "system";
type Msg = { id: string; role: Role; content: string; ts: number };

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

const STORAGE_KEY = "otiadriver_copilot_history_v1";
const TTS_CACHE_NAME = "otiadriver-tts-v1";

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

function canUseCacheStorage() {
  try {
    return typeof window !== "undefined" && "caches" in window;
  } catch {
    return false;
  }
}

async function sha256Hex(input: string) {
  // precisa HTTPS (ou localhost) para crypto.subtle
  const enc = new TextEncoder();
  const buf = await crypto.subtle.digest("SHA-256", enc.encode(input));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
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

  // ✅ top alert
  const [topAlert, setTopAlert] = useState<TopAlert>(null);

  // ==========================
  // 🎙️ VOZ / TTS
  // ==========================
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [handsFree, setHandsFree] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [ttsVoice, setTtsVoice] = useState<"onyx" | "alloy">("onyx");

  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);

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

  // Cria audio element 1x
  useEffect(() => {
    if (audioRef.current) return;

    const a = new Audio();
    a.preload = "auto";

    a.onplay = () => setSpeaking(true);
    a.onended = () => {
      setSpeaking(false);
      inputRef.current?.focus();
    };
    a.onerror = () => setSpeaking(false);

    audioRef.current = a;
  }, []);

  function stopAudio() {
    try {
      const a = audioRef.current;
      if (!a) return;
      a.pause();
      a.currentTime = 0;
      a.src = "";
    } catch {}
    setSpeaking(false);
  }

  function getLastAssistantMessage(arr: Msg[] = msgs): string {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i]?.role === "assistant" && arr[i]?.content?.trim()) return arr[i].content.trim();
    }
    return "";
  }

  async function speak(textToSpeak: string) {
    const clean = String(textToSpeak || "").trim();
    if (!clean) return;

    // não fala durante stream (evita repetir / cortar)
    if (loading) return;

    try {
      setSpeaking(true);

      // para áudio anterior
      stopAudio();

      // se não tiver crypto.subtle (ou não for https), ainda funciona: só sem cache por hash
      let key = "";
      try {
        key = await sha256Hex(`v1|model=gpt-4o-mini-tts|voice=${ttsVoice}|text=${clean}`);
      } catch {
        key = `nocrypto-${ttsVoice}-${clean.length}`;
      }

      const cacheKeyUrl = `/__tts_cache__?k=${encodeURIComponent(key)}&voice=${encodeURIComponent(ttsVoice)}`;
      const cacheReq = new Request(cacheKeyUrl);

      // 1) tenta cache (se disponível)
      if (canUseCacheStorage()) {
        const cache = await caches.open(TTS_CACHE_NAME);
        const cached = await cache.match(cacheReq);
        if (cached) {
          const blob = await cached.blob();
          const url = URL.createObjectURL(blob);
          const a = audioRef.current;
          if (!a) return;

          a.src = url;
          await a.play().catch(() => {
            setSpeaking(false);
            setTopAlert({
              type: "warning",
              title: "🔇 Áudio bloqueado",
              message: "Seu navegador bloqueou o autoplay. Toque em 🔊 para ouvir.",
            });
          });
          return;
        }
      }

      // 2) offline e sem cache
      if (typeof navigator !== "undefined" && navigator.onLine === false) {
        setSpeaking(false);
        setTopAlert({
          type: "warning",
          title: "📴 Sem internet",
          message: "Sem conexão. Só consigo tocar áudios já gerados (cache).",
        });
        return;
      }

      // 3) chama backend
      const res = await fetch("/api/ai/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: clean, voice: ttsVoice }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        setSpeaking(false);
        setTopAlert({
          type: "warning",
          title: "⚠️ Voz indisponível",
          message: err?.error || "Não consegui gerar áudio agora. Tente novamente.",
        });
        return;
      }

      // 4) salva no cache (clone antes)
      if (canUseCacheStorage()) {
        try {
          const cache = await caches.open(TTS_CACHE_NAME);
          await cache.put(cacheReq, res.clone());
        } catch {
          // cache falhou -> segue sem travar
        }
      }

      // 5) toca
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = audioRef.current;
      if (!a) return;

      a.src = url;
      await a.play().catch(() => {
        setSpeaking(false);
        setTopAlert({
          type: "warning",
          title: "🔇 Áudio bloqueado",
          message: "Seu navegador bloqueou o autoplay. Toque em 🔊 para ouvir.",
        });
      });
    } catch {
      setSpeaking(false);
      setTopAlert({
        type: "warning",
        title: "⚠️ Falha no áudio",
        message: "Houve falha ao tocar o áudio. Tente novamente.",
      });
    }
  }

  // SpeechRecognition (Browser)
  function startListening() {
    try {
      // @ts-ignore
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) {
        setTopAlert({
          type: "danger",
          title: "⚠️ Microfone indisponível",
          message: "Seu navegador não suporta reconhecimento de voz. Use Chrome/Edge no Android/PC.",
        });
        return;
      }

      const rec = new SR();
      rec.lang = "pt-BR";
      rec.interimResults = false;
      rec.maxAlternatives = 1;

      setListening(true);
      if (!blocked) setTopAlert(null);

      rec.onresult = (event: any) => {
        const t = String(event?.results?.[0]?.[0]?.transcript || "").trim();
        if (t) {
          setText(t);
          send(t);
        }
      };

      rec.onerror = () => {
        setTopAlert({
          type: "warning",
          title: "⚠️ Falha no microfone",
          message: "Não consegui ouvir. Verifique permissão do microfone.",
        });
      };

      rec.onend = () => {
        setListening(false);
      };

      rec.start();
    } catch {
      setListening(false);
      setTopAlert({
        type: "warning",
        title: "⚠️ Falha",
        message: "Não consegui iniciar o microfone.",
      });
    }
  }

  // ==========================
  // QUOTA LOAD (GET /api/ai/chat)
  // ==========================
  useEffect(() => {
    let alive = true;

    async function loadQuota() {
      setQuotaLoading(true);
      try {
        const res = await fetch("/api/ai/chat", { method: "GET" });

        const json = await res.json().catch(() => null);
        const h = parseQuotaHeaders(res);

        if (!alive) return;

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
            actionHref: code === 401 ? "/entrar?next=/copilot" : "/planos",
            actionLabel: code === 401 ? "Entrar" : "Ver planos",
          });
          return;
        }

        const q: Quota = {
          limit: Number(json?.limit ?? h?.limit ?? 150),
          used: Number(json?.used ?? h?.used ?? 0),
          remaining: Number(json?.remaining ?? h?.remaining ?? 150),
          monthKey: json?.monthKey,
        };

        setQuota(q);
        setStatus("online");
        setTopAlert(null);
      } catch {
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

  // Se bloquear, alerta vermelho forte
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
      stopAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    stopAudio();
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

    // hands-free: corta áudio quando falar de novo
    if (handsFree) stopAudio();

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

      // Atualiza quota pelos headers
      const qh = parseQuotaHeaders(res);
      if (qh) {
        setQuota((prev) => ({
          ...prev,
          limit: qh.limit ?? prev.limit,
          used: qh.used ?? prev.used,
          remaining: qh.remaining ?? prev.remaining,
        }));
      }

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
        setAssistantContent(
          assistantId,
          "⚠️ A IA não retornou texto. Tente novamente em alguns segundos."
        );
      } else {
        setStatus("online");
        if (!blocked) setTopAlert(null);

        // ✅ AUTOPLAY
        if (autoSpeak || handsFree) {
          await speak(acc);
        }
      }
    } catch {
      setStatus("erro");
      setTopAlert({
        type: "danger",
        title: "⚠️ Falha de conexão",
        message: "Não consegui chamar a IA. Verifique sua internet e tente novamente.",
      });
      setAssistantContent(
        assistantId,
        "⚠️ Falha de conexão ao chamar a IA. Verifique internet e tente novamente."
      );
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  const lastAssistantMessage = getLastAssistantMessage();

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

          {/* 🎙️ CONTROLES */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={startListening}
              disabled={blocked || loading || listening}
              className={[
                "w-full md:w-auto",
                "rounded-2xl border px-5 py-4 md:py-3",
                "text-sm md:text-xs font-black",
                "shadow-sm hover:opacity-90 disabled:opacity-50",
                "flex items-center justify-center gap-3",
                listening ? "bg-black/5" : "bg-white",
              ].join(" ")}
              title="Falar com o Copilot"
            >
              <span className="text-xl">🎙️</span>
              <span className="tracking-wide">
                {listening ? "OUVINDO... FALE AGORA" : "RÁDIO COPILOT • TOQUE E FALE"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => speak(lastAssistantMessage)}
              disabled={!lastAssistantMessage || speaking || loading}
              className="rounded-full border px-4 py-2 text-xs font-black hover:opacity-90 disabled:opacity-50"
              title="Ouvir última resposta"
            >
              {speaking ? "🔊 Tocando..." : "🔊 Ouvir resposta"}
            </button>

            <button
              type="button"
              onClick={() => {
                setAutoSpeak((v) => !v);
                if (autoSpeak) stopAudio();
              }}
              className={[
                "rounded-full border px-4 py-2 text-xs font-black hover:opacity-90",
                autoSpeak ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "",
              ].join(" ")}
              title="Ler automaticamente as respostas"
            >
              {autoSpeak ? "✅ Auto-voz ON" : "🔇 Auto-voz OFF"}
            </button>

            <button
              type="button"
              onClick={() => {
                setHandsFree((v) => !v);
                setAutoSpeak(true); // handsfree => sempre fala
              }}
              className={[
                "rounded-full border px-4 py-2 text-xs font-black hover:opacity-90",
                handsFree ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "",
              ].join(" ")}
              title="Modo mãos-livres"
            >
              {handsFree ? "✅ Hands-Free ON" : "🚛 Hands-Free OFF"}
            </button>

            <button
              type="button"
              onClick={() => setTtsVoice((v) => (v === "onyx" ? "alloy" : "onyx"))}
              className="rounded-full border px-4 py-2 text-xs font-black hover:opacity-90"
              title="Alternar voz"
            >
              🎧 Voz: {ttsVoice === "onyx" ? "Motorista (masc.)" : "Neutra"}
            </button>

            <button
              type="button"
              onClick={() => stopAudio()}
              disabled={!speaking}
              className="rounded-full border px-4 py-2 text-xs font-black hover:opacity-90 disabled:opacity-50"
              title="Parar áudio"
            >
              ⏹️ Parar
            </button>
          </div>

          {/* Banner */}
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
