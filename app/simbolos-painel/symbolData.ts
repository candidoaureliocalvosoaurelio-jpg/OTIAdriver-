// app/simbolos-painel/symbolData.ts

export type SymbolInfo = {
  id: string;              // ex: "1"
  file: string;            // ex: "simbolo-01.png"
  title: string;           // nome técnico (aparece na página)
  description: string;     // descrição técnica detalhada
};

// Lista oficial dos significados dos 51 símbolos
export const symbolData: SymbolInfo[] = [
  { id: "1", file: "simbolo-01.png", title: "Controle de Estabilidade do Veículo", description: "" },
  { id: "2", file: "simbolo-02.png", title: "ASR – Advertência do Painel de Instrumentos piscando", description: "" },
  { id: "3", file: "simbolo-03.png", title: "LDWS – Sistema de aviso de saída da faixa", description: "" },
  { id: "4", file: "simbolo-04.png", title: "ASR – Desativado", description: "" },
  { id: "5", file: "simbolo-05.png", title: "AEBS – Desativado", description: "" },
  { id: "6", file: "simbolo-06.png", title: "Catalisador SCR", description: "" },
  { id: "7", file: "simbolo-07.png", title: "Advertência geral", description: "" },
  { id: "8", file: "simbolo-08.png", title: "Bloqueio do diferencial entre eixos (longitudinal)", description: "" },
  { id: "9", file: "simbolo-09.png", title: "Bloqueio do diferencial entre rodas (eixo cruzado)", description: "" },
  { id: "10", file: "simbolo-10.png", title: "Tomada de Força (PTO)", description: "" },
  { id: "11", file: "simbolo-11.png", title: "Indicador de direção à esquerda", description: "" },
  { id: "12", file: "simbolo-12.png", title: "Indicador de direção à direita", description: "" },
  { id: "13", file: "simbolo-13.png", title: "Falha de lâmpada", description: "" },
  { id: "14", file: "simbolo-14.png", title: "Farol principal – luz alta", description: "" },
  { id: "15", file: "simbolo-15.png", title: "Faróis de neblina dianteiros", description: "" },
  { id: "16", file: "simbolo-16.png", title: "Advertência do airbag", description: "" },
  { id: "17", file: "simbolo-17.png", title: "Lembrete do cinto de segurança", description: "" },
  { id: "18", file: "simbolo-18.png", title: "Auxílio de partida em aclives", description: "" },
  { id: "19", file: "simbolo-19.png", title: "ABS do caminhão", description: "" },
  { id: "20", file: "simbolo-20.png", title: "ABS do reboque / carreta", description: "" },
  { id: "21", file: "simbolo-21.png", title: "Advertência geral da carroçaria", description: "" },
  { id: "22", file: "simbolo-22.png", title: "Freio motor ativo", description: "" },
  { id: "23", file: "simbolo-23.png", title: "Freio de estacionamento", description: "" },
  { id: "24", file: "simbolo-24.png", title: "Freios com baixo desempenho", description: "" },
  { id: "25", file: "simbolo-25.png", title: "Faróis de neblina traseiros", description: "" },
  { id: "26", file: "simbolo-26.png", title: "Indicador de avaria", description: "" },
  { id: "27", file: "simbolo-27.png", title: "Alta temperatura do sistema de escapamento", description: "" },
  { id: "28", file: "simbolo-28.png", title: "Chassi fora da altura de direção normal", description: "" },
  { id: "29", file: "simbolo-29.png", title: "Pré-aquecedor da admissão do motor", description: "" },
  { id: "30", file: "simbolo-30.png", title: "Advertência do tacógrafo", description: "" },
  { id: "31", file: "simbolo-31.png", title: "Travamento da cabine está aberto", description: "" },
  { id: "32", file: "simbolo-32.png", title: "ARLA32 incorreto / mau funcionamento", description: "" },
  { id: "33", file: "simbolo-33.png", title: "Advertência EAS – limite de velocidade 20 km/h", description: "" },
  { id: "34", file: "simbolo-34.png", title: "Nível do líquido de arrefecimento muito baixo", description: "" },
  { id: "35", file: "simbolo-35.png", title: "Temperatura do líquido de arrefecimento muito alta", description: "" },
  { id: "36", file: "simbolo-36.png", title: "Advertência do alternador", description: "" },
  { id: "37", file: "simbolo-37.png", title: "Nível de óleo do motor baixo", description: "" },
  { id: "38", file: "simbolo-38.png", title: "Advertência do motor", description: "" },
  { id: "39", file: "simbolo-39.png", title: "Advertência da transmissão", description: "" },
  { id: "40", file: "simbolo-40.png", title: "Controlador central do veículo – Falha VICE", description: "" },
  { id: "41", file: "simbolo-41.png", title: "Nível do óleo: alto / baixo (corrigir nível)", description: "" },
  { id: "42", file: "simbolo-42.png", title: "Sobrecarga ou desgaste da embreagem", description: "" },
  { id: "43", file: "simbolo-43.png", title: "Desgaste na lona do freio", description: "" },
  { id: "44", file: "simbolo-44.png", title: "Advertência vermelha – adicionar óleo", description: "" },
  { id: "45", file: "simbolo-45.png", title: "Advertência do sistema ACC", description: "" },
  { id: "46", file: "simbolo-46.png", title: "Nível de combustível baixo", description: "" },
  { id: "47", file: "simbolo-47.png", title: "Nível de ARLA32 baixo", description: "" },
  { id: "48", file: "simbolo-48.png", title: "Filtro de partículas cheio", description: "" },
  { id: "49", file: "simbolo-49.png", title: "Drenar pré-filtro de combustível", description: "" },
  { id: "50", file: "simbolo-50.png", title: "Luz de trabalho", description: "" },
  { id: "51", file: "simbolo-51.png", title: "Aviso geral de perigo", description: "" },
];
