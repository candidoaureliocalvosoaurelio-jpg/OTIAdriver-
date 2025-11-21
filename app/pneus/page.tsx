import Link from "next/link";

type TireCareModule = {
  title: string;
  description: string;
  slug: string;
};

const tireCareModules: TireCareModule[] = [
  {
    title: "Módulo 01: Calibragem Correta",
    description:
      "Fundamentos da calibragem a frio, efeitos da pressão errada e impacto na vida útil do pneu.",
    slug: "calibragem-correta",
  },
  {
    title: "Módulo 02: Pressão Ideal e Impactos Operacionais",
    description:
      "Definição da pressão correta por carga de eixo, uso da tabela do fabricante e papel do TPMS.",
    slug: "pressao-ideal",
  },
  {
    title: "Módulo 03: Inspeção Visual Regular",
    description:
      "Checklist diário da banda de rodagem, laterais, talão e pneus duplos para prevenção de falhas.",
    slug: "inspecao-visual-regular",
  },
  {
    title: "Módulo 04: Profundidade do Sulco",
    description:
      "Entenda TWI, limites legais, aquaplanagem e o ponto certo de retirada para proteger a carcaça.",
    slug: "profundidade-do-sulco",
  },
  {
    title: "Módulo 05: Controle de Desgaste",
    description:
      "Leitura de padrões de desgaste para diagnóstico de calibragem, alinhamento, suspensão e balanceamento.",
    slug: "controle-de-desgaste",
  },
  {
    title: "Módulo 06: Alinhamento e Balanceamento",
    description:
      "Precisão geométrica e correção de vibrações para segurança, conforto e redução de CPK.",
    slug: "alinhamento-e-balanceamento",
  },
  {
    title: "Módulo 07: Rodízio de Pneus",
    description:
      "Estratégia de rodízio entre eixos e posições para equalizar desgaste e prolongar a vida útil.",
    slug: "rodizio-de-pneus",
  },
  {
    title: "Módulo 08: Gestão de Carcaça e Recapagem",
    description:
      "Preservação do ativo mais valioso do pneu, critérios de recapagem e boas práticas de estoque.",
    slug: "gestao-de-carcaca-e-recapagem",
  },
];

export const metadata = {
  title: "Cuidados Operacionais com Pneus | OTIAdriver",
  description:
    "Academia de Pneus OTIAdriver: módulos práticos sobre calibragem, inspeção, sulco, desgaste, alinhamento, rodízio e gestão de carcaças.",
};

export default function TireCareIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Cabeçalho */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          Cuidados Operacionais com Pneus
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Domine as rotinas essenciais de inspeção, calibragem, rodízio e gestão
          de carcaças para reduzir o CPK e aumentar a segurança da operação.
        </p>
      </header>

      {/* Grid de módulos */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tireCareModules.map((module) => (
          <Link
            key={module.slug}
            href={`/pneus/cuidados/${module.slug}`}
            className="group block rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm p-5 shadow-sm hover:shadow-lg hover:border-sky-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
              {module.title}
            </h2>
            <p className="text-sm md:text-[0.95rem] text-slate-600 mb-3">
              {module.description}
            </p>
            <span className="inline-flex items-center text-sm font-semibold text-sky-600 group-hover:text-sky-700">
              Acessar conteúdo
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
