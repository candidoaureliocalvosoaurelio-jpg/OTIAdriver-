// data/trucks.ts
// Caminhões — mapeamento EXATO com /app/caminhoes

export type Truck = {
  slug: string;
  name: string;
  file: string; // caminho dentro de /public
  description?: string;
  specs?: Record<string, string>;
};

export const trucks: Truck[] = [
  // 1) DAF CF Semipesado
  {
    slug: "daf-cf-semipesado",
    name: "DAF CF Semipesado",
    file: "/images/trucks/daf-cf-semipesado.jpg",
    description:
      "Caminhão rígido semipesado da DAF, com motor PACCAR PX-7 Euro 6 e configurações 6x2 e 8x2 para distribuição urbana, regional e aplicações vocacionais.",
    specs: {
      Motor: "PACCAR PX-7 6,7 L",
      Potência: "faixas de 260–310 cv",
      Configuração: "FAS 6x2 e FAC 8x2 rígido",
      Aplicação:
        "Distribuição urbana/regional, bebidas, alimentos, carga seca, materiais de construção e agro",
    },
  },

  // 2) DAF XF OFF-ROAD
  {
    slug: "daf-xf-offroad",
    name: "DAF XF Off-Road",
    file: "/images/trucks/daf-xf-offroad.jpg",
    description:
      "Versão reforçada do DAF XF para mineração, florestal, cana e operações severas, com chassi reforçado e trem de força preparado para alto esforço.",
    specs: {
      Motor: "PACCAR MX-13",
      Potência: "530 cv",
      Tração: "6x4",
      Suspensão: "Heavy-Duty / reforçada",
      Aplicação: "Mineração, florestal, cana e operações severas off-road",
    },
  },

  // 3) DAF XF
  {
    slug: "daf-xf",
    name: "DAF XF",
    file: "/images/trucks/daf-xf.jpg",
    description:
      "Caminhão rodoviário de longa distância com foco em aerodinâmica, conforto e eficiência.",
    specs: {
      Motor: "PACCAR MX-13",
      Potência: "até 530 cv",
      Transmissão: "TraXon 12v",
      Aplicação: "Transporte rodoviário nacional e internacional",
    },
  },

  // 4) IVECO S-WAY 540 6x4
  {
    slug: "iveco-s-way-540-6x4",
    name: "Iveco S-Way 540 6x4",
    file: "/images/trucks/iveco-s-way-540-6x4.jpg",
    description:
      "Extrapesado rodoviário da Iveco com foco em aerodinâmica, economia de combustível, conectividade e conforto para longa distância.",
    specs: {
      Motor: "FPT Cursor 13 – 12,9 litros",
      Potência: "540 cv",
      Torque: "cerca de 2.450 Nm",
      Transmissão: "Automatizada Hi-Tronix, 12 marchas",
      Aplicação: "Longa distância / composições extrapesadas 6x4",
    },
  },

  // 5) IVECO Tector 24-280 6x2 e 8x2
  {
    slug: "iveco-tector-24280-6x2-8x2",
    name: "Iveco Tector 24-280 (6x2 e 8x2)",
    file: "/images/trucks/iveco-tector-24280-6x2-8x2.jpg",
    description:
      "Semipesado IVECO voltado para distribuição urbana, entregas intermunicipais e aplicações vocacionais nas versões 6x2 e 8x2.",
    specs: {
      Motor: "6 cilindros eletrônico – cerca de 280 cv",
      Potência: "280 cv",
      Transmissão: "Opções manual ou automatizada",
      Aplicação:
        "Distribuição urbana/intermunicipal e usos vocacionais (basculante, coleta, serviços públicos)",
    },
  },

  // 6) MERCEDES ACTROS EVOLUTION 2653 S 6x4
  {
    slug: "mercedes-actros-evolution-2653s-6x4",
    name: "Mercedes-Benz Actros Evolution 2653 S 6x4",
    file: "/images/trucks/mercedes-actros-evolution-2653s-6x4.jpg",
    description:
      "Linha premium da Mercedes-Benz para longa distância, com tecnologia avançada e segurança ativa.",
    specs: {
      Motor: "OM 471",
      Potência: "até 530 cv",
      Transmissão: "Powershift",
      Aplicação: "Longa distância / logística pesada",
    },
  },

  // 7) MERCEDES AROCS 3353 S 6x4
  {
    slug: "mercedes-arocs-3353s-6x4",
    name: "Mercedes-Benz Arocs 3353 S 6x4",
    file: "/images/trucks/mercedes-arocs-3353s-6x4.jpg",
    description:
      "Cavalo mecânico vocacional para mineração, construção pesada e operações severas.",
    specs: {
      Motor: "OM 471 – 530 cv",
      Tração: "6x4 com redução nos cubos",
      Transmissão: "PowerShift Advanced",
      Aplicação: "Mineração / Construção pesada / Florestal",
    },
  },

  // 8) MERCEDES ATEGO 2433 P 6x2
  {
    slug: "mercedes-atego-2433p-6x2",
    name: "Mercedes-Benz Atego 2433 P 6x2",
    file: "/images/trucks/mercedes-atego-2433p-6x2.jpg",
    description:
      "Caminhão rígido semipesado 6x2 com foco em alta carga útil e economia.",
    specs: {
      Motor: "OM 926 – 6 cilindros em linha",
      Potência: "cerca de 321 cv",
      Configuração: "6x2 rígido com eixo auxiliar levantável",
      Aplicação:
        "Distribuição regional/urbana (baú, sider, tanque, carga geral)",
    },
  },

  // 9) MERCEDES G340 (subpasta: mercedes/g340)
  {
    slug: "mercedes/g340",
    name: "Mercedes-Benz G340",
    file: "/images/trucks/mercedes-g340.jpg",
    description:
      "Conteúdo técnico do Mercedes-Benz G340, com foco em aplicação, características e operação (conforme página do projeto).",
    specs: {
      Aplicação: "Operações mistas / vocacional (conforme versão)",
      Foco: "Conteúdo técnico e operação",
    },
  },

  // 10) SCANIA P320 8x2
  {
    slug: "scania-p320-8x2",
    name: "Scania P320 8x2",
    file: "/images/trucks/scania-p320-8x2.jpg",
    description:
      "Caminhão rígido 8x2 da Scania para distribuição regional e urbana de alto volume, com cabine P, motor D9 320 hp e foco em máxima carga útil.",
    specs: {
      Motor: "D9 – 6 cilindros",
      Potência: "320 hp",
      Configuração: "8x2 rígido com eixo auxiliar levantável",
      Aplicação:
        "Distribuição regional/urbana (bebidas, alimentos, baú, sider)",
    },
  },

  // 11) SCANIA SUPER XT
  {
    slug: "scania-super-xt",
    name: "Scania Super XT",
    file: "/images/trucks/scania-super-xt.jpg",
    description:
      "Linha vocacional Scania SUPER XT, desenvolvida para operações severas como construção pesada, mineração e florestal, combinando trem de força Super com robustez estrutural.",
    specs: {
      Motor: "Família Super (6L / V8)",
      Potência: "420–770 hp",
      Transmissão: "Opticruise HD (Heavy Duty)",
      Aplicação: "Construção pesada, mineração e florestal",
    },
  },

  // 12) SCANIA SUPER
  {
    slug: "scania-super",
    name: "Scania Super",
    file: "/images/trucks/scania-super.jpg",
    description:
      "Plataforma Scania Super de 13 litros, referência em eficiência, torque em baixa rotação e TCO otimizado.",
    specs: {
      Motor: "Scania Super 13L",
      Potência: "420–560 hp",
      Torque: "2.300–2.800 Nm",
      Transmissão: "Opticruise",
      Aplicação: "Longa distância e cargas pesadas",
    },
  },

  // 13) VOLKSWAGEN CONSTELLATION 26.320 6x2
  {
    slug: "volkswagen-constellation-26320-6x2",
    name: "Volkswagen Constellation 26.320 6x2",
    file: "/images/trucks/volkswagen-constellation-26320-6x2.jpg",
    description:
      "Caminhão semipesado 6x2 com eixo auxiliar levantável, motor MAN D08 de 320 cv e foco em distribuição regional e urbana de alto volume.",
    specs: {
      Motor: "MAN D08 – 6 cilindros em linha",
      Potência: "320 cv",
      Torque: "1.200 Nm",
      Transmissão: "Manual 9 marchas ou automatizada",
      Aplicação:
        "Distribuição regional/urbana (baú, sider, tanque, carga geral)",
    },
  },

  // 14) VOLKSWAGEN METEOR HIGHLINE 29.530
  {
    slug: "volkswagen-meteor-highline-29530",
    name: "Volkswagen Meteor Highline 29.530",
    file: "/images/trucks/volkswagen-meteor-highline-29530.jpg",
    description:
      "Versão premium do Meteor extrapesado, com motor MAN de 530 cv, painel digital, multimídia avançada e foco em conectividade e eficiência para longas distâncias.",
    specs: {
      Motor: "MAN D26 – 13 litros",
      Potência: "530 cv",
      Torque: "até 2.600 Nm",
      Transmissão: "Automatizada V-Tronic (ZF 12TX)",
      Aplicação: "Longa distância / extrapesado",
    },
  },
];

// Helper
export function getTruckBySlug(slug: string) {
  return trucks.find((t) => t.slug === slug);
}
