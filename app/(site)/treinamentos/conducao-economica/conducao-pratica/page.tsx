// app/treinamentos/conducao-economica/conducao-pratica/page.tsx
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

export default function ConducaoPraticaPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="info">Treinamento do Motorista</Badge>
            <Badge tone="success">Condução Econômica</Badge>
            <Badge tone="purple">Nível 2 • Condução Prática</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Condução Prática
            <span className="block text-sky-700 text-lg md:text-xl font-extrabold mt-2">
              Rotina operacional: economia real sem perda de produtividade
            </span>
          </h1>

          <p className="text-slate-600 max-w-3xl">
            Aqui você transforma a base técnica em execução: arrancadas,
            estabilização de cruzeiro, comportamento em rampas e uso correto do
            acelerador. O foco é reduzir desperdício de energia e manter o
            caminhão fluindo com segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/treinamentos/conducao-economica"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 hover:bg-slate-50 transition"
            >
              ← Voltar para Condução Econômica
            </Link>

            <Link
              href="/treinamentos/conducao-economica/fundamentos"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-sky-700 transition"
            >
              Revisar Fundamentos (Nível 1) →
            </Link>
          </div>
        </div>
      </section>

      {/* 1) ARRANCADAS EFICIENTES */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Condução Prática"
          title="1) Arrancadas eficientes (controle de energia)"
          subtitle="Arrancada é o momento que mais “custa” combustível. A meta é sair com estabilidade e tração, sem pico desnecessário."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Princípio" tone="info">
            Aceleração progressiva gera menos consumo e menos desgaste. Uma
            arrancada agressiva tende a elevar consumo instantâneo e aumenta
            risco de patinagem (principalmente em piso irregular/molhado).
          </Callout>

          <Callout title="Como executar" tone="success">
            <ul className="list-disc pl-5 space-y-1">
              <li>Solte freio e aplique pedal de forma progressiva</li>
              <li>Busque tração e estabilidade antes de pedir potência</li>
              <li>Evite “esticadas” para ganhar poucos metros</li>
            </ul>
          </Callout>

          <Callout title="Quando o consumo piora" tone="danger">
            <ul className="list-disc pl-5 space-y-1">
              <li>Pé pesado logo no início</li>
              <li>Corrigir patinagem com mais acelerador</li>
              <li>Arrancar forte e depois precisar frear em seguida</li>
            </ul>
          </Callout>

          <Callout title="Indicador de qualidade" tone="purple">
            Uma boa arrancada não “assusta” o conjunto: o caminhão ganha
            velocidade de modo contínuo, sem oscilar e sem exigir correção com
            freio logo após.
          </Callout>
        </div>
      </section>

      {/* 2) CRUZEIRO */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Condução Prática"
          title="2) Manutenção de velocidade de cruzeiro"
          subtitle="O maior ganho operacional costuma estar na estabilidade: menos variação de velocidade = menos ciclos de energia."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Meta" tone="success">
            Mantenha um cruzeiro estável e compatível com a via. Ajustes finos
            no pedal valem mais do que acelerar e depois compensar com frenagem.
          </Callout>

          <Callout title="Técnica (simples e eficaz)" tone="info">
            <ul className="list-disc pl-5 space-y-1">
              <li>Antecipe reduções (tire o pé cedo)</li>
              <li>Evite “caçar” velocidade (sobe/desce o tempo todo)</li>
              <li>Use o terreno a seu favor: embalo controlado</li>
            </ul>
          </Callout>

          <Callout title="Erro comum" tone="warning">
            Manter velocidade “na força” em pequenas subidas gera consumo alto.
            Muitas vezes é melhor aceitar uma pequena perda de velocidade e
            recuperar suavemente após o topo.
          </Callout>

          <Callout title="Resultado esperado" tone="purple">
            Cruzeiro estável reduz consumo, melhora conforto, diminui fadiga e
            reduz desgaste de freios por menos correções.
          </Callout>
        </div>
      </section>

      {/* 3) SUBIDAS/DESCIDAS/SERRAS */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Condução Prática"
          title="3) Subidas, descidas e serras (estratégia)"
          subtitle="O segredo é planejar antes: energia de entrada, controle de velocidade e preservação do conjunto."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Callout title="Subidas" tone="info">
            Chegue com embalo controlado. Evite “pisar tudo” no meio da rampa.
            Se o caminhão perder muita velocidade, você paga caro em consumo
            tentando recuperar.
          </Callout>

          <Callout title="Descidas" tone="success">
            Controle com freio motor/retarder. Entre com velocidade adequada.
            Se você entra rápido demais, vai precisar “segurar no freio” e isso
            aumenta risco e custo.
          </Callout>

          <Callout title="Serras" tone="warning">
            Priorize segurança e estabilidade. Mantenha distância, evite
            ultrapassagens de risco e evite aquecimento de freios. Economia em
            serra é controle, não pressa.
          </Callout>
        </div>

        <div className="mt-5">
          <Callout title="Regra de segurança (sempre)" tone="danger">
            Em descida: se você não consegue controlar a velocidade com freio
            motor/retarder, você está rápido demais para a condição.
          </Callout>
        </div>
      </section>

      {/* 4) USO DO ACELERADOR */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Condução Prática"
          title="4) Uso correto do acelerador (economia sem “matar o tempo”)"
          subtitle="O objetivo é dirigir com intenção: pedir energia só quando há retorno operacional."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Aceleração progressiva" tone="success">
            Quanto mais suave a curva de aceleração, menor a chance de pico de
            consumo e maior a estabilidade. Isso é ainda mais importante com
            carga alta.
          </Callout>

          <Callout title="Tirar o pé cedo (antecipação)" tone="info">
            Tirar o pé cedo é uma das práticas mais econômicas: você usa
            desaceleração natural do conjunto, reduz freio e mantém controle.
          </Callout>

          <Callout title="Evite o “tudo ou nada”" tone="warning">
            Pedal no máximo e depois soltar totalmente cria oscilação. Faça
            ajustes pequenos e consistentes. A economia está no “controle fino”.
          </Callout>

          <Callout title="Consumo sem perda de produtividade" tone="purple">
            Produtividade é velocidade média com segurança. Economia é manter
            fluxo e estabilidade. As duas coisas convivem quando você antecipa e
            evita desperdício.
          </Callout>
        </div>
      </section>

      {/* 5) CHECKLIST OPERACIONAL */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Aplicação imediata"
          title="5) Checklist operacional (para usar hoje)"
          subtitle="Uma rotina simples que melhora consumo e reduz desgaste."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Antes de sair" tone="info">
            <ul className="list-disc pl-5 space-y-1">
              <li>Planeje rota (topografia e pontos de tráfego)</li>
              <li>Verifique calibragem e condições básicas (segurança)</li>
              <li>Ajuste postura e espelhos para reduzir fadiga</li>
            </ul>
          </Callout>

          <Callout title="Durante a condução" tone="success">
            <ul className="list-disc pl-5 space-y-1">
              <li>Antecipe: solte cedo, freie menos</li>
              <li>Mantenha cruzeiro estável sempre que possível</li>
              <li>Use freio motor/retarder nas descidas</li>
              <li>Evite picos: aceleração progressiva</li>
            </ul>
          </Callout>

          <Callout title="Sinais de que você está desperdiçando" tone="warning">
            <ul className="list-disc pl-5 space-y-1">
              <li>Muitas correções com freio</li>
              <li>Oscilação de velocidade constante</li>
              <li>RPM alto sem necessidade</li>
              <li>Saídas agressivas e frenagens repetidas</li>
            </ul>
          </Callout>

          <Callout title="Quando priorizar segurança" tone="danger">
            Tráfego pesado, serra, chuva, baixa visibilidade e piso irregular:
            reduza velocidade, aumente distância e use controle (freio motor).
            Economia nunca deve competir com segurança.
          </Callout>
        </div>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Próximo nível"
          title="O que vem depois"
          subtitle="Agora que a prática está organizada, o próximo passo lógico é AMT (Nível 3)."
        />

        <div className="flex flex-col md:flex-row gap-3">
          <Link
            href="/treinamentos/conducao-economica"
            className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-sky-700 transition"
          >
            Voltar para os Níveis da Trilha →
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
