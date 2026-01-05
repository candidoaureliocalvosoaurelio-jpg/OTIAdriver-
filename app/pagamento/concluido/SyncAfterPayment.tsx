"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Props = {
  nextUrl: string; // mantido por compatibilidade (não usamos mais para o destino final)
  lang?: string;
};

type SyncResp = {
  ok: boolean;
  plano?: string;
  status?: "active" | "inactive";
  reason?: string;
};

export default function SyncAfterPayment({ lang = "pt" }: Props) {
  const [state, setState] = useState<
    "idle" | "syncing" | "waiting" | "needs_login" | "done" | "error"
  >("idle");

  // ✅ Pós-pagamento: sempre volta para a home da plataforma (lista de caminhões)
  const finalNext = useMemo(() => {
    return `/caminhoes?lang=${encodeURIComponent(lang)}`;
  }, [lang]);

  // ✅ Se precisar login, manda o usuário para /entrar e depois volta para /pagamento/concluido
  // (assim ele não se perde e o sync tenta de novo automaticamente ao voltar)
  const loginUrl = useMemo(() => {
    const backToConcluido = `/pagamento/concluido?lang=${encodeURIComponent(lang)}`;
    return `/entrar?lang=${encodeURIComponent(lang)}&next=${encodeURIComponent(
      backToConcluido
    )}&reason=auth`;
  }, [lang]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setState("syncing");

        // Tentativas (webhook pode demorar um pouco)
        const attempts = 6;
        const delayMs = 1200;

        for (let i = 1; i <= attempts; i++) {
          const r = await fetch("/api/me/sync", {
            method: "POST",
            cache: "no-store",
            credentials: "include", // ✅ garante cookies
            headers: { "Cache-Control": "no-store" },
          });

          // Se não tem CPF cookie, pede login
          if (r.status === 401) {
            if (!cancelled) setState("needs_login");
            return;
          }

          const data = (await r.json().catch(() => null)) as SyncResp | null;

          if (!r.ok || !data) {
            // erro transitório
            if (i === attempts) break;
          } else {
            // ✅ Se plano ficou active, pode entrar
            if (data.ok && data.status === "active") {
              if (!cancelled) {
                setState("done");
                window.location.href = finalNext;
              }
              return;
            }

            // Ainda não aplicado no banco → aguarda e tenta novamente
            if (data.ok && data.status !== "active") {
              if (!cancelled) setState("waiting");
            }
          }

          await new Promise((res) => setTimeout(res, delayMs));
        }

        if (!cancelled) setState("error");
      } catch (e) {
        console.error("[SyncAfterPayment] erro:", e);
        if (!cancelled) setState("error");
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [finalNext]);

  if (state === "needs_login") {
    return (
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
        <p className="font-bold">Quase lá.</p>
        <p className="text-sm mt-1">
          Para concluir a liberação, faça o login (CPF/telefone) neste aparelho.
          Ao terminar, você voltará para esta página e liberaremos automaticamente.
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
          Estamos aguardando a confirmação final do pagamento. Isso pode levar alguns segundos.
        </p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-900">
        <p className="font-bold">Não conseguimos liberar automaticamente.</p>
        <p className="text-sm mt-1">
          Tente novamente em instantes. Se continuar, faça login e volte para esta página.
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
        Se tudo estiver ok, você será redirecionado automaticamente para os caminhões.
      </p>
    </div>
  );
}
