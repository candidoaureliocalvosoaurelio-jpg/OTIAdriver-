// app/pneus/cuidados/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Pneus | Cuidados Operacionais | OTIAdriver",
  description:
    "Manual visual com os cuidados operacionais de pneus: calibragem, pressão ideal, inspeção, sulco, desgaste, alinhamento/balanceamento, rodízio e recapagem.",
};

type Care = {
  slug: string;
  title: string;
  img: string; // caminho dentro de /public
  alt: string;
  text: string;
};

const cares: Care[] = [
  {
    slug: "calibragem-correta",
    title: "Calibragem Correta",
    img: "/images/pneus/cuidados/calibragem.jpg",
    alt: "Mecânico medindo pressão com calibrador digital no pneu de caminhão",
    text:
      "Calibre os pneus sempre frios (parados há pelo menos 2 h). Consulte o valor indicado pelo fabricante. A calibragem adequada evita aquecimento excessivo e aumenta a vida útil.",
  },
  {
    slug: "pressao-ideal",
    title: "Pressão Ideal e Impactos",
    img: "/images/pneus/cuidados/pressao-ideal.jpg",
    alt: "Comparação visual de pneu subcalibrado e supercalibrado",
    text:
      "Baixa pressão: aumenta consumo e desgaste nos ombros. Alta pressão: reduz aderência e desgasta o centro da banda. Ajuste conforme carga e tipo de operação.",
  },
  {
    slug: "inspecao-visual",
    title: "Inspeção Visual Regular",
    img: "/images/pneus/cuidados/inspecao-visual.jpg",
    alt: "Técnico inspecionando banda de rodagem e laterais do pneu",
    text:
      "Faça inspeção semanal de bandas, ombros e talões. Procure cortes, bolhas, objetos presos e desgaste irregular.",
  },
  {
    slug: "profundidade-sulco",
    title: "Profundidade do Sulco",
    img: "/images/pneus/cuidados/profundidade-sulco.jpg",
    alt: "Paquímetro medindo a profundidade do sulco do pneu",
    text:
      "Substitua pneus com sulco abaixo de 1,6 mm (mínimo legal). Sulcos rasos comprometem drenagem e elevam o risco de aquaplanagem.",
  },
  {
    slug: "controle-desgaste",
    title: "Controle de Desgaste",
    img: "/images/pneus/cuidados/controle-desgaste.jpg",
    alt: "Checklist/planilha com anotações de quilometragem e posição dos pneus",
    text:
      "Registre quilometragem, posição e data de cada inspeção. Planeje revisões e rodízios para otimizar o rendimento do jogo de pneus.",
  },
  {
    slug: "alinhamento-balanceamento",
    title: "Alinhamento e Balanceamento",
    img: "/images/pneus/cuidados/alinhamento-balanceamento.jpg",
    alt: "Caminhão em plataforma de alinhamento a laser na oficina",
    text:
      "Alinhe e balanceie a cada 10.000 km ou após impactos. Reduz vibrações, desgaste irregular e consumo de combustível.",
  },
  {
    slug: "rodizio",
    title: "Rodízio de Pneus",
    img: "/images/pneus/cuidados/rodizio.jpg",
    alt: "Esquema com setas indicando troca de posição entre eixos",
    text:
      "Realize rodízio periódico conforme tipo de tração e carga. Garante desgaste uniforme e melhor aproveitamento do conjunto.",
  },
  {
    slug: "recapagem",
    title: "Gestão de Carcaça e Recapagem",
    img: "/images/pneus/cuidados/recapagem.jpg",
    alt: "Pneu sendo inspecionado para processo de recapagem",
    text:
      "Carcaças bem conservadas podem ser recapadas com segurança. Mantenha histórico de cada pneu e envie apenas cascos em bom estado.",
  },
];

export default function CuidadosPneusPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* breadcrumb */}
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/pneus" className="hover:underline">← Voltar aos Pneus</Link>
      </div>

      {/* título */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Cuidados Operacionais dos Pneus
        </h1>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Guia prático e visual para aumentar segurança, rendimento e vida útil dos pneus do seu caminhão.
        </p>
      </header>

      {/* grid de cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cares.map((c) => (
          <article
            key={c.slug}
            className="rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
              <Image
                src={c.img}
                alt={c.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p className="mt-2 text-slate-700">{c.text}</p>
            </div>
          </article>
        ))}
      </section>

      {/* CTA secundário */}
      <aside className="mt-10 rounded-2xl border border-slate-200 p-5 bg-slate-50">
        <h3 className="text-base font-semibold">Próximo passo</h3>
        <p className="mt-1 text-slate-700">
          Veja também os tipos e aplicações de pneus por eixo:
          {" "}
          <Link href="/pneus/direcional" className="text-blue-700 hover:underline">Direcional</Link>,{" "}
          <Link href="/pneus/implemento" className="text-blue-700 hover:underline">Implemento/Livre</Link> e{" "}
          <Link href="/pneus/tracao" className="text-blue-700 hover:underline">Tração</Link>.
        </p>
      </aside>
    </main>
  );
}
