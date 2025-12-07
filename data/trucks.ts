// data/trucks.ts
// Caminhões a Diesel — cards da página inicial OTIAdriver

export type Truck = {
  slug: string;
  name: string;
  file: string; // caminho dentro de /public
  description?: string;
  specs?: Record<string, string>;
};

export const trucks: Truck[] = [
  // 1) VOLVO FH
  {
    slug: "volvo-fh-2025",
    name: "Volvo FH",
    file: "/images/trucks/volvo-fh.jpg",
    description:
      "Plataforma rodoviária premium da Volvo para longa distância, focada em segurança, conforto e baixo consumo.",
    specs: {
      Motor: "D13K 500–540",
      Potência: "até 540 cv",
      Transmissão: "I-Shift (automatizada)",
      Aplicação: "Longa distância / cargas pesadas",
    },
  },

  // 2) VOLVO FMX
  {
    slug: "volvo-fmx",
    name: "Volvo FMX",
    file: "/images/trucks/volvo-fmx.jpg",
    description:
      "Caminhão vocacional fora de estrada da Volvo, projetado para construção pesada, mineração e operações severas.",
    specs: {
      Motor: "D13K 420–500",
      Potência: "até 500 cv",
      Transmissão: "I-Shift com super-reduzidas",
      Aplicação: "Construção pesada / mineração / fora de estrada",
    },
  },

  // 3) VOLVO VM / VMX
  {
    slug: "volvo-vm",
    name: "Volvo VM / VMX",
    file: "/images/trucks/volvo-vm.jpg",
    description:
      "Linha versátil da Volvo para distribuição urbana, regional e aplicações vocacionais customizadas.",
    specs: {
      Motor: "D8K / D11K",
      Potência: "até ~360 cv",
      Transmissão: "I-Shift ou manual",
      Aplicação: "Distribuição, betoneira, coleta de resíduos, serviços",
    },
  },

  // 4) SCANIA SUPER
  {
    slug: "scania-super",
    name: "Scania Super",
    file: "/images/trucks/scania-super.jpg",
    description:
      "Plataforma Scania Super de 13 litros, referência em eficiência de combustível, torque alto em baixa rotação e TCO otimizado.",
    specs: {
      Motor: "Scania Super 13L",
      Potência: "420–560 hp",
      Torque: "2.300–2.800 Nm",
      Transmissão: "Opticruise",
      Aplicação: "Longa distância e cargas pesadas",
    },
  },

  // 4.1) SCANIA SUPER XT — vocacional
  {
    slug: "scania-super-xt",
    name: "Scania Super XT",
    file: "/images/trucks/scania-super-xt.jpg",
    description:
      "Linha vocacional Scania SUPER XT, desenvolvida para operações severas como construção pesada, mineração e florestal, combinando trem de força Super com robustez estrutural extrema.",
    specs: {
      Motor: "Família Super (6L / V8)",
      Potência: "420–770 hp",
      Torque: "alto em baixa rotação",
      Transmissão: "Opticruise HD (Heavy Duty)",
      Aplicação: "Construção pesada, mineração e operações florestais",
    },
  },

  // 4.2) SCANIA P320 8x2 — distribuição
  {
    slug: "scania-p320-8x2",
    name: "Scania P320 8x2",
    file: "/images/trucks/scania-p320-8x2.jpg",
    description:
      "Caminhão rígido 8x2 da Scania para distribuição regional e urbana de alto volume, com cabine P de fácil acesso, motor D9 320 hp e foco em máxima carga útil com baixo TCO.",
    specs: {
      Motor: "D9 – 6 cilindros",
      Potência: "320 hp",
      Configuração: "8x2 rígido com eixo auxiliar levantável",
      Aplicação:
        "Distribuição regional/urbana de alto volume (bebidas, alimentos, baú, sider)",
    },
  },

  // 5) DAF XF — rodoviário
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

  // 5.1) DAF XF OFF-ROAD
  {
    slug: "daf-xf-offroad",
    name: "DAF XF OFF-ROAD",
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

  // 5.2) DAF CF Semipesado
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

  // 6) MERCEDES ACTROS
  {
    slug: "Mercedes-Benz Actros Evolution 2653 S 6x4",
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

  // 7) VW METEOR
  {
    slug: "volkswagen-meteor-2025",
    name: "Volkswagen Meteor",
    file: "/images/trucks/meteor.jpg",
    description:
      "Cavalo-mecânico extrapesado da VW, projetado para robustez e produtividade.",
    specs: {
      Motor: "MAN D26",
      Potência: "até 520 cv",
      Transmissão: "Automatizada",
      Aplicação: "Rodoviário – carga geral",
    },
  },

  // 8) IVECO S-WAY
  {
    slug: "iveco-s-way-2025",
    name: "Iveco S-Way",
    file: "/images/trucks/iveco.jpg",
    description:
      "Linha rodoviária da Iveco com foco em aerodinâmica, economia e conforto.",
    specs: {
      Motor: "Cursor 13",
      Potência: "até 570 cv",
      Transmissão: "Hi-Tronix",
      Aplicação: "Longa distância e regional",
    },
  },
];

// Helper
export function getTruckBySlug(slug: string) {
  return trucks.find((t) => t.slug === slug);
}
