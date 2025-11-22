import Image from "next/image";

const TOTAL_SCREENS = 24; // ajuste aqui para a quantidade real de imagens

const painelImages = Array.from({ length: TOTAL_SCREENS }, (_, idx) => {
  const n = (idx + 1).toString().padStart(2, "0");
  return {
    src: `/assets/images/simbolos-painel/painel-${n}.png`,
    alt: `Símbolos do painel de instrumentos – tela ${idx + 1}`,
  };
});

export const metadata = {
  title: "Símbolos do Painel de Instrumentos | OTIAdriver",
  description:
    "Biblioteca visual dos principais símbolos do painel de instrumentos de caminhões, com foco em segurança, manutenção e operação correta.",
};

export default function SimbolosPainelPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-28 pb-16">
      {/* CABEÇALHO */}
      <header className="mb-10 text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
          Símbolos do Painel de Instrumentos
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
          Consulte rapidamente o significado dos principais ícones do painel de
          caminhões: alertas críticos, avisos, funções ativas e instrumentos de
          medição. Este módulo apoia a tomada de decisão segura durante a
          operação.
        </p>
      </header>

      {/* RESUMO POR CORES */}
      <section className="mb-10 grid gap-4 md:grid-cols-3 text-sm md:text-base">
        <div className="rounded-2xl bg-red-50 border border-red-200 p-4">
          <h2 className="font-bold text-red-700 mb-1">Luzes Vermelhas 🔴</h2>
          <p className="text-gray-800">
            Indicadores de emergência ou falha grave. Em geral exigem{" "}
            <strong>parada imediata em local seguro</strong> e acionamento da
            manutenção (óleo, temperatura, freios, pressão de ar, etc.).
          </p>
        </div>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
          <h2 className="font-bold text-amber-700 mb-1">
            Luzes Amarelas / Laranja 🟡
          </h2>
          <p className="text-gray-800">
            Advertências importantes: o veículo costuma continuar operando, mas
            há <strong>falha que deve ser corrigida</strong> na primeira
            oportunidade (injeção eletrônica, DPF, ABS/EBS, ARLA32, etc.).
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
          <h2 className="font-bold text-emerald-700 mb-1">
            Luzes Verdes / Azuis / Brancas 🟢 🔵 ⚪
          </h2>
          <p className="text-gray-800">
            Sinalizam <strong>funções ativas ou condições normais</strong>, como
            setas, faróis, piloto automático, PTO, freio motor ou outros
            sistemas em uso.
          </p>
        </div>
      </section>

      {/* GRID DAS IMAGENS (SLIDES DO PPT) */}
      <section className="space-y-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">
          Biblioteca visual (telas detalhadas)
        </h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Abaixo estão as telas exportadas do material técnico original. Cada
          imagem reúne ícones e explicações completas, organizadas por sistema
          (estabilidade, freios, motor, ARLA32, iluminação, seletores, etc.).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painelImages.map((img, index) => (
            <figure
              key={img.src}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs md:text-sm text-gray-600">
                Tela {index + 1} – {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
