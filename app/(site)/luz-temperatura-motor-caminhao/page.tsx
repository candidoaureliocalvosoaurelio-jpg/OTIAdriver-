// app/(site)/luz-temperatura-motor-caminhao/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Luz da Temperatura do Motor: o que significa e como evitar prejuízo | OTIAdriver",
  description:
    "Entenda o que significa a luz da temperatura do motor acesa no caminhão, causas comuns, riscos de superaquecimento e o que fazer para evitar prejuízo.",
};

function RiskBadge({ level }: { level: "Baixo" | "Médio" | "Alto" }) {
  const map = {
    Baixo: {
      ring: "ring-emerald-200",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
      label: "Baixo risco",
      desc: "Pode ser aviso inicial. Reduza carga e monitore.",
    },
    Médio: {
      ring: "ring-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-800",
      dot: "bg-amber-500",
      label: "Risco médio",
      desc: "Pode estar aquecendo de verdade. Pare e verifique.",
    },
    Alto: {
      ring: "ring-rose-200",
      bg: "bg-rose-50",
      text: "text-rose-700",
      dot: "bg-rose-500",
      label: "Alto risco",
      desc: "Superaquecimento. PARE imediatamente para evitar motor fundir.",
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

export default function LuzTemperaturaMotorCaminhaoPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-6 pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 mb-4">
        <Link href="/" className="hover:underline">
          Início
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-semibold">
          Luz da temperatura do motor
        </span>
      </nav>

      {/* HERO PREMIUM */}
      <section className="rounded-3xl border bg-white shadow-sm overflow-hidden">
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Luz da Temperatura do Motor: o que significa e como evitar
                prejuízo
              </h1>

              <p className="mt-3 text-lg text-slate-700">
                Se a luz da <strong>temperatura do motor</strong> acendeu, o
                caminhão está avisando que o motor está{" "}
                <strong>aquecendo acima do normal</strong>. Ignorar pode gerar
                prejuízo pesado: junta queimada, cabeçote empenado e até motor
                fundido.
              </p>

              {/* IMAGEM GRANDE (simbolo-35.jpg) */}
              <div className="mt-6 rounded-2xl border bg-slate-950 p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/simbolos/simbolo-35.jpg"
                      alt="Luz da temperatura do motor"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-bold text-white">
                    Temperatura do motor (superaquecimento)
                  </p>
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/simbolos/simbolo-35.jpg"
                    alt="Símbolo da temperatura do motor no painel do caminhão"
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
                      src="/simbolos/simbolo-35.jpg"
                      alt="Luz da temperatura do motor"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-lg">Motor aquecendo</p>
                    <p className="text-white/90 text-sm">
                      Arrefecimento, radiador e risco de dano
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
                    <p className="font-bold">Alto</p>
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
            ✅ Dica rápida: se a temperatura subiu e a luz acendeu,{" "}
            <strong>não continue puxando</strong>. Reduza, pare e deixe o motor
            estabilizar. Superaquecimento é um dos prejuízos mais caros.
          </p>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <article className="prose prose-slate max-w-none mt-10">
        <h2>✅ O que significa a luz da temperatura do motor acesa?</h2>
        <p>
          Essa luz indica que o sistema detectou{" "}
          <strong>temperatura acima do limite</strong>. Em caminhões modernos, o
          painel recebe dados de sensores e o módulo do motor (ECU) registra a
          falha.
        </p>

        <h2>🚨 É perigoso rodar com a luz da temperatura acesa?</h2>
        <p>
          Sim. Temperatura alta pode causar:
        </p>
        <ul>
          <li>Queima da junta do cabeçote</li>
          <li>Cabeçote empenado</li>
          <li>Trinca no cabeçote</li>
          <li>Perda de compressão</li>
          <li>Motor fundido (prejuízo máximo)</li>
        </ul>

        <h2>⚠️ Principais causas de superaquecimento no caminhão</h2>
        <ul>
          <li>Nível baixo de água/aditivo no reservatório</li>
          <li>Vazamento em mangueira, radiador ou bomba</li>
          <li>Ventoinha não armando (viscoso, sensor ou módulo)</li>
          <li>Radiador sujo (externo) ou entupido (interno)</li>
          <li>Válvula termostática travada</li>
          <li>Bomba d’água com defeito</li>
          <li>Tampa do reservatório sem pressão</li>
          <li>Uso de água pura (sem aditivo) gerando ferrugem</li>
        </ul>

        <h2>🧠 O que fazer na hora (passo a passo)</h2>
        <ol>
          <li>
            <strong>Reduza imediatamente a carga do motor</strong> (tire o pé).
          </li>
          <li>
            <strong>Desligue o ar-condicionado</strong> para aliviar o sistema.
          </li>
          <li>
            <strong>Pare em local seguro</strong>.
          </li>
          <li>
            <strong>Não desligue na hora</strong> se estiver fervendo (deixe
            estabilizar 1 a 3 minutos).
          </li>
          <li>
            <strong>NUNCA abra a tampa quente</strong> (risco de queimadura).
          </li>
          <li>
            Depois de esfriar: verifique nível, vazamento e ventoinha.
          </li>
        </ol>

        <h2>🚫 Erros que fazem o prejuízo ficar gigante</h2>
        <ul>
          <li>Continuar puxando “só mais um pouco”</li>
          <li>Abrir tampa quente e se queimar</li>
          <li>Completar só com água (sem aditivo)</li>
          <li>Rodar com radiador sujo por meses</li>
        </ul>

        <h2>🚛 Quer aprender a interpretar TODOS os alertas do painel?</h2>
        <p>
          Na <strong>OTIAdriver</strong> você aprende:
        </p>
        <ul>
          <li>O que cada luz significa</li>
          <li>O que é falha leve ou grave</li>
          <li>O que fazer na prática</li>
          <li>Como evitar manutenção cara</li>
        </ul>

        <div className="mt-8 not-prose">
          <div className="rounded-2xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] p-6 text-white shadow-lg">
            <h3 className="text-2xl font-extrabold">
              🔥 Seja motorista operador de tecnologia
            </h3>
            <p className="mt-2 text-white/90">
              Conteúdo completo para você dominar painel, alertas e condução
              moderna.
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

        <h3>A luz acendeu mas a temperatura parece normal. Pode ser sensor?</h3>
        <p>
          Sim. Pode ser falha intermitente no sensor, chicote ou conector. Mas
          trate como sério até confirmar.
        </p>

        <h3>Posso completar água e seguir?</h3>
        <p>
          Se estiver frio e você confirmar vazamento leve, pode ser emergencial.
          Mas o ideal é usar <strong>aditivo correto</strong> e fazer reparo
          antes de viagem longa.
        </p>

        <h3>O que mais causa superaquecimento em caminhão?</h3>
        <p>
          Radiador sujo por fora, ventoinha que não arma e vazamento pequeno
          ignorado.
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
