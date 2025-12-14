import Image from "next/image";
import Link from "next/link";

export default function ScaniaSuperXTPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO */}
      <section className="w-full border-b border-slate-200 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
              Linha Vocacional SUPER XT
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-slate-900">
              Scania SUPER XT
              <span className="block text-amber-500 text-xl md:text-2xl mt-1">
                robustez extrema com trem de força Super
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              A linha <strong>Scania SUPER XT (Xtra Tough)</strong> foi desenvolvida
              para operar em ambientes severos como construção, mineração e
              transporte florestal, combinando trem de força Super, chassis
              reforçado e máxima disponibilidade operacional.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">420–770 hp</p>
                <p className="text-[11px] text-slate-600">
                  Motores 6L e V8 vocacionais
                </p>
              </div>

              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Torque
                </p>
                <p className="text-lg font-bold text-slate-900">
                  alto em baixa rotação
                </p>
                <p className="text-[11px] text-slate-600">
                  Tração extrema fora de estrada
                </p>
              </div>

              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Aplicações
                </p>
                <p className="text-lg font-bold text-slate-900">
                  Mineração, construção
                </p>
                <p className="text-[11px] text-slate-600">
                  6x4, 8x4, 6x6, 8x6
                </p>
              </div>
            </div>

            <Link
              href="#ficha-tecnica"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Ver materiais técnicos em PDF
            </Link>
          </div>

          {/* Imagem */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/scania-super-xt.jpg"
                  alt="Scania SUPER XT – caminhão vocacional"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa Scania SUPER XT — aplicações vocacionais severas.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* … TODO O CONTEÚDO TÉCNICO PERMANECE IGUAL AO SEU (sem alterações) … */}

        {/* TEXTO DE ENCERRAMENTO */}
        <section className="mt-8 space-y-6">
          <p className="text-sm text-slate-700 max-w-xl">
            Este material da <strong>Scania SUPER XT</strong> foi estruturado para
            apoiar motoristas, frotistas e instrutores técnicos na escolha da
            configuração correta conforme a severidade da operação.
          </p>
        </section>

        {/* BLOCO FINAL – Materiais em PDF (padrão OTIAdriver) */}
        <section id="ficha-tecnica" className="mt-10">
          <div className="grid gap-6 md:grid-cols-3">

            {/* PDF – Ficha técnica */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Ficha técnica oficial – Scania G 560 B8x4HZ XT Super (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Dados técnicos completos do{" "}
                <strong>Scania G 560 B8x4HZ XT Super</strong>, incluindo motor,
                transmissão, eixos, capacidades, dimensões e aplicações severas.
              </p>

              <a
                href="/fichas-tecnicas/scania-g560-b8x4hz-xt-super.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir ficha técnica (PDF)
              </a>
            </div>

            {/* PDF – Símbolos */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Símbolos do painel – Scania (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Guia oficial com os principais símbolos do painel Scania,
                níveis de alerta e ações recomendadas ao motorista.
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
      </section>
    </main>
  );
}
