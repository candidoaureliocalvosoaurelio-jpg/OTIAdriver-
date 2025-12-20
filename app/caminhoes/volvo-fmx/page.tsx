// app/caminhoes/volvo-fmx/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo FMX | OTIAdriver",
  description:
    "Ficha técnica e guia completo do Volvo FMX: aplicação severa, motores D13C, transmissão I-Shift, eixos e materiais oficiais em PDF.",
};

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

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full border-collapse text-sm md:text-base">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-3 border-b border-slate-200 text-left font-semibold w-48">
                {columns[0]}
              </th>
              {columns.slice(1).map((col, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 border-b border-slate-200 text-left font-semibold"
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
                <td className="align-top px-4 py-3 border-t border-slate-200 font-semibold text-slate-900">
                  {row.label}
                </td>

                {row.values.map((value, vIdx) => (
                  <td
                    key={vIdx}
                    className="align-top px-4 py-3 border-t border-slate-200 text-slate-700"
                  >
                    {value}
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

export default function VolvoFmxPage() {
  const pdfItems = [
    {
      href: "/fichas-tecnicas/volvo-fmx-max-6x4r.pdf",
      titulo: "Ficha técnica oficial – Volvo FMX 6x4 (PDF)",
      descricao:
        "Documento oficial Volvo Trucks com dados completos de dimensões, capacidades, motor, suspensão e aplicações do Volvo FMX 6x4.",
      cta: "Abrir ficha técnica FMX (PDF)",
    },
    {
      href: "/fichas-tecnicas/display-instrumentos-volvo.pdf",
      titulo: "Display de instrumentos Volvo (PDF)",
      descricao:
        "Guia oficial do display de instrumentos Volvo com telas, alertas, menus e interpretação correta das informações.",
      cta: "Abrir guia do display (PDF)",
    },
    {
      href: "/fichas-tecnicas/painel-instrumentos-volvo.pdf",
      titulo: "Painel de instrumentos Volvo (PDF)",
      descricao:
        "Material técnico do painel de instrumentos Volvo com indicadores, avisos e orientações de uso.",
      cta: "Abrir guia do painel (PDF)",
    },
    {
      href: "/fichas-tecnicas/sistema-monitoramento-pneu-volvo.pdf",
      titulo: "Sistema de monitoramento de pneus Volvo (PDF)",
      descricao:
        "Guia do sistema TPMS Volvo: leitura de pressão, alertas, calibração e boas práticas operacionais.",
      cta: "Abrir guia de pneus (PDF)",
    },
    {
      href: "/fichas-tecnicas/caixa-mudancas-volvo.pdf",
      titulo: "Caixa de mudanças Volvo (PDF)",
      descricao:
        "Guia técnico da transmissão Volvo com modos de condução, recomendações e operação eficiente.",
      cta: "Abrir guia da transmissão (PDF)",
    },
    {
      href: "/fichas-tecnicas/simbolos-volvo.pdf",
      titulo: "Símbolos e luzes do painel Volvo (PDF)",
      descricao:
        "Guia oficial de símbolos, luzes de advertência e mensagens do painel Volvo.",
      cta: "Abrir guia de símbolos (PDF)",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-slate-50 to-white pb-24">
      {/* HERO – padrão FH/Scania Super */}
      <section className="w-full bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          {/* Texto */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#005B9A] mb-3">
              Linha fora de estrada • Volvo
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Volvo FMX
              <span className="block text-[#005B9A] text-xl md:text-2xl mt-1">
                Robustez e produtividade em aplicações severas
              </span>
            </h1>

            <p className="text-slate-700 leading-relaxed max-w-2xl">
              O Volvo FMX foi desenvolvido para operações exigentes como construção,
              obras pesadas e aplicações severas. Nesta página, você encontra uma
              visão técnica e didática: foco em motor, transmissão I-Shift,
              configurações de eixos, e materiais oficiais em PDF para consulta.
            </p>

            {/* Cards de destaque – padrão FH */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-[#005B9A]">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">
                  420 • 460 • 500 • 540 cv
                </p>
                <p className="text-[11px] text-slate-600">
                  Motores D13C com foco em torque e durabilidade.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-[#005B9A]">
                  Transmissão
                </p>
                <p className="text-lg font-bold text-slate-900">
                  I-Shift AT/ATO 2612F
                </p>
                <p className="text-[11px] text-slate-600">
                  Versões super-reduzidas para baixa velocidade e alto controle.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-amber-700">
                  Aplicações
                </p>
                <p className="text-lg font-bold text-slate-900">
                  Obras • Mineração leve
                </p>
                <p className="text-[11px] text-slate-600">
                  Basculantes, betoneiras, muncks e fora de estrada.
                </p>
              </div>
            </div>

            {/* CTA rápido (PDF principal) */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/volvo-fmx-max-6x4r.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#005B9A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#004B80] transition"
              >
                Baixar ficha técnica FMX (PDF)
              </a>

              <Link
                href="/caminhoes/volvo/i-shift"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Ver página da I-Shift
              </Link>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/trucks/volvo-fmx.jpg"
              alt="Volvo FMX em configuração fora de estrada"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        {/* CABINE & CONFORTO */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            Cabine pensada para ambientes severos
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
            A cabine do Volvo FMX foi projetada para resistir a ambientes de
            construção e mineração, com excelente visibilidade, acessos seguros e
            ergonomia para longas jornadas em condições difíceis.
          </p>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>• Estrutura reforçada e preparada para operação em vias irregulares.</li>
            <li>• Degraus e plataformas antiderrapantes para acesso seguro.</li>
            <li>• Painel moderno, leitura clara e comandos bem posicionados.</li>
            <li>• Configurações de conforto conforme a missão e o implemento.</li>
          </ul>
        </section>

        {/* TABELA – MOTORES */}
        <SpecTable
          title="Ficha técnica – Motores D13C"
          columns={["Motores", "D13C420", "D13C460", "D13C500", "D13C540"]}
          rows={[
            { label: "Aplicação", values: ["Todas", "Todas", "Todas", "Todas"] },
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
            { label: "Cilindros", values: ["6", "6", "6", "6"] },
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
                "VEB410/VEB510 (opc.)",
                "VEB410/VEB510 (opc.)",
                "VEB510",
                "VEB510",
              ],
            },
          ]}
          note="Valores de potência e torque conforme norma SAE J1349."
        />

        {/* TABELA – TRANSMISSÕES */}
        <SpecTable
          title="Transmissões – I-Shift AT/ATO 2612F"
          columns={[
            "Transmissão",
            "AT2612F",
            "ATO2612F (super-reduzida)",
            "AT2612F (super-reduzida)",
          ]}
          rows={[
            { label: "Motorização", values: ["Todas", "6×4 / 8×4", "6×4 / 8×4"] },
            {
              label: "Tipo",
              values: ["Automatizada", "Automatizada (overdrive)", "Automatizada"],
            },
            {
              label: "Troca de marchas",
              values: ["Manual ou automático", "Manual ou automático", "Manual ou automático"],
            },
            {
              label: "Número de marchas à frente",
              values: ["12", "13 (12 + 1 super-reduzida)", "14 (12 + 2 super-reduzida)"],
            },
            { label: "Número de marchas à ré", values: ["4", "6", "6"] },
            {
              label: "Relações 1ª / última marcha",
              values: ["14,94 / 1,00", "11,73 / 0,78", "14,94 / 1,00"],
            },
            {
              label: "Relação(ões) super-reduzida(s)",
              values: ["–", "17,54", "32,04 / 19,38"],
            },
          ]}
          note="As transmissões I-Shift podem incluir diferentes pacotes de software conforme a aplicação."
        />

        {/* TABELA – EIXOS TRASEIROS */}
        <SpecTable
          title="Eixos traseiros – configurações fora de estrada"
          columns={[
            "Eixos traseiros",
            "RSS1360",
            "RSH1370F",
            "RTS2370A",
            "RTH2610F",
            "RTH3210F",
            "RTH3312",
          ]}
          rows={[
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
            { label: "Redução nos cubos", values: ["Não", "Sim", "Não", "Sim", "Sim", "Sim"] },
            {
              label: "Tipo de carcaça",
              values: ["Fundida", "Fundida", "Fundida", "Fundida", "Fundida", "Fundida"],
            },
            { label: "CMT (ton.)", values: ["60", "70", "80", "100", "100 / 130*", "100 / 150*"] },
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
          ]}
          note="*Capacidades de CMT e relações de redução podem variar conforme combinação de eixos e suspensão."
        />

        {/* BLOCO FINAL – PDFs (data-driven, padrão FH) */}
        <section id="materiais-pdf" className="mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            Materiais oficiais em PDF
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {pdfItems.map((item) => (
              <div
                key={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[240px]"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.titulo}
                </h3>

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
              Quer aprofundar o estudo do Volvo FMX?
            </h3>

            <p className="mt-2 max-w-2xl text-slate-200">
              Use esta página como referência rápida e baixe a ficha técnica oficial
              para apoiar treinamentos, aplicação e operação em ambiente severo.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/volvo-fmx-max-6x4r.pdf"
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
                Baixar ficha técnica FMX (PDF)
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
      </div>
    </main>
  );
}
