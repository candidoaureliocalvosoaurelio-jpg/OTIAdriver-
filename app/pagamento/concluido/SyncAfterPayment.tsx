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
    return u.pathname + (u.search ? u.search : "");
  } catch {
    return url;
  }
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export default function SyncAfterPayment({ nextUrl, lang = "pt" }: Props) {
  const [status, setStatus] = useState<
    "idle" | "checking" | "need_login" | "syncing" | "waiting_plan" | "redirecting" | "error"
  >("idle");

  const [msg, setMsg] = useState<string>("");

  const safeDest = useMemo(() => {
    const fallback = `/catalogo?lang=${lang}`;
    const dest = nextUrl?.startsWith("/") ? nextUrl : fallback;

    // marcador para o middleware/páginas saberem que veio de pagamento
    const withFrom = addParam(dest, "from", "payment");

    // opcional: “fc=1” se você quiser reutilizar a lógica de “não interceptar” em /
    return addParam(withFrom, "fc", "1");
  }, [nextUrl, lang]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setStatus("checking");
        setMsg("Verificando sua sessão...");

        // 0) Checa sessão (cookies neste aparelho)
        const sessRes = await fetch("/api/auth/session", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        const sess = (await sessRes.json().catch(() => null)) as SessionResp | null;

        if (!sessRes.ok || !sess?.authenticated) {
          if (cancelled) return;
          setStatus("need_login");
          setMsg("Para liberar o acesso neste aparelho, faça o login (CPF/telefone).");
          return;
        }

        if (cancelled) return;
        setStatus("syncing");
        setMsg("Sincronizando seu plano...");

        // 1) Retry curto para aguardar o webhook aplicar o plano no banco
        // (ajuste tentativas/intervalo conforme necessário)
        const maxTries = 6;
        const intervalMs = 1500;

        let last: SyncResp | null = null;

        for (let i = 0; i < maxTries; i++) {
          if (cancelled) return;

          const syncRes = await fetch("/api/me/sync", {
            method: "POST",
            credentials: "include",
            cache: "no-store",
          });

          last = (await syncRes.json().catch(() => null)) as SyncResp | null;

          // se o endpoint falhou, não adianta insistir muito
          if (!syncRes.ok) {
            if (cancelled) return;
            setStatus("error");
            setMsg("Falha ao sincronizar o plano. Use “Entrar agora”.");
            return;
          }

          // ✅ plano ativo chegou
          if (last?.status === "active") break;

          // ainda não chegou → aguarda e tenta de novo
          setStatus("waiting_plan");
          setMsg(
            `Pagamento confirmado. Aguardando liberação do plano... (${i + 1}/${maxTries})`
          );
          await sleep(intervalMs);
        }

        // se após retries continuar inactive, orienta o usuário
        if (last?.status !== "active") {
          if (cancelled) return;
          setStatus("need_login");
          setMsg(
            "Seu pagamento pode levar alguns segundos para liberar. Se continuar, clique em “Entrar agora” ou atualize a página."
          );
          return;
        }

        // 2) (Opcional) ping /api/me para aquecer leitura de cookie
        await fetch("/api/me", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        }).catch(() => null);

        if (cancelled) return;
        setStatus("redirecting");
        setMsg("Tudo certo. Redirecionando...");

        // 3) Redireciona sem poluir histórico
        window.location.replace(safeDest);
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
      {status === "waiting_plan" && msg}
      {status === "redirecting" && "Tudo certo. Redirecionando..."}
    </div>
  );
}
