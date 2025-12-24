"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Lang = "pt" | "en" | "es";

const LANGS: Array<{ code: Lang; label: string }> = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" }, // oficial
];

function normalizeLang(input: string | null): Lang | null {
  if (!input) return null;
  const v = input.toLowerCase();
  if (v === "pt" || v === "en" || v === "es") return v;
  return null;
}

export default function LanguageOTIAdriver() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Lang>("pt");
  const ref = useRef<HTMLDivElement | null>(null);

  // Inicializa: URL -> localStorage -> pt
  useEffect(() => {
    const fromUrl = normalizeLang(
      new URLSearchParams(window.location.search).get("lang")
    );
    const stored = normalizeLang(localStorage.getItem("otiadriver_lang"));
    const lang: Lang = fromUrl || stored || "pt";

    setCurrent(lang);
    document.documentElement.lang = lang;
  }, []);

  // Fecha ao clicar fora + ESC
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!open) return;
      const el = ref.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const currentLabel = useMemo(() => {
    return LANGS.find((l) => l.code === current)?.label ?? "Português";
  }, [current]);

  function setLang(lang: Lang) {
    setCurrent(lang);
    localStorage.setItem("otiadriver_lang", lang);
    document.documentElement.lang = lang;

    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());

    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      {/* Botão estilo ZF: texto + chevron */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition select-none"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Selecionar idioma"
      >
        <span className="text-sm font-semibold">{currentLabel}</span>

        {/* Chevron */}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.24 4.38a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown estilo ZF */}
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-44 rounded-md bg-white text-slate-900 shadow-lg ring-1 ring-black/10 overflow-hidden z-50"
        >
          {/* Cabeçalho: Língua */}
          <div className="px-3 py-2 text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
            Língua
          </div>

          {/* Itens */}
          <div className="py-1">
            {LANGS.map(({ code, label }) => {
              const active = current === code;
              return (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={[
                    "w-full text-left px-3 py-2 text-sm",
                    "hover:bg-slate-50 transition flex items-center",
                    active ? "text-sky-700 font-semibold" : "text-slate-800",
                  ].join(" ")}
                  role="menuitem"
                >
                  <span>{label}</span>
                  {active && (
                    <span className="ml-auto text-[10px] rounded-full px-2 py-0.5 bg-sky-50 text-sky-700 border border-sky-100">
                      ativo
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
