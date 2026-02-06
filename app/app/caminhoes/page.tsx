// app/app/caminhoes/page.tsx
import Link from "next/link";
import { TruckGrid } from "@/components/TruckGrid";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function CaminhoesIndexPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams
    ? await searchParams
    : undefined;

  const lang = resolvedSearchParams?.lang ?? "pt";

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#eef7ff] to-white pb-16">
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={`/app?lang=${lang}`}
            className="text-sm font-extrabold text-sky-700 hover:text-sky-800"
          >
            ← Voltar para o Início (Premium)
          </Link>

          <Link
            href={`/app?lang=${lang}`}
            className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            Início
          </Link>
        </div>

        <h1 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Caminhões — Catálogo Premium
        </h1>

        <p className="mt-3 text-slate-600 max-w-2xl">
          Abra qualquer modelo para ver o conteúdo completo.
        </p>

        <div className="mt-8">
          <TruckGrid lang={lang} />
        </div>
      </section>
    </main>
  );
}
