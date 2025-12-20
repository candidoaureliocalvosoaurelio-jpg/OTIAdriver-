// app/caminhoes/scania-p320-8x2/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function ScaniaP3208x2Page() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – padrão FH/Scania */}
      <section className="w-full border-b border-slate-200 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
              Distribuição Regional & Urbana
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-slate-900">
              Scania P320 8x2
              <span className="block text-emerald-500 text-xl md:text-2xl mt-1">
                máxima carga útil com agilidade na distribuição
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O <strong>Scania P320 8x2</strong> é um rígido vocacional pensado
              para operações de alto volume e peso em rotas regionais e urbanas.
              A Cabine P de fácil acesso, combinada à motorização de{" "}
              <strong>320 hp</strong> e à configuração <strong>8x2</strong>,
              entrega excelente carga útil dentro dos limites legais, mantendo
              dirigibilidade e baixo Custo Total de Operação (TCO).
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">320 hp</p>
                <p className="text-[11px] text-slate-600">
                  Motor D9 de 6 cilindros
                </p>
              </div>
              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Configuração
                </p>
                <p className="text-lg font-bold text-slate-900">8x2 rígido</p>
                <p className="text-[11px] text-slate-600">
                  4 eixos, com eixo auxiliar
                </p>
              </div>
              <div className="bg-slate-900/5 border border-slate-200 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  Aplicações
                </p>
                <p className="text-lg font-bold text-slate-900">
                  Distribuição de alto volume
                </p>
                <p className="text-[11px] text-slate-600">
                  Bebidas, alimentos, carga seca, baú
                </p>
              </div>
            </div>

            {/* Botão único – ficha técnica */}
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/5 border border-slate-200">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/scania-p320-8x2.jpg"
                  alt="Scania P320 8x2 – caminhão rígido para distribuição"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa Scania P320 8x2 — configuração rígida para
              distribuição de alto volume.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Bloco 1 – Cabine P */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Cabine P: ergonomia e visibilidade para rotas regionais
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              A <strong>Cabine P</strong> foi desenvolvida para operações em que
              o motorista entra e sai do veículo com frequência, mantendo
              conforto e segurança em médias distâncias. A altura de acesso
              reduzida facilita o dia a dia em entregas urbanas e regionais.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              O conjunto privilegia <strong>excelente visibilidade</strong>,{" "}
              <strong>facilidade de manobra</strong> e{" "}
              <strong>baixa fadiga</strong>, com versões que vão da cabine
              diurna à cabine leito para pernoites ocasionais em rotas
              estendidas.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-sky-50">
                <tr className="border-b border-slate-200">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Característica
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Vantagem operacional
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800">
                    Baixa altura de acesso
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Degraus baixos e bem posicionados, ideais para rotas com
                    muitas paradas e entregas.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <td className="px-4 py-3 text-slate-800">
                    Excelente visibilidade
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Posição de condução otimizada e amplo campo de visão,
                    aumentando a segurança em manobras urbanas.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800">
                    Cabine compacta e leve
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Menor peso próprio, contribuindo para maior carga útil do
                    conjunto.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-800">Versões</td>
                  <td className="px-4 py-3 text-slate-800">
                    Diurna e versões com leito (Sleeper) para frota regional que
                    exige pernoites.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bloco 2 – Motor D9 320 hp */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Motor D9 320 hp: eficiência no ciclo de distribuição
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O motor <strong>D9</strong> de 6 cilindros entrega{" "}
                <strong>320 hp</strong>, com alto torque em baixas rotações,
                ideal para retomadas com carga, rampas urbanas e rotas regionais
                com paradas frequentes.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Potência:</strong> 320 hp
                </li>
                <li>
                  <strong>Torque:</strong> alto torque em baixa rotação,
                  garantindo força nas retomadas.
                </li>
                <li>
                  <strong>Tecnologia de injeção:</strong> sistema XPI de alta
                  pressão, focado em economia de combustível e emissões
                  controladas (Euro 6 / Proconve P8).
                </li>
                <li>
                  <strong>Freio auxiliar:</strong> freio exaustor, com opção de{" "}
                  <strong>Retarder</strong> para maior segurança em descidas com
                  carga total.
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-emerald-900 mb-2">
                Foco em TCO e consumo
              </p>
              <p className="mb-2">
                A calibração do D9 prioriza o ciclo típico de distribuição:
                arranca e para, velocidade média moderada e operação combinada
                entre cidade e rodovias regionais.
              </p>
              <p>
                Isso permite que o P320 8x2 mantenha{" "}
                <strong>baixo consumo de diesel</strong>, com alta
                disponibilidade e intervalos de manutenção ajustados à
                realidade da frota.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 – Configuração 8x2 */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Configuração 8x2: carga útil máxima em caminhão rígido
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="mb-3">
                A configuração <strong>8x2</strong> utiliza{" "}
                <strong>quatro eixos</strong>, sendo um eixo
                auxiliar/direcional, permitindo maior Peso Bruto Total (PBT)
                dentro dos limites legais.
              </p>
              <ul className="space-y-2">
                <li>
                  • Maior carga útil em comparação com caminhões 6x2 da mesma
                  categoria.
                </li>
                <li>
                  • Melhor distribuição de peso sobre os eixos, protegendo
                  pavimento e atendendo à legislação de rodovias e centros
                  urbanos.
                </li>
                <li>
                  • Combinação ideal para carrocerias de grande volume:
                  frigoríficos, baús, sider, cargas fracionadas e bebidas.
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow-sm p-5">
              <p className="font-semibold mb-2">Eixo auxiliar levantável</p>
              <p className="mb-2">
                O eixo auxiliar pode ser levantado quando o veículo está vazio
                ou com carga parcial, reduzindo arraste e desgaste dos pneus.
              </p>
              <p>
                Resultado: <strong>menor consumo</strong> em retornos vazios e{" "}
                <strong>menor custo de pneus por km</strong>, ponto-chave em
                operações de distribuição de alto volume.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 4 – Tecnologias & serviços conectados */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Tecnologias integradas e serviços conectados
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-emerald-700 mb-1 uppercase">
                Opticruise
              </p>
              <p>
                Transmissão automatizada configurada para o ciclo regional,
                garantindo trocas de marcha suaves, economia e conforto ao
                motorista.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-emerald-700 mb-1 uppercase">
                Active Prediction (CCAP)
              </p>
              <p>
                Usa dados de GPS e topografia para ajustar velocidade e marcha
                em aclives e declives, reduzindo consumo em rodovias.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-emerald-700 mb-1 uppercase">
                Serviços conectados
              </p>
              <p>
                Telemática para monitorar consumo, estilo de condução,
                manutenção preditiva e disponibilidade da frota em tempo real.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 5 – Aplicações típicas */}
        <section id="aplicacoes">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Aplicações típicas do Scania P320 8x2
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-sky-50">
                <tr className="border-b border-slate-200">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Aplicação
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Destaque operacional
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    Distribuição de alto volume
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Ideal para bebidas, alimentos e produtos embalados que
                    utilizam todo o PBT legal.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    Carga seca / baú / sider
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Otimiza o espaço da carroceria em operações regionais com
                    muitas entregas.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    Tanques e cargas fracionadas
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Excelente para líquidos e mercadorias que exigem alta carga
                    útil distribuída em vários compartimentos.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    Serviços especializados
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Chassi base para guindastes, plataformas e aplicações
                    especiais que exigem estrutura robusta e alta carga útil.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – Scania P320 8x2
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-44">
                    Plataforma
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Caminhão rígido Scania P320 8x2, focado em distribuição de
                    alto volume e alta carga útil.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Cabine
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Cabine P (versões diurna e leito), com acesso facilitado e
                    excelente visibilidade para rotas urbanas e regionais.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    D9, 6 cilindros em linha, 320 hp, alto torque em baixas
                    rotações, tecnologia de injeção XPI (Euro 6 / P8).
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Transmissão automatizada Opticruise, com calibração para
                    ciclo de distribuição regional.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configuração de eixos
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    8x2 rígido com eixo auxiliar levantável, maximizando PBT
                    legal e carga útil, com redução de desgaste em retornos
                    vazios.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Freios auxiliares
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Freio exaustor e opção de Retarder, essenciais para descidas
                    com carga total e segurança operacional.
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Maximizar carga útil, eficiência e agilidade na distribuição
                    regional e urbana de alto volume, com baixo TCO e alta
                    disponibilidade da frota.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Texto de encerramento */}
