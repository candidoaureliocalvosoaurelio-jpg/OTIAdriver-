// app/treinamentos/conducao-economica/amt/page.tsx
import Link from "next/link";

type Tone = "info" | "success" | "warning" | "danger" | "purple";

function toneStyles(tone: Tone) {
  switch (tone) {
    case "success":
      return {
        wrap: "border-emerald-200 bg-emerald-50",
        dot: "bg-emerald-500",
        title: "text-emerald-950",
        text: "text-emerald-950/90",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      };
    case "warning":
      return {
        wrap: "border-amber-200 bg-amber-50",
        dot: "bg-amber-500",
        title: "text-amber-950",
        text: "text-amber-950/90",
        badge: "bg-amber-50 text-amber-700 border-amber-200",
      };
    case "danger":
      return {
        wrap: "border-rose-200 bg-rose-50",
        dot: "bg-rose-500",
        title: "text-rose-950",
        text: "text-rose-950/90",
        badge: "bg-rose-50 text-rose-700 border-rose-200",
      };
    case "purple":
      return {
        wrap: "border-violet-200 bg-violet-50",
        dot: "bg-violet-500",
        title: "text-violet-950",
        text: "text-violet-950/90",
        badge: "bg-violet-50 text-violet-700 border-violet-200",
      };
    case "info":
    default:
      return {
        wrap: "border-sky-200 bg-sky-50",
        dot: "bg-sky-500",
        title: "text-slate-900",
        text: "text-slate-800/90",
        badge: "bg-sky-50 text-sky-700 border-sky-200",
      };
  }
}

function Badge({
  children,
  tone = "info",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  const s = toneStyles(tone);
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold",
        s.badge,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function Callout({
  title,
  tone = "info",
  children,
}: {
  title: string;
  tone?: Tone;
  children: React.ReactNode;
}) {
  const s = toneStyles(tone);
  return (
    <div className={["rounded-2xl border p-5 md:p-6", s.wrap].join(" ")}>
      <div className="flex items-start gap-3">
        <span className={["mt-1.5 h-3 w-3 rounded-full", s.dot].join(" ")} />
        <div className="min-w-0">
          <p className={["font-extrabold", s.title].join(" ")}>{title}</p>
          <div className={["mt-2 text-sm leading-relaxed", s.text].join(" ")}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-5">
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-slate-600 max-w-3xl">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function AMTPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Treinamento do Motorista</Badge>
            <Badge tone="success">Condução Econômica</Badge>
            <Badge tone="purple">Nível 3 • AMT</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Transmissões Automatizadas (AMT)
            <span className="block text-sky-700 text-lg md:text-xl font-extrabold mt-2">
              TraXon, Opticruise e equivalentes
            </span>
          </h1>

          <p className="text-slate-600 max-w-3xl">
            Neste nível você entende como a transmissão automatizada decide
            trocas, como o motorista influencia o algoritmo e quais hábitos
            aumentam consumo e desgaste de embreagem. AMT não elimina erros —
            ela apenas reage a eles.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/treinamentos/conducao-economica"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 hover:bg-slate-50 transition"
            >
              ← Voltar para Condução Econômica
            </Link>

            <Link
              href="/treinamentos/conducao-economica/conducao-pratica"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-sky-700 transition"
            >
              Revisar Condução Prática (Nível 2)
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="AMT • Fundamentos"
          title="1) Automático x Manual — o que muda de verdade"
        />

        <Callout title="Conceito-chave" tone="info">
          AMT é uma transmissão mecânica que troca marchas sozinha. Ela não
          “pensa” como um motorista experiente: ela reage a aceleração,
          inclinação, carga e rotação.
        </Callout>

        <Callout title="Erro comum" tone="warning">
          Acreditar que “é só acelerar que o caminhão resolve”. A forma como
          você pisa define se a AMT vai trabalhar com eficiência ou esforço.
        </Callout>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="AMT • Estratégia"
          title="2) Modos Economy / Performance / EcoRoll"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Economy" tone="success">
            Prioriza trocas mais cedo e rotação baixa. Ideal para carga estável,
            plano e foco em consumo.
          </Callout>

          <Callout title="Performance" tone="warning">
            Mantém marchas por mais tempo. Use apenas quando necessário
            (ultrapassagem, rampa curta).
          </Callout>

          <Callout title="EcoRoll" tone="info">
            Permite rodar em inércia controlada. Funciona bem quando há
            antecipação e terreno favorável.
          </Callout>

          <Callout title="Erro típico" tone="danger">
            Forçar Performance o tempo todo anula a lógica econômica da AMT e
            aumenta desgaste.
          </Callout>
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="AMT • Desgaste"
          title="3) O que mais desgasta embreagem"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Aceleração brusca" tone="danger">
            Pede torque imediato e obriga a AMT a trabalhar a embreagem com
            carga excessiva.
          </Callout>

          <Callout title="Segurar em rampa no acelerador" tone="danger">
            Um dos maiores causadores de desgaste. Use freio.
          </Callout>

          <Callout title="Oscilar pedal" tone="warning">
            Faz o sistema trocar marchas repetidamente.
          </Callout>

          <Callout title="Boa prática" tone="success">
            Aceleração progressiva + antecipação = menos trocas, menos calor,
            mais vida útil.
          </Callout>
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="AMT • Mentalidade"
          title="4) Como o motorista influencia o algoritmo"
        />

        <Callout title="Princípio" tone="purple">
          A AMT aprende com sua intenção. Pedal agressivo gera lógica agressiva.
          Condução estável gera trocas previsíveis e eficientes.
        </Callout>

        <Callout title="Resumo prático" tone="success">
          Se você dirige a AMT como se fosse manual, ela se comporta melhor.
          Se você trata como videogame, ela reage com consumo e desgaste.
        </Callout>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Próximo nível"
          title="Nível 4 — Caminhões Eletrônicos"
          subtitle="Gestão eletrônica, indicadores e leitura de dados."
        />

        <div className="flex flex-col md:flex-row gap-3">
          <Link
            href="/treinamentos/conducao-economica"
            className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-sky-700 transition"
          >
            Voltar para os Níveis →
          </Link>

          <Link
            href="/treinamentos"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 hover:bg-slate-50 transition"
          >
            HUB de Treinamentos
          </Link>
        </div>
      </section>
    </main>
  );
}
