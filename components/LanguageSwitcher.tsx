"use client";
import { useEffect, useMemo, useState } from "react";

type Lang = "pt" | "en" | "es" | "fr";

const LANGS: Array<{ code: Lang; label: string; flag: string }> = [
  { code: "pt", label: "Português (BR)", flag: "🇧🇷" },
  { code: "en", label: "English (US)",  flag: "🇺🇸" },
  { code: "es", label: "Español",       flag: "🇪🇸" },
  { code: "fr", label: "Français",      flag: "🇫🇷" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Lang>("pt");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang") as Lang | null;
    const stored = (localStorage.getItem("otiadriver_lang") as Lang | null) || undefined;
    const lang: Lang = fromUrl || stored || "pt";
    setCurrent(lang);
    document.documentElement.lang = lang;
  }, []);

  const currentFlag = useMemo(
    () => LANGS.find(l => l.code === current)?.flag ?? "🌐",
    [current]
  );

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
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition"
        aria-label="Selecionar idioma"
      >
        <span className="text-xl select-none">{currentFlag}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-white text-gray-900 ring-1 ring-black/5 overflow-hidden z-50">
          {LANGS.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
            >
              <span className="text-lg">{flag}</span>
              <span className="font-medium">{label}</span>
              {current === code && (
                <span className="ml-auto text-xs rounded-full px-2 py-0.5 bg-emerald-100 text-emerald-700">
                  ativo
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
