// app/caminhoes-eletricos/page.tsx
import Image from "next/image";
import Link from "next/link";
import { electricTrucks } from "@/data/electricTrucks";

export const metadata = {
  title: "Caminhões Elétricos ⚡ | OTIAdriver",
  description:
    "Galeria oficial dos caminhões elétricos — inovação, energia limpa e inteligência OTIAdriver.",
};

// ÍNDICE DE MÓDULOS (MÓDULOS 1-9)
const trainingModules = [
  {
    title: "Módulo 01: Segurança com Alta Tensão (NR 10)",
    description:
      "Protocolos essenciais para manuseio de alta tensão e emergências.",
    slug: "seguranca-alta-tensao",
  },
  {
    title: "Módulo 02: Carregamento e Maximização de Autonomia",
    description:
      "Condução ecológica (Eco-Driving) e Protocolos de Recarga Segura.",
    slug: "carregamento-eficiente",
  },
  {
    title: "Módulo 03: Inspeção, Diagnóstico e Telemetria",
    description: "Check-list de Bateria (SoH), Freios e Leitura de Telemetria.",
    slug: "inspecao-diagnostico-ev",
  },
  {
    title: "Módulo 04: Legislação e Conformidade Regulatória",
    description: "Requisitos legais, CNH para VEs e Documentação de Cargas.",
    slug: "conformidade-legal",
  },
  {
    title: "Módulo 05: Fator Humano e Dirigibilidade Defensiva",
    description:
      "Gestão de fadiga, estresse e desafios da condução de VEs silenciosos.",
    slug: "fator-humano-dirigibilidade",
  },
  {
    title: "Módulo 06: Eficiência em Frotas a Diesel (Transição)",
    description:
      "Técnicas de Eco-Driving, RPM e manutenção para economia de diesel.",
    slug: "eficiencia-diesel",
  },
  {
    title: "Módulo 07: TCO, Análise Financeira e Sustentabilidade",
    description:
      "Compreensão do TCO, ROI de VEs e impacto da frota nos relatórios ESG.",
    slug: "analise-tco-sustentabilidade",
  },
  {
    title: "Módulo 08: Logística de Risco e Carga de Baterias",
    description:
      "Classificação MOPP, riscos de transporte de baterias de lítio e fundamentos do Vehicle-to-Grid (V2G).",
    slug: "logistica-de-risco-e-carga-de-baterias",
  },
  {
    title: "Módulo 09: Cuidados Operacionais e Conformidade EURO 6",
    description:
      "Guia sobre ARLA 32, filtragem, lubrificação e conformidade ambiental EURO 6.",
    slug: "cuidados-operacionais-e-conformidade-euro-6",
  },
];

// Definição das seções por REGIÃO e relação com os slugs
const regions = [
  {
    id: "brasil",
    title: "Caminhões Elétricos — Brasil",
    subtitle:
      "Modelos em operação ou desenvolvimento no mercado brasileiro, focados em distribuição urbana e rotas regionais.",
    slugs: [
      "volvo-fm-electric",
      "volkswagen-e-delivery",
      "foton-iblue-electric",
      "mercedes-e-accelo",
      "byd-etm",
      "agrale-electric",
    ],
  },
  {
    id: "europa",
    title: "Caminhões Elétricos — Europa",
    subtitle:
      "Plataformas rodoviárias para transporte pesado regional e internacional, com foco em zero emissões.",
    slugs: [
      "mercedes-eactros-600",
      "volvo-fh-electric",
      "scania-bev",
      "daf-xf-electric",
      "man-etgx",
      "renault-e-tech-t",
      "iveco-s-way-electric",
      "mercedes-eactros-400",
    ],
  },
  {
    id: "asia",
    title: "Caminhões Elétricos — Ásia",
    subtitle:
      "Modelos asiáticos com forte foco em alta densidade de bateria, tecnologia embarcada e aplicações urbanas e rodoviárias.",
    slugs: [
      "byd-etm-asia",
      "jac-iev1200t",
      "sany-electric",
      "hino-z-ev",
      "isuzu-giga-electric",
    ],
  },
  {
    id: "americas",
    title: "Caminhões Elétricos — Américas",
    subtitle:
      "Plataformas norte-americanas para longas distâncias, integrando IA avançada e alta autonomia.",
    slugs: [
      "tesla-semi",
      "nikola-tre-electric",
      "freightliner-ecascadia",
    ],
  },
  {
    id: "future",
    title: "Futuro e Conceituais",
    subtitle:
      "Conceitos de alta autonomia com baterias de estado sólido, hidrogênio e direção autônoma em alto nível.",
    slugs: ["volvo-fh-aero-electric", "man-hydrogen-electric"],
  },
];

export default function ElectricTrucksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Título geral */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Caminhões Elétricos ⚡
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          A nova era do transporte começa com energia limpa e inteligência{" "}
          <span className="font-semibold text-teal-600">OTIAdriver</span>.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Visualize os modelos por região e aprofunde-se nas fichas técnicas
          completas de cada veículo.
        </p>
      </div>

      {/* ÍNDICE DE MÓDULOS DE TREINAMENTO */}
      <section className="mb-12 p-6 md:p-10 bg-gray-50 rounded-xl shadow-2xl shadow-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">
          📚 Portal de Certificação OTIAdriver
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Acesse os módulos essenciais para a operação segura e eficiente de
          frotas elétricas. Utilize estes conteúdos em conjunto com as fichas
          técnicas dos caminhões para treinar motoristas e gestores de frota.
        </p>

        {/* Grid responsivo dos módulos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingModules.map((module) => (
            <Link
              key={module.slug}
              href={`/modulos/${module.slug}`}
              className="group block rounded-2xl border border-blue-100 bg-blue-50
                         hover:bg-blue-100 transition-all duration-300 transform
                         hover:-translate-y-1 hover:shadow-lg p-5"
            >
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                {module.title}
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                {module.description}
              </p>
              <span className="mt-1 inline-block text-sm font-semibold text-blue-700 group-hover:underline">
                Acessar Módulo &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SEÇÕES POR REGIÃO */}
      <div className="space-y-10">
        {regions.map((region) => {
          const regionTrucks = electricTrucks.filter((truck) =>
            region.slugs.includes(truck.slug)
          );

          if (regionTrucks.length === 0) return null;

          return (
            <section key={region.id}>
              <header className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {region.title}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  {region.subtitle}
                </p>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionTrucks.map((truck) => (
                  <Link
                    key={truck.slug}
                    href={`/caminhoes-eletricos/${truck.slug}`}
                    className="group"
                  >
                    <div className="rounded-2xl overflow-hidden shadow bg-white transition-transform group-hover:scale-[1.02]">
                      <div
                        className="relative w-full bg-gray-50"
                        style={{ aspectRatio: "3 / 2" }}
                      >
                        <Image
                          src={truck.file}
                          alt={truck.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      <div className="p-4 text-center">
                        <h3 className="font-semibold text-lg text-gray-800">
                          {truck.name}
                        </h3>
                        {truck.description && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {truck.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Rodapé informativo */}
      <div className="text-center mt-12 text-gray-600">
        <p>🚚 Inovação sobre rodas — O futuro é elétrico com OTIAdriver ⚡</p>
      </div>
    </main>
  );
}
