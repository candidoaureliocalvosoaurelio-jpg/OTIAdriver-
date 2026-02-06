// app/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { trucks } from "@/data/trucks";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function AppHome({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams
    ? await searchParams
    : undefined;

  const lang = resolvedSearchParams?.lang ?? "pt";
  const heroImage = "/images/home/hero-otiadriver.jpg";

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#eef7ff] to-white pb-16">
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6">
          {/* HERO PREMIUM */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="absolute inset-0">
              <div className="relative h-full w-full min-h-[360px] md:min-h-[420px]">
                <Image
                  src={heroImage}
                  alt="OTIAdriver Premium"
                  fill
                  className="object-cover opacity-90"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-transparent" />
            </div>

            <div className="relative grid md:grid-cols-[1.2fr,0.8fr] gap-10 px-6 py-10 md:px-10 md:py-14">
              <div>
                <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-sky-300">
                  Área Premium
                </p>

                <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Bem-vindo ao seu conteúdo{" "}
                  <span className="text-sky-300">completo</span>
                </h1>

                <p className="mt-4 text-white/85 max-w-2xl">
                  Aqui você acessa caminhões, materiais e módulos completos.
                  Use o catálogo para navegar por modelo.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/app/caminhoes?lang=${lang}`}
                    className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-600"
                  >
                    Abrir catálogo de caminhões
                  </Link>

                  <Link
                    href={`/app?lang=${lang}`}
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/25 hover:bg-white/15"
                  >
                    Início
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/80">
                  <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
                    Acesso completo
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
                    Materiais técnicos
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
                    Conteúdo premium
                  </span>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 p-5 backdrop-blur">
                  <p className="text-sm font-extrabold text-white">
                    Acesso liberado
                  </p>

                  <ul className="mt-3 space-y-3 text-sm text-white/85">
                    <li className="flex gap-2">
                      <span className="font-extrabold text-sky-300">1.</span>
                      Explore o catálogo premium.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-extrabold text-sky-300">2.</span>
                      Abra qualquer caminhão por modelo.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-extrabold text-sky-300">3.</span>
                      Use os materiais técnicos completos.
                    </li>
                  </ul>

                  <div className="mt-5">
                    <Link
                      href={`/app/caminhoes?lang=${lang}`}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-white text-slate-900 px-4 py-3 text-sm font-extrabold hover:bg-slate-100"
                    >
                      Ver caminhões
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CATÁLOGO */}
          <section className="mt-10">
            <div className="flex items-end justify-between gap-3 px-1">
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">
                  Caminhões a Diesel
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Catálogo completo liberado na assinatura.
                </p>
              </div>

              <Link
                href={`/app/caminhoes?lang=${lang}`}
                className="hidden md:inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Ver todos
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {trucks.map((t) => (
                <Link
                  key={t.slug}
                  href={`/app/caminhoes/${t.slug}?lang=${lang}`}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={t.file}
                      alt={t.name}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-base font-extrabold text-slate-900">
                      {t.name}
                    </p>

                    {t.description && (
                      <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                        {t.description}
                      </p>
                    )}

                    <div className="mt-4 text-xs font-extrabold text-sky-700">
                      Abrir conteúdo completo
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-5 md:hidden">
              <Link
                href={`/app/caminhoes?lang=${lang}`}
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Ver todos
              </Link>
            </div>
          </section>

          <div className="h-10" />
        </div>
      </section>
    </main>
  );
}

