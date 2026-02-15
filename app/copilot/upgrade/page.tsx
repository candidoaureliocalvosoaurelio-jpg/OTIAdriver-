// app/copilot/upgrade/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type SessionResp =
  | {
      authenticated?: boolean;
      planStatus?: string; // "active" | "inactive"
      plan?: string;
    }
  | null;

export default function CopilotUpgradePage() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    let alive = true;

    async function load() {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/session", { method: "GET", cache: "no-store" });
        if (!alive) return;

        if (!res.ok) {
          setAuthenticated(false);
          setIsPremium(false);
          return;
        }

        const json = (await res.json()) as SessionResp;

        const auth = Boolean(json?.authenticated);
        const planStatus = String(json?.planStatus || "inactive").toLowerCase();
        const premium = auth && planStatus === "active";

        setAuthenticated(auth);
        setIsPremium(premium);

        // ✅ se já é Premium, vai direto pro Copilot
        if (premium) window.location.href = "/copilot";
      } catch {
        setAuthenticated(false);
        setIsPremium(false);
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  const statusText = useMemo(() => {
    if (loading) return "Verificando sua conta...";
    if (!authenticated) return "Você não está logado";
    return isPremium ? "Você está logado (Premium ativo)" : "Você está logado (Premium não ativo)";
  }, [loading, authenticated, isPremium]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-black shadow-sm">
          <span>🚀</span>
          <span>🚛</span>
          <span>🤖</span>
          <span className="ml-2">IA Copilot</span>
        </div>
      </div>

      <h1 className="mt-6 text-center text-4xl md:text-5xl font-black tracking-tight">
        Desbloqueie o <span className="text-[#1F6FEB]">Copilot</span>{" "}
        <span className="text-[#038C73]">Premium</span>
      </h1>

      <p className="mt-3 text-center text-base md:text-lg opacity-80">
        A IA Copilot é o copiloto digital do motorista moderno.
        <br />
        Acesso exclusivo para assinantes <b>Premium</b>.
      </p>

      <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm">
            <div className="font-black">Status da sua conta:</div>
            <div className="mt-1">
              {loading ? (
                <span className="opacity-70">⏳ {statusText}</span>
              ) : (
                <span className="opacity-80">
                  {authenticated ? "✅ " : "❌ "}
                  {statusText}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {!authenticated ? (
              <Link
                href="/entrar?next=/copilot"
                className="rounded-xl bg-[#1F6FEB] px-5 py-3 text-sm font-black text-white hover:opacity-90"
              >
                Entrar para usar 🚀
              </Link>
            ) : isPremium ? (
              <Link
                href="/copilot"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-black text-white hover:opacity-90"
              >
                Abrir Copilot 🤖
              </Link>
            ) : (
              <Link
                href="/planos"
                className="rounded-xl bg-[#038C73] px-5 py-3 text-sm font-black text-white hover:opacity-90"
              >
                Assinar Premium ⚡
              </Link>
            )}

            <Link
              href="/"
              className="rounded-xl border bg-white px-5 py-3 text-sm font-black hover:opacity-90"
            >
              Voltar
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="text-lg font-black">🧠 Responde como instrutor</div>
          <p className="mt-2 text-sm opacity-80">
            Interpreta painel, símbolos, falhas, condução, economia e manutenção — explicando no
            jeito do motorista.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="text-lg font-black">⚡ Resposta rápida</div>
          <p className="mt-2 text-sm opacity-80">
            Pergunte e receba orientação prática em segundos, como se tivesse um especialista dentro
            da cabine.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="text-lg font-black">🗣️ Linguagem do caminhoneiro</div>
          <p className="mt-2 text-sm opacity-80">
            Nada de linguagem técnica difícil. É direto, simples e pronto pra aplicar na estrada.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="text-lg font-black">🔒 Exclusivo Premium</div>
          <p className="mt-2 text-sm opacity-80">
            Mantém o Copilot como recurso premium, valorizando o produto e aumentando sua conversão.
          </p>
        </div>
      </div>

      {!authenticated ? (
        <div className="mt-10 flex justify-center">
          <Link
            href="/entrar?next=/copilot"
            className="rounded-2xl bg-[#038C73] px-8 py-4 text-base font-black text-white shadow-lg hover:opacity-90"
          >
            ⚡ Quero acessar o Copilot Premium
          </Link>
        </div>
      ) : !isPremium ? (
        <div className="mt-10 flex justify-center">
          <Link
            href="/planos"
            className="rounded-2xl bg-[#038C73] px-8 py-4 text-base font-black text-white shadow-lg hover:opacity-90"
          >
            ⚡ Quero desbloquear o Premium
          </Link>
        </div>
      ) : null}
    </div>
  );
}
