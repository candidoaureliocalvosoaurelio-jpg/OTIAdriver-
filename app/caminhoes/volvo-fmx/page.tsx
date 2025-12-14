// app/caminhoes/volvo-fmx/page.tsx
import Image from "next/image";

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

      <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
        <table className="min-w-full border-collapse text-sm md:text-base">
          <thead className="bg-sky-50">
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
              <tr key={row.label} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                <td className="align-top px-4 py-3 border-t border-slate-200 text-sm font-semibold text-slate-900">
                  {row.label}
                </td>
                {row.values.map((value, vIdx) => (
                  <td
                    key={vIdx}
                    className="align-top px-4 py-3 border-t border-slate-200 text-sm text-slate-700"
                  >
                    {value}
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

export default function VolvoFmxPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-slate-50 to-white pb-24">
      <div className="max-w-6xl mx-auto px-4 pt-10">
        {/* HERO / CABEÇALHO */}
        <section className="w-full bg-white/80 border border-slate-200 rounded-3xl shadow-sm px-4 md:px-8 py-8 md:py-10 mb-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] items-center">
            {/* Texto principal */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Caminhões Volvo • Linha fora de estrada
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                Volvo FMX
                <span className="block text-sky-500 text-xl md:text-2xl mt-1">
                  robustez, conforto e inteligência para obras e mineração.
                </span>
              </h1>
              <p className="mt-4 text-sm md:text-base text-slate-700 max-w-xl">
                O Volvo FMX foi projetado especificamente para{" "}
                <span className="font-semibold">
                  construção pesada, mineração leve e aplicações severas
                </span>
                . Combina robustez extrema, alto conforto de cabine e
                inteligência embarcada para operar com segurança em cenários
                onde a produtividade é crítica.
              </p>

              {/* Cards de destaque (formato semelhante ao FH/Scania) */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-xl bg-sky-50 border border-sky-100 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                    Potência
                  </p>
                  <p className="mt-1 text-lg md:text-xl font-bold text-slate-900">
                    420cv 460cv 500cv 540cv
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Motores D13C com freio-motor VEB/VEB+ integrado.
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Transmissão
                  </p>
                  <p className="mt-1 text-lg md:text-xl font-bold text-slate-900">
                    I-Shift AT/ATO 2612F
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Até 14 marchas à frente, versões super-reduzidas.
                  </p>
                </div>

                <div className="rounded-xl bg-amber-50 border border-amber-100 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                    Aplicações
                  </p>
                  <p className="mt-1 text-lg md:text-xl font-bold text-slate-900">
                    Construção & obras
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Basculantes, betoneiras, muncks e fora de estrada.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Robustez
                  </p>
                  <p className="mt-1 text-lg md:text-xl font-bold text-slate-900">
                    CMT até 150 t*
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Eixos reforçados, redutores nos cubos e suspensões severas.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagem principal */}
            <div>
              <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/trucks/volvo-fmx.jpg"
                    alt="Volvo FMX em configuração fora de estrada"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-500 text-center">
                Imagem ilustrativa do Volvo FMX. Configurações variam conforme a aplicação.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCO: CABINE & CONFORTO */}
        <section className="mt-8">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Cabine pensada para ambientes severos
            </h2>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
              A cabine do Volvo FMX foi desenvolvida para resistir a ambientes de
              construção e mineração, com para-choque reforçado, ângulos de ataque
              otimizados e excelente visibilidade frontal e lateral.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              <li>
                • Estrutura de cabine de alta resistência, preparada para impactos e
                operação em vias irregulares.
              </li>
              <li>
                • Degraus e plataformas antiderrapantes para acesso seguro à cabine e
                à parte frontal.
              </li>
              <li>
                • Painel moderno com fácil leitura, ergonomia ajustada ao motorista e
                múltiplos porta-objetos.
              </li>
              <li>
                • Opções de leito, ar-condicionado, climatizador e preparação para
                diversos implementos.
              </li>
            </ul>
          </div>
        </section>
        
        {/* TABELA – MOTORES */}
        <SpecTable
          title="Ficha técnica – Motores D13C"
          columns={["Motores", "D13C420", "D13C460", "D13C500", "D13C540"]}
          rows={[
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
              values: ["VEB410/VEB510 (opc.)", "VEB410/VEB510 (opc.)", "VEB510", "VEB510"],
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
              label: "Número de marchas à frente",
              values: ["12", "13 (12 + 1 super-reduzida)", "14 (12 + 2 super-reduzida)"],
            },
            {
              label: "Número de marchas à ré",
              values: ["4", "6", "6"],
            },
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
            {
              label: "Redução nos cubos",
              values: ["Não", "Sim", "Não", "Sim", "Sim", "Sim"],
            },
            {
              label: "Tipo de carcaça",
              values: [
                "Fundida",
                "Fundida",
                "Fundida",
                "Fundida",
                "Fundida",
                "Fundida",
              ],
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
          ]}
          note="*Capacidades de CMT e relações de redução podem variar conforme combinação de eixos e suspensão."
        />

        {/* BLOCO FINAL – Materiais em PDF (padrão OTIAdriver) */}
<section id="ficha-tecnica" className="mt-10">
  <div className="grid gap-6 md:grid-cols-3">
    {[
      {
        href: "/fichas-tecnicas/volvo-fmx-6x4.pdf",
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
    ].map((item) => (
      <div
        key={item.href}
        className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[240px]"
      >
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          {item.titulo}
        </h2>

        <p className="text-sm text-slate-700 mb-4">
          {item.descricao}
        </p>

        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
        >
          {item.cta}
        </a>
      </div>
    ))}
  </div>
</section>
 </div>
    </main>
  );
}
