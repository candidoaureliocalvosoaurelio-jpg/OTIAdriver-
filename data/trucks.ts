export type Truck = {
  slug: string;
  name: string;
  file: string;                 // caminho dentro de /public
  description?: string;
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
      Transmissão: "I-Shift",
      PesoBruto: "45 t",
    },
  },

  // ⭐ NOVO — VOLVO FMX
  {
    slug: "volvo-fmx",
    name: "Volvo FMX",
    file: "/images/trucks/volvo-fmx.jpg",
    specs: {
      Motor: "D13K 500",
      Potência: "500 cv",
      Transmissão: "I-Shift Off-Road",
      PesoBruto: "58 t",
    },
  },

  {
    slug: "daf-xf-2025",
    name: "DAF XF",
    file: "/images/trucks/daf_brasil_blue.jpg",
    specs: {
      Motor: "PACCAR MX-13",
      Potência: "530 cv",
      Transmissão: "TraXon 12v",
      PesoBruto: "44 t",
    },
  },
  {
    slug: "mercedes-actros-2025",
    name: "Mercedes",
    file: "/images/trucks/mercedes.jpg",
    specs: {
      Motor: "OM 471",
      Potência: "530 cv",
      Transmissão: "Powershift",
      PesoBruto: "44 t",
    },
  },

  {
    slug: "volkswagen-meteor-2025",
    name: "Volkswagen Caminhões",
    file: "/images/trucks/meteor.jpg",
    specs: {
      Motor: "MAN D26",
      Potência: "520 cv",
      Transmissão: "Automatizada",
      PesoBruto: "46 t",
    },
  },
  {
    slug: "iveco-s-way-2025",
    name: "Iveco",
    file: "/images/trucks/iveco.jpg",
    specs: {
      Motor: "Cursor 13",
      Potência: "570 cv",
      Transmissão: "Hi-Tronix 12v",
      PesoBruto: "44 t",
    },
  },
  {
    slug: "scania-2025",
    name: "Scania",
    file: "/images/trucks/scania.jpg",
    specs: {
      Motor: "Super 13L",
      Potência: "560 cv",
      Transmissão: "Opticruise",
      PesoBruto: "44 t",
    },
  },
];

// Helper opcional
export function getTruckBySlug(slug: string) {
  return trucks.find((t) => t.slug === slug);
}
