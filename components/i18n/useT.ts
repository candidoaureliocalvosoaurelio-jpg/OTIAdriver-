"use client";

import { useLang } from "./useLang";
import { translations } from "./translations";

export function useT() {
  const lang = useLang(); // ✅ CORRETO

  function t(key: string): string {
    return (
      translations[lang]?.[key] ??
      translations.pt[key] ??
      key
    );
  }

  return { t, lang };
}
