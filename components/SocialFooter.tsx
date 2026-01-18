// components/SocialFooter.tsx
import Link from "next/link";

type Social = {
  name: "Instagram" | "Threads" | "TikTok" | "YouTube" | "LinkedIn";
  href: string;
  className: string; // fundo/cores
  svg: JSX.Element;
};

const socials: Social[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/otiadriver",
    className:
      "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white",
    svg: (
      <>
        <path
          fill="currentColor"
          d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z"
        />
        <path
          fill="currentColor"
          d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
        />
        <path fill="currentColor" d="M17.6 6.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </>
    ),
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@otiadriver",
    className: "bg-black text-white",
    svg: (
      <>
        {/* Ícone estilizado (monocromático) */}
        <path
          fill="currentColor"
          d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm2.95 7.4c-.44-2.11-2.34-3.36-4.93-3.36-2.5 0-4.42 1.19-4.87 3.13l1.95.54c.24-1.08 1.32-1.78 2.92-1.78 1.53 0 2.55.63 2.72 1.54.18.95-.52 1.54-2 1.83l-1.2.25c-2.57.55-3.86 1.99-3.45 4 .39 1.92 2.23 3.06 4.77 3.06 2.76 0 4.64-1.35 5.18-3.57l-1.96-.48c-.34 1.36-1.46 2.15-3.12 2.15-1.48 0-2.45-.6-2.64-1.54-.18-.93.5-1.55 1.96-1.85l1.2-.25c2.64-.56 3.91-1.96 3.47-4.17z"
        />
      </>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@otiadriver0",
    className: "bg-black text-white",
    svg: (
      <>
        {/* Ícone simplificado */}
        <path
          fill="currentColor"
          d="M14 3c.6 3 2.8 5.2 6 5.6V11c-1.9-.1-3.6-.8-5-1.9V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1V12a3 3 0 1 0 2 2.8V3h2z"
        />
      </>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@OTIADRIVER",
    className: "bg-red-600 text-white",
    svg: (
      <>
        <path
          fill="currentColor"
          d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"
        />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/otiadriver-undefined-663b713a6",
    className: "bg-[#0A66C2] text-white",
    svg: (
      <>
        <path
          fill="currentColor"
          d="M6.5 6.5A2 2 0 1 1 6.5 2.5a2 2 0 0 1 0 4zM4 21V8h5v13H4zm7.5 0V8h4.8v1.8h.1c.7-1.3 2.3-2.6 4.7-2.6 5 0 5.9 3.3 5.9 7.5V21h-5v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21h-5z"
        />
      </>
    ),
  },
];

export default function SocialFooter() {
  return (
    <div className="mt-8 border-t border-slate-200 pt-6">
      <p className="text-sm font-semibold text-slate-700">Siga a OTIAdriver</p>

      <div className="mt-3 flex flex-wrap gap-3">
        {socials.map((s) => (
          <Link
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            title={s.name}
            className={[
              "inline-flex h-11 w-11 items-center justify-center rounded-full",
              "shadow-sm ring-1 ring-black/5",
              "transition-transform hover:scale-110",
              s.className,
            ].join(" ")}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              {s.svg}
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
