// app/caminhoes/volkswagen/caixa-volkswagen/page.tsx

import Image from "next/image";
import Link from "next/link";

type PdfMaterial = {
  titulo: string;
  descricao: string;
  href: string;
  cta: string;
};

export default function CaixaVolkswagenPage() {
  const materiaisPdf: PdfMaterial[] = [
    {
      titulo: "Apostila técnica – Caixa de mudanças Volkswagen (PDF)",
      descricao:
        "Baixe o material completo para estudo e treinamento: identificação dos comandos, funcionamento, faixas de operação, recomendações de condução e boas práticas.",
      href: "/fichas-tecnicas/caixa-volkswagen.pdf",
      cta: "Abrir apostila da caixa VW (PDF)",
    },
    // Você pode adicionar mais PDFs depois (exemplos):
    // {
    //   titulo: "Símbolos do painel – Volkswagen (PDF)",
    //   descricao: "Guia de símbolos, luzes e mensagens do painel para ação correta na operação.",
    //   href: "/fichas-tecnicas/simbolos-volkswagen.pdf",
    //   cta: "Abrir guia de símbolos (PDF)",
    // },
    // {
    //   titulo: "Manual de operação – Volkswagen (PDF)",
    //   descricao: "Referência oficial com rotinas de uso, inspeções e recomendações de segurança.",
    //   href: "/fichas-tecnicas/manual-volkswagen.pdf",
    //   cta: "Abrir manual (PDF)",
    // },
  ];

  return (
    <main className="min-h-screen w-full bg-slate-50 pb-20">
      {/* HERO */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-700 mb-3">
              Tecnologia de Transmissão • Volkswagen Caminhões e Ônibus
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              Caixa de mudanças Volkswagen
              <span className="block text-sky-600 text-xl md:text-2xl mt-1">
                material técnico completo para operação e treinamento
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              Esta página organiza o conteúdo da apostila em formato didático:
              conceitos, comandos, funcionamento, boas práticas de condução,
              prevenção de falhas e checklist operacional — tudo em um padrão
              profissional OTIAdriver.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#conteudo"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Ver o conteúdo
              </Link>

              <Link
                href="#materiais-pdf"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border border-sky-200 bg-white text-sky-800 hover:bg-sky-50 transition"
              >
                Ir para o PDF
              </Link>
            </div>

            <div className="mt-6">
              <a
                href="/fichas-tecnicas/caixa-volkswagen.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Baixar / Abrir apostila (PDF)
              </a>
            </div>
          </div>

          {/* Imagem (opcional) */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-900/5 border border-slate-200">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/tech/caixa-volkswagen.jpg"
                  alt="Caixa de mudanças Volkswagen — imagem ilustrativa"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa. Substitua por uma imagem real quando tiver.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section id="conteudo" className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Bloco 1 */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            1) Visão geral da caixa de mudanças
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed text-sm md:text-base">
            Cole aqui o conteúdo do seu PDF/DOCX sobre: definição, aplicação,
            vantagens, características e cuidados gerais.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Objetivo</p>
              <p className="mt-1 text-sm text-slate-700">
                Resuma a finalidade da transmissão no trem de força.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Aplicação</p>
              <p className="mt-1 text-sm text-slate-700">
                Para quais operações (urbano, rodoviário, carga, severo).
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Benefícios</p>
              <p className="mt-1 text-sm text-slate-700">
                Economia, durabilidade, dirigibilidade e segurança.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 2 */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            2) Comandos, engates e operação correta
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">O motorista faz</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• Ajuste de marcha conforme carga e relevo</li>
                <li>• Uso correto de embreagem (se aplicável)</li>
                <li>• Reduções seguras em descidas</li>
                <li>• Trocas sem “forçar” sincronizadores/engrenagens</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-900">Cuidados críticos</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• Evitar engates com rotação incompatível</li>
                <li>• Não apoiar a mão na alavanca</li>
                <li>• Evitar arrancadas agressivas com carga</li>
                <li>• Atenção à seleção de marchas em rampas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloco 3 */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            3) Boas práticas, prevenção de falhas e manutenção
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Sinais de alerta</p>
              <p className="mt-1 text-sm text-slate-700">
                Ruídos, dificuldade de engate, vibração, aquecimento, vazamentos.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Rotina preventiva</p>
              <p className="mt-1 text-sm text-slate-700">
                Checagem de óleo, inspeções, prazos e boas práticas de operação.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Procedimentos</p>
              <p className="mt-1 text-sm text-slate-700">
                O que fazer em caso de falha (segurança, parada, diagnóstico).
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-sky-50 border border-sky-100 p-5">
            <p className="text-sm font-semibold text-sky-800">Dica OTIAdriver</p>
            <p className="mt-1 text-sm text-slate-700">
              Ao me reenviar o PDF/DOCX, eu substituo estes blocos por conteúdo
              técnico real (com nomes de marchas, tabelas, modos e procedimentos
              exatamente como na sua apostila).
            </p>
          </div>
        </section>

        {/* PDFs */}
        <section id="materiais-pdf" className="mt-10">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Materiais técnicos em PDF
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {materiaisPdf.map((m) => (
              <div
                key={m.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[240px]"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{m.titulo}</h3>
                <p className="text-sm text-slate-700 mb-4">{m.descricao}</p>

                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
                >
                  {m.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mt-14 rounded-3xl bg-[#0f172a] p-8 md:p-10 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Quer aprofundar o estudo da caixa Volkswagen?
            </h3>

            <p className="mt-2 max-w-2xl text-slate-200">
              Use esta página como referência rápida e baixe a apostila técnica
              para apoiar treinamentos, operação e padronização de condução.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/fichas-tecnicas/caixa-volkswagen.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl
                           bg-gradient-to-r from-sky-400 to-sky-600
                           px-12 py-4 text-base font-extrabold text-white
                           shadow-lg shadow-sky-500/20
                           hover:from-sky-300 hover:to-sky-500
                           transition-all duration-200"
              >
                Baixar apostila (PDF)
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl
                           border border-slate-500 bg-transparent
                           px-10 py-4 text-base font-extrabold text-white
                           hover:bg-white/10 transition"
              >
                Ir para a página inicial
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
