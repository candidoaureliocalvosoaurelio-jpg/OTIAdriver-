// app/caminhoes/scania/opticruise/page.tsx
import Link from "next/link";

export default function OpticruisePage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
              Transmissão Automatizada • Scania
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Caixa de Câmbio Opticruise
              <span className="block text-sky-600 text-xl md:text-2xl mt-1">
                Guia técnico completo OTIAdriver
              </span>
            </h1>

            <p className="text-slate-700 leading-relaxed max-w-2xl">
              Nesta página você encontra uma explicação completa sobre o sistema
              Opticruise: funcionamento, modos de operação, símbolos do painel,
              freio motor, manutenção preventiva e boas práticas para condução segura
              e econômica.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/caixa-de-cambio-opticruiser-scania.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Baixar apostila Opticruise (PDF)
              </a>
            </div>
          </div>

          {/* CARD RESUMO */}
          <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Resumo rápido</h2>
            <ul className="space-y-2 text-sm text-slate-100">
              <li>• Trocas automáticas com base em carga, rotação e inclinação</li>
              <li>• Menor fadiga do motorista e maior proteção mecânica</li>
              <li>• Modos: A, M, Economy, Power e Manobra</li>
              <li>• Integração com freio motor e sistemas auxiliares</li>
            </ul>
            <p className="mt-4 text-xs text-slate-300">
              Dica: em descidas, o freio motor trabalha melhor em rotações mais altas.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        {/* BLOCO: O QUE É */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            O que é o Opticruise?
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            O Opticruise é o sistema de transmissão automatizada da Scania. Ele
            utiliza uma base de caixa mecânica robusta com controle eletrônico e
            atuadores eletropneumáticos, automatizando a embreagem e as trocas de marcha
            para aumentar eficiência, segurança e conforto.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Eficiência</p>
              <p className="mt-1 text-sm text-slate-700">
                Trocas otimizadas reduzem consumo e protegem o trem de força.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Conforto</p>
              <p className="mt-1 text-sm text-slate-700">
                Menos esforço na condução e mais foco na segurança.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Proteção</p>
              <p className="mt-1 text-sm text-slate-700">
                Evita engates incorretos e reduz desgaste de embreagem.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCO: COMO FUNCIONA */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Como o sistema funciona
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                O sistema analisa em tempo real
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• carga/peso</li>
                <li>• inclinação da via</li>
                <li>• rotação e torque do motor</li>
                <li>• velocidade do veículo</li>
                <li>• estilo de condução</li>
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
                <li>• quando reduzir para manter desempenho</li>
                <li>• quando proteger o conjunto (modo de segurança)</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-sky-50 border border-sky-100 p-5">
            <p className="text-sm font-semibold text-sky-900">Dica OTIAdriver</p>
            <p className="mt-1 text-sm text-slate-700">
              Evite acelerar durante a troca. O Opticruise faz a troca com mais
              suavidade e menor desgaste quando o pedal está estável.
            </p>
          </div>
        </section>

        {/* BLOCO: MODOS */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Modos de operação
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              {
                t: "Automático (A)",
                d: "O sistema escolhe as marchas. Melhor opção para uso diário e economia.",
              },
              {
                t: "Manual (M)",
                d: "O motorista solicita a marcha. O sistema impede engates que prejudiquem o conjunto.",
              },
              {
                t: "Economy",
                d: "Trocas mais cedo e rotações mais baixas para reduzir consumo.",
              },
              {
                t: "Power",
                d: "Trocas em rotações mais altas para resposta superior em subidas e ultrapassagens.",
              },
              {
                t: "Manobra",
                d: "Controle fino em baixa velocidade para pátios, docas e rampas.",
              },
              {
                t: "Proteção",
                d: "Em caso de falha, pode limitar potência e trocas para evitar danos.",
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
            que exigem cuidado imediato para evitar danos e paradas não programadas.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Falha na caixa de mudanças (amarelo)
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Indica falha detectada no sistema Opticruise (sensores, atuadores ou
                módulo). Reduza esforço, evite carga pesada em subida e procure oficina Scania.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Temperatura alta do óleo da caixa (amarelo)
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Indica aquecimento do óleo. Recomenda-se elevar a rotação do motor para
                aproximadamente 2.000 rpm por alguns minutos até normalizar.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCO: FREIO MOTOR */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Freio motor e integração com o Opticruise
          </h2>

          <p className="mt-3 text-slate-700 leading-relaxed">
            O freio motor é um freio auxiliar que atua no motor e nas rodas de tração,
            reduzindo a velocidade do veículo com menor uso do freio de serviço. Ele é mais
            eficiente em rotações elevadas e marchas adequadas. O Opticruise pode reduzir
            automaticamente para manter a faixa ideal de frenagem.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Freio motor automático
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Ativado pelo controle deslizante na alavanca do Opticruise. O sistema gerencia
                marchas e rotação automaticamente, ideal para descidas longas.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Freio motor manual
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Ativado ao mover a alavanca do Opticruise para baixo. Permite maior controle direto,
                mas requer atenção para evitar sobre-rotação.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">Atenção</p>
            <p className="mt-1 text-sm text-slate-700">
              Em descidas, priorize freio motor/retarder e use o freio de serviço apenas para correções.
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
              <p className="text-sm font-semibold text-slate-900">
                Checklist preventivo
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• óleo correto e troca no intervalo recomendado</li>
                <li>• verificação do sistema pneumático e drenagem de ar</li>
                <li>• inspeção de mangueiras, conexões e vazamentos</li>
                <li>• atualização de software quando aplicável</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Sintomas frequentes
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• trancos nas trocas</li>
                <li>• demora ou falha para engatar</li>
                <li>• mensagens/alertas no painel</li>
                <li>• aquecimento da transmissão</li>
              </ul>
            </div>
          </div>
        </section>

        {/* BLOCO FINAL – PDFs */}
        <section id="materiais-pdf" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* PDF – Opticruise */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Apostila técnica – Opticruise (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Baixe a apostila completa com o conteúdo técnico da Opticruise:
                funcionamento, modos, símbolos, freio motor, manutenção e boas práticas.
              </p>

              <a
                href="/fichas-tecnicas/caixa-de-cambio-opticruiser-scania.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir apostila Opticruise (PDF)
              </a>
            </div>

            {/* PDF – Símbolos */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Símbolos do painel – Scania (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Guia oficial com os principais símbolos do painel Scania, níveis de
                alerta e ações recomendadas ao motorista.
              </p>

              <a
                href="/fichas-tecnicas/simbolo-scania.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir guia de símbolos (PDF)
              </a>
            </div>

            {/* PDF – Interruptores */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Interruptores e comandos – Scania (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Material explicativo dos principais interruptores e comandos da
                cabine Scania para uso correto dos sistemas do veículo.
              </p>

              <a
                href="/fichas-tecnicas/interruptor-scania.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir guia de interruptores (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-900 text-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Pronto para estudar a Opticruise?</h2>
          <p className="mt-2 text-slate-200">
            Use esta página como referência rápida e baixe a apostila completa para treinamento.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a
              href="/fichas-tecnicas/caixa-de-cambio-opticruiser-scania.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition"
            >
              Baixar apostila Opticruise (PDF)
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Ir para a página inicial
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
