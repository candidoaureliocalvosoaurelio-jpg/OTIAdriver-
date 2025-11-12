"use client";
import { useEffect } from "react";

export default function HideHero() {
  useEffect(() => {
    const el = document.getElementById("site-hero");
    if (el) el.style.display = "none";
    return () => {
      if (el) el.style.display = "";
    };
  }, []);
  return null;
}
