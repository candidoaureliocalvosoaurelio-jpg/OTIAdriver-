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

        // app/caminhoes/mercedes/arocs-3353s-6x4/page.tsx
import Image from "next/image";
import Link from "next/link";

type PdfMaterial = {
  titulo: string;
  descricao: string;
  href: string;
  cta: string;
};

export default function MercedesArocs3353S6x4Page() {
  const materiaisPdf: PdfMaterial[] = [
    {
      href: "/fichas-tecnicas/mercedes-arocs-3353s-6x4.pdf",
      titulo: "Ficha técnica oficial – Mercedes-Benz Arocs 3353 S 6x4 (PDF)",
      descricao:
        "Consulte a ficha técnica oficial do Mercedes-Benz Arocs 3353 S 6x4 com dados completos de motor, transmissão, eixos, capacidades e dimensões para apoiar o correto dimensionamento da frota.",
      cta: "Abrir ficha técnica Arocs 3353 S 6x4 (PDF)",
    },
    {
      href: "/fichas-tecnicas/luzes-advertencia-indicadora-mercedes.pdf",
      titulo: "Luzes de Advertência e Indicadoras – Mercedes-Benz (PDF)",
      descricao:
        "Guia oficial de luzes e indicadores do painel dos caminhões Mercedes-Benz. Material essencial para identificar alertas, compreender significados e agir corretamente durante a operação.",
      cta: "Abrir guia de luzes Mercedes-Benz (PDF)",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-slate-50 to-white pb-20">
      {/* HERO */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.15fr,0.85fr] gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#005B9A] mb-3">
              Caminhões Mercedes-Benz • Vocacional
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Mercedes-Benz Arocs 3353 S 6x4
              <span className="block text-[#005B9A] text-xl md:text-2xl mt-1">
                referência para operação severa e alta disponibilidade
              </span>
            </h1>

            <p className="text-slate-700 leading-relaxed max-w-2xl">
              Esta página reúne um resumo técnico do Arocs 3353 S 6x4 e os
              materiais oficiais em PDF para apoiar aplicação, treinamento e
              operação em ambientes severos. Use como referência rápida e
              consulte os PDFs para dados completos e procedimentos.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/caminhoes"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
              >
                Voltar para caminhões
              </Link>

              <Link
                href="#materiais-pdf"
                className="inline-flex items-center justify-center rounded-xl border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#003057] hover:bg-sky-50 transition"
              >
                Ir direto para PDFs
              </Link>
            </div>
          </div>

          {/* Card resumo + imagem */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-[#001A33] text-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-3">Resumo rápido</h2>
              <ul className="space-y-2 text-sm text-slate-100">
                <li>• Configuração 6x4 voltada para aplicações severas</li>
                <li>• Projeto vocacional: robustez de chassi, tração e suspensão</li>
                <li>• Operação em canteiros, mineração leve e rotas mistas</li>
                <li>• Consulte os PDFs para dados homologados e combinações</li>
              </ul>
              <p className="mt-4 text-xs text-slate-300">
                Dica: para evitar paradas, adote rotina de inspeção (pneus, vazamentos,
                sistemas de freio e acoplamentos) antes de iniciar turnos severos.
              </p>
            </div>

            <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-200">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/trucks/mercedes-arocs.jpg"
                  alt="Mercedes-Benz Arocs 3353 S 6x4"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            <p className="text-[11px] text-slate-500 text-center">
              Imagem ilustrativa do Mercedes-Benz Arocs. Configurações e opcionais variam conforme aplicação.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Bloco: Aplicação */}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            Onde o Arocs 3353 S 6x4 se destaca
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Em operações severas, a prioridade é disponibilidade, tração e
            estabilidade do conjunto. Veículos vocacionais como o Arocs são
            dimensionados para ciclos de carga intensos, pisos irregulares e
            ambientes com poeira, lama e rampas.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Tração e controle</p>
              <p className="mt-1 text-sm text-slate-700">
                A configuração 6x4 é indicada para maior aderência e capacidade
                de avançar em baixa aderência (conforme pneus/condições).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Chassi vocacional</p>
              <p className="mt-1 text-sm text-slate-700">
                Estrutura voltada a implementos pesados, com foco em resistência
                e integridade em ciclos repetitivos.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Produtividade</p>
              <p className="mt-1 text-sm text-slate-700">
                Materiais oficiais ajudam a ajustar aplicação, combinações e
                procedimentos para reduzir falhas e consumo.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCO FINAL – Materiais em PDF (padrão OTIAdriver) */}
        <section id="materiais-pdf" className="mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            Materiais técnicos em PDF
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {materiaisPdf.map((item) => (
              <div
                key={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.titulo}
                </h3>

                <p className="text-sm text-slate-700 mb-4">{item.descricao}</p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
                >
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL – destaque máximo (padrão Volvo/FH/Scania adaptado para Mercedes) */}
        <section className="mt-14 rounded-3xl bg-[#001A33] p-8 md:p-10 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Quer aprofundar o estudo do Arocs 3353 S 6x4?
            </h3>

            <p className="mt-2 max-w-2xl text-slate-200">
              Use esta página como referência rápida e baixe a ficha técnica oficial e o guia
              de luzes para apoiar treinamentos, aplicação e operação segura.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/mercedes-arocs-3353s-6x4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl
                           bg-gradient-to-r from-sky-600 to-sky-800
                           px-12 py-4 text-base font-extrabold text-white
                           shadow-lg shadow-sky-900/25
                           hover:from-sky-500 hover:to-sky-700
                           focus:outline-none focus:ring-4 focus:ring-sky-200
                           transition-all duration-200"
              >
                Baixar ficha técnica Arocs (PDF)
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
