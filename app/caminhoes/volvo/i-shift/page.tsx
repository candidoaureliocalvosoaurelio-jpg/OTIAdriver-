import Link from "next/link";

export default function IShiftPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#005B9A] mb-3">
              Transmissão Automatizada • Volvo
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Caixa de Câmbio I-Shift
              <span className="block text-[#005B9A] text-xl md:text-2xl mt-1">
                Guia técnico completo OTIAdriver
              </span>
            </h1>

            <p className="text-slate-700 leading-relaxed max-w-2xl">
              Nesta página você encontra uma explicação completa sobre o sistema
              I-Shift: funcionamento, modos de operação, símbolos do painel,
              integração com freio motor/retarder, manutenção preventiva e boas
              práticas para condução segura e econômica.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/caixa-de-cambio-i-shift-volvo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#005B9A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#004B80] transition"
              >
                Baixar apostila I-Shift (PDF)
              </a>
            </div>
          </div>

          {/* CARD RESUMO */}
          <div className="rounded-2xl border border-slate-200 bg-[#001A33] text-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Resumo rápido</h2>
            <ul className="space-y-2 text-sm text-slate-100">
              <li>• Trocas automáticas com base em carga, torque e inclinação</li>
              <li>• Menor fadiga do motorista e maior proteção do trem de força</li>
              <li>• Modos: A, Manual, Economy, Performance e Manobra</li>
              <li>• Integração com freio motor e retarder (quando equipado)</li>
            </ul>
            <p className="mt-4 text-xs text-slate-300">
              Dica: em descidas longas, use o retarder/freio motor como freio principal e
              deixe o freio de serviço para correções.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        {/* BLOCO: O QUE É */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">O que é a I-Shift?</h2>

          <p className="mt-3 text-slate-700 leading-relaxed">
            A I-Shift é a transmissão automatizada da Volvo Trucks. Ela combina uma base
            mecânica robusta com gerenciamento eletrônico avançado para automatizar a
            embreagem e as trocas de marcha, entregando eficiência, conforto e proteção
            do conjunto motriz em diferentes perfis de operação.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Eficiência</p>
              <p className="mt-1 text-sm text-slate-700">
                Estratégias de troca priorizam consumo e desempenho conforme carga e relevo.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Conforto</p>
              <p className="mt-1 text-sm text-slate-700">
                Reduz esforço do motorista e melhora a consistência de condução.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Proteção</p>
              <p className="mt-1 text-sm text-slate-700">
                Evita engates inadequados, reduz desgaste e aumenta a durabilidade.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCO: COMO FUNCIONA */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Como o sistema funciona</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                O sistema analisa em tempo real
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• carga/peso e resistência ao avanço</li>
                <li>• inclinação da via</li>
                <li>• rotação e torque do motor</li>
                <li>• velocidade do veículo</li>
                <li>• padrão de condução</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                O sistema decide automaticamente
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• qual marcha selecionar</li>
                <li>• quando trocar</li>
                <li>• como atuar na embreagem</li>
                <li>• quando reduzir para manter desempenho/frenagem</li>
                <li>• quando proteger o conjunto</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-5">
            <p className="text-sm font-semibold text-[#005B9A]">Dica OTIAdriver</p>
            <p className="mt-1 text-sm text-slate-700">
              Evite oscilar o acelerador durante as trocas. Com o pedal estável, a troca tende
              a ser mais suave e com menor desgaste.
            </p>
          </div>
        </section>

        {/* BLOCO: MODOS */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Modos de operação</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              {
                t: "Automático (A)",
                d: "O sistema escolhe as marchas. Melhor opção para uso diário e economia.",
              },
              {
                t: "Manual",
                d: "O motorista solicita a marcha, com proteção eletrônica para evitar engates prejudiciais.",
              },
              {
                t: "Economy",
                d: "Trocas mais cedo e rotações mais baixas para reduzir consumo.",
              },
              {
                t: "Performance",
                d: "Trocas em rotações mais altas para melhor resposta em subidas e ultrapassagens.",
              },
              {
                t: "Manobra",
                d: "Controle fino em baixa velocidade para pátios, docas e rampas.",
              },
              {
                t: "Proteção",
                d: "Em condições anormais, pode limitar estratégias de troca para evitar danos.",
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

        {/* BLOCO: SÍMBOLOS */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Símbolos do painel relacionados à transmissão
          </h2>

          <p className="mt-3 text-slate-700 leading-relaxed">
            Atenção aos avisos do painel. Eles indicam falhas ou condições de operação
            que exigem cuidado para evitar danos e paradas não programadas.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Alerta do sistema de transmissão (amarelo)
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Indica anomalia detectada no sistema. Reduza esforço, evite carga elevada em subida
                e procure diagnóstico em oficina especializada.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Temperatura elevada / proteção (amarelo)
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Indica aquecimento ou atuação de estratégia de proteção. Ajuste a condução e, se necessário,
                faça pausa para estabilização e verificação.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCO: FREIO MOTOR / RETARDER */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Freio motor, retarder e integração com a I-Shift
          </h2>

          <p className="mt-3 text-slate-700 leading-relaxed">
            O freio motor e o retarder (quando equipado) atuam como freios auxiliares, reduzindo a velocidade do veículo
            com menor uso do freio de serviço. A I-Shift pode reduzir automaticamente para manter a faixa ideal de frenagem
            e controle em descidas.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Uso recomendado</p>
              <p className="mt-1 text-sm text-slate-700">
                Antecipe a descida: selecione estratégia de frenagem e deixe o sistema manter rotação/marcha adequadas.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Controle e segurança</p>
              <p className="mt-1 text-sm text-slate-700">
                Menos aquecimento dos freios e maior estabilidade, especialmente em longas declividades.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">Atenção</p>
            <p className="mt-1 text-sm text-slate-700">
              Em descidas longas, priorize freio motor/retarder e use o freio de serviço apenas para correções.
              Isso reduz risco de fading e superaquecimento.
            </p>
          </div>
        </section>

        {/* BLOCO: MANUTENÇÃO E FALHAS */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Manutenção preventiva e falhas comuns
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">Checklist preventivo</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• óleo correto e troca no intervalo recomendado</li>
                <li>• verificação de vazamentos e conexões</li>
                <li>• inspeção do sistema de ar (quando aplicável)</li>
                <li>• atualização/diagnóstico eletrônico quando necessário</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">Sintomas frequentes</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• trancos nas trocas</li>
                <li>• demora ou falha para engatar</li>
                <li>• mensagens/alertas no painel</li>
                <li>• aquecimento e modo de proteção</li>
              </ul>
            </div>
          </div>
        </section>

        {/* BLOCO FINAL – Fichas Técnicas (cards padronizados, data-driven) */}
        <section id="ficha-tecnica" className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/fichas-tecnicas/volvo-fh-6x4t.pdf",
                titulo: "Ficha técnica oficial – Volvo FH 6x4T (PDF)",
                descricao:
                  "Ficha técnica oficial do Volvo FH 6x4T com dados completos de motor, transmissão, eixos, capacidades e dimensões.",
                cta: "Abrir ficha técnica Volvo FH 6x4T (PDF)",
              },
              {
                href: "/fichas-tecnicas/display-instrumentos-volvo.pdf",
                titulo: "Display de instrumentos Volvo (PDF)",
                descricao:
                  "Guia oficial do display de instrumentos: telas, informações exibidas e leitura correta durante a operação.",
                cta: "Abrir guia do display (PDF)",
              },
              {
                href: "/fichas-tecnicas/painel-instrumentos-volvo.pdf",
                titulo: "Painel de instrumentos Volvo (PDF)",
                descricao:
                  "Material de referência do painel de instrumentos: funções, indicadores e orientações de uso.",
                cta: "Abrir guia do painel (PDF)",
              },
              {
                href: "/fichas-tecnicas/sistema-monitoramento-pneu-volvo.pdf",
                titulo: "Sistema de monitoramento de pneus Volvo (PDF)",
                descricao:
                  "Guia do sistema de monitoramento de pneus: alertas, calibração e boas práticas de operação.",
                cta: "Abrir guia de pneus (PDF)",
              },
              {
                href: "/fichas-tecnicas/caixa-mudancas-volvo.pdf",
                titulo: "Caixa de mudanças Volvo (PDF)",
                descricao:
                  "Material técnico sobre a transmissão/caixa de mudanças: modos, recomendações e operação eficiente.",
                cta: "Abrir guia da caixa (PDF)",
              },
              {
                href: "/fichas-tecnicas/simbolos-volvo.pdf",
                titulo: "Símbolos Volvo (PDF)",
                descricao:
                  "Guia oficial de símbolos e luzes do painel Volvo para interpretação rápida e ação correta.",
                cta: "Abrir guia de símbolos (PDF)",
              },
            ].map((item) => (
              <div
                key={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[240px]"
              >
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.titulo}
                </h2>

                <p className="text-sm text-slate-700 mb-4">{item.descricao}</p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center rounded-lg bg-[#005B9A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#004B80] transition"
                >
                  {item.cta ?? "Abrir ficha técnica (PDF)"}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL – Destaque Máximo (padrão SUPER, Volvo) */}
        <section className="mt-14 rounded-3xl bg-[#001A33] p-8 md:p-10 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Quer se aprofundar na transmissão I-Shift?
            </h3>
            <p className="mt-2 max-w-2xl text-slate-200">
              Baixe a apostila completa e utilize esta página como referência rápida para operação,
              interpretação de alertas e boas práticas de condução.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/caixa-de-cambio-i-shift-volvo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl
                           bg-gradient-to-r from-[#005B9A] to-[#003057]
                           px-12 py-4 text-base font-extrabold text-white
                           shadow-lg shadow-[#005B9A]/30
                           hover:from-[#004B80] hover:to-[#00284A]
                           hover:shadow-xl hover:shadow-[#005B9A]/40
                           focus:outline-none focus:ring-4 focus:ring-[#8FC6FF]
                           transition-all duration-200"
              >
                Baixar apostila I-Shift (PDF)
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl
                           border border-slate-500 bg-transparent
                           px-10 py-4 text-base font-extrabold text-white
                           hover:bg-white/10 transition"
              >
                Ir para a página inicial
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
