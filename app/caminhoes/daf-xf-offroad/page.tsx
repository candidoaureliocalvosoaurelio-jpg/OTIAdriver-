// app/caminhoes/daf-xf-offroad/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function DAFXFOffRoadPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-20">
      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-[1.3fr,1fr] gap-10 items-center">

          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300 mb-3">
              Aplicações Severas – Off-Road
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              DAF XF <span className="text-amber-300">OFF-ROAD 530 cv</span>
            </h1>

            <p className="text-sm md:text-base text-slate-100/85 mb-6 max-w-xl">
              Versão reforçada do XF desenvolvida para operações extrapesadas,
              mineração, florestal, trechos agrícolas e percursos de baixa
              aderência. Combina o poderoso <strong>motor PACCAR MX-13 530 cv</strong>
              com tração 6x4, chassi reforçado e tecnologias que garantem
              desempenho e confiabilidade mesmo nos terrenos mais difíceis.
            </p>

            {/* Cards do HERO */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Potência
                </p>
                <p className="text-lg font-bold">530 cv</p>
                <p className="text-[11px] text-slate-300">MX-13 13L</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Tração
                </p>
                <p className="text-lg font-bold">6x4</p>
                <p className="text-[11px] text-slate-300">
                  Eixos motrizes + bloqueios
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Aplicação
                </p>
                <p className="text-lg font-bold">Off-Road Pesado</p>
                <p className="text-[11px] text-slate-300">Mineração / Florestal</p>
              </div>
            </div>

            <Link
              href="#ficha-tecnica"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-amber-300 text-black text-sm font-semibold hover:bg-amber-200 transition"
            >
              Ver ficha técnica completa
            </Link>
          </div>

          {/* Imagem */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/daf-xf-offroad.jpg" // salve sua imagem com este nome
                  alt="DAF XF OFF-ROAD 530 cv"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-2 text-[11px] text-slate-300 text-center">
              Imagem ilustrativa DAF XF OFF-ROAD 530 cv.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO GERAL */}
      <section className="max-w-6xl mx-auto px-4 mt-12 space-y-12">

        {/* Bloco 1 — Motor */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Motor PACCAR MX-13 530 cv – Força máxima para operações severas
          </h2>

          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow p-5">
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• 530 cv – maior potência da linha MX-13.</li>
                <li>
                  • Alto torque para arrancadas fortes e força constante
                  em aclives fora de estrada.
                </li>
                <li>
                  • Calibração Off-Road: entrega torque pleno em baixas rotações.
                </li>
                <li>
                  • Freio motor MX Engine Brake (MXEB) de alta potência – essencial
                  para descidas severas.
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-2">
                Performance Off-Road
              </p>
              <p className="text-sm text-slate-800">
                A calibração exclusiva garante tração imediata, melhor controle
                em terrenos de baixa aderência e proteção total do trem de força
                em operações extrapesadas.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 2 — Transmissão e Tração */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Transmissão ZF TraXon + Tração 6x4 com bloqueios
          </h2>

          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                TraXon Off-Road
              </p>
              <p>
                Software especial que prioriza tração e momentum, evitando
                perda de força em subidas fortes ou lama.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Eixos motrizes 6x4
              </p>
              <p>
                Dois eixos traseiros tracionados garantem que a força do motor
                seja aplicada ao solo mesmo em superfícies irregulares.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Bloqueio de diferencial
              </p>
              <p>
                Bloqueio longitudinal e transversal evita que uma roda patine,
                mantendo a tração sempre disponível.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 — Chassi e estrutura */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Chassi reforçado para operações extremas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow p-5 text-sm text-slate-800">
              <ul className="space-y-2">
                <li>• Longarinas reforçadas e resistentes à torção.</li>
                <li>• Suspensão com maior curso para terrenos irregulares.</li>
                <li>• Vão livre elevado para proteção inferior.</li>
                <li>• Para-choque pesado com ângulo de ataque maior.</li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow p-5 text-sm">
              <p className="font-semibold text-amber-300 mb-1 uppercase">
                Robustez estrutural
              </p>
              <p>
                Preparado para impactos, vibração e alta carga vertical,
                garantindo durabilidade mesmo em ambientes agressivos.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 4 — Aplicações */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Aplicações ideais do XF OFF-ROAD 530 cv
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 text-sm text-slate-800">
            <div className="bg-white rounded-xl border border-slate-200 shadow p-4">
              <h3 className="font-semibold mb-2">Extrapesado</h3>
              <p>Movimentação de cargas indivisíveis e composições de alto PBTC/CMT.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow p-4">
              <h3 className="font-semibold mb-2">Mineração</h3>
              <p>Ideal para rotas internas e apoio operacional em áreas remotas.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow p-4">
              <h3 className="font-semibold mb-2">Florestal / Cana</h3>
              <p>Atuação contínua em estradas de terra, lama e aclives severos.</p>
            </div>
          </div>
        </section>

        {/* Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – XF OFF-ROAD 530 cv
          </h2>

          <div className="overflow-x-auto border border-slate-200 bg-white rounded-2xl shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 w-44">Motor</th>
                  <td className="px-4 py-3 text-slate-800">PACCAR MX-13, 530 cv.</td>
                </tr>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Tração</th>
                  <td className="px-4 py-3 text-slate-800">6x4 com bloqueio de diferencial.</td>
                </tr>
                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Transmissão</th>
                  <td className="px-4 py-3 text-slate-800">ZF TraXon com software Off-Road.</td>
                </tr>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Chassi</th>
                  <td className="px-4 py-3 text-slate-800">Longarinas reforçadas e suspensão robusta.</td>
                </tr>
                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Aplicações</th>
                  <td className="px-4 py-3 text-slate-800">
                    Mineração, florestal, cana, extrapesado, terrenos severos.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PDF */}
        <section className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Ficha técnica oficial (PDF)
            </h3>
            <p className="text-sm text-slate-700 mb-4">
              Consulte todos os dados detalhados do XF OFF-ROAD 530 cv.
            </p>

            <a
              href="/fichas-tecnicas/daf-xf-offroad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition"
            >
              Abrir ficha técnica XF OFF-ROAD (PDF)
            </a>
          </div>
        </section>
      </section>
      {/* Bloco final – Luzes do Painel DAF (PDF) */}
<section className="mt-6">
  <div className="p-6 rounded-2xl border shadow-sm bg-white">
    <h2 className="text-2xl font-bold mb-2 text-slate-900">
      Luzes do Painel – Caminhões DAF (PDF)
    </h2>

    <p className="text-sm text-slate-700">
      Consulte o guia de luzes e símbolos do painel dos caminhões DAF.
      Material essencial para identificar alertas, compreender os
      significados e agir corretamente durante a operação do veículo.
    </p>

    <div className="mt-4">
      <a
        href="/fichas-tecnicas/luzes-painel-DAF.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-blue-500 text-xs font-bold">
          PDF
        </span>
        Abrir guia de luzes do painel (PDF)
      </a>
    </div>
  </div>
</section>
</main>
  );
}
