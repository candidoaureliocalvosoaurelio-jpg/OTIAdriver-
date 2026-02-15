"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type SessionResp =
  | {
      authenticated?: boolean;
      planStatus?: string; // "active" | "inactive"
      plan?: string; // "premium" etc (se existir)
    }
  | null;

export default function CopilotFloatingButton() {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    let alive = true;

    async function load() {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/session", {
          method: "GET",
          cache: "no-store",
        });

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

  function openCopilotNewTab() {
    // abre em nova aba (não deixa a página atual)
    const w = window.open("/copilot", "_blank", "noopener,noreferrer");
    // fallback se o navegador bloquear popup
    if (!w) router.push("/copilot");
  }

  function go() {
    // 🔥 regra de navegação
    if (!authenticated) {
      router.push(`/entrar?next=/copilot`);
      return;
    }

    if (isPremium) {
      openCopilotNewTab(); // ✅ Premium -> nova aba
      return;
    }

    router.push("/copilot/upgrade");
  }

  // ✅ não mostrar dentro do copilot pra não duplicar
  const hideOn = pathname?.startsWith("/copilot");
  if (hideOn) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <button
        type="button"
        onClick={go}
        className={[
          "group relative",
          "rounded-full border bg-white shadow-xl",
          "px-4 py-3",
          "hover:scale-[1.02] active:scale-[0.98] transition",
          "flex items-center gap-2",
        ].join(" ")}
        aria-label="IA Copilot"
        title={isPremium ? "IA Copilot (Premium)" : "IA Copilot (somente Premium)"}
      >
        <span className="text-xl leading-none">🚀🚛🤖</span>
        <span className="text-sm font-black tracking-wide">IA Copilot</span>

        {/* Badge status */}
        <span
          className={[
            "ml-1 rounded-full px-2 py-1 text-[10px] font-black",
            loading
              ? "bg-black/5 text-black/60"
              : isPremium
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-amber-50 text-amber-900 border border-amber-200",
          ].join(" ")}
        >
          {loading ? "..." : isPremium ? "PREMIUM" : "SÓ PREMIUM"}
        </span>

        {/* Tooltip (hover desktop) */}
        <div className="pointer-events-none absolute bottom-full right-0 mb-2 hidden w-[260px] rounded-xl border bg-white p-3 text-xs shadow-xl group-hover:block">
          <b className="block">🚀🚛🤖 IA Copilot</b>
          <div className="mt-1 opacity-80">
            {loading
              ? "Verificando sua assinatura..."
              : isPremium
                ? "Acesso liberado (abre em nova aba)."
                : "Disponível somente no plano Premium."}
          </div>
        </div>
      </button>
    </div>
  );
}
