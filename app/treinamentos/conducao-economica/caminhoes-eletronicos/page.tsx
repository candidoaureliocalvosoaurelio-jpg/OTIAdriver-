// app/treinamentos/conducao-economica/caminhoes-eletronicos/page.tsx
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

export default function CaminhoesEletronicosPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Treinamento do Motorista</Badge>
            <Badge tone="success">Condução Econômica</Badge>
            <Badge tone="purple">Nível 4 • Caminhões Eletrônicos</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Caminhões Eletrônicos
            <span className="block text-sky-700 text-lg md:text-xl font-extrabold mt-2">
              Gestão eletrônica, telemetria e leitura de indicadores
            </span>
          </h1>

          <p className="text-slate-600 max-w-3xl">
            Aqui você aprende a dirigir com base em dados. Caminhões modernos
            têm controle eletrônico do motor e registram eventos de condução.
            A diferença entre “dirigir bem” e “dirigir com eficiência” está em
            interpretar os indicadores e ajustar o comportamento com intenção.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/treinamentos/conducao-economica"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 hover:bg-slate-50 transition"
            >
              ← Voltar para Condução Econômica
            </Link>

            <Link
              href="/treinamentos/conducao-economica/amt"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-sky-700 transition"
            >
              Revisar AMT (Nível 3)
            </Link>
          </div>
        </div>
      </section>

      {/* 1) GESTÃO ELETRÔNICA DO MOTOR */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Eletrônica embarcada"
          title="1) Gestão eletrônica do motor — o que ela controla"
          subtitle="A ECU (módulo do motor) gerencia combustível, torque, emissões e proteção do conjunto."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Torque sob demanda" tone="info">
            O motor entrega torque conforme seu comando (pedal) e as estratégias
            da ECU. Pedal agressivo pede mais torque e aumenta consumo.
          </Callout>

          <Callout title="Proteções e limitações" tone="warning">
            Temperatura, pressão, emissões e outros parâmetros podem limitar
            torque/potência. Se você “força”, a ECU reage para proteger o
            conjunto — isso pode piorar consumo e performance.
          </Callout>

          <Callout title="Emissões e eficiência" tone="success">
            Estratégias de emissões (EGR, SCR, DPF) influenciam o regime do
            motor. Condução irregular pode aumentar regenerações e penalizar
            consumo.
          </Callout>

          <Callout title="Meta do motorista" tone="purple">
            Dirigir para manter o motor estável: menos oscilação, menos eventos,
            menor esforço do sistema e melhor eficiência global.
          </Callout>
        </div>
      </section>

      {/* 2) TELEMETRIA E INDICADORES */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Telemetria"
          title="2) Indicadores principais (e o que eles significam)"
          subtitle="Telemetria não é “fiscalização”: é diagnóstico de padrão de condução."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Callout title="Consumo (km/l ou l/100km)" tone="success">
            Mostra eficiência global. Olhe em conjunto com rota, carga e
            velocidade média. Consumo pior geralmente acompanha excesso de
            aceleração e frenagem.
          </Callout>

          <Callout title="RPM médio e tempo em faixa eficiente" tone="info">
            Quanto mais tempo o motor trabalha estável na faixa correta, melhor.
            RPM alto constante ou “caça” de giro tende a piorar consumo.
          </Callout>

          <Callout title="Eventos de condução" tone="warning">
            Frenagens bruscas, acelerações bruscas, excesso de marcha baixa,
            velocidade acima do planejado e tempo de marcha lenta (idle).
          </Callout>

          <Callout title="Marcha lenta (Idle)" tone="danger">
            Caminhão parado com motor ligado consome sem produzir. Reduzir idle
            é uma das economias mais fáceis e mensuráveis.
          </Callout>

          <Callout title="Uso de freio de serviço" tone="warning">
            Freio de serviço em excesso indica falta de antecipação e velocidade
            inadequada para o tráfego/terreno. Também é sinal de risco.
          </Callout>

          <Callout title="Tempo de cruzeiro estável" tone="purple">
            Quanto maior o cruzeiro estável, maior a tendência de eficiência. É
            o “sinal de condução madura”.
          </Callout>
        </div>
      </section>

      {/* 3) COMO INTERPRETAR DADOS */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Interpretação"
          title="3) Como interpretar dados sem cair em armadilhas"
          subtitle="Evite conclusões erradas. Telemetria deve ser lida por contexto operacional."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Contexto é obrigatório" tone="info">
            Compare dados com rota, peso, clima e tráfego. Não existe consumo
            “ideal” único para todas as operações.
          </Callout>

          <Callout title="Olhe tendência, não um dia" tone="success">
            Um dia ruim pode ser chuva, engarrafamento, acidente ou desvio. O
            que importa é o padrão semanal/mensal.
          </Callout>

          <Callout title="Cuidado com velocidade média" tone="warning">
            Aumentar velocidade média pode piorar consumo muito rápido. Busque
            equilíbrio: produtividade é manter o fluxo com segurança.
          </Callout>

          <Callout title="Eventos são o mapa do desperdício" tone="purple">
            Se os eventos (bruscos, freio, oscilação) caem, o consumo tende a
            melhorar. Ataque o comportamento que gera eventos.
          </Callout>
        </div>
      </section>

      {/* 4) AJUSTE DE ESTILO */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Ajuste fino"
          title="4) Ajuste de estilo de condução (ações diretas)"
          subtitle="Ações simples que impactam indicadores de forma consistente."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Callout title="Reduza picos de aceleração" tone="success">
            Aceleração progressiva reduz eventos, melhora tração e estabiliza RPM.
          </Callout>

          <Callout title="Antecipe mais" tone="info">
            Tirar o pé cedo reduz uso de freio de serviço e diminui ciclos de
            energia.
          </Callout>

          <Callout title="Gerencie marcha lenta" tone="danger">
            Reduzir tempo parado com motor ligado melhora consumo sem depender
            de rota.
          </Callout>

          <Callout title="Busque cruzeiro estável" tone="purple">
            Evite “caçar” velocidade. Ajustes pequenos são melhores do que picos.
          </Callout>

          <Callout title="Freio motor como ferramenta" tone="warning">
            Use em descidas e reduções planejadas para poupar freio de serviço.
          </Callout>

          <Callout title="Consistência vence impulso" tone="success">
            A telemetria premia padrões consistentes. Condução “emocional”
            geralmente aparece como eventos e piora de consumo.
          </Callout>
        </div>
      </section>

      {/* CHECKLIST DE TELEMETRIA */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Checklist"
          title="5) Checklist rápido de telemetria (para usar sempre)"
          subtitle="Se você acompanhar isso, você controla consumo e desgaste com precisão."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Indicadores que você deve melhorar" tone="success">
            <ul className="list-disc pl-5 space-y-1">
              <li>Menos eventos bruscos (aceleração/frenagem)</li>
              <li>Menos marcha lenta (idle)</li>
              <li>Mais tempo em cruzeiro estável</li>
              <li>RPM médio mais estável (menos oscilação)</li>
            </ul>
          </Callout>

          <Callout title="Indicadores de alerta" tone="danger">
            <ul className="list-disc pl-5 space-y-1">
              <li>Uso elevado de freio de serviço</li>
              <li>Oscilação constante de velocidade</li>
              <li>Muitos picos de aceleração</li>
              <li>Idle alto em períodos longos</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Próximo nível"
          title="Nível 5 — Caminhões Elétricos"
          subtitle="Regeneração, autonomia real e eficiência energética com segurança."
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
