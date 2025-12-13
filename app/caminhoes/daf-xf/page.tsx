// app/caminhoes/daf-xf/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function DAFXFPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – padrão claro OTIAdriver */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.25fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
              Longa Distância Premium
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              DAF XF
              <span className="block text-sky-600 text-xl md:text-2xl mt-1">
                Eficiência, conforto e disponibilidade máxima para o transporte rodoviário
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O <strong>DAF XF</strong> foi desenvolvido para o transporte de
              longa distância com foco absoluto no motorista e no{" "}
              <strong>Custo Total de Propriedade (TCO)</strong>. Combina cabine
              extremamente confortável, motor <strong>PACCAR MX-13</strong> eficiente,
              transmissões automatizadas <strong>ZF TraXon</strong> e uma plataforma
              Euro 6 otimizada para entregar alta performance, baixo consumo e
              máxima disponibilidade operacional.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">480 cv • 530 cv</p>
                <p className="text-[11px] text-slate-600">
                  Motor PACCAR MX-13 13L
                </p>
              </div>
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">
                  Eficiência
                </p>
                <p className="text-lg font-bold text-slate-900">até 8%*</p>
                <p className="text-[11px] text-slate-600">
                  Economia de combustível com Euro 6 + PCC
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  Conforto
                </p>
                <p className="text-lg font-bold text-slate-900">
                  Super Space Cab
                </p>
                <p className="text-[11px] text-slate-600">
                  Um dos maiores espaços internos da categoria
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold border border-slate-300 text-slate-800 hover:bg-slate-100 transition"
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
                  src="/images/trucks/daf-xf.jpg" // certifique-se de que o arquivo está em /public/images/trucks/daf-xf.jpg
                  alt="DAF XF – caminhão rodoviário de longa distância"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa DAF XF – configuração rodoviária para longa
              distância.
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
              DAF XF: referência em eficiência de transporte
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O <strong>DAF XF</strong> é referência em{" "}
              <strong>eficiência de transporte</strong> graças ao torque elevado
              em baixas rotações, transmissões automatizadas otimizadas,
              eixos traseiros de elevada eficiência e um{" "}
              <strong>design aerodinâmico premium</strong>. O resultado é um
              caminhão pesado que alia performance, economia de combustível e
              conforto de alto nível para o motorista.
            </p>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              Com a nova plataforma <strong>Proconve P8 / Euro 6</strong>, o XF
              traz evoluções mecânicas e de software em relação à geração Euro 5,
              elevando ainda mais a robustez, a confiabilidade e a eficiência.
              Essa combinação, somada ao <strong>Controle de Cruzeiro Preditivo</strong>{" "}
              (PCC), possibilita até <strong>8% de economia de combustível</strong>
              e redução de emissões de CO₂ em operações reais.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Plataforma Euro 6
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Nova arquitetura Proconve P8 / Euro 6 altamente testada</li>
                <li>• Mais tecnologia eletrônica e de segurança embarcada</li>
                <li>• Até 2% de economia com otimizações mecânicas</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-emerald-600 mb-1 uppercase">
                Eficiência de combustível
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Controle de Cruzeiro Preditivo de série (PCC)</li>
                <li>• Até 6% de economia adicional com PCC</li>
                <li>• Resultado combinado: até 8% de redução de consumo*</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloco 2 – Cabines e conforto */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Cabines Space Cab e Super Space Cab – o melhor interior da categoria
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Space Cab
              </p>
              <p>
                Cabine de teto alto com excelente espaço vertical e ampla área
                de armazenamento. Ideal para motoristas que passam vários dias
                fora, com boa mobilidade interna e organização.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Super Space Cab
              </p>
              <p>
                Uma das cabines mais espaçosas do mercado, com{" "}
                <strong>maior volume interno</strong>, altura livre generosa e
                área de descanso otimizada. Focada em conforto máximo para
                viagens de longa distância e pernoites frequentes.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Conforto e ergonomia
              </p>
              <p>
                O interior do XF é considerado um dos melhores da categoria:
                painel envolvente, bancos com múltiplos ajustes, cama de alta
                qualidade, armários bem distribuídos e soluções de armazenamento
                que tornam o caminhão um verdadeiro local de trabalho e descanso.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 – Design exterior e aerodinâmica */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Design exterior: beleza, aerodinâmica e eficiência
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 text-sm text-slate-800">
              <p className="mb-3">
                Com um novo design, o <strong>DAF XF</strong> é frequentemente
                apontado como um dos caminhões mais bonitos da estrada. Mas o
                design não é apenas estético: diversos elementos externos foram
                estudados para melhorar a{" "}
                <strong>aerodinâmica e a eficiência de combustível</strong>.
              </p>
              <ul className="space-y-1.5">
                <li>• Linhas de cabine otimizadas para reduzir arrasto aerodinâmico.</li>
                <li>• Defletores, saias e detalhes de design que favorecem o fluxo de ar.</li>
                <li>• Conjunto frontal remodelado, com visual moderno e funcional.</li>
              </ul>
            </div>
            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow-sm p-5 text-sm">
              <p className="font-semibold mb-2">
                Evolução do “melhor caminhão de sempre”
              </p>
              <p>
                A nova geração do XF parte de uma base já reconhecida no mercado
                e adiciona melhorias em design, aerodinâmica, motor, transmissão
                e eletrônica. O objetivo é claro:{" "}
                <strong>mais economia, mais conforto e mais produtividade</strong>{" "}
                em cada quilômetro rodado.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 4 – Motorização PACCAR MX-13 */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Motor PACCAR MX-13: torque elevado e freio motor de referência
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O motor <strong>PACCAR MX-13</strong> de 13 litros foi projetado
                para combinar alto torque em baixas rotações com emissões
                reduzidas e consumo otimizado. É o primeiro passo para alcançar
                uma <strong>eficiência de combustível líder de mercado</strong>.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Família de motores:</strong> PACCAR MX-13 13L com
                  novas potências, incluindo versões de 480 e 530 cv.
                </li>
                <li>
                  <strong>Torque:</strong> ainda maior em rotações mais baixas,
                  permitindo rodar em torno de 900 rpm com baixo ruído e alta
                  eficiência.
                </li>
                <li>
                  <strong>Inovações internas:</strong> novo pacote de anéis de
                  pistão, desenho de pistão otimizado, novo turbocompressor e
                  novo sistema de injeção, reduzindo fricção e consumo.
                </li>
                <li>
                  <strong>Freio motor MX Engine Brake:</strong> potência de
                  frenagem de classe mundial, chegando a cerca de 490 cv em
                  rotações elevadas, preservando os freios de serviço.
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-amber-900 mb-2">
                Modo Eco e estratégias de consumo
              </p>
              <p className="mb-2">
                O XF oferece modos de condução voltados para{" "}
                <strong>máxima economia de combustível</strong>. O{" "}
                <strong>Modo Eco</strong> e o{" "}
                <strong>Modo Eco de Combustível</strong> priorizam trocas de
                marchas em rotações mais baixas e estratégias que equilibram
                dirigibilidade com o menor consumo possível.
              </p>
              <p>
                O objetivo é simples:{" "}
                <strong>extrair o máximo de cada gota de diesel</strong>,
                reduzindo custos operacionais sem comprometer desempenho.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 5 – Transmissão ZF TraXon e tecnologias de condução */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Transmissão ZF TraXon e Controle de Cruzeiro Preditivo
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Nova geração ZF TraXon 12v
              </p>
              <p>
                A nova geração de caixas automatizadas{" "}
                <strong>TraXon de 12 velocidades</strong> reduz perdas por
                fricção, realiza trocas mais rápidas em marchas superiores e
                permite uso prolongado do EcoRoll. Tudo isso contribui para
                menor consumo, mais conforto e trocas precisas de marcha.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Modos de condução e EcoRoll
              </p>
              <p>
                Modos de condução otimizados permitem adaptar o conjunto à
                realidade da rota. A função <strong>EcoRoll</strong> amplia o
                tempo em que o veículo roda em embalo, reduzindo o esforço do
                motor e o consumo de combustível em trechos favoráveis.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Controle de Cruzeiro Preditivo (PCC)
              </p>
              <p>
                O <strong>Controle de Cruzeiro Preditivo</strong> utiliza dados
                de GPS e topografia para antecipar aclives e declives, ajustando
                velocidade e trocas de marcha de forma inteligente. Isso
                potencializa a economia de combustível e melhora o controle do
                veículo em percursos variáveis.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 6 – Máxima disponibilidade operacional e menores custos de reparo */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Máxima disponibilidade operacional e menor custo de reparo
          </h2>
          <div className="grid md:grid-cols-2 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="mb-3">
                O caminhão DAF sempre foi reconhecido pela{" "}
                <strong>alta confiabilidade</strong>. Com a nova arquitetura
                elétrica e eletrônica, o XF leva esse desempenho a outro nível.
              </p>
              <ul className="space-y-1.5">
                <li>
                  • Chicotes elétricos e conexões redesenhados, com roteamento
                  reduzido e simplificado.
                </li>
                <li>
                  • Maior flexibilidade para instalação de acessórios auxiliares
                  sem comprometer o sistema elétrico.
                </li>
                <li>
                  • Menor probabilidade de falhas elétricas e elétronicas ao
                  longo da vida útil.
                </li>
              </ul>
              <p className="mt-2">
                Resultado: <strong>disponibilidade máxima</strong> do veículo ao{" "}
                <strong>menor custo operacional</strong>, com menos paradas
                não programadas.
              </p>
            </div>
            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow-sm p-5">
              <p className="text-xs font-semibold text-amber-300 mb-1 uppercase">
                Itens pensados para reduzir desgaste
              </p>
              <ul className="space-y-1.5">
                <li>
                  • Controle da embreagem dentro da própria carcaça, protegido
                  contra água e sujeira.
                </li>
                <li>
                  • Alternador com controle eletrônico, otimizando o
                  carregamento das baterias.
                </li>
                <li>
                  • Componentes projetados para maior durabilidade em uso
                  intensivo.
                </li>
              </ul>
              <p className="mt-2">
                Essas inovações ajudam a reduzir os{" "}
                <strong>custos de reparo e manutenção</strong>, aumentando a
                lucratividade ao longo do ciclo de vida do XF.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 7 – Eixos traseiros de elevada eficiência e TCO */}
        <section id="configuracoes">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Configurações típicas, eixos eficientes e foco em baixo TCO
          </h2>

          <p className="text-sm md:text-base text-slate-700 mb-3">
            Além de novos motores e transmissões automatizadas de alta
            performance, o DAF XF traz <strong>eixos traseiros de elevada
            eficiência</strong>, com uma gama de relações mais rápidas (a partir
            de 2,64) que permitem rotações mais baixas do motor em velocidade de
            cruzeiro. Isso aumenta a eficiência energética e reduz o consumo.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mt-4">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-sky-50">
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-sky-900">
                    Configuração
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-sky-900">
                    Aplicação principal
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-sky-900">
                    Foco operacional
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    4x2 cavalo-mecânico
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Semirreboques leves/médios em rotas mais planas e cargas de
                    menor PBTC.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Menor peso próprio, consumo reduzido e foco em baixo TCO.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    6x2 cavalo-mecânico
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Longa distância com maior capacidade legal de carga (eixos
                    adicionais).
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Otimização de carga útil por viagem, mantendo boa economia.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-800 font-medium">
                    6x4 cavalo-mecânico
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Altos PBTC, bitrens e rodotrens em rotas exigentes e com
                    aclives acentuados.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Máxima tração e durabilidade do trem de força em composições
                    pesadas.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm text-slate-700">
            Em todas as configurações, o projeto do DAF XF busca reduzir{" "}
            <strong>paradas não programadas</strong>, ampliar os{" "}
            <strong>intervalos de serviço</strong> e entregar uma plataforma
            competitiva em <strong>TCO</strong> para frotas de alta
            quilometragem anual.
          </p>
        </section>

        {/* Bloco 8 – Segurança e ADAS */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Segurança ativa e passiva para motorista e carga
          </h2>
          <div className="grid md:grid-cols-2 gap-5 text-sm text-slate-800">
            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow-sm p-5">
              <p className="text-xs font-semibold text-amber-300 mb-1 uppercase">
                Sistemas ADAS (assistência ao motorista)
              </p>
              <ul className="space-y-1.5">
                <li>• Controle de Cruzeiro Adaptativo (ACC)</li>
                <li>• Frenagem de Emergência Avançada (AEBS)</li>
                <li>• Alerta de Saída de Faixa (LDWS)</li>
                <li>• Recursos que ajudam a reduzir acidentes e fadiga</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Estrutura e visibilidade
              </p>
              <ul className="space-y-1.5">
                <li>
                  • Cabine em aço de alta resistência, com padrões de segurança
                  europeus.
                </li>
                <li>
                  • Amplo para-brisa e retrovisores bem posicionados, garantindo
                  excelente visibilidade do entorno.
                </li>
                <li>
                  • Itens que contribuem para maior proteção do motorista e da
                  carga em diferentes cenários de operação.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – DAF XF
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 w-44">
                    Plataforma
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Cavalo-mecânico rodoviário focado em transporte de longa
                    distância, com cabines Space Cab e Super Space Cab e
                    plataforma Proconve P8 / Euro 6.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    PACCAR MX-13 13L, alto torque em baixa rotação, com
                    inovações internas (pistões, anéis, turbo, injeção) e
                    pós-tratamento de emissões para máxima eficiência.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Potência / torque
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Potências típicas de 480 cv e 530 cv, com torque elevado
                    disponível em rotações baixas, favorecendo economia e
                    desempenho em aclives e retomadas.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Caixa automatizada ZF TraXon 12 velocidades de nova geração,
                    com EcoRoll, modos de condução e integração ao Controle de
                    Cruzeiro Preditivo.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Eixos traseiros
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Eixos de elevada eficiência com relações mais rápidas
                    (a partir de 2,64), permitindo rotações mais baixas em
                    velocidade de cruzeiro e contribuindo para menor consumo de
                    combustível.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configurações
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Configurações 4x2, 6x2 e 6x4, conforme aplicação, PBTC e
                    tipo de composição (carretas simples, bitrens, rodotrens).
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Cabines
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Space Cab e Super Space Cab, com foco em ergonomia, área de
                    descanso, espaço interno e qualidade de acabamento.
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Segurança
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Sistemas ADAS como ACC, AEBS e LDWS (conforme versão),
                    cabine reforçada e itens de visibilidade, contribuindo para
                    segurança ativa e passiva.
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Foco operacional
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Longa distância com alta eficiência de combustível, conforto
                    máximo ao motorista, elevada disponibilidade mecânica e baixo
                    Custo Total de Propriedade em frotas de grande porte.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            *Valores de economia de combustível dependem de configuração, rota,
            carga, estilo de condução e condições reais de operação.
          </p>
        </section>

        {/* BLOCO FINAL – Materiais Técnicos DAF XF (PDFs) */}
<section id="ficha-tecnica" className="mt-8">
  <div className="grid gap-6 md:grid-cols-3">

    {/* Ficha Técnica DAF XF */}
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[240px]">
      <h2 className="text-xl font-semibold text-slate-900 mb-2">
        Ficha técnica oficial – DAF XF (PDF)
      </h2>

      <p className="text-sm text-slate-700 mb-4">
        Consulte os dados completos de dimensões, capacidades, motor,
        transmissão, relações de eixo e desempenho do{" "}
        <strong>DAF XF</strong> diretamente no material oficial do fabricante.
      </p>

      <a
        href="/fichas-tecnicas/daf-xf.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
      >
        Abrir ficha técnica (PDF)
      </a>
    </div>

    {/* Guia de Interruptores DAF */}
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[240px]">
      <h2 className="text-xl font-semibold text-slate-900 mb-2">
        Guia de Interruptores – DAF XF (PDF)
      </h2>

      <p className="text-sm text-slate-700 mb-4">
        Material oficial com a identificação completa dos interruptores,
        botões e comandos do <strong>DAF XF</strong>. Ideal para treinamentos,
        motoristas e instrutores.
      </p>

      <a
        href="/fichas-tecnicas/Interruptores-DAF.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
      >
        Abrir guia de interruptores (PDF)
      </a>
    </div>

    {/* Luzes do Painel DAF */}
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[240px]">
      <h2 className="text-xl font-semibold text-slate-900 mb-2">
        Luzes do Painel – Caminhões DAF (PDF)
      </h2>

      <p className="text-sm text-slate-700 mb-4">
        Guia oficial de luzes e símbolos do painel dos caminhões DAF.
        Essencial para identificar alertas, compreender significados e
        agir corretamente durante a operação.
      </p>

      <a
        href="/fichas-tecnicas/luzes-painel-DAF.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
      >
        Abrir guia de luzes do painel (PDF)
      </a>
    </div>

  </div>
</section>
