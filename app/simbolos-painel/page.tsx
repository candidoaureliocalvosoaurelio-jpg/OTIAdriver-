// app/simbolos-painel/page.tsx
import Image from "next/image";

type Severity = "vermelho" | "amarelo" | "informativo";

type PanelSymbol = {
  id: string;
  title: string;
  severity: Severity;
  description: string;
  action: string;
  image: string; // caminho da imagem do símbolo (ícone + pequeno texto)
};

const panelSymbols: PanelSymbol[] = [
  // 🔴 VERMELHO – FALHAS GRAVES
  {
    id: "pressao-oleo",
    title: "Pressão do Óleo do Motor",
    severity: "vermelho",
    description:
      "Luz vermelha em forma de almotolia (lata de óleo) pingando. Indica pressão de óleo insuficiente no motor.",
    action:
      "Parar imediatamente em local seguro, desligar o motor e não voltar a dar partida até a inspeção da manutenção.",
    image: "/images/simbolos-painel/pressao-oleo.png",
  },
  {
    id: "temperatura-motor",
    title: "Temperatura do Motor",
    severity: "vermelho",
    description:
      "Símbolo de um termômetro submerso em líquido. Indica superaquecimento do motor.",
    action:
      "Parar o veículo, aguardar o resfriamento e acionar a manutenção. Nunca abrir a tampa do radiador com o motor quente.",
    image: "/images/simbolos-painel/temperatura-motor.png",
  },
  {
    id: "freio-estacionamento-sistema",
    title: "Freio de Estacionamento / Sistema de Freios",
    severity: "vermelho",
    description:
      "Círculo com 'P' ou com ponto de exclamação. Pode indicar freio de estacionamento acionado ou falha/nível baixo no sistema de freios.",
    action:
      "Se acender com o veículo em movimento, parar imediatamente e não prosseguir até inspeção do sistema de freios.",
    image: "/images/simbolos-painel/freio-sistema.png",
  },
  {
    id: "pressao-pneumatica-baixa",
    title: "Pressão Pneumática Baixa (Sistema de Ar)",
    severity: "vermelho",
    description:
      "Luz associada aos manômetros de ar, indicando pressão abaixo do mínimo em um ou mais circuitos de freio pneumático.",
    action:
      "Parar o veículo imediatamente. Não continuar viagem enquanto a pressão não for restabelecida e a causa identificada.",
    image: "/images/simbolos-painel/pressao-pneumatica.png",
  },
  {
    id: "bateria-alternador",
    title: "Falha no Sistema de Carga da Bateria",
    severity: "vermelho",
    description:
      "Símbolo de bateria com sinais de '+' e '-'. Indica que o alternador não está carregando corretamente.",
    action:
      "Evitar trajetos longos. Dirigir até local seguro/oficina, pois o veículo funcionará apenas até a bateria descarregar.",
    image: "/images/simbolos-painel/bateria.png",
  },
  {
    id: "airbag",
    title: "Airbag com Avarias",
    severity: "vermelho",
    description:
      "Figura de uma pessoa com um círculo representando o airbag. Indica falha no sistema de airbags.",
    action:
      "Veículo pode rodar, mas o sistema pode falhar em uma colisão. Registrar o evento e encaminhar para diagnóstico.",
    image: "/images/simbolos-painel/airbag.png",
  },
  {
    id: "cabine-porta",
    title: "Cabine Destravada / Porta Aberta",
    severity: "vermelho",
    description:
      "Símbolo de caminhão com cabine levantada ou porta aberta. Indica acessos estruturais não travados corretamente.",
    action:
      "Parar e verificar imediatamente. Não prosseguir com cabine ou portas mal travadas.",
    image: "/images/simbolos-painel/cabine-porta.png",
  },

  // 🟡 AMARELO – ADVERTÊNCIAS
  {
    id: "injeção-eletronica-mil",
    title: "Injeção Eletrônica / Luz de Mau Funcionamento (MIL)",
    severity: "amarelo",
    description:
      "Desenho de um motor. Indica mau funcionamento na injeção, emissões ou sensores associados.",
    action:
      "Registrar o evento, conduzir com cautela e programar diagnóstico com scanner na primeira oportunidade.",
    image: "/images/simbolos-painel/injecao-mil.png",
  },
  {
    id: "dpf",
    title: "Filtro de Partículas de Diesel (DPF)",
    severity: "amarelo",
    description:
      "Retângulo com pontos no interior. Indica saturação do DPF, necessitando regeneração.",
    action:
      "Seguir o procedimento de regeneração indicado pelo fabricante (automática em rodagem ou estacionária em local seguro).",
    image: "/images/simbolos-painel/dpf.png",
  },
  {
    id: "abs-ebs",
    title: "ABS / EBS",
    severity: "amarelo",
    description:
      "Luz com as letras 'ABS' ou 'EBS'. Indica falha no sistema antibloqueio ou eletrônico de frenagem.",
    action:
      "Conduzir com maior cautela, pois a frenagem convencional atua sem os recursos eletrônicos. Encaminhar para diagnóstico.",
    image: "/images/simbolos-painel/abs-ebs.png",
  },
  {
    id: "controle-tracao-esc",
    title: "Controle de Tração / ESC",
    severity: "amarelo",
    description:
      "Veículo com marcas de derrapagem. Em amarelo fixo indica falha ou desativação do sistema.",
    action:
      "Redobrar a atenção em curvas e pisos escorregadios. Programar verificação do sistema de estabilidade.",
    image: "/images/simbolos-painel/controle-tracao.png",
  },
  {
    id: "combustivel-baixo",
    title: "Nível de Combustível Baixo",
    severity: "amarelo",
    description:
      "Símbolo de bomba de combustível. Indica que o veículo está em reserva.",
    action:
      "Planejar o abastecimento com prioridade, considerando rota, segurança e autonomia restante.",
    image: "/images/simbolos-painel/combustivel-baixo.png",
  },

  // 🟢🔵⚪ INFORMATIVO – FUNÇÕES ATIVAS
  {
    id: "setas-direcao",
    title: "Setas / Luzes de Direção",
    severity: "informativo",
    description:
      "Setas verdes piscando indicam que o pisca-pisca está acionado para a esquerda ou direita.",
    action:
      "Confirmar se a seta corresponde à manobra desejada e certificar-se de desligá-la após a conversão.",
    image: "/images/simbolos-painel/setas.png",
  },
  {
    id: "farol-alto",
    title: "Farol Alto",
    severity: "informativo",
    description:
      "Símbolo azul com feixes de luz. Indica o farol alto ligado.",
    action:
      "Utilizar apenas em condições adequadas (rodovias escuras, sem tráfego oposto próximo) para não ofuscar outros motoristas.",
    image: "/images/simbolos-painel/farol-alto.png",
  },
  {
    id: "luz-neblina",
    title: "Luz de Neblina",
    severity: "informativo",
    description:
      "Farol com feixe cortado por linha ondulada. Indica luz de neblina dianteira ou traseira ligada.",
    action:
      "Utilizar em condições de neblina, chuva intensa ou poeira, desligando quando a visibilidade retornar ao normal.",
    image: "/images/simbolos-painel/luz-neblina.png",
  },
  {
    id: "piloto-automatico",
    title: "Piloto Automático / Cruise Control",
    severity: "informativo",
    description:
      "Símbolo de velocímetro com seta ou indicação 'CRUISE'. Mostra que o controle de velocidade está ativo.",
    action:
      "Utilizar em trechos adequados, mantendo atenção redobrada. Desativar em tráfego intenso ou condições adversas.",
    image: "/images/simbolos-painel/piloto-automatico.png",
  },
  {
    id: "pto",
    title: "Tomada de Força (PTO)",
    severity: "informativo",
    description:
      "Símbolo associado a engrenagens ou eixos auxiliares, indicando a tomada de força acionada.",
    action:
      "Certificar-se de que o PTO está ligado apenas quando necessário (caçamba, betoneira, bomba, etc.) e desligar após o uso.",
    image: "/images/simbolos-painel/pto.png",
  },
  {
    id: "freio-motor",
    title: "Freio Motor",
    severity: "informativo",
    description:
      "Símbolo de freio ou escapamento indicando atuação do freio motor.",
    action:
      "Utilizar em descidas e reduções de velocidade para poupar o sistema de freios de serviço e aumentar a segurança.",
    image: "/images/simbolos-painel/freio-motor.png",
  },

  // INSTRUMENTOS DE MEDIÇÃO
  {
    id: "manometros-ar",
    title: "Manômetros do Sistema Pneumático",
    severity: "informativo",
    description:
      "Indicadores analógicos ou digitais da pressão de ar nos diferentes circuitos de freio.",
    action:
      "Iniciar a viagem apenas com a pressão dentro da faixa operacional. Monitorar quedas anormais durante a condução.",
    image: "/images/simbolos-painel/manometros-ar.png",
  },
  {
    id: "tacometro",
    title: "Tacômetro (Conta-Giro)",
    severity: "informativo",
    description:
      "Mostra as rotações por minuto (RPM) do motor, essencial para condução econômica e dentro da faixa de torque ideal.",
    action:
      "Manter o motor na faixa verde de RPM recomendada, evitando giros excessivos ou condução em rotações muito baixas.",
    image: "/images/simbolos-painel/tacometro.png",
  },
  {
    id: "velocimetro-tacografo",
    title: "Velocímetro / Tacógrafo",
    severity: "informativo",
    description:
      "Indica a velocidade instantânea e, no caso do tacógrafo, registra velocidade, distância e tempos de condução/descanso.",
    action:
      "Respeitar limites de velocidade e, em operações reguladas, cumprir as janelas de descanso previstas.",
    image: "/images/simbolos-painel/velocimetro-tacografo.png",
  },
  {
    id: "nivel-combustivel",
    title: "Indicador de Combustível",
    severity: "informativo",
    description:
      "Mostra o nível de combustível disponível no tanque.",
    action:
      "Planejar abastecimentos conforme rota e política da frota, evitando uso frequente da reserva.",
    image: "/images/simbolos-painel/nivel-combustivel.png",
  },
  {
    id: "temp-arrefecimento",
    title: "Temperatura do Líquido de Arrefecimento",
    severity: "informativo",
    description:
      "Medidor analógico ou digital da temperatura de trabalho do motor.",
    action:
      "Monitorar variações fora da faixa normal e, em caso de tendência de aquecimento, reduzir esforço do motor e buscar suporte técnico.",
    image: "/images/simbolos-painel/temp-arrefecimento.png",
  },
];

