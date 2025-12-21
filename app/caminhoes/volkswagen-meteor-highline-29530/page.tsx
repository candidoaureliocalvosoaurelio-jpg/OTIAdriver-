// app/caminhoes/volkswagen-meteor-highline-29530/page.tsx
// (com o link para a página "caixa-volkswagen" no mesmo padrão do bloco Scania)

import Image from "next/image";
import Link from "next/link";

export default function VolkswagenMeteorHighline29530Page() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – padrão claro OTIAdriver, igual FH/Scania */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
              Linha Extrapesada Conectada
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Volkswagen Meteor Highline 29.530
              <span className="block text-sky-600 text-xl md:text-2xl mt-1">
                o Gigante 6x4 conectado ao futuro.
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O Meteor Highline 29.530 é o cavalo-mecânico extrapesado 6x4 da
              Volkswagen Caminhões e Ônibus, equipado com trem de força MAN de{" "}
              <strong>13 litros e 530 cv</strong>, transmissão automatizada
              V-Tronic e pacote de conectividade avançado. Foi projetado para
              operações rodoviárias de médias e longas distâncias com alto PBTC
              e foco em desempenho, economia e tecnologia embarcada.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">530 cv</p>
                <p className="text-[11px] text-slate-600">MAN D26, 13 litros</p>
              </div>

              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Torque
                </p>
                <p className="text-lg font-bold text-slate-900">2.600 Nm</p>
                <p className="text-[11px] text-slate-600">
                  Faixa útil entre 930–1.350 rpm
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  PBTC homologado
                </p>
                <p className="text-lg font-bold text-slate-900">74 t</p>
                <p className="text-[11px] text-slate-600">
                  Transporte rodoviário extrapesado
                </p>
              </div>
            </div>

            {/* ÚNICO botão — ver ficha técnica */}
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
                  src="/images/trucks/volkswagen-meteor-highline-29530.jpg"
                  alt="Volkswagen Meteor Highline 29.530 – cavalo-mecânico extrapesado 6x4"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa Volkswagen Meteor Highline 29.530 6x4 —
              aplicação rodoviária extrapesada.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Bloco 1 – Trem de força MAN D26 */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Trem de força MAN D26 – potência com eficiência
            </h2>

            <p className="text-sm md:text-base text-slate-700 mb-3">
              O Meteor 29.530 é impulsionado pelo motor{" "}
              <strong>MAN D26 de 13 litros</strong>, desenvolvido para unir alta
              potência, elevado torque em baixa rotação e consumo otimizado de
              combustível. A calibração atende ao <strong>Proconve P8</strong>,
              utilizando combinação de EGR e SCR para controle de emissões sem
              abrir mão da performance.
            </p>

            <p className="text-sm md:text-base text-slate-700">
              A faixa de torque plano, com até{" "}
              <strong>2.600 Nm entre 930 e 1.350 rpm</strong>, favorece
              arrancadas suaves, retomadas com composições pesadas e menor
              necessidade de trocas de marcha em aclives, contribuindo para um
              rodar mais econômico e confortável para o motorista.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Destaques do motor
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Cilindrada de 13 L, arquitetura MAN D26.</li>
                <li>• 530 cv de potência máxima em 1.800 rpm.</li>
                <li>• Curva de torque ampla para melhor dirigibilidade.</li>
              </ul>
            </div>

            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Eficiência energética
              </p>
              <p className="text-sm text-slate-800">
                Estrutura do trem de força foi concebida para reduzir consumo e
                emissões, garantindo alta disponibilidade e atendendo às
                exigências ambientais mais recentes.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 2 – Transmissão V-Tronic e desempenho */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Transmissão V-Tronic de 12 marchas – inteligência nas trocas
          </h2>

          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                A transmissão automatizada{" "}
                <strong>V-Tronic de 12 marchas</strong> (ZF 12TX) trabalha em
                sinergia com o motor MAN D26, aplicando estratégias de troca que
                priorizam eficiência, conforto e proteção do trem de força.
              </p>

              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Software de trocas preditivas:</strong> recurso que
                  pode proporcionar até cerca de 5% de redução no consumo de
                  combustível, adaptando a marcha à topografia da rota.
                </li>
                <li>
                  <strong>Operação automatizada:</strong> reduz esforço do
                  motorista no tráfego intenso e em viagens longas.
                </li>
                <li>
                  <strong>Integração com sistemas eletrônicos:</strong>{" "}
                  gerenciamento do motor, freios auxiliares e controle de tração
                  para máxima segurança.
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-sky-900 mb-2">
                Desempenho em composições de 74 t
              </p>
              <p className="mb-2">
                Com PBTC homologado de <strong>74 toneladas</strong>, o Meteor
                29.530 foi pensado para conjuntos extrapesados que exigem alto
                desempenho em aclives e constância de velocidade em longas
                distâncias.
              </p>
              <p>
                A combinação de potência, torque elevado e gestão eletrônica da
                transmissão contribui para prazos de entrega mais previsíveis e
                menor custo por tonelada transportada.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 – Tecnologia e conectividade */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Painel digital, multimídia e conectividade de última geração
          </h2>

          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Painel 100% digital
              </p>
              <p>
                Display de <strong>10 polegadas</strong>, totalmente digital,
                com visual moderno, alta legibilidade e dezenas de funções de
                monitoramento do veículo e da viagem.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Central multimídia 7"
              </p>
              <p>
                Tela sensível ao toque de 7", com espelhamento de smartphone,
                entretenimento, comandos intuitivos e integração com assistentes
                de voz como Google e Siri.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Conectividade e gestão
              </p>
              <p>
                Plataforma de conectividade que permite monitorar dados do
                veículo em tempo real, apoiando a gestão de frota, análise de
                consumo e otimização de rotas.
              </p>
            </div>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-4 text-sm text-slate-800">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Pacote Prime
              </p>
              <p>
                Configurações mais completas trazem pacote tecnológico com
                painel digital avançado, multimídia moderna e recursos de
                conectividade ampliados, elevando o patamar de conforto e gestão
                da operação.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 text-sm text-slate-800">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Carregador por indução
              </p>
              <p>
                Mantém o smartphone carregado durante todo o trajeto, sem cabos,
                garantindo que os recursos de conectividade estejam sempre
                disponíveis para o motorista e para a gestão de frota.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 4 – Conforto, suspensão e aplicação */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Conforto a bordo, suspensão pneumática e aplicações ideais
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-600 mb-1 uppercase">
                Conforto do motorista
              </p>
              <ul className="space-y-1.5">
                <li>• Cabine Highline com amplo espaço interno.</li>
                <li>• Geladeira de série para maior autonomia em rota.</li>
                <li>• Basculamento elétrico da cabine.</li>
                <li>
                  • Volante multifuncional e ergonomia focada em longas
                  distâncias.
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 rounded-2xl border border-sky-100 shadow-sm p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
                Suspensão e aplicação
              </p>
              <p className="mb-2">
                Opções de <strong>suspensão 100% pneumática</strong>, com quatro
                bolsas por eixo, controle de distribuição de carga e sistema
                snap-on que facilita manutenção e aumenta a disponibilidade do
                veículo.
              </p>
              <p>
                Ideal para transporte rodoviário de carga em médias e longas
                distâncias, com foco em cargas de alto volume e elevado PBTC,
                preservando veículo e carga ao longo da operação.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 5 – Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – Volkswagen Meteor Highline 29.530
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-40">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    MAN D26, 13 litros, diesel, calibrado para alto torque em
                    baixa rotação e atendimento ao Proconve P8.
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Potência
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Aproximadamente 530 cv em 1.800 rpm.
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Torque
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Até cerca de 2.600 Nm, com faixa útil entre 930–1.350 rpm,
                    favorecendo desempenho em rampas com composições pesadas.
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    V-Tronic automatizada de 12 marchas (ZF 12TX), com trocas
                    preditivas e modos específicos para economia de combustível.
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Tração / PBTC
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Configuração <strong>6x4</strong> com PBTC homologado de até{" "}
                    <strong>74 toneladas</strong>, para composições rodoviárias
                    extrapesadas.
                  </td>
                </tr>

                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Suspensão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Opções de suspensão pneumática integral, com quatro bolsas
                    por eixo e controle eletrônico de distribuição de carga.
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-sky-50">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Cabine
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Cabine Highline com painel digital 10", multimídia 7",
                    volante multifuncional, geladeira e ampla ergonomia para
                    viagens longas.
                  </td>
                </tr>

                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Transporte rodoviário de médias e longas distâncias, com
                    elevado PBTC, alta conectividade e forte controle de custo
                    por quilômetro rodado.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BLOCO FINAL – Materiais de apoio (PDF) + Link para página Caixa Volkswagen */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Materiais de apoio (PDF) e conteúdo completo
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* PDF – Ficha técnica */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Ficha técnica oficial – Volkswagen Meteor Highline 29.530 (PDF)
              </h3>

              <p className="text-sm text-slate-700 mb-4">
                Consulte a ficha técnica oficial com dados completos de motor,
                transmissão, eixos, capacidades, dimensões e itens de série do{" "}
                <strong>Meteor Highline 29.530</strong>.
              </p>

              <a
                href="/fichas-tecnicas/volkswagen-meteor-highline-29530.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir ficha técnica (PDF)
              </a>
            </div>

            {/* PDF – Luzes de aviso */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Luzes de Aviso – Volkswagen Caminhões (PDF)
              </h3>

              <p className="text-sm text-slate-700 mb-4">
                Guia oficial com luzes de aviso e símbolos do painel Volkswagen.
                Essencial para interpretar alertas e agir corretamente.
              </p>

              <a
                href="/fichas-tecnicas/luzes-aviso-vw.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir guia de luzes (PDF)
              </a>
            </div>

            {/* LINK – Página Caixa Volkswagen */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[280px]">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Página completa – Caixa Volkswagen (V-Tronic)
              </h3>

              <p className="text-sm text-slate-700 mb-4">
                Acesse a página técnica completa com explicação do funcionamento
                da transmissão V-Tronic, modos de operação, boas práticas e
                sinais de atenção.
              </p>

              <Link
                href="/caminhoes/volkswagen/caixa-volkswagen"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
              >
                Acessar página da Caixa Volkswagen
              </Link>
            </div>
          </div>

          {/* CTA FINAL – Destaque máximo para Caixa Volkswagen */}
          <section className="mt-14 rounded-3xl bg-slate-900 p-8 md:p-10 shadow-xl">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Quer se aprofundar na transmissão V-Tronic?
              </h3>

              <p className="mt-2 max-w-2xl text-slate-300">
                Acesse o conteúdo completo com funcionamento, modos de operação,
                boas práticas e pontos de atenção para reduzir consumo e
                aumentar a vida útil do conjunto.
              </p>

              <div className="mt-6">
                <Link
                  href="/caminhoes/volkswagen/caixa-volkswagen"
                  className="inline-flex items-center justify-center rounded-2xl
                             bg-gradient-to-r from-sky-600 to-blue-700
                             px-12 py-4 text-base font-extrabold text-white
                             shadow-lg shadow-sky-600/30
                             hover:from-sky-700 hover:to-blue-800
                             hover:shadow-xl hover:shadow-sky-700/40
                             focus:outline-none focus:ring-4 focus:ring-sky-300
                             transition-all duration-200"
                >
                  Acessar página completa Caixa Volkswagen
                </Link>
              </div>
            </div>
          </section>
        </section>
    </main>
  );
}