<section className="mt-8 space-y-6">
  <p className="text-sm text-slate-700 max-w-xl">
    Este resumo do <strong>Scania P320 8x2</strong> foi estruturado para
    apoiar motoristas, frotistas e instrutores técnicos na escolha da
    melhor configuração de chassi, cabine e trem de força para
    distribuição de alto volume.
  </p>
</section>

{/* BLOCO FINAL – Materiais em PDF (padrão OTIAdriver) */}
<section id="ficha-tecnica" className="mt-10">
  <div className="grid gap-6 md:grid-cols-3">

    {/* PDF – Ficha técnica */}
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
      <h2 className="text-xl font-semibold text-slate-900 mb-2">
        Ficha técnica oficial – Scania P 320 B8x2NA (PDF)
      </h2>

      <p className="text-sm text-slate-700 mb-4">
        Consulte a ficha técnica oficial com dados completos do{" "}
        <strong>Scania P 320 B8x2NA</strong> para operações de distribuição,
        incluindo motor, transmissão, capacidades, dimensões e recomendações de aplicação.
      </p>

      <a
        href="/fichas-tecnicas/scania-p320-b8x2na.pdf"
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
        Guia com os principais símbolos do painel Scania, níveis de alerta,
        significados e ações recomendadas ao motorista durante a operação.
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
        Material com os principais interruptores, botões e comandos da cabine
        Scania para facilitar o uso correto dos sistemas do veículo.
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

    {/* PDF – Caixa de Câmbio Opticruise */}
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
      <h2 className="text-xl font-semibold text-slate-900 mb-2">
        Caixa de Câmbio Opticruise – Scania (PDF)
      </h2>

      <p className="text-sm text-slate-700 mb-4">
        Apostila técnica completa sobre a{" "}
        <strong>Caixa de Câmbio Opticruise da Scania</strong>, incluindo
        funcionamento, modos de operação, símbolos do painel,
        freio motor, manutenção e boas práticas de condução.
      </p>

      <a
        href="/fichas-tecnicas/caixa-de-cambio-opticruiser-scania.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
      >
        Abrir apostila Opticruise (PDF)
      </a>
    </div>

  </div>
</section>
</section>
    </main>
  );
}
