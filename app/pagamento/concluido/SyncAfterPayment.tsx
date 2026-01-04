// app/pagamento/concluido/SyncAfterPayment.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  nextUrl: string;
  lang?: string;
};

type SessionResp = {
  authenticated: boolean;
  cpf: string;
  plan: string;
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
  const [status, setStatus] = useState<
    "idle" | "checking" | "need_login" | "syncing" | "redirecting" | "error"
  >("idle");

  const [msg, setMsg] = useState<string>("");

  const safeDest = useMemo(() => {
    const fallback = `/catalogo?lang=${lang}`;
    const dest = nextUrl?.startsWith("/") ? nextUrl : fallback;
    return addParam(dest, "from", "payment");
  }, [nextUrl, lang]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setStatus("checking");
        setMsg("Verificando sua sessão...");

        // 0) Checa se existe sessão neste aparelho
        const sessRes = await fetch("/api/auth/session", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        if (!sessRes.ok) {
          if (cancelled) return;
          setStatus("need_login");
          setMsg(
            "Para liberar o acesso neste aparelho, faça o login (CPF/telefone)."
          );
          return;
        }

        const sess = (await sessRes.json().catch(() => null)) as SessionResp | null;

        if (!sess?.authenticated) {
          if (cancelled) return;
          setStatus("need_login");
          setMsg(
            "Para liberar o acesso neste aparelho, faça o login (CPF/telefone)."
          );
          return;
        }

        if (cancelled) return;
        setStatus("syncing");
        setMsg("Sincronizando seu plano...");

        // 1) Sincroniza plano (precisa estar logado)
        const syncRes = await fetch("/api/me/sync", {
          method: "POST",
          credentials: "include",
          cache: "no-store",
        });

        if (!syncRes.ok) {
          if (cancelled) return;
          setStatus("error");
          setMsg("Falha ao sincronizar o plano. Use “Entrar agora”.");
          return;
        }

        // 2) (Opcional) ping para aquecer / validar leitura de cookies no server
        await fetch("/api/me", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        }).catch(() => null);

        if (cancelled) return;
        setStatus("redirecting");
        setMsg("Tudo certo. Redirecionando...");

        // 3) Redireciona com reload total
        window.location.href = safeDest;
      } catch {
        if (cancelled) return;
        setStatus("error");
        setMsg("Erro inesperado. Use “Entrar agora”.");
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [safeDest]);

  if (status === "need_login") {
    return (
      <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900">
        <strong>Atenção:</strong> {msg}
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900">
        Não foi possível sincronizar automaticamente. Clique em{" "}
        <strong>Entrar agora</strong> para liberar o acesso.
        <div className="mt-2 text-xs opacity-80">{msg}</div>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700">
      {status === "idle" && "Preparando..."}
      {status === "checking" && "Verificando sua sessão..."}
      {status === "syncing" && "Sincronizando seu plano..."}
      {status === "redirecting" && "Tudo certo. Redirecionando..."}
    </div>
  );
}
