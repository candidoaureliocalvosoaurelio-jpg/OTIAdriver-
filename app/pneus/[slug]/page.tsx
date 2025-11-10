// app/pneus/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pneus } from "@/data/pneus";

// Slugs conforme data/pneus.ts
type PneuSlug = "direcional-liso" | "implementos" | "tracao" | "tracao-plus";

/* ---------------------------------------------
   CONTEÚDOS PREMIUM: Benefícios • Medidas • Ficha
---------------------------------------------- */

// Medidas por categoria
const sizeMap: Record<PneuSlug, string[]> = {
  "direcional-liso": ["295/80 R22.5 ⭐", "295/85 R22.5", "275/80 R22.5", "255/70 R22.5", "315/80 R22.5"],
  implementos:       ["295/80 R22.5 ⭐", "275/80 R22.5", "255/70 R22.5", "235/75 R17.5", "385/65 R22.5"],
  tracao:            ["295/80 R22.5 ⭐", "295/85 R22.5", "275/80 R22.5", "285/75 R24.5", "315/80 R22.5"],
  "tracao-plus":     ["295/80 R22.5 ⭐", "295/85 R22.5", "275/80 R22.5", "285/75 R24.5", "315/80 R22.5"],
};

// Tags/Operações
const operationMap: Record<PneuSlug, string[]> = {
  "direcional-liso": ["Rodoviário", "Misto", "Urbano — Dianteiro"],
  implementos:       ["Reboques / eixos livres", "Baú", "Graneleira", "Frigorífica", "Sider/Prancha"],
  tracao:            ["Eixos motrizes", "Rodoviário/Misto"],
  "tracao-plus":     ["Eixos motrizes (uso severo)", "Misto/Pesado"],
};

// Benefícios (cards)
const benefitsMap: Record<PneuSlug, { title: string; text: string }[]> = {
  "direcional-liso": [
    { title: "Direção precisa", text: "Perfil otimizado para estabilidade e resposta rápida." },
    { title: "Aderência em chuva", text: "Sulcos e composição focados em pista molhada." },
    { title: "Desgaste uniforme", text: "Ombros reforçados reduzem serrilhamento." },
  ],
  implementos: [
    { title: "Baixo consumo", text: "Baixa resistência ao rolamento em operações logísticas." },
    { title: "Estabilidade", text: "Carcaça robusta para manobras e docas." },
    { title: "Desgaste regular", text: "Desenho que distribui pressão e reduz aquecimento." },
  ],
  tracao: [
    { title: "Tração forte", text: "Blocos profundos para máxima aderência no eixo motriz." },
    { title: "Autolimpeza", text: "Geometria favorece expulsão de detritos." },
    { title: "Durabilidade", text: "Compostos pensados para alto torque." },
  ],
  "tracao-plus": [
    { title: "Severo/Pesado", text: "Blocos reforçados para uso exigente e off/asfalto." },
    { title: "Aderência contínua", text: "Contato otimizado em pisos variados." },
    { title: "Alta resistência", text: "Estrutura para carga e temperatura elevadas." },
  ],
};

// Ficha técnica (chave→valor). Coloque apenas dados genéricos; específicos por marca você pode ajustar depois.
const specsMap: Record<PneuSlug, Record<string, string>> = {
  "direcional-liso": {
    "Aplicação": "Eixo dianteiro",
    "Índice de carga (típico)": "152/148",
    "Índice de velocidade (típico)": "M",
    "Construção": "Radial, aço",
    "Sentido de rodagem": "Não direcional",
    "Recapagem": "Apto (conforme fabricante)",
  },
  implementos: {
    "Aplicação": "Eixos livres / carretas",
    "Índice de carga (típico)": "152",
    "Índice de velocidade (típico)": "K–M",
    "Construção": "Radial, aço",
    "Talão": "Reforçado para manobras",
    "Recapagem": "Apto (conforme fabricante)",
  },
  tracao: {
    "Aplicação": "Eixos motrizes",
    "Índice de carga (típico)": "152/149",
    "Índice de velocidade (típico)": "K–M",
    "Construção": "Radial, aço",
    "Desenho": "Blocos profundos",
    "Recapagem": "Apto (conforme fabricante)",
  },
  "tracao-plus": {
    "Aplicação": "Eixos motrizes (severo)",
    "Índice de carga (típico)": "154/150",
    "Índice de velocidade (típico)": "K–M",
    "Construção": "Radial, aço",
    "Desenho": "Blocos robustos, alta profundidade",
    "Recapagem": "Apto (conforme fabricante)",
  },
};

// Dicas C1/C2/C3
const careItems = [
  { code: "C1", title: "Calibração em quente/frio", text: "Meça com pneu frio (≥3h parado). Em calor não reduza pressão; em frio evite rodar subcalibrado." },
  { code: "C2", title: "Desgaste irregular", text: "Centro = pressão alta. Ombros = pressão baixa/desalinhamento. Serrilhado = suspensão/rotação." },
  { code: "C3", title: "Vida útil", text: "Checar pressão semanal, alinhar/balancear, rotacionar, evitar sobrecarga e frenagens bruscas." },
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
  const benefits = benefitsMap[slug] ?? [];
  const specs = specsMap[slug] ?? {};

  const appText =
    slug === "implementos"
      ? "Reboques / eixos livres"
      : slug === "tracao" || slug === "tracao-plus"
      ? "Eixos motrizes"
      : "Eixo dianteiro";

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
              src={item.file}
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
          <p className="mt-1 text-slate-600">{appText}</p>

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

      {/* Benefícios */}
      <section className="mt-2">
        <h2 className="text-xl font-bold text-slate-900 mb-3">Benefícios principais</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((b) => (
            <article key={b.title} className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Medidas */}
      <section className="mt-8">
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
                return (
                  <tr key={m} className="hover:bg-slate-50">
                    <td className="px-3 py-2 font-medium">
                      {star ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
                          {clean}
                        </span>
                      ) : clean}
                    </td>
                    <td className="px-3 py-2">{aro}</td>
                    <td className="px-3 py-2">{appText}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ficha técnica */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-3">Ficha técnica</h2>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {Object.entries(specs).map(([k, v]) => (
              <div key={k} className="flex flex-col">
                <dt className="text-xs uppercase tracking-wide text-slate-500">{k}</dt>
                <dd className="text-slate-900 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-slate-500">
            * Valores típicos por categoria. Consulte o fabricante para índices exatos de cada modelo.
          </p>
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