export const metadata = {
  title: "Símbolos do Painel de Instrumentos | OTIAdriver",
  description:
    "Página técnica única reunindo símbolos do painel de caminhões, com descrição, gravidade e ações recomendadas.",
};

function severityConfig(severity: Severity) {
  switch (severity) {
    case "vermelho":
      return {
        label: "Emergência",
        badgeClass: "bg-red-100 text-red-700",
        borderClass: "border-red-200",
      };
    case "amarelo":
      return {
        label: "Advertência",
        badgeClass: "bg-amber-100 text-amber-700",
        borderClass: "border-amber-200",
      };
    case "informativo":
      return {
        label: "Informativo",
        badgeClass: "bg-emerald-100 text-emerald-700",
        borderClass: "border-emerald-200",
      };
    default:
      return {
        label: "",
        badgeClass: "",
        borderClass: "",
      };
  }
}

export default function SimbolosPainelPage() {
  const vermelhos = panelSymbols.filter((s) => s.severity === "vermelho");
  const amarelos = panelSymbols.filter((s) => s.severity === "amarelo");
  const informativos = panelSymbols.filter(
    (s) => s.severity === "informativo"
  );

  return (
    <main className="max-w-6xl mx-auto px-4 pt-28 pb-16">
      {/* CABEÇALHO */}
      <header className="mb-10 text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
          Símbolos do Painel de Instrumentos
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
          Biblioteca técnica unificada dos símbolos do painel de caminhões,
          organizada por gravidade (vermelho, amarelo e informativo) com
          explicação e ação recomendada para cada situação.
        </p>
      </header>

      {/* LEGENDA POR COR */}
      <section className="grid gap-4 md:grid-cols-3 text-sm md:text-base mb-10">
        <div className="rounded-2xl bg-red-50 border border-red-200 p-4">
          <h2 className="font-bold text-red-700 mb-1">🔴 Luzes Vermelhas</h2>
          <p className="text-gray-800">
            Indicam falhas graves e riscos imediatos. Regra geral:{" "}
            <strong>parada em local seguro e acionar manutenção.</strong>
          </p>
        </div>
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
          <h2 className="font-bold text-amber-700 mb-1">
            🟡 Luzes Amarelas
          </h2>
          <p className="text-gray-800">
            Advertências importantes. Permitem seguir viagem com cautela,{" "}
            mas exigem correção planejada.
          </p>
        </div>
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
          <h2 className="font-bold text-emerald-700 mb-1">
            🟢🔵⚪ Luzes Informativas
          </h2>
          <p className="text-gray-800">
            Indicam funções ativas e instrumentos de monitoramento.{" "}
            Servem como confirmação visual do estado do sistema.
          </p>
        </div>
      </section>

      {/* BLOCO: VERMELHO */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-4">
          Luzes Vermelhas – Falhas Graves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vermelhos.map((symbol) => {
            const cfg = severityConfig(symbol.severity);
            return (
              <article
                key={symbol.id}
                className={`bg-white rounded-2xl shadow-sm border ${cfg.borderClass} overflow-hidden flex flex-col`}
              >
                <div className="relative w-full aspect-[16/9] bg-white">
                  <Image
                    src={symbol.image}
                    alt={symbol.title}
                    fill
                    className="object-contain"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 md:p-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      {symbol.title}
                    </h3>
                    <span
                      className={
                        "text-[11px] md:text-xs font-semibold px-2 py-0.5 rounded-full " +
                        cfg.badgeClass
                      }
                    >
                      {cfg.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{symbol.description}</p>
                  <p className="text-sm text-gray-800 font-semibold mt-1">
                    Ação recomendada:{" "}
                    <span className="font-normal text-gray-700">
                      {symbol.action}
                    </span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* BLOCO: AMARELO */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-amber-700 mb-4">
          Luzes Amarelas – Advertências
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {amarelos.map((symbol) => {
            const cfg = severityConfig(symbol.severity);
            return (
              <article
                key={symbol.id}
                className={`bg-white rounded-2xl shadow-sm border ${cfg.borderClass} overflow-hidden flex flex-col`}
              >
                <div className="relative w-full aspect-[16/9] bg-white">
                  <Image
                    src={symbol.image}
                    alt={symbol.title}
                    fill
                    className="object-contain"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 md:p-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      {symbol.title}
                    </h3>
                    <span
                      className={
                        "text-[11px] md:text-xs font-semibold px-2 py-0.5 rounded-full " +
                        cfg.badgeClass
                      }
                    >
                      {cfg.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{symbol.description}</p>
                  <p className="text-sm text-gray-800 font-semibold mt-1">
                    Ação recomendada:{" "}
                    <span className="font-normal text-gray-700">
                      {symbol.action}
                    </span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* BLOCO: INFORMATIVO */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold text-emerald-700 mb-4">
          Luzes Informativas e Instrumentos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {informativos.map((symbol) => {
            const cfg = severityConfig(symbol.severity);
            return (
              <article
                key={symbol.id}
                className={`bg-white rounded-2xl shadow-sm border ${cfg.borderClass} overflow-hidden flex flex-col`}
              >
                <div className="relative w-full aspect-[16/9] bg-white">
                  <Image
                    src={symbol.image}
                    alt={symbol.title}
                    fill
                    className="object-contain"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 md:p-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      {symbol.title}
                    </h3>
                    <span
                      className={
                        "text-[11px] md:text-xs font-semibold px-2 py-0.5 rounded-full " +
                        cfg.badgeClass
                      }
                    >
                      {cfg.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{symbol.description}</p>
                  <p className="text-sm text-gray-800 font-semibold mt-1">
                    Ação recomendada:{" "}
                    <span className="font-normal text-gray-700">
                      {symbol.action}
                    </span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
