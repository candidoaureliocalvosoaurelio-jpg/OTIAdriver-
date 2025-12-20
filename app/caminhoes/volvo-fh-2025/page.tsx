// app/caminhoes/volvo-fh-2025/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Volvo FH | OTIAdriver",
  description:
    "Ficha técnica completa do Volvo FH: motores D13C, transmissão I-Shift, eixos traseiros, conforto de cabine e aplicações rodoviárias.",
};

type TableRow = {
  label: string;
  values: string[];
};

type SpecTableProps = {
  title: string;
  headers: string[];
  rows: TableRow[];
};

const engineTable: SpecTableProps = {
  title: "Motores D13C – Linha Volvo FH",
  headers: ["MOTORES", "D13C420", "D13C460", "D13C500", "D13C540"],
  rows: [
    {
      label: "Aplicação",
      values: ["Todas", "Todas", "Todas", "Todas"],
    },
    {
      label: "Tipo de injeção",
      values: [
        "Injeção direta com unidades injetoras e gerenciamento eletrônico",
        "Injeção direta com unidades injetoras e gerenciamento eletrônico",
        "Injeção direta com unidades injetoras e gerenciamento eletrônico",
        "Injeção direta com unidades injetoras e gerenciamento eletrônico",
      ],
    },
    {
      label: "Potência",
      values: [
        "420 cv – 309 kW (1400 – 1900 rpm)",
        "460 cv – 338 kW (1400 – 1900 rpm)",
        "500 cv – 368 kW (1400 – 1900 rpm)",
        "540 cv – 397 kW (1450 – 1900 rpm)",
      ],
    },
    {
      label: "Torque",
      values: [
        "2100 Nm (214 kgfm) @ 1000 – 1400 rpm",
        "2300 Nm (235 kgfm) @ 1000 – 1400 rpm",
        "2500 Nm (255 kgfm) @ 1050 – 1400 rpm",
        "2600 Nm (265 kgfm) @ 1050 – 1450 rpm",
      ],
    },
    {
      label: "Cilindros",
      values: ["6", "6", "6", "6"],
    },
    {
      label: "Cilindrada",
      values: [
        "12,8 dm³ (litros)",
        "12,8 dm³ (litros)",
        "12,8 dm³ (litros)",
        "12,8 dm³ (litros)",
      ],
    },
    {
      label: "Freio-motor",
      values: ["VEB410 / VEB510 (opc.)", "VEB410 / VEB510 (opc.)", "VEB510", "VEB510"],
    },
  ],
};

const transmissionTable: SpecTableProps = {
  title: "Transmissão I-Shift – Caixa AT/ATO 2612F",
  headers: [
    "TRANSMISSÃO",
    "AT2612F",
    "ATO2612F (super-reduzida)",
    "AT2612F (super-reduzida)",
  ],
  rows: [
    {
      label: "Motorização",
      values: ["Todas", "6×4 / 8×4", "6×4 / 8×4"],
    },
    {
      label: "Tipo",
      values: ["Automatizada", "Automatizada (overdrive)", "Automatizada"],
    },
    {
      label: "Troca de marchas",
      values: ["Manual ou automático", "Manual ou automático", "Manual ou automático"],
    },
    {
      label: "Nº de marchas à frente",
      values: ["12", "13 (12 + 1 super-reduzida)", "14 (12 + 2 super-reduzida)"],
    },
    {
      label: "Nº de marchas à ré",
      values: ["4", "6", "6"],
    },
    {
      label: "Relação 1ª / última marcha",
      values: ["14,94 / 1,00", "11,73 / 0,78", "14,94 / 1,00"],
    },
    {
      label: "Relação(ões) super-reduzida(s)",
      values: ["–", "17,54", "32,04 / 19,38"],
    },
  ],
};

