// app/(site)/luz-bateria-alternador-caminhao/page.tsx
import Link from "next/link";

export const metadata = {
  title:
    "Luz da Bateria no Caminhão: alternador, carga e solução | OTIAdriver",
  description:
    "Entenda o que significa a luz da bateria/alternador acesa no caminhão, causas mais comuns, riscos e o que fazer para evitar pane elétrica.",
};

function RiskBadge({ level }: { level: "Baixo" | "Médio" | "Alto" }) {
  const map = {
    Baixo: {
      ring: "ring-emerald-200",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
      label: "Baixo risco",
      desc: "Pode ser aviso inicial. Monitore e evite desligar o caminhão.",
    },
    Médio: {
      ring: "ring-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-800",
      dot: "bg-amber-500",
      label: "Risco médio",
      desc: "Pode parar de carregar. Reduza consumo elétrico e procure suporte.",
    },
    Alto: {
      ring: "ring-rose-200",
      bg: "bg-rose-50",
      text: "text-rose-700",
      dot: "bg-rose-500",
      label: "Alto risco",
      desc: "Pode causar pane total. Se a tensão cair, PARE com segurança.",
    },
  }[level];

  return (
    <div className={`rounded-2xl ${map.bg} ring-1 ${map.ring} p-4`}>
      <div className="flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${map.dot}`} />
        <p className={`font-extrabold ${map.text}`}>{map.label}</p>
      </div>
      <p className="mt-1 text-sm text-slate-700">{map.desc}</p>
    </div>
  );
}

export default function LuzBateriaAlternadorCaminhaoPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-6 pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 mb-4">
        <Link href="/" className="hover:underline">
          Início
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-semibold">
          Luz da bateria / alternador
        </span>
      </nav>

      {/* HERO PREMIUM */}
      <section className="rounded-3xl border bg-white shadow-sm overflow-hidden">
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Luz da Bateria no Caminhão: alternador, carga e solução
              </h1>

              <p className="mt-3 text-lg text-slate-700">
                Se a luz da <strong>bateria</strong> acendeu no painel, o
                caminhão está avisando que o sistema{" "}
                <strong>não está carregando corretamente</strong>. Na prática:
                pode ser alternador, correia, cabos, bateria ou regulador.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/simbolos-painel"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-bold text-white hover:opacity-90 transition"
                >
                  Ver Símbolos do Painel
                </Link>

                <Link
                  href="/planos"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-900 hover:bg-slate-50 transition"
                >
                  Ver Planos
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Voltar
                </Link>
              </div>
            </div>

            {/* Card lado direito */}
            <div className="min-w-[260px] max-w-[360px] w-full">
              <div className="rounded-2xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] p-5 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center overflow-hidden">
                    <img
                      src="/simbolos/simbolo-36.jpg"
                      alt="Luz da bateria / alternador"
                      className="h-10 w-10 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-lg">Sistema elétrico</p>
                    <p className="text-white/90 text-sm">
                      Alternador, carga e bateria
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Ação</p>
                    <p className="font-bold">Checar</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Risco</p>
                    <p className="font-bold">Alto</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Prioridade</p>
                    <p className="font-bold">Alta</p>
                  </div>
                </div>
              </div>

              {/* Nível de risco */}
              <div className="mt-4 grid gap-3">
                <RiskBadge level="Baixo" />
                <RiskBadge level="Médio" />
                <RiskBadge level="Alto" />
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior premium */}
        <div className="border-t bg-slate-50 px-6 py-4">
          <p className="text-sm text-slate-700">
            ⚠️ Dica rápida: se a luz acendeu e o painel começou a{" "}
            <strong>apagar</strong> ou aparecerem falhas aleatórias, a tensão
            está caindo. Evite desligar o motor e procure um local seguro.
          </p>
        </div>
      </section>

      {/* Imagem grande (opção 2) */}
      <section className="mt-10">
        <div className="rounded-3xl border bg-white shadow-sm overflow-hidden">
          <div className="p-5 md:p-6 bg-slate-950">
            <div className="flex items-center gap-3 text-white">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src="/simbolos/simbolo-36.jpg"
                  alt="Símbolo da bateria no painel"
                  className="h-8 w-8 object-contain"
                  loading="lazy"
                />
              </div>
              <p className="font-extrabold">
                Luz da bateria (sistema de carga / alternador)
              </p>
            </div>
          </div>

          <div className="bg-black">
            <img
              src="/simbolos/simbolo-36.jpg"
              alt="Luz da bateria no painel do caminhão"
              className="w-full max-h-[520px] object-contain mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <article className="prose prose-slate max-w-none mt-10">
        <h2>✅ O que significa a luz da bateria acesa no caminhão?</h2>
        <p>
          Essa luz indica que o sistema de carga do caminhão{" "}
          <strong>não está carregando a bateria</strong> corretamente. Mesmo com
          o motor ligado, a bateria pode estar descarregando.
        </p>

        <h2>🚨 É perigoso rodar com a luz da bateria acesa?</h2>
        <p>
          Sim. Porque quando a bateria descarrega, o caminhão pode começar a
          falhar em:
        </p>
        <ul>
          <li>Injeção eletrônica</li>
          <li>Sensores do motor</li>
          <li>ABS / EBS</li>
          <li>Painel e módulos</li>
          <li>Partida (pode não ligar mais)</li>
        </ul>

        <h2>⚠️ Principais causas da luz da bateria no caminhão</h2>
        <ul>
          <li>Alternador com defeito</li>
          <li>Correia do alternador frouxa ou arrebentada</li>
          <li>Regulador de voltagem com falha</li>
          <li>Cabo de carga solto ou oxidado</li>
          <li>Terminal da bateria com mau contato</li>
          <li>Bateria fraca (no limite)</li>
          <li>Fusível ou relé do sistema de carga</li>
        </ul>

        <h2>🧠 O que fazer quando a luz da bateria acende?</h2>
        <ol>
          <li>
            <strong>Desligue consumos desnecessários:</strong> farol alto,
            som, geladeira, carregadores.
          </li>
          <li>
            <strong>Evite desligar o motor</strong> até chegar em local seguro.
          </li>
          <li>
            Se possível, <strong>meça a tensão</strong> (multímetro):
            <ul>
              <li>13.5V a 14.5V = carregando</li>
              <li>12.0V a 12.6V = não está carregando</li>
            </ul>
          </li>
          <li>
            Verifique <strong>correia do alternador</strong>.
          </li>
          <li>
            Procure mecânico/autoelétrico antes de virar pane total.
          </li>
        </ol>

        <h2>📌 Dica profissional</h2>
        <p>
          A maioria dos motoristas só percebe esse problema quando o caminhão já
          apagou no meio da estrada. Se a luz acendeu, trate como prioridade.
        </p>

        <h2>🚛 Quer aprender a interpretar TODOS os símbolos do painel?</h2>
        <p>Na <strong>OTIAdriver</strong> você aprende:</p>
        <ul>
          <li>O que cada luz significa</li>
          <li>Quando é falha leve ou grave</li>
          <li>O que fazer na prática</li>
          <li>Como evitar manutenção cara</li>
        </ul>

        <div className="mt-8 not-prose">
          <div className="rounded-2xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] p-6 text-white shadow-lg">
            <h3 className="text-2xl font-extrabold">
              🔥 Seja motorista operador de tecnologia
            </h3>
            <p className="mt-2 text-white/90">
              Acesse os conteúdos completos e evolua sua profissão.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link
                href="/planos"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-bold text-slate-900 hover:opacity-90 transition"
              >
                Ver Planos
              </Link>

              <Link
                href="/simbolos-painel"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 font-bold text-white hover:bg-white/10 transition"
              >
                Ver Símbolos do Painel
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 font-bold text-white hover:bg-white/10 transition"
              >
                Voltar para início
              </Link>
            </div>
          </div>
        </div>

        <h2 className="mt-10">🔎 Perguntas frequentes</h2>

        <h3>Se eu desligar e ligar o caminhão, some. Resolvi?</h3>
        <p>
          Não. Você apenas reiniciou o sistema. O problema continua e pode voltar
          a qualquer momento.
        </p>

        <h3>A luz acende e o caminhão ainda funciona. Posso seguir?</h3>
        <p>
          Pode seguir por pouco tempo, mas é questão de minutos/horas até a
          bateria descarregar. Não adie.
        </p>

        <h3>Isso pode dar falha no ABS/EBS?</h3>
        <p>
          Sim. Quando a tensão cai, os módulos começam a falhar e podem aparecer
          vários alertas no painel.
        </p>
      </article>

      {/* Rodapé */}
      <div className="mt-12 text-sm text-slate-500">
        Conteúdo educativo. Para diagnóstico técnico, utilize scanner e mecânico
        especializado.
      </div>
    </main>
  );
}
