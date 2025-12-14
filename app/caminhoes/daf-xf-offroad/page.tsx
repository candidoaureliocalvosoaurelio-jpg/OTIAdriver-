import Image from "next/image";
import Link from "next/link";

type PdfMaterial = {
  titulo: string;
  descricao: string;
  href: string;
  cta: string;
};

export default function DAFXFOffRoadPage() {
  const materiaisPdf: PdfMaterial[] = [
    {
      titulo: "Ficha técnica oficial – XF OFF-ROAD 530 cv (PDF)",
      descricao: "Consulte todos os dados detalhados do DAF XF OFF-ROAD 530 cv no material oficial.",
      href: "/fichas-tecnicas/daf-xf-offroad.pdf",
      cta: "Abrir ficha técnica XF OFF-ROAD (PDF)",
    },
    {
      titulo: "Luzes do Painel – Caminhões DAF (PDF)",
      descricao:
        "Guia de luzes e símbolos do painel para identificar alertas, entender significados e agir corretamente na operação.",
      href: "/fichas-tecnicas/luzes-painel-DAF.pdf",
      cta: "Abrir guia de luzes do painel (PDF)",
    },
  ];

return (
<main className="min-h-screen w-full bg-slate-50 pb-20">
{/* HERO */}
<section className="w-full bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white">
<div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-[1.3fr,1fr] gap-10 items-center">

{/* Texto principal */}
<div>
<p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300 mb-3">
@@ -23,9 +45,10 @@ export default function DAFXFOffRoadPage() {
<p className="text-sm md:text-base text-slate-100/85 mb-6 max-w-xl">
Versão reforçada do XF desenvolvida para operações extrapesadas,
mineração, florestal, trechos agrícolas e percursos de baixa
              aderência. Combina o poderoso <strong>motor PACCAR MX-13 530 cv</strong>
              com tração 6x4, chassi reforçado e tecnologias que garantem
              desempenho e confiabilidade mesmo nos terrenos mais difíceis.
              aderência. Combina o poderoso{" "}
              <strong>motor PACCAR MX-13 530 cv</strong> com tração 6x4, chassi
              reforçado e tecnologias que garantem desempenho e confiabilidade
              mesmo nos terrenos mais difíceis.
</p>

{/* Cards do HERO */}
@@ -51,27 +74,38 @@ export default function DAFXFOffRoadPage() {
Aplicação
</p>
<p className="text-lg font-bold">Off-Road Pesado</p>
                <p className="text-[11px] text-slate-300">Mineração / Florestal</p>
                <p className="text-[11px] text-slate-300">
                  Mineração / Florestal
                </p>
</div>
</div>

            <Link
              href="#ficha-tecnica"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-amber-300 text-black text-sm font-semibold hover:bg-amber-200 transition"
            >
              Ver ficha técnica completa
            </Link>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#materiais-pdf"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-amber-300 text-black hover:bg-amber-200 transition"
              >
                Ver materiais em PDF
              </Link>
              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition"
              >
                Ver ficha técnica resumida
              </Link>
            </div>
</div>

{/* Imagem */}
<div className="relative w-full max-w-md mx-auto">
<div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
<div style={{ aspectRatio: "4 / 3" }} className="relative">
<Image
                  src="/images/trucks/daf-xf-offroad.jpg" // salve sua imagem com este nome
                  src="/images/trucks/daf-xf-offroad.jpg"
alt="DAF XF OFF-ROAD 530 cv"
fill
className="object-cover"
                  priority
/>
</div>
</div>
@@ -84,7 +118,6 @@ export default function DAFXFOffRoadPage() {

{/* CONTEÚDO GERAL */}
<section className="max-w-6xl mx-auto px-4 mt-12 space-y-12">

{/* Bloco 1 — Motor */}
<section>
<h2 className="text-2xl font-extrabold text-slate-900 mb-4">
@@ -96,8 +129,8 @@ export default function DAFXFOffRoadPage() {
<ul className="text-sm text-slate-700 space-y-2">
<li>• 530 cv – maior potência da linha MX-13.</li>
<li>
                  • Alto torque para arrancadas fortes e força constante
                  em aclives fora de estrada.
                  • Alto torque para arrancadas fortes e força constante em
                  aclives fora de estrada.
</li>
<li>
• Calibração Off-Road: entrega torque pleno em baixas rotações.
@@ -134,8 +167,8 @@ export default function DAFXFOffRoadPage() {
TraXon Off-Road
</p>
<p>
                Software especial que prioriza tração e momentum, evitando
                perda de força em subidas fortes ou lama.
                Software especial que prioriza tração e momentum, evitando perda
                de força em subidas fortes ou lama.
</p>
</div>

@@ -198,7 +231,9 @@ export default function DAFXFOffRoadPage() {
<div className="grid sm:grid-cols-3 gap-4 text-sm text-slate-800">
<div className="bg-white rounded-xl border border-slate-200 shadow p-4">
<h3 className="font-semibold mb-2">Extrapesado</h3>
              <p>Movimentação de cargas indivisíveis e composições de alto PBTC/CMT.</p>
              <p>
                Movimentação de cargas indivisíveis e composições de alto PBTC/CMT.
              </p>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow p-4">
<h3 className="font-semibold mb-2">Mineração</h3>
@@ -221,23 +256,41 @@ export default function DAFXFOffRoadPage() {
<table className="min-w-full text-sm border-collapse">
<tbody>
<tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 w-44">Motor</th>
                  <td className="px-4 py-3 text-slate-800">PACCAR MX-13, 530 cv.</td>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 w-44">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    PACCAR MX-13, 530 cv.
                  </td>
</tr>
<tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Tração</th>
                  <td className="px-4 py-3 text-slate-800">6x4 com bloqueio de diferencial.</td>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Tração
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    6x4 com bloqueio de diferencial.
                  </td>
</tr>
<tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Transmissão</th>
                  <td className="px-4 py-3 text-slate-800">ZF TraXon com software Off-Road.</td>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    ZF TraXon com software Off-Road.
                  </td>
</tr>
<tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Chassi</th>
                  <td className="px-4 py-3 text-slate-800">Longarinas reforçadas e suspensão robusta.</td>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Chassi
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Longarinas reforçadas e suspensão robusta.
                  </td>
</tr>
<tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Aplicações</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Aplicações
                  </th>
<td className="px-4 py-3 text-slate-800">
Mineração, florestal, cana, extrapesado, terrenos severos.
</td>
@@ -247,55 +300,78 @@ export default function DAFXFOffRoadPage() {
</div>
</section>

        {/* PDF */}
        <section className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Ficha técnica oficial (PDF)
            </h3>
            <p className="text-sm text-slate-700 mb-4">
              Consulte todos os dados detalhados do XF OFF-ROAD 530 cv.
            </p>
                {/* BLOCO FINAL – Materiais Técnicos em PDF (3 cards padrão CF/XF) */}
        <section id="materiais-pdf" className="mt-10">
          <div className="grid gap-6 md:grid-cols-3">
            
            {/* Card 1 – Ficha técnica OFF-ROAD */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Ficha técnica oficial – XF OFF-ROAD 530 cv (PDF)
              </h3>

              <p className="text-sm text-slate-700 mb-4">
                Consulte os dados completos de dimensões, capacidades, motor,
                transmissão, tração 6x4, chassi reforçado e aplicações severas
                do <strong>DAF XF OFF-ROAD 530 cv</strong>.
              </p>

              <a
                href="/fichas-tecnicas/daf-xf-offroad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir ficha técnica XF OFF-ROAD (PDF)
              </a>
            </div>

            {/* Card 2 – Guia de Interruptores */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Guia de Interruptores DAF (PDF)
              </h3>

              <p className="text-sm text-slate-700 mb-4">
                Material oficial com a identificação completa dos interruptores,
                botões e comandos do DAF XF. Ideal para motoristas, instrutores
                e treinamentos operacionais.
              </p>

            <a
              href="/fichas-tecnicas/daf-xf-offroad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition"
            >
              Abrir ficha técnica XF OFF-ROAD (PDF)
            </a>
              <a
                href="/fichas-tecnicas/Interruptores-DAF.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir guia de interruptores (PDF)
              </a>
            </div>

            {/* Card 3 – Luzes do Painel */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Luzes do Painel – Caminhões DAF (PDF)
              </h3>

              <p className="text-sm text-slate-700 mb-4">
                Guia completo de luzes e símbolos do painel dos caminhões DAF,
                com explicação dos alertas, significados e ações recomendadas
                durante a operação.
              </p>

              <a
                href="/fichas-tecnicas/luzes-painel-DAF.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir guia de luzes do painel (PDF)
              </a>
            </div>
</div>
</section>
      </section>
      {/* Bloco final – Luzes do Painel DAF (PDF) */}
<section className="mt-6">
  <div className="p-6 rounded-2xl border shadow-sm bg-white">
    <h2 className="text-2xl font-bold mb-2 text-slate-900">
      Luzes do Painel – Caminhões DAF (PDF)
    </h2>

    <p className="text-sm text-slate-700">
      Consulte o guia de luzes e símbolos do painel dos caminhões DAF.
      Material essencial para identificar alertas, compreender os
      significados e agir corretamente durante a operação do veículo.
    </p>

    <div className="mt-4">
      <a
        href="/fichas-tecnicas/luzes-painel-DAF.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-blue-500 text-xs font-bold">
          PDF
        </span>
        Abrir guia de luzes do painel (PDF)
      </a>
    </div>
  </div>
</section>
</main>
        </section>
    </main>
);
}