const rearAxleTable: SpecTableProps = {
  title: "Eixos Traseiros – Aplicações Volvo FH",
  headers: [
    "EIXOS TRASEIROS",
    "RSS1360",
    "RSH1370F",
    "RTS2370A",
    "RTH2610F",
    "RTH3210F",
    "RTH3312",
  ],
  rows: [
    {
      label: "Aplicação",
      values: ["4×2 / 6×2 / 8×2", "4×2 / 6×2 / 8×2", "6×4", "6×4 / 8×4", "6×4", "6×4"],
    },
    {
      label: "Tipo",
      values: [
        "Simples velocidade",
        "Simples velocidade",
        "Simples velocidade",
        "Simples velocidade",
        "Simples velocidade",
        "Simples velocidade",
      ],
    },
    {
      label: "Redução nos cubos",
      values: ["Não", "Sim", "Não", "Sim", "Sim", "Sim"],
    },
    {
      label: "Tipo de carcaça",
      values: ["Fundida", "Fundida", "Fundida", "Fundida", "Fundida", "Fundida"],
    },
    {
      label: "CMT (ton.)",
      values: ["60", "70", "80", "100", "100 / 130*", "100 / 150*"],
    },
    {
      label: "Relações de redução",
      values: [
        "2,85 / 3,08 / 3,40 / 3,67 / 4,11",
        "3,46 / 3,61 / 3,76 / 4,12 / 4,55 / 5,41",
        "2,83 / 3,09 / 3,40 / 3,78 / 4,50 / 6,18",
        "3,33 / 3,46 / 3,61 / 3,76 / 3,97 / 4,12 / 4,55 / 5,41 / 6,18 / 7,21*",
        "3,33 / 3,46 / 3,61 / 3,76 / 3,97 / 4,12 / 4,55 / 5,41 / 6,18 / 7,21",
        "3,61 / 3,76 / 4,12 / 4,55 / 5,41 / 6,18 / 7,21",
      ],
    },
    {
      label: "Bloqueio de diferencial",
      values: [
        "Entre rodas",
        "Entre rodas",
        "Entre-eixos e entre rodas",
        "Entre rodas",
        "Entre-eixos e entre rodas",
        "Entre-eixos e entre rodas",
      ],
    },
  ],
};

