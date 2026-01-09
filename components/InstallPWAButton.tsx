"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

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

  async function handleInstall() {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    try {
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setDeferredPrompt(null);
      }
    } catch {}
  }

  // Não mostra se já instalado ou se não for instalável
  if (isInstalled || !deferredPrompt) return null;

  return (
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
      {/* brilho animado */}
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

      {/* ícone */}
      <span className="text-xl md:text-lg">📲</span>

      {/* texto */}
      <span className="relative z-10 tracking-wide">
        Baixar App OTIAdriver
      </span>
    </button>
  );
}
