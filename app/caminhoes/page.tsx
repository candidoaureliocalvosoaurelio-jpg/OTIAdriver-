// app/caminhoes/page.tsx
import Link from "next/link";
import { TruckGrid } from "@/components/TruckGrid";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams?: { lang?: string };
};

export default function CaminhoesIndex({ searchParams }: PageProps) {
  const lang = searchParams?.lang ?? "pt";

  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
            Plataforma OTIAdriver
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Caminhões (todas as marcas)
          </h1>

          <p className="mt-2 text-slate-600">
            Selecione uma marca para ver as informações completas.
          </p>

          <div className="mt-4">
            <Link href={`/?lang=${lang}`} className="text-sm text-slate-500 hover:underline">
              ← Voltar para a vitrine
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pt-8">
        <TruckGrid lang={lang} />
      </section>
    </main>
  );
}