function SpecTable({ title, headers, rows }: SpecTableProps) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-4">
        {title}
      </h2>
      <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
        <table className="min-w-full border-collapse text-sm md:text-base">
          <thead className="bg-sky-50">
            <tr>
              {headers.map((h, idx) => (
                <th
                  key={idx}
                  className={`px-4 py-3 border-b border-slate-200 text-left font-semibold ${
                    idx === 0 ? "w-40" : ""
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="even:bg-slate-50/60">
                <td className="px-4 py-3 border-t border-slate-200 font-semibold align-top">
                  {row.label}
                </td>
                {row.values.map((v, idx) => (
                  <td key={idx} className="px-4 py-3 border-t border-slate-200 align-top">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Valores de potência, torque e relações podem variar conforme configuração de fábrica,
        atualização de software ou mercado. Consulte sempre o catálogo oficial Volvo Trucks.
      </p>
    </section>
  );
}

export default function VolvoFH2025Page() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-slate-50 to-white pb-16">
      {/* HERO – padrão alinhado ao Scania Super */}
      <section className="w-full bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
              Ficha Técnica • Rodoviário Pesado
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Volvo FH
              <span className="block text-sky-600 text-xl md:text-2xl mt-1">
                Desempenho, conforto e segurança em alto nível
              </span>
            </h1>
            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              A linha Volvo FH foi desenvolvida para operações rodoviárias de longa distância,
              combinando motores D13C de alta eficiência, transmissão I-Shift e cabines de
              referência em conforto. Esta página reúne, em formato técnico e didático, os
              principais dados para motoristas, frotistas e instrutores.
            </p>

            {/* Cards de destaque – tipografia igual Scania Super */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">Faixa de potência</p>
                <p className="text-lg font-bold text-slate-900">
                  420 cv • 460 cv • 500 cv • 540 cv
                </p>
                <p className="text-[11px] text-slate-600">
                  Motores D13C com freio-motor VEB/VEB+ integrado.
                </p>
              </div>
              <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-sky-700">Transmissão</p>
                <p className="text-lg font-bold text-slate-900">I-Shift 12 / 13 / 14 marchas</p>
                <p className="text-[11px] text-slate-600">
                  Modos automático e manual, versões super-reduzidas.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-amber-700">Aplicações</p>
                <p className="text-lg font-bold text-slate-900">4×2 • 6×2 • 6×4 • 8×2 • 8×4</p>
                <p className="text-[11px] text-slate-600">
                  Configurações para diversos perfis de carga e rota.
                </p>
              </div>
            </div>
          </div>

          {/* Imagem do FH em configuração rodoviária */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border bg-slate-100 shadow-sm">
            <Image
              src="/images/trucks/volvo-fh.jpg"
              alt="Volvo FH em configuração rodoviária"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        {/* Conforto da cabine */}
        <section className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Conforto da cabine Globetrotter / Globetrotter XL
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            A cabine do Volvo FH foi projetada para ser um ambiente de trabalho e descanso de alto
            padrão, reduzindo fadiga e aumentando a segurança em viagens longas. Nas versões
            Globetrotter e Globetrotter XL, o motorista conta com excelente isolamento acústico,
            ergonomia refinada e amplo espaço interno.
          </p>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>
              • <span className="font-semibold">Leito amplo</span> com opções de colchão de mola ou
              espuma, pensado para sono mais reparador.
            </li>
            <li>
              • Suspensão de cabine e de chassi desenvolvidas para reduzir vibrações e impactos,
              melhorando conforto e controle do veículo.
            </li>
            <li>
              • Grande volume de porta-objetos internos e compartimentos externos, facilitando a
              organização de bagagens e itens de trabalho.
            </li>
            <li>
              • Painel digital e central multimídia posicionados para reduzir desvios de atenção, com
              comandos ao alcance das mãos.
            </li>
            <li>
              • Sistemas de climatização que mantêm a temperatura ideal, mesmo durante paradas
              prolongadas, conforme a configuração da cabine.
            </li>
          </ul>
        </section>

        {/* Conforto diário – detalhes práticos da cabine */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Conforto diário para quem vive na estrada
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            As cabines do Volvo FH foram pensadas para tornar a rotina na estrada mais leve e
            funcional. Além da ergonomia, o modelo oferece soluções de conforto que impactam
            diretamente a qualidade de vida do motorista e do passageiro.
          </p>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>• Espaços generosos de armazenamento, internos e externos.</li>
            <li>
              • Geladeira com duplo compartimento, ideal para manter alimentos e bebidas frescas
              durante toda a jornada.
            </li>
            <li>
              • Cama muito confortável, projetada para garantir descanso adequado entre os turnos
              de direção.
            </li>
          </ul>
        </section>

        {/* Plataforma modular */}
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Plataforma modular: o FH se adapta à sua missão
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            O chassi do Volvo FH foi pensado para combinar capacidade de carga, tração e eficiência.
            As diferentes configurações de eixos permitem atender desde operações rodoviárias leves
            até composições de alto PBTC, com foco em estabilidade e consumo de combustível.
          </p>
          <p className="text-sm md:text-base text-slate-700">
            A integração entre motor D13C, transmissão I-Shift e eixos traseiros de simples
            velocidade ou com redução nos cubos garante desempenho consistente em subidas,
            retomadas e velocidade de cruzeiro, sempre com alto nível de segurança e controle de
            frenagem.
          </p>
        </section>

        {/* Inteligência Artificial embarcada e I-Torque */}
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Inteligência Artificial embarcada e tecnologia I-Torque
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            A Volvo apresenta a evolução da Inteligência Artificial embarcada de fábrica, uma
            solução desenvolvida pela equipe do Brasil e exclusiva para os veículos Volvo FH. O
            ícone das estradas passa a contar com tecnologia ainda mais avançada, que atua em tempo
            real para entregar mais performance e eficiência à operação.
          </p>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            Com o <strong>I-Torque</strong>, o sistema gerencia continuamente o torque do motor,
            ajustando-o automaticamente conforme a velocidade, a topografia e o peso do conjunto.
            Isso se traduz em respostas mais rápidas, melhor aproveitamento da potência e maior
            eficiência em diferentes condições de rodagem.
          </p>
          <p className="text-sm md:text-base text-slate-700">
            Para o motorista, essa gestão inteligente do torque proporciona economia consistente de
            combustível sem abrir mão de desempenho, produtividade e conforto ao dirigir. O resultado
            é um Volvo FH ainda mais econômico e agradável de conduzir, reforçando seu papel de
            referência nas estradas.
          </p>
        </section>

        {/* Mais inteligência, mais economia – foco em consumo */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Mais inteligência, mais economia
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            Com o I-Torque, o Volvo FH realiza um gerenciamento contínuo e inteligente do torque do
            motor em qualquer rota, explorando ao máximo o potencial do trem de força em aclives,
            descidas e trechos de velocidade de cruzeiro.
          </p>
          <p className="text-sm md:text-base text-slate-700">
            O resultado prático é uma economia de combustível de até{" "}
            <strong>3% em comparação ao mesmo modelo sem I-Torque</strong>, mantendo o nível de
            performance e produtividade exigido pelas operações modernas. Em frotas de grande
            quilometragem anual, esse ganho representa impacto direto no custo total de operação.
          </p>
        </section>

        {/* Segurança ao máximo */}
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Segurança ao máximo: visão ampliada ao redor do caminhão
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            Saber o que está acontecendo ao redor do caminhão é essencial para uma direção segura.
            O Volvo FH pode contar com sistemas baseados em radares, câmeras e sensores projetados
            para detectar e alertar o motorista sobre a presença de pedestres, ciclistas e outros
            veículos em áreas críticas de visibilidade.
          </p>
          <p className="text-sm md:text-base text-slate-700">
            A combinação de visibilidade ampliada, imagem por câmeras e tecnologia de assistência ao
            motorista permite que o caminhão tenha uma visão mais abrangente do ambiente, inclusive
            em pontos que os olhos não conseguem enxergar diretamente. Isso aumenta a segurança nas
            manobras, mudanças de faixa e circulação em áreas urbanas e de carga/descarga.
          </p>
        </section>

        {/* Produtividade e conforto */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Produtividade e conforto ao longo de toda a jornada
          </h2>
          <p className="text-sm md:text-base text-slate-700">
            Garantir uma jornada confortável para o motorista e o passageiro faz parte das
            prioridades do Volvo FH. As soluções de cabine, a ergonomia, os sistemas de assistência
            e os recursos de conectividade transformam o caminhão em um local de trabalho mais
            eficiente, produtivo e confortável – seja durante a condução, seja nos momentos de
            descanso.
          </p>
        </section>

        {/* Projetado para ser eficiente – aerodinâmica e design */}
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Projetado para ser eficiente: aerodinâmica e design inteligente
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            O Volvo FH foi desenhado para cortar o ar com o mínimo de resistência possível. Faróis
            em LED, melhor fechamento das folgas da cabine e o sistema de retrovisores externos por
            câmeras com visão infravermelha são exemplos de funcionalidades que contribuem para a
            aerodinâmica e a economia de combustível.
          </p>
          <p className="text-sm md:text-base text-slate-700">
            Além disso, os faróis em LED adaptativos otimizam a iluminação da via sem ofuscar outros
            motoristas, melhorando a segurança nas rodovias e em condições de baixa visibilidade.
          </p>
        </section>

        {/* Sistema de Monitoramento de Pressão dos Pneus */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Sistema de Monitoramento de Pressão de Pneus
          </h2>
          <p className="text-sm md:text-base text-slate-700">
            O Sistema de Monitoramento de Pressão de Pneus controla, em tempo real, a pressão e a
            temperatura de todos os pneus da combinação do veículo. O motorista é alertado em caso
            de baixa pressão, fuga rápida de ar ou temperatura elevada, o que aumenta a proteção
            contra acidentes relacionados a falhas nos pneus e contribui para maior segurança,
            economia e produtividade.
          </p>
        </section>

        {/* I-See pré-mapeado e piloto automático adaptativo */}
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            I-See pré-mapeado e piloto automático adaptativo
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            Com o <strong>I-See pré-mapeado</strong>, o caminhão utiliza informações de topografia e
            curvas da rodovia para otimizar o embalo da composição, as trocas de marcha e o uso do
            I-Roll. Ao se aproximar de curvas ou rotatórias que exigem velocidade mais baixa, o
            sistema adapta antecipadamente a seleção de marchas e a estratégia de condução.
          </p>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            A soma dessas estratégias gera <strong>economia de combustível</strong> e{" "}
            <strong>mais segurança</strong> nas estradas, especialmente em rotas com relevo
            acentuado.
          </p>
          <p className="text-sm md:text-base text-slate-700">
            Já o <strong>Piloto Automático Adaptativo</strong> ajuda a manter uma velocidade
            uniforme e uma distância segura em relação ao veículo à frente. Ele funciona em todas as
            velocidades, inclusive até a parada total, e pode retomar automaticamente, permitindo
            uso eficiente tanto em rodovias quanto em trechos mais congestionados.
          </p>
        </section>

        {/* I-Shift e Direção Dinâmica Volvo */}
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            I-Shift e Direção Dinâmica Volvo: condução perfeita e produtividade
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            A caixa de câmbio <strong>I-Shift</strong>, em sua 7ª geração, é uma grande aliada do
            motorista em viagens de curta e longa distância. Com trocas de marchas precisas e
            automáticas, contribui para economia de combustível e conforto ao dirigir.
          </p>
          <p className="text-sm md:text-base text-slate-700 mb-3">
            A I-Shift gerencia embreagem e marchas de forma inteligente, avaliando continuamente
            velocidade, peso, inclinação da via e torque disponível. Com isso, ajusta a atuação do
            motor e dos freios para garantir máxima precisão, eficiência e desempenho em diferentes
            condições operacionais.
          </p>
          <p className="text-sm md:text-base text-slate-700">
            A <strong>Direção Dinâmica Volvo</strong> atua como uma “mão firme” auxiliando o
            motorista nos pequenos ajustes de volante, reduzindo esforço físico e aumentando o
            controle do caminhão. Ela também adiciona funcionalidades aos sistemas de suporte ao
            motorista, com direção ativa em diferentes situações, como correções de faixa, vento
            lateral e manobras em baixa velocidade.
          </p>
        </section>

        {/* Tabelas técnicas */}
        <SpecTable
          title={engineTable.title}
          headers={engineTable.headers}
          rows={engineTable.rows}
        />

        <SpecTable
          title={transmissionTable.title}
          headers={transmissionTable.headers}
          rows={transmissionTable.rows}
        />

        <SpecTable
          title={rearAxleTable.title}
          headers={rearAxleTable.headers}
          rows={rearAxleTable.rows}
        />

        {/* Rodapé da ficha – uso na OTIAdriver */}
        <section className="mt-10 rounded-2xl border bg-slate-900 text-slate-50 px-6 py-6 md:px-8 md:py-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-extrabold mb-2">
            Como usar esta ficha técnica na OTIAdriver
          </h2>
          <p className="text-sm md:text-base text-slate-100/90 mb-3">
            Esta ficha foi organizada para apoiar motoristas, instrutores e gestores de frota em
            treinamentos, simulações de carga e estudos comparativos entre configurações do Volvo
            FH. Os dados podem ser combinados com os módulos de pneus, planos de manutenção e
            caminhões elétricos disponíveis na plataforma OTIAdriver.
          </p>
          <p className="text-xs md:text-sm text-slate-300">
            Informações de caráter técnico e ilustrativo. Especificações podem variar de acordo com
            o ano-modelo, país e atualizações de produto da Volvo Trucks. Sempre consulte o catálogo
            oficial e o manual do proprietário para decisões operacionais.
          </p>
        </section>

        {/* Plano Ouro Volvo – manutenção e disponibilidade */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Plano Ouro Volvo: manutenção inteligente e custos previsíveis
          </h2>
          <p className="text-sm md:text-base text-slate-700">
            Garantir que o veículo esteja sempre pronto para o trabalho exige tecnologia aliada a um
            plano de manutenção adequado. Com o <strong>Plano Ouro Volvo</strong>, a frota passa a
            contar com custos de manutenção previsíveis, gestão inteligente de paradas e menor risco
            de imprevistos. Assim, o transportador pode focar nos negócios enquanto a manutenção fica
            sob responsabilidade de quem mais entende do Volvo FH.
          </p>
        </section>

       {/* BLOCO FINAL – Fichas Técnicas (cards padronizados, data-driven) */}
<section id="ficha-tecnica" className="mt-8">
  <div className="grid gap-6 md:grid-cols-3">
    {[
      {
        href: "/fichas-tecnicas/volvo-fh-6x4t.pdf",
        titulo: "Ficha técnica oficial – Volvo FH 6x4T (PDF)",
        descricao:
          "Ficha técnica oficial do Volvo FH 6x4T com dados completos de motor, transmissão, eixos, capacidades e dimensões.",
        cta: "Abrir ficha técnica Volvo FH 6x4T (PDF)",
      },
      {
        href: "/fichas-tecnicas/display-instrumentos-volvo.pdf",
        titulo: "Display de instrumentos Volvo (PDF)",
        descricao:
          "Guia oficial do display de instrumentos: telas, informações exibidas e leitura correta durante a operação.",
        cta: "Abrir guia do display (PDF)",
      },
      {
        href: "/fichas-tecnicas/painel-instrumentos-volvo.pdf",
        titulo: "Painel de instrumentos Volvo (PDF)",
        descricao:
          "Material de referência do painel de instrumentos: funções, indicadores e orientações de uso.",
        cta: "Abrir guia do painel (PDF)",
      },
      {
        href: "/fichas-tecnicas/sistema-monitoramento-pneu-volvo.pdf",
        titulo: "Sistema de monitoramento de pneus Volvo (PDF)",
        descricao:
          "Guia do sistema de monitoramento de pneus: alertas, calibração e boas práticas de operação.",
        cta: "Abrir guia de pneus (PDF)",
      },
      {
        href: "/fichas-tecnicas/caixa-mudancas-volvo.pdf",
        titulo: "Caixa de mudanças Volvo (PDF)",
        descricao:
          "Material técnico sobre a transmissão/caixa de mudanças: modos, recomendações e operação eficiente.",
        cta: "Abrir guia da caixa (PDF)",
      },
      {
        href: "/fichas-tecnicas/simbolos-volvo.pdf",
        titulo: "Símbolos Volvo (PDF)",
        descricao:
          "Guia oficial de símbolos e luzes do painel Volvo para interpretação rápida e ação correta.",
        cta: "Abrir guia de símbolos (PDF)",
      },
    ].map((item) => (
      <div
        key={item.href}
        className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[240px]"
      >
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          {item.titulo}
        </h2>

        <p className="text-sm text-slate-700 mb-4">{item.descricao}</p>

        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center rounded-lg bg-[#005B9A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#004B80] transition"
        >
          {item.cta ?? "Abrir ficha técnica (PDF)"}
        </a>
      </div>
    ))}
  </div>
</section>
</div>
    </main>
  );
}
