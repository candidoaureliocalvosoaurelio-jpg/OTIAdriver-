// app/pneus/implemento/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Pneus | Implemento / Livre (Carretas) | OTIAdriver",
  description:
    "Pneu de Implemento/Livre para carretas: rodoviário com foco em estabilidade, segurança e baixa resistência ao rolamento. Medidas e cuidados operacionais.",
};

export default function ImplementoPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* breadcrumb */}
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/pneus" className="hover:underline">
          Pneus
        </Link>{" "}
        / <span className="text-slate-700 font-medium">Implemento / Livre</span>
      </div>

      {/* header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Implemento / Livre <span className="text-slate-500">•</span>{" "}
          <span className="text-[#0F2454]">Carretas</span>
        </h1>
        <p className="mt-3 text-slate-600 text-lg md:text-xl">
          Visual <strong>rodoviário</strong> (médio), estável e eficiente:
          <strong> segurança</strong>, <strong>estabilidade</strong> e{" "}
          <strong>baixo consumo</strong> para operações de logística.
        </p>
      </header>

      {/* foto principal (3:2) */}
      <div className="rounded-2xl overflow-hidden bg-white shadow ring-1 ring-slate-100 mb-10">
        <div className="relative w-full" style={{ aspectRatio: "3 / 2" }}>
          <Image
            src="/images/tires/implemento.jpg"
            alt="Pneu de Implemento/Livre com aro cromado - OTIAdriver"
            fill
            priority
            sizes="(max-width:768px) 100vw, 1000px"
            className="object-contain bg-[#f3f6fa]"
          />
        </div>
      </div>

      {/* aplicações por tipo de carreta */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
          Aplicações por tipo de carreta (rodoviário)
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-1">Graneleira (Agro)</h3>
            <p className="text-sm text-slate-600">
              Estabilidade em carga volumosa; desenho que reduz aquecimento.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-1">Baú (Mercadorias)</h3>
            <p className="text-sm text-slate-600">
              Baixa resistência ao rolamento e desgaste uniforme.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-1">Frigorífica</h3>
            <p className="text-sm text-slate-600">
              Estabilidade e segurança em pavimento molhado/temperaturas baixas.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-1">Sider / Prancha</h3>
            <p className="text-sm text-slate-600">
              Robustez em docas, manobras laterais e pisos abrasivos.
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
            * Verifique índice de carga/velocidade e capacidade por eixo conforme fabricante.
          </p>
        </div>
      </section>

      {/* cuidados C1/C2/C3 com ênfase em segurança/estabilidade */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
          Cuidados operacionais (C1 • C2 • C3)
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold text-sky-700 mb-1">C1</div>
            <h3 className="font-semibold mb-2">Calibração (quente/frio)</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Pressão correta = estabilidade da carreta e menor aquecimento.</li>
              <li>Calibrar com pneus frios; ajuste por variação térmica.</li>
              <li>Manômetro confiável e inspeção periódica por eixo.</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 mb-1">C2</div>
            <h3 className="font-semibold mb-2">Desgaste irregular</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Centro = pressão alta; ombro = pressão baixa.</li>
              <li>“Arraste” lateral em manobras exige verificação frequente.</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 mb-1">C3</div>
            <h3 className="font-semibold mb-2">Vida útil e segurança</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Rotação planejada entre eixos da carreta.</li>
              <li>Dirigir suavemente, evitar sobrecarga e excesso de velocidade.</li>
              <li>Inspecionar talões e válvulas; reparar cortes de imediato.</li>
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
