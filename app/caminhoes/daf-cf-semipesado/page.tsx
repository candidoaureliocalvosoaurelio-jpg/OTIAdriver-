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
              Linha Semipesada Multimissão
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              DAF CF Semipesado
              <span className="block text-sky-300 text-xl md:text-2xl mt-1">
                Versatilidade, robustez e economia para distribuição e serviços
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-100/85 mb-6 max-w-xl">
              O <strong>DAF CF Semipesado</strong> foi projetado para operações
              urbanas, regionais e vocacionais que exigem{" "}
              <strong>alta disponibilidade</strong>,{" "}
              <strong>baixo consumo de combustível</strong> e{" "}
              <strong>conforto real ao motorista</strong>. Com as
              configurações <strong>FAS 6x2</strong> e <strong>FAC 8x2</strong>,
              atende de distribuição leve a aplicações de alto volume de carga.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Motor
                </p>
                <p className="text-lg font-bold">PACCAR PX-7</p>
                <p className="text-[11px] text-slate-300">
                  6,7 L • Euro 6 • 260–310 cv
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Configurações
                </p>
                <p className="text-lg font-bold">6x2 e 8x2</p>
                <p className="text-[11px] text-slate-300">
                  FAS 6x2 • FAC 8x2 rígido
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Aplicações
                </p>
                <p className="text-lg font-bold">Distribuição & serviços</p>
                <p className="text-[11px] text-slate-300">
                  Baú, sider, bebidas, carga seca, agro
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold border border-white/40 text-white hover:bg-white/10 transition"
              >
                Ver ficha técnica resumida
              </Link>
            </div>
          </div>

          {/* Imagem do caminhão */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/daf-cf-semipesado.jpg" // coloque o arquivo aqui
                  alt="DAF CF Semipesado – caminhão rígido para distribuição e serviços"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-300 text-center">
              Imagem ilustrativa DAF CF Semipesado – configurações rígidas 6x2
              e 8x2 para operações urbanas e regionais.
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
              DAF CF Semipesado: versatilidade para distribuição e vocacional
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O <strong>DAF CF Semipesado</strong> foi desenvolvido para ser um
              verdadeiro <strong>multimissão</strong>. Atende desde a
              distribuição urbana e regional até aplicações vocacionais de
              maior severidade, sempre com foco em{" "}
              <strong>robustez, conforto e baixo custo operacional</strong>.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              A combinação entre o motor <strong>PACCAR PX-7</strong>, cabines
              bem dimensionadas e as configurações de eixos{" "}
              <strong>FAS 6x2</strong> e <strong>FAC 8x2</strong> permite que a
              mesma plataforma seja utilizada em diferentes segmentos, mantendo
              elevada disponibilidade mecânica e facilidade de manutenção.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Segmentos atendidos
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Distribuição urbana e regional</li>
                <li>• Bebidas, alimentos e carga seca</li>
                <li>• Agro, materiais de construção e serviços</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Benefícios para a frota
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Alto tempo de disponibilidade</li>
                <li>• Consumo otimizado na faixa semipesada</li>
                <li>• Cabine confortável e produtiva</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloco 2 – Motor PACCAR PX-7 Euro 6 */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Novo motor PACCAR PX-7 Euro 6: eficiência na faixa semipesada
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O <strong>PACCAR PX-7</strong> é um motor de{" "}
                <strong>6,7 litros</strong> desenvolvido para entregar o melhor
                equilíbrio entre desempenho, consumo de combustível e
                confiabilidade em operações urbanas e regionais.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Cilindrada:</strong> 6,7 L, com arquitetura pensada
                  para durabilidade e manutenção facilitada.
                </li>
                <li>
                  <strong>Potências típicas:</strong> faixas de 260, 290 e 310
                  cv (conforme configuração e aplicação).
                </li>
                <li>
                  <strong>Torque:</strong> foco em alto torque em baixas e
                  médias rotações, ideal para arrancadas com carga.
                </li>
                <li>
                  <strong>Padrão de emissões:</strong> tecnologia Euro 6 com
                  pós-tratamento moderno e baixo nível de emissões.
                </li>
                <li>
                  <strong>Economia de combustível:</strong> projeto otimizado
                  para ciclo de distribuição, com paradas frequentes e variação
                  de carga.
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-sky-900 mb-2">
                Foco em custo por quilômetro
              </p>
              <p className="mb-2">
                A calibração do PX-7 foi pensada para rodar na faixa de rotação
                mais eficiente, reduzindo o consumo de diesel e os custos de
                manutenção ao longo do tempo.
              </p>
              <p>
                Resultado: <strong>mais km por litro</strong>,{" "}
                <strong>intervalos de serviço competitivos</strong> e{" "}
                <strong>maior retorno para a frota</strong> nas operações
                semipesadas.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 – Configurações FAS 6x2 e FAC 8x2 */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Configurações FAS 6x2 e FAC 8x2: flexibilidade de carga
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-slate-50/80">
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configuração
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Características
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Aplicações típicas
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    FAS 6x2 rígido
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Conjunto mais leve e ágil, ideal para rotas com muitas
                    paradas e manobras urbanas.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Distribuição urbana e regional, baús de médio porte, carga
                    seca, alimentos, bebidas e aplicações de serviço.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-800 font-medium bg-slate-50/60">
                    FAC 8x2 rígido
                  </td>
                  <td className="px-4 py-3 text-slate-800 bg-slate-50/60">
                    Quatro eixos com eixo auxiliar, proporcionando maior PBT
                    legal e melhor distribuição de peso.
                  </td>
                  <td className="px-4 py-3 text-slate-800 bg-slate-50/60">
                    Distribuição de alto volume, implementos mais longos,
                    operações com carga densa ou volumétrica que exigem maior
                    capacidade de carga.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm text-slate-700">
            Nas duas configurações, o DAF CF Semipesado foi pensado para
            combinar <strong>capacidade de carga</strong>,{" "}
            <strong>economia de combustível</strong> e{" "}
            <strong>facilidade de manobra</strong>, fatores essenciais para
            operações em centros urbanos e rotas regionais.
          </p>
        </section>

        {/* Bloco 4 – Cabines e conforto */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Cabines Day, Sleeper e Space Cab – conforto sob medida
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Day Cab
              </p>
              <p>
                Cabine sem cama, ideal para rotas de curta duração, com muitos
                acessos ao solo. Foco em visibilidade, ergonomia e facilidade de
                entrada e saída.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Sleeper Cab
              </p>
              <p>
                Cabine com cama, pensada para rotas regionais com eventuais
                pernoites. Oferece bom espaço para descanso, armários e
                organização do dia a dia.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Space Cab
              </p>
              <p>
                Cabine de maior volume e altura interna superior a 2 metros,
                ideal para motoristas que passam longos períodos com o veículo.
                Mais espaço de circulação, arrumação e conforto em viagens
                prolongadas.
              </p>
            </div>
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
                    Caminhão rígido semipesado DAF CF, com foco em distribuição
                    urbana, regional e aplicações vocacionais de média
                    severidade.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    PACCAR PX-7, 6,7 L, padrão Euro 6, calibração voltada para
                    economia de combustível e alta confiabilidade.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Potência / torque
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Faixas típicas de 260 a 310 cv, com torques adequados a
                    arrancadas com carga em rotas urbanas e regionais.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configurações de eixos
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    FAS 6x2 rígido e FAC 8x2 rígido, permitindo diferentes
                    níveis de PBT e capacidade de carga conforme a necessidade
                    da operação.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Cabines
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Opções Day Cab, Sleeper Cab e Space Cab, com foco em
                    ergonomia, visibilidade e conforto para o motorista.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Aplicações
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Distribuição urbana e regional, bebidas, alimentos, carga
                    seca, materiais de construção, agro e serviços em geral.
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Maximizar versatilidade, produtividade e economia de
                    combustível em operações semipesadas, mantendo alta
                    disponibilidade mecânica e conforto ao motorista.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BLOCO FINAL – CARTÃO COM BOTÃO PARA PDF E CTA */}
        <section className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Ficha técnica oficial (PDF)
            </h2>
            <p className="text-sm text-slate-700 mb-4">
              Consulte os dados completos de dimensões, capacidades, trem de
              força, configurações de eixos e equipamentos do{" "}
              <strong>DAF CF Semipesado</strong>.
            </p>
            <a
              href="/fichas-tecnicas/daf-cf-semipesado.pdf" // ajuste o nome se o PDF tiver outro nome
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
            >
              {/* BLOCO FINAL – Apenas o card do PDF */}  
<section className="mt-8">
  <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
    <h2 className="text-xl font-semibold text-slate-900 mb-2">
      Ficha técnica oficial (PDF)
    </h2>
    <p className="text-sm text-slate-700 mb-4">
      Consulte os dados completos de dimensões, capacidades, trem de força,
      configurações de eixos e equipamentos do <strong>DAF CF Semipesado</strong>.
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
    </main>
  );
}
