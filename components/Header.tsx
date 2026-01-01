"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import LanguageOTIAdriver from "@/components/LanguageOTIAdriver";
import { useT } from "@/components/i18n/useT";

type UserState = { isLogged: boolean; plan: string | null };

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

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
  return null;
}

function normalizePlanLabel(plan: string | null) {
  if (!plan) return null;
  const p = plan.toLowerCase();
  if (p === "basico") return "BÁSICO";
  if (p === "pro") return "PRO";
  if (p === "premium") return "PREMIUM";
  return plan.toUpperCase();
}

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { t, lang } = useT();

  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<UserState>({ isLogged: false, plan: null });

  // Mantém o idioma em TODAS as navegações do Header
  const withLang = useMemo(() => {
    return (href: string) => {
      const [path, hash] = href.split("#");
      const sep = path.includes("?") ? "&" : "?";
      const next = `${path}${sep}lang=${lang}`;
      return hash ? `${next}#${hash}` : next;
    };
  }, [lang]);

  useEffect(() => {
    const auth = getCookie("otia_auth");
    const plan = getCookie("otia_plan");
    const isLogged = auth === "1";
    setUser({ isLogged, plan: isLogged ? (plan || null) : null });
  }, [pathname]);

  const handleLogout = () => {
    const cookiesToClear = ["otia_auth", "otia_cpf", "otia_plan"];
    cookiesToClear.forEach((name) => {
      document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    });
    setUser({ isLogged: false, plan: null });
    setMenuOpen(false);
    router.push(withLang("/"));
    router.refresh();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white border-b border-white/20 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* LOGO */}
        <Link
          href={withLang("/")}
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
                href={withLang(item.href)}
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
            {user.isLogged ? (
              <>
                <div className="flex flex-col items-end leading-none">
                  <span className="text-[10px] font-black text-white/70 uppercase">
                    Acesso
                  </span>
                  <span className="text-xs font-black text-yellow-200 uppercase italic">
                    {normalizePlanLabel(user.plan) ?? "—"}
                  </span>
                </div>

                <Link
                  href={withLang("/meus-dados")}
                  className="text-sm font-black bg-white/15 px-4 py-2 rounded-xl hover:bg-white/20 transition"
                >
                  Perfil
                </Link>

                <button
                  onClick={handleLogout}
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
                </button>
              </>
            ) : (
              <Link
                href={withLang("/entrar")}
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
            {user.isLogged ? (
              <div className="flex items-center justify-between bg-white/10 rounded-xl px-3 py-2">
                <div>
                  <div className="text-[10px] font-black text-white/70 uppercase">
                    Acesso
                  </div>
                  <div className="text-sm font-black text-yellow-200 uppercase italic">
                    {normalizePlanLabel(user.plan) ?? "—"}
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-xs font-black bg-white/15 px-3 py-2 rounded-lg"
                >
                  Sair
                </button>
              </div>
            ) : (
              <Link
                href={withLang("/entrar")}
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
              href={withLang(item.href)}
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

          <Link
            href={withLang("/meus-dados")}
            className="block py-2 text-white/95"
            onClick={() => setMenuOpen(false)}
          >
            Perfil
          </Link>
        </div>
      )}
    </header>
  );
}
