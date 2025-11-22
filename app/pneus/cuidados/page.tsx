// app/pneus/cuidados/page.tsx
import Image from "next/image";
import Link from "next/link";

type TireCareModule = {
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  image: string;
};

const tireCareModules: TireCareModule[] = [
  {
    title: "Calibragem Correta",
    subtitle: "Pressão a frio e valor correto",
    description:
      "Calibre sempre com pneus frios (parados por pelo menos 2 horas) e use a pressão indicada pelo fabricante.",
    slug: "calibragem-correta",
    image: "/assets/images/pneus/cuidados/calibragem.jpg",
  },
  {
    title: "Pressão Ideal e Impactos",
    subtitle: "Ajuste conforme carga e operação",
    description:
      "Baixa pressão aumenta consumo e desgaste nos ombros. Alta pressão reduz aderência e desgasta o centro.",
    slug: "pressao-ideal",
    image: "/assets/images/pneus/cuidados/pressao-ideal.jpg",
  },
  {
    title: "Inspeção Visual Regular",
    subtitle: "Checklist diário",
    description:
      "Inspecione bandas, ombros e talões. Procure cortes, bolhas, objetos presos e desgaste irregular.",
    slug: "inspecao-visual-regular",
    image: "/assets/images/pneus/cuidados/inspecao-visual.jpg",
  },
  {
    title: "Profundidade do Sulco",
    subtitle: "TWI e aquaplanagem",
    description:
      "Monitore a profundidade do sulco, respeite o TWI e retire o pneu no ponto certo para preservar a carcaça.",
    slug: "profundidade-do-sulco",
    image: "/assets/images/pneus/cuidados/profundidade-sulco.jpg",
  },
  {
    title: "Controle de Desgaste",
    subtitle: "Diagnóstico visual",
    description:
      "Leia os padrões de desgaste para identificar problemas de calibragem, alinhamento, balanceamento e suspensão.",
    slug: "controle-de-desgaste",
    image: "/assets/images/pneus/cuidados/controle-desgaste.jpg",
  },
  {
    title: "Alinhamento e Balanceamento",
    subtitle: "Precisão e conforto",
    description:
      "Corrija a geometria e elimine vibrações para reduzir o CPK e aumentar a segurança.",
    slug: "alinhamento-e-balanceamento",
    image: "/assets/images/pneus/cuidados/alinhamento-balanceamento.jpg",
  },
  {
    title: "Rodízio de Pneus",
    subtitle: "Uniformidade de desgaste",
    description:
      "Planeje o rodízio entre eixos e posições (interno/externo) para ganhar até 30% de vida útil.",
    slug: "rodizio-de-pneus",
    image: "/assets/images/pneus/cuidados/rodizio.jpg",
  },
  {
    title: "Gestão de Carcaça e Recapagem",
    subtitle: "Ativo financeiro da frota",
    description:
      "Proteja a carcaça, aumente o número de recapagens e reduza drasticamente o custo por quilômetro.",
    slug: "gestao-de-carcaca-e-recapagem",
    image: "/assets/images/pneus/cuidados/recapagem.jpg",
  },
];

export const metadata = {
  title: "Cuidados Operacionais dos Pneus | OTIAdriver",
  description:
    "Cuidados para aumentar a segurança, rendimento e vida útil dos pneus de caminhões, com foco em calibragem, inspeção, rodízio e gestão de carcaças.",
};

export default function TireCareVisualPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Cabeçalho */}
      <header className="mb-10 text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
          Cuidados Operacionais dos Pneus
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Cuidados para aumentar a segurança, rendimento e vida útil dos pneus
          do seu caminhão. Clique em cada card para acessar o conteúdo completo
          do módulo OTIAdriver.
        </p>
      </header>

      {/* Grid de cards com FOTO + LINK */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tireCareModules.map((module) => (
          <Link
            key={module.slug}
            href={`/pneus/cuidados/${module.slug}`}
            className="group block rounded-3xl bg-white shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >
            {/* Imagem */}
            <div className="relative w-full h-56 md:h-60 lg:h-64">
              <Image
                src={module.image}
                alt={module.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            {/* Texto */}
            <div className="p-5 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                {module.title}
              </h2>
              <p className="text-sm text-sky-700 font-semibold mb-2">
                {module.subtitle}
              </p>
              <p className="text-sm md:text-[0.95rem] text-gray-700">
                {module.description}
              </p>
              <span className="mt-3 inline-flex items-center text-sm font-semibold text-sky-600 group-hover:text-sky-700">
                Acessar conteúdo
                <span className="ml-1 group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
