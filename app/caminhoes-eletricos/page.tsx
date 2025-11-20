// app/caminhoes-eletricos/page.tsx
import Image from "next/image";
import Link from "next/link";
import { electricTrucks } from "@/data/electricTrucks"; // Presume que este import é necessário

export const metadata = {
  title: "Caminhões Elétricos ⚡ | OTIAdriver",
  description:
    "Galeria oficial dos caminhões elétricos — inovação, energia limpa e inteligência OTIAdriver.",
};

// DADOS ESTRUTURADOS FINAIS PARA O ÍNDICE DE MÓDULOS (MÓDULOS 1-7)
const trainingModules = [
  {
    title: "Módulo 01: Segurança com Alta Tensão (NR 10)",
    description: "Protocolos essenciais para manuseio de alta tensão e emergências.",
    slug: "seguranca-alta-tensao",
    color: "border-red-600 bg-red-50 hover:bg-red-100",
  },
  {
    title: "Módulo 02: Carregamento e Maximização de Autonomia",
    description: "Condução ecológica (Eco-Driving) e Protocolos de Recarga Segura.",
    slug: "carregamento-eficiente",
    color: "border-green-600 bg-green-50 hover:bg-green-100",
  },
  {
    title: "Módulo 03: Inspeção, Diagnóstico e Telemetria",
    description: "Check-list de Bateria (SoH), Freios e Leitura de Telemetria.",
    slug: "inspecao-diagnostico-ev",
    color: "border-blue-600 bg-blue-50 hover:bg-blue-100",
  },
  {
    title: "Módulo 04: Legislação e Conformidade Regulatória",
    description: "Requisitos legais, CNH para VEs e Documentação de Cargas.",
    slug: "conformidade-legal",
    color: "border-yellow-600 bg-yellow-50 hover:bg-yellow-100",
  },
  {
    title: "Módulo 05: Fator Humano e Dirigibilidade Defensiva",
    description: "Gestão de fadiga, estresse e desafios da condução de VEs silenciosos.",
    slug: "fator-humano-dirigibilidade",
    color: "border-purple-600 bg-purple-50 hover:bg-purple-100",
  },
  {
    title: "Módulo 06: Eficiência em Frotas a Diesel (Transição)",
    description: "Técnicas de Eco-Driving, RPM e manutenção para economia de diesel.",
    slug: "eficiencia-diesel",
    color: "border-gray-600 bg-gray-100 hover:bg-gray-200",
  },
  {
    title: "Módulo 07: TCO, Análise Financeira e Sustentabilidade",
    description: "Compreensão do TCO, ROI de VEs e impacto da frota nos relatórios ESG.",
    slug: "analise-tco-sustentabilidade",
    color: "border-teal-600 bg-teal-100 hover:bg-teal-200",
  },
];
{
    title: "Módulo 08: Logística de Risco e Carga de Baterias",
    description:
      "Classificação MOPP, riscos de transporte de baterias de lítio e fundamentos do Vehicle-to-Grid (V2G).",
    slug: "logistica-risco-baterias",
    color: "border-orange-600 bg-orange-50 hover:bg-orange-100",
  },
  {
    title: "Módulo 09: Cuidados Operacionais e Conformidade EURO 6",
    description:
      "Gestão de ARLA 32, filtragem, lubrificação e conformidade ambiental Proconve P-8 (Euro 6).",
    slug: "operacao-euro6",
    color: "border-indigo-600 bg-indigo-50 hover:bg-indigo-100",
  },
];
export default function ElectricTrucksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Título */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Caminhões Elétricos ⚡
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          A nova era do transporte começa com energia limpa e inteligência{" "}
          <span className="font-semibold text-teal-600">OTIAdriver</span>.
        </p>
      </div>

      {/* NOVO - ÍNDICE DE MÓDULOS DE TREINAMENTO (PORTAL DE CONHECIMENTO) */}
      <section className="mb-12 p-6 md:p-10 bg-gray-50 rounded-xl shadow-2xl shadow-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">
          📚 Portal de Certificação OTIAdriver
        </h2>
        <p className="text-lg text-gray-700 mb-8">
            Acesse os módulos essenciais para a operação segura e eficiente de frotas elétricas.
        </p>
        
        {/* Lista de Módulos Responsiva (Grid 1 coluna em mobile, 3 colunas em desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingModules.map((module) => (
            <Link
              key={module.slug}
              href={`/modulos/${module.slug}`}
              className={`block rounded-lg p-5 transition-all duration-300 transform border-l-8 ${module.color} shadow-md hover:shadow-lg hover:scale-[1.02]`}
            >
              <h3 className="text-xl font-extrabold text-gray-800 mb-2">
                {module.title}
              </h3>
              <p className="text-sm text-gray-600">
                {module.description}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-700 group-hover:underline">
                Acessar Módulo &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Grid dos caminhões elétricos (CONTEÚDO ORIGINAL ABAIXO) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {electricTrucks.map((truck) => (
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
                <h2 className="font-semibold text-lg text-gray-800">
                  {truck.name}
                </h2>
                {truck.description && (
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {truck.description}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Rodapé informativo */}
      <div className="text-center mt-12 text-gray-600">
        <p>🚚 Inovação sobre rodas — O futuro é elétrico com OTIAdriver ⚡</p>
      </div>
    </main>
  );
}
