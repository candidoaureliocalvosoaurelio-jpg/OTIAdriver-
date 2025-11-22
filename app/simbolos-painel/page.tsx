import Image from "next/image";

type Severity = "vermelho" | "amarelo" | "informativo";

type PanelSymbol = {
  id: string;
  title: string;
  severity: Severity;
  description: string;
  action: string;
  image: string; // caminho da imagem do bloco (ícone + texto)
};

const panelSymbols: PanelSymbol[] = [
  {
    id: "pressao-oleo",
    title: "Pressão do Óleo do Motor",
    severity: "vermelho",
    description:
      "Indica pressão de óleo insuficiente no motor. Normalmente representado por uma almotolia pingando.",
    action:
      "Parar imediatamente em local seguro, desligar o motor e não voltar a dar partida até inspeção da manutenção.",
    image: "/images/simbolos-painel/pressao-oleo.png",
  },
  {
    id: "temperatura-motor",
    title: "Temperatura do Motor",
    severity: "vermelho",
    description:
      "Superaquecimento do motor. Simbolizado por um termômetro submerso em líquido.",
    action:
      "Parar, aguardar resfriar e acionar a manutenção. Nunca abrir a tampa do radiador com o motor quente.",
    image: "/images/simbolos-painel/temperatura-motor.png",
  },
  {
    id: "freio-estacionamento",
    title: "Freio de Estacionamento / Sistema de Freios",
    severity: "vermelho",
    description:
      "Círculo com 'P' ou ponto de exclamação. Pode indicar freio de estacionamento acionado ou falha/nível baixo no sistema de freios.",
    action:
      "Se acender com o veículo em movimento: parar imediatamente e não prosseguir até inspeção dos freios.",
    image: "/images/simbolos-painel/freio-estacionamento.png",
  },
  {
    id: "dpf",
    title: "Filtro de Partículas de Diesel (DPF)",
    severity: "amarelo",
    description:
      "Retângulo com pontos no centro. Indica que o DPF está saturado e necessita regeneração.",
    action:
      "Seguir o procedimento de regeneração recomendado pelo fabricante (automática ou estacionária).",
    image: "/images/simbolos-painel/dpf.png",
  },
  {
    id: "abs-ebs",
    title: "ABS / EBS",
    severity: "amarelo",
    description:
      "Luz com as letras 'ABS' ou 'EBS'. Indica falha no sistema antibloqueio ou eletrônico de freios.",
    action:
      "Conduzir com cautela (freio convencional ainda atua) e encaminhar o veículo para diagnóstico.",
    image: "/images/simbolos-painel/abs-ebs.png",
  },
  {
    id: "seta-direcao",
    title: "Seta / Luz de Direção",
    severity: "informativo",
    description:
      "Setas verdes piscando indicam que o pisca-pisca está acionado para esquerda ou direita.",
    action:
      "Apenas confirmação visual. Verificar se corresponde à manobra desejada e se foi desligada após a curva.",
    image: "/images/simbolos-painel/seta-direcao.png",
  },
  {
    id: "farol-alto",
    title: "Farol Alto",
    severity: "informativo",
    description:
      "Símbolo azul com facho de luz. Indica que o farol alto está ligado.",
    action:
      "Usar apenas quando não houver risco de ofuscar outros condutores. Em aproximações, reduza para farol baixo.",
    image: "/images/simbolos-painel/farol-alto.png",
  },
];

export const metadata = {
  title: "Símbolos do Painel de Instrumentos | OTIAdriver",
  description:
    "Biblioteca visual dos principais símbolos do painel de caminhões, com classificação por gravidade e ações recomendadas.",
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
          Cada card abaixo representa um bloco do seu material técnico
          (ícone + explicação). A cor e o texto orientam a ação correta
          em operação: parada imediata, advertência ou simples informação.
        </p>
      </header>

      {/* LEGENDA POR COR */}
      <section className="grid gap-4 md:grid-cols-3 text-sm mb-10">
        <div className="rounded-2xl bg-red-50 border border-red-200 p-4">
          <h2 className="font-bold text-red-700 mb-1">🔴 Falhas Graves</h2>
          <p className="text-gray-800">
            Emergências que exigem <strong>parada imediata</strong> em local
            seguro para evitar danos ou acidentes.
          </p>
        </div>
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
          <h2 className="font-bold text-amber-700 mb-1">
            🟡 Advertências
          </h2>
          <p className="text-gray-800">
            Falhas que permitem continuar dirigindo com cautela, mas exigem{" "}
            <strong>correção planejada</strong>.
          </p>
        </div>
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
          <h2 className="font-bold text-emerald-700 mb-1">
            🟢🔵⚪ Informativos
          </h2>
          <p className="text-gray-800">
            Luzes que apenas indicam <strong>funções ativas</strong>, como
            faróis, setas, piloto automático e PTO.
          </p>
        </div>
      </section>

      {/* GRID DE CARDS (BLOCOS A3) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {panelSymbols.map((symbol) => (
          <article
            key={symbol.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* IMAGEM DO BLOCO (ÍCONE + TEXTO DO PPT) */}
            <div className="relative w-full aspect-[16/9] bg-white">
              <Image
                src={symbol.image}
                alt={symbol.title}
                fill
                className="object-contain"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            {/* TEXTO TÉCNICO */}
            <div className="p-4 md:p-5 flex flex-col gap-2">
              <h2 className="text-base md:text-lg font-bold text-gray-900">
                {symbol.title}
              </h2>

              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide">
                {symbol.severity === "vermelho" && (
                  <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                    Emergência
                  </span>
                )}
                {symbol.severity === "amarelo" && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                    Advertência
                  </span>
                )}
                {symbol.severity === "informativo" && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                    Informativo
                  </span>
                )}
              </span>

              <p className="text-sm text-gray-700">{symbol.description}</p>

              <p className="text-sm text-gray-800 font-semibold mt-1">
                Ação recomendada:{" "}
                <span className="font-normal text-gray-700">
                  {symbol.action}
                </span>
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
