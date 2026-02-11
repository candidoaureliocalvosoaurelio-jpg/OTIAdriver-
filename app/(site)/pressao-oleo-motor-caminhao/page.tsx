// app/(site)/pressao-oleo-motor-caminhao/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Luz da Pressão do Óleo: perigo real e o que fazer na hora | OTIAdriver",
  description:
    "Entenda o que significa a luz da pressão do óleo acesa no caminhão, causas comuns, riscos de dano imediato e o que fazer na hora para evitar motor fundir.",
};

function RiskBadge({ level }: { level: "Baixo" | "Médio" | "Alto" }) {
  const map = {
    Baixo: {
      ring: "ring-emerald-200",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
      label: "Baixo risco",
      desc: "Raro nesse alerta. Pode ser sensor, mas trate como sério.",
    },
    Médio: {
      ring: "ring-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-800",
      dot: "bg-amber-500",
      label: "Risco médio",
      desc: "Pode ser nível baixo ou filtro. Pare e verifique imediatamente.",
    },
    Alto: {
      ring: "ring-rose-200",
      bg: "bg-rose-50",
      text: "text-rose-700",
      dot: "bg-rose-500",
      label: "Alto risco",
      desc: "Perigo real: sem pressão de óleo o motor pode fundir em minutos.",
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

export default function PressaoOleoMotorCaminhaoPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-6 pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 mb-4">
        <Link href="/" className="hover:underline">
          Início
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-semibold">
          Pressão do óleo do motor
        </span>
      </nav>

      {/* HERO PREMIUM */}
      <section className="rounded-3xl border bg-white shadow-sm overflow-hidden">
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Luz da Pressão do Óleo: perigo real e o que fazer na hora
              </h1>

              <p className="mt-3 text-lg text-slate-700">
                Se a luz da <strong>pressão do óleo</strong> acendeu no painel,
                trate como <strong>ALERTA MÁXIMO</strong>. Sem pressão, o motor
                fica sem lubrificação e pode{" "}
                <strong>fundir em poucos minutos</strong>.
              </p>

              {/* IMAGEM GRANDE (simbolo-37.jpg) */}
              <div className="mt-6 rounded-2xl border bg-slate-950 p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/simbolos/simbolo-37.jpg"
                      alt="Luz da pressão do óleo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-bold text-white">
                    Pressão do óleo (lubrificação do motor)
                  </p>
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/simbolos/simbolo-37.jpg"
                    alt="Símbolo da pressão do óleo no painel do caminhão"
                    width={720}
                    height={720}
                    className="max-w-full h-auto rounded-xl"
                    priority
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
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

            {/* Card premium */}
            <div className="min-w-[260px] max-w-[360px] w-full">
              <div className="rounded-2xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] p-5 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/simbolos/simbolo-37.jpg"
                      alt="Luz da pressão do óleo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-lg">Óleo do motor</p>
                    <p className="text-white/90 text-sm">
                      Lubrificação e proteção interna
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Ação</p>
                    <p className="font-bold">Parar</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Risco</p>
                    <p className="font-bold">Altíssimo</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/80">Prioridade</p>
                    <p className="font-bold">Máxima</p>
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
            ✅ Dica rápida: luz de óleo acendeu?{" "}
            <strong>Reduza e pare imediatamente</strong>. Não “testa mais um
            pouco”. Sem pressão de óleo, o prejuízo é certo.
          </p>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <article className="prose prose-slate max-w-none mt-10">
        <h2>✅ O que significa a luz da pressão do óleo acesa?</h2>
        <p>
          Essa luz indica que o sistema detectou{" "}
          <strong>pressão abaixo do mínimo</strong> no circuito de lubrificação.
          Sem pressão, o óleo não circula direito e peças internas trabalham com
          atrito alto.
        </p>

        <h2>🚨 O que fazer na hora (passo a passo)</h2>
        <ol>
          <li>
            <strong>Tire o pé e reduza carga do motor imediatamente.</strong>
          </li>
          <li>
            <strong>Pare em local seguro o quanto antes.</strong>
          </li>
          <li>
            <strong>Desligue o motor.</strong> Não mantenha em marcha lenta.
          </li>
          <li>
            Aguarde alguns minutos e confira o{" "}
            <strong>nível de óleo na vareta</strong>.
          </li>
          <li>
            Verifique vazamentos embaixo do caminhão (cárter, filtro, mangueiras).
          </li>
          <li>
            Se o nível estiver ok e a luz continuar →{" "}
            <strong>não rode</strong>. Pode ser bomba/sensor/entupimento.
          </li>
        </ol>

        <h2>⚠️ Principais causas</h2>
        <ul>
          <li><strong>Nível de óleo baixo</strong> (vazamento ou consumo)</li>
          <li><strong>Filtro entupido</strong> ou troca atrasada</li>
          <li><strong>Bomba de óleo</strong> com defeito</li>
          <li><strong>Válvula reguladora</strong> travada</li>
          <li><strong>Óleo errado</strong> (viscosidade fora do recomendado)</li>
          <li><strong>Sensor de pressão</strong> com falha (ou chicote)</li>
          <li><strong>Entupimento</strong> (borra/lodo por manutenção ruim)</li>
        </ul>

        <h2>🚫 Erros que viram prejuízo gigante</h2>
        <ul>
          <li>Ignorar e “seguir mais um pouco”</li>
          <li>Completar óleo sem saber o motivo da queda</li>
          <li>Rodar com óleo velho e filtro saturado</li>
          <li>Usar óleo fora da especificação</li>
        </ul>

        <h2>🧠 Dica profissional</h2>
        <p>
          Caminhão moderno registra falhas. Mesmo que a luz apague, o erro pode
          estar gravado. O motorista inteligente resolve cedo para evitar motor
          abrir.
        </p>

        <h2>🚛 Quer aprender a interpretar TODOS os alertas do painel?</h2>
        <p>
          Na <strong>OTIAdriver</strong> você aprende:
        </p>
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
              Conteúdo completo para você dominar painel, alertas e condução moderna.
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
            </div>
          </div>
        </div>

        <h2 className="mt-10">🔎 Perguntas frequentes</h2>

        <h3>A luz de óleo acendeu e apagou. Posso seguir?</h3>
        <p>
          Pode ser sensor, mas também pode ser queda real de pressão em momentos
          específicos (subida forte, curva, óleo baixo). O ideal é checar nível
          e diagnosticar.
        </p>

        <h3>Completei óleo e a luz continua acesa. O que pode ser?</h3>
        <p>
          Pode ser bomba, válvula, filtro entupido, sensor ou entupimento no
          circuito. Nessa situação, <strong>não rode</strong>.
        </p>

        <h3>Óleo errado pode acender luz de pressão?</h3>
        <p>
          Sim. Viscosidade fora do recomendado e óleo degradado mudam pressão e
          lubrificação.
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
