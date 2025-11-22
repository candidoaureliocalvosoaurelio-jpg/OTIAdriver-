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
      "Calibre sempre com pneus frios e siga a tabela do fabricante para evitar aquecimento e prolongar a vida útil.",
    slug: "calibragem-correta",
    image: "/images/pneus/calibragem-correta.jpg", // AJUSTE para o caminho real da sua imagem
  },
  {
    title: "Pressão Ideal e Impactos",
    subtitle: "Ajuste conforme carga e eixo",
    description:
      "Baixa pressão aumenta consumo e desgaste nos ombros. Alta pressão reduz aderência e desgasta o centro.",
    slug: "pressao-ideal",
    image: "/images/pneus/pressao-ideal.jpg",
  },
  {
    title: "Inspeção Visual Regular",
    subtitle: "Checklist diário de segurança",
    description:
      "Inspecione bandas, ombros e talões. Procure cortes, bolhas, objetos presos e desgaste irregular.",
    slug: "inspecao-visual-regular",
    image: "/images/pneus/inspecao-visual.jpg",
  },
  {
    title: "Profundidade do Sulco",
    subtitle: "TWI, legalidade e aquaplanagem",
    description:
      "Monitore o sulco, respeite o TWI e retire o pneu no momento certo para preservar a carcaça.",
    slug: "profundidade-do-sulco",
    image: "/images/pneus/profundidade-sulco.jpg",
  },
  {
    title: "Controle de Desgaste",
    subtitle: "Leitura de padrões de desgaste",
    description:
      "Identifique desgaste central, nas bordas, em escama ou localizado para corrigir calibragem, alinhamento e suspensão.",
    slug: "controle-de-desgaste",
    image: "/images/pneus/controle-desgaste.jpg",
  },
  {
    title: "Alinhamento e Balanceamento",
    subtitle: "Precisão geométrica e conforto",
    description:
      "Corrija câmber, convergência/divergência e vibrações para reduzir o CPK e aumentar a segurança.",
    slug: "alinhamento-e-balanceamento",
    image: "/images/pneus/alinhamento-balanceamento.jpg",
  },
  {
    title: "Rodízio de Pneus",
    subtitle: "Equalização do desgaste",
    description:
      "Planeje o rodízio entre eixos e posições (interno/externo) para aumentar em até 30% a vida útil dos pneus.",
    slug: "rodizio-de-pneus",
    image: "/images/pneus/rodizio-pneus.jpg",
  },
  {
    title: "Gestão de Carcaça e Recapagem",
    subtitle: "Ativo financeiro da frota",
    description:
      "Proteja a carcaça, aumente o número de recapagens e reduza drasticamente o custo por quilômetro.",
    slug: "gestao-de-carcaca-e-recapagem",
    image: "/images/pneus/gestao-carcaca.jpg",
  },
];

export const metadata = {
  title: "Cuidados Operacionais dos Pneus | OTIAdriver",
  description:
    "Cuidados para aumentar a segurança, rendimento e vida útil dos pneus de caminhões, com foco em calibragem, inspeção, rodízio, alinhamento e gestão de carcaças.",
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

      {/* Grid com as FOTOS que já aparecem na sua página, agora LINKADAS */}
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
