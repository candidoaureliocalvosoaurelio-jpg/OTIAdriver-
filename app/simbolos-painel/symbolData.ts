// app/simbolos-painel/symbolData.ts

export type SymbolInfo = {
  id: number;
  slug: string;      // ex: "simbolo-01"
  title: string;
  description: string;
};

export const symbolData: SymbolInfo[] = [
  {
    id: 1,
    slug: "simbolo-01",
    title: "Controle de Estabilidade do Veículo",
    description: `
É a sigla para Controle de Estabilidade do Veículo, um sistema de segurança ativa que auxilia o motorista a manter o controle do carro em situações de risco, como derrapagens ou manobras bruscas, reduzindo a potência do motor e/ou acionando os freios das rodas individualmente para restaurar a estabilidade do veículo.
    `,
  },
  {
    id: 2,
    slug: "simbolo-02",
    title: "ASR – Advertência do Painel de Instrumentos piscando",
    description: `
É um sistema de segurança veicular que impede que as rodas patinem ao acelerar, especialmente em superfícies escorregadias, mantendo a aderência e a estabilidade do veículo. Ele funciona monitorando a rotação das rodas e, quando detecta patinação, atua nos freios e reduz a potência do motor para restaurar a tração.
    `,
  },
  {
    id: 3,
    slug: "simbolo-03",
    title: "ASR – Desativado",
    description: `
Desligue-o (em casos específicos).
Em terrenos muito soltos ou irregulares, como cascalho solto ou areia, pode ser necessário desligar o sistema: em pisos soltos, o movimento da roda patinando um pouco pode ajudar o veículo a encontrar aderência para arrancar. Com o TC ligado, o sistema pode cortar a aceleração ou até “morrer” o motor, impedindo o avanço. O sistema deve ser reativado assim que o veículo sair desse tipo de piso.
    `,
  },
  {
    id: 4,
    slug: "simbolo-04",
    title: "LDWS – Sistema de aviso de saída da faixa",
    description: `
O sistema avisa o motorista quando o veículo sai da faixa despropositadamente. O LDWS usa uma câmera atrás do para-brisa para detectar as faixas da sinalização horizontal: marcações como faixas brancas ou amarelas contínuas, faixas brancas ou amarelas tracejadas e pontos em relevo. Um sinal acústico (o rádio está funcionando em um volume mais baixo) é emitido no alto-falante frontal esquerdo ou direito quando se sai da faixa atual. O sinal acústico soa como se o veículo estivesse passando por um sonorizador e é ouvido no lado para o qual o veículo está se movendo.
    `,
  },
  {
    id: 5,
    slug: "simbolo-05",
    title: "AEBS – Desativado",
    description: `
É um sistema de segurança que utiliza um radar frontal para detectar veículos à frente e evitar colisões. Ele emite alertas sonoros e visuais ao motorista e, se necessário, pode acionar a frenagem automática para evitar acidentes. O AEBS é um sistema de assistência e não deve ser usado como substituto para a atenção do motorista ao volante. O motorista deve manter o controle total do veículo e sempre calcular uma distância de condução segura.
    `,
  },
  {
    id: 6,
    slug: "simbolo-06",
    title: "Advertência geral",
    description: `
Advertência geral. Este indicador de advertência acende quando há uma falha em um sistema do veículo.
O visor principal mostra qual função do veículo acionou a advertência.
    `,
  },
  {
    id: 7,
    slug: "simbolo-07",
    title: "Catalisador SCR",
    description: `
Quando o nível de contaminação no catalisador SCR está (muito) alto, ou o sistema EAS não está funcionando corretamente, este indicador de advertência acende. Nível de partículas muito alto. Iniciar regeneração imediatamente.
    `,
  },
  {
    id: 8,
    slug: "simbolo-08",
    title: "Bloqueio do diferencial entre eixos (longitudinal)",
    description: `
Bloqueio do diferencial entre eixos (longitudinal).
Quando tiver este estágio do bloqueio do diferencial entre eixos, deve ser acionado primeiro.

Acionar o interruptor do bloqueio do diferencial entre eixos:
– Com o veículo parado;
– Com o pedal da embreagem pressionado (câmbio manual);
– Com a transmissão na posição neutra (N), no caso de veículos com câmbio automatizado.

Caso isso não se mostre efetivo, o bloqueio do eixo cruzado deve ser engatado também.
    `,
  },
  {
    id: 9,
    slug: "simbolo-09",
    title: "Bloqueio do diferencial entre rodas (eixo cruzado)",
    description: `
Bloqueio do diferencial entre rodas (eixo cruzado) (transversal).

Acionar o interruptor do bloqueio do eixo cruzado:
– Com o veículo parado;
– Nunca fazer curva;
– Com o pedal da embreagem pressionado (câmbio manual);
– Com a transmissão na posição neutra (N), no caso de veículos com câmbio automatizado.

Desengate os bloqueios do diferencial assim que solo firme for tocado.
    `,
  },
  {
    id: 10,
    slug: "simbolo-10",
    title: "Tomada de Força (PTO)",
    description: `
As condições para ligar ou desligar a PTO dependem da aplicação do veículo e, assim, da programação dos sistemas eletrônicos. As condições para ligar ou desligar a PTO podem ser diferentes. Consulte um distribuidor de Serviço sobre as condições para ligar ou desligar a PTO no veículo.
    `,
  },
  {
    id: 11,
    slug: "simbolo-11",
    title: "Indicador de direção à esquerda",
    description: `
Indicador de direção à esquerda, caminhão.
Este indicador de advertência pisca junto com os indicadores de direção do caminhão.
    `,
  },
  {
    id: 12,
    slug: "simbolo-12",
    title: "Indicador de direção à direita",
    description: `
Indicador de direção à direita, caminhão.
Este indicador de advertência pisca junto com os indicadores de direção do caminhão.
    `,
  },
  {
    id: 13,
    slug: "simbolo-13",
    title: "Falha de lâmpada",
    description: `
Falha de lâmpada.
Este indicador de advertência acende quando uma lâmpada falha. Substitua a lâmpada defeituosa imediatamente.
    `,
  },
  {
    id: 14,
    slug: "simbolo-14",
    title: "Farol principal – luz alta",
    description: `
Farol principal luz alta.
Este indicador de advertência acende quando o farol principal é ligado ou quando o pisca do farol principal é acionado no seletor esquerdo da coluna da direção.
    `,
  },
  {
    id: 15,
    slug: "simbolo-15",
    title: "Faróis de neblina dianteiros",
    description: `
Faróis de neblina dianteiros.
Este indicador de advertência acenderá quando os faróis de neblina dianteiros estiverem ligados.
    `,
  },
  {
    id: 16,
    slug: "simbolo-16",
    title: "Advertência do airbag",
    description: `
Advertência do airbag.
    `,
  },
  {
    id: 17,
    slug: "simbolo-17",
    title: "Lembrete do cinto de segurança",
    description: `
Lembrete do cinto de segurança.
    `,
  },
  {
    id: 18,
    slug: "simbolo-18",
    title: "Auxílio de partida em aclives",
    description: `
Auxílio de partida em aclives.
Acione o interruptor no painel de controle para ativar ou desativar o Auxílio de partida em aclives.
Quando o Auxílio de partida em aclives está ativado, a luz indicadora verde do seletor acende.
    `,
  },
  {
    id: 19,
    slug: "simbolo-19",
    title: "ABS do caminhão",
    description: `
ABS do caminhão.
Este indicador de advertência acende quando a ignição é ligada e apaga depois de 3 segundos.
Se este indicador de advertência permanecer aceso, há uma falha no sistema ABS do caminhão.
    `,
  },
  {
    id: 20,
    slug: "simbolo-20",
    title: "ABS do reboque / carreta",
    description: `
Este indicador de advertência acende quando a ignição é ligada e há um reboque com sistema ABS fixado.
O indicador apagará depois de 3 segundos. Se este indicador de advertência permanecer aceso, há uma falha no sistema ABS do reboque.
    `,
  },
  {
    id: 21,
    slug: "simbolo-21",
    title: "Advertência geral da carroçaria",
    description: `
Advertência geral da carroçaria.
    `,
  },
  {
    id: 22,
    slug: "simbolo-22",
    title: "Freio motor ativo",
    description: `
Este indicador de advertência acende quando o freio motor ou o retardador estão ativos.
Este indicador começa a piscar e uma advertência no painel do computador de bordo é exibida no visor principal quando é acionado o pedal do acelerador, anulando a função do freio motor ou retardador.
O indicador também pisca quando o torque dos freios é reduzido como resultado da alta temperatura do motor.
    `,
  },
  {
    id: 23,
    slug: "simbolo-23",
    title: "Freio de estacionamento",
    description: `
Este indicador de advertência acenderá se o freio de estacionamento for aplicado ou quando a pressão no sistema de suprimento de ar for muito baixa para liberar o freio de estacionamento.
    `,
  },
  {
    id: 24,
    slug: "simbolo-24",
    title: "Freios com baixo desempenho",
    description: `
Esta advertência pode apresentar as seguintes descrições:
– Pressão do ar muito baixa;
– Esta advertência é vista quando a pressão em um dos circuitos do freio de serviço fica abaixo dos 5 bar;
– Avaria no sistema de suprimento de ar. Desempenho de freios baixo.
    `,
  },
  {
    id: 25,
    slug: "simbolo-25",
    title: "Faróis de neblina traseiros",
    description: `
Este indicador de advertência acenderá quando os faróis de neblina traseiros estiverem ligados.
    `,
  },
  {
    id: 26,
    slug: "simbolo-26",
    title: "Indicador de avaria",
    description: `
Este indicador de advertência acenderá quando o nível de emissão dos gases de escape estiver acima do limite legal ou em caso de uma advertência falha genérica do motor.
Piscar em qualquer outro padrão indica uma falha.
    `,
  },
  {
    id: 27,
    slug: "simbolo-27",
    title: "Alta temperatura do sistema de escapamento",
    description: `
Este indicador informa ao condutor a alta temperatura do sistema de exaustão; este aviso pode ser visível durante a regeneração estacionária ou durante a regeneração ativa.
Nenhuma ação adicional do motorista é necessária: este símbolo no painel é apenas para informar sobre a alta temperatura dos gases de escape.
    `,
  },
  {
    id: 28,
    slug: "simbolo-28",
    title: "Chassi fora da altura de direção normal",
    description: `
Este indicador de advertência acenderá quando o chassi não estiver na altura normal de condução.
    `,
  },
  {
    id: 29,
    slug: "simbolo-29",
    title: "Pré-aquecedor da admissão do motor",
    description: `
Pré-aquecedor de ar da admissão do motor ativo.
Sistema do pré-aquecedor de ar da admissão do motor.
    `,
  },
  {
    id: 30,
    slug: "simbolo-30",
    title: "Advertência do tacógrafo",
    description: `
Advertência do tacógrafo.
    `,
  },
  {
    id: 31,
    slug: "simbolo-31",
    title: "Travamento da cabine está aberto",
    description: `
O travamento da cabine está aberto.
Verifique se a cabine está totalmente inclinada.
    `,
  },
  {
    id: 32,
    slug: "simbolo-32",
    title: "ARLA32 incorreto / mau funcionamento",
    description: `
Este símbolo de advertência apresenta as seguintes descrições:
– Nível de ARLA32 baixo ou tanque de ARLA32 vazio;
– ARLA32 incorreto;
– Mau funcionamento do sistema de dosagem de ARLA32.
    `,
  },
  {
    id: 33,
    slug: "simbolo-33",
    title: "Advertência EAS – limite de velocidade 20 km/h",
    description: `
Este símbolo de advertência está relacionado ao sistema EAS e pode fornecer as seguintes descrições:
– Limite de velocidade será ativado na próxima vez que o veículo parar;
– Limite de velocidade 20 km/h.
    `,
  },
  {
    id: 34,
    slug: "simbolo-34",
    title: "Nível do líquido de arrefecimento muito baixo",
    description: `
Nível do líquido de arrefecimento muito baixo.
Sensor de nível do líquido de arrefecimento.
    `,
  },
  {
    id: 35,
    slug: "simbolo-35",
    title: "Temperatura do líquido de arrefecimento muito alta",
    description: `
Temperatura do líquido de arrefecimento muito alta.
Cuidado: perigo de queimaduras.
    `,
  },
  {
    id: 36,
    slug: "simbolo-36",
    title: "Advertência do alternador",
    description: `
Advertência do alternador.
Caso o símbolo ainda não suma, não continue dirigindo em hipótese alguma!
Quando o ícone está vermelho, a tensão de carga do alternador está incorreta.
    `,
  },
  {
    id: 37,
    slug: "simbolo-37",
    title: "Nível de óleo do motor baixo",
    description: `
Símbolo de advertência.
Verifique o nível de óleo do motor.
Pressão do óleo muito baixa.
    `,
  },
  {
    id: 38,
    slug: "simbolo-38",
    title: "Advertência do motor",
    description: `
Advertência do motor.
Excesso de rotação do motor.
Motor de partida superaquecido.
Desligamento do motor.
Advertência do pedal do acelerador.
    `,
  },
  {
    id: 39,
    slug: "simbolo-39",
    title: "Advertência da transmissão",
    description: `
Este símbolo de advertência apresenta as seguintes descrições:
– Advertência da transmissão (no caso de um câmbio automatizado, dependendo do mau funcionamento, a transmissão só pode ser mudada manualmente);
– Temperatura da transmissão muito alta (no caso de um câmbio automatizado, a transmissão só pode ser mudada manualmente).
    `,
  },
  {
    id: 40,
    slug: "simbolo-40",
    title: "Controlador central do veículo – Falha VICE",
    description: `
Este símbolo de advertência apresenta as seguintes descrições:
– Controlador central do veículo (falha nos componentes eletrônicos do VICE – Centro de comando do veículo). O VICE coleta informações e aciona funções do veículo;
– Erro de configuração (os números dos chassis programados nos componentes eletrônicos do motor e do imobilizador não coincidem).
    `,
  },
  {
    id: 41,
    slug: "simbolo-41",
    title: "Nível do óleo: alto / baixo (corrigir nível)",
    description: `
Amarela: corrija o nível (nível muito alto) ou adicione 5 litros de óleo (nível do óleo baixo).
    `,
  },
  {
    id: 42,
    slug: "simbolo-42",
    title: "Sobrecarga ou desgaste da embreagem",
    description: `
Este símbolo de advertência apresenta as seguintes descrições:
– Sobrecarga da embreagem;
– Desgaste da embreagem.
    `,
  },
  {
    id: 43,
    slug: "simbolo-43",
    title: "Desgaste na lona do freio",
    description: `
Caminhão com desgaste na lona do freio.
Este símbolo acende se a pastilha de freio de uma ou mais rodas estiver desgastada.
    `,
  },
  {
    id: 44,
    slug: "simbolo-44",
    title: "Advertência vermelha – adicionar óleo",
    description: `
Vermelha, adicione 10 litros de óleo.
    `,
  },
  {
    id: 45,
    slug: "simbolo-45",
    title: "Advertência do sistema ACC",
    description: `
Este símbolo de advertência apresenta as seguintes descrições:
– Advertência do sistema ACC;
– Sistema ACC desligado;
– Sensor do ACC sujo.
    `,
  },
  {
    id: 46,
    slug: "simbolo-46",
    title: "Nível de combustível baixo",
    description: `
Nível de combustível baixo.
Este indicador de advertência acende quando o nível de combustível da reserva é atingido.
A reserva de combustível é aproximadamente 10% da capacidade do tanque.
Reabasteça assim que possível.
    `,
  },
  {
    id: 47,
    slug: "simbolo-47",
    title: "Nível de ARLA32 baixo",
    description: `
Nível de ARLA32 baixo.
Este indicador de advertência acende na cor vermelha quando é atingido um nível crítico de ARLA32.
O sistema começa a emitir advertências no visor principal.
    `,
  },
  {
    id: 48,
    slug: "simbolo-48",
    title: "Filtro de partículas cheio",
    description: `
Filtro de partículas cheio. Serviço necessário.
Iniciar uma regeneração estacionária forçada.
    `,
  },
  {
    id: 49,
    slug: "simbolo-49",
    title: "Drenar pré-filtro de combustível",
    description: `
Filtro de combustível de drenagem.
Drenar o pré-filtro de combustível e o separador de ar.
    `,
  },
  {
    id: 50,
    slug: "simbolo-50",
    title: "Luz de trabalho",
    description: `
Luz de trabalho.
Este indicador de advertência acende quando a luz de trabalho na travessa da cabine ou a iluminação no espaço de carga estiver acesa.
    `,
  },
  {
    id: 51,
    slug: "simbolo-51",
    title: "Aviso geral de perigo",
    description: `
Risco de danos materiais ou funcionais. Perigo.
    `,
  },
];

// (opcional, mas útil para a página dinâmica)
export function getSymbolById(id: string | number): SymbolInfo | undefined {
  const numeric = typeof id === "string" ? Number(id) : id;
  return symbolData.find((s) => s.id === numeric);
}
