// app/treinamentos/conducao-economica/page.tsx
import Link from "next/link";

type LevelTone = "info" | "success" | "warning" | "purple";

type LevelCard = {
  level: string;
  title: string;
  description: string;
  href?: string; // se não tiver href => "Em breve"
  tone: LevelTone;
  bullets: string[];
};

function toneStyles(tone: LevelTone) {
  switch (tone) {
    case "success":
      return {
        wrap: "border-emerald-200 bg-emerald-50/60",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        dot: "bg-emerald-500",
        title: "text-emerald-950",
        ring: "focus:ring-emerald-200",
        hover: "hover:border-emerald-300",
      };
    case "warning":
      return {
        wrap: "border-amber-200 bg-amber-50/60",
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        dot: "bg-amber-500",
        title: "text-amber-950",
        ring: "focus:ring-amber-200",
        hover: "hover:border-amber-300",
      };
    case "purple":
      return {
        wrap: "border-violet-200 bg-violet-50/60",
        badge: "bg-violet-50 text-violet-700 border-violet-200",
        dot: "bg-violet-500",
        title: "text-violet-950",
        ring: "focus:ring-violet-200",
        hover: "hover:border-violet-300",
      };
    case "info":
    default:
      return {
        wrap: "border-sky-200 bg-sky-50/60",
        badge: "bg-sky-50 text-sky-700 border-sky-200",
        dot: "bg-sky-500",
        title: "text-slate-900",
        ring: "focus:ring-sky-200",
        hover: "hover:border-sky-300",
      };
  }
}

const levels: LevelCard[] = [
  {
    level: "Nível 1",
    title: "Fundamentos — Base Técnica (comum)",
    description:
      "Base técnica da condução econômica: torque, rotação, carga, antecipação e erros que elevam consumo.",
    href: "/treinamentos/conducao-economica/fundamentos",
    tone: "info",
    bullets: [
      "Conceito técnico (não apenas “dicas”)",
      "Torque × rotação × carga (aplicação real)",
      "Antecipação, tráfego e topografia",
    ],
  },
  {
  level: "Nível 2",
  title: "Condução Prática — Eficiência no dia a dia",
  description:
    "Aplicação prática: arrancadas, cruzeiro, subidas/descidas e uso do acelerador sem perder produtividade.",
  href: "/treinamentos/conducao-economica/conducao-pratica",
  tone: "success",
  bullets: [
    "Arrancadas eficientes e controle de energia",
    "Manutenção de velocidade de cruzeiro",
    "Subidas, descidas e serras (estratégia)",
  ],
},
{
  level: "Nível 3",
  title: "Transmissões Automatizadas (AMT)",
  description:
    "Como o motorista influencia o algoritmo e o que realmente causa desgaste de embreagem.",
  href: "/treinamentos/conducao-economica/amt",
  tone: "purple",
  bullets: [
    "Automático x Manual",
    "Economy / Performance / EcoRoll",
    "Hábitos que geram desgaste",
  ],
},
{
    level: "Nível 4",
    title: "Caminhões Eletrônicos — Gestão e Telemetria",
    description:
      "Leitura técnica dos indicadores e interpretação de dados para ajustar estilo de condução com precisão.",
    tone: "info",
    bullets: [
      "Consumo, RPM, torque e carga (indicadores)",
      "Telemetria: como ler e agir",
      "Ajuste de estilo de condução baseado em dados",
    ],
  },
  {
    level: "Nível 5",
    title: "Caminhões Elétricos — Eficiência Energética",
    description:
      "Regeneração, autonomia real, modos de condução e uso do pedal com segurança operacional.",
    tone: "warning",
    bullets: [
      "Regeneração e uso inteligente do pedal",
      "Autonomia real vs teórica (fatores reais)",
      "Eficiência energética x segurança",
    ],
  },
];

function LevelItem({ item }: { item: LevelCard }) {
  const s = toneStyles(item.tone);
  const ready = Boolean(item.href);

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (ready && item.href) {
      return (
        <Link
          href={item.href}
          className={[
            "group block rounded-2xl border bg-white p-6 shadow-sm transition",
            "hover:shadow-md",
            s.hover,
            "focus:outline-none focus:ring-4",
            s.ring,
          ].join(" ")}
          aria-label={`Abrir ${item.level}: ${item.title}`}
        >
          {children}
        </Link>
      );
    }

    return (
      <div
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm opacity-95"
        aria-label={`${item.level}: ${item.title} (em breve)`}
      >
        {children}
      </div>
    );
  };

  return (
    <Wrapper>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className={["h-2.5 w-2.5 rounded-full", s.dot].join(" ")} />
            <span
              className={[
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
                s.badge,
              ].join(" ")}
            >
              {item.level}
            </span>
          </div>

          <h2
            className={[
              "mt-3 text-lg md:text-xl font-extrabold leading-snug",
              s.title,
            ].join(" ")}
          >
            {item.title}
          </h2>

          <p className="mt-2 text-sm md:text-base text-slate-600">
            {item.description}
          </p>
        </div>

        <div className="shrink-0">
          {ready ? (
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
              Acessar
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
              Em breve
            </span>
          )}
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-700">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between">
        {ready ? (
          <>
            <span className="text-xs text-slate-500">Clique para abrir</span>
            <span className="text-sm font-semibold text-sky-700">
              Ver conteúdo →
            </span>
          </>
        ) : (
          <>
            <span className="text-xs text-slate-500">
              Conteúdo em produção (sem link)
            </span>
            <span className="text-sm font-semibold text-slate-600">—</span>
          </>
        )}
      </div>
    </Wrapper>
  );
}

export default function ConducaoEconomicaPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* HERO da trilha */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700">
          Treinamento do Motorista
        </p>

        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Condução Econômica
          <span className="block text-sky-700 text-lg md:text-xl font-extrabold mt-2">
            Base técnica aplicável a diesel, AMT, eletrônicos e elétricos
          </span>
        </h1>

        <p className="mt-4 text-slate-600 max-w-3xl">
          Esta trilha organiza a condução econômica em níveis progressivos. A
          proposta é formar entendimento técnico real (torque, rotação, carga,
          antecipação e estratégia) e transformar isso em prática consistente,
          com foco em segurança, eficiência e produtividade.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/treinamentos/conducao-economica/fundamentos"
            className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-sky-700 transition"
          >
            Começar pelos Fundamentos (Nível 1) →
          </Link>
          <Link
            href="/treinamentos"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 hover:bg-slate-50 transition"
          >
            Voltar ao HUB de Treinamentos
          </Link>
        </div>
      </section>

      {/* Níveis */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {levels.map((lvl) => (
          <LevelItem key={lvl.level} item={lvl} />
        ))}
      </section>

      {/* Nota de escopo */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h3 className="text-lg font-extrabold text-slate-900">
          Nota de escopo (importante)
        </h3>
        <p className="mt-2 text-slate-600">
          O nível de Certificação foi propositalmente mantido fora por enquanto.
          Primeiro consolidamos a base técnica e os módulos práticos com padrão
          premium e consistência de linguagem.
        </p>
      </section>
    </main>
  );
}
