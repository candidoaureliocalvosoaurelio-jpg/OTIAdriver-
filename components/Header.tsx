// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import LanguageOTIAdriver from "@/components/LanguageOTIAdriver";
import { useT } from "@/components/i18n/useT";

type MeResp = {
  authenticated: boolean;
  plan?: string; // "active" | "inactive" | "basico" | "pro" | "premium" | undefined
};

type NavItem = {
  href: string;
  key: string;
  isHome?: boolean;
};

const navLinks: readonly NavItem[] = [
  { href: "/", key: "nav.home", isHome: true }, // ✅ Home dinâmico (logado -> /caminhoes)
  { href: "/proposito", key: "nav.purpose" },
  { href: "/caminhoes-eletricos", key: "nav.electricTrucks" },
  { href: "/planos", key: "nav.plans" },
  { href: "/pneus", key: "nav.tires" },
  { href: "/inspecao-manutencao", key: "nav.inspectionMaintenance" },
  { href: "/treinamentos", key: "nav.training" },
  { href: "/simbolos-painel", key: "nav.dashboardSymbols" },
] as const;

function normalizePlanLabel(plan?: string) {
  if (!plan) return null;
  const p = String(plan).toLowerCase();
  if (p === "active") return "PREMIUM";
  if (p === "inactive") return "INATIVO";
  if (p === "basico") return "BÁSICO";
  if (p === "pro") return "PRO";
  if (p === "premium") return "PREMIUM";
  return p.toUpperCase();
}

export default function Header() {
  const pathname = usePathname();
  const { t, lang } = useT();

  const [menuOpen, setMenuOpen] = useState(false);
  const [loadingMe, setLoadingMe] = useState(true);
  const [me, setMe] = useState<MeResp | null>(null);

  // Mantém o idioma em TODAS as navegações do Header
  const withLang = useMemo(() => {
    return (href: string) => {
      const [path, hash] = href.split("#");
      const sep = path.includes("?") ? "&" : "?";
      const next = `${path}${sep}lang=${lang}`;
      return hash ? `${next}#${hash}` : next;
    };
  }, [lang]);

  // Busca o estado real via API (cookies httpOnly -> só o server lê)
  useEffect(() => {
    let alive = true;

    setLoadingMe(true);
    fetch("/api/me", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!alive) return;
        setMe(data);
      })
      .catch(() => {
        if (!alive) return;
        setMe(null);
      })
      .finally(() => {
        if (!alive) return;
        setLoadingMe(false);
      });

    return () => {
      alive = false;
    };
  }, [pathname]);

  const isLogged = !!me?.authenticated;
  const isPremium = me?.plan === "active";

  // ✅ Destinos principais
  // Visitante: "/" (vitrine)
  // Logado: "/caminhoes" (página das marcas)
  const homeHref = isLogged ? withLang("/caminhoes") : withLang("/");
  const entrarHref = withLang("/entrar");
  const planosHref = withLang("/planos");
  const catalogoHref = withLang("/catalogo");

  // ✅ "Início" do menu também precisa ser dinâmico
  const navHomeHref = isLogged ? withLang("/caminhoes") : withLang("/");

  // Logout com preservação do lang + retorno seguro
  // (após logout, volta para vitrine)
  const logoutHref = `/api/auth/logout?lang=${encodeURIComponent(lang)}&next=${encodeURIComponent(
    "/"
  )}`;

  // Evita flicker no topo
  if (loadingMe) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white border-b border-white/20 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
          <div className="h-8 w-40 bg-white/20 rounded-lg" />
          <div className="h-8 w-40 bg-white/20 rounded-lg" />
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white border-b border-white/20 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* LOGO */}
        <Link
          href={homeHref}
          className="flex items-center hover:opacity-80 transition-opacity"
          onClick={() => setMenuOpen(false)}
        >
          <div className="leading-tight">
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold">
              <span className="mr-1" aria-hidden>
                🌐
              </span>
              {t("brand.officialPlatform")}
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
              <Link
                href={item.isHome ? navHomeHref : withLang(item.href)}
                className="px-3 py-2 hover:underline underline-offset-4"
              >
                {t(item.key)}
              </Link>

              {idx < navLinks.length - 1 && (
                <span className="mx-1 text-white/80 select-none" aria-hidden>
                  |
                </span>
              )}
            </div>
          ))}

          <span className="mx-1 text-white/80 select-none" aria-hidden>
            |
          </span>

          <Link
            href={withLang("/ebook-driver")}
            className="px-3 py-2 hover:underline underline-offset-4 text-yellow-300"
          >
            {t("nav.ebook")}
          </Link>
        </nav>

        {/* AÇÕES DIREITA */}
        <div className="flex items-center gap-2">
          <LanguageOTIAdriver />

          {/* STATUS + BOTÕES (DESKTOP) */}
          <div className="hidden md:flex items-center gap-3 pl-3 border-l border-white/20">
            {isLogged ? (
              <>
                <div className="flex flex-col items-end leading-none">
                  <span className="text-[10px] font-black text-white/70 uppercase">
                    Acesso
                  </span>
                  <span className="text-xs font-black text-yellow-200 uppercase italic">
                    {normalizePlanLabel(me?.plan) ?? "—"}
                  </span>
                </div>

                {/* Se Premium: Catálogo. Se não: Planos */}
                <Link
                  href={isPremium ? catalogoHref : planosHref}
                  className="text-sm font-black bg-white/15 px-4 py-2 rounded-xl hover:bg-white/20 transition"
                >
                  {isPremium ? "Catálogo" : "Planos"}
                </Link>

                <Link
                  href={logoutHref}
                  className="p-2 text-white/80 hover:text-red-200 transition-colors"
                  title="Sair"
                  aria-label="Sair"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                </Link>
              </>
            ) : (
              <Link
                href={entrarHref}
                className="text-sm font-black bg-white text-[#003F9A] px-5 py-2.5 rounded-xl hover:opacity-90 transition"
              >
                Entrar
              </Link>
            )}
          </div>

          {/* MENU MOBILE */}
          <button
            className="md:hidden p-2 rounded hover:bg-white/10 transition"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 text-sm font-semibold bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] border-t border-white/20">
          <div className="pt-3 pb-2">
            {isLogged ? (
              <div className="flex items-center justify-between bg-white/10 rounded-xl px-3 py-2">
                <div>
                  <div className="text-[10px] font-black text-white/70 uppercase">
                    Acesso
                  </div>
                  <div className="text-sm font-black text-yellow-200 uppercase italic">
                    {normalizePlanLabel(me?.plan) ?? "—"}
                  </div>
                </div>

                <Link
                  href={logoutHref}
                  className="text-xs font-black bg-white/15 px-3 py-2 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Sair
                </Link>
              </div>
            ) : (
              <Link
                href={entrarHref}
                className="block text-center font-black bg-white text-[#003F9A] px-4 py-3 rounded-xl"
                onClick={() => setMenuOpen(false)}
              >
                Entrar
              </Link>
            )}
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.isHome ? navHomeHref : withLang(item.href)}
              className="block py-2"
              onClick={() => setMenuOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}

          <Link
            href={withLang("/ebook-driver")}
            className="block py-2 text-yellow-200"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.ebook")}
          </Link>

          {/* Acesso rápido quando logado */}
          {isLogged && (
            <Link
              href={isPremium ? catalogoHref : planosHref}
              className="block py-2 text-white/95"
              onClick={() => setMenuOpen(false)}
            >
              {isPremium ? "Catálogo" : "Planos"}
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
