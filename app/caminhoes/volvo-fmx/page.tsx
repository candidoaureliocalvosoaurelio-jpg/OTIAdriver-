// app/caminhoes/volvo-fmx/page.tsx
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
      <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
        {title}
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-[680px] w-full text-left text-sm md:text-[0.95rem]">
          <thead className="bg-slate-50">
            <tr>
              <th className="py-3 px-4 font-semibold text-slate-700 w-[180px]">
                Item
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  className="py-3 px-4 font-semibold text-slate-700"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-t border-slate-100 align-top"
              >
                <td className="py-3 px-4 font-semibold text-slate-800">
                  {row.label}
                </td>
                {row.values.map((value, idx) => (
                  <td
                    key={idx}
                    className="py-3 px-4 text-slate-700 leading-relaxed"
                  >
                    {value || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note && (
        <p className="mt-2 text-xs text-slate-500">{note}</p>
      )}
    </section>
  );
}

export default function VolvoFmxPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-sky-50/80 via-white to-slate-50 pb-24">
      {/* HERO */}
      <section className="w-full border-b border-slate-100 bg-gradient-to-r from-sky-900 via-sky-800 to-emerald-500">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.25fr,1fr] gap-10 items-center text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-sky-200 mb-3">
              Caminhões Volvo • Linha Fora de Estrada
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Volvo FMX
            </h1>
            <p className="text-base md:text-lg text-sky-50/95 max-w-xl mb-6">
              O Volvo FMX foi projetado especificamente para construção pesada,
              mineração leve e aplicações severas. Combina robustez extrema,
              alto conforto de cabine e inteligência embarcada para operar com
              segurança em cenários onde a produtividade é crítica.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 text-xs md:text-[0.8rem]">
              <span className="px-3 py-1 rounded-full bg-sky-700/70 border border-sky-300/40">
                Potência até <strong>540 cv</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-700/70 border border-sky-300/40">
                Motores <strong>D13C Euro 5</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-700/70 border border-sky-300/40">
                Configurações <strong>6x4</strong> e <strong>8x4</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-700/70 border border-sky-300/40">
                CMT até <strong>150 t</strong>*
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl bg-sky-900/60 border border-sky-300/30 px-4 py-3">
                <p className="text-xs text-sky-200">Potência</p>
                <p className="text-lg font-bold">460–540 cv</p>
                <p className="text-[0.7rem] text-sky-100/80">
                  Motores D13C com freio-motor VEB/VEB+ integrado.
                </p>
              </div>
              <div className="rounded-2xl bg-sky-900/60 border border-sky-300/30 px-4 py-3">
                <p className="text-xs text-sky-200">Transmissão</p>
                <p className="text-lg font-bold">I-Shift AT/ATO 2612F</p>
                <p className="text-[0.7rem] text-sky-100/80">
                  Automatizada, até 14 marchas à frente com super-reduzidas.
                </p>
              </div>
              <div className="rounded-2xl bg-sky-900/60 border border-sky-300/30 px-4 py-3">
                <p className="text-xs text-sky-200">Aplicações</p>
                <p className="text-lg font-bold">Construção & Obras</p>
                <p className="text-[0.7rem] text-sky-100/80">
                  Ideal para basculantes, betoneiras, muncks e aplicações fora
                  de estrada.
                </p>
              </div>
            </div>
          </div>

          {/* Imagem hero */}
          <div className="relative w-full h-[260px] md:h-[320px] lg:h-[360px]">
            <div className="absolute inset-0 rounded-[32px] bg-sky-900/40 blur-3xl" />
            <div className="relative h-full w-full rounded-[28px] overflow-hidden border border-sky-100/40 bg-slate-900/60 shadow-2xl shadow-sky-900/40">
              <Image
                src="/images/caminhoes/volvo-fmx/hero-volvo-fmx.jpg"
                alt="Volvo FMX em operação fora de estrada"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 mt-10">
        {/* RESUMO E APLICAÇÕES */}
        <section className="grid md:grid-cols-[1.35fr,1fr] gap-10 mb-12">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
              Pensado para operações severas
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              O Volvo FMX é um caminhão vocacional desenvolvido para encarar
              ambientes de obra, mineração leve, pedreiras e estradas não
              pavimentadas. A suspensão, o chassi e a proteção do trem de força
              foram otimizados para reduzir paradas não programadas e aumentar a
              disponibilidade da frota.
            </p>
            <p className="text-slate-700 leading-relaxed mb-5">
              Combinando o conforto da família FH com soluções voltadas ao
              trabalho pesado, o FMX oferece ergonomia de automóvel, segurança
              avançada e alta capacidade de carga por eixo, mantendo baixo
              consumo de combustível e custo por tonelada transportada.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm px-4 py-3">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Aplicações típicas
                </h3>
                <ul className="space-y-1 text-slate-700">
                  <li>• Basculantes 6x4 e 8x4</li>
                  <li>• Betoneiras, bombas e muncks</li>
                  <li>• Transporte de agregados e minérios leves</li>
                  <li>• Obras de infraestrutura e terraplenagem</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm px-4 py-3">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Conforto e segurança
                </h3>
                <ul className="space-y-1 text-slate-700">
                  <li>• Cabine com suspensão e isolamento acústico</li>
                  <li>• Painel moderno com ergonomia para uso intenso</li>
                  <li>• Sistemas de freio com VEB/VEB+ e ABS</li>
                  <li>• Preparação para telemetria e conectividade</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card de aplicação com imagem */}
          <div className="relative">
            <div className="rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden h-full flex flex-col">
              <div className="relative w-full h-48">
                <Image
                  src="/images/caminhoes/volvo-fmx/volvo-fmx-obras.jpg"
                  alt="Volvo FMX trabalhando em obra de construção"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <div className="p-5 space-y-2 text-sm">
                <h3 className="text-base font-semibold text-slate-900">
                  Robustez para o canteiro de obras
                </h3>
                <p className="text-slate-700">
                  Para uso severo, o FMX oferece para-choque reforçado, maior
                  ângulo de ataque, proteção inferior e soluções que reduzem
                  danos em manobras de carregamento.
                </p>
                <p className="text-[0.78rem] text-slate-500">
                  Imagem meramente ilustrativa. As configurações podem variar
                  conforme o mercado e o encarroçamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FICHA TÉCNICA RESUMIDA */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold text-slate-900 mb-1">
                Motorização D13C
              </h3>
              <ul className="space-y-1 text-slate-700">
                <li>• 460, 500 e 540 cv</li>
                <li>• 6 cilindros em linha, 12,8 L</li>
                <li>• Injeção direta com gerenciamento eletrônico</li>
                <li>• Freio-motor VEB410/VEB510 integrado</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold text-slate-900 mb-1">
                Transmissão I-Shift
              </h3>
              <ul className="space-y-1 text-slate-700">
                <li>• AT2612F, ATO2612F e AT2612F com super-reduzida</li>
                <li>• Automatizada, troca manual ou automática</li>
                <li>• Até 14 marchas à frente e 6 à ré</li>
                <li>• Relações adequadas a off-road e rodoviário</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold text-slate-900 mb-1">
                Eixos traseiros
              </h3>
              <ul className="space-y-1 text-slate-700">
                <li>• RTS2370A, RTH2610F e RTH3312 (FMX Max)</li>
                <li>• Opcões com e sem redução nos cubos</li>
                <li>• CMT de 80 a 150 toneladas*</li>
                <li>• Bloqueio entre-eixos e entre rodas</li>
              </ul>
            </div>
          </div>

          <p className="mt-2 text-[0.78rem] text-slate-500">
            *Valores de CMT e capacidade máxima dependem da legislação local, do
            tipo de implemento e da configuração de pneus/eixos. Consulte
            sempre a documentação oficial Volvo e a rede de concessionários.
          </p>
        </section>

        {/* FICHA TÉCNICA DETALHADA – TABELAS */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
            Ficha técnica detalhada
          </h2>
          <p className="text-sm text-slate-700 mb-4">
            Abaixo estão os principais dados técnicos de motores, transmissões e
            eixos traseiros disponíveis para a linha Volvo FMX. Os valores podem
            variar conforme o mercado, a norma de emissões e o ano/modelo.
          </p>

          {/* MOTORES */}
          <SpecTable
            title="Motores Volvo D13C – Euro 5"
            columns={["D13C460", "D13C500", "D13C540"]}
            rows={[
              {
                label: "Aplicação",
                values: ["Todas", "Todas", "Todas"],
              },
              {
                label: "Tipo de injeção",
                values: [
                  "Injeção direta com unidades injetoras e gerenciamento eletrônico",
                  "Injeção direta com unidades injetoras e gerenciamento eletrônico",
                  "Injeção direta com unidades injetoras e gerenciamento eletrônico",
                ],
              },
              {
                label: "Potência",
                values: [
                  "460 cv – 338 kW (1400–1900 rpm)",
                  "500 cv – 368 kW (1400–1900 rpm)",
                  "540 cv – 397 kW (1450–1900 rpm)",
                ],
              },
              {
                label: "Torque",
                values: [
                  "2300 Nm (235 kgfm) @ 1000–1400 rpm",
                  "2500 Nm (255 kgfm) @ 1050–1400 rpm",
                  "2600 Nm (265 kgfm) @ 1050–1450 rpm",
                ],
              },
              {
                label: "Cilindros",
                values: ["6", "6", "6"],
              },
              {
                label: "Cilindrada",
                values: ["12,8 L", "12,8 L", "12,8 L"],
              },
              {
                label: "Freio-motor",
                values: [
                  "VEB410 / VEB510 (opcional)",
                  "VEB510",
                  "VEB510",
                ],
              },
            ]}
            note="VEB (Volvo Engine Brake) é o freio-motor de alta eficiência integrado ao trem de força Volvo."
          />

          {/* TRANSMISSÃO */}
          <SpecTable
            title="Transmissões I-Shift – Série 2600"
            columns={[
              "AT2612F",
              "ATO2612F (super-reduzida)",
              "AT2612F (super-reduzida)",
            ]}
            rows={[
              {
                label: "Motorização",
                values: ["Todas", "6x4 / 8x4", "6x4 / 8x4"],
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
                  "Seleção manual ou automática",
                  "Seleção manual ou automática",
                  "Seleção manual ou automática",
                ],
              },
              {
                label: "Nº de marchas à frente",
                values: ["12", "13 (12 + 1 super-reduzida)", "14 (12 + 2 super-reduzidas)"],
              },
              {
                label: "Nº de marchas à ré",
                values: ["4", "6", "6"],
              },
              {
                label: "Relações 1ª / última marcha",
                values: ["14,94 / 1,00", "11,73 / 0,78", "14,94 / 1,00"],
              },
              {
                label: "Relação(ões) super-reduzida(s)",
                values: ["—", "17,54", "32,04 / 19,38"],
              },
            ]}
          />

          {/* EIXOS TRASEIROS */}
          <SpecTable
            title="Eixos traseiros – Linha FMX"
            columns={["RTS2370A", "RTH2610F", "RTH3312 (FMX Max)"]}
            rows={[
              {
                label: "Aplicação",
                values: ["6x4", "6x4 / 8x4", "6x4 / 8x4"],
              },
              {
                label: "Tipo",
                values: [
                  "Simples velocidade",
                  "Simples velocidade",
                  "Simples velocidade",
                ],
              },
              {
                label: "Redução nos cubos",
                values: ["Não", "Sim", "Sim"],
              },
              {
                label: "Tipo de carcaça",
                values: ["Fundida", "Fundida", "Fundida"],
              },
              {
                label: "CMT (Ton.)",
                values: ["80", "100", "100 / 150*"],
              },
              {
                label: "Relações de redução",
                values: [
                  "2,83 / 3,09 / 3,40 / 3,78 / 4,50 / 6,18",
                  "3,33 / 3,46 / 3,61 / 3,76 / 3,97 / 4,12 / 4,55 / 5,41 / 6,18 / 7,21*",
                  "3,61 / 3,76 / 3,97 / 4,12 / 4,55 / 5,41 / 6,18 / 7,21",
                ],
              },
              {
                label: "Bloqueio de diferencial",
                values: [
                  "Entre-eixos e entre rodas",
                  "Entre rodas",
                  "Entre-eixos e entre rodas",
                ],
              },
            ]}
            note="*Configurações especiais de CMT e relação de redução disponíveis conforme mercado e aplicação. Consulte sempre a Volvo."
          />
        </section>

        {/* CALL TO ACTION / LINK GERAL */}
        <section className="mt-10">
          <div className="rounded-3xl bg-gradient-to-r from-sky-900 via-sky-800 to-emerald-500 text-white px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-lg">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold mb-2">
                Quer comparar o FMX com outros modelos Volvo?
              </h2>
              <p className="text-sm md:text-[0.95rem] text-sky-50/95 max-w-xl">
                Utilize o conteúdo técnico da OTIAdriver para estudar diferenças
                entre configurações de motor, transmissão e eixos antes de
                definir a especificação ideal para sua operação.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/caminhoes"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-sky-900 font-semibold text-sm shadow-sm hover:bg-slate-50 transition"
              >
                Ver todos os caminhões
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
