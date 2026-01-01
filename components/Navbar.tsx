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

  // Lê cookie no browser com segurança
  function getCookie(name: string) {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift() ?? null;
    }
    return null;
  }

  // Atualiza estado do usuário ao trocar de rota
  useEffect(() => {
    const auth = getCookie("otia_auth");
    const plan = getCookie("otia_plan");

    if (auth === "1") {
      setUser({
        isLogged: true,
        plan: plan ?? "basico",
      });
    } else {
      setUser({
        isLogged: false,
        plan: null,
      });
    }
  }, [pathname]);

  function handleLogout() {
    const cookies = ["otia_auth", "otia_cpf", "otia_plan"];

    cookies.forEach((name) => {
      document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
    });

    setUser({ isLogged: false, plan: null });
    router.push("/");
    router.refresh();
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-blue-600 font-black text-lg">OTIA</span>
          <span className="text-emerald-400 font-black text-lg">driver</span>
        </Link>

        {/* AÇÕES */}
        <div className="flex items-center gap-3">
          <Link
            href="/planos"
            className={`text-sm font-semibold ${
              pathname === "/planos"
                ? "text-blue-600"
                : "text-slate-500 hover:text-blue-600"
            }`}
          >
            Planos
          </Link>

          {user.isLogged ? (
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              {/* Plano */}
              <div className="hidden md:flex flex-col items-end leading-tight">
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Plano
                </span>
                <span className="text-xs font-black text-blue-600 uppercase">
                  {user.plan}
                </span>
              </div>

              <Link
                href="/meus-dados"
                className="text-sm font-bold bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition"
              >
                Perfil
              </Link>

              <button
                onClick={handleLogout}
                title="Sair"
                className="p-2 text-slate-400 hover:text-red-500 transition"
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
              className="text-sm font-bold bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition"
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

// Export com Suspense (build seguro na Vercel)
export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-16 w-full bg-white border-b" />}>
      <NavbarContent />
    </Suspense>
  );
}
