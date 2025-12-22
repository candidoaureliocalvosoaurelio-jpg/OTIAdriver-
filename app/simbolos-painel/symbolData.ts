// app/simbolos-painel/symbolData.ts

export type SymbolSeverity = "info" | "warning" | "danger";

export type SymbolInfo = {
  id: number;
  slug: string; // ex: "simbolo-01"
  title: string;
  description: string;

  // Próximo nível (opcional, mas recomendado)
  category?: string; // ex: "Segurança", "Motor", "Freios", "Iluminação", etc.
  severity?: SymbolSeverity; // info | warning | danger
  color?: "verde" | "azul" | "branco" | "amarelo" | "laranja" | "vermelho";
  action?: string; // orientação prática (o que fazer)

  // ✅ Próximo nível (completando a estrutura)
  causes?: string[]; // causas comuns
  risks?: string[]; // riscos ao ignorar
};

export const symbolData: SymbolInfo[] = [
  {
    id: 1,
    slug: "simbolo-01",
    title: "Controle de Estabilidade do Veículo",
    category: "Segurança",
    severity: "warning",
    color: "amarelo",
    action:
      "Dirija com cautela. Se a luz permanecer acesa com falhas de estabilidade, procure uma oficina.",
    causes: [
      "Sensor de roda (ABS) com leitura irregular",
      "Baixa tensão/bateria fraca afetando módulos eletrônicos",
      "Falha de comunicação no módulo ABS/ESC (conectores/chicote)",
      "Pneus com pressão incorreta ou desgaste irregular",
    ],
    risks: [
      "Perda de estabilidade em curvas/manobras",
      "Aumento do risco em pista molhada/escorregadia",
      "Maior distância de parada em situações críticas (dependendo da falha)",
    ],
    description:
      "É a sigla para Controle de Estabilidade do Veículo, um sistema de segurança ativa que auxilia o motorista a manter o controle do veículo em situações de risco, como derrapagens ou manobras bruscas, reduzindo a potência do motor e/ou acionando os freios das rodas individualmente para restaurar a estabilidade do veículo.",
  },
  {
    id: 2,
    slug: "simbolo-02",
    title: "ASR – Advertência do Painel de Instrumentos piscando",
    category: "Tração",
    severity: "info",
    color: "amarelo",
    action:
      "Reduza aceleração e ajuste a condução. Se persistir sem motivo, verifique o sistema em oficina.",
    causes: [
      "ASR atuando por baixa aderência (chuva, areia, óleo na pista)",
      "Pneus desgastados ou pressão inadequada",
      "Sensor de roda com leitura intermitente",
      "Diferença de diâmetro entre pneus no mesmo eixo",
    ],
    risks: [
      "Patinagem ao acelerar e perda de tração",
      "Maior desgaste de pneus",
      "Estabilidade reduzida em pisos escorregadios",
    ],
    description:
      "É um sistema de segurança veicular que impede que as rodas patinem ao acelerar, especialmente em superfícies escorregadias, mantendo a aderência e a estabilidade do veículo. Ele funciona monitorando a rotação das rodas e, quando detecta patinação, atua nos freios e reduz a potência do motor para restaurar a tração.",
  },

  // ✅ CORREÇÃO AQUI: id 3 = LDWS
  {
    id: 3,
    slug: "simbolo-03",
    title: "LDWS – Sistema de aviso de saída da faixa",
    category: "Segurança",
    severity: "info",
    color: "amarelo",
    action:
      "Mantenha-se na faixa e sinalize manobras. Se o sistema alertar incorretamente, verifique calibração/sensores.",
    causes: [
      "Saída de faixa sem acionamento de seta",
      "Faixas apagadas/irregulares, pista em obras",
      "Câmera/sensor sujo, desalinhado ou obstruído",
      "Condições de chuva/neblina reduzindo leitura",
    ],
    risks: [
      "Mudança involuntária de faixa e colisão lateral",
      "Saída de pista por distração/fadiga",
      "Falsa sensação de segurança (não substitui atenção do motorista)",
    ],
    description:
      "O sistema avisa o motorista quando o veículo sai da faixa despropositadamente. O LDWS usa uma câmera atrás do para-brisa para detectar as faixas da sinalização horizontal. Um sinal acústico é emitido no alto-falante frontal esquerdo ou direito quando se sai da faixa atual, soando como se o veículo estivesse passando por um sonorizador, no lado para o qual o veículo está se movendo.",
  },

  // ✅ CORREÇÃO AQUI: id 4 = ASR desativado
  {
    id: 4,
    slug: "simbolo-04",
    title: "ASR – Desativado",
    category: "Tração",
    severity: "warning",
    color: "amarelo",
    action:
      "Use desativação apenas quando necessário (solo muito solto). Reative assim que voltar ao asfalto/solo firme.",
    causes: [
      "Desativação manual pelo motorista (atolamento/solo solto)",
      "Modo específico de operação do veículo",
      "Falha no sistema que forçou desativação",
    ],
    risks: [
      "Maior chance de patinagem e perda de controle ao acelerar",
      "Desgaste mais rápido de pneus em baixa aderência",
      "Aumento do risco em pista molhada/escorregadia",
    ],
    description:
      "Em terrenos muito soltos ou irregulares (cascalho solto, areia), pode ser necessário desligar o sistema: em pisos soltos, a patinação controlada pode ajudar o veículo a encontrar aderência para arrancar. Com o ASR/TC ligado, o sistema pode cortar a aceleração e impedir o avanço. Reative o sistema assim que sair desse tipo de piso.",
  },

  {
    id: 5,
    slug: "simbolo-05",
    title: "AEBS – Desativado",
    category: "Segurança",
    severity: "warning",
    color: "amarelo",
    action:
      "Dirija com atenção redobrada e distância maior. Se não foi você que desativou, verifique em oficina.",
    causes: [
      "Desativação manual do sistema",
      "Radar/câmera frontal sujo, desalinhado ou obstruído",
      "Falha de sensor/radar ou comunicação do sistema",
      "Condições severas (lama/chuva intensa) afetando leitura",
    ],
    risks: [
      "Perda da frenagem automática de emergência",
      "Aumento do risco de colisão traseira",
      "Menor suporte em tráfego intenso",
    ],
    description:
      "É um sistema de segurança que utiliza um radar frontal para detectar veículos à frente e reduzir o risco de colisões. Emite alertas sonoros e visuais ao motorista e, se necessário, pode acionar a frenagem automática. É assistência: não substitui atenção do motorista.",
  },
  {
    id: 6,
    slug: "simbolo-06",
    title: "Advertência geral",
    category: "Sistema",
    severity: "warning",
    color: "amarelo",
    action:
      "Verifique a mensagem no painel/central. Se a falha persistir, faça diagnóstico em oficina.",
    causes: [
      "Falha registrada em algum módulo do veículo",
      "Sensor com leitura fora do padrão",
      "Conector/chicote com mau contato",
      "Oscilação elétrica momentânea (voltagem baixa)",
    ],
    risks: [
      "Agravar falhas por continuar rodando sem diagnóstico",
      "Redução de desempenho/funcionalidade dependendo do sistema",
    ],
    description:
      "Advertência geral. Este indicador acende quando há uma falha em um sistema do veículo. O visor principal mostra qual função do veículo acionou a advertência.",
  },
  {
    id: 7,
    slug: "simbolo-07",
    title: "Catalisador SCR",
    category: "Emissões",
    severity: "warning",
    color: "amarelo",
    action:
      "Siga a recomendação do painel (regeneração/serviço). Se persistir, verifique ARLA32 e sistema EAS.",
    causes: [
      "ARLA32 fora de especificação/contaminado",
      "Falha na dosagem (bomba, bico injetor, aquecimento)",
      "Sensor NOx/temperatura com defeito",
      "Falha no sistema EAS/SCR por uso prolongado sem correção",
    ],
    risks: [
      "Limitação de potência/velocidade (modo de proteção)",
      "Aumento de emissões e não conformidade",
      "Danos ao pós-tratamento se ignorado",
    ],
    description:
      "Quando o nível de contaminação no catalisador SCR está alto, ou o sistema EAS não está funcionando corretamente, este indicador acende. Se indicado, iniciar regeneração conforme orientação do fabricante.",
  },
  {
    id: 8,
    slug: "simbolo-08",
    title: "Bloqueio do diferencial entre eixos (longitudinal)",
    category: "Tração",
    severity: "warning",
    color: "amarelo",
    action:
      "Acione com o veículo parado e em condições seguras. Desative ao retornar ao solo firme.",
    causes: [
      "Engate acionado em condição de baixa aderência",
      "Seleção manual do bloqueio pelo motorista",
    ],
    risks: [
      "Danos ao trem de força se usado em piso firme",
      "Perda de dirigibilidade em manobras/curvas (uso indevido)",
      "Desgaste acelerado de componentes",
    ],
    description:
      "Bloqueio do diferencial entre eixos (longitudinal). Deve ser acionado primeiro. Acionar com o veículo parado; com embreagem pressionada (manual) ou transmissão em neutro (N) no automatizado. Se não for efetivo, acione também o bloqueio do eixo cruzado. Desengate assim que tocar solo firme.",
  },
  {
    id: 9,
    slug: "simbolo-09",
    title: "Bloqueio do diferencial entre rodas (eixo cruzado)",
    category: "Tração",
    severity: "warning",
    color: "amarelo",
    action:
      "Use somente quando necessário e nunca em curvas. Desative assim que voltar ao solo firme.",
    causes: [
      "Engate acionado em condição extrema de baixa aderência",
      "Seleção manual do bloqueio pelo motorista",
    ],
    risks: [
      "Quebra/dano do diferencial se usado em curvas",
      "Danos ao trem de força em piso firme",
      "Desgaste acelerado de componentes",
    ],
    description:
      "Bloqueio do diferencial entre rodas (transversal). Acionar com o veículo parado; nunca fazer curva; com embreagem pressionada (manual) ou transmissão em neutro (N) no automatizado. Desengate assim que solo firme for tocado.",
  },
  {
    id: 10,
    slug: "simbolo-10",
    title: "Tomada de Força (PTO)",
    category: "Implemento",
    severity: "info",
    color: "branco",
    action:
      "Acione/desligue conforme procedimento do implemento. Verifique condições no manual/programação.",
    causes: [
      "PTO ligada para operar implemento (bomba, basculante, etc.)",
      "Condição de segurança permitiu engate conforme programação",
    ],
    risks: [
      "Danos ao implemento/transmissão se engatar fora das condições",
      "Risco operacional ao trabalhar com implementos",
    ],
    description:
      "As condições para ligar ou desligar a PTO dependem da aplicação do veículo e da programação dos sistemas eletrônicos. Consulte o manual e/ou o serviço autorizado para as condições específicas do seu veículo.",
  },
  {
    id: 11,
    slug: "simbolo-11",
    title: "Indicador de direção à esquerda",
    category: "Iluminação",
    severity: "info",
    color: "verde",
    action: "Indica seta esquerda ativa.",
    causes: ["Comando de seta esquerda acionado"],
    risks: ["Sem risco direto. Se não piscar, verifique lâmpadas/fusíveis."],
    description:
      "Este indicador pisca junto com os indicadores de direção do caminhão.",
  },
  {
    id: 12,
    slug: "simbolo-12",
    title: "Indicador de direção à direita",
    category: "Iluminação",
    severity: "info",
    color: "verde",
    action: "Indica seta direita ativa.",
    causes: ["Comando de seta direita acionado"],
    risks: ["Sem risco direto. Se não piscar, verifique lâmpadas/fusíveis."],
    description:
      "Este indicador pisca junto com os indicadores de direção do caminhão.",
  },
  {
    id: 13,
    slug: "simbolo-13",
    title: "Falha de lâmpada",
    category: "Iluminação",
    severity: "warning",
    color: "amarelo",
    action: "Verifique e substitua a lâmpada defeituosa o quanto antes.",
    causes: ["Lâmpada queimada", "Mau contato/conector", "Fusível/relé com falha"],
    risks: ["Baixa visibilidade", "Risco de colisão", "Infração por iluminação irregular"],
    description:
      "Este indicador acende quando uma lâmpada falha. Substitua a lâmpada defeituosa imediatamente.",
  },
  {
    id: 14,
    slug: "simbolo-14",
    title: "Farol principal – luz alta",
    category: "Iluminação",
    severity: "info",
    color: "azul",
    action: "Indica farol alto ligado.",
    causes: ["Farol alto acionado", "Pisca do farol acionado"],
    risks: ["Ofuscamento de outros condutores se usado indevidamente"],
    description:
      "Este indicador acende quando o farol principal (luz alta) é ligado ou quando o pisca do farol é acionado.",
  },
  {
    id: 15,
    slug: "simbolo-15",
    title: "Faróis de neblina dianteiros",
    category: "Iluminação",
    severity: "info",
    color: "verde",
    action: "Use em neblina/chuva intensa. Desligue em condições normais.",
    causes: ["Faróis de neblina dianteiros ligados"],
    risks: ["Ofuscamento/reflexo em pista molhada se usado sem necessidade"],
    description:
      "Este indicador acende quando os faróis de neblina dianteiros estiverem ligados.",
  },
  {
    id: 16,
    slug: "simbolo-16",
    title: "Advertência do airbag",
    category: "Segurança",
    severity: "danger",
    color: "vermelho",
    action: "Procure diagnóstico. Pode indicar falha no sistema de airbag.",
    causes: [
      "Falha no módulo SRS/airbag",
      "Mau contato em conectores sob banco/coluna",
      "Baixa tensão elétrica",
      "Defeito em sensor do sistema",
    ],
    risks: ["Airbag pode não acionar em colisão", "Maior risco de lesão grave"],
    description: "Advertência do airbag.",
  },
  {
    id: 17,
    slug: "simbolo-17",
    title: "Lembrete do cinto de segurança",
    category: "Segurança",
    severity: "warning",
    color: "vermelho",
    action: "Afivele o cinto de segurança.",
    causes: ["Cinto não afivelado", "Sensor do cinto detecta não uso"],
    risks: ["Risco elevado de lesões em colisão"],
    description: "Lembrete do cinto de segurança.",
  },
  {
    id: 18,
    slug: "simbolo-18",
    title: "Auxílio de partida em aclives",
    category: "Assistência",
    severity: "info",
    color: "verde",
    action: "Função ativa. Útil para evitar recuo em rampas.",
    causes: ["Sistema ativado", "Condição de rampa detectada"],
    risks: ["Sem risco direto. Se falhar, pode haver recuo em rampas."],
    description:
      "Acione o interruptor no painel para ativar ou desativar o Auxílio de partida em aclives. Quando está ativado, a luz indicadora verde do seletor acende.",
  },
  {
    id: 19,
    slug: "simbolo-19",
    title: "ABS do caminhão",
    category: "Freios",
    severity: "danger",
    color: "amarelo",
    action:
      "Se permanecer aceso após a partida, há falha no ABS. Dirija com cautela e procure oficina.",
    causes: [
      "Sensor de roda com falha",
      "Anel reluctor danificado/sujo",
      "Módulo ABS com falha",
      "Chicote/conector com mau contato",
    ],
    risks: [
      "Rodas podem travar em frenagens fortes",
      "Perda de estabilidade e aumento da distância de parada",
      "Maior risco em piso molhado",
    ],
    description:
      "Este indicador acende quando a ignição é ligada e apaga depois de alguns segundos. Se permanecer aceso, há falha no sistema ABS do caminhão.",
  },
  {
    id: 20,
    slug: "simbolo-20",
    title: "ABS do reboque / carreta",
    category: "Freios",
    severity: "danger",
    color: "amarelo",
    action:
      "Se permanecer aceso, pode haver falha no ABS do reboque. Verifique conexões e procure oficina.",
    causes: [
      "Conector elétrico do reboque com mau contato",
      "Sensor de roda do reboque com falha",
      "Módulo ABS do reboque com falha",
    ],
    risks: [
      "Travamento de rodas do reboque em frenagens",
      "Instabilidade (efeito chicote)",
      "Aumento da distância de parada",
    ],
    description:
      "Este indicador acende quando há um reboque com ABS conectado. Apaga após alguns segundos. Se permanecer aceso, há falha no sistema ABS do reboque.",
  },
  {
    id: 21,
    slug: "simbolo-21",
    title: "Advertência geral da carroçaria",
    category: "Carroçaria",
    severity: "warning",
    color: "amarelo",
    action: "Verifique mensagem no painel e o sistema/implemento associado.",
    causes: [
      "Falha em sensor/atuador do implemento",
      "Sistema da carroçaria reportando erro",
      "Mau contato em chicote/conector",
    ],
    risks: ["Funcionamento incorreto do implemento", "Risco operacional conforme aplicação"],
    description: "Advertência geral da carroçaria.",
  },
  {
    id: 22,
    slug: "simbolo-22",
    title: "Freio motor ativo",
    category: "Freios",
    severity: "info",
    color: "verde",
    action: "Indica freio motor/retarder ativo.",
    causes: ["Freio motor/retarder acionado", "Estratégia de desaceleração ativa"],
    risks: ["Sem risco direto. Atenção em baixa aderência."],
    description:
      "Este indicador acende quando o freio motor ou o retardador estão ativos. Pode piscar quando o acelerador anula a função ou quando há redução de torque por alta temperatura do motor.",
  },
  {
    id: 23,
    slug: "simbolo-23",
    title: "Freio de estacionamento",
    category: "Freios",
    severity: "warning",
    color: "vermelho",
    action:
      "Confirme se o freio está aplicado. Se não estiver, verifique pressão do ar/sistema.",
    causes: [
      "Freio de estacionamento aplicado",
      "Pressão do ar insuficiente para liberar",
      "Falha em válvula/atuador do sistema",
    ],
    risks: ["Veículo pode se mover se o freio não segurar", "Desgaste/aquecimento se rodar com freio aplicado"],
    description:
      "Este indicador acende se o freio de estacionamento for aplicado ou quando a pressão no sistema de ar estiver muito baixa para liberar o freio de estacionamento.",
  },
  {
    id: 24,
    slug: "simbolo-24",
    title: "Freios com baixo desempenho",
    category: "Freios",
    severity: "danger",
    color: "vermelho",
    action:
      "Pare em local seguro. Verifique pressão de ar e sistema de freios. Não continue se persistir.",
    causes: [
      "Pressão do ar baixa em um circuito",
      "Falha no compressor/secador de ar",
      "Vazamento no sistema pneumático",
      "Falha em válvulas ou sensores de pressão",
    ],
    risks: ["Perda de capacidade de frenagem", "Aumento grande da distância de parada", "Risco de acidente grave"],
    description:
      "Pode indicar: pressão do ar muito baixa (circuito abaixo de ~5 bar) ou avaria no sistema de suprimento de ar. O desempenho de freios pode estar reduzido.",
  },
  {
    id: 25,
    slug: "simbolo-25",
    title: "Faróis de neblina traseiros",
    category: "Iluminação",
    severity: "info",
    color: "amarelo",
    action: "Use somente em baixa visibilidade. Desligue em condições normais.",
    causes: ["Faróis de neblina traseiros ligados"],
    risks: ["Ofuscamento do veículo atrás se usado sem necessidade"],
    description:
      "Este indicador acende quando os faróis de neblina traseiros estiverem ligados.",
  },
  {
    id: 26,
    slug: "simbolo-26",
    title: "Indicador de avaria",
    category: "Motor/Emissões",
    severity: "warning",
    color: "amarelo",
    action:
      "Reduza esforço do motor e procure diagnóstico. Se piscar, trate como mais crítico.",
    causes: [
      "Falha de motor/emissões registrada (OBD)",
      "Sensor com leitura fora do padrão",
      "Falha de ignição/injeção (dependendo do motor)",
      "Sistema de pós-tratamento com falha",
    ],
    risks: ["Aumento de consumo/emissões", "Perda de potência", "Evolução para falha crítica se ignorado"],
    description:
      "Este indicador pode acender quando emissões estão acima do limite legal ou por advertência genérica do motor. Piscar em outro padrão pode indicar falha.",
  },
  {
    id: 27,
    slug: "simbolo-27",
    title: "Alta temperatura do sistema de escapamento",
    category: "Emissões",
    severity: "warning",
    color: "amarelo",
    action:
      "Evite estacionar sobre material inflamável durante regeneração. Siga orientações do painel.",
    causes: [
      "Regeneração do filtro de partículas em andamento",
      "Alta carga/temperatura nos gases de escape",
      "Condições de operação elevando temperatura",
    ],
    risks: [
      "Risco de incêndio ao estacionar sobre material inflamável",
      "Danos em componentes próximos ao escapamento se houver falha",
    ],
    description:
      "Informa alta temperatura do sistema de exaustão, comum durante regeneração estacionária/ativa. Geralmente é informativo, mas exige atenção ao local de parada.",
  },
  {
    id: 28,
    slug: "simbolo-28",
    title: "Chassi fora da altura de direção normal",
    category: "Suspensão",
    severity: "warning",
    color: "amarelo",
    action:
      "Ajuste a altura para modo de condução normal antes de seguir viagem.",
    causes: [
      "Suspensão a ar em modo elevado/baixo",
      "Comando de altura acionado",
      "Falha em sensor de altura ou válvula",
    ],
    risks: ["Instabilidade/dirigibilidade alterada", "Desgaste irregular de pneus", "Risco de dano em obstáculos/irregularidades"],
    description:
      "Este indicador acende quando o chassi não estiver na altura normal de condução.",
  },
  {
    id: 29,
    slug: "simbolo-29",
    title: "Pré-aquecedor da admissão do motor",
    category: "Motor",
    severity: "info",
    color: "amarelo",
    action: "Aguarde o ciclo de pré-aquecimento quando aplicável.",
    causes: ["Pré-aquecimento ativo (partida a frio)", "Estratégia do motor ativada por temperatura ambiente"],
    risks: ["Sem risco direto. Se persistir sem motivo, pode indicar falha do sistema."],
    description:
      "Pré-aquecedor de ar da admissão do motor ativo. Função auxilia partida/combustão em condições específicas.",
  },
  {
    id: 30,
    slug: "simbolo-30",
    title: "Advertência do tacógrafo",
    category: "Sistema",
    severity: "warning",
    color: "amarelo",
    action:
      "Verifique mensagens/erros do tacógrafo e conformidade. Procure suporte se necessário.",
    causes: ["Erro de cartão/registro", "Falha de comunicação", "Evento de velocidade/tempo registrado", "Configuração incorreta"],
    risks: ["Não conformidade legal", "Perda de registros", "Multas e bloqueios operacionais"],
    description: "Advertência do tacógrafo.",
  },
  {
    id: 31,
    slug: "simbolo-31",
    title: "Travamento da cabine está aberto",
    category: "Cabine",
    severity: "danger",
    color: "vermelho",
    action:
      "Pare em local seguro e verifique travamento/posição da cabine. Não continue sem corrigir.",
    causes: ["Cabine não travada corretamente", "Sensor de travamento com falha", "Cabine inclinada/fora de posição"],
    risks: ["Risco de acidente grave", "Danos estruturais e perda de controle"],
    description:
      "Indica travamento da cabine aberto. Verifique se a cabine está totalmente na posição correta.",
  },
  {
    id: 32,
    slug: "simbolo-32",
    title: "ARLA32 incorreto / mau funcionamento",
    category: "Emissões",
    severity: "warning",
    color: "amarelo",
    action:
      "Verifique nível/qualidade do ARLA32. Se persistir, faça diagnóstico no sistema de dosagem.",
    causes: ["ARLA32 contaminado/fora de especificação", "Tanque baixo/vazio", "Falha de dosagem (bomba, bico, aquecedor)", "Sensor NOx/nível com falha"],
    risks: ["Limitação de potência", "Ativação de modo de proteção", "Aumento de emissões"],
    description:
      "Pode indicar: nível baixo/tanque vazio, ARLA32 incorreto ou mau funcionamento do sistema de dosagem de ARLA32.",
  },
  {
    id: 33,
    slug: "simbolo-33",
    title: "Advertência EAS – limite de velocidade 20 km/h",
    category: "Emissões",
    severity: "danger",
    color: "vermelho",
    action:
      "Trate como crítico: pode haver limitação de performance/velocidade. Resolva a causa (EAS/ARLA) o quanto antes.",
    causes: ["Falha grave no sistema EAS/SCR", "ARLA32 incorreto ou ausente", "Falha persistente não corrigida em emissões"],
    risks: ["Limitação severa de velocidade", "Impossibilidade de operação normal", "Parada operacional"],
    description:
      "Relacionado ao sistema EAS. Pode indicar que um limite de velocidade será ativado na próxima parada ou que o limite de 20 km/h está ativo.",
  },
  {
    id: 34,
    slug: "simbolo-34",
    title: "Nível do líquido de arrefecimento muito baixo",
    category: "Motor",
    severity: "danger",
    color: "vermelho",
    action:
      "Pare com segurança e verifique vazamentos/nível. Não rode com nível crítico.",
    causes: ["Vazamento no sistema de arrefecimento", "Mangueira/abraçadeira solta", "Reservatório baixo", "Bomba d’água com falha"],
    risks: ["Superaquecimento", "Queima de junta/cabeçote", "Danos severos ao motor"],
    description:
      "Nível do líquido de arrefecimento muito baixo. Indica necessidade imediata de verificação do sistema.",
  },
  {
    id: 35,
    slug: "simbolo-35",
    title: "Temperatura do líquido de arrefecimento muito alta",
    category: "Motor",
    severity: "danger",
    color: "vermelho",
    action:
      "Pare com segurança e desligue o motor se necessário. Evite abrir reservatório quente. Procure assistência.",
    causes: ["Falta de líquido de arrefecimento", "Ventoinha/embreagem viscosa com falha", "Radiador obstruído", "Termostato travado", "Bomba d’água com falha"],
    risks: ["Danos ao motor (junta/cabeçote)", "Empeno e falha catastrófica", "Risco de queimaduras ao manusear sistema quente"],
    description:
      "Temperatura do líquido de arrefecimento muito alta. Cuidado: perigo de queimaduras.",
  },
  {
    id: 36,
    slug: "simbolo-36",
    title: "Advertência do alternador",
    category: "Elétrica",
    severity: "danger",
    color: "vermelho",
    action:
      "Se persistir, evite continuar viagem: pode haver falha de carga. Procure oficina.",
    causes: ["Correia do alternador frouxa/rompida", "Alternador com falha", "Regulador de voltagem defeituoso", "Conexões/aterramento ruins", "Bateria com defeito"],
    risks: ["Veículo pode desligar por falta de energia", "Falha de sistemas eletrônicos", "Imobilização no trajeto"],
    description:
      "Se o ícone estiver vermelho, a tensão de carga do alternador está incorreta. Caso não apague, não continue dirigindo em hipótese alguma.",
  },
  {
    id: 37,
    slug: "simbolo-37",
    title: "Nível de óleo do motor baixo",
    category: "Motor",
    severity: "danger",
    color: "vermelho",
    action:
      "Pare em local seguro e verifique nível/pressão. Complete óleo conforme especificação.",
    causes: ["Nível de óleo baixo", "Vazamento", "Consumo elevado", "Falha no sensor de nível/pressão"],
    risks: ["Danos severos ao motor (bronzinamento, travamento)", "Perda de potência e superaquecimento", "Custo alto de reparo"],
    description:
      "Indica necessidade de verificar nível/pressão do óleo. Pressão muito baixa pode causar danos severos ao motor.",
  },
  {
    id: 38,
    slug: "simbolo-38",
    title: "Advertência do motor",
    category: "Motor",
    severity: "warning",
    color: "amarelo",
    action:
      "Reduza carga/rotação e verifique mensagens. Se houver perda de potência ou luz vermelha, pare e chame assistência.",
    causes: ["Falha em sensor/atuador do motor", "Proteção por temperatura/pressão", "Problema de combustível/injeção", "Códigos de falha registrados (ECU)"],
    risks: ["Perda de potência", "Consumo elevado", "Evolução para falha crítica se ignorado"],
    description:
      "Pode indicar várias condições: excesso de rotação, motor de partida superaquecido, desligamento do motor, advertência do pedal do acelerador, entre outras. Consulte mensagens no painel.",
  },
  {
    id: 39,
    slug: "simbolo-39",
    title: "Advertência da transmissão",
    category: "Transmissão",
    severity: "warning",
    color: "amarelo",
    action:
      "Reduza esforço e temperatura. Se necessário, opere em modo manual e procure oficina.",
    causes: ["Temperatura alta do óleo da transmissão", "Falha em sensores/solenoides", "Nível/qualidade do óleo inadequado", "Falha no módulo da transmissão"],
    risks: ["Danos internos na transmissão", "Travamento/limitação de marchas", "Imobilização do veículo"],
    description:
      "Pode indicar falha na transmissão (câmbio automatizado pode limitar trocas) ou temperatura da transmissão muito alta, exigindo condução cuidadosa e diagnóstico.",
  },
  {
    id: 40,
    slug: "simbolo-40",
    title: "Controlador central do veículo – Falha VICE",
    category: "Eletrônica",
    severity: "warning",
    color: "amarelo",
    action: "Procure diagnóstico, pode afetar funções do veículo.",
    causes: ["Falha em módulo central", "Comunicação CAN com erro", "Configuração incompatível entre módulos", "Baixa tensão elétrica"],
    risks: ["Falhas em funções do veículo", "Mensagens múltiplas no painel", "Limitação operacional dependendo do sistema"],
    description:
      "Pode indicar falha em componentes eletrônicos do VICE (centro de comando) ou erro de configuração (inconsistência de números programados entre módulos).",
  },
  {
    id: 41,
    slug: "simbolo-41",
    title: "Nível do óleo: alto / baixo (corrigir nível)",
    category: "Motor",
    severity: "warning",
    color: "amarelo",
    action:
      "Corrija o nível conforme orientação do painel (ex.: completar ou reduzir excesso).",
    causes: ["Nível de óleo baixo", "Nível de óleo alto (excesso)", "Leitura do sensor fora do padrão"],
    risks: ["Com óleo baixo: dano ao motor", "Com óleo alto: espumação/pressão anormal e vazamentos", "Falhas de lubrificação"],
    description:
      "Quando amarelo: corrija o nível (nível muito alto) ou adicione óleo conforme orientação do fabricante (nível baixo).",
  },
  {
    id: 42,
    slug: "simbolo-42",
    title: "Sobrecarga ou desgaste da embreagem",
    category: "Transmissão",
    severity: "warning",
    color: "amarelo",
    action:
      "Evite manobras prolongadas patinando embreagem. Procure avaliação se persistir.",
    causes: ["Patinagem excessiva", "Carga alta em manobras", "Desgaste do disco/platô", "Ajuste incorreto (dependendo do sistema)"],
    risks: ["Perda de tração e aquecimento", "Danos no conjunto da embreagem", "Parada por falha completa"],
    description:
      "Pode indicar sobrecarga da embreagem ou desgaste. Requer atenção para evitar danos.",
  },
  {
    id: 43,
    slug: "simbolo-43",
    title: "Desgaste na lona do freio",
    category: "Freios",
    severity: "danger",
    color: "amarelo",
    action:
      "Agende substituição imediata. Desempenho de frenagem pode estar comprometido.",
    causes: ["Pastilha/lona desgastada", "Sensor de desgaste acionado", "Uso severo em serra/carga alta"],
    risks: ["Perda de eficiência de frenagem", "Danos ao disco/tambor", "Risco de acidente"],
    description:
      "Acende se a pastilha/lona de freio de uma ou mais rodas estiver desgastada.",
  },
  {
    id: 44,
    slug: "simbolo-44",
    title: "Advertência vermelha – adicionar óleo",
    category: "Motor",
    severity: "danger",
    color: "vermelho",
    action:
      "Pare em local seguro e adicione óleo conforme especificação (ex.: orientação do painel).",
    causes: ["Nível/pressão de óleo em condição crítica", "Vazamento severo", "Consumo anormal de óleo"],
    risks: ["Dano imediato ao motor", "Travamento do motor", "Risco de incêndio se houver vazamento sobre partes quentes"],
    description: "Vermelha: adicione óleo conforme orientação do painel.",
  },
  {
    id: 45,
    slug: "simbolo-45",
    title: "Advertência do sistema ACC",
    category: "Assistência",
    severity: "warning",
    color: "amarelo",
    action:
      "Limpe sensores se indicado. Se persistir, verifique funcionamento do ACC.",
    causes: ["Sensor/radar sujo", "Condições climáticas afetando leitura", "Falha no módulo ACC", "ACC desativado/manual"],
    risks: ["Perda de assistência de distância/velocidade", "Maior risco se confiar no ACC sem estar disponível"],
    description:
      "Pode indicar advertência do ACC, sistema desligado ou sensor do ACC sujo.",
  },
  {
    id: 46,
    slug: "simbolo-46",
    title: "Nível de combustível baixo",
    category: "Combustível",
    severity: "warning",
    color: "amarelo",
    action: "Reabasteça assim que possível.",
    causes: ["Tanque em reserva", "Sensor de nível indicando baixo"],
    risks: ["Pane seca", "Entrada de impurezas do fundo do tanque", "Parada operacional"],
    description:
      "Acende quando o nível de reserva é atingido (aproximadamente 10% da capacidade do tanque).",
  },
  {
    id: 47,
    slug: "simbolo-47",
    title: "Nível de ARLA32 baixo",
    category: "Emissões",
    severity: "warning",
    color: "amarelo",
    action:
      "Complete ARLA32 conforme especificação. Evite rodar até nível crítico para não limitar desempenho.",
    causes: ["Nível baixo no tanque de ARLA32", "Sensor de nível indicando baixo", "Consumo elevado por falhas no sistema"],
    risks: ["Limitação de potência/velocidade se atingir nível crítico", "Mensagens recorrentes e modo de proteção", "Não conformidade de emissões"],
    description:
      "Acende quando o nível de ARLA32 está baixo e o sistema começa a emitir advertências no visor principal.",
  },
  {
    id: 48,
    slug: "simbolo-48",
    title: "Filtro de partículas cheio",
    category: "Emissões",
    severity: "warning",
    color: "amarelo",
    action:
      "Faça regeneração conforme orientação. Se não resolver, procure serviço.",
    causes: ["Regeneração não concluída", "Uso urbano/baixa temperatura por longos períodos", "Sensor diferencial/temperatura com falha", "Combustível/óleo inadequado (dependendo do sistema)"],
    risks: ["Perda de potência", "Aumento de consumo", "Danos ao DPF/turbo se ignorado", "Modo de proteção"],
    description:
      "Filtro de partículas cheio. Serviço necessário. Pode exigir regeneração estacionária forçada conforme orientação do fabricante.",
  },
  {
    id: 49,
    slug: "simbolo-49",
    title: "Drenar pré-filtro de combustível",
    category: "Combustível",
    severity: "warning",
    color: "amarelo",
    action:
      "Drene o separador/pré-filtro conforme procedimento. Se persistir, verifique contaminação.",
    causes: ["Água/contaminação no separador", "Combustível contaminado", "Intervalo de drenagem excedido"],
    risks: ["Falhas de injeção e perda de potência", "Danos em bicos/bomba de alta pressão", "Parada do veículo"],
    description:
      "Indica necessidade de drenagem do pré-filtro e do separador relacionados ao combustível, conforme procedimento do fabricante.",
  },
  {
    id: 50,
    slug: "simbolo-50",
    title: "Luz de trabalho",
    category: "Iluminação",
    severity: "info",
    color: "branco",
    action: "Indica luz de trabalho ativa.",
    causes: ["Luz de trabalho acionada", "Iluminação auxiliar do espaço de carga ligada"],
    risks: ["Sem risco direto. Atenção para não descarregar bateria com motor desligado."],
    description:
      "Acende quando a luz de trabalho na travessa da cabine ou a iluminação do espaço de carga estiver acesa.",
  },
  {
    id: 51,
    slug: "simbolo-51",
    title: "Aviso geral de perigo",
    category: "Sistema",
    severity: "danger",
    color: "vermelho",
    action:
      "Pare com segurança e verifique mensagens no painel. Trate como condição crítica.",
    causes: ["Falha crítica detectada em algum sistema", "Condição de risco no veículo", "Falha elétrica ou de segurança"],
    risks: ["Danos materiais/funcionais", "Risco elevado de acidente", "Imobilização do veículo"],
    description: "Risco de danos materiais ou funcionais. Perigo.",
  },
];

export function normalizeSlug(input: string) {
  return String(input || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

export function getSymbolById(id: string | number): SymbolInfo | undefined {
  const numeric = typeof id === "string" ? Number(id) : id;
  if (!Number.isFinite(numeric)) return undefined;
  return symbolData.find((s) => s.id === numeric);
}

export function getSymbolBySlug(slug: string): SymbolInfo | undefined {
  const norm = normalizeSlug(slug);
  return symbolData.find((s) => normalizeSlug(s.slug) === norm);
}
