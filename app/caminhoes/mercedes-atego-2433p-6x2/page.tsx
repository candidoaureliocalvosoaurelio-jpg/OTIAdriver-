// app/caminhoes/mercedes-atego-2433p-6x2/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function MercedesAtego2433PPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – padrão claro OTIAdriver (igual FH / Scania) */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
              Caminhão Semipesado 6x2
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Mercedes-Benz Atego 2433 P 6x2
              <span className="block text-sky-600 text-xl md:text-2xl mt-1">
                versatilidade e carga útil para rotas urbanas e rodoviárias
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O <strong>Atego 2433 P 6x2</strong> é um caminhão rígido semipesado
              com eixo auxiliar levantável, projetado para{" "}
              <strong>maximizar a carga útil</strong> em operações de
              distribuição regional e urbana. Combina PBT técnico de{" "}
              <strong>24,1 toneladas</strong> com motor OM 926 de{" "}
              <strong>321 cv e 1.250 Nm</strong>, entregando desempenho,
              economia e confiabilidade em aplicações de baú, sider e tanque.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  PBT técnico
                </p>
                <p className="text-lg font-bold text-slate-900">24,1 t</p>
                <p className="text-[11px] text-slate-600">
                  Semipesado rígido 6x2 com eixo auxiliar
                </p>
              </div>

              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Potência / torque
                </p>
                <p className="text-lg font-bold text-slate-900">
                  321 cv / 1.250 Nm
                </p>
                <p className="text-[11px] text-slate-600">
                  Motor Mercedes-Benz OM 926, 6 cilindros
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  Aplicações
                </p>
                <p className="text-lg font-bold text-slate-900">
                  Baú, sider, tanque
                </p>
                <p className="text-[11px] text-slate-600">
                  Distribuição regional e urbana de alto volume
                </p>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Ver ficha técnica completa
              </Link>

              <Link
                href="#materiais-pdf"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border border-sky-200 bg-white text-sky-800 hover:bg-sky-50 transition"
              >
                Ver materiais em PDF
              </Link>
            </div>
          </div>

          {/* Imagem do caminhão */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-900/5 border border-slate-200">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/mercedes-atego-2433p-6x2.jpg"
                  alt="Mercedes-Benz Atego 2433 P 6x2 – caminhão semipesado 6x2"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa Mercedes-Benz Atego 2433 P 6x2 — distribuição
              regional e urbana de alto volume.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Bloco 1 – Visão geral */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Visão geral: semipesado versátil para distribuição de alto volume
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O <strong>Atego 2433 P 6x2</strong> foi desenhado para o
              transportador que precisa de <strong>versatilidade</strong> e{" "}
              <strong>flexibilidade</strong> nas operações, mantendo alta carga
              útil e agilidade em rotas mistas. A tração 6x2 com eixo auxiliar
              permite otimizar consumo e desgaste de pneus, adequando o veículo
              ao peso transportado em cada trecho.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              A linha Atego cobre aplicações urbanas, rodoviárias e algumas
              vocações, com versões que facilitam encontrar a configuração ideal
              para cada operação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Segmento alvo
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Semipesado rígido 6x2 com eixo auxiliar</li>
                <li>• Rotas rodoviárias e urbanas de médio/alto percurso</li>
                <li>• Alto volume com PBT elevado</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Benefícios para a frota
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Alta carga útil com PBT técnico de 24,1 t</li>
                <li>• Conjunto robusto para maior disponibilidade</li>
                <li>• Bom equilíbrio entre desempenho e economia</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloco 2 – Motorização OM 926 */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Motorização OM 926: força, economia e segurança com Top Brake
          </h2>

          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O Atego 2433 P utiliza o motor{" "}
                <strong>Mercedes-Benz OM 926</strong>, 6 cilindros em linha,
                projetado para suportar esforço com alto PBT mantendo eficiência
                de combustível.
              </p>

              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Potência máxima:</strong> 321 cv
                </li>
                <li>
                  <strong>Torque máximo:</strong> 1.250 Nm
                </li>
                <li>
                  <strong>Confiabilidade:</strong> motores amplamente testados na
                  operação brasileira
                </li>
                <li>
                  <strong>Freio motor Top Brake:</strong> reforça segurança em
                  descidas e reduz desgaste dos freios de serviço
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-sky-900 mb-2">
                Benefícios na operação
              </p>
              <p className="mb-2">
                A combinação de torque forte com o Top Brake melhora o controle
                em rampas e descidas, reduzindo custo de manutenção.
              </p>
              <p>
                Resultado: boa velocidade média, economia e robustez em rotas
                carregadas.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 – Câmbios PowerShift 3 */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Câmbios PowerShift 3: desempenho, conforto e economia
          </h2>

          <div className="grid md:grid-cols-2 gap-6 items-start text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="mb-3">
                A linha Atego incorpora câmbios automatizados
                <strong> Mercedes-Benz PowerShift 3</strong>, com estratégia de
                trocas mais rápida e proteção do conjunto.
              </p>
              <ul className="space-y-2">
                <li>• Trocas mais rápidas e consistentes</li>
                <li>• Melhor aproveitamento de torque e “faixa verde”</li>
                <li>• Contribui para redução de consumo</li>
                <li>• Minimiza abusos de condução</li>
              </ul>
            </div>

            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-5">
              <p className="font-semibold text-sky-900 mb-2">
                Conforto para o motorista
              </p>
              <p className="mb-2">
                Comando integrado e ergonomia melhorada reduzem fadiga e
                facilitam a condução em distribuição.
              </p>
              <p>
                Menos esforço, mais padronização operacional e segurança no dia a dia.
              </p>
            </div>
          </div>
        </section>

        {/* Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – Mercedes-Benz Atego 2433 P 6x2
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-40">
                    Modelo
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Atego 2433 P 6x2 – rígido semipesado com eixo auxiliar levantável.
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    OM 926, 6 cilindros em linha, diesel, alta durabilidade e eficiência.
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Potência / torque
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    321 cv / 1.250 Nm (aprox.), adequado ao alto PBT em 6x2.
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Tração
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    6x2 rígido com eixo auxiliar levantável.
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    PBT técnico
                  </th>
                  <td className="px-4 py-3 text-slate-800">~24,1 t (plataforma)</td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    PowerShift 3 (varia por versão), com estratégia inteligente de trocas.
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Freios auxiliares
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Top Brake (freio-motor reforçado).
                  </td>
                </tr>

                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Aplicações típicas
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Baú, sider, tanque — distribuição regional/urbana de alto volume.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BLOCO FINAL – Materiais em PDF (padrão OTIAdriver) */}
        <section id="materiais-pdf" className="mt-10">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 – Atego 2433 P 6x2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Ficha técnica – Atego 2433 P 6x2 (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Consulte a ficha técnica oficial do{" "}
                <strong>Mercedes-Benz Atego 2433 P 6x2</strong> com dados completos
                de motor, transmissão, eixos, capacidades, dimensões e configurações
                para correto dimensionamento da frota.
              </p>

              <a
                href="/fichas-tecnicas/mercedes-atego-2433p-6x2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir ficha técnica (PDF)
              </a>
            </div>

            {/* Card 2 – Atego 3033 P 8x2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Ficha técnica – Atego 3033 P 8x2 (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Acesse a ficha técnica oficial do{" "}
                <strong>Mercedes-Benz Atego 3033 P 8x2</strong> com informações
                detalhadas de motor, transmissão, eixos, capacidades e dimensões
                para aplicações de maior PBTC.
              </p>

              <a
                href="/fichas-tecnicas/mercedes-atego-3033p-8x2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir ficha técnica (PDF)
              </a>
            </div>

            {/* Card 3 – Luzes e símbolos Mercedes */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Luzes de Advertência – Mercedes-Benz (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Guia oficial de luzes de advertência e indicadores do painel dos
                caminhões Mercedes-Benz. Essencial para identificar alertas,
                compreender significados e agir corretamente durante a operação.
              </p>

              <a
                href="/fichas-tecnicas/luzes-advertencia-indicadora-mercedes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir guia de luzes (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* CTA FINAL – destaque máximo (OTIAdriver/Mercedes) */}
        <section className="mt-14 rounded-3xl bg-[#0f172a] p-8 md:p-10 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Quer aprofundar o estudo do Atego 2433 P 6x2?
            </h3>

            <p className="mt-2 max-w-2xl text-slate-200">
              Use esta página como referência rápida e acesse as fichas técnicas e
              guias de painel para apoiar treinamento, dimensionamento e operação segura.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/mercedes-atego-2433p-6x2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl
                           bg-gradient-to-r from-sky-600 to-sky-800
                           px-12 py-4 text-base font-extrabold text-white
                           shadow-lg shadow-sky-900/20
                           hover:from-sky-500 hover:to-sky-700
                           transition-all duration-200"
              >
                Baixar ficha técnica Atego 2433 P (PDF)
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
