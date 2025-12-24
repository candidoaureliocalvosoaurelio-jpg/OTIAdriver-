// app/treinamentos/conducao-economica/fundamentos/page.tsx
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

export default function FundamentosConducaoEconomicaPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="info">Treinamento do Motorista</Badge>
            <Badge tone="success">Condução Econômica</Badge>
            <Badge tone="purple">Nível 1 • Fundamentos</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Fundamentos de Condução Econômica
            <span className="block text-sky-700 text-lg md:text-xl font-extrabold mt-2">
              Base técnica (não “dicas”) para reduzir consumo com segurança e
              produtividade
            </span>
          </h1>

          <p className="text-slate-600 max-w-3xl">
            Este módulo estabelece a base comum para diesel, AMT, caminhões com
            gestão eletrônica e elétricos. Você vai entender o “porquê” das
            ações do motorista: como torque, rotação, carga, topografia e
            antecipação se convertem em consumo, desgaste e risco operacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/treinamentos/conducao-economica"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 hover:bg-slate-50 transition"
            >
              ← Voltar para Condução Econômica
            </Link>

            <Link
              href="/treinamentos"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-sky-700 transition"
            >
              HUB de Treinamentos →
            </Link>
          </div>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Objetivo do nível 1"
          title="O que você deve dominar ao final"
          subtitle="O foco é criar entendimento técnico, para que as decisões do motorista sejam consistentes em qualquer caminhão e condição."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Entender o conceito técnico" tone="info">
            Condução econômica não é “andar devagar”. É{" "}
            <strong>gerenciar energia</strong> com planejamento: escolher
            aceleração, rotação e velocidade adequadas à carga e ao terreno, com
            mínima perda em produtividade.
          </Callout>

          <Callout title="Ler o cenário antes do caminhão reagir" tone="success">
            Antecipação reduz consumo porque diminui ciclos de “acelera/freia”.
            Menos variação de energia = menos combustível, menos desgaste e
            maior segurança.
          </Callout>

          <Callout title="Separar freio de serviço x freio motor" tone="warning">
            Freio de serviço é um recurso de segurança. Freio motor/retarder é
            ferramenta de controle de velocidade. Uso correto preserva freios,
            melhora estabilidade e evita aquecimento.
          </Callout>

          <Callout title="Evitar erros comuns que “roubam consumo”" tone="danger">
            Rotação alta sem necessidade, aceleração brusca, manter marcha
            inadequada para carga/topografia e “segurar no freio” em descidas
            são alguns dos hábitos que mais elevam consumo e temperatura.
          </Callout>
        </div>
      </section>

      {/* 1) O QUE É CONDUÇÃO ECONÔMICA */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Fundamentos"
          title="1) O que é condução econômica (definição técnica)"
          subtitle="Uma definição operacional para aplicar no campo, independentemente de marca/modelo."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Callout title="Definição operacional" tone="info">
            Condução econômica é a capacidade de{" "}
            <strong>transportar carga com segurança</strong>, mantendo a{" "}
            <strong>velocidade média necessária</strong>, com o{" "}
            <strong>menor consumo possível</strong> e o{" "}
            <strong>menor desgaste</strong>, ajustando-se ao terreno e ao tráfego.
          </Callout>

          <Callout title="Três pilares" tone="success">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Energia:</strong> acelerar só o necessário
              </li>
              <li>
                <strong>Tempo:</strong> manter fluidez (evitar “para e anda”)
              </li>
              <li>
                <strong>Controle:</strong> segurança e estabilidade sempre
              </li>
            </ul>
          </Callout>

          <Callout title="Indicadores práticos" tone="purple">
            <ul className="list-disc pl-5 space-y-1">
              <li>Consumo (km/l ou l/100km)</li>
              <li>Tempo em marcha alta / cruzeiro estável</li>
              <li>Uso de freio de serviço (excesso = desperdício)</li>
              <li>Eventos de aceleração/frenagem brusca</li>
            </ul>
          </Callout>
        </div>

        <div className="mt-5">
          <Callout title="Regra de ouro" tone="success">
            <strong>Velocidade constante</strong> e{" "}
            <strong>baixa variação de energia</strong> tendem a reduzir consumo.
            Em operação real, o objetivo é manter o caminhão{" "}
            <strong>fluindo</strong> com segurança, sem “picos” de aceleração e
            sem “travadas” desnecessárias.
          </Callout>
        </div>
      </section>

      {/* 2) TORQUE, ROTAÇÃO E CARGA */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Fundamentos"
          title="2) Torque, rotação e carga (a relação que manda no consumo)"
          subtitle="Você não controla apenas o pedal: você controla o regime de trabalho do motor."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Torque (força útil)" tone="info">
            Torque é o que “empurra” o caminhão. Para economia, interessa manter
            o motor trabalhando em uma faixa onde ele entrega torque com boa
            eficiência, evitando rotações altas sem necessidade.
          </Callout>

          <Callout title="Rotação (RPM) é meio, não fim" tone="warning">
            RPM alto pode significar potência, mas também pode significar{" "}
            <strong>desperdício</strong>. A pergunta correta é: “Estou usando a
            rotação necessária para a carga e o terreno, ou estou ‘gritando’
            motor?”
          </Callout>

          <Callout title="Carga e topografia definem a marcha" tone="success">
            Caminhão carregado em subida exige outra estratégia. A marcha ideal
            é aquela que mantém o motor estável, evitando “afogar” (RPM muito
            baixo) e evitando “esticar” (RPM alto).
          </Callout>

          <Callout title="O que aumenta consumo nesse ponto" tone="danger">
            <ul className="list-disc pl-5 space-y-1">
              <li>Segurar RPM alto por ansiedade/pressa</li>
              <li>Acelerar forte para “recuperar” velocidade em subida</li>
              <li>Trocar marcha tarde demais e perder eficiência</li>
              <li>Oscilar velocidade (perde energia em ciclos)</li>
            </ul>
          </Callout>
        </div>

        <div className="mt-5">
          <Callout title="Aplicação prática (mentalidade correta)" tone="purple">
            Pense assim: <strong>o pedal seleciona energia</strong>. A marcha e
            a rotação definem se o motor vai gerar essa energia com eficiência ou
            com desperdício. Economia é{" "}
