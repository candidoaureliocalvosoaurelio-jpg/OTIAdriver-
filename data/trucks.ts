// data/trucks.ts
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
    name: "Volvo FH 2025",
    file: "/images/trucks/volvo.jpg",
    specs: {
      Motor: "D13K 540",
      Potência: "540 cv",
      Transmissão: "I-Shift",
      PesoBruto: "45 t",
    },
  },
  {
    slug: "daf-xf-2025",
    name: "DAF XF 2025",
    file: "/images/trucks/daf.jpg",
    specs: {
      Motor: "PACCAR MX-13",
      Potência: "530 cv",
      Transmissão: "TraXon 12v",
      PesoBruto: "44 t",
    },
  },
  {
    slug: "mercedes-actros-2025",
    name: "Mercedes Actros 2025",
    file: "/images/trucks/mercedes.jpg",
    specs: {
      Motor: "OM 471",
      Potência: "530 cv",
      Transmissão: "Powershift",
      PesoBruto: "44 t",
    },
  },

  // ➕ NOVOS (aparecem na home)
  {
    slug: "volkswagen-meteor-2025",
    name: "Volkswagen Meteor 2025",
    file: "/images/trucks/volkswagen.jpg", // veja a etapa 2
    specs: {
      Motor: "MAN D26",
      Potência: "520 cv",
      Transmissão: "Automatizada",
      PesoBruto: "46 t",
    },
  },
  {
    slug: "iveco-s-way-2025",
    name: "Iveco S-Way 2025",
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
    name: "Scania 2025",
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
