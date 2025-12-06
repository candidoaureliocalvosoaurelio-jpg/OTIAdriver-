// app/caminhoes/scania-super-xt/page.tsx

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
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Scania SUPER XT
              <span className="block text-amber-300 text-xl md:text-2xl mt-1">
                Robustez extrema com Trem de Força Super
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-100/85 mb-6 max-w-xl">
              A Linha <strong>Scania SUPER XT (Xtra Tough)</strong> foi
              desenvolvida para operar em ambientes severos, como construção,
              mineração e transporte florestal, combinando o Trem de Força
              Super com chassis, eixos e proteções projetados para máxima
              durabilidade e disponibilidade da frota.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Potência
                </p>
                <p className="text-lg font-bold">420–770 hp</p>
                <p className="text-[11px] text-slate-300">
                  Motores 6L e V8 vocacionais
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Torque
                </p>
                <p className="text-lg font-bold">alto em baixa rotação</p>
                <p className="text-[11px] text-slate-300">
                  Focado em tração off-road
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Aplicações
                </p>
                <p className="text-lg font-bold">Construção, mineração, florestal</p>
                <p className="text-[11px] text-slate-300">
                  Configurações 6x4, 8x4, 6x6, 8x6
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/caminhoes"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-amber-300 text-black hover:bg-amber-200 transition"
              >
                Voltar para Caminhões
              </Link>
              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold border border-white/40 text-white hover:bg-white/10 transition"
              >
                Ver ficha técnica completa
              </Link>
            </div>
          </div>

          {/* Imagem do caminhão */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/scania-super-xt.jpg" // ajuste o nome do arquivo se necessário
                  alt="Scania SUPER XT – caminhão vocacional fora de estrada"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-300 text-center">
              Imagem ilustrativa Scania SUPER XT — aplicações vocacionais
              pesadas (mineração, construção, florestal).
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Visão geral */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Vocação Xtra Tough: disponibilidade máxima em ambiente severo
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              A Linha <strong>SUPER XT</strong> foi concebida para suportar
              lama, aclives acentuados, solo irregular e cargas elevadas sem
              comprometer a confiabilidade. O conjunto reúne motor Super,
              caixas Opticruise HD, eixos com redução nos cubos e um pacote
              estrutural dimensionado para operações críticas.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              O foco é garantir <strong>alta tração</strong>,{" "}
              <strong>robustez estrutural</strong> e{" "}
              <strong>segurança em descidas</strong>, reduzindo paradas
              imprevistas e mantendo a produtividade em canteiros de obra,
              pedreiras, minas e operações florestais.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Ambientes-alvo
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Mineração e pedreiras</li>
                <li>• Construção pesada e terraplenagem</li>
                <li>• Transporte florestal (madeira)</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Benefícios principais
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Robustez estrutural em nível vocacional</li>
                <li>• Alta CMT e capacidade de tração</li>
                <li>• Redução de paradas não programadas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design XT: proteção e ângulo de ataque */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Design XT: proteção funcional e ângulo de ataque elevado
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O visual XT foi projetado para ser <strong>funcional</strong>.
                Os elementos de design atuam como escudos para componentes
                vitais, permitindo que o caminhão avance em terreno acidentado
                com menor risco de danos estruturais.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Para-choque em aço reforçado:</strong> ajuda a
                  absorver impactos sem comprometer componentes sensíveis.
                </li>
                <li>
                  <strong>Ângulo de ataque elevado:</strong> facilita a
                  transposição de rampas, buracos e obstáculos típicos de
                  canteiros e minas.
                </li>
                <li>
                  <strong>Proteções e grelhas:</strong> reduzem quebras de
                  faróis e lanternas por pedras e detritos.
                </li>
                <li>
                  <strong>Pino de reboque frontal:</strong> alta capacidade de
                  tração para desatolar ou rebocar equipamentos pesados.
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-amber-900 mb-2">
                Por que isso importa na operação?
              </p>
              <p className="mb-2">
                Cada batida em vala, encosto em talude ou manobra em piso de
                cascalho representa risco de danos. A arquitetura XT foi
                pensada para que o caminhão suporte esses impactos com menor
                custo de reparo.
              </p>
              <p>
                Resultado: <strong>mais disponibilidade</strong>,{" "}
                <strong>menos tempo parado em oficina</strong> e{" "}
                <strong>maior produtividade por turno</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Trem de força e performance off-road */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Trem de Força SUPER + Opticruise HD: performance off-road
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                A linha SUPER XT combina motores de alto torque com caixas de
                câmbio Heavy Duty, marchas super-reduzidas e freios auxiliares
                dimensionados para declives longos com carga máxima.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Motores:</strong> famílias 6 cilindros (D9/D13) e V8
                  (DC16), com potências vocacionais a partir de 420 hp até
                  configurações de alto desempenho.
                </li>
                <li>
                  <strong>Torque:</strong> foco em torque máximo em baixas
                  rotações para arrancar e manter tração em piso escorregadio.
                </li>
                <li>
                  <strong>Caixas Opticruise HD:</strong> G25 e G33 para serviço
                  pesado, com mudanças suaves e robustez mecânica.
                </li>
                <li>
                  <strong>Marchas super-reduzidas:</strong> relações que
                  permitem manobrar em baixíssima velocidade e arrancar com
                  caçamba cheia em aclives severos.
                </li>
                <li>
                  <strong>Freio auxiliar:</strong> Retarder e/ou CRB
                  (freio de liberação de compressão), fundamentais para descidas
                  longas com segurança.
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow-sm p-5 text-sm">
              <p className="font-semibold mb-2">
                Foco: controle total em subida e descida
              </p>
              <p className="mb-2">
                Em ambiente vocacional, o risco maior não está apenas em subir
                com carga, mas em controlar o peso na descida. O conjunto
                Super XT foi pensado para garantir freio auxiliar abundante,
                boa relação de marchas e tração constante.
              </p>
              <p>
                Isso reduz o risco de superaquecimento dos freios de serviço e
                aumenta a segurança dos operadores.
              </p>
            </div>
          </div>
        </section>

        {/* Chassis, eixos e tração extrema */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Chassis, eixos e tração extrema na Linha XT
          </h2>
          <div className="grid md:grid-cols-2 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Chassis reforçado
              </p>
              <p>
                Longarinas com maior espessura e reforços adicionais para
                suportar torção e cargas concentradas de caçambas, betoneiras e
                implementos vocacionais pesados.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Eixo traseiro RB 885
              </p>
              <p>
                Eixo projetado para aplicações severas, com capacidade de
                trabalhar em PBTs elevados e contribuir com incremento
                significativo de força na roda em terrenos planos.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Redução nos cubos
              </p>
              <p>
                Distribui o esforço de torque para as extremidades, elevando a
                capacidade de tração em solos de baixa aderência, como lama,
                areia ou cascalho solto.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Suspensão e bloqueios
              </p>
              <p>
                Suspensões com molas parabólicas reforçadas e{" "}
                <strong>bloqueios de diferencial</strong> entre-eixos e
                entre-rodas, garantindo movimentação mesmo com uma roda com
                aderência limitada.
              </p>
            </div>
          </div>
        </section>

        {/* Aplicações e configurações */}
        <section id="aplicacoes">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Aplicações e configurações vocacionais
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-slate-50/80">
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configuração
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Aplicação típica
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Destaque operacional
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    6x4 rígido / trator
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Basculantes, transporte florestal, tanques em terreno misto.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Equilíbrio entre tração, PBT e versatilidade em rotas
                    mistas.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    8x4 rígido
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Construção pesada, betoneiras, bombas de concreto e
                    basculantes de alta capacidade.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Máxima capacidade de carga sobre chassi rígido, com
                    distribuição otimizada de peso.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    6x6 / 8x6
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Mineração, operações em lama intensa, areia profunda ou
                    ambientes de aderência quase nula.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Tração total para garantir movimento em qualquer tipo de
                    terreno, reduzindo risco de atolamento.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    CMT elevado
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Composições pesadas vocacionais, respeitando legislação
                    local.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Plataformas com capacidade para atingir CMT muito elevado,
                    com eixos, chassi e trem de força dimensionados para uso
                    contínuo.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – Scania SUPER XT
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-44">
                    Plataforma
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Linha Scania SUPER XT (Xtra Tough) para aplicações
                    vocacionais severas: construção, mineração e florestal.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Motores
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Famílias de 6 cilindros (D9/D13) e V8 (DC16), com foco em
                    torque elevado e operação em baixa rotação.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Potência / torque
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Faixa típica a partir de 420 hp, com níveis altos de torque
                    para arrancadas com carga e tração em piso escorregadio.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissões
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Caixas Opticruise HD (G25/G33) com marchas super-reduzidas
                    e relações adequadas ao trabalho fora de estrada.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Eixos / tração
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Eixos traseiros vocacionais (ex.: RB 885) com redução nos
                    cubos e bloqueios de diferencial, em configurações 6x4,
                    8x4, 6x6 e 8x6.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Chassis e suspensão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Longarinas reforçadas, suspensão com molas parabólicas
                    dimensionadas para altas cargas e operações severas.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Freios auxiliares
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Retarder e/ou CRB, fundamentais para descidas longas com
                    caçambas pesadas, preservando os freios de serviço.
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Maximizar disponibilidade e segurança em operações
                    vocacionais severas, com alta capacidade de tração, robustez
                    estrutural e redução de paradas não programadas.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA final */}
        <section className="mt-8 flex flex-wrap gap-4 justify-between items-center">
          <p className="text-sm text-slate-700 max-w-xl">
            Este resumo da <strong>Scania SUPER XT</strong> foi estruturado
            para apoiar motoristas, frotistas e instrutores técnicos na seleção
            correta de configuração, de acordo com a severidade do terreno e a
            exigência de carga da operação.
          </p>
          <Link
            href="/caminhoes"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Ver todos os caminhões a diesel
          </Link>
        </section>
          // app/caminhoes/scania-super-xt/page.tsx

<div className="mt-8 border-t pt-4">
  <h2 className="text-xl font-semibold mb-2">
    Ficha técnica oficial (PDF)
  </h2>

  <p className="text-sm text-gray-700 mb-2">
    Dados completos do Scania G 560 B8x4HZ XT Super para aplicações severas.
  </p>

  <a
    href="/fichas-tecnicas/scania-g560-b8x4hz-xt-super.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block underline font-semibold hover:no-underline text-blue-600"
  >
    Abrir ficha técnica Scania G 560 XT Super (PDF)
  </a>
</div>

      </section>
    </main>
  );
}
