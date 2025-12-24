// components/i18n/useLang.ts
"use client";

import { useEffect, useState } from "react";

export type Lang = "pt" | "en" | "es";

export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    const stored = localStorage.getItem("otiadriver_lang");
    const v = (fromUrl || stored || "pt").toLowerCase();

    setLang(v === "en" || v === "es" || v === "pt" ? (v as Lang) : "pt");
  }, []);

  return lang;
}
