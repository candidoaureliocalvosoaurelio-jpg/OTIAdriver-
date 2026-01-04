"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  nextUrl: string;
  lang?: string;
};

type SyncResp = {
  ok: boolean;
  plano?: string;
  status?: "active" | "inactive";
  reason?: string;
};

function addParam(url: string, key: string, value: string) {
  try {
    const u = new URL(url, window.location.origin);
    u.searchParams.set(key, value);
    return u.pathname + "?" + u.searchParams.toString();
  } catch {
    return url;
  }
}

export default function SyncAfterPayment({ nextUrl, lang = "pt" }: Props) {
  const [state, setState] = useState<
    "idle" | "syncing" | "waiting" | "needs_login" | "done" | "error"
  >("idle");

  const finalNext = useMemo(() => {
    // reforça lang no destino
    return addParam(nextUrl, "lang", lang);
  }, [nextUrl, lang]);

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

          // aguarda antes da próxima tentativa
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
          Depois disso, volte aqui e o acesso será liberado automaticamente.
        </p>
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
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
      <p className="font-bold">Liberando seu acesso…</p>
      <p className="text-sm mt-1">
        Se tudo estiver ok, você será redirecionado automaticamente.
      </p>
    </div>
  );
}
