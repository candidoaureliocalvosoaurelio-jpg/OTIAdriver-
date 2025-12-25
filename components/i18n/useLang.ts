"use client";

import { useEffect, useState } from "react";

export type Lang = "pt" | "en" | "es";

function normalizeLang(input: string | null): Lang | null {
  if (!input) return null;
  const v = input.toLowerCase();
  if (v === "pt" || v === "en" || v === "es") return v as Lang;
  return null;
}

function readLang(): Lang {
  if (typeof window === "undefined") return "pt";
  const fromUrl = normalizeLang(new URLSearchParams(window.location.search).get("lang"));
  const stored = normalizeLang(localStorage.getItem("otiadriver_lang"));
  return fromUrl || stored || "pt";
}

// Evento interno para atualizar a UI ao trocar idioma
const LANG_EVENT = "otiadriver_lang_change";

export function setAppLang(lang: Lang) {
  if (typeof window === "undefined") return;

  localStorage.setItem("otiadriver_lang", lang);
  document.documentElement.lang = lang;

  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url.toString());

  window.dispatchEvent(new Event(LANG_EVENT));
}

export function useLang() {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    // inicial
    setLang(readLang());
    document.documentElement.lang = readLang();

    function sync() {
      const v = readLang();
      setLang(v);
      document.documentElement.lang = v;
    }

    // troca pelo seu dropdown (evento interno)
    window.addEventListener(LANG_EVENT, sync);

    // troca por localStorage (ex.: outra aba)
    window.addEventListener("storage", sync);

    // troca por navegação/back/forward
    window.addEventListener("popstate", sync);

    return () => {
      window.removeEventListener(LANG_EVENT, sync);
      window.removeEventListener("storage", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  return lang;
}
