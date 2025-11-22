// app/simbolos-painel/page.tsx

import Image from "next/image";
import { painelSymbols } from "@/data/simbolosPainel";

type PainelSymbol = {
  id: string;
  icon: string;
  titulo: string;
  paragrafos: string[];
};

const symbols: PainelSymbol[] = [
  {
    id: "esc",
    icon: "/simbolos/esc.png", // coloque aqui o caminho correto do ícone
    titulo: "ESC – Controle de Estabilidade do Veículo",
    paragrafos: [
      "É a sigla para Controle de Estabilidade do Veículo, um sistema de segurança ativa que auxilia o motorista a manter o controle do carro em situações de risco, como derrapagens ou manobras bruscas, reduzindo a potência do motor ou acionando os freios das rodas individualmente para restaurar a estabilidade do veículo.",
    ],
  },
  {
    id: "tc",
    icon: "/simbolos/tc.png",
    titulo: "TC – Controle de Tração",
    paragrafos: [
      "É um sistema de segurança veicular que impede que as rodas patinem ao acelerar, especialmente em superfícies escorregadias, mantendo a aderência e a estabilidade do veículo.",
      "Ele funciona monitorando a rotação das rodas e, quando detecta patinagem, atua nos freios e reduz a potência do motor para restaurar a tração.",
    ],
  },
  {
    id: "desligue",
    icon: "/simbolos/desligue.png",
    titulo: "Desligue – (em casos específicos)",
    paragrafos: [
      "Em terrenos muito soltos ou irregulares, como cascalho solto ou areia, pode ser necessário desligar o sistema.",
      "Nesses pisos soltos, o movimento da roda patinando um pouco pode ajudar o veículo a encontrar aderência para arrancar. Com o TC ligado, o sistema pode cortar a aceleração ao 'entender' o motor, impedindo o avanço.",
      "O sistema deve ser reativado assim que o veículo sair desse tipo de piso.",
    ],
  },
  {
    id: "ldws",
    icon: "/simbolos/ldws.png",
    titulo: "LDWS – Sistema de aviso de saída de faixa",
    paragrafos: [
      "O sistema avisa o motorista quando o veículo sai da faixa despropositadamente.",
      "O LDWS usa uma câmera atrás do para-brisa para detectar as faixas de sinalização horizontal da via. Marcação com linhas sólidas, linhas brancas ou amarelas contínuas, faixas brancas ou amarelas tracejadas e pontos em relevo.",
      "Um sinal auditivo (rádio é reduzido automaticamente ou emite sinal mais baixo) é emitido se o veículo estiver saindo da pista sem que o motorista ative a seta. Alguns veículos também podem avisar o condutor por um sonorizador, e o aviso é dado no lado para o qual o veículo está se movendo.",
    ],
  },
  {
    id: "aebs",
    icon: "/simbolos/aebs.png",
    titulo: "AEBS – Frenagem avançada de emergência",
    paragrafos: [
      "É um sistema de segurança ativa que utiliza um radar frontal para detectar veículos à frente e evitar colisões.",
      "Ele emite alertas visuais e sonoros ao motorista e, se necessário, pode acionar a frenagem automática para evitar ou reduzir a severidade do impacto.",
      "O sistema não substitui o motorista e deve ser usado como uma assistência. O condutor continua responsável pela condução segura do veículo.",
      "Se o AEBS for desligado, este indicador de advertência acende no painel de instrumentos.",
      "O AEBS é desativado de acordo com o comando de ligar/desligar do AEBS no painel de controle.",
    ],
  },
  {
    id: "advertencia-geral",
    icon: "/simbolos/advertencia-geral.png",
    titulo: "Advertência geral",
    paragrafos: [
      "Este indicador de advertência acende quando há uma falha em um sistema do veículo.",
      "O visor principal mostra qual função do veículo acionou a advertência.",
    ],
  },
  {
    id: "scr",
    icon: "/simbolos/scr.png",
    titulo: "Catalisador SCR",
    paragrafos: [
      "Quando o nível de contaminação no catalisador SCR está muito alto, ou o sistema EAS não está funcionando corretamente, este indicador de advertência acende.",
      "Nível de partículas muito alto. Iniciar regeneração imediatamente.",
    ],
  },
];

export default function SimbolosPainelPage() {
  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Título da página */}
        <header className="mb-10">
          <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Símbolos do painel
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Entenda o significado dos principais indicadores de segurança e
            advertência do veículo.
          </p>
        </header>

        {/* Lista de símbolos */}
        <div className="space-y-8">
          {symbols.map((symbol) => (
            <article
              key={symbol.id}
              className="flex flex-col gap-4 rounded-lg bg-gray-50 p-4 shadow-sm sm:flex-row sm:items-start sm:gap-6"
            >
              {/* Ícone */}
              <div className="flex-shrink-0">
                <div className="relative h-16 w-16">
                  <Image
                    src={symbol.icon}
                    alt={symbol.titulo}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="flex-1">
                <h2 className="text-base font-semibold text-gray-900">
                  {symbol.titulo}
                </h2>
                <div className="mt-1 space-y-1.5 text-sm leading-relaxed text-gray-800">
                  {symbol.paragrafos.map((p, index) => (
                    <p key={index}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
