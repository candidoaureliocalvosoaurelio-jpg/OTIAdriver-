// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import RowCarousel, { RowItem } from "@/components/RowCarousel";

type PageProps = {
  searchParams?: { lang?: string };
};

export default function HomePage({ searchParams }: PageProps) {
  const lang = searchParams?.lang ?? "pt";
  const heroImage = "/images/home/hero-otiadriver.jpg";

  // 🔒 Regra final: TODA a Home leva para /planos
  const PLANOS_LINK = `/planos?lang=${lang}`;

  const rowTreinamentosDestaque: RowItem[] = [
    {
      title: "Fundamentos da Condução Econômica",
      subtitle: "Aula rápida com prática e exemplos reais.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-treinamento-03.jpg",
      meta: "Aula • 12 min",
    },
    {
      title: "Tecnologia e Segurança",
      subtitle: "Conteúdo completo + materiais.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-treinamento-02.jpg",
      meta: "Série",
    },
    {
      title: "Condução Econômica Avançada",
      subtitle: "Reduza consumo, desgaste e custos na prática.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-conducao-economica.jpg",
      meta: "Aula • Economia",
    },
    {
      title: "Direção Segura em Longas Jornadas",
      subtitle: "Fadiga, foco e tomada de decisão.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-treinamento-04.jpg",
      meta: "Aula • 18 min",
    },
  ];

  const rowProdutos: RowItem[] = [
    {
      title: "Planos OTIAdriver",
      subtitle: "Assinatura para evoluir com tecnologia.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-planos.jpg",
      meta: "Assinatura",
    },
    {
      title: "Símbolos do Painel",
      subtitle: "Consulta rápida e explicações práticas.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-simbolos.jpg",
      meta: "Ferramenta",
    },
    {
      title: "Ebook Driver Economy",
      subtitle: "Condução econômica passo a passo.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-ebook.jpg",
      meta: "Ebook",
    },
    {
      title: "Inspeção & Manutenção",
      subtitle: "Conteúdo prático para reduzir paradas.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-inspecao.jpg",
      meta: "Guia",
    },
  ];

  const rowCaminhoes: RowItem[] = [
    {
      title: "Volvo FH",
      subtitle: "Ficha e conteúdo técnico.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-fh.jpg",
      meta: "Caminhões",
    },
    {
      title: "Scania Super",
      subtitle: "Linha pesada premium.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-scania.jpg",
      meta: "Caminhões",
    },
    {
      title: "Iveco S-Way",
      subtitle: "Caixa, tecnologia e operação.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-iveco.jpg",
      meta: "Caminhões",
    },
    {
      title: "Volkswagen",
      subtitle: "Linha e fichas técnicas.",
      href: PLANOS_LINK,
      imageSrc: "/images/home/thumb-vw.jpg",
      meta: "Caminhões",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#eef7ff] to-white pb-16">
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6">
          {/* HERO */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="absolute inset-0">
              <div className="relative h-full w-full min-h-[360px] md:min-h-[420px]">
                <Image
                  src={heroImage}
                  alt="OTIAdriver"
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
                  Plataforma OTIAdriver
                </p>

                <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Treinamento, tecnologia e conhecimento{" "}
                  <span className="text-sky-300">para motoristas</span>
                </h1>

                <p className="mt-4 text-white/85 max-w-2xl">
                  Uma vitrine de conteúdos e ferramentas para elevar segurança,
                  eficiência e performance. Conheça os planos e libere o acesso
                  completo à plataforma.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={PLANOS_LINK}
                    className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-600"
                  >
                    Iniciar agora
                  </Link>

                  <Link
                    href={PLANOS_LINK}
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/25 hover:bg-white/15"
                  >
                    Ver planos
                  </Link>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 p-5 backdrop-blur">
                  <p className="text-sm font-extrabold text-white">Como funciona</p>
                  <ul className="mt-3 space-y-3 text-sm text-white/85">
                    <li><strong>1.</strong> Conheça os planos da plataforma.</li>
                    <li><strong>2.</strong> Escolha o ideal para você.</li>
                    <li><strong>3.</strong> Acesse todo o conteúdo exclusivo.</li>
                  </ul>

                  <div className="mt-5">
                    <Link
                      href={PLANOS_LINK}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-white text-slate-900 px-4 py-3 text-sm font-extrabold hover:bg-slate-100"
                    >
                      Ver planos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <RowCarousel
            title="Treinamentos em destaque"
            description="Aulas e séries para você evoluir na prática."
            items={rowTreinamentosDestaque}
          />

          <RowCarousel
            title="Produtos e ferramentas OTIAdriver"
            description="Acesso rápido às soluções da plataforma."
            items={rowProdutos}
          />

          <RowCarousel
            title="Caminhões e conteúdo técnico"
            description="Explore fichas, caixas e informações por marca."
            items={rowCaminhoes}
          />

          {/* CTA FINAL */}
          <section className="mt-10 px-4 md:px-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900">
                Quer liberar tudo?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Assine para acessar treinamentos completos e materiais exclusivos.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={PLANOS_LINK}
                  className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
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
