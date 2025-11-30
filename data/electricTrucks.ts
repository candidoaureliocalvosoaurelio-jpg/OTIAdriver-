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
  {
    slug: "volvo-fh-electric-2025",
    name: "Volvo FH Electric 2025",
    file: "/images/trucks-eletricos/volvo-fh-electric.jpg",
    description:
      "Caminhão elétrico pesado da Volvo, ideal para longas distâncias com emissão zero e alta eficiência energética.",
    specs: {
      "Marca / Modelo": "Volvo FH Electric 2025",
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
      "País de Origem": "Suécia 🇸🇪",
      "Uso Ideal": "Transporte pesado regional e internacional com zero emissões",
    },
  },
  {
    slug: "daf-xf-electric-2025",
    name: "DAF XF Electric 2025",
    file: "/images/trucks-eletricos/daf-xf-electric.jpg",
    description:
      "Modelo elétrico premium com design aerodinâmico, baixo ruído e performance otimizada.",
    specs: {
      "Marca / Modelo": "DAF XF Electric 2025",
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
      "País de Origem": "Holanda 🇳🇱",
      "Uso Ideal": "Transporte nacional e internacional com emissões zero",
    },
  },
  {
    slug: "mercedes-eactros-2025",
    name: "Mercedes eActros 2025",
    file: "/images/trucks-eletricos/mercedes-eactros.jpg",
    description:
      "O eActros é o caminhão elétrico de alto desempenho da Mercedes-Benz, voltado ao transporte urbano e regional.",
    specs: {
      "Marca / Modelo": "Mercedes-Benz eActros 400 (2025)",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "400 km (carga total – ciclo urbano/regional)",
      Bateria:
        "448 kWh (4 módulos de 112 kWh) – Íons de Lítio (NMC – Níquel-Manganês-Cobalto)",
      Potência: "400 kW (pico) / 330 kW (contínua)",
      Torque: "3.000 Nm",
      "Peso Bruto Total (PBT)": "27 toneladas",
      Configuração: "4x2 / 6x2",
      "Capacidade de Carga": "até 12 toneladas úteis",
      "Recarga + Reabastecimento H₂":
        "até 160 kW (recarga rápida CCS Combo 2; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~70–80 minutos (20–80%)",
      "País de Origem": "Alemanha 🇩🇪",
      "Uso Ideal":
        "Transporte urbano e regional de distribuição elétrica com alto nível de conforto",
      "IA Integrada":
        "Conectividade de frota, monitoramento em tempo real e diagnóstico preditivo",
    },
  },
  {
    slug: "volkswagen-e-delivery-2025",
    name: "Volkswagen e-Delivery 2025",
    file: "/images/trucks-eletricos/vw-e-delivery.jpg",
    description:
      "Produzido no Brasil, o VW e-Delivery é referência em sustentabilidade e eficiência urbana.",
    specs: {
      "Marca / Modelo": "Volkswagen e-Delivery 2025",
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
      "País de Origem": "Brasil 🇧🇷",
      "Uso Ideal": "Distribuição urbana e logística sustentável de curta e média distância",
    },
  },
  {
    slug: "iveco-s-way-electric-2025",
    name: "Iveco S-Way Electric 2025",
    file: "/images/trucks-eletricos/iveco-sway-electric.jpg",
    description:
      "A Iveco aposta em potência e conforto no transporte pesado 100% elétrico.",
    specs: {
      "Marca / Modelo": "IVECO S-Way Electric 2025",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "500 km (carga total)",
      Bateria: "740 kWh – Íons de Lítio (NMC)",
      Potência: "480 kW (pico) / 400 kW (contínua)",
      Torque: "3.000 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "4x2 / 6x2 / 6x4",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 400 kW (recarga rápida MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~60 minutos (20–80%)",
      "País de Origem": "Itália 🇮🇹",
      "Uso Ideal":
        "Transporte rodoviário de longa distância com foco em conforto e eficiência energética",
    },
  },
  {
    slug: "scania-super-electric-2025",
    name: "Scania Super Electric 2025",
    file: "/images/trucks-eletricos/scania-super-electric.jpg",
    description:
      "O novo Scania elétrico combina força, autonomia e conectividade total para o transporte sustentável.",
    specs: {
      "Marca / Modelo": "Scania BEV 2025",
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
      "País de Origem": "Suécia 🇸🇪",
      "Uso Ideal":
        "Transporte pesado e logística regional totalmente elétrica com alta conectividade",
    },
  },
  {
    slug: "hino-z-ev-2025",
    name: "Hino Z EV 2025",
    file: "/images/trucks-eletricos/hino-z-ev.jpg",
    description:
      "Caminhão elétrico japonês voltado ao transporte urbano de alta eficiência e baixo custo operacional.",
    specs: {
      "Marca / Modelo": "Hino Z EV 2025",
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
      "País de Origem": "Japão 🇯🇵",
      "Uso Ideal": "Transporte urbano e regional inteligente",
      "IA Integrada": "Condução semiautônoma nível 3 e monitoramento de frota",
    },
  },
  {
    slug: "ud-quester-electric-2025",
    name: "UD Quester Electric 2025",
    file: "/images/trucks-eletricos/ud-quester-electric.jpg",
    description:
      "Com design robusto e tecnologia Nissan, o UD Quester elétrico entrega força e sustentabilidade.",
    specs: {
      "Marca / Modelo": "UD Quester Electric 2025",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "300 km (aplicações regionais)",
      Bateria: "450 kWh – Íons de Lítio (NMC)",
      Potência: "380 kW (pico) / 300 kW (contínua)",
      Torque: "2.500 Nm",
      "Peso Bruto Total (PBT)": "32–40 toneladas (varia por configuração)",
      Configuração: "6x2 / 6x4",
      "Capacidade de Carga": "até 20–22 toneladas (configuração rodoviária)",
      "Recarga + Reabastecimento H₂":
        "até 300 kW (recarga rápida CCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~70–80 minutos (20–80%)",
      "País de Origem": "Japão 🇯🇵 / Montagem em mercados asiáticos",
      "Uso Ideal":
        "Transporte regional pesado e operações de logística em mercados emergentes",
    },
  },
  {
    slug: "dongfeng-electric-2025",
    name: "Dongfeng Electric 2025",
    file: "/images/trucks-eletricos/dongfeng-electric.jpg",
    description:
      "O gigante chinês aposta na mobilidade elétrica com foco em transporte de carga pesada e autonomia estendida.",
    specs: {
      "Marca / Modelo": "Dongfeng Electric 2025",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "350 km (carga plena em ciclo misto)",
      Bateria: "500 kWh – Lítio-Ferro-Fosfato (LFP)",
      Potência: "450 kW (pico) / 360 kW (contínua)",
      Torque: "3.000 Nm",
      "Peso Bruto Total (PBT)": "44 toneladas",
      Configuração: "6x2 / 6x4",
      "Capacidade de Carga": "até 22 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 350 kW (recarga rápida GB/T ou CCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~60–70 minutos (20–80%)",
      "País de Origem": "China 🇨🇳",
      "Uso Ideal":
        "Transporte de carga pesada com foco em autonomia estendida e custo operacional reduzido",
    },
  },
  {
    slug: "freightliner-ecascadia-2025",
    name: "Freightliner eCascadia 2025",
    file: "/images/trucks-eletricos/freightliner-ecascadia.jpg",
    description:
      "Símbolo da eletrificação nos EUA, o eCascadia é referência em potência e conforto para longas rotas.",
    specs: {
      "Marca / Modelo": "Freightliner eCascadia 2025",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "400–500 km (carga total)",
      Bateria: "475–550 kWh – Íons de Lítio (NMC)",
      Potência: "470 kW (pico) / 350 kW (contínua)",
      Torque: "2.700 Nm",
      "Peso Bruto Total (PBT)": "36–37 toneladas",
      Configuração: "4x2 / 6x2",
      "Capacidade de Carga": "até 20 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 350 kW (recarga rápida CCS2/MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~70 minutos (20–80%)",
      "País de Origem": "Estados Unidos 🇺🇸",
      "Uso Ideal":
        "Transporte regional e distribuição elétrica urbana em mercados da América do Norte",
      "IA Integrada": "Frota conectada + IA preditiva de rotas e consumo energético",
    },
  },
  {
    slug: "byd-8tt-2025",
    name: "BYD 8TT 2025",
    file: "/images/trucks-eletricos/byd-8tt.jpg",
    description:
      "O BYD 8TT se destaca pela confiabilidade e autonomia — líder mundial em caminhões elétricos.",
    specs: {
      "Marca / Modelo": "BYD 8TT 2025",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "350 km (aplicações rodoviárias regionais)",
      Bateria: "500 kWh – Lítio-Ferro-Fosfato (LFP) – Tecnologia Blade",
      Potência: "430 kW (pico) / 320 kW (contínua)",
      Torque: "2.600 Nm",
      "Peso Bruto Total (PBT)": "36–40 toneladas (configuração típica cavalo-mecânico)",
      Configuração: "6x4",
      "Capacidade de Carga": "até 22 toneladas (implemento compatível)",
      "Recarga + Reabastecimento H₂":
        "até 250–300 kW (recarga rápida CCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~70 minutos (20–80%)",
      "País de Origem": "China 🇨🇳",
      "Uso Ideal":
        "Transporte pesado regional, centros de distribuição e operações portuárias elétricas",
    },
  },
  {
    slug: "tesla-semi-2025",
    name: "Tesla Semi 2025",
    file: "/images/trucks-eletricos/tesla-semi.jpg",
    description:
      "Com design futurista, o Tesla Semi redefine o transporte pesado com performance de supercarro.",
    specs: {
      "Marca / Modelo": "Tesla Semi 2025",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "800 km (modo longo alcance)",
      Bateria: "900 kWh – Lítio-Níquel-Manganês-Cobalto (NMC)",
      Potência: "750 kW (pico) / 500 kW (contínua)",
      Torque: "5.000 Nm (total no conjunto de eixos)",
      "Peso Bruto Total (PBT)": "40 toneladas",
      Configuração: "6x4",
      "Capacidade de Carga": "até 20 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 1 MW (Megacharger – recarga rápida; não utiliza H₂)",
      "Tempo Total de Reabastecimento":
        "~30 minutos (20–80% em infraestrutura Megacharger)",
      "País de Origem": "Estados Unidos 🇺🇸",
      "Uso Ideal":
        "Transporte de longa distância com IA integrada e alta eficiência aerodinâmica",
      "IA Integrada":
        "Piloto autônomo nível 4, telemetria preditiva e integração completa com ecossistema Tesla",
    },
  },
  {
    slug: "nikola-tre-bev-2025",
    name: "Nikola Tre BEV 2025",
    file: "/images/trucks-eletricos/nikola-tre-bev.jpg",
    description:
      "O Nikola Tre é movido por energia limpa e equipado com tecnologias de direção autônoma.",
    specs: {
      "Marca / Modelo": "Nikola Tre BEV 2025",
      "Tipo de Propulsão": "100% Elétrico (BEV)",
      Autonomia: "720 km (modo highway)",
      Bateria: "733 kWh – Íons de Lítio (NMC)",
      Potência: "645 kW (pico) / 480 kW (contínua)",
      Torque: "3.600 Nm",
      "Peso Bruto Total (PBT)": "42 toneladas",
      Configuração: "6x4",
      "Capacidade de Carga": "até 21 toneladas",
      "Recarga + Reabastecimento H₂":
        "até 500 kW (recarga rápida CCS2/MCS; não utiliza H₂)",
      "Tempo Total de Reabastecimento": "~50 minutos (20–80%)",
      "País de Origem": "Estados Unidos 🇺🇸",
      "Uso Ideal":
        "Transporte de longa distância e operações intermodais com foco em sustentabilidade",
      "IA Integrada":
        "Sistema de IA autônoma, sensores 360º e navegação adaptativa com análise de rotas",
    },
  },
];

// Função auxiliar
export function getElectricTruckBySlug(slug: string) {
  return electricTrucks.find((t) => t.slug === slug);
}
