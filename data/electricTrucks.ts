// data/electricTruckSpecs.ts
// Fichas técnicas completas dos caminhões elétricos — OTIAdriver ⚡
// Cada chave do objeto principal é o slug que você já usa em data/electricTrucks.ts

export const electricTruckSpecs: Record<string, Record<string, string>> = {
  // ================== VOLVO FH ELECTRIC ==================
  "volvo-fh-electric-2025": {
    "Marca / Modelo": "Volvo FH Electric",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "400–500 km (dependendo da carga e topografia)",
    Bateria: "540 kWh – Íons de Lítio (LFP ou NMC)",
    Potência: "490 kW (pico) / 350 kW (contínua)",
    Torque: "2.400 Nm",
    "Peso Bruto Total (PBT)": "44 toneladas",
    Configuração: "4x2 / 6x2 / 6x4",
    "Capacidade de Carga": "até 22 toneladas",
    "Recarga Rápida (CCS / MCS)": "até 350 kW",
    "Tempo de Recarga (20–80%)": "~75 minutos",
    "País de Origem": "Suécia",
    "Uso Ideal": "Transporte pesado regional e internacional",
  },

  // ================== DAF XF ELECTRIC ==================
  "daf-xf-electric-2025": {
    "Marca / Modelo": "DAF XF Electric",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "400–500 km (carga total)",
    Bateria: "525 kWh – Íons de Lítio (NMC)",
    Potência: "480 kW (pico) / 340 kW (contínua)",
    Torque: "2.800 Nm",
    "Peso Bruto Total (PBT)": "44 toneladas",
    Configuração: "4x2 / 6x2",
    "Capacidade de Carga": "até 22 toneladas",
    "Recarga Rápida (CCS / MCS)": "até 350 kW",
    "Tempo de Recarga (20–80%)": "~65 minutos",
    "País de Origem": "Holanda",
    "Uso Ideal": "Transporte nacional e internacional com emissões zero",
  },

  // ================== MERCEDES eACTROS ==================
  "mercedes-eactros-2025": {
    "Marca / Modelo": "Mercedes-Benz eActros 600 LongHaul",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "500–600 km (com carga total)",
    Bateria: "600 kWh – Lítio NMC (Níquel-Manganês-Cobalto)",
    Potência: "400 kW (pico) / 330 kW (contínua)",
    Torque: "3.000 Nm",
    "Peso Bruto Total (PBT)": "44 toneladas",
    Configuração: "4x2 / 6x2",
    "Capacidade de Carga": "até 22 toneladas",
    "Recarga Rápida (MCS)": "até 400 kW",
    "Tempo de Recarga (20–80%)": "~60 minutos",
    "País de Origem": "Alemanha",
    "Uso Ideal": "Transporte de longa distância com zero emissões",
  },

  // ================== VOLKSWAGEN e-DELIVERY ==================
  "volkswagen-e-delivery-2025": {
    "Marca / Modelo": "Volkswagen e-Delivery",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia:
      "200–250 km (dependendo da carga, rota e perfil de operação)",
    Bateria: "300 kWh – Lítio-Ferro-Fosfato (LFP)",
    Potência: "300 kW (pico) / 200 kW (contínua)",
    Torque: "2.150 Nm",
    "Peso Bruto Total (PBT)": "11 a 14 toneladas",
    Configuração: "4x2",
    "Capacidade de Carga": "até 9 toneladas",
    "Recarga Rápida (CCS)": "até 150 kW",
    "Tempo de Recarga (20–80%)": "~2 horas",
    "País de Origem": "Brasil",
    "Uso Ideal": "Distribuição urbana e logística sustentável",
  },

  // ================== IVECO S-WAY ELECTRIC ==================
  "iveco-s-way-electric-2025": {
    "Marca / Modelo": "IVECO S-Way Electric 2050",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "500 km (carga total)",
    Bateria: "740 kWh – Íons de Lítio (NMC)",
    Potência: "480 kW (pico) / 400 kW (contínua)",
    Torque: "3.000 Nm",
    "Peso Bruto Total (PBT)": "44 toneladas",
    Configuração: "4x2 / 6x2 / 6x4",
    "Capacidade de Carga": "até 22 toneladas",
    "Recarga Rápida (MCS)": "até 400 kW",
    "Tempo de Recarga (20–80%)": "~60 minutos",
    "País de Origem": "Itália",
    "Uso Ideal":
      "Transporte rodoviário de longa distância e logística interestadual",
  },

  // ================== SCANIA SUPER ELECTRIC ==================
  "scania-super-electric-2025": {
    "Marca / Modelo": "Scania BEV",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "cerca de 400 km (com carga total)",
    Bateria: "600 kWh – Lítio NMC (Níquel-Manganês-Cobalto)",
    Potência: "410 kW (pico) / 360 kW (contínua)",
    Torque: "3.100 Nm",
    "Peso Bruto Total (PBT)": "44 toneladas",
    Configuração: "4x2 / 6x2 / 6x4",
    "Capacidade de Carga": "até 22 toneladas",
    "Recarga Rápida (MCS)": "até 375 kW",
    "Tempo de Recarga (20–80%)": "~60 minutos",
    "País de Origem": "Suécia",
    "Uso Ideal": "Transporte pesado e logística regional elétrica",
  },

  // ================== HINO Z EV ==================
  "hino-z-ev-2025": {
    "Marca / Modelo": "Hino Z EV 2050",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "400–450 km (ciclo combinado)",
    Bateria: "480 kWh – Íons de Lítio (NMC)",
    Potência: "420 kW (pico) / 340 kW (contínua)",
    Torque: "2.700 Nm",
    "Peso Bruto Total (PBT)": "18 toneladas",
    Configuração: "4x2 / 6x2",
    "Capacidade de Carga": "até 10 toneladas",
    "Recarga Rápida (CHAdeMO / CCS2)": "até 250 kW",
    "Tempo de Recarga (20–80%)": "~70 minutos",
    "País de Origem": "Japão",
    "Uso Ideal": "Transporte urbano e regional inteligente",
    "IA Integrada": "Condução semiautônoma nível 3",
  },

  // ================== UD QUESTER (sem ficha específica no Word) ==================
  "ud-quester-electric-2025": {
    "Marca / Modelo": "UD Quester Electric 2025",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "300 km (estimado para uso regional)",
    Bateria: "≈450 kWh – Íons de Lítio",
    Potência: "≈380 kW (estimado)",
    Torque: "≈2.000 Nm",
    "Peso Bruto Total (PBT)": "até 26 toneladas (estimado)",
    Configuração: "6x2 / 4x2",
    "Capacidade de Carga": "até 16 toneladas (estimado)",
    "Uso Ideal": "Transporte regional e urbano pesado",
  },

  // ================== DONGFENG (sem ficha específica no Word) ==================
  "dongfeng-electric-2025": {
    "Marca / Modelo": "Dongfeng Electric 2025",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "350 km (estimado)",
    Bateria: "≈500 kWh – Íons de Lítio",
    Potência: "≈450 kW (estimado)",
    Torque: "≈2.500 Nm",
    "Peso Bruto Total (PBT)": "até 40 toneladas (estimado)",
    Configuração: "6x4",
    "Capacidade de Carga": "aplicações de carga pesada",
    "Uso Ideal":
      "Transporte de carga pesada com foco em autonomia estendida",
  },

  // ================== FREIGHTLINER eCASCADIA ==================
  "freightliner-ecascadia-2025": {
    "Marca / Modelo": "Freightliner eCascadia 2050",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "400–500 km (carga total)",
    Bateria: "475 kWh – Íons de Lítio (NMC)",
    Potência: "470 kW (pico) / 350 kW (contínua)",
    Torque: "2.700 Nm",
    "Peso Bruto Total (PBT)": "37 toneladas",
    Configuração: "4x2 / 6x2",
    "Capacidade de Carga": "até 20 toneladas",
    "Recarga Rápida (CCS2 / MCS)": "até 350 kW",
    "Tempo de Recarga (20–80%)": "~70 minutos",
    "País de Origem": "Estados Unidos",
    "Uso Ideal": "Transporte regional e distribuição elétrica urbana",
    "IA Integrada": "Frota conectada + IA preditiva de rotas",
  },

  // ================== BYD 8TT (baseado na ficha de BYD 8TT 2025) ==================
  "byd-8tt-2025": {
    "Marca / Modelo": "BYD 8TT 2025",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "350 km",
    Bateria: "500 kWh",
    Potência: "430 kW",
    Torque: "≈2.500 Nm (estimado)",
    "Peso Bruto Total (PBT)": "cerca de 36–40 toneladas",
    Configuração: "6x4",
    "Capacidade de Carga": "aplicações rodoviárias pesadas",
    "Uso Ideal":
      "Transporte de carga pesada com foco em confiabilidade e autonomia",
  },

  // ================== TESLA SEMI ==================
  "tesla-semi-2025": {
    "Marca / Modelo": "Tesla Semi 2050",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "800 km (modo longo alcance)",
    Bateria: "900 kWh – Lítio-Níquel-Manganês-Cobalto (NMC)",
    Potência: "750 kW (pico) / 500 kW (contínua)",
    Torque: "≈5.000 Nm (total)",
    "Peso Bruto Total (PBT)": "40 toneladas",
    Configuração: "6x4",
    "Capacidade de Carga": "até 20 toneladas",
    "Recarga Rápida (Megacharger)": "até 1 MW",
    "Tempo de Recarga (20–80%)": "~30 minutos",
    "País de Origem": "Estados Unidos",
    "Uso Ideal": "Transporte de longa distância com IA integrada",
    "IA Integrada": "Piloto autônomo nível 4 + telemetria preditiva",
  },

  // ================== NIKOLA TRE BEV ==================
  "nikola-tre-bev-2025": {
    "Marca / Modelo": "Nikola Tre Electric 2050",
    "Tipo de Propulsão": "100% Elétrico (BEV)",
    Autonomia: "720 km (modo highway)",
    Bateria: "733 kWh – Íons de Lítio (NMC)",
    Potência: "645 kW (pico) / 480 kW (contínua)",
    Torque: "3.600 Nm",
    "Peso Bruto Total (PBT)": "42 toneladas",
    Configuração: "6x4",
    "Capacidade de Carga": "até 21 toneladas",
    "Recarga Rápida (CCS2 / MCS)": "até 500 kW",
    "Tempo de Recarga (20–80%)": "~50 minutos",
    "País de Origem": "Estados Unidos",
    "Uso Ideal":
      "Transporte de longa distância e intermodal elétrico",
    "IA Integrada":
      "Sistema de IA autônoma + sensores 360º com navegação adaptativa",
  },
};
