// app/caminhoes/daf-cf-semipesado/page.tsx

import Image from "next/image";
import Link from "next/link";

type FichaTecnicaItem = {
  titulo: string;
  descricao: React.ReactNode;
  href: string;
  cta?: string;
};

export default function DafCFSemipesadoPage() {
  const fichasTecnicas: FichaTecnicaItem[] = [
    {
      titulo: "Ficha técnica oficial – DAF CF Semipesado 6x2 (PDF)",
      descricao: (
        <>
          Consulte os dados completos de dimensões, capacidades, trem de força,
          configurações de eixos e equipamentos do{" "}
          <strong>DAF CF Semipesado 6x2</strong>.
        </>
      ),
      href: "/fichas-tecnicas/daf-cf-semipesado.pdf",
      cta: "Abrir ficha técnica (PDF)",
    },
    {
      titulo: "Ficha técnica oficial – DAF CF Semipesado 8x2 (PDF)",
      descricao: (
        <>
          Informações completas sobre dimensões, capacidades, limites legais,
          configurações de trem de força e características operacionais do{" "}
          <strong>DAF CF Semipesado 8x2</strong>.
        </>
      ),
      href: "/fichas-tecnicas/daf-cf-semipesado-8x2.pdf",
      cta: "Abrir ficha técnica (PDF)",
    },
    {
      titulo: "Ficha técnica oficial – DAF CF 8x2 PX-9 360 cv (PDF)",
      descricao: (
        <>
          Informações completas sobre dimensões, capacidades, limites legais,
          configurações do trem de força e características operacionais do{" "}
          <strong>DAF CF 8x2 com motor PACCAR PX-9 de 360 cv</strong>.
        </>
      ),
      href: "/fichas-tecnicas/ficha-tecnica-daf-cf-8x2-PX-9-360cv.pdf",
      cta: "Abrir ficha técnica (PDF)",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617] text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.25fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-300 mb-3">
              Linha Semipesada DAF
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              DAF CF Semipesado
              <span className="block text-sky-300 text-xl md:text-2xl mt-1">
                Versatilidade e robustez para aplicação mista urbana e rodoviária
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-100/85 mb-6 max-w-xl">
              O <strong>DAF CF Semipesado</strong> foi projetado para operações
              que combinam trechos urbanos, rodovias e acessos com piso
              irregular. Une cabine confortável, trem de força eficiente e
              configurações de eixos pensadas para máxima produtividade com
              baixo custo operacional.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Faixa de PBTC
                </p>
                <p className="text-lg font-bold">Semipesado</p>
                <p className="text-[11px] text-slate-300">
                  Configurações 6x2 6x4 e 8x2
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Aplicação
                </p>
                <p className="text-lg font-bold">Mista</p>
                <p className="text-[11px] text-slate-300">
                  Distribuição regional, urbana e trechos de acesso
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Foco
                </p>
                <p className="text-lg font-bold">Produtividade</p>
                <p className="text-[11px] text-slate-300">
                  Robustez com conforto ao motorista
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#ficha-tecnica"
                scroll={true}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-300 text-black hover:bg-sky-200 transition"
              >
                Ver fichas técnicas em PDF
              </Link>
            </div>
          </div>

          {/* Imagem do caminhão */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/daf-cf-semipesado.jpg"
                  alt="DAF CF Semipesado – caminhão para aplicações mistas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-300 text-center">
              Imagem ilustrativa DAF CF Semipesado – configuração para operações
              mistas urbanas e rodoviárias.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Bloco 1 – Visão geral */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Plataforma semipesada com foco em versatilidade
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              O <strong>DAF CF Semipesado</strong> atende operações que exigem
              equilíbrio entre capacidade de carga, facilidade de manobra e
              conforto para o motorista. É uma base ideal para implementos
              como baú, carga seca, tanque e outros equipamentos voltados à
              distribuição regional.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              A cabine segue o padrão de ergonomia da linha CF, com comandos
              bem posicionados, boa visibilidade e ambiente interno pensado
              para jornadas intensas, reduzindo fadiga e aumentando a
              produtividade.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
            <p className="text-xs font-semibold text-sky-700 mb-1 uppercase">
              Pontos fortes operacionais
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>• Versatilidade para diferentes tipos de implemento</li>
              <li>• Boa relação entre peso próprio e capacidade de carga</li>
              <li>• Conforto de cabine típico da linha CF</li>
              <li>• Opções de configuração de eixos para ajustar ao PBTC</li>
            </ul>
          </div>
        </section>

        {/* Bloco 2 – Trem de força (resumo genérico) */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Trem de força dimensionado para operações semipesadas
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-sm text-slate-700 mb-3">
                O DAF CF Semipesado utiliza motorização e transmissão
                dimensionadas para entregar bom desempenho em trechos urbanos
                e rodoviários, mantendo consumo controlado e robustez em
                operações de alta utilização diária.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Motor com foco em torque útil em baixas e médias rotações</li>
                <li>• Transmissão adequada a operações de distribuição regional</li>
                <li>
                  • Relações de eixo pensadas para equilíbrio entre força e
                  velocidade
                </li>
                <li>• Configurações específicas por versão (6x2 / 6x4 / 8x2)</li>
              </ul>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-sky-900 mb-2">
                Foco em disponibilidade e TCO
              </p>
              <p className="mb-2">
                A proposta da linha CF Semipesado é combinar robustez mecânica,
                intervalos de manutenção adequados e facilidade de acesso a
                componentes, ajudando a reduzir paradas não planejadas.
              </p>
              <p>
                Resultado: boa disponibilidade da frota, previsibilidade de
                custos e maior controle do{" "}
                <strong>Custo Total de Operação</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 3 – Configurações de eixos (incluindo 8x2) */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Configurações típicas de eixos
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-slate-50/80">
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Configuração
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Aplicação principal
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Destaque operacional
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 text-slate-800 font-medium">6x2</td>
                  <td className="px-4 py-3 text-slate-800">
                    Distribuição urbana e regional com menor PBTC.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Menor peso próprio e boa manobrabilidade em centros urbanos.
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <td className="px-4 py-3 text-slate-800 font-medium">6x2</td>
                  <td className="px-4 py-3 text-slate-800">
                    Cargas com maior densidade e rotas regionais.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Aumento de capacidade legal, mantendo boa dirigibilidade.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-800 font-medium">8x2</td>
                  <td className="px-4 py-3 text-slate-800">
                    Operações com alta utilização de PBT e necessidade de
                    distribuição mais uniforme da carga.
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    Maior PBT disponível e melhor distribuição de peso sobre os
                    eixos, adequado a implementos de grande volume.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BLOCO FINAL – Fichas Técnicas (3 cards padronizados, data-driven) */}
        <section id="ficha-tecnica" className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            {fichasTecnicas.map((item) => (
              <div
                key={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[240px]"
              >
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.titulo}
                </h2>

                <p className="text-sm text-slate-700 mb-4">{item.descricao}</p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
                >
                  {item.cta ?? "Abrir ficha técnica (PDF)"}
                </a>
              </div>
            ))}
          </div>
        </section>
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
    </main>
  );
}
      </section>
    </main>
  );
}
