export type PainelSymbol = {
  id: string;
  icon: string;
  titulo: string;
  paragrafos: string[];
};

export const painelSymbols: PainelSymbol[] = [
  {
    id: "esc",
    icon: "/simbolos/esc.png",
    titulo: "ESC – Controle de Estabilidade do Veículo",
    paragrafos: [
      "É a sigla para Controle de Estabilidade do Veículo, um sistema de segurança ativa que auxilia o motorista a manter o controle do carro em situações de risco, como derrapagens ou manobras bruscas, reduzindo a potência do motor e/ou acionando os freios das rodas individualmente para restaurar a estabilidade do veículo .",
    ],
  },
  {
    id: "tc",
    icon: "/simbolos/tc.png",
    titulo: "TC – Controle de Tração",
    paragrafos: [
      "É um sistema de segurança veicular que impede que as rodas patinem ao acelerar, especialmente em superfícies escorregadias, mantendo a aderência e a estabilidade do veículo. Ele funciona monitorando a rotação das rodas e, quando detecta patinação, atua nos freios e reduz a potência do motor para restaurar a tração.",
      "Desligue-o (em casos específicos) Em terrenos muito soltos ou irregulares, como cascalho solto ou areia, pode ser necessário desligar o sistema: Em pisos soltos, o movimento da roda patinando um pouco pode ajudar o veículo a encontrar aderência para arrancar. Com o TC ligado, o sistema pode cortar a aceleração ou até \"morrer\" o motor, impedindo o avanço. O sistema deve ser reativado assim que o veículo sair desse tipo de piso.",
    ],
  },
  {
    id: "tc-desligar",
    icon: "/simbolos/tc-desligar.png",
    titulo: "TC – Desligar em casos específicos",
    paragrafos: [
      "Desligue-o (em casos específicos) Em terrenos muito soltos ou irregulares, como cascalho solto ou areia, pode ser necessário desligar o sistema: Em pisos soltos, o movimento da roda patinando um pouco pode ajudar o veículo a encontrar aderência para arrancar. Com o TC ligado, o sistema pode cortar a aceleração ou até \"morrer\" o motor, impedindo o avanço. O sistema deve ser reativado assim que o veículo sair desse tipo de piso.",
    ],
  },
  {
    id: "ldws",
    icon: "/simbolos/ldws.png",
    titulo: "LDWS – Sistema de aviso de saída de faixa",
    paragrafos: [
      "LDWS Sistema de aviso de saída da faixa.",
      "O sistema avisa o motorista quando o veículo sai da faixa despropositadamente. O LDWS usa uma câmera atrás do para-brisa para detectar as faixas da sinalização horizontal. Marcações como faixas brancas ou amarelas contínuas, faixas brancas ou amarelas tracejadas e pontos em relevo. Um sinal acústico (o rádio está funcionando em um volume mais baixo) é emitido no alto-falante frontal esquerdo ou direito quando se sai da faixa atual. O sinal acústico soa como se o veículo estivesse passando por um sonorizador, e é ouvido no lado para o qual o veículo está se movendo.",
    ],
  },
  {
    id: "aebs",
    icon: "/simbolos/aebs.png",
    titulo: "AEBS – Frenagem avançada de emergência",
    paragrafos: [
      "Frenagem avançada de emergência.",
      "É um sistema de segurança que utiliza um radar frontal para detectar veículos à frente e evitar colisões . Ele emite alertas sonoros e visuais ao motorista e, se necessário, pode acionar a frenagem automática para evitar acidentes.",
      "O AEBS é um sistema de assistência e não deve ser usado como substituto para a atenção do motorista ao volante. O motorista deve manter o controle total do veículo e sempre calcular uma distância de condução segura.",
    ],
  },
  {
    id: "aebs-off",
    icon: "/simbolos/aebs-off.png",
    titulo: "AEBS desligado / comando no painel",
    paragrafos: [
      "Se o AEBS for desligado, este indicador de advertência acende no painel de instrumentos.",
      "O AEBS é desativado e ativado usando o comando de ligar/desligar do AEBS no painel de controle.",
    ],
  },
  {
    id: "advertencia-geral",
    icon: "/simbolos/advertencia-geral.png",
    titulo: "Advertência geral do veículo",
    paragrafos: [
      "Advertência geral. Este indicador de advertência acende quando há uma falha em um sistema do veículo. O visor principal mostra qual função do veículo acionou a advertência.",
    ],
  },
  {
    id: "catalisador-scr",
    icon: "/simbolos/catalisador-scr.png",
    titulo: "Catalisador SCR",
    paragrafos: [
      "Catalisador SCR. Quando o nível de contaminação no catalisador SCR está (muito) alto, ou o sistema EAS não está funcionando corretamente, este indicador de advertência acende.",
    ],
  },
  {
    id: "nivel-particulas-alto",
    icon: "/simbolos/nivel-particulas-alto.png",
    titulo: "Nível de partículas muito alto",
    paragrafos: [
      "Nível de partículas muito alto. Iniciar regeneração imediatamente.",
    ],
  },
  {
    id: "bloqueio-diferencial-eixos",
    icon: "/simbolos/bloqueio-diferencial-eixos.png",
    titulo: "Bloqueio do diferencial entre eixos (longitudinal)",
    paragrafos: [
      "Bloqueio do diferencial entre eixos. ( longitudinal ) Quando tiver este estágio do bloqueio do diferencial entre eixos, deve ser acionado primeiro. Acionar o interruptor do bloqueio do diferencial entre eixos: –  Com o veículo parado . – Com o pedal da embreagem pressionado. Cambio manual – Com a transmissão na posição neutra (N) no caso de veículos com um câmbio automatizado. Caso isso não se mostre efetivo, a bloquei do eixo cruzado deve ser engatada também.",
    ],
  },
  {
    id: "bloqueio-diferencial-rodas",
    icon: "/simbolos/bloqueio-diferencial-rodas.png",
    titulo: "Bloqueio do diferencial entre rodas (eixo cruzado)",
    paragrafos: [
      "Bloquei do diferencial entre rodas ( eixo cruzado ) ( transversal ) Acionar o interruptor do bloqueio do eixo cruzado deve ser engatada: –  Com o veículo parado. –  Nunca fazer curva. – Com o pedal da embreagem pressionado. Cambio manual – Com a transmissão na posição neutra (N) no caso de veículos com um câmbio automatizado. Desengate os bloqueios do diferencial assim que solo firme for tocado.",
    ],
  },
  {
    id: "pto",
    icon: "/simbolos/pto.png",
    titulo: "Tomada de força (PTO) ativa",
    paragrafos: [
      "Este indicador de advertência acende quando a PTO está ativa. (  TOMADA DE FORÇA  )",
      "As condições para ligar ou desligar a PTO dependem da aplicação do veículo e, assim, da programação dos sistemas eletrônicos. As condições para ligar ou desligar a PTO podem ser diferentes descrição. Consulte um distribuidor de Serviço sobre as condições para ligar ou desligar a PTO no veículo.",
    ],
  },
  {
    id: "seta-esquerda",
    icon: "/simbolos/seta-esquerda.png",
    titulo: "Indicador de direção à esquerda – caminhão",
    paragrafos: [
      "Indicador de direção à esquerda, caminhão. Este indicador de advertência pisca junto com os indicadores de direção do caminhão.",
    ],
  },
  {
    id: "seta-direita",
    icon: "/simbolos/seta-direita.png",
    titulo: "Indicador de direção à direita – caminhão",
    paragrafos: [
      "Indicador de direção à direita, caminhão. Este indicador de advertência pisca junto com os indicadores de direção do caminhão.",
    ],
  },
  {
    id: "seta-reboque",
    icon: "/simbolos/seta-reboque.png",
    titulo: "Indicador de direção – reboque/semirreboque",
    paragrafos: [
      "Indicador de direção reboque Em uma combinação de caminhão e reboque/semirreboque, este indicador de advertência pisca junto com os indicadores de direção do reboque/semirreboque.",
    ],
  },
  {
    id: "falha-lampada",
    icon: "/simbolos/falha-lampada.png",
    titulo: "Falha de lâmpada",
    paragrafos: [
      "Falha de lâmpada Este indicador de advertência acende quando uma lâmpada falha. Substitua a lâmpada defeituosa imediatamente.",
    ],
  },
  {
    id: "farol-alto",
    icon: "/simbolos/farol-alto.png",
    titulo: "Farol principal – luz alta",
    paragrafos: [
      "Farol principal luz alta Este indicador de advertência acende quando o farol principal é ligado ou quando o pisca do farol principal é acionado no seletor esquerdo da coluna da direção.",
    ],
  },
  {
    id: "farol-neblina-dianteiro",
    icon: "/simbolos/farol-neblina-dianteiro.png",
    titulo: "Faróis de neblina dianteiros",
    paragrafos: [
      "Fa róis de neblina dianteiros Este indicador de advertência acenderá quando os faróis de neblina dianteiros estiverem ligados.",
    ],
  },
  {
    id: "airbag",
    icon: "/simbolos/airbag.png",
    titulo: "Advertência do airbag",
    paragrafos: [
      "Advert ência do airbag",
    ],
  },
  {
    id: "cinto-seguranca",
    icon: "/simbolos/cinto-seguranca.png",
    titulo: "Lembrete do cinto de segurança",
    paragrafos: [
      "Lembrete do cento de segurança",
    ],
  },
  {
    id: "luz-trabalho",
    icon: "/simbolos/luz-trabalho.png",
    titulo: "Luz de trabalho / iluminação espaço de carga",
    paragrafos: [
      "Luz de trabalho Este indicador de advertência acende quando a luz de trabalho na travessa da cabine ou a iluminação no espaço de carga estiver acesa.",
    ],
  },
  {
    id: "auxilio-partida-aclive",
    icon: "/simbolos/auxilio-partida-aclive.png",
    titulo: "Auxílio de partida em aclives",
    paragrafos: [
      "Auxilio  de partida em aclives. Acione o interruptor no painel de controle para ativar ou desativar o Auxílio de partida em aclives. Quando o Auxílio de partida em aclives está ativado, a luz indicadora verde do seletor acende.",
    ],
  },
  {
    id: "abs-caminhao",
    icon: "/simbolos/abs-caminhao.png",
    titulo: "ABS do caminhão",
    paragrafos: [
      "ABS do caminhão Este indicador de advertência acende quando a ignição é ligada e apaga depois de 3 segundos. Se este indicador de advertência permanecer aceso, há uma falha no sistema ABS do caminhão.",
    ],
  },
  {
    id: "abs-reboque",
    icon: "/simbolos/abs-reboque.png",
    titulo: "ABS do reboque / carreta",
    paragrafos: [
      "ABS do reboque.( carreta ) Este indicador de advertência acende quando a ignição é ligada e há um reboque com sistema ABS fixado. O indicador apagará depois de 3 segundos. Se este indicador de advertência permanecer aceso, há uma falha no sistema ABS do reboque.",
    ],
  },
  {
    id: "carroceria-geral",
    icon: "/simbolos/carroceria-geral.png",
    titulo: "Advertência geral da carroçaria",
    paragrafos: [
      "Advertência geral da carroçaria",
    ],
  },
  {
    id: "freio-motor",
    icon: "/simbolos/freio-motor.png",
    titulo: "Freio motor ativo / retardador",
    paragrafos: [
      "Freio motor ativo. Este indicador de advertência acende quando o freio motor ou o retardador estão ativos. Este indicador começa a piscar e uma advertência no painel do computador de bordo é exibida no visor principal quando é acionado o pedal do acelerador, anulando a função do freio motor ou retardador. O indicador também pisca quando o torque dos freios é reduzido como resultado da alta temperatura do motor.",
    ],
  },
  {
    id: "freio-estacionamento",
    icon: "/simbolos/freio-estacionamento.png",
    titulo: "Freio de estacionamento",
    paragrafos: [
      "Freio de estacionamento. Este indicador de advertência acenderá se o freio de estacionamento for aplicado ou quando a pressão no sistema de suprimento de ar for muito baixa para liberar o freio de estacionamento.",
    ],
  },
  {
    id: "freios-baixo-desempenho",
    icon: "/simbolos/freios-baixo-desempenho.png",
    titulo: "Freios com baixo desempenho / pressão baixa",
    paragrafos: [
      "Freios com baixo desempenho. Esta advertência pode apresentar as seguintes descrições: Pressão do ar muito baixa. Esta advertência é vista quando a pressão em um dos circuitos do freio de serviço fica abaixo dos 5 bar. Avaria no sistema de suprimento de ar. Desempenho de freios baixo.",
    ],
  },
  {
    id: "farol-neblina-traseiro",
    icon: "/simbolos/farol-neblina-traseiro.png",
    titulo: "Faróis de neblina traseiros",
    paragrafos: [
      "Faróis de neblina traseiros. Este indicador de advertência acenderá quando os faróis de neblina traseiros estiverem ligados.",
    ],
  },
  {
    id: "indicador-avaria-emissoes",
    icon: "/simbolos/indicador-avaria-emissoes.png",
    titulo: "Indicador de avaria – emissões / motor",
    paragrafos: [
      "Indicador de avaria.",
      "Este indicador de advertência acenderá quando o nível de emissão dos gases de escape estiver acima do limite legal ou em caso de uma advertência falha genérica do motor.   Piscar em qualquer outro padrão indica uma falha.",
    ],
  },
  {
    id: "alta-temp-escapamento",
    icon: "/simbolos/alta-temp-escapamento.png",
    titulo: "Alta temperatura do sistema de escapamento",
    paragrafos: [
      "Alta temperatura do sistema escapamento. Este indicador informa ao condutor a alta temperatura do sistema de exaustão, este aviso pode ser visível durante a regeneração estacionaria, ou durante a regeneração ativa. Nenhuma ação adicional do motorista é necessária este símbolo no painel é apenas para informar sobre a alta temperatura dos gases de escape.",
    ],
  },
  {
    id: "altura-chassi",
    icon: "/simbolos/altura-chassi.png",
    titulo: "Chassi fora da altura de direção normal",
    paragrafos: [
      "Chassi fora da altura de direção normal Este indicador de advertência acenderá quando o chassi não estiver na altura normal de condução",
    ],
  },
  {
    id: "pre-aquecedor-admissao",
    icon: "/simbolos/pre-aquecedor-admissao.png",
    titulo: "Pré-aquecedor de ar da admissão do motor",
    paragrafos: [
      "Pré-aquecedor de ar da admissão do motor ativo. Sistema do pré-aquecedor de ar da admissão do motor",
    ],
  },
  {
    id: "modo-silencioso",
    icon: "/simbolos/modo-silencioso.png",
    titulo: "Modo caminhão silencioso",
    paragrafos: [
      "Modo caminhão silencioso Este indicador de advertência acende quando o modo silencioso do caminhão está ativo.",
    ],
  },
  {
    id: "tacografo",
    icon: "/simbolos/tacografo.png",
    titulo: "Advertência do tacógrafo",
    paragrafos: [
      "Advertência do tacógrafo",
    ],
  },
  {
    id: "travamento-cabine",
    icon: "/simbolos/travamento-cabine.png",
    titulo: "Travamento da cabine aberto",
    paragrafos: [
      "O travamento da cabine está aberto Verifique se a cabine está totalmente inclinada.",
    ],
  },
  {
    id: "arla32-geral",
    icon: "/simbolos/arla32-geral.png",
    titulo: "Sistema ARLA32 – advertência geral",
    paragrafos: [
      "Este símbolo de advertência apresenta as seguintes descrições: Nível de ARLA32 baixo ou tanque de ARLA32 vazio. ARLA32 incorreto. Mau funcionamento do sistema de dosagem de ARLA32",
    ],
  },
  {
    id: "eas-limite-velocidade",
    icon: "/simbolos/eas-limite-velocidade.png",
    titulo: "Sistema EAS – limite de velocidade",
    paragrafos: [
      "Este símbolo de advertência está relacionado ao sistema EAS e pode fornecer as seguintes descrições: Limite de velocidade  será ativado na próxima vez que o veículo parar. Limite de velocidade 20 km/h.",
    ],
  },
  {
    id: "nivel-liquido-arref",
    icon: "/simbolos/nivel-liquido-arref.png",
    titulo: "Nível do líquido de arrefecimento baixo",
    paragrafos: [
      "Nível do líquido de arrefecimento muito baixo.  Sensor de nível do líquido de arrefecimento.",
    ],
  },
  {
    id: "temp-liquido-arref",
    icon: "/simbolos/temp-liquido-arref.png",
    titulo: "Temperatura do líquido de arrefecimento alta",
    paragrafos: [
      "Temperatura do líquido de arrefecimento muito alta Cuidado perigo de queimaduras.",
    ],
  },
  {
    id: "alternador",
    icon: "/simbolos/alternador.png",
    titulo: "Advertência do alternador",
    paragrafos: [
      "Advertência do alternador. Caso o símbolo ainda não suma, não continue dirigindo em hipótese alguma! Quando o ícone está vermelho, a tensão de carga do alternador está incorreta.",
    ],
  },
  {
    id: "pressao-oleo-motor",
    icon: "/simbolos/pressao-oleo-motor.png",
    titulo: "Pressão / nível de óleo do motor",
    paragrafos: [
      "O símbolo de advertência. Verifique o  nível  de óleo do motor Pressão do óleo muito baixa",
      "Completando o óleo do motor CUIDADO: Um nível do óleo incorreto pode causar danos graves ao motor. – Verifique se o veículo está parado em uma superfície plana e reta quando o nível do óleo é conferido.",
    ],
  },
  {
    id: "motor-geral",
    icon: "/simbolos/motor-geral.png",
    titulo: "Advertência geral do motor",
    paragrafos: [
      "Advertência do motor . Excesso de rotação do motor. Motor de partida superaquecido . Desligamento do motor. Advertência do pedal do acelerador.",
    ],
  },
  {
    id: "transmissao-geral",
    icon: "/simbolos/transmissao-geral.png",
    titulo: "Advertência da transmissão",
    paragrafos: [
      "Este símbolo de advertência apresenta as seguintes descrições: Advertência da transmissão  (No caso de um câmbio automatizado, dependendo do mau funcionamento, a transmissão só pode ser mudada manualmente). Temperatura da transmissão muito alta ( No caso de um câmbio automatizado, a transmissão só pode ser mudada manualmente).",
    ],
  },
  {
    id: "controlador-central-veiculo",
    icon: "/simbolos/controlador-central-veiculo.png",
    titulo: "Controlador central do veículo (VICE)",
    paragrafos: [
      "Este símbolo de advertência apresenta as seguintes descrições: Controlador central do veículo ( Falha nos componentes eletrônicos do VICE (Centro de comando do veículo). O VICE coleta informações e aciona funções do veículo. Erro de configuração ( Os números dos chassis programados nos componentes eletrônicos do motor e do imobilizador não coincidem).",
    ],
  },
  {
    id: "nivel-oleo-detalhado",
    icon: "/simbolos/nivel-oleo-detalhado.png",
    titulo: "Nível do óleo do motor – muito baixo / indicador de nível",
    paragrafos: [
      "Nível do óleo muito baixo. Sensor de nível do óleo. Nível do óleo baixo ou nível do óleo alto. Avaria do sensor de controle de nível do óleo. Nível do óleo baixo ou nível do óleo alto. O símbolo de advertência permanece ativo durante 40 segundos.  Verifique o nível de óleo do motor Pressão do óleo muito baixa",
      "Amarela, corrija o nível (nível muito alto) ou adicione 5 litros de óleo (nível do óleo baixo)",
      "Vermelha, adicione 10 litros de óleo",
    ],
  },
  {
    id: "engrenagem-alta",
    icon: "/simbolos/engrenagem-alta.png",
    titulo: "Engrenagem de transmissão muito alta",
    paragrafos: [
      "Advertência da engrenagem de transmissão muito alta. A engrenagem de transmissão atual é muito alta. Selecione a primeira marcha de transmissão.",
    ],
  },
  {
    id: "embreagem",
    icon: "/simbolos/embreagem.png",
    titulo: "Sobrecarga / desgaste da embreagem",
    paragrafos: [
      "Este símbolo de advertência apresenta as seguintes descrições: Sobrecarga da embreagem. Desgaste da embreagem.",
    ],
  },
  {
    id: "sistema-alarme",
    icon: "/simbolos/sistema-alarme.png",
    titulo: "Advertência do sistema de alarme",
    paragrafos: [
      "Advertência do sistema de alarme",
    ],
  },
  {
    id: "desgaste-freio",
    icon: "/simbolos/desgaste-freio.png",
    titulo: "Caminhão com desgaste na lona/pastilha de freio",
    paragrafos: [
      "Caminhão com desgaste na lona do freio Este símbolo acende se a pastilha de freio de uma ou mais rodas estiver desgastada.",
    ],
  },
  {
    id: "filtro-combustivel",
    icon: "/simbolos/filtro-combustivel.png",
    titulo: "Filtro de combustível – drenagem",
    paragrafos: [
      "Filtro de combustível de drenagem Drenar o pré-filtro de combustível e o separador de ar",
    ],
  },
  {
    id: "acc",
    icon: "/simbolos/acc.png",
    titulo: "Sistema ACC – controle de cruzeiro adaptativo",
    paragrafos: [
      "Este símbolo de advertência apresenta as seguintes descrições~: Advertência do sistema ACC. Sistema ACC desligado. Sensor do ACC sujo.",
    ],
  },
  {
    id: "combustivel-baixo",
    icon: "/simbolos/combustivel-baixo.png",
    titulo: "Nível de combustível baixo",
    paragrafos: [
      "Nível de combustível baixo Este indicador de advertência acende quando o nível de combustível da reserva é atingido. A reserva de combustível é aproximadamente 10% da capacidade do tanque.  Reabasteça assim que possível.",
    ],
  },
  {
    id: "arla32-baixo",
    icon: "/simbolos/arla32-baixo.png",
    titulo: "Nível de ARLA32 baixo",
    paragrafos: [
      "Nível de ARLA32 baixo Este indicador de advertência acende na cor vermelha quando é atingido um nível crítico de ARLA32. O sistema começa a emitir advertências no visor principal.",
    ],
  },
  {
    id: "filtro-particulas",
    icon: "/simbolos/filtro-particulas.png",
    titulo: "Filtro de partículas cheio",
    paragrafos: [
      "Filtro de partículas cheio. Serviço necessário. Iniciar uma regeneração estacionária forçada",
    ],
  },
];
