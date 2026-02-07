// app/caminhoes/daf/caixa-transmissao-xf/page.tsx
import Link from "next/link";

export default function DafXfTransmissionPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-20">
      {/* HERO */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E10600] mb-3">
              Transmissão Automatizada • DAF
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Caixa de Transmissão DAF XF
              <span className="block text-[#E10600] text-xl md:text-2xl mt-1">
                Guia técnico completo OTIAdriver
              </span>
            </h1>

            <p className="text-slate-700 leading-relaxed max-w-2xl">
              Nesta página você encontra uma explicação completa sobre a transmissão
              utilizada na linha DAF XF: funcionamento, modos de operação,
              integração com freio motor e retarder, símbolos do painel,
              manutenção preventiva e boas práticas de condução para máxima
              eficiência e durabilidade.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/caixa-transmissao-daf-xf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#E10600] px-6 py-3 text-sm font-semibold text-white hover:bg-[#C20500] transition"
              >
                Baixar apostila transmissão DAF XF (PDF)
              </a>
            </div>
          </div>

          {/* CARD RESUMO */}
          <div className="rounded-2xl border border-slate-200 bg-[#1A1A1A] text-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Resumo rápido</h2>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• Transmissão automatizada ZF TraXon (12 ou 16 marchas)</li>
              <li>• Estratégias inteligentes conforme carga e relevo</li>
              <li>• Modos: Automático, Manual, Eco, Power e Manobra</li>
              <li>• Integração com freio motor MX Engine Brake e retarder</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Dica: em subidas longas, mantenha aceleração estável para trocas mais suaves
              e proteção do conjunto.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        {/* O QUE É */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            O que é a transmissão do DAF XF?
          </h2>

          <p className="mt-3 text-slate-700 leading-relaxed">
            A linha DAF XF utiliza transmissões automatizadas de última geração,
            principalmente a <strong>ZF TraXon</strong>, combinando uma base mecânica
            robusta com gerenciamento eletrônico avançado. O sistema automatiza
            embreagem e trocas de marcha, garantindo conforto, economia de combustível
            e proteção do trem de força.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Eficiência</p>
              <p className="mt-1 text-sm text-slate-700">
                Trocas otimizadas para manter o motor na faixa ideal de torque.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Conforto</p>
              <p className="mt-1 text-sm text-slate-700">
                Condução suave com redução de fadiga em longas jornadas.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Durabilidade</p>
              <p className="mt-1 text-sm text-slate-700">
                Proteções eletrônicas evitam engates prejudiciais e sobrecargas.
              </p>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Como o sistema funciona
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                O sistema monitora
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• peso da carga e resistência ao avanço</li>
                <li>• inclinação da via</li>
                <li>• rotação e torque do motor</li>
                <li>• velocidade do veículo</li>
                <li>• estilo de condução</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                O sistema decide
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• melhor marcha para cada situação</li>
                <li>• momento exato da troca</li>
                <li>• uso do freio motor e retarder</li>
                <li>• reduções preventivas em descidas</li>
                <li>• estratégias de proteção</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-red-50 border border-red-100 p-5">
            <p className="text-sm font-semibold text-[#E10600]">Dica OTIAdriver</p>
            <p className="mt-1 text-sm text-slate-700">
              Em tráfego urbano pesado, utilize o modo automático e evite trocas manuais
              desnecessárias para reduzir desgaste da embreagem.
            </p>
          </div>
        </section>

        {/* MODOS */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Modos de operação
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              {
                t: "Automático",
                d: "O sistema gerencia todas as trocas. Ideal para uso diário.",
              },
              {
                t: "Manual",
                d: "Motorista solicita marchas, com proteção eletrônica ativa.",
              },
              {
                t: "Eco",
                d: "Trocas antecipadas e rotações mais baixas para economia.",
              },
              {
                t: "Power",
                d: "Trocas em rotações mais altas para melhor desempenho.",
              },
              {
                t: "Manobra",
                d: "Controle preciso em baixas velocidades e rampas.",
              },
              {
                t: "Proteção",
                d: "Limita estratégias em condições anormais para evitar danos.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-sm font-semibold text-slate-900">{item.t}</p>
                <p className="mt-1 text-sm text-slate-700">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL – padrão OTIAdriver */}
        <section className="mt-14 rounded-3xl bg-[#1A1A1A] p-8 md:p-10 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Acesse o guia técnico completo da transmissão DAF XF
            </h3>

            <p className="mt-2 max-w-2xl text-slate-300">
              Página exclusiva com funcionamento detalhado, modos de operação,
              integração com freio motor e boas práticas de condução para
              máxima eficiência e segurança operacional.
            </p>

            <div className="mt-6">
              <a
                href="/fichas-tecnicas/caixa-transmissao-daf-xf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl
                           bg-gradient-to-r from-[#E10600] to-[#8B0000]
                           px-12 py-4 text-base font-extrabold text-white
                           shadow-lg shadow-red-900/30
                           hover:from-[#C20500] hover:to-[#700000]
                           transition-all duration-200"
              >
                Baixar apostila completa DAF XF (PDF)
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
