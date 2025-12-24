"use client";

import { useLang } from "./useLang";
import { translations } from "./translations";

export function useT() {
  const lang = useLang();

  function t(key: string): string {
    const dict = translations[lang] as Record<string, string>;
    const pt = translations.pt as Record<string, string>;
    return dict[key] ?? pt[key] ?? key;
  }

  return { t, lang };
}
