// app/app/caminhoes/page.tsx
import Link from "next/link";
import { TruckGrid } from "@/components/TruckGrid";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams?: { lang?: string };
};

export default function CaminhoesIndexPage({ searchParams }: PageProps) {
  const lang = searchParams?.lang ?? "pt";

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#eef7ff] to-white pb-16">
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={`/?lang=${lang}`}
            className="text-sm font-extrabold text-sky-700 hover:text-sky-800"
          >
            ← Voltar para a Home
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href={`/entrar?lang=${lang}`}
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Entrar
            </Link>
            <Link
              href={`/planos?lang=${lang}`}
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-2 text-sm font-extrabold text-white hover:bg-sky-700"
            >
              Ver planos
            </Link>
          </div>
        </div>

        <h1 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Caminhões — Vitrine
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Visualize os modelos em formato vitrine. Para acessar conteúdos completos e materiais técnicos,
          faça login. Sem assinatura ativa, você será direcionado aos planos.
        </p>

        <div className="mt-8">
          <TruckGrid lang={lang} />
        </div>
      </section>
    </main>
  );
}
