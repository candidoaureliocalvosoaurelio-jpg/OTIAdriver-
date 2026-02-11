// app/(site)/luz-freio-caminhao/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Luz do Freio no Painel do Caminhão: o que pode ser e o que fazer | OTIAdriver",
  description:
    "Entenda o que significa a luz do freio acesa no caminhão (freio de estacionamento, baixo fluido, falha no sistema, EBS/ABS), riscos e o que fazer com segurança.",
};

function RiskBadge({ level }: { level: "Baixo" | "Médio" | "Alto" }) {
  const map = {
    Baixo: {
      ring: "ring-emerald-200",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
      label: "Baixo risco",
      desc: "Pode ser freio de estacionamento acionado ou aviso simples.",
    },
    Médio: {
      ring: "ring-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-800",
      dot: "bg-amber-500",
      label: "Risco médio",
      desc: "Pode indicar baixo fluido/ajuste. Evite seguir sem checar.",
    },
    Alto: {
      ring: "ring-rose-200",
      bg: "bg-rose-50",
      text: "text-rose-700",
      dot: "bg-rose-500",
      label: "Alto risco",
      desc: "Possível falha de freio/EBS. Pare em local seguro.",
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

export default function LuzFreioCaminhaoPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-6 pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 mb-4">
        <Link href="/" className="hover:underline">
          Início
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-semibold">
          Luz do freio no caminhão
        </span>
      </nav>

      {/* HERO PREMIUM */}
      <section className="rounded-3xl border bg-white shadow-sm overflow-hidden">
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Luz do Freio no Painel do Caminhão: o que pode ser e o que fazer
              </h1>

              <p className="mt-3 text-lg text-slate-700">
                A <strong>luz do freio</strong> pode indicar desde{" "}
                <strong>freio de estacionamento</strong> acionado até{" "}
                <strong>baixo fluido</strong> ou{" "}
                <strong>falha no sistema de frenagem (EBS/ABS)</strong>. Freio é
                segurança: trate como prioridade.
              </p>

              {/* IMAGEM GRANDE (simbolos/simbolo-24.jpg) */}
              <div className="mt-6 rounded-2xl border bg-slate-950 p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/simbolos/simbolo-24.jpg"
                      alt="Luz do freio"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-bold text-white">
                    Luz do freio (sistema de frenagem)
                  </p>
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/simbolos/simbolo-24.jpg"
                    alt="Símbolo da luz do freio no painel do caminhão"
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
                      src="/simbolos/simbolo-24.jpg"
                      alt="Luz do freio"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-lg">Sistema de freio</p>
                    <p className="text-white/90 text-sm">
                      Segurança, fluido e EBS/ABS
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
            ✅ Dica rápida: se a luz do freio acender{" "}
            <strong>junto com perda de eficiência</strong>, pedal estranho ou
            aviso EBS/ABS,{" "}
            <strong>pare em local seguro e não force viagem</strong>.
          </p>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <article className="prose prose-slate max-w-none mt-10">
        <h2>✅ O que significa a luz do freio acesa?</h2>
        <p>
          No caminhão, a luz do freio pode indicar várias situações. As mais
          comuns:
        </p>
        <ul>
          <li>
            <strong>Freio de estacionamento</strong> acionado (muito comum)
          </li>
          <li>
            <strong>Nível baixo de fluido</strong> (em sistemas hidráulicos)
          </li>
          <li>
            <strong>Desgaste/ajuste</strong> (lona/pastilha, folga)
          </li>
          <li>
            <strong>Falha no sistema</strong> (EBS/ABS, sensores, válvulas)
          </li>
          <li>
            <strong>Baixa pressão de ar</strong> (em sistemas pneumáticos, pode
            vir com outros avisos)
          </li>
        </ul>

        <h2>🚨 Quando é perigoso rodar?</h2>
        <p>
          É perigoso quando a luz vem com sintomas ou outros alertas:
        </p>
        <ul>
          <li>Pedal “borrachudo”, curso longo ou freio fraco</li>
          <li>Alerta de <strong>EBS</strong> ou <strong>ABS</strong> junto</li>
          <li>Baixa pressão de ar / aviso sonoro</li>
          <li>Veículo puxando para um lado ao frear</li>
          <li>Aquecimento/cheiro forte após frenagens</li>
        </ul>

        <h2>🧠 O que fazer quando a luz do freio acende?</h2>
        <ol>
          <li>
            <strong>Confirme o freio de estacionamento</strong> (alavanca/valva
            e indicação no painel).
          </li>
          <li>
            <strong>Observe se há mudança na frenagem</strong> (eficiência,
            pedal, ruídos).
          </li>
          <li>
            Se for sistema pneumático:{" "}
            <strong>verifique a pressão de ar</strong> e se há vazamentos.
          </li>
          <li>
            Se houver alerta EBS/ABS ou frenagem ruim:{" "}
            <strong>pare em local seguro</strong>.
          </li>
          <li>
            Se possível, <strong>faça diagnóstico com scanner</strong> (EBS/ABS)
            e inspeção visual.
          </li>
        </ol>

        <h2>⚠️ Causas comuns (rápidas e diretas)</h2>
        <ul>
          <li>Freio de estacionamento acionado/defeito no sensor</li>
          <li>Baixa pressão de ar por vazamento</li>
          <li>Desgaste de lona/pastilha ou regulagem</li>
          <li>Sensor de ABS/EBS sujo ou com falha</li>
          <li>Falha em válvula moduladora (EBS)</li>
          <li>Problema em chicote/conector (muito comum)</li>
        </ul>

        <h2>🚛 Quer dominar os alertas do painel?</h2>
        <p>
          Na <strong>OTIAdriver</strong> você aprende:
        </p>
        <ul>
          <li>O que cada símbolo significa</li>
          <li>Quando é falha leve ou grave</li>
          <li>Como agir sem causar prejuízo</li>
          <li>Como reduzir manutenção e aumentar segurança</li>
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

        <h3>A luz do freio acende e apaga. É normal?</h3>
        <p>
          Não é o ideal. Pode ser sensor/contato, nível no limite ou falha
          intermitente no EBS/ABS. Vale diagnosticar.
        </p>

        <h3>Posso completar fluido e seguir viagem?</h3>
        <p>
          Se for hidráulico e o nível baixou, há chance de{" "}
          <strong>vazamento</strong>. Complete só para emergencial e procure
          manutenção. Se for pneumático, o foco é pressão de ar/vazamento.
        </p>

        <h3>Qual a diferença de luz do freio e ABS?</h3>
        <p>
          A luz do freio é geral do sistema (estacionamento/pressão/fluido). ABS
          indica falha no sistema antitravamento (sensor, chicote, módulo).
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
