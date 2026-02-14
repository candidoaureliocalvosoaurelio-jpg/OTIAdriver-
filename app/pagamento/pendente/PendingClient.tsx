// app/pagamento/pendente/PendingClient.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  nextUrl: string;
  payment_id?: string;
  topic?: string;
};

type SyncResp = {
  ok?: boolean;
  plan?: string;
  plano?: string;
  planStatus?: "active" | "inactive";
  status?: "active" | "inactive";
  expiresAt?: string | null;
  authenticated?: boolean;
  reason?: string;
};

type StatusResp = {
  ok: boolean;
  payment_id?: string;
  exists?: boolean;
  status?: string | null;
  applied?: boolean;
  error?: string;
};

type ResolveResp = {
  ok: boolean;
  payment_id?: string;
  preference_id?: string;
  error?: string;
};

const LS_LAST_PREF = "otia_last_preference_id";

// evita flood no /api/mp/resolve
const RESOLVE_COOLDOWN_MS = 10_000;

function isActive(resp: SyncResp) {
  const ps = String(resp?.planStatus || resp?.status || "").toLowerCase();
  if (ps === "active") return true;

  const p = String(resp?.plan || resp?.plano || "").toLowerCase();
  return p === "premium" || p === "pro" || p === "basico";
}

function pick(v: any) {
  return typeof v === "string" ? v.trim() : "";
}

export default function PendingClient({ nextUrl, payment_id, topic }: Props) {
  const router = useRouter();

  const nextUrlClean = useMemo(() => (pick(nextUrl) || "/"), [nextUrl]);
  const topicClean = useMemo(() => pick(topic).toLowerCase(), [topic]);

  // payment_id que veio na URL
  const propPaymentId = useMemo(() => pick(payment_id), [payment_id]);

  // payment_id efetivo (pode ser resolvido pelo preference_id salvo)
  const [effectivePaymentId, setEffectivePaymentId] = useState(propPaymentId);

  const [loading, setLoading] = useState(false);
  const [tries, setTries] = useState(0);
  const [message, setMessage] = useState("Aguardando confirmação do pagamento...");

  const resolvingRef = useRef(false);
  const lastResolveAtRef = useRef(0);

  // se a URL já vier com payment_id, usa ele
  useEffect(() => {
    if (propPaymentId) setEffectivePaymentId(propPaymentId);
  }, [propPaymentId]);

  async function resolvePaymentIdIfNeeded(): Promise<string> {
    const current = pick(effectivePaymentId);
    if (current) return current;

    // cooldown anti-flood
    const now = Date.now();
    if (now - lastResolveAtRef.current < RESOLVE_COOLDOWN_MS) return "";

    if (resolvingRef.current) return "";
    resolvingRef.current = true;
    lastResolveAtRef.current = now;

    let prefId = "";
    try {
      prefId = pick(localStorage.getItem(LS_LAST_PREF));
    } catch {
      prefId = "";
    }

    if (!prefId) {
      resolvingRef.current = false;
      return "";
    }

    setMessage("⚡ Recuperando payment_id pelo preference_id (modo FLASH)...");

    try {
      const res = await fetch(
        `/api/mp/resolve?preference_id=${encodeURIComponent(prefId)}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const json: ResolveResp = await res.json().catch(() => ({ ok: false } as any));

      const pid = pick(json?.payment_id);
      if (res.ok && json?.ok && pid) {
        setEffectivePaymentId(pid);
        setMessage("✅ payment_id recuperado! Verificando confirmação...");
        resolvingRef.current = false;
        return pid;
      }
    } catch {
      // ignore
    }

    resolvingRef.current = false;
    return "";
  }

  async function syncOnce(forceMsg?: string) {
    if (loading) return;
    setLoading(true);

    try {
      if (forceMsg) setMessage(forceMsg);

      // 0) tenta resolver payment_id (se a URL veio vazia)
      const pid = (await resolvePaymentIdIfNeeded()) || pick(effectivePaymentId);

      // 1) tenta sincronizar conta/plano
      const syncRes = await fetch("/api/me/sync", {
        method: "POST",
        headers: { "content-type": "application/json" },
        cache: "no-store",
        body: JSON.stringify(pid ? { payment_id: pid, topic: topicClean || undefined } : {}),
      });

      const syncJson: SyncResp = await syncRes.json().catch(() => ({}));

      if (isActive(syncJson)) {
        setMessage("✅ Pagamento confirmado! Liberando acesso...");
        router.replace(nextUrlClean || "/");
        return;
      }

      // 2) se tiver payment_id, checa status no DB
      if (pid) {
        const stRes = await fetch(
          `/api/mp/status?payment_id=${encodeURIComponent(pid)}`,
          { cache: "no-store" }
        );
        const stJson: StatusResp = await stRes.json().catch(() => ({ ok: false } as any));

        const st = String(stJson?.status || "").toLowerCase();
        if (stJson?.ok && (stJson.applied || st === "approved")) {
          await fetch("/api/me/sync", {
            method: "POST",
            headers: { "content-type": "application/json" },
            cache: "no-store",
            body: JSON.stringify({ payment_id: pid, topic: topicClean || undefined }),
          }).catch(() => {});

          setMessage("✅ Pagamento confirmado! Liberando acesso...");
          router.replace(nextUrlClean || "/");
          return;
        }
      }

      setTries((t) => t + 1);

      if (!pid) {
        setMessage(
          "Pagamento pendente. Assim que o Pix for criado, vou recuperar o payment_id automaticamente."
        );
      } else {
        setMessage(
          "Pagamento ainda pendente. Se você já pagou, clique em “✅ Já paguei — verificar agora”."
        );
      }
    } catch {
      setTries((t) => t + 1);
      setMessage("Estamos verificando... clique em “✅ Já paguei — verificar agora” para forçar.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    syncOnce();

    const id = setInterval(() => {
      syncOnce();
    }, 3000);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicClean, nextUrlClean, effectivePaymentId]);

  const pidUi = pick(effectivePaymentId);

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-slate-800 font-medium">{message}</div>

      {pidUi ? (
        <div className="mt-2 text-sm text-slate-500">
          payment_id: <span className="font-mono">{pidUi}</span>
          {topicClean ? (
            <>
              {" "}
              • topic: <span className="font-mono">{topicClean}</span>
            </>
          ) : null}
        </div>
      ) : (
        <div className="mt-2 text-sm text-amber-700">
          ⚡ Modo FLASH: vou recuperar o <b>payment_id</b> usando o <b>preference_id</b> salvo.
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={() => {
            resolvingRef.current = false; // permite tentar resolver de novo
            lastResolveAtRef.current = 0; // ignora cooldown no clique manual
            syncOnce("Verificando agora (FLASH)...");
          }}
          disabled={loading}
          className="rounded-lg bg-slate-900 px-4 py-2 text-white font-semibold disabled:opacity-60"
        >
          {loading ? "Verificando..." : "✅ Já paguei — verificar agora"}
        </button>

        <button
          onClick={() => router.replace("/planos")}
          className="rounded-lg border border-slate-300 px-4 py-2 text-slate-800 font-semibold"
        >
          Ver planos
        </button>
      </div>

      <div className="mt-3 text-xs text-slate-400">Tentativas: {tries}</div>
    </div>
  );
}
