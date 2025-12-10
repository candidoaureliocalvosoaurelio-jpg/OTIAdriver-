// app/caminhoes/iveco-tector-24280-6x2-8x2/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function IvecoTector24280Page() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – padrão claro OTIAdriver */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
              Linha Semipesados IVECO Tector
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              IVECO Tector 24-280 6x2 e 8x2
              <span className="block text-sky-600 text-xl md:text-2xl mt-1">
                equilíbrio entre potência, versatilidade e economia.
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O <strong>IVECO Tector 24-280</strong> nas configurações{" "}
              <strong>6x2 e 8x2</strong> é o semipesado voltado para quem
              precisa combinar alta capacidade de carga com dirigibilidade
              urbana, conforto e baixo consumo. Ideal para{" "}
              <strong>entregas intermunicipais</strong>, rotas de{" "}
              <strong>longa distância</strong> e aplicações vocacionais em
              construção civil, coleta de resíduos e serviços públicos.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">280 cv</p>
                <p className="text-[11px] text-slate-600">
                  Motor 6 cilindros eletrônico
                </p>
              </div>
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Torque
                </p>
                <p className="text-lg font-bold text-slate-900">950 Nm</p>
                <p className="text-[11px] text-slate-600">
                  Faixa ampla de uso para rota mista
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  Versatilidade
                </p>
                <p className="text-lg font-bold text-slate-900">6x2 e 8x2</p>
                <p className="text-[11px] text-slate-600">
                  Alta capacidade de carga e múltiplas aplicações
                </p>
              </div>
            </div>

            {/* Botão – ver ficha técnica na mesma página */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Ver ficha técnica completa
              </Link>
            </div>
          </div>

          {/* Imagem do caminhão */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-900/5 border border-slate-200">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/iveco-tector-24280-6x2-8x2.jpg"
                  alt="IVECO Tector 24-280 6x2 e 8x2 – caminhão semipesado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa IVECO Tector 24-280 nas configurações 6x2 e
              8x2 – aplicação semipesada urbana e rodoviária.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* 1 – Visão geral e vocação */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Semipesado flexível para cidade, estrada e aplicações vocacionais
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              A linha <strong>IVECO Tector 24-280</strong> foi pensada para quem
              precisa de um caminhão único para múltiplas missões:{" "}
              <strong>distribuição urbana</strong>,{" "}
              <strong>entregas intermunicipais</strong> e atividades vocacionais
              como coleta de lixo, guindauto, plataforma aérea, basculante e
              suporte a operações de construção e mineração.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              Com cabine moderna e aerodinâmica, chassi robusto e suspensão
              dianteira reforçada, o Tector entrega estabilidade, conforto e
              capacidade de carga, mantendo o consumo de combustível sob
              controle mesmo em rotas mistas com muitas paradas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Principais cenários de uso
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Entregas intermunicipais com baú ou sider.</li>
                <li>• Distribuição urbana de carga geral e refrigerada.</li>
                <li>• Rotas regionais de médias e longas distâncias.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Aplicações vocacionais
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Coleta de lixo e varredeira.</li>
                <li>• Cesta aérea, guindauto e serviços de rede.</li>
                <li>• Basculante leve, apoio em construção e mineração.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2 – Motorização 24-280 */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Motor 24-280: potência e torque para alto PBT
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O Tector 24-280 utiliza o motor mais potente da família, um
                6 cilindros eletrônico projetado para entregar desempenho
                consistente com <strong>PBT técnico elevado</strong>, mesmo em
                operações com topografia acentuada.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Potência:</strong> 280 cv em torno de 2.100 rpm.
                </li>
                <li>
                  <strong>Torque máximo:</strong> cerca de 950 Nm, disponível em
                  faixa ampla de rotação, facilitando arrancadas e retomadas.
                </li>
                <li>
                  <strong>Emissões:</strong> atendimento à legislação vigente
                  (Euro 6 / Proconve P8, conforme ano-modelo).
                </li>
                <li>
                  <strong>Projeto semipesado:</strong> pensado para rotas de
                  distribuição, longas distâncias e uso vocacional.
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-sky-900 mb-2">
                Performance com economia
              </p>
              <p className="mb-2">
                A calibração do motor e do gerenciamento eletrônico prioriza a
                entrega de torque em baixas e médias rotações, reduzindo trocas
                de marcha e contribuindo para menor consumo de combustível.
              </p>
              <p>
                Na prática, o veículo consegue manter boa velocidade média em
                rodovias e urbano pesado sem sacrificar o consumo, mesmo com
                implementos volumosos ou densos.
              </p>
            </div>
          </div>
        </section>

        {/* 3 – Transmissão, dirigibilidade e robustez */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Transmissão ágil, dirigibilidade urbana e chassi robusto
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Câmbio automatizado
              </p>
              <p>
                Disponível com transmissão automatizada que reduz a fadiga do
                motorista e ajuda a otimizar o consumo ao manter o motor sempre
                na faixa ideal de rotação.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Dirigibilidade urbana
              </p>
              <p>
                Geometria de direção, diâmetro de giro e ergonomia foram
                pensados para facilitar manobras, estacionamentos e operação em
                vias estreitas, mantendo boa visibilidade em trânsito intenso.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Robustez estrutural
              </p>
              <p>
                Cabine reforçada, chassi robusto e suspensão dianteira com molas
                semielípticas suportam aplicações severas e uso vocacional
                contínuo, com alta estabilidade mesmo em piso irregular.
              </p>
            </div>
          </div>
        </section>

        {/* 4 – Configurações 6x2 e 8x2 e aplicações */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Configurações 6x2 e 8x2 – capacidade de carga e flexibilidade
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-sky-50">
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Versão
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Características principais
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Aplicações típicas
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    Tector 24-280 6x2
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Configuração 6x2 com eixo auxiliar, ideal para alto volume
                    e PBT em torno de 23–24 t, com diferentes entre-eixos para
                    baú, sider ou graneleiro.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Distribuição intermunicipal, baú frigorífico, cargas a
                    granel e rotas mistas urbano/rodoviário.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    Tector 24-280 8x2
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Versão 8x2 focada em máxima carga útil, com PBT em torno de
                    29 t, mantendo boa distribuição de peso em implementos
                    longos.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Transporte de materiais de construção, escoamento agrícola,
                    operações com alta densidade de carga e demanda por volume.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5 – Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – IVECO Tector 24-280 6x2 e 8x2
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-44">
                    Plataforma
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Linha IVECO Tector semipesados, voltada para distribuição
                    urbana, entregas intermunicipais e aplicações vocacionais.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Motor 6 cilindros eletrônico, potência em torno de 280 cv e
                    torque aproximado de 950 Nm, com foco em alta capacidade de
                    carga e eficiência em rota mista.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissões
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Opções de câmbio manual ou automatizado, este último
                    oferecendo trocas mais rápidas e menor fadiga do motorista.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configurações
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    6x2 com eixo auxiliar e 8x2 para máxima carga útil, com
                    múltiplos entre-eixos e comprimentos para diferentes
                    implementos (baú, sider, graneleiro, baú frigorífico etc.).
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Chassi e suspensão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Chassi reforçado, cabine com estrutura robusta e suspensão
                    dianteira com molas semielípticas, adequadas para condições
                    severas e uso vocacional.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Cabine e aerodinâmica
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Cabine moderna com foco em conforto, redução de arrasto
                    aerodinâmico, menor consumo e melhoria do fluxo de ar em
                    chuva, reduzindo o risco de aquaplanagem.
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Entregas urbanas e intermunicipais, longas distâncias com
                    alta carga útil e aplicações vocacionais em construção,
                    serviços públicos e apoio a operações canavieiras e
                    madeireiras.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bloco final – cartão branco com botão azul (PDF oficial) */}
        <section className="mt-10">
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h2 className="text-2xl font-bold mb-2 text-slate-900">
              Ficha técnica oficial – IVECO Tector 24-280 6x2 e 8x2 (PDF)
            </h2>

            <p className="text-sm text-slate-700">
              Acesse a ficha técnica oficial da IVECO com dados completos do
              Tector 24-280 6x2 e 8x2: motor, transmissões, capacidades,
              dimensões, entre-eixos e configurações para dimensionar a frota
              com segurança e precisão.
            </p>

            <div className="mt-4">
              <a
                href="/fichas-tecnicas/iveco-tector-24280-6x2-8x2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-blue-500 text-xs font-bold">
                  PDF
                </span>
                Abrir ficha técnica (PDF)
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
