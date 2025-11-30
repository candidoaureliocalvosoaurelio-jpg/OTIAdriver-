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
      Potência: "490 kW (660 cv)",
      Autonomia: "300 km",
      Bateria: "540 kWh",
      Torque: "2400 Nm",
    },
  },
  {
    slug: "daf-xf-electric-2025",
    name: "DAF XF Electric 2025",
    file: "/images/trucks-eletricos/daf-xf-electric.jpg",
    description:
      "Modelo elétrico premium com design aerodinâmico, baixo ruído e performance otimizada.",
    specs: {
      Potência: "480 kW",
      Autonomia: "320 km",
      Bateria: "525 kWh",
      Torque: "2300 Nm",
    },
  },
  {
    slug: "mercedes-eactros-2025",
    name: "Mercedes eActros 2025",
    file: "/images/trucks-eletricos/mercedes-eactros.jpg",
    description:
      "O eActros é o caminhão elétrico de alto desempenho da Mercedes-Benz, voltado ao transporte urbano e regional.",
    specs: {
      Potência: "400 kW (536 cv)",
      Autonomia: "400 km",
      Bateria: "600 kWh",
      Torque: "2400 Nm",
    },
  },
  {
    slug: "volkswagen-e-delivery-2025",
    name: "Volkswagen e-Delivery 2025",
    file: "/images/trucks-eletricos/vw-e-delivery.jpg",
    description:
      "Produzido no Brasil, o VW e-Delivery é referência em sustentabilidade e eficiência urbana.",
    specs: {
      Potência: "300 kW (408 cv)",
      Autonomia: "250 km",
      Bateria: "350 kWh",
      Torque: "2200 Nm",
    },
  },
  {
    slug: "iveco-s-way-electric-2025",
    name: "Iveco S-Way Electric 2025",
    file: "/images/trucks-eletricos/iveco-sway-electric.jpg",
    description:
      "A Iveco aposta em potência e conforto no transporte pesado 100% elétrico.",
    specs: {
      Potência: "490 kW (660 cv)",
      Autonomia: "350 km",
      Bateria: "560 kWh",
      Torque: "2400 Nm",
    },
  },
  {
    slug: "scania-super-electric-2025",
    name: "Scania Super Electric 2025",
    file: "/images/trucks-eletricos/scania-super-electric.jpg",
    description:
      "O novo Scania elétrico combina força, autonomia e conectividade total para o transporte sustentável.",
    specs: {
      Potência: "500 kW (680 cv)",
      Autonomia: "350 km",
      Bateria: "600 kWh",
      Torque: "2500 Nm",
    },
  },
  {
    slug: "hino-z-ev-2025",
    name: "Hino Z EV 2025",
    file: "/images/trucks-eletricos/hino-z-ev.jpg",
    description:
      "Caminhão elétrico japonês voltado ao transporte urbano de alta eficiência e baixo custo operacional.",
    specs: {
      Potência: "360 kW",
      Autonomia: "280 km",
      Bateria: "420 kWh",
    },
  },
  {
    slug: "ud-quester-electric-2025",
    name: "UD Quester Electric 2025",
    file: "/images/trucks-eletricos/ud-quester-electric.jpg",
    description:
      "Com design robusto e tecnologia Nissan, o UD Quester elétrico entrega força e sustentabilidade.",
    specs: {
      Potência: "380 kW",
      Autonomia: "300 km",
      Bateria: "450 kWh",
    },
  },
  {
    slug: "dongfeng-electric-2025",
    name: "Dongfeng Electric 2025",
    file: "/images/trucks-eletricos/dongfeng-electric.jpg",
    description:
      "O gigante chinês aposta na mobilidade elétrica com foco em transporte de carga pesada e autonomia estendida.",
    specs: {
      Potência: "450 kW",
      Autonomia: "350 km",
      Bateria: "500 kWh",
    },
  },
  {
    slug: "freightliner-ecascadia-2025",
    name: "Freightliner eCascadia 2025",
    file: "/images/trucks-eletricos/freightliner-ecascadia.jpg",
    description:
      "Símbolo da eletrificação nos EUA, o eCascadia é referência em potência e conforto para longas rotas.",
    specs: {
      Potência: "470 kW (630 cv)",
      Autonomia: "400 km",
      Bateria: "550 kWh",
    },
  },
  {
    slug: "byd-8tt-2025",
    name: "BYD 8TT 2025",
    file: "/images/trucks-eletricos/byd-8tt.jpg",
    description:
      "O BYD 8TT se destaca pela confiabilidade e autonomia — líder mundial em caminhões elétricos.",
    specs: {
      Potência: "430 kW",
      Autonomia: "350 km",
      Bateria: "500 kWh",
    },
  },
  {
    slug: "tesla-semi-2025",
    name: "Tesla Semi 2025",
    file: "/images/trucks-eletricos/tesla-semi.jpg",
    description:
      "Com design futurista, o Tesla Semi redefine o transporte pesado com performance de supercarro.",
    specs: {
      Potência: "820 kW (1100 cv)",
      Autonomia: "800 km",
      Bateria: "900 kWh",
    },
  },
  {
    slug: "nikola-tre-bev-2025",
    name: "Nikola Tre BEV 2025",
    file: "/images/trucks-eletricos/nikola-tre-bev.jpg",
    description:
      "O Nikola Tre é movido por energia limpa e equipado com tecnologias de direção autônoma.",
    specs: {
      Potência: "645 kW",
      Autonomia: "530 km",
      Bateria: "753 kWh",
    },
  },
];

// Função auxiliar
export function getElectricTruckBySlug(slug: string) {
  return electricTrucks.find((t) => t.slug === slug);
}
