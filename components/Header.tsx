"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import LanguageOTIAdriver from "@/components/LanguageOTIAdriver";
import { useT } from "@/components/i18n/useT";

type MeResp = {
  authenticated: boolean;
  plan?: string; 
};

const navLinks = [
  { href: "/", key: "nav.home" },
  { href: "/proposito", key: "nav.purpose" },
  { href: "/caminhoes-eletricos", key: "nav.electricTrucks" },
  { href: "/planos", key: "nav.plans" },
  { href: "/pneus", key: "nav.tires" },
  { href: "/inspecao-manutencao", key: "nav.inspectionMaintenance" },
  { href: "/treinamentos", key: "nav.training" },
  { href: "/simbolos-painel", key: "nav.dashboardSymbols" },
] as const;

/**
 * CONFIGURAÇÃO VISUAL DOS PLANOS
 * Aqui definimos as cores para cada nível de acesso
 */
const BADGE_CONFIG: Record<string, { label: string; color: string }> = {
  basico: { label: "BÁSICO", color: "text-gray-300" },
  pro: { label: "PRO", color: "text-blue-300" },
  premium: { label: "PREMIUM", color: "text-yellow-200" },
  active: { label: "PREMIUM", color: "text-yellow-200" }, // "active" também mostra Premium
};

function getBadge(plan?: string) {
  if (!plan) return { label: "—", color: "text-white/70" };
  const p = plan.toLowerCase();
  return BADGE_CONFIG[p] || { label: p.toUpperCase(), color: "text-white" };
}

export default function Header() {
  const pathname = usePathname();
  const { t, lang } = useT();

  const [menuOpen, setMenuOpen] = useState(false);
  const [loadingMe, setLoadingMe] = useState(true);
  const [me, setMe] = useState<MeResp | null>(null);

  const withLang = useMemo(() => {
    return (href: string) => {
      const [path, hash] = href.split("#");
      const sep = path.includes("?") ? "&" : "?";
      const next = `${path}${sep}lang=${lang}`;
      return hash ? `${next}#${hash}` : next;
    };
  }, [lang]);

  useEffect(() => {
    let alive = true;
    setLoadingMe(true);
    fetch("/api/me", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (alive) setMe(data);
      })
      .catch(() => {
        if (alive) setMe(null);
      })
      .finally(() => {
        if (alive) setLoadingMe(false);
      });

    return () => { alive = false; };
  }, [pathname]);

  const isLogged = !!me?.authenticated;
  // Agora qualquer plano na lista oficial libera o status de premium para navegação
  const isPremium = ["active", "premium", "pro", "basico"].includes(me?.plan || "");

  const homeHref = isLogged && isPremium ? withLang("/catalogo") : withLang("/");
  const entrarHref = withLang("/entrar");
  const planosHref = withLang("/planos");
  const catalogoHref = withLang("/catalogo");

  const logoutHref = `/api/auth/logout?lang=${encodeURIComponent(lang)}&next=${encodeURIComponent(
    isPremium ? "/catalogo" : "/"
  )}`;

  const badge = getBadge(me?.plan);

  if (loadingMe) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white border-b border-white/20 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
          <div className="h-8 w-40 bg-white/20 rounded-lg animate-pulse" />
          <div className="h-8 w-40 bg-white/20 rounded-lg animate-pulse" />
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white border-b border-white/20 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* LOGO */}
        <Link href={homeHref} className="flex items-center hover:opacity-80 transition-opacity">
          <div className="leading-tight">
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold">
              <span className="mr-1">🌐</span> {t("brand.officialPlatform")}
            </span>
            <span className="block text-sm sm:text-base md:text-lg font-extrabold tracking-tight">
              <span className="text-[#003F9A]">OTIA</span>
              <span className="text-[#15B8B2]">driver</span>
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center text-[12px] lg:text-[13px] font-extrabold uppercase tracking-wide">
          {navLinks.map((item, idx) => (
            <div key={item.href} className="flex items-center">
              <Link href={withLang(item.href)} className="px-3 py-2 hover:underline underline-offset-4">
                {t(item.key)}
              </Link>
              {idx < navLinks.length - 1 && <span className="mx-1 text-white/80">|</span>}
            </div>
          ))}
          <span className="mx-1 text-white/80">|</span>
          <Link href={withLang("/ebook-driver")} className="px-3 py-2 hover:underline underline-offset-4 text-yellow-300">
            {t("nav.ebook")}
          </Link>
        </nav>

        {/* AÇÕES DIREITA */}
        <div className="flex items-center gap-2">
          <LanguageOTIAdriver />

          <div className="hidden md:flex items-center gap-3 pl-3 border-l border-white/20">
            {isLogged ? (
              <>
                <div className="flex flex-col items-end leading-none">
                  <span className="text-[10px] font-black text-white/70 uppercase">Acesso</span>
                  <span className={`text-xs font-black uppercase italic ${badge.color}`}>
                    {badge.label}
                  </span>
                </div>

                <Link
                  href={isPremium ? catalogoHref : planosHref}
                  className="text-sm font-black bg-white/15 px-4 py-2 rounded-xl hover:bg-white/20 transition"
                >
                  {isPremium ? "Catálogo" : "Planos"}
                </Link>

                <Link href={logoutHref} className="p-2 text-white/80 hover:text-red-200 transition-colors" title="Sair">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                </Link>
              </>
            ) : (
              <Link href={entrarHref} className="text-sm font-black bg-white text-[#003F9A] px-5 py-2.5 rounded-xl hover:opacity-90 transition">
                Entrar
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
