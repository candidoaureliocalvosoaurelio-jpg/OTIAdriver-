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
    description:
      "É um sistema de segurança veicular que impede que as rodas patinem ao acelerar, especialmente em superfícies escorregadias, mantendo a aderência e a estabilidade do veículo. Ele funciona monitorando a rotação das rodas e, quando detecta patinação, atua nos freios e reduz a potência do motor para restaurar a tração.",
  },

  // ✅ CORREÇÃO AQUI: id 3 = LDWS (antes estava trocado)
  {
    id: 3,
    slug: "simbolo-03",
    title: "LDWS – Sistema de aviso de saída da faixa",
    category: "Segurança",
    severity: "info",
    color: "amarelo",
    action:
      "Mantenha-se na faixa e sinalize manobras. Se o sistema alertar incorretamente, verifique calibração/sensores.",
    description:
      "O sistema avisa o motorista quando o veículo sai da faixa despropositadamente. O LDWS usa uma câmera atrás do para-brisa para detectar as faixas da sinalização horizontal. Um sinal acústico é emitido no alto-falante frontal esquerdo ou direito quando se sai da faixa atual, soando como se o veículo estivesse passando por um sonorizador, no lado para o qual o veículo está se movendo.",
  },

  // ✅ CORREÇÃO AQUI: id 4 = ASR desativado (antes estava trocado)
  {
    id: 4,
    slug: "simbolo-04",
    title: "ASR – Desativado",
    category: "Tração",
    severity: "warning",
    color: "amarelo",
    action:
      "Use desativação apenas quando necessário (solo muito solto). Reative assim que voltar ao asfalto/solo firme.",
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
