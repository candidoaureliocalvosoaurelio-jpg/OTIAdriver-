// app/treinamentos/conducao-economica/caminhoes-eletricos/page.tsx
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

export default function CaminhoesEletricosTreinoPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Treinamento do Motorista</Badge>
            <Badge tone="success">Condução Econômica</Badge>
            <Badge tone="purple">Nível 5 • Caminhões Elétricos</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Caminhões Elétricos
            <span className="block text-sky-700 text-lg md:text-xl font-extrabold mt-2">
              Regeneração, autonomia real e modos de condução
            </span>
          </h1>

          <p className="text-slate-600 max-w-3xl">
            Em elétricos, condução econômica é gestão de energia com precisão.
            Você não “gasta combustível”: você consome energia elétrica e a forma
            como acelera, desacelera, usa regeneração e escolhe modos determina
            a autonomia real. A meta é eficiência com segurança operacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/treinamentos/conducao-economica"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 hover:bg-slate-50 transition"
            >
              ← Voltar para Condução Econômica
            </Link>

            <Link
              href="/treinamentos/conducao-economica/caminhoes-eletronicos"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-sky-700 transition"
            >
              Revisar Caminhões Eletrônicos (Nível 4)
            </Link>
          </div>
        </div>
      </section>

      {/* 1) REGENERAÇÃO */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Fundamentos elétricos"
          title="1) Regeneração (frear gerando energia)"
          subtitle="Regeneração é transformar parte da energia do movimento em energia elétrica para a bateria."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Como funciona" tone="info">
            Ao desacelerar, o motor elétrico atua como gerador. Isso reduz uso
            do freio de serviço e recupera energia (não é “energia grátis”: é
            recuperação parcial do que você já gastou).
          </Callout>

          <Callout title="O que melhora regeneração" tone="success">
            <ul className="list-disc pl-5 space-y-1">
              <li>Antecipar e tirar o pé cedo</li>
              <li>Desaceleração progressiva (em vez de freada tardia)</li>
              <li>Uso correto do nível de regen conforme a via</li>
            </ul>
          </Callout>

          <Callout title="O que piora" tone="warning">
            Frenagens tardias e fortes “queimam” energia no freio. Aceleradas
            agressivas aumentam consumo e reduzem oportunidade de recuperação.
          </Callout>

          <Callout title="Limitações reais" tone="purple">
            Regeneração pode ser limitada por bateria cheia, temperatura,
            aderência (controle de estabilidade) e estratégia do veículo.
          </Callout>
        </div>

        <div className="mt-5">
          <Callout title="Regra prática" tone="success">
            Se você dirige “fluindo”, você regenera mais e freia menos. Se você
            dirige no padrão “acelera e trava”, você perde autonomia.
          </Callout>
        </div>
      </section>

      {/* 2) AUTONOMIA REAL */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Autonomia"
          title="2) Autonomia real: o que mais influencia"
          subtitle="A autonomia não depende só da bateria. Depende do seu padrão de energia ao longo do dia."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Callout title="Velocidade e aerodinâmica" tone="warning">
            Acima de certa velocidade, o arrasto do ar cresce muito. Pequeno
            aumento de velocidade pode custar muita autonomia.
          </Callout>

          <Callout title="Carga e topografia" tone="info">
            Mais peso e mais subida exigem mais energia. Descidas recuperam
            parte via regeneração, mas nunca 100%.
          </Callout>

          <Callout title="Temperatura e climatização" tone="danger">
            Ar-condicionado, aquecimento e gestão térmica da bateria consomem
            energia. Em alguns cenários, isso pesa muito na autonomia.
          </Callout>

          <Callout title="Tráfego e para-e-anda" tone="success">
            Em urbano, elétrico pode ser muito eficiente se houver antecipação e
            regeneração bem usada. Em para-e-anda agressivo (freio/arranco),
            a autonomia cai.
          </Callout>

          <Callout title="Pneus e pressão" tone="warning">
            Resistência ao rolamento impacta direto. Calibragem e tipo de pneu
            fazem diferença mensurável.
          </Callout>

          <Callout title="Estilo do motorista" tone="purple">
            A variável que mais muda no dia a dia. Picos de aceleração e falta
            de antecipação derrubam autonomia rapidamente.
          </Callout>
        </div>

        <div className="mt-5">
          <Callout title="Objetivo operacional" tone="info">
            Condução econômica em elétricos é maximizar{" "}
            <strong>km por kWh</strong> mantendo segurança e o ritmo necessário
            da operação.
          </Callout>
        </div>
      </section>

      {/* 3) PEDAL E MODOS */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Operação"
          title="3) Pedal, modos de condução e “one pedal driving”"
          subtitle="Modos mudam a resposta do acelerador, a regeneração e a entrega de potência."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Modos comuns (conceito)" tone="info">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Eco:</strong> resposta mais suave, foco em eficiência
              </li>
              <li>
                <strong>Normal:</strong> equilíbrio entre conforto e energia
              </li>
              <li>
                <strong>Power:</strong> resposta rápida (use só quando necessário)
              </li>
            </ul>
          </Callout>

          <Callout title="One pedal (quando existe)" tone="success">
            Em alguns veículos, ao aliviar o pedal você já aplica forte
            regeneração. Excelente para urbano se você tiver antecipação e
            suavidade.
          </Callout>

          <Callout title="Erro típico" tone="warning">
            Rodar sempre em modo Power e compensar com regen forte depois.
            Isso aumenta perdas: você gasta energia em pico e recupera só parte.
          </Callout>

          <Callout title="Boa prática" tone="purple">
            Use Eco/Normal como padrão e “Power” apenas para situações
            específicas (rampa curta, inserção segura, emergência).
          </Callout>
        </div>
      </section>

      {/* 4) EFICIÊNCIA x SEGURANÇA */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Segurança"
          title="4) Eficiência energética x segurança (prioridade absoluta)"
          subtitle="Eficiência nunca pode competir com estabilidade, frenagem e visibilidade."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Controle em descidas" tone="warning">
            Regeneração ajuda, mas não substitui controle. Se a velocidade está
            aumentando além do seguro, use freio de serviço sem hesitar.
          </Callout>

          <Callout title="Aderência e piso molhado" tone="danger">
            Regeneração forte pode influenciar tração em baixa aderência. Ajuste
            nível de regen e conduza suave.
          </Callout>

          <Callout title="Distância e antecipação" tone="success">
            Mantendo distância você desacelera por regeneração com estabilidade
            e reduz frenagens fortes.
          </Callout>

          <Callout title="Meta correta" tone="info">
            A meta é eficiência com segurança: reduzir desperdício e manter o
            caminhão previsível e estável em qualquer condição.
          </Callout>
        </div>
      </section>

      {/* 5) CHECKLIST ELÉTRICO */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Checklist"
          title="5) Checklist rápido (para ganhar autonomia)"
          subtitle="Prático e objetivo para aplicar em qualquer rota."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Hábitos que aumentam autonomia" tone="success">
            <ul className="list-disc pl-5 space-y-1">
              <li>Antecipar e desacelerar cedo (regen)</li>
              <li>Evitar picos de aceleração</li>
              <li>Manter velocidade mais estável</li>
              <li>Usar modo Eco/Normal como padrão</li>
              <li>Planejar rota e paradas</li>
            </ul>
          </Callout>

          <Callout title="Hábitos que derrubam autonomia" tone="danger">
            <ul className="list-disc pl-5 space-y-1">
              <li>Acelerar forte e frear forte</li>
              <li>Rodar sempre em modo Power</li>
              <li>Velocidade alta constante</li>
              <li>Climatização excessiva sem necessidade</li>
              <li>Pneus com pressão inadequada</li>
            </ul>
          </Callout>
        </div>

        <div className="mt-5">
          <Callout title="Resumo executivo" tone="purple">
            Em elétricos, a economia está em três coisas:{" "}
            <strong>suavidade</strong>, <strong>antecipação</strong> e{" "}
            <strong>velocidade controlada</strong>. Regeneração é a ferramenta
            que transforma isso em autonomia real.
          </Callout>
        </div>
      </section>

      {/* FINAL */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Conclusão"
          title="Trilha concluída (Níveis 1–5)"
          subtitle="Agora você tem base técnica, prática, AMT, eletrônica e elétricos — sem certificação por enquanto."
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
