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
              I-Shift da Volvo: funcionamento, modos de operação, símbolos do painel,
              freio motor e retarder, manutenção preventiva e boas práticas para
              condução segura e econômica.
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
              <li>• Condução mais confortável e menor desgaste mecânico</li>
              <li>• Modos: A, Manual, Economy, Performance, Manobra</li>
              <li>• Integração total com freio motor e retarder</li>
            </ul>
            <p className="mt-4 text-xs text-slate-300">
              Dica: em descidas longas, utilize o retarder em conjunto com a I-Shift.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        {/* O QUE É */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            O que é a I-Shift?
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            A I-Shift é a transmissão automatizada da Volvo Trucks. Baseada em
            uma caixa mecânica de alta robustez, ela utiliza gerenciamento eletrônico
            avançado para automatizar a embreagem e as trocas de marcha, garantindo
            máxima eficiência, conforto e proteção do trem de força.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Eficiência</p>
              <p className="mt-1 text-sm text-slate-700">
                Trocas precisas reduzem consumo e aumentam a vida útil dos componentes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Conforto</p>
              <p className="mt-1 text-sm text-slate-700">
                Menos esforço do motorista e condução mais suave.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Proteção</p>
              <p className="mt-1 text-sm text-slate-700">
                Evita erros de engate e protege motor, embreagem e transmissão.
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
                A I-Shift analisa em tempo real
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• peso e carga do veículo</li>
                <li>• inclinação da via</li>
                <li>• rotação e torque do motor</li>
                <li>• velocidade</li>
                <li>• padrão de condução</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">
                O sistema decide automaticamente
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• a melhor marcha</li>
                <li>• o momento ideal da troca</li>
                <li>• a atuação da embreagem</li>
                <li>• reduções para frenagem</li>
                <li>• proteção do conjunto</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-5">
            <p className="text-sm font-semibold text-[#005B9A]">Dica OTIAdriver</p>
            <p className="mt-1 text-sm text-slate-700">
              Mantenha o acelerador estável durante as trocas para melhor suavidade
              e menor desgaste da transmissão.
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
              { t: "Automático (A)", d: "Gerenciamento total das marchas para uso diário." },
              { t: "Manual", d: "O motorista solicita a marcha com proteção eletrônica." },
              { t: "Economy", d: "Foco máximo em economia de combustível." },
              { t: "Performance", d: "Trocas em rotações mais altas para maior resposta." },
              { t: "Manobra", d: "Precisão em baixas velocidades." },
              { t: "Proteção", d: "Limitações automáticas para evitar danos." },
            ].map((item) => (
              <div key={item.t} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">{item.t}</p>
                <p className="mt-1 text-sm text-slate-700">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FREIO MOTOR E RETARDER */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Freio motor e retarder na I-Shift
          </h2>

          <p className="mt-3 text-slate-700 leading-relaxed">
            A I-Shift trabalha integrada ao freio motor e ao retarder Volvo,
            gerenciando automaticamente as reduções para manter a rotação ideal
            em descidas, reduzindo o uso do freio de serviço.
          </p>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">Atenção</p>
            <p className="mt-1 text-sm text-slate-700">
              Priorize sempre freio motor e retarder em descidas longas para
              evitar superaquecimento dos freios.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-[#001A33] text-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Pronto para estudar a I-Shift?</h2>
          <p className="mt-2 text-slate-200">
            Utilize esta página como referência e baixe a apostila completa para treinamento.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a
              href="/fichas-tecnicas/caixa-de-cambio-i-shift-volvo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#005B9A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#004B80] transition"
            >
              Baixar apostila I-Shift (PDF)
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Ir para a página inicial
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
