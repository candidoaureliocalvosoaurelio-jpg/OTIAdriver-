// app/pagamento/concluido/SyncAfterPayment.tsx
"use client";

import { useEffect, useState } from "react";

type Props = {
  nextUrl: string;
  lang?: string;
};

export default function SyncAfterPayment({ nextUrl, lang = "pt" }: Props) {
  const [status, setStatus] = useState<"idle" | "syncing" | "done" | "redirecting" | "error">("idle");

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setStatus("syncing");

        // 1) Tenta sincronizar o plano (seta cookie otia_plan no backend)
        await fetch("/api/me/sync", {
          method: "POST",
          credentials: "include",
          cache: "no-store",
        });

        // 2) Confirma leitura de cookies pelo server (opcional, mas útil)
        await fetch("/api/me", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        if (cancelled) return;

        setStatus("redirecting");

        // 3) Redireciona com reload total (garante middleware + cookies)
        window.location.href = nextUrl || `/catalogo?lang=${lang}`;
      } catch {
        if (cancelled) return;
        setStatus("error");
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [nextUrl, lang]);

  if (status === "error") {
    return (
      <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900">
        Não foi possível sincronizar automaticamente. Clique em <strong>Entrar agora</strong> para liberar o acesso.
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700">
      {status === "syncing" && "Sincronizando seu plano..."}
      {status === "redirecting" && "Tudo certo. Redirecionando..."}
      {status === "idle" && "Preparando..."}
    </div>
  );
}
