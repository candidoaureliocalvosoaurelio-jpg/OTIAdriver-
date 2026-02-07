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
            <strong>estabilidade + escolha de regime</strong>.
          </Callout>
        </div>
      </section>

      {/* 3) ANTECIPAÇÃO, TRÁFEGO E TOPOGRAFIA */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Fundamentos"
          title="3) Antecipação: tráfego e topografia (o que mais economiza no mundo real)"
          subtitle="Quem antecipa, freia menos. Quem freia menos, consome menos."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Leitura de tráfego" tone="info">
            Identifique semáforos, congestionamento, entradas/saídas e ritmo do
            fluxo. O objetivo é reduzir a necessidade de frenagens e arrancadas,
            que são os maiores “ladrões de consumo”.
          </Callout>

          <Callout title="Leitura de topografia" tone="success">
            Em subida, planeje antes: manter o caminhão “chegando” com energia é
            melhor do que tentar “salvar” no meio da rampa. Em descida, controle
            com freio motor/retarder, evitando aquecimento.
          </Callout>

          <Callout title="Distância de segurança = economia" tone="warning">
            Distância não é só segurança: ela cria “espaço” para você reduzir
            aceleração e usar desaceleração natural do conjunto. Menos pedal,
            menos freio, menor consumo.
          </Callout>

          <Callout title="Erro típico" tone="danger">
            “Colar” no veículo da frente obriga frenagens constantes e depois
            acelerações fortes para recuperar. Isso aumenta consumo, desgaste e
            risco de colisão.
          </Callout>
        </div>
      </section>

      {/* 4) FREIO DE SERVIÇO X FREIO MOTOR */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Fundamentos"
          title="4) Freio de serviço x freio motor (controle e segurança)"
          subtitle="Uso correto reduz custo, reduz risco e mantém o caminhão estável."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Callout title="Freio de serviço" tone="danger">
            Use como recurso de segurança e correção. Frenagem constante aquece
            e reduz eficiência do conjunto. Excesso indica falha de antecipação
            ou excesso de velocidade para a condição.
          </Callout>

          <Callout title="Freio motor / retarder" tone="success">
            Use para manter velocidade em declives e aproximar-se de reduções de
            velocidade com controle. É ferramenta de estabilidade e preservação
            de freios (pastilhas, lonas e tambores/discos).
          </Callout>

          <Callout title="Descidas: estratégia segura" tone="warning">
            Entre na descida com velocidade controlada, selecione o nível de
            freio motor/retarder adequado e evite “ir embalado” para depois
            tentar segurar no freio de serviço.
          </Callout>

          <Callout title="Sinal de alerta" tone="danger">
            Cheiro de freio, fumaça, perda de eficiência de frenagem ou pedal
            “longo” são sinais de aquecimento perigoso. Reduza velocidade,
            pare em local seguro e aguarde resfriamento.
          </Callout>
        </div>
      </section>

      {/* 5) ERROS COMUNS */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Fundamentos"
          title="5) Erros comuns que aumentam consumo"
          subtitle="Checklist de hábitos que mais geram desperdício, desgaste e risco."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Callout title="Aceleração brusca" tone="danger">
            Picos de aceleração elevam consumo instantâneo e pioram tração em
            piso irregular. Acelere progressivo e mantenha estabilidade.
          </Callout>

          <Callout title="RPM alto sem carga" tone="warning">
            Manter rotação alta em plano/leve inclinação costuma ser desperdício.
            Busque o regime de maior eficiência e estabilidade.
          </Callout>

          <Callout title="Não antecipar" tone="info">
            Frear tarde e arrancar forte para “compensar tempo” aumenta consumo e
            fadiga. A antecipação é a economia mais barata.
          </Callout>

          <Callout title="Segurar no freio em descida" tone="danger">
            Além de elevar custo, aumenta risco de perda de frenagem por
            aquecimento. Use freio motor/retarder e velocidade controlada.
          </Callout>

          <Callout title="Oscilar velocidade" tone="warning">
            Variação contínua de velocidade significa energia desperdiçada.
            Ajuste para um cruzeiro mais estável sempre que possível.
          </Callout>

          <Callout title="Marcha inadequada para a rampa" tone="info">
            Trocar tarde e “afogar” o motor faz o sistema reagir com esforço
            extra. Planeje e mantenha o conjunto no regime adequado.
          </Callout>
        </div>

        <div className="mt-5">
          <Callout title="Resumo executivo" tone="success">
            Se você reduzir <strong>picos de aceleração</strong>, reduzir{" "}
            <strong>frenagens</strong> e mantiver <strong>estabilidade</strong>{" "}
            (rotação e velocidade), você tende a ganhar economia com segurança
            e produtividade. O resto é ajuste fino por aplicação.
          </Callout>
        </div>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          eyebrow="Próximo passo"
          title="Siga a trilha na ordem"
          subtitle="A base está pronta. Agora evoluímos para prática e módulos avançados."
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
