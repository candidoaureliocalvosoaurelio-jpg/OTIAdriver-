// app/simbolos-painel/symbolData.ts
import fs from "fs";
import path from "path";

export const symbolTitles: Record<number, string> = {
  1: "Controle de Estabilidade do Veículo",
  2: "ASR – Advertência do Painel de Instrumentos piscando",
  3: "LDWS – Sistema de aviso de saída da faixa",
  4: "ASR – Desativado",
  5: "AEBS – Desativado",
  6: "Catalisador SCR",
  7: "Advertência geral",
  8: "Bloqueio do diferencial entre eixos (longitudinal)",
  9: "Bloqueio do diferencial entre rodas (eixo cruzado)",
  10: "Tomada de Força (PTO)",
  11: "Indicador de direção à esquerda",
  12: "Indicador de direção à direita",
  13: "Falha de lâmpada",
  14: "Farol principal – luz alta",
  15: "Faróis de neblina dianteiros",
  16: "Advertência do airbag",
  17: "Lembrete do cinto de segurança",
  18: "Auxílio de partida em aclives",
  19: "ABS do caminhão",
  20: "ABS do reboque / carreta",
  21: "Advertência geral da carroçaria",
  22: "Freio motor ativo",
  23: "Freio de estacionamento",
  24: "Freios com baixo desempenho",
  25: "Faróis de neblina traseiros",
  26: "Indicador de avaria",
  27: "Alta temperatura do sistema de escapamento",
  28: "Chassi fora da altura de direção normal",
  29: "Pré-aquecedor da admissão do motor",
  30: "Advertência do tacógrafo",
  31: "Travamento da cabine está aberto",
  32: "ARLA32 incorreto / mau funcionamento",
  33: "Advertência EAS – limite de velocidade 20 km/h",
  34: "Nível do líquido de arrefecimento muito baixo",
  35: "Temperatura do líquido de arrefecimento muito alta",
  36: "Advertência do alternador",
  37: "Nível de óleo do motor baixo",
  38: "Advertência do motor",
  39: "Advertência da transmissão",
  40: "Controlador central do veículo – Falha VICE",
  41: "Nível do óleo: alto / baixo (corrigir nível)",
  42: "Sobrecarga ou desgaste da embreagem",
  43: "Desgaste na lona do freio",
  44: "Advertência vermelha – adicionar óleo",
  45: "Advertência do sistema ACC",
  46: "Nível de combustível baixo",
  47: "Nível de ARLA32 baixo",
  48: "Filtro de partículas cheio",
  49: "Drenar pré-filtro de combustível",
  50: "Luz de trabalho",
  51: "Aviso geral de perigo",
};

export type SymbolInfo = {
  id: number;
  title: string;
  imagePath: string;
};

export function getAllSymbols(): SymbolInfo[] {
  const dir = path.join(process.cwd(), "public", "simbolos");

  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) =>
      /^simbolo-\d+\.(png|jpe?g|webp|svg)$/i.test(name)
    );

  return entries
    .map((file) => {
      const match = file.match(/^simbolo-(\d+)\.(png|jpe?g|webp|svg)$/i);
      if (!match) return null;

      const id = Number(match[1]);
      const title = symbolTitles[id] ?? `Símbolo ${id}`;

      return {
        id,
        title,
        imagePath: "/simbolos/" + file,
      } as SymbolInfo;
    })
    .filter(Boolean) as SymbolInfo[]
    .sort((a, b) => a.id - b.id);
}

export function getSymbolById(id: number): SymbolInfo | undefined {
  const all = getAllSymbols();
  return all.find((s) => s.id === id);
}
