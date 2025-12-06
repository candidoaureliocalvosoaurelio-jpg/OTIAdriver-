// app/caminhoes/daf-cf-semipesado/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function DafCFSemipesadoPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617] text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.25fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-300 mb-3">
              Semipesado para distribuição e serviços
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              DAF CF Semipesado
              <span className="block text-sky-300 text-xl md:text-2xl mt-1">
                Versatilidade para distribuição regional e operações mistas
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-100/85 mb-6 max-w-xl">
              O <strong>DAF CF Semipesado</strong> foi pensado para aplicações
              que exigem agilidade, robustez e bom desempenho em rotas
              regionais, operação urbana reforçada e trajetos com trechos de
              terra. Combina cabine confortável, trem de força eficiente e
              configurações 4x2 e 6x2/6x4 para diferentes tipos de implementos.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Potência
                </p>
                <p className="text-lg font-bold"> 260cv 290cv até 310 cv</p>
                <p className="text-[11px] text-slate-300">
                  Motor PACCAR PX 
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Configurações
                </p>
                <p className="text-lg font-bold">4x2 / 6x2 / 6x4</p>
                <p className="text-[11px] text-slate-300">
                  Para baú, carga seca, serviços e vocacional
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Foco operacional
                </p>
                <p className="text-lg font-bold">Regional / urbano reforçado</p>
                <p className="text-[11px] text-slate-300">
                  Distribuição, serviços e aplicações mistas
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/caminhoes"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-300 text-black hover:bg-sky-200 transition"
              >
                Voltar para Caminhões
              </Link>
              <a
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold border border-white/40 text-white hover:bg-white/10 transition"
              >
                Ver ficha técnica resumida
              </a>
            </div>
          </div>

          {/* Imagem do caminhão */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/daf-cf-semipesado.jpg"
                  alt="DAF CF Semipesado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="mt-3 text-[11px] text-slate-300 text-center">
              Imagem ilustrativa DAF CF Semipesado – chassi para distribuição e
              serviços.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Bloco 1 – Visão geral */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Plataforma CF para operações semipesadas
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              A linha <strong>DAF CF</strong> Semipesado atende operações que
              combinam trechos urbanos, rodovias simples e acessos em via de
              terra. O projeto privilegia robustez estrutural, boa capacidade de
              carga e ergonomia de cabine para jornadas intensas de trabalho.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              A cabine oferece excelente visibilidade, comandos bem posicionados
              e nível de conforto adequado para quem passa o dia inteiro ao
              volante, seja em distribuição regional, apoio operacional ou
              serviços especializados.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Aplicações típicas
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Distribuição regional e urbana reforçada</li>
                <li>• Carga seca, baú e sider</li>
                <li>• Serviços públicos e apoio operacional</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Benefícios principais
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Robustez com boa dirigibilidade</li>
                <li>• Trem de força eficiente e confiável</li>
                <li>• Versatilidade de implementos e configurações</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloco 2 – Trem de força e configurações */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Trem de força e configurações de eixos
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O <strong>DAF CF Semipesado</strong> utiliza motores PACCAR
                dimensionados para alta disponibilidade e baixo consumo em
                aplicações de distribuição e serviços. A transmissão
                automatizada ou manual (conforme versão) permite adequar o
                conjunto ao perfil da rota e à preferência da frota.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Potência:</strong> faixas típicas 260cv 290cv até 310cv
                </li>
                <li>
                  <strong>Transmissão:</strong> opções manuais e automatizadas,
                  com relações voltadas para uso misto urbano/regional
                </li>
                <li>
                  <strong>Configurações de eixos:</strong> 6x2 e 6x4,
                  permitindo desde aplicações mais leves até composições
                  semipesadas e vocacionais
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-sky-900 mb-2">
                Foco em disponibilidade e TCO
              </p>
              <p>
                Manutenções planejadas, componentes dimensionados para alto
                esforço e consumo de combustível competitivo ajudam a reduzir o{" "}
                <strong>Custo Total de Operação (TCO)</strong>, mantendo o
                veículo disponível para a operação diariamente.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 – Configurações e aplicações */}
        <section id="configuracoes">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Configurações típicas e aplicações do DAF CF Semipesado
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-slate-50/80">
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configuração
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Aplicação principal
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Característica operacional
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    4x2 chassi
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Baú, carga seca e serviços urbanos reforçados.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Bom raio de giro, agilidade e capacidade adequada para
                    distribuição regional.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    6x2 chassi
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Operações que exigem maior capacidade de carga dentro dos
                    limites semipesados.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Melhor distribuição de peso sobre os eixos, atendendo a
                    legislações e operações com alto volume de carga.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    6x4 vocacional
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Aplicações que combinam asfalto e trechos de terra com
                    necessidade de tração adicional.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Tração total em dois eixos traseiros e robustez de chassi
                    para implementos especiais.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – DAF CF Semipesado
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-44">
                    Plataforma
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Chassi semipesado da família DAF CF, voltado para
                    distribuição regional, operações urbanas reforçadas e
                    serviços.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Trem de força
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Motores PACCAR com potências típicas 260cv 290cv até 310cv, combinados
                    a transmissões manuais ou automatizadas conforme versão e
                    aplicação.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configurações de eixos
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    6x2 e 6x4, permitindo adequar o veículo ao tipo de
                    carga, ao perfil da rota e à necessidade de tração.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Cabine
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Cabine da família CF, com bom acesso, ergonomia e conforto
                    para jornadas diárias intensas em distribuição e serviços.
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Distribuição regional, operações urbanas reforçadas e
                    serviços semipesados que exigem equilíbrio entre robustez,
                    conforto e eficiência de combustível.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BLOCO FINAL – Apenas o card do PDF */}
        <section className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Ficha técnica oficial (PDF)
            </h2>
            <p className="text-sm text-slate-700 mb-4">
              Consulte os dados completos de dimensões, capacidades, trem de
              força, configurações de eixos e equipamentos do{" "}
              <strong>DAF CF Semipesado</strong>.
            </p>
            <a
              href="/fichas-tecnicas/daf-cf-semipesado.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
            >
              Abrir ficha técnica DAF CF Semipesado (PDF)
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
