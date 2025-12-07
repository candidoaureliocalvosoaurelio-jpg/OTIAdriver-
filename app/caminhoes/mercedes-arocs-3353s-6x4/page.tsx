// app/caminhoes/mercedes-arocs-3353s-6x4/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function MercedesArocs3353Page() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-20">

      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-[1.3fr,1fr] gap-10 items-center">

          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300 mb-3">
              Aplicações Severas – Fora de Estrada
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Mercedes-Benz Arocs <span className="text-amber-300">3353 S 6x4</span>
            </h1>

            <p className="text-sm md:text-base text-slate-100/85 mb-6 max-w-xl">
              O <strong>Mercedes-Benz Arocs 3353 S 6x4</strong> é um cavalo mecânico vocacional
              projetado para enfrentar operações extremamente severas: mineração, construção pesada,
              florestal e transporte de cargas de alto CMT.  
              Equipado com o motor <strong>OM 471 de 530 cv</strong>, tração 6x4 e chassi reforçado,
              oferece máxima robustez, força contínua em aclives e confiabilidade incomparável.
            </p>

            {/* Cards do HERO */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">Potência</p>
                <p className="text-lg font-bold">530 cv</p>
                <p className="text-[11px] text-slate-300">Motor OM 471</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">Tração</p>
                <p className="text-lg font-bold">6x4</p>
                <p className="text-[11px] text-slate-300">Eixos motrizes + redução nos cubos</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">CMT</p>
                <p className="text-lg font-bold">150 t</p>
                <p className="text-[11px] text-slate-300">Operações extrapesadas</p>
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
                  src="/images/trucks/mercedes-arocs-3353s-6x4.jpg"
                  alt="Mercedes-Benz Arocs 3353 S 6x4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-2 text-[11px] text-slate-300 text-center">
              Imagem ilustrativa Mercedes-Benz Arocs 3353 S 6x4.
            </p>
          </div>

        </div>
      </section>

      {/* CONTEÚDO GERAL */}
      <section className="max-w-6xl mx-auto px-4 mt-12 space-y-12">

        {/* MOTOR */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Motor OM 471 – Robustez e Alto Torque para Terrenos Extremos
          </h2>

          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6">

            <div className="bg-white rounded-2xl border border-slate-200 shadow p-5 text-sm text-slate-800">
              <ul className="space-y-2">
                <li>• 530 cv com entrega contínua de torque para aclives severos.</li>
                <li>• Freio-motor de até 580 cv – o mais forte da categoria.</li>
                <li>• Eficiência térmica elevada e baixo consumo para aplicações pesadas.</li>
                <li>• Construído para durabilidade em ambientes de alta vibração e poeira.</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-amber-900 mb-2">Força e confiabilidade</p>
              <p>
                O OM 471 é referência em resistência e força contínua,
                garantindo disponibilidade máxima em minas, canaviais e obras pesadas.
              </p>
            </div>

          </div>
        </section>

        {/* TRANSMISSÃO + TRAÇÃO */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            PowerShift Advanced + Tração 6x4 com Redução nos Cubos
          </h2>

          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">

            <div className="bg-white rounded-2xl border border-slate-200 shadow p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                PowerShift Advanced
              </p>
              <p>
                Trocas rápidas, sem anéis sincronizadores e calibração específica para
                operações severas fora de estrada.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Eixos traseiros 6x4
              </p>
              <p>
                Sistema robusto com redução nos cubos, ideal para arrancadas com carga total
                e superfícies irregulares.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Bloqueios de diferencial
              </p>
              <p>
                Bloqueio longitudinal e transversal garante tração mesmo com baixa aderência.
              </p>
            </div>

          </div>
        </section>

        {/* CHASSI */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Chassi Reforçado para Operações Extremas
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-800">

            <div className="bg-white rounded-2xl border border-slate-200 shadow p-5">
              <ul className="space-y-2">
                <li>• Longarinas de alta espessura e resistência à torção.</li>
                <li>• Suspensão reforçada para cargas verticais intensas.</li>
                <li>• Para-choque metálico e alto ângulo de ataque.</li>
                <li>• Preparado para impactos e operações contínuas em terreno acidentado.</li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow p-5">
              <p className="font-semibold text-amber-300 mb-2 uppercase">
                Robustez estrutural
              </p>
              <p>
                Perfeito para ambientes agressivos: cascalho, lama, rampas severas
                e alto nível de vibração.
              </p>
            </div>

          </div>
        </section>

        {/* APLICAÇÕES */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Aplicações Ideais do Arocs 3353 S 6x4
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 text-sm text-slate-800">

            <div className="bg-white rounded-xl border border-slate-200 shadow p-4">
              <h3 className="font-semibold mb-2">Mineração</h3>
              <p>Operações internas, apoio logístico e transporte extrapesado.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow p-4">
              <h3 className="font-semibold mb-2">Florestal / Madeira</h3>
              <p>Alto torque e tração constante em lama e aclives longos.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow p-4">
              <h3 className="font-semibold mb-2">Construção Pesada</h3>
              <p>Movimentação de equipamentos, agregados e implementos pesados.</p>
            </div>

          </div>
        </section>

        {/* FICHA TÉCNICA */}
        <section id="ficha-tecnica">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – Arocs 3353 S 6x4
          </h2>

          <div className="overflow-x-auto border border-slate-200 bg-white rounded-2xl shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>

                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 w-44">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    OM 471 – 6 cilindros, 530 cv, freio-motor de até 580 cv.
                  </td>
                </tr>

                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    PowerShift Advanced de 12 marchas, calibração Off-Road.
                  </td>
                </tr>

                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Tração
                  </th>
                  <td className="px-4 py-3 text-slate-800">6x4 com redução nos cubos.</td>
                </tr>

                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    CMT
                  </th>
                  <td className="px-4 py-3 text-slate-800">150 toneladas.</td>
                </tr>

                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Chassi
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Longarinas reforçadas, suspensão vocacional e proteção inferior.
                  </td>
                </tr>

                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Aplicações
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Mineração, construção pesada, florestal, transporte extrapesado.
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
              Consulte os dados completos do Mercedes-Benz Arocs 3353 S 6x4.
            </p>

            <a
              href="/fichas-tecnicas/mercedes-arocs-3353s-6x4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition"
            >
              Abrir ficha técnica Arocs 3353 S 6x4 (PDF)
            </a>
          </div>
        </section>

      </section>
    </main>
  );
}
