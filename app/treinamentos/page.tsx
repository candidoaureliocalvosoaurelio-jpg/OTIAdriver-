// app/treinamentos/page.tsx
import Link from "next/link";

type TrackTone = "blue" | "emerald" | "amber" | "violet";

type Track = {
  title: string;
  description: string;
  href?: string; // se não tiver href, mostra "Em breve"
  tone: TrackTone;
  levelTag: string;
  bullets: string[];
};

function toneStyles(tone: TrackTone) {
  switch (tone) {
    case "emerald":
      return {
        ring: "ring-emerald-200",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        dot: "bg-emerald-500",
        title: "text-emerald-950",
        border: "border-emerald-200",
        hover: "hover:border-emerald-300",
      };
    case "amber":
      return {
        ring: "ring-amber-200",
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        dot: "bg-amber-500",
        title: "text-amber-950",
        border: "border-amber-200",
        hover: "hover:border-amber-300",
      };
    case "violet":
      return {
        ring: "ring-violet-200",
        badge: "bg-violet-50 text-violet-700 border-violet-200",
        dot: "bg-violet-500",
        title: "text-violet-950",
        border: "border-violet-200",
        hover: "hover:border-violet-300",
      };
    case "blue":
    default:
      return {
        ring: "ring-sky-200",
        badge: "bg-sky-50 text-sky-700 border-sky-200",
        dot: "bg-sky-500",
        title: "text-slate-900",
        border: "border-sky-200",
        hover: "hover:border-sky-300",
      };
  }
}

const tracks: Track[] = [
  {
    title: "Treinamento do Motorista — Condução Econômica",
    description:
      "Trilha principal para reduzir consumo, aumentar segurança e manter produtividade com base técnica (não apenas “dicas”).",
    href: "/treinamentos/conducao-economica",
    tone: "blue",
    levelTag: "Trilha Base • Níveis 1–5",
    bullets: [
      "Aplicável a diesel, AMT, eletrônicos e elétricos",
      "Fundamentos → Prática → AMT → Eletrônicos → Elétricos",
      "Conteúdo estruturado para evolução contínua",
    ],
  },
  {
    title: "Fundamentos de Transmissão Automatizada (AMT)",
    description:
      "Entenda como o motorista influencia o algoritmo (TraXon, Opticruise e equivalentes) e como evitar desgaste.",
    href: "/treinamentos/conducao-economica/amt",
    tone: "violet",
    levelTag: "Nível 3",
    bullets: [
      "Automático x Manual (o que muda na prática)",
      "EcoRoll / Economy / Performance (quando usar)",
      "O que desgasta embreagem e como evitar",
    ],
  },
  {
    title: "Caminhões Eletrônicos — Leitura Técnica e Telemetria",
    description:
      "Gestão eletrônica do motor, indicadores e interpretação de dados para ajustar estilo de condução com precisão.",
    href: "/treinamentos/conducao-economica/caminhoes-eletronicos",
    tone: "emerald",
    levelTag: "Nível 4",
    bullets: [
      "Consumo, RPM, torque e carga (interpretação)",
      "Indicadores e hábitos que geram economia real",
      "Ajustes práticos sem perda de produtividade",
    ],
  },
  {
    title: "Caminhões Elétricos — Eficiência Energética e Segurança",
    description:
      "Regeneração, autonomia real e uso de modos/pedal para maximizar eficiência sem comprometer segurança.",
    href: "/treinamentos/conducao-economica/caminhoes-eletricos",
    tone: "amber",
    levelTag: "Nível 5",
    bullets: [
      "Regeneração e condução “one pedal”",
      "Autonomia real vs autonomia teórica",
      "Eficiência energética x segurança operacional",
    ],
  },
];

function Card({ t }: { t: Track }) {
  const s = toneStyles(t.tone);
  const isReady = Boolean(t.href);

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (isReady && t.href) {
      return (
        <Link
          href={t.href}
          className={[
            "group block rounded-2xl border bg-white p-6 shadow-sm transition",
            "hover:shadow-md",
            s.border,
            s.hover,
            "focus:outline-none focus:ring-4",
            s.ring,
          ].join(" ")}
        >
          {children}
        </Link>
      );
    }

    return (
      <div
        className={[
          "rounded-2xl border bg-white p-6 shadow-sm opacity-95",
          s.border,
        ].join(" ")}
      >
        {children}
      </div>
    );
  };

  return (
    <Wrapper>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className={["h-2.5 w-2.5 rounded-full", s.dot].join(" ")} />
            <span
              className={[
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
                s.badge,
              ].join(" ")}
            >
              {t.levelTag}
            </span>
          </div>

          <h2 className={["mt-3 text-lg font-extrabold", s.title].join(" ")}>
            {t.title}
          </h2>

          <p className="mt-2 text-sm text-slate-600">{t.description}</p>
        </div>

        <span className="text-xs font-semibold text-slate-600">
          {isReady ? "Acessar" : "Em breve"}
        </span>
      </div>

      <ul className="mt-4 space-y-2">
        {t.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm text-slate-700">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default function TreinamentosHubPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <section className="grid gap-6 md:grid-cols-2">
        {tracks.map((t) => (
          <Card key={t.title} t={t} />
        ))}
      </section>
    </main>
  );
}
