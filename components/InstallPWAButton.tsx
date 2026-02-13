"use client";

import { useEffect, useMemo, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia?.("(display-mode: standalone)")?.matches ||
      // iOS legacy
      // @ts-ignore
      Boolean(navigator.standalone);

    setIsInstalled(Boolean(standalone));

    function onBeforeInstallPrompt(e: Event) {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    }

    function onAppInstalled() {
      setIsInstalled(true);
      setDeferredPrompt(null);
    }

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  const isIOS = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }, []);

  const isAndroid = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return /Android/i.test(navigator.userAgent);
  }, []);

  async function handleInstall() {
    // Se o browser permitir instalar via prompt -> instala
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      try {
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === "accepted") {
          setDeferredPrompt(null);
        }
      } catch {}
      return;
    }

    // Se não tiver prompt (ex: iPhone) -> abre instruções
    setShowHelp(true);
  }

  // Se já instalado, não mostra nada
  if (isInstalled) return null;

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleInstall}
        className="
          group
          relative
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-full
          bg-gradient-to-r
          from-blue-600
          via-sky-500
          to-emerald-400
          px-6
          py-3
          text-base
          md:text-sm
          font-extrabold
          text-white
          shadow-xl
          transition
          hover:scale-105
          hover:shadow-2xl
          active:scale-95
          focus:outline-none
        "
      >
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-white/20
            opacity-0
            blur-xl
            transition
            group-hover:opacity-100
          "
        />
        <span className="text-xl md:text-lg">📲</span>
        <span className="relative z-10 tracking-wide">
          BAIXAR O APP OTIAdriver
        </span>
      </button>

      {/* Se o navegador ainda não liberou o prompt, explica */}
      {!deferredPrompt && (
        <button
          type="button"
          onClick={() => setShowHelp((v) => !v)}
          className="text-xs font-semibold text-slate-700 underline underline-offset-4 hover:text-slate-900"
        >
          Não apareceu o botão de instalar? Ver como instalar
        </button>
      )}

      {showHelp && !deferredPrompt && (
        <div className="mt-2 w-full max-w-xl rounded-2xl border border-slate-200 bg-white/70 p-4 text-left shadow-sm">
          <p className="text-sm font-bold text-slate-900">
            Como instalar o app (PWA)
          </p>

          {isAndroid && (
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-800">
              <li>Abra no Chrome (Android).</li>
              <li>Toque em ⋮ (menu) → <b>Instalar app</b> ou <b>Adicionar à tela inicial</b>.</li>
            </ul>
          )}

          {isIOS && (
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-800">
              <li>Abra no Safari (iPhone).</li>
              <li>Toque em <b>Compartilhar</b> → <b>Adicionar à Tela de Início</b>.</li>
            </ul>
          )}

          {!isAndroid && !isIOS && (
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-800">
              <li>No Chrome/Edge: clique no ícone de instalar na barra de endereço (se aparecer).</li>
              <li>Ou menu do navegador → <b>Instalar</b> / <b>Adicionar à tela inicial</b>.</li>
            </ul>
          )}

          <p className="mt-2 text-xs text-slate-600">
            Obs: o prompt automático pode demorar, porque o navegador só libera após alguns critérios de engajamento.
          </p>
        </div>
      )}
    </div>
  );
}
