// app/caminhoes/volkswagen-constellation-26320-6x2/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function VolkswagenConstellation26320Page() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – padrão claro OTIAdriver, igual Scania Super */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
              Linha Semipesado Constellation
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Volkswagen Constellation 26.320 6x2
              <span className="block text-sky-600 text-xl md:text-2xl mt-1">
                nova geração com mais eficiência, segurança e tecnologia.
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O <strong>VW Constellation 26.320 6x2</strong> é o líder de vendas
              da nova geração Constellation, combinando motor D08 de 320 cv,
              opções de transmissão manual ou <strong>V-Tronic</strong> e um
              pacote de segurança ativa de série. Projetado para quem precisa
              de alta disponibilidade, conforto de condução e baixo custo
              operacional em rotas regionais e de distribuição.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">320 cv</p>
                <p className="text-[11px] text-slate-600">
                  Motor MAN D08 6 cilindros
                </p>
              </div>
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Torque
                </p>
                <p className="text-lg font-bold text-slate-900">1.200 Nm</p>
                <p className="text-[11px] text-slate-600">
                  Faixa útil entre 1.200–1.700 rpm
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  Segurança ativa
                </p>
                <p className="text-lg font-bold text-slate-900">
                  Itens de série
                </p>
                <p className="text-[11px] text-slate-600">
                  HSA, ESC e controle de tração
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
                  src="/images/trucks/vw-constellation-26320-6x2.jpg"
                  alt="Volkswagen Constellation 26.320 6x2 – caminhão semipesado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa Volkswagen Constellation 26.320 6x2 – nova
              geração semipesado.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* 1 – Eficiência e performance */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Eficiência e performance com o motor D08 de 320 cv
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O Constellation 26.320 6x2 utiliza o motor{" "}
              <strong>MAN D08, 6 cilindros</strong>, com potência de{" "}
              <strong>320 cv</strong> e torque máximo de{" "}
              <strong>1.200 Nm</strong>, atendendo à legislação{" "}
              <strong>Proconve P8 (Euro 6)</strong> por meio de sistema de
              emissões <strong>SCR</strong>. É um conjunto calibrado para
              oferecer boa força em rampas, retomadas eficientes e consumo de
              combustível competitivo no segmento semipesado.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              A combinação de motor moderno, gerenciamento eletrônico e
              transmissões de 9 ou 12 marchas permite operação flexível em
              rotas urbanas, rodovias duplicadas e corredores logísticos de
              média distância.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Opções de transmissão
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Câmbio manual ZF de 9 marchas.</li>
                <li>• Câmbio automatizado V-Tronic de 12 marchas.</li>
                <li>• Calibração focada em economia e suavidade.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Benefícios para a frota
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Melhor performance nas operações de carga geral.</li>
                <li>• Redução de consumo e emissões.</li>
                <li>• Adequado a diferentes perfis de rota e motorista.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2 – Segurança ativa de série */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Segurança ativa de série para operações mais tranquilas
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-emerald-600 mb-1 uppercase">
                Assistente de partida em rampa (HSA)
              </p>
              <p>
                Mantém o veículo parado por alguns segundos em aclives, evitando
                recuos indesejados e facilitando as saídas em rampas com carga
                total.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-emerald-600 mb-1 uppercase">
                Controle de estabilidade (ESC)
              </p>
              <p>
                Auxilia na estabilidade em curvas e desvios bruscos,
                reduzindo o risco de perda de controle em manobras de
                emergência.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-emerald-600 mb-1 uppercase">
                Controle de tração (ASR)
              </p>
              <p>
                Identifica perda de aderência e gerencia torque e frenagem nas
                rodas motrizes, mantendo a capacidade trativa em piso molhado ou
                escorregadio.
              </p>
            </div>
          </div>
        </section>

        {/* 3 – Tecnologia Highline opcional */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Tecnologia e conectividade – pacote Highline opcional
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 text-sm text-slate-800">
              <p className="mb-3">
                O pacote <strong>Highline</strong> transforma a cabine em um
                ambiente digital e conectado, com foco em visibilidade das
                informações e integração com o motorista.
              </p>
              <ul className="space-y-2">
                <li>
                  • <strong>Painel de instrumentos 100% digital</strong> com
                  tela de 10", personalizável, intuitivo e com mais de 80
                  funcionalidades.
                </li>
                <li>
                  • <strong>Central multimídia de 7"</strong> com espelhamento
                  de smartphone e suporte a assistentes de voz.
                </li>
                <li>
                  • Interface sensível ao toque integrada ao painel, permitindo
                  acessar dados do veículo com poucos cliques.
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-sky-900 mb-2">
                Gestão e experiência do motorista
              </p>
              <p>
                A combinação de painel digital, multimídia e conectividade
                facilita o monitoramento da operação, melhora a experiência do
                motorista e contribui para um uso mais racional do veículo no
                dia a dia.
              </p>
            </div>
          </div>
        </section>

        {/* 4 – Conforto, durabilidade e acabamento */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Conforto de longa jornada e robustez estrutural
          </h2>
          <div className="grid md:grid-cols-2 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Itens de conforto
              </p>
              <ul className="space-y-1.5">
                <li>• Banco do motorista premium com suspensão pneumática.</li>
                <li>• Ajuste lombar e múltiplas regulagens.</li>
                <li>
                  • Volante multifuncional com ajuste de altura e profundidade.
                </li>
                <li>
                  • Ar-condicionado, trio elétrico, rádio com bluetooth,
                  suporte de celular, entradas USB e USB-C.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Durabilidade e visibilidade
              </p>
              <ul className="space-y-1.5">
                <li>• Suspensão dianteira parabólica reforçada.</li>
                <li>• Suspensão de cabine com 4 pontos de amortecimento.</li>
                <li>
                  • DRL integrado aos faróis e lanternas em LED para maior
                  visibilidade e segurança.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5 – Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – VW Constellation 26.320 6x2
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-40">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    MAN D08 – 6 cilindros em linha, 320 cv, 1.200 Nm de torque,
                    com sistema SCR para atendimento ao Proconve P8 (Euro 6).
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissões
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Câmbio manual de 9 marchas ou automatizado V-Tronic de 12
                    marchas, com alavanca na coluna de direção.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Tração / configuração
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    6x2 com eixo auxiliar levantável, voltado para distribuição
                    regional e urbana de alto volume.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Segurança ativa
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Assistente de partida em rampa (HSA), controle de
                    estabilidade (ESC) e controle de tração (ASR) como itens de
                    série.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Conforto e cabine
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Banco pneumático, volante multifuncional, ar-condicionado,
                    cabine com suspensão em 4 pontos e opções de pacote
                    Highline com painel digital e multimídia.
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Distribuição regional e urbana de alto volume, operações de
                    carga geral e rotas mistas que exigem equilíbrio entre
                    capacidade de carga, consumo e conforto ao motorista.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bloco final – PDFs oficiais 26.320 e 30.320 8x2 */}
        <section className="mt-10 space-y-6">
          {/* PDF – Ficha técnica oficial Volkswagen Constellation 26.320 6x2 */}
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h2 className="text-2xl font-bold mb-2 text-slate-900">
              Ficha técnica oficial – Volkswagen Constellation 26.320 6x2 (PDF)
            </h2>

            <p className="text-sm text-slate-700">
              Consulte a ficha técnica oficial da Volkswagen Caminhões e Ônibus
              para obter todos os dados de motor, transmissões, capacidades,
              dimensões e configurações disponíveis do Constellation 26.320 6x2.
            </p>

            <div className="mt-4">
              <a
                href="/fichas-tecnicas/vw-constellation-26320-6x2.pdf"
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

          {/* PDF – Ficha técnica oficial Volkswagen Constellation 30.320 8x2 */}
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h2 className="text-2xl font-bold mb-2 text-slate-900">
              Ficha técnica oficial – Volkswagen Constellation 30.320 8x2 (PDF)
            </h2>

            <p className="text-sm text-slate-700 mb-4">
              Acesse a ficha técnica oficial do VW Constellation 30.320 8x2 com
              dados completos de motor, transmissão, capacidades, dimensões e
              configurações para dimensionamento correto da frota.
            </p>

            <a
              href="/fichas-tecnicas/vw-constellation-30320-8x2.pdf"
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
        </section>
        {/* Bloco final – Luzes de Aviso Volkswagen (PDF) */}
<section className="mt-6">
  <div className="p-6 rounded-2xl border shadow-sm bg-white">
    <h2 className="text-2xl font-bold mb-2 text-slate-900">
      Luzes de Aviso – Volkswagen Caminhões (PDF)
    </h2>

    <p className="text-sm text-slate-700">
      Consulte o guia oficial de luzes de aviso e símbolos do painel dos 
      caminhões Volkswagen. Material essencial para identificar alertas, 
      entender significados e agir corretamente durante a operação.
    </p>

    <div className="mt-4">
      <a
        href="/fichas-tecnicas/luzes-aviso-vw.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-blue-500 text-xs font-bold">
          PDF
        </span>
        Abrir guia de luzes de aviso (PDF)
      </a>
    </div>
  </div>
</section>
</section>
    </main>
  );
}
      </section>
    </main>
  );
}
