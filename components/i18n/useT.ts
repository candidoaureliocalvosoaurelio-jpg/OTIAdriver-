"use client";

import { translations } from "./translations";
import { useLang } from "./useLang";

export function useT() {
  const { lang } = useLang();

  function t(key: string) {
    return translations[lang]?.[key] ?? translations.pt[key] ?? key;
  }

  return { t, lang };
}
