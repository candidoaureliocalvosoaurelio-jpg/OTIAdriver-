"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  nextUrl: string;
  payment_id?: string; // pode vir vazio
  topic?: string; // "payment" | "merchant_order" (opcional)
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

function isActive(resp: SyncResp) {
  const ps = String(resp?.planStatus || resp?.status || "").toLowerCase();
  if (ps === "active") return true;

  const p = String(resp?.plan || resp?.plano || "").toLowerCase();
  return p === "premium" || p === "pro" || p === "basico";
}

export default function PendingClient({ nextUrl, payment_id, topic }: Props) {
  const router = useRouter();

  const paymentId = useMemo(() => (payment_id || "").trim(), [payment_id]);
  const topicClean = useMemo(() => (topic || "").trim().toLowerCase(), [topic]);

  const [loading, setLoading] = useState(false);
  const [tries, setTries] = useState(0);
  const [message, setMessage] = useState("Aguardando confirmação do pagamento...");

  async function syncOnce(forceMsg?: string) {
    setLoading(true);
    try {
      if (forceMsg) setMessage(forceMsg);

      // 1) tenta sincronizar conta/plano (FLASH)
      const syncRes = await fetch("/api/me/sync", {
        method: "POST",
        headers: { "content-type": "application/json" },
        cache: "no-store",
        body: JSON.stringify(
          paymentId
            ? { payment_id: paymentId, topic: topicClean || undefined }
            : {}
        ),
      });

      const syncJson: SyncResp = await syncRes.json().catch(() => ({}));

      if (isActive(syncJson)) {
        setMessage("✅ Pagamento confirmado! Liberando acesso...");
        router.replace(nextUrl || "/");
        return;
      }

      // 2) se tiver payment_id, checa status no DB (mp_payments)
      if (paymentId) {
        const stRes = await fetch(`/api/mp/status?payment_id=${encodeURIComponent(paymentId)}`, {
          cache: "no-store",
        });
        const stJson: StatusResp = await stRes.json().catch(() => ({ ok: false } as any));

        if (stJson?.ok && (stJson.applied || stJson.status === "approved")) {
          // dá um sync final pra garantir cookie e libera
          await fetch("/api/me/sync", {
            method: "POST",
            headers: { "content-type": "application/json" },
            cache: "no-store",
            body: JSON.stringify({ payment_id: paymentId, topic: topicClean || undefined }),
          }).catch(() => {});

          setMessage("✅ Pagamento confirmado! Liberando acesso...");
          router.replace(nextUrl || "/");
          return;
        }
      }

      setTries((t) => t + 1);
      setMessage(
        "Pagamento ainda pendente. Se você já pagou, clique em “✅ Já paguei — verificar agora”."
      );
    } catch {
      setTries((t) => t + 1);
      setMessage("Estamos verificando... clique em “✅ Já paguei — verificar agora” para forçar.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // chama imediatamente
    syncOnce();

    // polling a cada 3s
    const id = setInterval(() => {
      syncOnce();
    }, 3000);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentId, topicClean, nextUrl]);

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-slate-800 font-medium">{message}</div>

      {paymentId ? (
        <div className="mt-2 text-sm text-slate-500">
          payment_id: <span className="font-mono">{paymentId}</span>
          {topicClean ? (
            <>
              {" "}
              • topic: <span className="font-mono">{topicClean}</span>
            </>
          ) : null}
        </div>
      ) : (
        <div className="mt-2 text-sm text-amber-700">
          Dica: para ficar ⚡instantâneo, passe <b>payment_id</b> na URL desta página.
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={() => syncOnce("Verificando agora...")}
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
