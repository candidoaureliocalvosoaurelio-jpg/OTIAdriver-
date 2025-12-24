"use client";

import { useLang } from "./useLang";
import { translations } from "./translations";

export function useT() {
  const lang = useLang();

  function t(key: string): string {
    const dict = translations[lang]; // Record<string, string>
    return dict?.[key] ?? translations.pt?.[key] ?? key;
  }

  return { t, lang };
}
