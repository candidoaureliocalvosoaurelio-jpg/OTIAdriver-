"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Props = {
  nextUrl: string;
  lang?: string;

  // ✅ novos (opcionais) para manter contexto do retorno
  plano?: string;
  paymentId?: string;
  status?: string;
};

type SessionResp = {
  authenticated: boolean;
  cpf: string;
  plan: string; // basico|pro|premium|none
  planStatus: "active" | "inactive";
  expiresAt: string | null;
};

export default function SyncAfterPayment({
  nextUrl,
  lang = "pt",
  plano = "premium",
  paymentId = "",
  status = "",
}: Props) {
  const [state, setState] = useState<
    "idle" | "checking" | "waiting" | "needs_login" | "done" | "error"
  >("idle");

  // ✅ destino final
  const finalNext = useMemo(() => {
    const fallback = `/caminhoes?lang=${encodeURIComponent(lang)}`;
    const n = String(nextUrl || "").trim();
    if (!n) return fallback;
    if (!n.startsWith("/") || n.startsWith("//")) return fallback;
    return n;
  }, [nextUrl, lang]);

  // ✅ se precisar login: volta para /pagamento/concluido COM OS PARAMS
  const loginUrl = useMemo(() => {
    const backToConcluido =
      `/pagamento/concluido?lang=${encodeURIComponent(lang)}` +
      `&plano=${encodeURIComponent(plano)}` +
      (paymentId ? `&payment_id=${encodeURIComponent(paymentId)}` : "") +
      (status ? `&status=${encodeURIComponent(status)}` : "");

    return `/entrar?lang=${encodeURIComponent(lang)}&next=${encodeURIComponent(
      backToConcluido
    )}&reason=auth`;
  }, [lang, plano, paymentId, status]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setState("checking");

        const attempts = 30; // ~60s
        const delayMs = 2000;

        for (let i = 1; i <= attempts; i++) {
          const r = await fetch("/api/auth/session", {
            method: "GET",
            cache: "no-store",
            credentials: "include",
            headers: { "Cache-Control": "no-store" },
          });

          const data = (await r.json().catch(() => null)) as SessionResp | null;

          // sem sessão/cookies (não logado)
          if (!data || !data.authenticated) {
            if (!cancelled) setState("needs_login");
            return;
          }

          // ✅ se plano ativo, libera
          if (data.planStatus === "active") {
            if (!cancelled) {
              setState("done");
              window.location.href = finalNext;
            }
            return;
          }

          // ✅ tenta forçar sync (se existir /api/me/sync)
          try {
            await fetch("/api/me/sync", {
              method: "POST",
              cache: "no-store",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store",
              },
              body: JSON.stringify({
                plano,
                payment_id: paymentId,
                status,
                source: "pagamento_concluido",
              }),
            });
          } catch {
            // ignora (se rota não existir ou falhar, seguimos no loop)
          }

          if (!cancelled) setState("waiting");
          await new Promise((res) => setTimeout(res, delayMs));
        }

        if (!cancelled) setState("error");
      } catch (e) {
        console.error("[SyncAfterPayment] error:", e);
        if (!cancelled) setState("error");
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [finalNext, plano, paymentId, status]);

  if (state === "needs_login") {
    return (
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
        <p className="font-bold">Quase lá.</p>
        <p className="text-sm mt-1">
          Para concluir a liberação neste aparelho, faça login (CPF/telefone).
          Ao voltar, liberamos automaticamente e te enviamos para Caminhões.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={loginUrl}
            className="rounded-xl bg-amber-700 px-5 py-3 text-sm font-extrabold text-white hover:bg-amber-800"
          >
            Entrar agora (CPF/telefone)
          </Link>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-amber-900 border border-amber-300 hover:bg-amber-100"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  if (state === "waiting") {
    return (
      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-800">
        <p className="font-bold">Sincronizando seu acesso…</p>
        <p className="text-sm mt-1">
          Aguardando o sistema aplicar o plano (PIX/webhook). Isso pode levar alguns segundos.
        </p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-900">
        <p className="font-bold">Não conseguimos liberar automaticamente.</p>
        <p className="text-sm mt-1">
          Tente novamente. Se continuar, faça login e volte para esta página.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-xl bg-rose-700 px-5 py-3 text-sm font-extrabold text-white hover:bg-rose-800"
          >
            Tentar novamente
          </button>

          <Link
            href={loginUrl}
            className="rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-rose-900 border border-rose-300 hover:bg-rose-100"
          >
            Entrar (CPF/telefone)
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
      <p className="font-bold">Liberando seu acesso…</p>
      <p className="text-sm mt-1">
        Se estiver tudo ok, você será redirecionado automaticamente.
      </p>
    </div>
  );
}
