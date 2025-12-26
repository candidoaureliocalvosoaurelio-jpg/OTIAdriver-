// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import RowCarousel, { RowItem } from "@/components/RowCarousel";

export default function HomePage() {
  const heroImage = "/images/home/hero-otiadriver.jpg";

  const rowTreinamentosDestaque: RowItem[] = [
    {
      title: "Fundamentos da Condução Econômica",
      subtitle: "Aula rápida com prática e exemplos reais.",
      href: "/treinamentos?lang=pt",
      imageSrc: "/images/home/thumb-treinamento-01.jpg",
      badge: "Grátis",
      meta: "Aula • 12 min",
    },
    {
      title: "Treinamento Premium: Tecnologia e Segurança",
      subtitle: "Conteúdo completo + materiais.",
      href: "/app/treinamentos/seguranca-tecnologia?lang=pt",
      imageSrc: "/images/home/thumb-treinamento-02.jpg",
      badge: "Premium",
      meta: "Série • Premium",
    },

    // ✅ TROCA FEITA AQUI (antes: Inspeção e Manutenção Preventiva)
    {
      title: "Condução Econômica Avançada",
      subtitle: "Reduza consumo, desgaste e custos na prática.",
      href: "/treinamentos?lang=pt",
      imageSrc: "/images/home/thumb-conducao-economica.jpg",
      badge: "Grátis",
      meta: "Aula • Economia",
    },

    {
      title: "Direção Segura em Longas Jornadas",
      subtitle: "Fadiga, foco e tomada de decisão.",
      href: "/treinamentos?lang=pt",
      imageSrc: "/images/home/thumb-treinamento-04.jpg",
      badge: "Novo",
      meta: "Aula • 18 min",
    },
  ];

  const rowProdutos: RowItem[] = [
    {
      title: "Planos OTIAdriver",
      subtitle: "Assinatura para evoluir com tecnologia.",
      href: "/planos?lang=pt",
      imageSrc: "/images/home/thumb-planos.jpg",
      badge: "Premium",
      meta: "Assinatura",
    },
    {
      title: "Símbolos do Painel",
      subtitle: "Consulta rápida e explicações práticas.",
      href: "/simbolos-painel?lang=pt",
      imageSrc: "/images/home/thumb-simbolos.jpg",
      badge: "Grátis",
      meta: "Ferramenta",
    },
    {
      title: "Ebook Driver Economy",
      subtitle: "Condução econômica passo a passo.",
      href: "/ebook-driver?lang=pt",
      imageSrc: "/images/home/thumb-ebook.jpg",
      badge: "Premium",
      meta: "Ebook • Premium",
    },
    {
      title: "Inspeção & Manutenção",
      subtitle: "Conteúdo prático para reduzir paradas.",
      href: "/inspecao-e-manutencao?lang=pt",
      imageSrc: "/images/home/thumb-inspecao.jpg",
      badge: "Grátis",
      meta: "Guia",
    },
  ];

  const rowCaminhoes: RowItem[] = [
    {
      title: "Volvo FH",
      subtitle: "Ficha e conteúdo técnico.",
      href: "/caminhoes/volvo/fh?lang=pt",
      imageSrc: "/images/home/thumb-fh.jpg",
      badge: "Grátis",
      meta: "Caminhões",
    },
    {
      title: "Scania Super",
      subtitle: "Linha pesada premium.",
      href: "/caminhoes/scania-super?lang=pt",
      imageSrc: "/images/home/thumb-scania.jpg",
      badge: "Grátis",
      meta: "Caminhões",
    },
    {
      title: "Iveco S-Way",
      subtitle: "Caixa, tecnologia e operação.",
      href: "/caminhoes/caixa-iveco/s-way?lang=pt",
      imageSrc: "/images/home/thumb-iveco.jpg",
      badge: "Grátis",
      meta: "Caminhões",
    },
    {
      title: "Volkswagen",
      subtitle: "Linha e fichas técnicas.",
      href: "/caminhoes/volkswagen/caixa-volkswagen?lang=pt",
      imageSrc: "/images/home/thumb-vw.jpg",
      badge: "Grátis",
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
              <div className="relative h-full w-full">
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
                  eficiência e performance. Assista demonstrações, explore
                  caminhões e avance para o Premium quando estiver pronto.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/treinamentos?lang=pt"
                    className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-600"
                  >
                    Ver demonstrações
                  </Link>

                  <Link
                    href="/planos?lang=pt"
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/25 hover:bg-white/15"
                  >
                    Assinar Premium
                  </Link>

                  <Link
                    href="/simbolos-painel?lang=pt"
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/25 hover:bg-white/15"
                  >
                    Símbolos do painel
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/80">
                  <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
                    Conteúdos práticos
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
                    Ferramentas rápidas
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15">
                    Premium com paywall seguro
                  </span>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 p-5 backdrop-blur">
                  <p className="text-sm font-extrabold text-white">
                    Como funciona
                  </p>
                  <ul className="mt-3 space-y-3 text-sm text-white/85">
                    <li className="flex gap-2">
                      <span className="font-extrabold text-sky-300">1.</span>
                      Explore o catálogo e as demonstrações públicas.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-extrabold text-sky-300">2.</span>
                      Ao abrir conteúdo Premium, você entra via SMS.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-extrabold text-sky-300">3.</span>
                      Sem plano ativo, você cai em Planos (paywall).
                    </li>
                  </ul>

                  <div className="mt-5">
                    <Link
                      href="/entrar?lang=pt"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-white text-slate-900 px-4 py-3 text-sm font-extrabold hover:bg-slate-100"
                    >
                      Entrar
                    </Link>
                  </div>

                  <p className="mt-3 text-xs text-white/70">
                    Use esta Home como vitrine, estilo Netflix.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROWS */}
          <RowCarousel
            title="Treinamentos em destaque"
            description="Aulas e séries — algumas gratuitas e outras Premium."
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

          {/* CTA */}
          <section className="mt-10 px-4 md:px-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900">
                Quer liberar tudo?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Assine o Premium para acessar os treinamentos completos e
                materiais exclusivos.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/planos?lang=pt"
                  className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
                >
                  Ver planos
                </Link>
                <Link
                  href="/treinamentos?lang=pt"
                  className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
                >
                  Ver catálogo
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
