"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

type UserState = {
  isLogged: boolean;
  plan: string | null;
};

function NavbarContent() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<UserState>({
    isLogged: false,
    plan: null,
  });

  // Ler cookie no browser
  const getCookie = (name: string) => {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
    return null;
  };

  useEffect(() => {
    const auth = getCookie("otia_auth");
    const plan = getCookie("otia_plan");

    if (auth === "1") {
      setUser({ isLogged: true, plan: plan || "básico" });
    } else {
      setUser({ isLogged: false, plan: null });
    }
  }, [pathname]);

  const handleLogout = () => {
    const cookiesToClear = ["otia_auth", "otia_cpf", "otia_plan"];
    cookiesToClear.forEach((name) => {
      document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    });

    setUser({ isLogged: false, plan: null });
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <div className="bg-blue-600 text-white font-black px-2 py-1 rounded text-lg tracking-tighter">
            OTIA
          </div>
          <span className="font-bold text-slate-800 text-lg hidden xs:inline">
            driver
          </span>
        </Link>

        {/* LINKS / AÇÕES */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/planos"
            className={`text-sm font-semibold transition-colors ${
              pathname === "/planos"
                ? "text-blue-600"
                : "text-slate-500 hover:text-blue-600"
            }`}
          >
            Planos
          </Link>

          {user.isLogged ? (
            <div className="flex items-center gap-3 sm:gap-4 pl-3 border-l border-slate-200">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-[10px] font-bold text-slate-400 uppercase leading-none">
                  Acesso
                </span>
                <span className="text-xs font-black text-blue-600 uppercase italic">
                  {user.plan}
                </span>
              </div>

              <Link
                href="/meus-dados"
                className="text-sm font-bold bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-all active:scale-95"
              >
                Perfil
              </Link>

              <button
                onClick={handleLogout}
                className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                title="Sair"
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
            </div>
          ) : (
            <Link
              href="/entrar"
              className="text-sm font-bold bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 shadow-md shadow-blue-100 transition-all active:scale-95"
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default function Navbar() {
  return (
    <Suspense
      fallback={<div className="h-16 w-full bg-white border-b border-slate-200" />}
    >
      <NavbarContent />
    </Suspense>
  );
}
