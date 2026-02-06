// app/app/caminhoes/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { trucks } from "@/data/trucks";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ lang?: string }>;
};

function SpecsTable({ specs }: { specs?: Record<string, string> }) {
  if (!specs) return null;

  const entries = Object.entries(specs);
  if (entries.length === 0) return null;

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base md:text-lg font-extrabold text-slate-900">
        Especificações (conteúdo completo)
      </h2>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {entries.map(([k, v]) => (
          <div
            key={k}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
          >
            <div className="text-xs font-extrabold tracking-wide text-slate-500 uppercase">
              {k}
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-900">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function CaminhaoPremiumPage({
  params,
  searchParams,
}: PageProps) {

  const resolvedParams = await params;
  const resolvedSearchParams = searchParams
    ? await searchParams
    : undefined;

  const lang = resolvedSearchParams?.lang ?? "pt";

  const t = trucks.find((x) => x.slug === resolvedParams.slug);
  if (!t) return notFound();

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#eef7ff] to-white pb-16">
      
      {/* Top breadcrumb */}
      <section className="pt-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between gap-3">
            <Link
              href={`/app/caminhoes?lang=${lang}`}
              className="text-sm font-extrabold text-sky-700 hover:text-sky-800"
            >
              ← Voltar para caminhões (Premium)
            </Link>

            <Link
              href={`/app?lang=${lang}`}
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Início
            </Link>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="mt-5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            <div className="absolute inset-0">
              <div className="relative h-full w-full min-h-[360px] md:min-h-[420px]">
                <Image
                  src={t.file}
                  alt={t.name}
                  fill
                  className="object-cover opacity-90"
                  priority
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-transparent" />
            </div>

            <div className="relative grid lg:grid-cols-[1.1fr,0.9fr] gap-8 px-6 py-10 md:px-10 md:py-12">

              <div>
                <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-sky-300">
                  Caminhão • Premium
                </p>

                <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {t.name}
                </h1>

                <p className="mt-4 text-white/85 max-w-2xl">
                  {t.description ?? "Conteúdo premium liberado para este modelo."}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/app/caminhoes?lang=${lang}`}
                    className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-extrabold hover:bg-slate-100"
                  >
                    Voltar ao catálogo
                  </Link>

                  <Link
                    href={`/app?lang=${lang}`}
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/25 hover:bg-white/15"
                  >
                    Início Premium
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="rounded-3xl bg-white/10 ring-1 ring-white/20 p-5 backdrop-blur">
                  <div
                    className="relative w-full overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15"
                    style={{ aspectRatio: "3 / 2" }}
                  >
                    <Image
                      src={t.file}
                      alt={t.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  <p className="mt-4 text-sm font-extrabold text-white">
                    Acesso premium ativo
                  </p>

                  <p className="mt-2 text-sm text-white/85">
                    Aqui você pode incluir PDFs, manuais e fichas técnicas deste modelo.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <SpecsTable specs={t.specs} />

        </div>
      </section>

    </main>
  );
}
