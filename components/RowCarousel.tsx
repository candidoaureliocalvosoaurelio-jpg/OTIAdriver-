"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";

export type RowItem = {
  title: string;
  subtitle?: string;
  href: string;
  imageSrc: string;
  badge?: "Grátis" | "Premium" | "Novo";
  meta?: string; // ex: "12 min", "Série", "PDF"
};

type Props = {
  title: string;
  description?: string;
  items: RowItem[];
};

function badgeStyles(badge?: RowItem["badge"]) {
  switch (badge) {
    case "Premium":
      return "bg-amber-500/90 text-black";
    case "Grátis":
      return "bg-emerald-500/90 text-white";
    case "Novo":
      return "bg-sky-500/90 text-white";
    default:
      return "bg-slate-800/70 text-white";
  }
}

export default function RowCarousel({ title, description, items }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const canScroll = useMemo(() => items.length > 4, [items.length]);

  function scrollBy(px: number) {
    if (!ref.current) return;
    ref.current.scrollBy({ left: px, behavior: "smooth" });
  }

  return (
    <section className="mt-8">
      <div className="flex items-end justify-between gap-4 px-4 md:px-6">
        <div>
          <h2 className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h2>
          {description ? (
            <p className="mt-1 text-sm text-slate-600">{description}</p>
          ) : null}
        </div>

        {canScroll ? (
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollBy(-700)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              aria-label="Voltar"
            >
              ←
            </button>
            <button
              onClick={() => scrollBy(700)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              aria-label="Avançar"
            >
              →
            </button>
          </div>
        ) : null}
      </div>

      <div className="mt-4 relative">
        {/* Gradientes laterais estilo “Netflix” */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto px-4 md:px-6 pb-2 scroll-smooth"
          style={{ scrollbarWidth: "none" as any }}
        >
          {items.map((it, idx) => (
            <Link
              key={`${it.href}-${idx}`}
              href={it.href}
              className="group relative w-[240px] min-w-[240px] md:w-[260px] md:min-w-[260px]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-md">
                <div className="relative h-[140px] w-full bg-slate-100">
                  <Image
                    src={it.imageSrc}
                    alt={it.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 240px, 260px"
                    priority={idx < 4}
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-bold text-slate-900 leading-snug line-clamp-2">
                      {it.title}
                    </p>
                    {it.badge ? (
                      <span
                        className={`shrink-0 rounded-full px-2 py-1 text-[11px] font-extrabold ${badgeStyles(
                          it.badge
                        )}`}
                      >
                        {it.badge}
                      </span>
                    ) : null}
                  </div>

                  {it.subtitle ? (
                    <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                      {it.subtitle}
                    </p>
                  ) : null}

                  {it.meta ? (
                    <p className="mt-2 text-xs font-semibold text-slate-500">
                      {it.meta}
                    </p>
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Botões overlay (mobile-friendly) */}
        {canScroll ? (
          <>
            <button
              onClick={() => scrollBy(-320)}
              className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border border-slate-200 p-2 shadow"
              aria-label="Voltar"
            >
              ←
            </button>
            <button
              onClick={() => scrollBy(320)}
              className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border border-slate-200 p-2 shadow"
              aria-label="Avançar"
            >
              →
            </button>
          </>
        ) : null}
      </div>
    </section>
  );
}
