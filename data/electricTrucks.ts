// data/electricTrucks.ts
// Banco de dados dos caminhões elétricos — OTIAdriver ⚡

export type ElectricTruck = {
  slug: string;
  name: string;
  file: string; // Caminho da imagem em /public/images/trucks-eletricos/
  description?: string;
  specs?: Record<string, string>;
};

export const electricTrucks: ElectricTruck[] = [
  // =========================================================
  // BRASIL
  // =========================================================
  {
    slug: "volvo-fm-electric-2025",
    name: "Volvo FM Electric 2025",
    file: "/images/trucks-eletricos/volvo-fm-electric.jpg",
    description:
      "Caminhão elétrico pesado voltado ao transporte urbano e regional, com alta autonomia e operação livre de emissões locais.",
    specs: {
      "Marca / Modelo": "Volvo FM Electric",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "400–500 km (dependendo da carga)",
      Bateria: "540 kWh – Íons de Lítio",
      Potência: "490 kW (pico) / 350 kW (contínua)",
      Torque: "2.400 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "4x2 / 6x2 / 6x4",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 350 kW (recarga rápida CCS/MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~75 minutos (20–80%)",
      "País de Origem": "Brasil / Suécia",
      "Uso Ideal": "Transporte pesado urbano e regional sem emissões",
    },
  },
  {
    slug: "volkswagen-e-delivery-2025",
    name: "Volkswagen e-Delivery 2025",
    file: "/images/trucks-eletricos/vw-e-delivery.jpg",
    description:
      "Referência em distribuição urbana sustentável, produzido no Brasil para operações silenciosas e eficientes.",
    specs: {
      "Marca / Modelo": "Volkswagen e-Delivery",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "200–250 km (dependendo da carga e operação)",
      Bateria: "300 kWh – Lítio-Ferro-Fosfato (LFP)",
      Potência: "300 kW (pico) / 200 kW (contínua)",
      Torque: "2.150 Nm",
      "Peso Bruto Total (PBT)": "11 a 14 toneladas",
      Configuração: "4x2",
      "Capacidade de Carga": "até 9 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 150 kW (recarga rápida CCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~2 horas (20–80%)",
      "País de Origem": "Brasil",
      "Uso Ideal": "Distribuição urbana e logística sustentável",
    },
  },
  {
    slug: "foton-iblue-electric-2025",
    name: "Foton iBlue Electric 2025",
    file: "/images/trucks-eletricos/foton-iblue-electric.jpg",
    description:
      "Modelo elétrico voltado a entregas urbanas e serviços, com foco em eficiência e baixo custo operacional.",
    specs: {
      "Marca / Modelo": "Foton iBlue Electric",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "220–260 km (variável conforme carga e relevo)",
      Bateria: "350 kWh – Íons de Lítio (LFP)",
      Potência: "260 kW (pico) / 180 kW (contínua)",
      Torque: "1.900 Nm",
      "Peso Bruto Total (PBT)": "8 a 11 toneladas",
      Configuração: "4x2",
      "Capacidade de Carga": "até 7 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 150 kW (recarga rápida CCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~90 minutos (20–80%)",
      "País de Origem": "China / Produção no Brasil",
      "Uso Ideal": "Transporte urbano, entregas e serviços elétricos",
    },
  },
  {
    slug: "mercedes-e-accelo-2025",
    name: "Mercedes-Benz e-Accelo 2025",
    file: "/images/trucks-eletricos/mercedes-e-accelo.jpg",
    description:
      "Caminhão leve elétrico ideal para operações urbanas de distribuição, com alta confiabilidade Mercedes-Benz.",
    specs: {
      "Marca / Modelo": "Mercedes-Benz e-Accelo",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "200 km (carga total – ciclo urbano)",
      Bateria: "250 kWh – Lítio NMC (Níquel-Manganês-Cobalto)",
      Potência: "250 kW (pico) / 200 kW (contínua)",
      Torque: "1.000 Nm",
      "Peso Bruto Total (PBT)": "8,5 toneladas",
      Configuração: "4x2",
      "Capacidade de Carga": "até 4,5 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 170 kW (recarga rápida CCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~1h30 (20–80%)",
      "País de Origem": "Brasil / Alemanha",
      "Uso Ideal": "Distribuição urbana e logística sustentável",
    },
  },
  {
    slug: "byd-etm-2025",
    name: "BYD ETM 2025",
    file: "/images/trucks-eletricos/byd-etm.jpg",
    description:
      "Modelo médio da BYD com baterias LFP, ideal para transporte regional com custo reduzido por quilômetro.",
    specs: {
      "Marca / Modelo": "BYD ETM",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "250–300 km (dependendo da carga e topografia)",
      Bateria: "350 kWh – Lítio-Ferro-Fosfato (LFP)",
      Potência: "310 kW (pico) / 230 kW (contínua)",
      Torque: "2.100 Nm",
      "Peso Bruto Total (PBT)": "18 toneladas",
      Configuração: "4x2 / 6x2",
      "Capacidade de Carga": "até 11 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 180 kW (recarga rápida CCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~1h15 (20–80%)",
      "País de Origem": "Brasil / China",
      "Uso Ideal": "Transporte urbano e regional limpo e silencioso",
    },
  },
  {
    slug: "agrale-electric-2025",
    name: "Agrale Electric 2025",
    file: "/images/trucks-eletricos/agrale-electric.jpg",
    description:
      "Caminhão nacional voltado a operações urbanas, serviços públicos e utilidades com propulsão 100% elétrica.",
    specs: {
      "Marca / Modelo": "Agrale Electric",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "180–220 km (uso urbano)",
      Bateria: "200 kWh – Lítio-Ferro-Fosfato (LFP)",
      Potência: "180 kW (pico) / 130 kW (contínua)",
      Torque: "1.200 Nm",
      "Peso Bruto Total (PBT)": "8 toneladas",
      Configuração: "4x2",
      "Capacidade de Carga": "até 4 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 120 kW (recarga rápida CCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~1h20 (20–80%)",
      "País de Origem": "Brasil",
      "Uso Ideal": "Transporte urbano, utilitários e serviços públicos",
    },
  },

  // =========================================================
  // EUROPA
  // =========================================================
  {
    slug: "mercedes-eactros-600-2025",
    name: "Mercedes-Benz eActros 600 LongHaul 2025",
    file: "/images/trucks-eletricos/mercedes-eactros-600.jpg",
    description:
      "Plataforma de longa distância da Mercedes-Benz para transporte pesado totalmente elétrico em rotas rodoviárias.",
    specs: {
      "Marca / Modelo": "Mercedes-Benz eActros 600 LongHaul",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "500–600 km (com carga total)",
      Bateria: "600 kWh – Lítio NMC (Níquel-Manganês-Cobalto)",
      Potência: "400 kW (pico) / 330 kW (contínua)",
      Torque: "3.000 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "4x2 / 6x2",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 400 kW (MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~60 minutos (20–80%)",
      "País de Origem": "Alemanha",
      "Uso Ideal": "Transporte de longa distância com zero emissões",
    },
  },
  {
    slug: "volvo-fh-electric-2025",
    name: "Volvo FH Electric 2025",
    file: "/images/trucks-eletricos/volvo-fh-electric.jpg",
    description:
      "Versão elétrica do consagrado FH, voltada ao transporte pesado regional e internacional.",
    specs: {
      "Marca / Modelo": "Volvo FH Electric",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "400–500 km (dependendo da carga e topografia)",
      Bateria: "540 kWh – Íons de Lítio (LFP ou NMC)",
      Potência: "490 kW (pico) / 350 kW (contínua)",
      Torque: "2.400 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "4x2 / 6x2 / 6x4",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 350 kW (recarga rápida CCS/MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~75 minutos (20–80%)",
      "País de Origem": "Suécia",
      "Uso Ideal": "Transporte pesado regional e internacional",
    },
  },
  {
    slug: "scania-bev-2025",
    name: "Scania BEV 2025",
    file: "/images/trucks-eletricos/scania-bev.jpg",
    description:
      "Plataforma elétrica Scania para operações pesadas com foco em conectividade e eficiência.",
    specs: {
      "Marca / Modelo": "Scania BEV",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "400 km (com carga total)",
      Bateria: "600 kWh – Lítio NMC (Níquel-Manganês-Cobalto)",
      Potência: "410 kW (pico) / 360 kW (contínua)",
      Torque: "3.100 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "4x2 / 6x2 / 6x4",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 375 kW (recarga rápida MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~60 minutos (20–80%)",
      "País de Origem": "Suécia",
      "Uso Ideal": "Transporte pesado e logística regional elétrica",
    },
  },
  {
    slug: "daf-xf-electric-2025",
    name: "DAF XF Electric 2025",
    file: "/images/trucks-eletricos/daf-xf-electric.jpg",
    description:
      "Modelo premium da DAF com foco em conforto, aerodinâmica e emissões zero.",
    specs: {
      "Marca / Modelo": "DAF XF Electric",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "400–500 km (carga total)",
      Bateria: "525 kWh – Íons de Lítio (NMC)",
      Potência: "480 kW (pico) / 340 kW (contínua)",
      Torque: "2.800 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "4x2 / 6x2",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 350 kW (recarga rápida CCS/MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~65 minutos (20–80%)",
      "País de Origem": "Holanda",
      "Uso Ideal": "Transporte nacional e internacional com emissões zero",
    },
  },
  {
    slug: "man-etgx-2025",
    name: "MAN eTGX 2025",
    file: "/images/trucks-eletricos/man-etgx.jpg",
    description:
      "Caminhão elétrico da MAN voltado a rotas de média e longa distância com alto desempenho energético.",
    specs: {
      "Marca / Modelo": "MAN eTGX",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "500 km (carga completa)",
      Bateria: "640 kWh – Íons de Lítio (NMC)",
      Potência: "450 kW (pico) / 380 kW (contínua)",
      Torque: "3.000 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "4x2 / 6x2",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 400 kW (MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~60 minutos (20–80%)",
      "País de Origem": "Alemanha",
      "Uso Ideal": "Transporte rodoviário de média e longa distância",
    },
  },
  {
    slug: "renault-e-tech-t-2025",
    name: "Renault E-Tech T 2025",
    file: "/images/trucks-eletricos/renault-e-tech-t.jpg",
    description:
      "Plataforma elétrica da Renault Trucks voltada a logística pesada regional.",
    specs: {
      "Marca / Modelo": "Renault E-Tech T",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "400 km (com carga total)",
      Bateria: "540 kWh – Íons de Lítio (NMC)",
      Potência: "490 kW (pico) / 360 kW (contínua)",
      Torque: "2.800 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "4x2 / 6x2",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 350 kW (recarga rápida CCS/MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~70 minutos (20–80%)",
      "País de Origem": "França",
      "Uso Ideal": "Transporte de cargas pesadas e distribuição regional",
    },
  },
  {
    slug: "iveco-s-way-electric-2050",
    name: "IVECO S-Way Electric 2050",
    file: "/images/trucks-eletricos/iveco-sway-electric.jpg",
    description:
      "Conceito de longo curso 100% elétrico da IVECO com foco em autonomia e conforto.",
    specs: {
      "Marca / Modelo": "IVECO S-Way Electric 2050",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "500 km (carga total)",
      Bateria: "740 kWh – Íons de Lítio (NMC)",
      Potência: "480 kW (pico) / 400 kW (contínua)",
      Torque: "3.000 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "4x2 / 6x2 / 6x4",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 400 kW (MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~60 minutos (20–80%)",
      "País de Origem": "Itália",
      "Uso Ideal":
        "Transporte rodoviário de longa distância e logística interestadual",
    },
  },
  {
    slug: "mercedes-eactros-400-2025",
    name: "Mercedes-Benz eActros 400 2025",
    file: "/images/trucks-eletricos/mercedes-eactros-400.jpg",
    description:
      "Versão de menor PBT da família eActros, focada em distribuição regional e urbana.",
    specs: {
      "Marca / Modelo": "Mercedes-Benz eActros 400",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "400 km (carga total)",
      Bateria:
        "448 kWh (quatro pacotes de 112 kWh cada) – Íons de Lítio (NMC)",
      Potência: "400 kW (pico) / 330 kW (contínua)",
      Torque: "3.000 Nm",
      "Peso Bruto Total (PBT)": "27 toneladas",
      Configuração: "4x2 / 6x2",
      "Capacidade de Carga": "até 12 toneladas úteis",
      "Recarga + Reabastecimento H₂":
        "até 160 kW (recarga rápida CCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~70–80 minutos (20–80%)",
      "País de Origem": "Alemanha",
      "Uso Ideal": "Transporte urbano e regional de distribuição elétrica",
      "IA Integrada":
        "Conectividade, monitoramento em tempo real e diagnóstico preditivo",
    },
  },

  // =========================================================
  // ÁSIA
  // =========================================================
  {
    slug: "byd-etm-asia-2050",
    name: "BYD ETM 2050 (Ásia)",
    file: "/images/trucks-eletricos/byd-etm-asia.jpg",
    description:
      "Versão asiática do BYD ETM com tecnologia Blade, voltada a frotas regionais elétricas.",
    specs: {
      "Marca / Modelo": "BYD ETM 2050",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "280–320 km (carga média)",
      Bateria:
        "350 kWh – Lítio-Ferro-Fosfato (LFP) – Tecnologia Blade",
      Potência: "310 kW (pico) / 230 kW (contínua)",
      Torque: "2.100 Nm",
      "Peso Bruto Total (PBT)": "18 toneladas",
      Configuração: "4x2 / 6x2",
      "Capacidade de Carga": "até 11 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 180 kW (recarga rápida CCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~1h15 (20–80%)",
      "País de Origem": "China",
      "Uso Ideal": "Transporte urbano e regional de médio porte",
    },
  },
  {
    slug: "jac-iev1200t-2050",
    name: "JAC iEV1200T 2050",
    file: "/images/trucks-eletricos/jac-iev1200t.jpg",
    description:
      "Caminhão elétrico leve-médio da JAC Motors, ideal para entregas urbanas e serviços.",
    specs: {
      "Marca / Modelo": "JAC iEV1200T 2050",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "250–280 km (ciclo urbano)",
      Bateria: "142 kWh – Lítio-Ferro-Fosfato (LFP)",
      Potência: "96 kW (pico) / 80 kW (contínua)",
      Torque: "415 Nm",
      "Peso Bruto Total (PBT)": "7,5 toneladas",
      Configuração: "4x2",
      "Capacidade de Carga": "até 4 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 100 kW (recarga rápida CCS2; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~1h10 (20–80%)",
      "País de Origem": "China",
      "Uso Ideal":
        "Distribuição urbana, frotas de serviços e delivery sustentável",
    },
  },
  {
    slug: "sany-electric-2050",
    name: "SANY Electric 2050",
    file: "/images/trucks-eletricos/sany-electric.jpg",
    description:
      "Caminhão superpesado elétrico para mineração e logística extremamente exigente.",
    specs: {
      "Marca / Modelo": "SANY Electric 2050",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "500–600 km (plena carga)",
      Bateria: "800 kWh – Lítio-Ferro-Fosfato (LFP) de alta densidade",
      Potência: "550 kW (pico) / 420 kW (contínua)",
      Torque: "4.000 Nm",
      "Peso Bruto Total (PBT)": "49 toneladas",
      Configuração: "6x4 / 8x4",
      "Capacidade de Carga": "até 28 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 600 kW (MCS/GB-T; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~40 minutos (20–80%)",
      "País de Origem": "China",
      "Uso Ideal":
        "Transporte pesado, mineração e logística interurbana elétrica",
      "IA Integrada":
        "Condução autônoma nível 4 + diagnóstico preditivo",
    },
  },
  {
    slug: "hino-z-ev-2050",
    name: "Hino Z EV 2050",
    file: "/images/trucks-eletricos/hino-z-ev.jpg",
    description:
      "Caminhão elétrico japonês com foco em tecnologia embarcada e operação inteligente.",
    specs: {
      "Marca / Modelo": "Hino Z EV 2050",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "400–450 km (ciclo combinado)",
      Bateria: "480 kWh – Íons de Lítio (NMC)",
      Potência: "420 kW (pico) / 340 kW (contínua)",
      Torque: "2.700 Nm",
      "Peso Bruto Total (PBT)": "18 toneladas",
      Configuração: "4x2 / 6x2",
      "Capacidade de Carga": "até 10 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 250 kW (CHAdeMO / CCS2; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~70 minutos (20–80%)",
      "País de Origem": "Japão",
      "Uso Ideal": "Transporte urbano e regional inteligente",
      "IA Integrada": "Condução semiautônoma nível 3",
    },
  },
  {
    slug: "isuzu-giga-electric-2050",
    name: "Isuzu Giga Electric 2050",
    file: "/images/trucks-eletricos/isuzu-giga-electric.jpg",
    description:
      "Plataforma pesada da Isuzu para rotas de longa distância totalmente elétricas.",
    specs: {
      "Marca / Modelo": "Isuzu Giga Electric 2050",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "500 km (modo carga total)",
      Bateria: "620 kWh – Íons de Lítio (NMC)",
      Potência: "480 kW (pico) / 400 kW (contínua)",
      Torque: "3.200 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "6x2 / 6x4",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 400 kW (CCS2/CHAdeMO; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~55 minutos (20–80%)",
      "País de Origem": "Japão",
      "Uso Ideal":
        "Transporte de longa distância e logística sustentável",
      "IA Integrada":
        "Condução autônoma nível 4 com radar 3D e LiDAR",
    },
  },

  // =========================================================
  // AMÉRICAS
  // =========================================================
  {
    slug: "tesla-semi-2050",
    name: "Tesla Semi 2050",
    file: "/images/trucks-eletricos/tesla-semi.jpg",
    description:
      "Cavalo-mecânico elétrico de alto desempenho, com grande autonomia e integração de IA para rotas rodoviárias.",
    specs: {
      "Marca / Modelo": "Tesla Semi 2050",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "800 km (modo longo alcance)",
      Bateria: "900 kWh – Lítio-Níquel-Manganês-Cobalto (NMC)",
      Potência: "750 kW (pico) / 500 kW (contínua)",
      Torque: "5.000 Nm (total no conjunto de eixos)",
      "Peso Bruto Total (PBT)": "40 toneladas",
      Configuração: "6x4",
      "Capacidade de Carga": "até 20 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 1 MW (Megacharger; não utiliza H₂)",
      "Tempo Total de Reabastecimento":
        "~30 minutos (20–80% em infraestrutura Megacharger)",
      "País de Origem": "Estados Unidos",
      "Uso Ideal":
        "Transporte de longa distância com IA integrada e alta eficiência aerodinâmica",
      "IA Integrada":
        "Piloto autônomo nível 4 e telemetria preditiva",
    },
  },
  {
    slug: "nikola-tre-electric-2050",
    name: "Nikola Tre Electric 2050",
    file: "/images/trucks-eletricos/nikola-tre-electric.jpg",
    description:
      "Plataforma elétrica da Nikola para rotas rodoviárias de média e longa distância nas Américas.",
    specs: {
      "Marca / Modelo": "Nikola Tre Electric 2050",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "720 km (modo highway)",
      Bateria: "733 kWh – Íons de Lítio (NMC)",
      Potência: "645 kW (pico) / 480 kW (contínua)",
      Torque: "3.600 Nm",
      "Peso Bruto Total (PBT)": "42 toneladas",
      Configuração: "6x4",
      "Capacidade de Carga": "até 21 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 500 kW (CCS2/MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~50 minutos (20–80%)",
      "País de Origem": "Estados Unidos",
      "Uso Ideal":
        "Transporte de longa distância e intermodal elétrico",
      "IA Integrada":
        "Sistema de IA autônoma + sensores 360º com navegação adaptativa",
    },
  },
  {
    slug: "freightliner-ecascadia-2050",
    name: "Freightliner eCascadia 2050",
    file: "/images/trucks-eletricos/freightliner-ecascadia.jpg",
    description:
      "Ícone da eletrificação pesada nos EUA, ideal para rotas regionais e distribuição de alta capacidade.",
    specs: {
      "Marca / Modelo": "Freightliner eCascadia 2050",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "400–500 km (carga total)",
      Bateria: "475–550 kWh – Íons de Lítio (NMC)",
      Potência: "470 kW (pico) / 350 kW (contínua)",
      Torque: "2.700 Nm",
      "Peso Bruto Total (PBT)": "36–37 toneladas",
      Configuração: "4x2 / 6x2",
      "Capacidade de Carga": "até 20 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 350 kW (CCS2/MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~70 minutos (20–80%)",
      "País de Origem": "Estados Unidos",
      "Uso Ideal":
        "Transporte regional e distribuição elétrica urbana",
      "IA Integrada":
        "Frota conectada + IA preditiva de rotas",
    },
  },

  // =========================================================
  // FUTURO / CONCEITUAIS
  // =========================================================
  {
    slug: "volvo-fh-aero-electric-2050",
    name: "Volvo FH Aero Electric 2050",
    file: "/images/trucks-eletricos/volvo-fh-aero-electric.jpg",
    description:
      "Conceito aerodinâmico de longa distância da Volvo, com baterias de estado sólido e IA avançada.",
    specs: {
      "Marca / Modelo": "Volvo FH Aero Electric 2050",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "650–700 km (modo Highway Pro GII)",
      Bateria: "800 kWh – Íons de Lítio Sólido (Solid-State)",
      Potência: "650 kW (pico) / 500 kW (contínua)",
      Torque: "4.200 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "6x4",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 1 MW (MCS 2050; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~30 minutos (20–80%)",
      "País de Origem": "Suécia",
      "Uso Ideal":
        "Transporte intercontinental com IA e aerodinâmica ativa",
      "IA Integrada":
        "Piloto autônomo nível 5 + otimização climática e de rota",
    },
  },
  {
    slug: "man-hydrogen-electric-2050",
    name: "MAN Hydrogen-Electric 2050",
    file: "/images/trucks-eletricos/man-hydrogen-electric.jpg",
    description:
      "Conceito híbrido hidrogênio + elétrico, voltado a rotas intercontinentais com máxima autonomia.",
    specs: {
      "Marca / Modelo": "MAN Hydrogen-Electric 2050",
      "Tipo de Propulsão":
        "Híbrido: Célula de Hidrogênio + Motor Elétrico",
      Autonomia: "1.000 km (modo combinado)",
      Bateria:
        "400 kWh – Íons de Lítio (suporte ao sistema híbrido)",
      "Célula de Combustível":
        "120 kW – Hidrogênio comprimido (H₂ de alta pureza)",
      "Potência Total Combinada":
        "550 kW (pico) / 420 kW (contínua)",
      Torque: "3.800 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "6x2 / 6x4",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "Bateria 400 kW (CCS2) + Tanques H₂ 700 bar (~10 min)",
      "Tempo Total de Reabastecimento": "~40 minutos",
      "País de Origem": "Alemanha",
      "Uso Ideal":
        "Transporte interestadual e intercontinental sustentável",
      "IA Integrada":
        "Gerenciamento inteligente híbrido + IA autônoma nível 5",
    },
  },
];

// Função auxiliar
export function getElectricTruckBySlug(slug: string) {
  return electricTrucks.find((t) => t.slug === slug);
}
