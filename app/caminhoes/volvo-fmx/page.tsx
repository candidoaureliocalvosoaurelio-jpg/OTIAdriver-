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
      <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
        {title}
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 w-48">
                {columns[0]}
              </th>
              {columns.slice(1).map((col, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 font-semibold text-slate-900"
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
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="align-top px-4 py-3 text-sm font-semibold text-slate-900">
                  {row.label}
                </td>
                {row.values.map((value, vIdx) => (
                  <td
                    key={vIdx}
                    className="align-top px-4 py-3 text-sm text-slate-700"
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
    <main className="min-h-screen bg-slate-50 pb-16">
      <div className="max-w-6xl mx-auto px-4 pt-10">
        {/* CABEÇALHO / HERO */}
        <section className="flex flex-col gap-8 md:flex-row md:items-center mb-10">
          {/* Texto principal */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Caminhões Volvo · Linha Fora de Estrada
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
              Volvo FMX
            </h1>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              O Volvo FMX foi projetado especificamente para{" "}
              <span className="font-semibold">
                construção pesada, mineração leve e aplicações severas
              </span>
              . Combina robustez extrema, alto conforto de cabine e
              inteligência embarcada para operar com segurança em cenários
              onde a produtividade é crítica.
            </p>

            {/* Badges de destaques */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                Potência até 540 cv
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                Motores D13C Euro 5
              </span>
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                Configurações 6x4 e 8x4
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                CMT até 150 t*
              </span>
            </div>
          </div>

          {/* Imagem principal */}
          <div className="flex-1">
            <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-200">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/trucks/volvo-fmx.jpg"
                  alt="Volvo FMX em configuração fora de estrada"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <p className="mt-2 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa do Volvo FMX. Configurações variam conforme a
              aplicação.
            </p>
          </div>
        </section>

        {/* CARDS RESUMO */}
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Potência
            </p>
            <p className="mt-1 text-lg font-extrabold text-slate-900">
              420cv 460cv 500cv 540cv
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Motores D13C com freio-motor VEB/VEB+ integrado.
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Transmissão
            </p>
            <p className="mt-1 text-lg font-extrabold text-slate-900">
              I-Shift AT/ATO 2612F
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Automatizada, até 14 marchas à frente com super-reduzidas.
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Aplicações
            </p>
            <p className="mt-1 text-lg font-extrabold text-slate-900">
              Construção & Obras
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Ideal para basculantes, betoneiras, muncks e aplicações fora de
              estrada.
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow-sm border border-slate-200 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Robustez
            </p>
            <p className="mt-1 text-lg font-extrabold text-slate-900">
              CMT até 150 t*
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Eixos traseiros reforçados, redutores nos cubos e suspensões para
              serviço severo.
            </p>
          </div>
        </section>

        {/* BLOCO: CABINE & CONFORTO */}
        <section className="mt-12 grid gap-8 md:grid-cols-[1.2fr,1fr]">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
              Cabine pensada para ambientes severos
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              A cabine do Volvo FMX foi desenvolvida para resistir a ambientes
              de construção e mineração, com para-choque reforçado, ângulos de
              ataque otimizados e excelente visibilidade frontal e lateral.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                • Estrutura de cabine de alta resistência, preparada para
                impactos e operação em vias irregulares.
              </li>
              <li>
                • Degraus e plataformas antiderrapantes para acesso seguro à
                cabine e à parte frontal.
              </li>
              <li>
                • Painel moderno com fácil leitura, ergonomia ajustada ao
                motorista e múltiplos porta-objetos.
              </li>
              <li>
                • Opções de leito, ar-condicionado, climatizador e preparação
                para diversos implementos.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              {/* Pode reutilizar a mesma imagem até ter fotos internas específicas */}
              <Image
                src="/images/trucks/volvo-fmx.jpg"
                alt="Detalhe de cabine e conjunto Volvo FMX"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <p className="mt-2 text-[11px] text-slate-500 text-center">
              Layout ilustrativo. Imagens internas podem variar conforme
              configuração de cabine.
            </p>
          </div>
        </section>

        {/* TABELA – MOTORES */}
        <SpecTable
          title="Ficha Técnica – Motores D13C"
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
            {
              label: "Motorização",
              values: ["Todas", "6×4 / 8×4", "6×4 / 8×4"],
            },
            {
              label: "Tipo",
              values: [
                "Automatizada",
                "Automatizada (overdrive)",
                "Automatizada",
              ],
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
          title="Eixos Traseiros – Configurações Fora de Estrada"
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
              values: ["Fundida", "Fundida", "Fundida", "Fundida", "Fundida", "Fundida"],
            },
            {
              label: "CMT (Ton.)",
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
      </div>
    </main>
  );
}
