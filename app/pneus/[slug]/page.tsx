// app/pneus/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pneus } from "@/data/pneus";

// Slugs válidos conforme data/pneus.ts
type PneuSlug = "direcional-liso" | "implementos" | "tracao" | "tracao-plus";

// Medidas por categoria (exemplo)
const sizeMap: Record<PneuSlug, string[]> = {
  "direcional-liso": ["295/80 R22.5 ⭐", "295/85 R22.5", "275/80 R22.5", "255/70 R22.5", "315/80 R22.5"],
  implementos:       ["295/80 R22.5 ⭐", "275/80 R22.5", "255/70 R22.5", "235/75 R17.5", "385/65 R22.5"],
  tracao:            ["295/80 R22.5 ⭐", "295/85 R22.5", "275/80 R22.5", "285/75 R24.5", "315/80 R22.5"],
  "tracao-plus":     ["295/80 R22.5 ⭐", "295/85 R22.5", "275/80 R22.5", "285/75 R24.5", "315/80 R22.5"],
};

// Tags de operação
const operationMap: Record<PneuSlug, string[]> = {
  "direcional-liso": ["Rodoviário", "Misto", "Urbano — Dianteiro"],
  implementos:       ["Reboques / eixos livres", "Carretas Baú", "Graneleira", "Frigorífica", "Sider/Prancha"],
  tracao:            ["Eixos motrizes", "Rodoviário/Misto"],
  "tracao-plus":     ["Eixos motrizes (uso severo)", "Misto/Pesado"],
};

// Dicas C1/C2/C3
const careItems = [
  {
    code: "C1",
    title: "Calibração em quente/frio",
    text:
      "Meça com o pneu frio (parado ≥ 3h). Em calor não reduza pressão; em frio evite rodar subcalibrado.",
  },
  {
    code: "C2",
    title: "Desgaste irregular (ombro/centro)",
    text:
      "Centro = pressão alta. Ombros = pressão baixa ou desalinhamento. Serrilhado = suspensão/rotação.",
  },
  {
    code: "C3",
    title: "Vida útil",
    text:
      "Checar pressão semanalmente, alinhar/balancear, rotacionar conforme plano, evitar sobrecarga.",
  },
];

// Geração estática das rotas
export function generateStaticParams() {
  return pneus.map((p) => ({ slug: p.slug }));
}

type Props = { params: { slug: string } };

export default function PneuDetailPage({ params }: Props) {
  const slug = params.slug as PneuSlug;
  const item = pneus.find((p) => p.slug === slug);
  if (!item) return notFound();

  const sizes = sizeMap[slug] ?? [];
  const ops = operationMap[slug] ?? [];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-slate-500 mb-4">
        <Link href="/" className="hover:underline">Início</Link> /{" "}
        <Link href="/pneus" className="hover:underline">Pneus</Link> /{" "}
        <span className="text-slate-700">{item.name}</span>
      </nav>

      {/* Cabeçalho */}
      <header className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-8">
        <div className="relative w-full md:w-[420px] bg-gray-50 rounded-2xl">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border">
            <Image
              src={item.file} // /images/pneus/pneu_*.jpg
              alt={item.name}
              fill
              sizes="(max-width:768px) 100vw, 420px"
              className="object-contain p-4"
              priority
            />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {item.name}
          </h1>
          <p className="mt-1 text-slate-600">
            {slug === "direcional-liso" ? "Eixo dianteiro (dirigibilidade e estabilidade)."
              : slug === "implementos" ? "Eixos livres de carretas (baixa resistência e estabilidade)."
              : slug === "tracao-plus" ? "Tração severa / uso pesado."
              : "Eixos motrizes (tração)."}
          </p>

          {/* Operações indicadas */}
          <div className="mt-4 flex flex-wrap gap-2">
            {ops.map((o) => (
              <span key={o} className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-medium">
                {o}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Medidas */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-slate-900">Medidas disponíveis</h2>
        <p className="text-sm text-slate-500 mb-2">A medida com ⭐ é a mais comum nesta categoria.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-3 py-2">Medida</th>
                <th className="px-3 py-2">Aro</th>
                <th className="px-3 py-2">Aplicação</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {sizes.map((m) => {
                const star = m.includes("⭐");
                const clean = m.replace(" ⭐", "");
                const aro = clean.split(" ").pop() || "—";
                const app =
                  slug === "implementos" ? "Reboques / eixos livres"
                  : slug === "tracao" || slug === "tracao-plus" ? "Eixos motrizes"
                  : "Eixo dianteiro";
                return (
                  <tr key={m} className="hover:bg-slate-50">
                    <td className="px-3 py-2 font-medium">
                      {star ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="inline-block w-2 h-2 rounded-full bg-amber-500" />
                          {clean}
                        </span>
                      ) : clean}
                    </td>
                    <td className="px-3 py-2">{aro}</td>
                    <td className="px-3 py-2">{app}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cuidados */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900 mb-3">Cuidados operacionais</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {careItems.map((c) => (
            <article key={c.code} className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold text-slate-500">{c.code}</div>
              <h3 className="mt-1 font-bold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-slate-700 text-sm leading-relaxed">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Voltar */}
      <div className="mt-10">
        <Link href="/pneus" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">
          ← Voltar para Pneus
        </Link>
      </div>
    </main>
  );
}
