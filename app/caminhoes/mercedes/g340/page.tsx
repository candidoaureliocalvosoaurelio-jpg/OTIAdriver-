// app/caminhoes/mercedes/g340/page.tsx
import Link from "next/link";

export default function MercedesG340Page() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-20">
      {/* HERO */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#003A8F] mb-3">
              Transmissão Manual • Mercedes-Benz
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Caixa de Mudanças Mercedes G340
              <span className="block text-[#003A8F] text-xl md:text-2xl mt-1">
                Transmissão manual de 12 marchas — guia técnico OTIAdriver
              </span>
            </h1>

            <p className="text-slate-700 leading-relaxed max-w-2xl">
              A transmissão Mercedes-Benz G340 é uma caixa manual robusta de
              12 marchas, amplamente utilizada em aplicações médias e pesadas.
              Este material apresenta funcionamento, uso correto, integração
              com freio motor, manutenção preventiva e boas práticas de condução.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/caixa-mercedes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#003A8F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#002F73] transition"
              >
                Baixar apostila Mercedes G340 (PDF)
              </a>
            </div>
          </div>

          {/* CARD RESUMO */}
          <div className="rounded-2xl border border-slate-200 bg-[#0B1C2D] text-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Resumo técnico</h2>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• Transmissão manual sincronizada</li>
              <li>• 12 marchas à frente + ré</li>
              <li>• Alta robustez para uso severo</li>
              <li>• Integração com freio motor</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Dica: trocas corretas aumentam a vida útil da embreagem e da caixa.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-4 pt-10 space-y-6">
        {/* O QUE É */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            O que é a caixa Mercedes G340?
          </h2>

          <p className="mt-3 text-slate-700 leading-relaxed">
            A Mercedes-Benz G340 é uma transmissão manual de múltiplas marchas,
            projetada para suportar elevados níveis de torque e longos ciclos
            operacionais. Seu escalonamento permite melhor aproveitamento do
            motor, tanto em rodovia quanto em aplicações mistas.
          </p>
        </section>

        {/* FUNCIONAMENTO */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Funcionamento e escalonamento
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Marchas sincronizadas
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Permitem trocas suaves, reduzindo impacto mecânico e desgaste.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Amplo escalonamento
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Mantém o motor sempre na faixa ideal de torque.
              </p>
            </div>
          </div>
        </section>

        {/* USO CORRETO */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Uso correto pelo motorista
          </h2>

          <ul className="mt-3 space-y-2 text-slate-700 text-sm">
            <li>• Utilizar a marcha adequada ao peso e inclinação</li>
            <li>• Evitar trocas bruscas em alta rotação</li>
            <li>• Não apoiar o pé no pedal da embreagem</li>
            <li>• Usar o freio motor em descidas longas</li>
          </ul>
        </section>

        {/* FREIO MOTOR */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Freio motor e segurança
          </h2>

          <p className="mt-3 text-slate-700 leading-relaxed">
            A correta seleção de marchas potencializa o freio motor,
            reduzindo o uso do freio de serviço e aumentando a segurança
            em descidas prolongadas.
          </p>
        </section>

        {/* MANUTENÇÃO */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Manutenção preventiva
          </h2>

          <ul className="mt-3 space-y-2 text-slate-700 text-sm">
            <li>• Troca de óleo no intervalo recomendado</li>
            <li>• Verificação de vazamentos</li>
            <li>• Inspeção do conjunto de embreagem</li>
            <li>• Avaliação periódica do sincronizador</li>
          </ul>
        </section>

        {/* CTA FINAL */}
        <section className="mt-14 rounded-3xl bg-[#0B1C2D] p-8 md:p-10 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Acesse o guia técnico completo da Mercedes G340
            </h3>

            <p className="mt-2 max-w-2xl text-slate-200">
              Material completo para treinamento, operação segura,
              preservação da transmissão e melhor desempenho do veículo.
            </p>

            <div className="mt-6">
              <a
                href="/fichas-tecnicas/caixa-mercedes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl
                           bg-gradient-to-r from-[#003A8F] to-[#001F4D]
                           px-12 py-4 text-base font-extrabold text-white
                           shadow-lg shadow-[#003A8F]/30
                           hover:from-[#002F73] hover:to-[#001738]
                           hover:shadow-xl transition-all duration-200"
              >
                Baixar apostila Mercedes G340 (PDF)
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
