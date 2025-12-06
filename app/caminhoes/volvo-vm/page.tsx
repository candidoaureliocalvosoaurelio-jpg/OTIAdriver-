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
          <thead className="bg-sky-50">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-slate-800 min-w-[140px]">
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

      {note && (
        <p className="mt-2 text-xs text-slate-500">
          {note}
        </p>
      )}
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
        "cerca de 950 Nm entre 1.000–1.400 rpm",
        "cerca de 1.200 Nm entre 1.000–1.400 rpm",
        "cerca de 1.400 Nm entre 1.000–1.400 rpm",
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
        "Injeção eletrônica, turbo e intercooler, emissões atuais",
        "Injeção eletrônica, turbo e intercooler, emissões atuais",
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
        "Integração total com motor, freio-motor e piloto automático",
        "Integração com freios auxiliares e funções off-road",
        "Disponível com tomada de força conforme a aplicação",
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
        "Mineração leve, construção civil, canteiros irregulares",
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
        "Configurações de 16 a cerca de 32 toneladas",
        "Permite ajustar o projeto do veículo para cada tipo de operação",
      ],
    },
    {
      label: "CMT (Capacidade Máxima de Tração)",
      values: [
        "De aproximadamente 35 até 45 toneladas (conforme versão)",
        "Uso com semirreboques leves/médios e aplicações vocacionais",
      ],
    },
    {
      label: "Suspensão traseira",
      values: [
        "Podendo chegar a capacidades de mais de 17 t",
        "Transporte de materiais de construção, madeira e granel",
      ],
    },
    {
      label: "Entre-eixos e distâncias",
      values: [
        "Diversas opções de entre-eixos e balanço traseiro",
        "Facilita a montagem de baús, tanques, basculantes e betoneiras",
      ],
    },
  ];

  // Conforto e cabine
  const cabColumns = ["VM Rodoviário", "VMX Vocacional"];
  const cabRows: SpecRow[] = [
    {
      label: "Opções de cabine",
      values: [
        "Cabine curta, leito teto baixo e teto alto, conforme aplicação",
        "Cabine curta reforçada, com foco em robustez e visibilidade",
      ],
    },
    {
      label: "Ergonomia",
      values: [
        "Painel moderno, comandos ao alcance, várias regulagens de banco",
        "Controles simplificados, materiais internos voltados à durabilidade",
      ],
    },
    {
      label: "Conforto em jornada longa",
      values: [
        "Camas confortáveis, climatização eficiente e múltiplos porta-objetos",
        "Pode incluir leito conforme configuração, com foco em turnos longos",
      ],
    },
    {
      label: "Segurança ativa",
      values: [
        "EBS, ABS, controle de tração, assistência de partida em rampa",
        "Recursos de auxílio em rampas, controle de descida e freios robustos",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-slate-50 pb-20">
      {/* HERO – padrão FH/Scania */}
      <section className="border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Caminhões Volvo • VM & VMX
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              Volvo VM / VMX
              <span className="block text-sky-500 text-xl md:text-2xl mt-1">
                versatilidade para cidades, estradas e obras.
              </span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed">
              A família Volvo VM foi concebida para distribuição e operações
              rodoviárias leves, enquanto o VMX leva a mesma base mecânica para
              serviços mais severos, como construção civil e aplicações fora de
              estrada leve. O foco é combinar robustez, conforto de cabine e
              baixo consumo de combustível em um chassi versátil.
            </p>

            {/* Chips de destaque */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                Motores D8K 270cv 330cv 380cv
              </span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                I-Shift VM 12 marchas
              </span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                Configurações 4x2, 6x2, 6x4 e 8x4
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                Versões VM (rodoviário) e VMX (vocacional)
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
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center rounded-xl border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition"
              >
                Ir direto para a ficha técnica
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative h-56 w-full flex-1 md:h-72">
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-sky-100 via-white to-emerald-50 shadow-lg" />
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
      <section className="mx-auto mt-8 max-w-6xl px-4" id="ficha-tecnica">
        {/* Cards-resumo */}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-sky-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
              Potência
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              270cv 330cv 380cv
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Motores D8K/D8C eficientes para cidades, rodovias leves e uso
              vocacional.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm border border-emerald-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Transmissão
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              I-Shift VM 12 marchas
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Trocas automáticas inteligentes, com modos específicos para
              operação urbana e fora de estrada leve.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm border border-amber-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
              Configurações de eixos
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              4x2 • 6x2 • 6x4 • 8x4
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Da distribuição urbana ao VMX super pesado para construção.
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
              Valores variam conforme modelo, eixo e tipo de aplicação.
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
              desde baús urbanos e câmaras frias até betoneiras e basculantes.
              Nas versões VMX, o foco é aumentar a robustez da suspensão, dos
              eixos e da transmissão para enfrentar pisos ruins e operações com
              alta solicitação de chassi.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              A inteligência embarcada da I-Shift VM ajuda a reduzir consumo de
              combustível e desgaste, enquanto sistemas eletrônicos de freio e
              auxílio em rampa aumentam a segurança nas manobras diárias.
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
              Sempre consulte o concessionário Volvo para confirmar
              configurações disponíveis, PBT/CMT homologados e adaptações de
              implementos.
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
          note="Recursos de segurança ativa e passiva podem variar conforme o pacote de opcionais escolhido."
        />

        {/* BLOCO FINAL – Fichas técnicas oficiais (PDF) */}
        <section className="mt-10">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm bg-white">
            <h2 className="text-2xl font-bold mb-2 text-slate-900">
              Fichas técnicas oficiais – Volvo VM / VMX (PDF)
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl">
              Consulte os dados completos de dimensões, capacidades, motor,
              transmissão e aplicações das versões rodoviárias Volvo VM 6x2R e
              vocacionais Volvo VMX MAX 6x4R.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/fichas-tecnicas/volvo-vm-6x2r.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-blue-500 text-xs font-bold text-white">
                  PDF
                </span>
                Abrir ficha técnica VM 6x2R (PDF)
              </a>

              <a
                href="/fichas-tecnicas/volvo-vmx-max-6x4r.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-blue-500 text-xs font-bold text-white">
                  PDF
                </span>
                Abrir ficha técnica VMX MAX 6x4R (PDF)
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
