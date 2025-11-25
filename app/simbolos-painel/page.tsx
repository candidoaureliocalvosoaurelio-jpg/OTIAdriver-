"use client";

import Image from "next/image";
import { useState } from "react";

type PainelSymbol = {
  id: string;
  icon: string;
  titulo: string;
  cor: "vermelho" | "amarelo" | "verde";
  resumo: string;
  detalhes: string[];
};

const symbols: PainelSymbol[] = [
  {
    id: "esc",
    icon: "/simbolos/simbolo-01.png",
    titulo: "ESC – Controle de Estabilidade do Veículo",
    cor: "amarelo",
    resumo:
      "Sistema de segurança ativa que ajuda a manter o controle do veículo em situações de risco.",
    detalhes: [
      "Monitora a trajetória do veículo e a comparação entre o que o motorista está comandando no volante e o movimento real do veículo.",
      "Em situação de derrapagem ou perda de controle, pode atuar nos freios de cada roda e reduzir a potência do motor.",
      "Se a luz ficar acesa continuamente, indica possível falha no sistema. A recomendação é procurar uma oficina autorizada na primeira oportunidade.",
    ],
  },
  {
    id: "asr-piscando",
    icon: "/simbolos/simbolo-02.png",
    titulo: "ASR – Controle de Tração Ativo (luz piscando)",
    cor: "amarelo",
    resumo:
      "Indica atuação do controle de tração para evitar patinagem excessiva das rodas.",
    detalhes: [
      "Normalmente pisca em pisos escorregadios, arrancadas bruscas ou em aclives com baixa aderência.",
      "Enquanto pisca, o sistema está intervindo para recuperar a tração, limitando o torque do motor.",
      "Se permanecer acesa de forma contínua, pode indicar falha no sistema e recomenda-se inspeção técnica.",
    ],
  },
  {
    id: "asr-off",
    icon: "/simbolos/simbolo-03.png",
    titulo: "ASR – Sistema Desativado",
    cor: "amarelo",
    resumo:
      "Mostra que o controle de tração foi desligado manualmente ou está indisponível.",
    detalhes: [
      "Conduzir com o ASR desligado pode aumentar o risco de patinagem das rodas, principalmente em pisos molhados ou escorregadios.",
      "Em alguns modelos é possível reativar o sistema pressionando o botão ASR/ESP no painel.",
      "Se o aviso permanecer aceso mesmo após tentar reativar, recomenda-se verificar o sistema em oficina especializada.",
    ],
  },
  {
    id: "ldws",
    icon: "/simbolos/simbolo-04.png",
    titulo: "LDWS – Aviso de Saída de Faixa",
    cor: "verde",
    resumo:
      "Sistema que monitora as faixas de rodagem e alerta o motorista em desvios não sinalizados.",
    detalhes: [
      "Pode emitir aviso sonoro, vibração no volante ou apenas o acendimento do símbolo no painel.",
      "O sistema não substitui a atenção do condutor; é um recurso auxiliar de segurança.",
      "Se a luz de falha do LDWS permanecer acesa, pode indicar sensor obstruído ou descalibrado.",
    ],
  },
  // ➜ Continue adicionando os demais símbolos seguindo o mesmo padrão acima.
];

function getCorBadgeStyles(cor: PainelSymbol["cor"]) {
  switch (cor) {
    case "vermelho":
      return "bg-red-100 text-red-800 border-red-300";
    case "amarelo":
      return "bg-amber-100 text-amber-800 border-amber-300";
    case "verde":
      return "bg-emerald-100 text-emerald-800 border-emerald-300";
  }
}

function getCorLabel(cor: PainelSymbol["cor"]) {
  switch (cor) {
    case "vermelho":
      return "🔴 Vermelho – Emergência";
    case "amarelo":
      return "🟡 Amarelo/Laranja – Advertência";
    case "verde":
      return "🟢 Verde – Informativo/Ativo";
  }
}

