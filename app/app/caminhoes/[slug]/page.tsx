// app/app/caminhoes/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { trucks } from "@/data/trucks";

export const dynamic = "force-dynamic";

type PageProps = {
  params: { slug: string };
  searchParams?: { lang?: string };
};

function SpecsTable({ specs }: { specs?: Record<string, string> }) {
  if (!specs) return null;

  const entries = Object.entries(specs);
  if (entries.length === 0) return null;

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base md:text-lg font-extrabold text-slate-900">
        Especificações
      </h2>

      <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {entries.map(([k, v]) => (
          <div key={k} className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <dt className="text-xs font-extrabold uppercase tracking-wide text-slate-600">
              {k}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function CaminhaoDetalhePage({ params, searchParams }: PageProps) {
  const lang = searchParams?.lang || "pt";
  const slug = params.slug;

  const truck = trucks.find((t) => t.slug === slug);
  if (!truck) return notFound();

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#eef7ff] to-white pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-8">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href={`/caminhoes?lang=${lang}`}
            className="text-sm font-extrabold text-slate-700 hover:text-slate-900"
          >
            ← Voltar para a vitrine
          </Link>

          <Link
            href={`/planos?lang=${lang}`}
            className="text-sm font-extrabold text-sky-700 hover:text-sky-800"
          >
            Ver planos
          </Link>
        </div>

        {/* Hero */}
        <section className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative w-full bg-slate-50" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src={truck.file}
              alt={truck.name}
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 70vw"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
              {truck.name}
            </h1>

            {truck.description ? (
              <p className="mt-3 text-slate-600 leading-relaxed">{truck.description}</p>
            ) : (
              <p className="mt-3 text-slate-600">
                Conteúdo técnico e informações do caminhão.
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/caminhoes?lang=${lang}`}
                className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
              >
                Voltar para vitrine
              </Link>

              <Link
                href={`/planos?lang=${lang}`}
                className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
              >
                Assinar
              </Link>
            </div>
          </div>
        </section>

        {/* Specs */}
        <SpecsTable specs={truck.specs} />

        {/* Rodapé simples */}
        <div className="mt-10 text-center text-xs text-slate-500">
          OTIAdriver — Conteúdo técnico e educativo
        </div>
      </div>
    </main>
  );
}
