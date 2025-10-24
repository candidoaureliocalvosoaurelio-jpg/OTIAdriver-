// data/trucks.ts
export type Truck = {
  slug: string;
  name: string;
  file: string;
  // Lista de especificações opcionais
  specs?: Record<string, string>;
};

export const trucks: Truck[] = [
  {
    slug: "volvo-fh-2025",
    name: "Volvo FH",
    file: "/images/trucks/volvo.jpg",
    specs: {
      Motor: "D13K 540",
      Potência: "540 cv",
      Transmissão: "I-Shift automatizada",
      PesoBruto: "45 toneladas",
    },
  },
  {
    slug: "daf-xf-2025",
    name: "DAF XF",
    file: "/images/trucks/daf_brasil_blue.jpg",
    specs: {
      Motor: "PACCAR MX-13",
      Potência: "530 cv",
      Transmissão: "TraXon 12 velocidades",
      PesoBruto: "44 toneladas",
    },
  },
  {
    slug: "mercedes-actros-2025",
    name: "Mercedes Actros",
    file: "/images/trucks/mercedes.jpg",
    specs: {
      Motor: "OM 471 Euro 6",
      Potência: "530 cv",
      Transmissão: "Powershift 3 automatizada",
      PesoBruto: "44 toneladas",
    },
  },
  {
    slug: "vw-meteor-2025",
    name: "VW Meteor",
    file: "/images/trucks/meteor.jpg",
    specs: {
      Motor: "MAN D26",
      Potência: "520 cv",
      Transmissão: "ZF TraXon automatizada",
      PesoBruto: "45 toneladas",
    },
  },
  {
    slug: "iveco-sway-2025",
    name: "Iveco S-Way",
    file: "/images/trucks/iveco.jpg",
    specs: {
      Motor: "Cursor 13",
      Potência: "530 cv",
      Transmissão: "Hi-Tronix automatizada",
      PesoBruto: "44 toneladas",
    },
  },
];

// 🔧 Função para buscar caminhão pelo slug (URL)
export function getTruckBySlug(slug: string): Truck | undefined {
  return trucks.find((t) => t.slug === slug);
    }