export default function SimbolosPainelPage() {
  const [simboloAtivoId, setSimboloAtivoId] = useState<string | null>(null);

  const simboloAtivo = symbols.find((s) => s.id === simboloAtivoId) ?? null;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        {/* Título principal */}
        <header className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Símbolos do Painel de Instrumentos
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Consulte abaixo a classificação por cor e depois selecione um
            símbolo para ver o significado detalhado e a ação recomendada, de
            forma semelhante à página de cuidados com pneus.
          </p>
        </header>

        {/* Tabela de cores / legenda */}
        <section className="mb-10">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">
            Classificação rápida por cor
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Cor
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Significado
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-800">
                    Ação recomendada
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 align-top">
                    <span className="font-semibold">
                      Vermelho 🔴
                    </span>
                  </td>
                  <td className="px-4 py-3 align-top">
                    Emergência / falha grave. Risco imediato à segurança ou
                    danos ao veículo.
                  </td>
                  <td className="px-4 py-3 align-top">
                    Parada imediata em local seguro e desligamento do motor.
                    Necessidade de reparo urgente.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">
                    <span className="font-semibold">
                      Amarelo / Laranja 🟡
                    </span>
                  </td>
                  <td className="px-4 py-3 align-top">
                    Advertência / falha moderada. Indica um problema que
                    requer atenção, mas normalmente não impede a continuação da
                    viagem.
                  </td>
                  <td className="px-4 py-3 align-top">
                    Verificar o sistema indicado. Pode-se continuar dirigindo
                    com cautela até um local seguro ou oficina, corrigindo a
                    falha na primeira oportunidade.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">
                    <span className="font-semibold">
                      Verde / Azul / Branco 🟢 🔵 ⚪
                    </span>
                  </td>
                  <td className="px-4 py-3 align-top">
                    Informação / funcionalidade ativa. Indica que um sistema
                    está ligado (faróis, setas etc.) ou ativo.
                  </td>
                  <td className="px-4 py-3 align-top">
                    Não requer ação de emergência, apenas confirmação do
                    acionamento ou estado do sistema.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Grid responsivo de símbolos */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">
            Selecione um símbolo para ver os detalhes
          </h2>
          <p className="mb-4 text-xs sm:text-sm text-slate-600">
            Assim como na página de cuidados com pneus, ao clicar em um card
            abaixo, os detalhes completos aparecem em destaque logo abaixo da
            grade.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {symbols.map((symbol) => {
              const isActive = symbol.id === simboloAtivoId;
              return (
                <button
                  key={symbol.id}
                  type="button"
                  onClick={() =>
                    setSimboloAtivoId(
                      isActive ? null : symbol.id
                    )
                  }
                  className={[
                    "group flex h-full flex-col items-start rounded-2xl border bg-white p-4 text-left shadow-sm transition-all",
                    "hover:-translate-y-0.5 hover:shadow-md",
                    isActive
                      ? "border-sky-500 ring-2 ring-sky-200"
                      : "border-slate-200",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 rounded-xl border border-slate-200 bg-slate-50">
                      <Image
                        src={symbol.icon}
                        alt={symbol.titulo}
                        fill
                        sizes="48px"
                        className="object-contain p-1.5"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                        {symbol.titulo}
                      </h3>
                      <span
                        className={[
                          "mt-1 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                          getCorBadgeStyles(symbol.cor),
                        ].join(" ")}
                      >
                        {getCorLabel(symbol.cor)}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 sm:text-sm">
                    {symbol.resumo}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Painel de detalhes do símbolo selecionado */}
        {simboloAtivo && (
          <section className="mt-8 rounded-2xl border border-sky-200 bg-sky-50/60 p-4 sm:p-6 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="relative h-12 w-12 shrink-0 rounded-xl border border-slate-200 bg-white">
                <Image
                  src={simboloAtivo.icon}
                  alt={simboloAtivo.titulo}
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                  {simboloAtivo.titulo}
                </h2>
                <span
                  className={[
                    "mt-1 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                    getCorBadgeStyles(simboloAtivo.cor),
                  ].join(" ")}
                >
                  {getCorLabel(simboloAtivo.cor)}
                </span>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-4 sm:pl-5">
                  {simboloAtivo.detalhes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
