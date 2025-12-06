// app/caminhoes/volvo-fh-2025/page.tsx (Código completo com modificações)

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Volvo | OTIAdriver",
  description:
    "Ficha técnica completa do Volvo FH: motores D13C, transmissão I-Shift, eixos traseiros, conforto de cabine Globetrotter XL e aplicações rodoviárias.",
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
      values: [
        "VEB410 / VEB510 (opc.)",
        "VEB410 / VEB510 (opc.)",
        "VEB510",
        "VEB510",
      ],
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
      values: [
        "Manual ou automático",
        "Manual ou automático",
        "Manual ou automático",
      ],
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
      values: [
        "4×2 / 6×2 / 8×2",
        "4×2 / 6×2 / 8×2",
        "6×4",
        "6×4 / 8×4",
        "6×4",
        "6×4",
      ],
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
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4">{title}</h2>
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
                  <td
                    key={idx}
                    className="px-4 py-3 border-t border-slate-200 align-top"
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Valores de potência, torque e relações podem variar conforme
        configuração de fábrica, atualização de software ou mercado. Consulte
        sempre o catálogo oficial Volvo Trucks.
      </p>
    </section>
  );
}

export default function VolvoFH2025Page() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-slate-50 to-white pb-24">
      {/* HERO */}
      <section className="w-full border-b border-slate-200 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
              Ficha Técnica • Rodoviário Pesado
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Volvo FH
              <span className="block text-sky-500">
                desempenho, conforto e segurança em alto nível.
              </span>
            </h1>
            <p className="mt-4 text-slate-700 text-sm md:text-base max-w-xl">
              A linha Volvo FH foi desenvolvida para operações rodoviárias de
              longa distância, combinando motores D13C de alta eficiência,
              transmissão I-Shift e cabines Globetrotter de referência em
              conforto. Esta página reúne, em formato técnico e didático, os
              principais dados para motoristas, frotistas e instrutores.
            </p>

            {/* Cards de destaque */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-sky-50 border border-sky-100 px-4 py-3">
                <p className="text-xs font-semibold text-sky-700 uppercase">
                  Faixa de potência
                </p>
                <p className="mt-1 text-xl font-bold text-slate-900">
                  420cv 460cv 500cv 540 cv
                </p>
                <p className="text-xs text-slate-600">
                  Motores D13C com freio-motor VEB/VEB+ integrado.
                </p>
              </div>
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3">
                <p className="text-xs font-semibold text-emerald-700 uppercase">
                  Transmissão
                </p>
                <p className="mt-1 text-xl font-bold text-slate-900">
                  I-Shift 12/13/14 marchas
                </p>
                <p className="text-xs text-slate-600">
                  Modos automático e manual, versões super-reduzidas.
                </p>
              </div>
              <div className="rounded-xl bg-amber-50 border border-amber-100 px-4 py-3">
                <p className="text-xs font-semibold text-amber-700 uppercase">
                  Aplicações
                </p>
                <p className="mt-1 text-xl font-bold text-slate-900">
                  4×2 • 6×2 • 6×4 • 8×2 • 8×4
                </p>
                <p className="text-xs text-slate-600">
                  Configurações para diversos perfis de carga e rota.
                </p>
              </div>
            </div>
          </div>

          {/* Imagem do FH */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border bg-slate-100 shadow-sm">
            <Image
              src="/images/trucks/volvo-fh-2025.jpg"
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
        {/* Seção: Conforto da cabine */}
        <section className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Conforto da cabine Globetrotter / Globetrotter XL
            </h2>
            <p className="text-slate-700 text-sm md:text-base mb-3">
              A cabine do Volvo FH foi projetada para ser um ambiente de
              trabalho e descanso de alto padrão, reduzindo fadiga e aumentando
              a segurança em viagens longas. Nas versões Globetrotter e
              Globetrotter XL, o motorista conta com excelente isolamento
              acústico, ergonomia refinada e amplo espaço interno.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              <li>
                •<span className="font-semibold"> Leito amplo</span> com opções
                de colchão de mola ou espuma, pensado para sono mais reparador.
              </li>
              <li>
                • Suspensão de cabine e de chassi desenvolvidas para reduzir
                vibrações e impactos, melhorando conforto e controle do veículo.
              </li>
              <li>
                • Grande volume de porta-objetos internos e compartimentos
                externos, facilitando a organização de bagagens e itens de
                trabalho.
              </li>
              <li>
                • Painel digital e central multimídia posicionados para reduzir
                desvios de atenção, com comandos ao alcance das mãos.
              </li>
              <li>
                • Sistemas de climatização que mantêm a temperatura ideal, mesmo
                durante paradas prolongadas, conforme a configuração da cabine.
              </li>
            </ul>
          </div>

          {/* Imagem interior da cabine */}
          <figure className="space-y-3">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border bg-slate-100 shadow-sm">
              <Image
                src="/images/caminhoes/volvo-fh/interior-globetrotter-xl.jpg"
                alt="Interior da cabine Volvo FH Globetrotter XL"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
            {/* REMOVIDO: Indicação textual sobre a imagem que estava gerando sobreposição/confusão no design */}
            <figcaption className="text-xs text-slate-500 text-center">
              Imagem ilustrativa da cabine Volvo FH Globetrotter XL – ambiente
              pensado para ser uma “casa sobre rodas” para o motorista.
            </figcaption>
          </figure>
        </section>

        {/* Seção: Plataforma modular */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Plataforma modular: o FH se adapta à sua missão
          </h2>
          <p className="text-slate-700 text-sm md:text-base mb-3">
            O chassi do Volvo FH foi pensado para combinar capacidade de carga,
            tração e eficiência. As diferentes configurações de eixos permitem
            atender desde operações rodoviárias leves até composições de alto
            PBTC, com foco em estabilidade e consumo de combustível.
          </p>
          <p className="text-slate-700 text-sm md:text-base">
            A integração entre motor D13C, transmissão I-Shift e eixos traseiros
            de simples velocidade ou com redução nos cubos garante desempenho
            consistente em subidas, retomadas e velocidade de cruzeiro, sempre
            com alto nível de segurança e controle de frenagem.
          </p>
        </section>

        {/* Tabelas técnicas (Motores, Transmissão, Eixos) */}
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

        {/* Rodapé da ficha */}
        <section className="mt-10 rounded-2xl border bg-slate-900 text-slate-50 px-6 py-6 md:px-8 md:py-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-extrabold mb-2">
            Como usar esta ficha técnica na OTIAdriver
          </h2>
          <p className="text-sm md:text-base text-slate-100/90 mb-3">
            Esta ficha foi organizada para apoiar motoristas, instrutores e
            gestores de frota em treinamentos, simulações de carga e estudos
            comparativos entre configurações do Volvo FH. Os dados podem ser
            combinados com os módulos de pneus, planos de manutenção e
            caminhões elétricos disponíveis na plataforma OTIAdriver.
          </p>
          <p className="text-xs md:text-sm text-slate-300">
            Informações de caráter técnico e ilustrativo. Especificações podem
            variar de acordo com o ano-modelo, país e atualizações de produto da
            Volvo Trucks. Sempre consulte o catálogo oficial e o manual do
            proprietário para decisões operacionais.
          </p>
        </section>

        {/* Ficha técnica oficial em PDF – bloco final (CORRIGIDO) */}
        <section className="mt-10">
          <div className="p-6 rounded-2xl border shadow-sm bg-white">
            <h2 className="text-2xl font-bold mb-2 text-slate-900">
              Ficha técnica oficial – Volvo FH 6x4T (PDF)
            </h2>

            <p className="text-sm text-slate-700">
              Acesse o documento oficial da Volvo Trucks com todas as
              informações de dimensões, capacidades, motor, transmissão e
              especificações técnicas utilizadas para dimensionamento e
              comparação de frota.
            </p>

            <div className="mt-4">
              <a
                href="/fichas-tecnicas/volvo-fh-6x4t.pdf"
                target="_blank"
                rel="noopener noreferrer"
                // RESTAURADO: Classes originais para aparecer como botão azul com texto branco
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-blue-500 text-xs font-bold text-white">
                  PDF
                </span>
                Abrir ficha técnica (PDF)
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
