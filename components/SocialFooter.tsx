// components/SocialFooter.tsx
import Link from "next/link";

type Align = "center" | "right";

type Social = {
  name: "Instagram" | "Threads" | "TikTok" | "YouTube" | "LinkedIn";
  href: string;
  className: string;
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
          d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z"
        />
        <path
          fill="currentColor"
          d="M12 7.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Z"
        />
        <path fill="currentColor" d="M17.3 6.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      </>
    ),
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@otiadriver",
    className: "bg-black text-white",
    // Ícone mais limpo (monocromático) e legível
    svg: (
      <path
        fill="currentColor"
        d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm3.68 7.07c-.85-2-2.82-3.08-5.26-3.08-2.6 0-4.55 1.29-4.94 3.34l2.04.44c.25-1.13 1.39-1.84 2.92-1.84 1.63 0 2.73.7 2.92 1.77.2 1.14-.57 1.83-2.19 2.15l-1.37.28c-2.54.52-3.79 2.06-3.39 4.08.39 1.92 2.25 3.1 4.85 3.1 2.83 0 4.77-1.45 5.31-3.83l-2.03-.46c-.33 1.42-1.45 2.23-3.13 2.23-1.55 0-2.57-.62-2.76-1.64-.19-1 .53-1.72 2.08-2.03l1.36-.27c2.7-.54 4.01-2.02 3.58-4.4Z"
      />
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@otiadriver0",
    className: "bg-black text-white",
    // Ícone mais “TikTok-like” (melhor que o simplificado anterior)
    svg: (
      <path
        fill="currentColor"
        d="M16.6 3c.4 2.3 2 4.1 4.4 4.5V10c-1.7-.1-3.2-.7-4.4-1.7v5.2A6.2 6.2 0 1 1 10.4 7.4c.3 0 .6 0 1 .1V10a3.6 3.6 0 1 0 2.6 3.5V3h2.6Z"
      />
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@OTIADRIVER",
    className: "bg-red-600 text-white",
    svg: (
      <path
        fill="currentColor"
        d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"
      />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/otiadriver-undefined-663b713a6",
    className: "bg-[#0A66C2] text-white",
    svg: (
      <path
        fill="currentColor"
        d="M6.5 6.6A2.1 2.1 0 1 1 6.5 2.4a2.1 2.1 0 0 1 0 4.2ZM4.2 21V8.2H8.7V21H4.2Zm6.7 0V8.2h4.3v1.7h.1c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.7V21h-4.5v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-5.1Z"
      />
    ),
  },
];

export default function SocialFooter({ align = "center" }: { align?: Align }) {
  const justify =
    align === "right" ? "justify-center md:justify-end" : "justify-center";

  return (
    <div className="w-full">
      <p className={`text-xs font-semibold text-white/90 ${align === "right" ? "text-center md:text-right" : "text-center"}`}>
        Siga a OTIAdriver
      </p>

      <div className={`mt-3 flex ${justify} gap-3`}>
        {socials.map((s) => (
          <Link
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            title={s.name}
            className={[
              "inline-flex h-12 w-12 items-center justify-center rounded-full",
              "ring-1 ring-white/15 shadow-md",
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
