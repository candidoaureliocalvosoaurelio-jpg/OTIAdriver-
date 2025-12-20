// app/caminhoes/volvo-vm/page.tsx
import Image from "next/image";
import Link from "next/link";

type SpecRow = {
  label: string;
  values: string[];
};

type SpecTableProps = {
  title: string;
  columns: string[];
  rows: SpecRow[];
  note?: string;
};

function SpecTable({ title, columns, rows, note }: SpecTableProps) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
        {title}
      </h2>

      {/* Tabela responsiva – rolagem horizontal em telas pequenas */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-sm md:text-base border-collapse">
          <thead className="bg-slate-50">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-slate-800 min-w-[160px]">
                Especificação
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  className="py-3 px-4 text-left font-semibold text-slate-800 whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.label}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
              >
                <td className="py-3 px-4 font-semibold text-slate-900 align-top">
                  {row.label}
                </td>
                {row.values.map((val, i) => (
                  <td
                    key={i}
                    className="py-3 px-4 text-slate-700 align-top whitespace-pre-line"
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note && <p className="mt-2 text-xs text-slate-500">{note}</p>}
    </section>
  );
}

export default function VolvoVmPage() {
  // Motores VM / VMX
  const engineColumns = ["D8K 270", "D8K 330", "D8K 380"];
  const engineRows: SpecRow[] = [
    {
      label: "Aplicação",
      values: [
        "Distribuição urbana, médio curso, baú/frigorificado",
        "Misto urbano–rodoviário, tanques e graneleiros",
        "Vocacional e aplicações mais severas",
      ],
    },
    {
      label: "Potência",
      values: [
        "270 cv entre 2.100–2.300 rpm",
        "330 cv entre 2.200–2.400 rpm",
        "380 cv entre 2.300–2.500 rpm",
      ],
    },
    {
      label: "Torque máximo",
      values: [
        "≈ 950 Nm entre 1.000–1.400 rpm",
        "≈ 1.200 Nm entre 1.000–1.400 rpm",
        "≈ 1.400 Nm entre 1.000–1.400 rpm",
      ],
    },
    {
      label: "Configuração",
      values: [
        "6 cilindros em linha, 7,7–8,0 L",
        "6 cilindros em linha, 7,7–8,0 L",
        "6 cilindros em linha, 7,7–8,0 L",
      ],
    },
    {
      label: "Tecnologias",
      values: [
        "Injeção eletrônica, turbo e intercooler",
        "Injeção eletrônica, turbo e intercooler",
        "Injeção eletrônica, turbo de maior vazão e intercooler",
      ],
    },
    {
      label: "Freio-motor",
      values: [
        "Freio-motor no cabeçote (integração com sistema de freios)",
        "Freio-motor no cabeçote, maior capacidade de retenção",
        "Freio-motor no cabeçote, otimizado para uso severo",
      ],
    },
  ];

  // Transmissões
  const gearboxColumns = [
    "I-Shift VM AT2612F",
    "I-Shift VM ATO3112F",
    "Caixa manual (VT/VMT)",
  ];
  const gearboxRows: SpecRow[] = [
    {
      label: "Aplicação",
      values: [
        "4x2 / 6x2 rodoviário leve e distribuição",
        "6x4 / 8x4 vocacional e construção",
        "Versões de entrada e aplicações específicas",
      ],
    },
    {
      label: "Tipo",
      values: [
        "Automatizada, 12 marchas à frente + ré",
        "Automatizada com overdrive, 12 marchas + super-reduzida",
        "Manual, até 9 marchas à frente + ré",
      ],
    },
    {
      label: "Operação",
      values: [
        "Modos automáticos e manuais, estratégia de trocas otimizadas",
        "Modos off-road, manobra e rampa; calibração para carga alta",
        "Engate tradicional, custo inicial mais baixo",
      ],
    },
    {
      label: "Recursos",
      values: [
        "Integração total com motor, freio-motor e estratégias de condução",
        "Integração com funções off-road e uso vocacional",
        "Disponível com tomada de força conforme aplicação",
      ],
    },
  ];

  // Configurações de eixo
  const axleColumns = ["4x2", "6x2", "6x4", "8x4"];
  const axleRows: SpecRow[] = [
    {
      label: "Aplicação típica",
      values: [
        "Distribuição urbana, cargas secas e leves",
        "Rodoviário leve/médio e betoneiras médias",
        "Vocacional pesado, construção e obras",
        "Super-pesado rígido, bombas de concreto, caçambas grandes",
      ],
    },
    {
      label: "PBT típico",
      values: ["até ~17 t", "até ~23 t", "até ~26 t", "até ~32 t"],
    },
    {
      label: "Tração",
      values: [
        "Eixo traseiro simples",
        "Eixo de tração + eixo auxiliar",
        "Dois eixos de tração (redução nos cubos opcional)",
        "Dois eixos de tração + eixo direcional adicional",
      ],
    },
    {
      label: "Uso recomendado",
      values: [
        "Cidades, curtas distâncias, entregas fracionadas",
        "Regiões metropolitanas, curtas e médias distâncias",
        "Obras, canteiros, pisos irregulares",
        "Cargas concentradas, concreto, equipamentos especiais",
      ],
    },
  ];

  // Chassi / capacidade
  const chassisColumns = ["Destaque", "Aplicação"];
  const chassisRows: SpecRow[] = [
    {
      label: "PBT (Peso Bruto Total)",
      values: [
        "Configurações de ~16 até ~32 toneladas",
        "Ajuste ideal do projeto conforme implemento e operação",
      ],
    },
    {
      label: "CMT (Capacidade Máxima de Tração)",
      values: [
        "≈ 35 até ≈ 45 toneladas (conforme versão)",
        "Uso com semirreboques leves/médios e operações mistas",
      ],
    },
    {
      label: "Suspensão traseira",
      values: [
        "Capacidades elevadas conforme pacote vocacional",
        "Transporte de materiais, madeira, granel e implementos severos",
      ],
    },
    {
      label: "Entre-eixos e distâncias",
      values: [
        "Múltiplas opções de entre-eixos e balanço traseiro",
        "Facilita montagem de baús, tanques, basculantes e betoneiras",
      ],
    },
  ];

  // Conforto e cabine
  const cabColumns = ["VM Rodoviário", "VMX Vocacional"];
  const cabRows: SpecRow[] = [
    {
      label: "Opções de cabine",
      values: [
        "Cabine curta, leito teto baixo e teto alto (conforme aplicação)",
        "Cabine reforçada com foco em robustez e visibilidade",
      ],
    },
    {
      label: "Ergonomia",
      values: [
        "Painel moderno, comandos ao alcance, múltiplas regulagens de banco",
        "Materiais e comandos voltados à durabilidade em uso severo",
      ],
    },
    {
      label: "Conforto em jornada longa",
      values: [
        "Boa climatização, porta-objetos e leito conforme versão",
        "Pode incluir leito conforme configuração e pacote de cabine",
      ],
    },
    {
      label: "Segurança ativa",
      values: [
        "ABS/EBS, controle de tração, assistência de partida em rampa",
        "Pacotes vocacionais com recursos adicionais conforme opção",
      ],
    },
  ];

  // PDFs (cards data-driven)
  const pdfItems = [
    {
      href: "/fichas-tecnicas/volvo-vm-6x2r.pdf",
      titulo: "Ficha técnica oficial – Volvo VM 6x2R (PDF)",
      descricao:
        "Dados completos do Volvo VM 6x2R: dimensões, capacidades, motorização, transmissão e recomendações de aplicação.",
      cta: "Abrir ficha técnica VM 6x2R (PDF)",
    },
    {
      href: "/fichas-tecnicas/volvo-vmx-max-6x4r.pdf",
      titulo: "Ficha técnica oficial – Volvo VMX MAX 6x4R (PDF)",
      descricao:
        "Material técnico do VMX MAX 6x4R para uso vocacional: capacidades, eixos, transmissão e aplicações severas.",
      cta: "Abrir ficha técnica VMX MAX (PDF)",
    },
    {
      href: "/fichas-tecnicas/caixa-volvo-vm.pdf",
      titulo: "Transmissão – Volvo VM (PDF)",
      descricao:
        "Guia técnico da transmissão utilizada na linha Volvo VM. Ideal para motoristas e treinamentos operacionais.",
      cta: "Abrir guia da transmissão (PDF)",
    },
    {
      href: "/fichas-tecnicas/display-instrumentos-volvo.pdf",
      titulo: "Display de instrumentos Volvo (PDF)",
      descricao:
        "Guia oficial com telas, alertas, menus e leitura correta das informações durante a operação.",
      cta: "Abrir guia do display (PDF)",
    },
    {
      href: "/fichas-tecnicas/painel-instrumentos-volvo.pdf",
      titulo: "Painel de instrumentos Volvo (PDF)",
      descricao:
        "Material técnico do painel de instrumentos: indicadores, avisos e orientações de uso.",
      cta: "Abrir guia do painel (PDF)",
    },
    {
      href: "/fichas-tecnicas/simbolos-volvo.pdf",
      titulo: "Símbolos e luzes do painel Volvo (PDF)",
      descricao:
        "Guia oficial de símbolos, luzes de advertência e mensagens do painel Volvo.",
      cta: "Abrir guia de símbolos (PDF)",
    },
  ] as const;

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-slate-50 pb-20">
      {/* HERO – padrão FH/Scania */}
      <section className="border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#005B9A]">
              Caminhões Volvo • VM & VMX
            </p>

            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              Volvo VM / VMX
              <span className="block text-[#005B9A] text-xl md:text-2xl mt-1">
                versatilidade para cidades, estradas e obras.
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed">
              A família Volvo VM foi concebida para distribuição e operações
              rodoviárias leves, enquanto o VMX leva a mesma base mecânica para
              serviços mais severos, como construção civil e aplicações fora de
              estrada leve. O foco é combinar robustez, conforto de cabine e
              eficiência em um chassi versátil.
            </p>

            {/* Chips de destaque */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#003057]">
                Motores D8K 270 • 330 • 380 cv
              </span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                I-Shift VM 12 marchas
              </span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                4x2 • 6x2 • 6x4 • 8x4
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                VM (rodoviário) e VMX (vocacional)
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/caminhoes"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
              >
                Voltar para a lista de caminhões
              </Link>

              <Link
                href="#materiais-pdf"
                className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#003057] hover:bg-blue-50 transition"
              >
                Ir direto para PDFs
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative h-56 w-full flex-1 md:h-72">
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-blue-100 via-white to-emerald-50 shadow-lg" />
            <div className="relative h-full w-full">
              <Image
                src="/images/trucks/volvo-vm.jpg"
                alt="Volvo VM / VMX em operação"
                fill
                className="object-contain p-4 md:p-6"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="mx-auto mt-8 max-w-6xl px-4">
        {/* Cards-resumo */}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#005B9A]">
              Potência
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              270 • 330 • 380 cv
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Motores D8K eficientes para distribuição, regional e uso vocacional.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm border border-emerald-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Transmissão
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              I-Shift VM (12)
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Trocas automáticas inteligentes e modos voltados para produtividade.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm border border-amber-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
              Configurações
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              4x2 • 6x2 • 6x4 • 8x4
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Do urbano ao vocacional (VMX) com maior robustez.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
              PBT / CMT
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              até ~32 t / ~45 t
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Valores variam conforme versão, eixo e aplicação.
            </p>
          </div>
        </div>

        {/* Texto de posicionamento */}
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Plataforma modular para cidades, estradas e obras
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              O Volvo VM combina cabine confortável, trem de força moderno e
              múltiplas configurações de chassi. É uma base única que atende
              desde baús urbanos e câmara fria até betoneiras e basculantes.
              No VMX, o foco é elevar robustez para canteiros e pisos irregulares.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              A inteligência embarcada da I-Shift VM ajuda a reduzir consumo e
              desgaste, enquanto sistemas eletrônicos de freio e auxílio em rampa
              aumentam segurança e controle nas manobras diárias.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 text-slate-50 p-5 shadow-md">
            <h3 className="text-lg font-bold">Aplicações típicas</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Distribuição urbana de carga seca e refrigerada</li>
              <li>• Transporte regional leve e médio</li>
              <li>• Betoneiras, basculantes e coleta de resíduos</li>
              <li>• Operações mistas asfalto–terra com o VMX</li>
            </ul>
            <p className="mt-4 text-xs text-slate-300">
              Consulte o concessionário Volvo para confirmar configurações, PBT/CMT homologados
              e compatibilidade com implementos.
            </p>
          </div>
        </div>

        {/* TABELAS TÉCNICAS */}
        <SpecTable
          title="Motores Volvo D8K – Linha VM / VMX"
          columns={engineColumns}
          rows={engineRows}
          note="Valores aproximados e sujeitos a variação conforme norma de emissões e calibração de cada mercado."
        />

        <SpecTable
          title="Transmissões – I-Shift VM e caixas manuais"
          columns={gearboxColumns}
          rows={gearboxRows}
          note="Nem todas as transmissões estão disponíveis para todas as versões de chassi e PBT."
        />

        <SpecTable
          title="Configurações de eixos – VM & VMX"
          columns={axleColumns}
          rows={axleRows}
          note="Configurações e capacidades variam conforme o país, legislação e projeto do veículo."
        />

        <SpecTable
          title="Chassi, capacidades e vocações"
          columns={chassisColumns}
          rows={chassisRows}
        />

        <SpecTable
          title="Cabines, conforto e segurança"
          columns={cabColumns}
          rows={cabRows}
          note="Recursos podem variar conforme pacote de opcionais."
        />

        {/* BLOCO FINAL – Materiais em PDF (padrão OTIAdriver, data-driven) */}
        <section id="materiais-pdf" className="mt-10">
          <div className="grid gap-6 md:grid-cols-3">
            {pdfItems.map((item) => (
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
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL – destaque máximo (padrão FH/Scania Super, Volvo) */}
        <section className="mt-14 rounded-3xl bg-[#001A33] p-8 md:p-10 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Quer aprofundar o estudo do Volvo VM / VMX?
            </h3>

            <p className="mt-2 max-w-2xl text-slate-200">
              Use esta página como referência rápida e baixe as fichas técnicas oficiais
              para apoiar treinamentos, aplicação e operação — do urbano ao vocacional.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/volvo-vm-6x2r.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl
                           bg-gradient-to-r from-[#005B9A] to-[#003057]
                           px-12 py-4 text-base font-extrabold text-white
                           shadow-lg shadow-[#005B9A]/30
                           hover:from-[#004B80] hover:to-[#00284A]
                           hover:shadow-xl hover:shadow-[#005B9A]/40
                           focus:outline-none focus:ring-4 focus:ring-[#8FC6FF]
                           transition-all duration-200"
              >
                Baixar ficha técnica VM 6x2R (PDF)
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
