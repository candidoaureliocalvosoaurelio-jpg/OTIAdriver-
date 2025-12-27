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
        Especificações (visão geral)
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

      <p className="mt-4 text-xs text-slate-500">
        Observação: esta página é uma vitrine (somente visualização). Materiais completos
        e documentos técnicos ficam disponíveis após acesso/assinatura.
      </p>
    </div>
  );
}

export default function CaminhaoVitrinePage({ params, searchParams }: PageProps) {
  const lang = searchParams?.lang ?? "pt";
  const t = trucks.find((x) => x.slug === params.slug);

  if (!t) return notFound();

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#eef7ff] to-white pb-16">
      {/* Top breadcrumb / voltar */}
      <section className="pt-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between gap-3">
            <Link
              href={`/caminhoes?lang=${lang}`}
              className="text-sm font-extrabold text-sky-700 hover:text-sky-800"
            >
              ← Voltar para caminhões
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
        </div>
      </section>

      {/* HERO “VIDRO” */}
      <section className="mt-5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Fundo com imagem + overlay */}
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
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
              {/* Texto */}
              <div>
                <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-sky-300">
                  Vitrine • Caminhões
                </p>

                <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {t.name}
                </h1>

                {t.description ? (
                  <p className="mt-4 text-white/85 max-w-2xl">{t.description}</p>
                ) : (
                  <p className="mt-4 text-white/85 max-w-2xl">
                    Explore a visão geral deste caminhão na vitrine.
                  </p>
                )}

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/entrar?lang=${lang}`}
                    className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-600"
                  >
                    Liberar acesso (CPF/telefone)
                  </Link>

                  <Link
                    href={`/planos?lang=${lang}`}
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/25 hover:bg-white/15"
                  >
                    Ver planos
                  </Link>
                </div>

                {/* Chips */}
                <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/80">
                  <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
                    Vitrine (somente visualização)
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
                    Conteúdo técnico completo após acesso
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
                    Paywall seguro
                  </span>
                </div>
              </div>

              {/* Card “vidro” com imagem centralizada */}
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
                      sizes="(max-width: 1200px) 50vw, 40vw"
                      priority={false}
                    />
                  </div>

                  <div className="mt-4 rounded-2xl bg-white/10 ring-1 ring-white/15 p-4">
                    <p className="text-sm font-extrabold text-white">Como funciona</p>
                    <ul className="mt-3 space-y-2 text-sm text-white/85">
                      <li className="flex gap-2">
                        <span className="font-extrabold text-sky-300">1.</span>
                        Você visualiza a vitrine do modelo.
                      </li>
                      <li className="flex gap-2">
                        <span className="font-extrabold text-sky-300">2.</span>
                        Para acessar materiais completos, faça login.
                      </li>
                      <li className="flex gap-2">
                        <span className="font-extrabold text-sky-300">3.</span>
                        Sem assinatura ativa, você é direcionado aos planos.
                      </li>
                    </ul>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <Link
                        href={`/entrar?lang=${lang}`}
                        className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-4 py-3 text-sm font-extrabold hover:bg-slate-100"
                      >
                        Entrar
                      </Link>
                      <Link
                        href={`/planos?lang=${lang}`}
                        className="inline-flex items-center justify-center rounded-xl bg-sky-600 text-white px-4 py-3 text-sm font-extrabold hover:bg-sky-700"
                      >
                        Planos
                      </Link>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-white/70">
                    Esta página é propositalmente “vidro”: mostra, mas não entrega o conteúdo técnico.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo abaixo (specs) */}
          <SpecsTable specs={t.specs} />

          {/* Bloco de conversão final */}
          <section className="mt-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900">
                Quer acessar o conteúdo completo deste caminhão?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Faça login com CPF/telefone. Sem assinatura ativa, você será direcionado aos planos.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={`/entrar?lang=${lang}`}
                  className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
                >
                  Entrar (CPF/telefone)
                </Link>
                <Link
                  href={`/planos?lang=${lang}`}
                  className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
                >
                  Ver planos
                </Link>
              </div>
            </div>
          </section>

          <div className="h-10" />
        </div>
      </section>
    </main>
  );
}
