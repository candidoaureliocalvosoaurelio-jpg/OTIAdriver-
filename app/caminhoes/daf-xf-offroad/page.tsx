// app/caminhoes/daf-xf-offroad/page.tsx
import Image from "next/image";
import Link from "next/link";

type PdfMaterial = {
  titulo: string;
  descricao: string;
  href: string;
  cta: string;
};

export default function DAFXFOffRoadPage() {
  const materiaisPdf: PdfMaterial[] = [
    {
      titulo: "Ficha técnica oficial – XF OFF-ROAD 530 cv (PDF)",
      descricao:
        "Dados completos de dimensões, capacidades, motor, transmissão, tração 6x4, chassi reforçado e aplicações severas do DAF XF OFF-ROAD 530 cv.",
      href: "/fichas-tecnicas/daf-xf-offroad.pdf",
      cta: "Abrir ficha técnica XF OFF-ROAD (PDF)",
    },
    {
      titulo: "Guia de Interruptores DAF (PDF)",
      descricao:
        "Identificação de interruptores, botões e comandos dos caminhões DAF. Útil para motoristas, instrutores e treinamentos operacionais.",
      href: "/fichas-tecnicas/interruptores-daf.pdf",
      cta: "Abrir guia de interruptores (PDF)",
    },
    {
      titulo: "Luzes do Painel – Caminhões DAF (PDF)",
      descricao:
        "Guia de luzes e símbolos do painel para identificar alertas, entender significados e agir corretamente durante a operação.",
      href: "/fichas-tecnicas/luzes-painel-daf.pdf",
      cta: "Abrir guia de luzes do painel (PDF)",
    },
    {
      titulo: "Regeneração do Filtro DPF – DAF (PDF)",
      descricao:
        "Funcionamento da regeneração do filtro DPF nos caminhões DAF: tipos de regeneração, alertas no painel e procedimentos corretos de condução.",
      href: "/fichas-tecnicas/regeneracao-filtro-dpf-daf.pdf",
      cta: "Abrir guia de regeneração DPF (PDF)",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-slate-50 pb-20">
      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-[1.3fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300 mb-3">
              Linha Vocacional • OFF-ROAD
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              DAF XF OFF-ROAD
              <span className="block text-amber-200 text-xl md:text-2xl mt-1">
                530 cv • tração 6x4 • operação severa
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-100/85 mb-6 max-w-xl">
              Versão reforçada do XF desenvolvida para operações extrapesadas,
              mineração, florestal, trechos agrícolas e percursos de baixa
              aderência. Combina o poderoso{" "}
              <strong>motor PACCAR MX-13 530 cv</strong> com tração 6x4, chassi
              reforçado e tecnologias que garantem desempenho e confiabilidade
              mesmo nos terrenos mais difíceis.
            </p>

            {/* Cards do HERO */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-200">
                  Motor
                </p>
                <p className="text-lg font-bold">PACCAR MX-13</p>
                <p className="text-[11px] text-slate-300">Euro 6 • 13L</p>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-200">
                  Potência
                </p>
                <p className="text-lg font-bold">530 cv</p>
                <p className="text-[11px] text-slate-300">
                  foco em torque e tração
                </p>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-200">
                  Aplicação
                </p>
                <p className="text-lg font-bold">Off-Road Pesado</p>
                <p className="text-[11px] text-slate-300">
                  Mineração / Florestal
                </p>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="#materiais-pdf"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-amber-300 text-black hover:bg-amber-200 transition"
              >
                Ver materiais em PDF
              </Link>

              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition"
              >
                Ver ficha técnica resumida
              </Link>

              <Link
                href="/caminhoes"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition"
              >
                Voltar para caminhões
              </Link>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/daf-xf-offroad.jpg"
                  alt="DAF XF OFF-ROAD 530 cv"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-300 text-center">
              Imagem ilustrativa DAF XF OFF-ROAD — aplicação severa.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO GERAL */}
      <section className="max-w-6xl mx-auto px-4 mt-12 space-y-12">
        {/* Bloco 1 — Motor */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Motor PACCAR MX-13 530 cv: força em baixa rotação
          </h2>

          <div className="grid md:grid-cols-[1.25fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O PACCAR MX-13 Euro 6 foi dimensionado para alto desempenho em
                condições severas, com foco em torque forte em baixa rotação e
                confiabilidade em longas jornadas.
              </p>

              <ul className="text-sm text-slate-700 space-y-2">
                <li>• 530 cv – maior potência da família MX-13.</li>
                <li>
                  • Alto torque para arrancadas fortes e força constante em
                  aclives fora de estrada.
                </li>
                <li>
                  • Calibração Off-Road: entrega de torque mais firme e
                  previsível em baixa rotação.
                </li>
                <li>
                  • Freio-motor de alta capacidade para descidas longas com
                  carga.
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-amber-900 mb-2">
                Por que isso importa?
              </p>
              <p>
                Em terreno severo, a prioridade é manter tração e embalo sem
                exigir do conjunto. Torque forte em baixa rotação reduz trocas
                desnecessárias, evita perda de momentum e contribui para menor
                desgaste do trem de força.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 2 — Transmissão / tração */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            ZF TraXon Off-Road e tração 6x4: controle em lama e rampas
          </h2>

          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                TraXon Off-Road
              </p>
              <p>
                Software específico que prioriza tração e momentum, reduzindo
                perda de força em rampas fortes e baixa aderência.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Bloqueios
              </p>
              <p>
                Estratégias de bloqueio de diferencial e controle para reduzir
                patinagem e manter o caminhão em movimento.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Robustez do conjunto
              </p>
              <p>
                Componentes reforçados e foco em durabilidade para suportar
                poeira, lama, carga alta e ciclos intensos.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 — Aplicações */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Aplicações típicas em operações severas
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 text-sm text-slate-800">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold mb-2">Extrapesado</h3>
              <p>
                Movimentação de cargas indivisíveis e composições de alto
                PBTC/CMT, com foco em tração e segurança.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold mb-2">Mineração</h3>
              <p>
                Operações em vias não pavimentadas e rampas com carga, exigindo
                robustez e freio auxiliar eficiente.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold mb-2">Florestal / Agrícola</h3>
              <p>
                Trechos de terra, lama e baixa aderência em ciclos repetitivos,
                com prioridade para disponibilidade operacional.
              </p>
            </div>
          </div>
        </section>

        {/* Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – DAF XF OFF-ROAD 530 cv
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 w-44">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    PACCAR MX-13 Euro 6, 13L — 530 cv.
                  </td>
                </tr>

                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Tração
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    6x4 com bloqueio de diferencial (conforme configuração).
                  </td>
                </tr>

                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    ZF TraXon automatizada com software Off-Road.
                  </td>
                </tr>

                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Chassi
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Longarinas reforçadas e suspensão robusta para operação
                    severa.
                  </td>
                </tr>

                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Aplicações
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Mineração, florestal, agrícola, extrapesado e terrenos
                    severos.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BLOCO FINAL – Materiais Técnicos em PDF (cards padronizados) */}
        <section id="materiais-pdf" className="mt-10">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Materiais técnicos em PDF
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {materiaisPdf.map((m) => (
              <div
                key={m.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {m.titulo}
                </h3>
                <p className="text-sm text-slate-700 mb-4">{m.descricao}</p>

                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
                >
                  {m.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL – destaque máximo (OTIAdriver/DAF) */}
        <section className="mt-14 rounded-3xl bg-[#0f172a] p-8 md:p-10 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Quer aprofundar o estudo do DAF XF OFF-ROAD?
            </h3>

            <p className="mt-2 max-w-2xl text-slate-200">
              Use esta página como referência rápida e acesse a ficha técnica e
              guias operacionais para apoiar treinamento, aplicação e operação
              severa.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/daf-xf-offroad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl
                           bg-gradient-to-r from-amber-300 to-amber-500
                           px-12 py-4 text-base font-extrabold text-black
                           shadow-lg shadow-amber-500/20
                           hover:from-amber-200 hover:to-amber-400
                           transition-all duration-200"
              >
                Baixar ficha técnica XF OFF-ROAD (PDF)
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
