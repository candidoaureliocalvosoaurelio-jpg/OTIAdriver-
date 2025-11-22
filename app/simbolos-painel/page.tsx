// app/simbolos-painel/page.tsx
import Image from "next/image";
import { simbolosPainelDemo, CorSimbolo } from "@/data/simbolos-painel";

const corConfig: Record<
  CorSimbolo,
  { label: string; badgeClass: string }
> = {
  vermelho: {
    label: "Vermelho – Pare imediatamente",
    badgeClass:
      "bg-red-50 text-red-700 border border-red-200",
  },
  amarelo: {
    label: "Amarelo – Atenção e verificação",
    badgeClass:
      "bg-amber-50 text-amber-700 border border-amber-200",
  },
  verde: {
    label: "Verde – Sistema ativo/ligado",
    badgeClass:
      "bg-emerald-50 text-emerald-700 border border-emerald-200",
  },
  azul: {
    label: "Azul – Informação / faróis",
    badgeClass:
      "bg-sky-50 text-sky-700 border border-sky-200",
  },
};

export const metadata = {
  title: "Símbolos do Painel de Instrumentos | OTIAdriver",
  description:
    "Biblioteca visual dos principais símbolos do painel de caminhões, com explicação técnica e ação recomendada para o motorista.",
};

export default function SimbolosPainelPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* CABEÇALHO */}
      <header className="mb-10">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
          Símbolos do Painel de Instrumentos
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-700 max-w-3xl">
          Biblioteca prática dos principais símbolos do painel de caminhões.
          Veja o significado, a cor de alerta e a{" "}
          <span className="font-semibold">
            ação recomendada para o motorista
          </span>
          .
        </p>

        {/* LEGENDA DAS CORES */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs md:text-sm">
          <span className="font-semibold mr-1 text-gray-800">
            Cores dos avisos:
          </span>
          <span className="inline-flex items-center rounded-full bg-red-50 text-red-700 border border-red-200 px-3 py-1">
            Vermelho – Emergência
          </span>
          <span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1">
            Amarelo – Atenção
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1">
            Verde – Sistema ativo
          </span>
          <span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1">
            Azul – Informação
          </span>
        </div>
      </header>

      {/* GRID DE CARDS */}
      <section className="space-y-6">
        {simbolosPainelDemo.map((simbolo) => {
          const cor = corConfig[simbolo.cor];

          return (
            <article
              key={simbolo.id}
              className="rounded-3xl bg-white shadow-md border border-gray-100 p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6"
            >
              {/* COLUNA DA IMAGEM */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="relative w-24 h-24 md:w-28 md:h-28">
                  <Image
                    src={simbolo.image}
                    alt={simbolo.nome}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* COLUNA DO TEXTO */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                    {simbolo.nome}
                  </h2>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs md:text-[0.75rem] font-semibold ${cor.badgeClass}`}
                  >
                    {cor.label}
                  </span>
                </div>

                <p className="mt-1 text-xs md:text-sm text-gray-500">
                  Sistema: {simbolo.sistema}
                </p>

                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  {simbolo.descricao}
                </p>

                <div className="mt-3 rounded-2xl bg-sky-50 border border-sky-100 px-3 py-2">
                  <p className="text-xs md:text-sm font-semibold text-sky-900">
                    Ação recomendada:
                  </p>
                  <p className="text-xs md:text-sm text-sky-900/90">
                    {simbolo.acaoRecomendada}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
