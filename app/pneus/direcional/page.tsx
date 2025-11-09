// app/pneus/direcional/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Pneus | Direcional (Eixo Dianteiro) | OTIAdriver",
  description:
    "Pneu Direcional para eixo dianteiro: dirigibilidade, estabilidade e segurança em pista molhada. Medidas e cuidados operacionais.",
};

export default function DirecionalPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* título + breadcrumb */}
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/pneus" className="hover:underline">
          Pneus
        </Link>{" "}
        / <span className="text-slate-700 font-medium">Direcional</span>
      </div>

      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Direcional <span className="text-slate-500">•</span>{" "}
          <span className="text-[#0F2454]">Eixo Dianteiro</span>
        </h1>
        <p className="mt-3 text-slate-600 text-lg md:text-xl">
          Foco em <strong>dirigibilidade</strong>,{" "}
          <strong>estabilidade</strong> e{" "}
          <strong>segurança em pista molhada</strong>.
        </p>
      </header>

      {/* heroshot */}
      <div className="rounded-2xl overflow-hidden bg-white shadow ring-1 ring-slate-100 mb-10">
        <div
          className="relative w-full"
          style={{ aspectRatio: "3 / 2" }}
          aria-label="Pneu Direcional – foto principal"
        >
          <Image
            src="/images/tires/direcional.jpg"
            alt="Pneu Direcional com aro cromado - OTIAdriver"
            fill
            priority
            sizes="(max-width:768px) 100vw, 1000px"
            className="object-contain bg-[#f3f6fa]"
          />
        </div>
      </div>

      {/* aplicações */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
          Aplicação e tipo de operação
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-1">Rodoviário</h3>
            <p className="text-sm text-slate-600">
              Longo/curto curso em asfalto. Direção precisa e baixo ruído.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-1">Misto</h3>
            <p className="text-sm text-slate-600">
              Trechos ocasionais de terra/saibro. Carcaça e desenho que mantêm a
              estabilidade.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-1">Urbano</h3>
            <p className="text-sm text-slate-600">
              Paradas frequentes. Ombros reforçados e boa resposta de direção.
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
            {/* principal */}
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
            * As disponibilidades variam por marca/fabricante. Confirme a carga
            máxima e o índice de velocidade compatíveis com o veículo.
          </p>
        </div>
      </section>

      {/* cuidados operacionais (C1/C2/C3) */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
          Cuidados operacionais (C1 • C2 • C3)
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* C1 */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold text-sky-700 mb-1">C1</div>
            <h3 className="font-semibold mb-2">
              Como calibrar nos dias quentes e frios
            </h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Calibre sempre com o pneu frio (parado &gt; 2h).</li>
              <li>
                Variação de temperatura altera a pressão: ajuste no início do
                turno.
              </li>
              <li>
                Use manômetro confiável e siga a pressão indicada pelo
                fabricante/veículo.
              </li>
            </ul>
          </div>

          {/* C2 */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 mb-1">C2</div>
            <h3 className="font-semibold mb-2">
              Como verificar desgaste irregular (ombro / centro)
            </h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Desgaste maior no centro = pressão alta.</li>
              <li>Desgaste nos ombros = pressão baixa.</li>
              <li>
                Serrilhamento/“cupping” = alinhamento/camber ou componentes de
                suspensão.
              </li>
            </ul>
          </div>

          {/* C3 */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 mb-1">C3</div>
            <h3 className="font-semibold mb-2">
              Como prolongar a vida útil do pneu
            </h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Rotacione conforme plano de manutenção.</li>
              <li>Alinhe e balanceie em intervalos regulares.</li>
              <li>
                Dirija suavemente (sem frenagens/esterços bruscos) e evite
                sobrecarga.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
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
