// app/pneus/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pneus, getTireBySlug, type TireSlug } from "@/data/pneus";

// ---------- mapas por categoria ----------
const sizeMap: Record<TireSlug, string[]> = {
  'direcional-liso': ["295/80 R22.5 ⭐", "295/85 R22.5", "275/80 R22.5", "255/70 R22.5", "315/80 R22.5"],
  'implementos':     ["295/80 R22.5 ⭐", "275/80 R22.5", "255/70 R22.5", "235/75 R17.5", "385/65 R22.5"],
  'tracao':          ["295/80 R22.5 ⭐", "295/85 R22.5", "275/80 R22.5", "285/75 R24.5", "315/80 R22.5"],
  'tracao-plus':     ["295/80 R22.5 ⭐", "295/85 R22.5", "275/80 R22.5", "285/75 R24.5", "315/80 R22.5"],
};

const operationMap: Record<TireSlug, string[]> = {
  'direcional-liso': ["Rodoviário", "Misto", "Urbano — Dianteiro"],
  'implementos':     ["Carreta Graneleira", "Carreta Baú", "Carreta Frigorífica", "Sider / Prancha"],
  'tracao':          ["Rodoviário", "Misto", "Urbano — Motriz"],
  'tracao-plus':     ["Rodoviário Pesado", "Misto", "Off-road leve — Motriz"],
};

const careItems = [
  {
    code: "C1",
    title: "Calibração (quente/frio)",
    text:
      "Calibre com o pneu frio. Ajuste por variação térmica. Use manômetro confiável e siga a pressão recomendada pelo fabricante/veículo.",
  },
  {
    code: "C2",
    title: "Desgaste irregular (ombro/centro)",
    text:
      "Centro gasto = pressão alta. Ombros gastos = pressão baixa. Serrilhamento indica alinhamento/suspensão/rotação inadequados.",
  },
  {
    code: "C3",
    title: "Vida útil e segurança",
    text:
      "Cheque pressão semanalmente, alinhe/balanceie periodicamente, planeje rotação por eixo e evite sobrecarga e frenagens bruscas.",
  },
];

// Gera as rotas estáticas /pneus/[slug]
export function generateStaticParams() {
  return pneus.map((t) => ({ slug: t.slug }));
}

type Props = { params: { slug: string } };

export default function TireDetailPage({ params }: Props) {
  const slug = params.slug as TireSlug;
  const cat = getTireBySlug(slug);
  if (!cat) return notFound();

  const sizes = sizeMap[slug];
  const ops = operationMap[slug];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-slate-500 mb-4">
        <Link href="/" className="hover:underline">Início</Link> /{" "}
        <Link href="/pneus" className="hover:underline">Pneus</Link> /{" "}
        <span className="text-slate-700">{cat.title}</span>
      </nav>

      {/* Cabeçalho */}
      <header className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-8">
        <div className="relative w-full md:w-[440px]">
          <div className="relative w-full overflow-hidden rounded-2xl border bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
            <Image
              src={cat.image}
              alt={`${cat.title} - ${cat.subtitle}`}
              fill
              sizes="(max-width:768px) 100vw, 440px"
              className="object-contain p-4"
              priority
            />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {cat.title}
          </h1>
          <p className="mt-1 text-slate-600">{cat.subtitle}</p>
          <p className="mt-4 text-slate-700 leading-relaxed">{cat.blurb}</p>

          {/* Operações indicadas */}
          <div className="mt-4 flex flex-wrap gap-2">
            {ops.map((o) => (
              <span
                key={o}
                className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-medium"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Medidas */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-slate-900">Medidas disponíveis</h2>
        <p className="text-sm text-slate-500 mb-2">A medida com ⭐ é a principal/mais utilizada.</p>

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
                const isStar = m.includes("⭐");
                const clean = m.replace(" ⭐", "");
                const aro = clean.split(" ").pop() || "—";
                return (
                  <tr key={m} className="hover:bg-slate-50">
                    <td className="px-3 py-2 font-medium">
                      {isStar ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="inline-block w-2 h-2 rounded-full bg-amber-500" />
                          {clean}
                        </span>
                      ) : (
                        clean
                      )}
                    </td>
                    <td className="px-3 py-2">{aro}</td>
                    <td className="px-3 py-2">
                      {slug === "implementos"
                        ? "Reboques / eixos livres"
                        : slug.startsWith("tracao")
                        ? "Eixos motrizes"
                        : "Eixo dianteiro"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cuidados */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          Cuidados operacionais (segurança & estabilidade)
        </h2>
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

      {/* CTAs */}
      <div className="mt-10 flex items-center justify-between gap-3">
        <Link
          href="/pneus"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50"
        >
          ← Voltar para Pneus
        </Link>

        {/* Troque por seu WhatsApp quando quiser:
           href={`https://wa.me/55SEUNUMERO?text=${encodeURIComponent('Quero orçamento de ' + cat.title)}`}
        */}
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
