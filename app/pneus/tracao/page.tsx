// app/pneus/tracao/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Pneus | Tração (Eixo de Tração) | OTIAdriver",
  description:
    "Pneu de Tração para eixo motriz: blocos robustos, aderência e transferência de torque em subidas, chuva e pisos mistos. Medidas e cuidados operacionais.",
};

export default function TracaoPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* breadcrumb */}
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/pneus" className="hover:underline">
          Pneus
        </Link>{" "}
        / <span className="text-slate-700 font-medium">Tração</span>
      </div>

      {/* header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Tração <span className="text-slate-500">•</span>{" "}
          <span className="text-[#0F2454]">Eixo Motriz</span>
        </h1>
        <p className="mt-3 text-slate-600 text-lg md:text-xl">
          Blocos <strong>mais visíveis</strong>, estilo nacional (Pirelli/Goodyear),
          com foco em <strong>aderência</strong>,{" "}
          <strong>transferência de torque</strong> e{" "}
          <strong>segurança/estabilidade</strong> em subidas e piso molhado.
        </p>
      </header>

      {/* foto principal (3:2) */}
      <div className="rounded-2xl overflow-hidden bg-white shadow ring-1 ring-slate-100 mb-10">
        <div className="relative w-full" style={{ aspectRatio: "3 / 2" }}>
          <Image
            src="/images/tires/tracao.jpg"
            alt="Pneu de Tração com aro cromado - OTIAdriver"
            fill
            priority
            sizes="(max-width:768px) 100vw, 1000px"
            className="object-contain bg-[#f3f6fa]"
          />
        </div>
      </div>

      {/* aplicação */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
          Aplicação e tipo de operação
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-1">Rodoviário</h3>
            <p className="text-sm text-slate-600">
              Foco em quilometragem e tração consistente sob chuva.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-1">Misto</h3>
            <p className="text-sm text-slate-600">
              Sulcos mais abertos para evacuar lama/saibro e manter aderência.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-1">Urbano</h3>
            <p className="text-sm text-slate-600">
              Robustez para arrancadas frequentes e curvas fechadas.
            </p>
          </div>
        </div>
      </section>

      {/* medidas */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
          Medidas mais usadas no Brasil
        </h2>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-between rounded-xl border p-4">
              <div className="font-semibold">295/80 R22.5</div>
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                principal
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border p-4">
              <div className="font-semibold">295/85 R22.5</div>
              <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                alternativa
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border p-4">
              <div className="font-semibold">275/80 R22.5</div>
              <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                alternativa
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border p-4">
              <div className="font-semibold">255/70 R22.5</div>
              <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                urbano
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            * Confirmar índice de carga/velocidade com o manual do veículo e o fabricante.
          </p>
        </div>
      </section>

      {/* cuidados C1/C2/C3 */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
          Cuidados operacionais (C1 • C2 • C3)
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold text-sky-700 mb-1">C1</div>
            <h3 className="font-semibold mb-2">Calibração em dias quentes e frios</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Calibrar sempre com pneu frio; ajuste no início do turno.</li>
              <li>Atenção à variação térmica que altera a pressão.</li>
              <li>Use manômetro confiável e siga as recomendações.</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 mb-1">C2</div>
            <h3 className="font-semibold mb-2">Desgaste irregular (ombro/centro)</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Centro = pressão alta; ombros = pressão baixa.</li>
              <li>“Escama” pode indicar desalinhamento ou suspensão.</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 mb-1">C3</div>
            <h3 className="font-semibold mb-2">Como prolongar a vida útil</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Plano de rotação; alinhamento e balanceamento regulares.</li>
              <li>Evitar patinagem e sobrecarga; condução suave.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/pneus"
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-slate-700 hover:bg-slate-50"
        >
          ← Voltar para Pneus
        </Link>
        <Link
          href="/contato"
          className="inline-flex items-center gap-2 rounded-lg bg-[#0F2454] px-4 py-2 text-white hover:opacity-90"
        >
          Solicitar orçamento
        </Link>
      </div>
    </main>
  );
}
