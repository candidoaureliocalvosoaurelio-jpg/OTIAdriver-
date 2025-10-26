// data/trucks.ts
export type Truck = {
  slug: string;
  name: string;
  file: string; // /public/images/trucks
  specs?: {
    motor?: string;
    potencia?: string;
    torque?: string;
    transmissao?: string;
    pbt_t?: string;
    configuracao?: string;
    consumo?: string;
    observacoes?: string;
  };
};

export const trucks: Truck[] = [
  {
    slug: "volvo-fh",
    name: "Volvo",
    file: "/images/trucks/volvo.jpg",
    specs: {
      motor: "D13",
      potencia: "460–540 cv",
      torque: "2.300–2.700 Nm",
      configuracao: "4x2 / 6x2 / 6x4",
    },
  },
  {
    slug: "daf-xf",
    name: "DAF",
    file: "/images/trucks/daf_brasil_blue.jpg",
    specs: {
      motor: "MX-13",
      potencia: "480–530 cv",
      torque: "2.600–2.700 Nm",
      configuracao: "4x2 / 6x2",
    },
  },
  {
    slug: "mercedes-actros",
    name: "Mercedes",
    file: "/images/trucks/mercedes.jpg",
    specs: {
      motor: "OM 471",
      potencia: "480–530 cv",
      torque: "2.500–2.600 Nm",
      configuracao: "4x2 / 6x2 / 6x4",
    },
  },
  {
    slug: "vw-meteor",
    name: "Volkswagen",
    file: "/images/trucks/meteor.jpg",
    specs: {
      motor: "MAN D26",
      potencia: "460–520 cv",
      torque: "2.300–2.500 Nm",
      configuracao: "6x2 / 6x4",
    },
  },
  {
    slug: "iveco-sway",
    name: "Iveco",
    file: "/images/trucks/iveco.jpg",
    specs: {
      motor: "Cursor 13",
      potencia: "480–570 cv",
      torque: "2.500–2.800 Nm",
      configuracao: "4x2 / 6x2 / 6x4",
    },
  },
  {
    slug: "scania-2025",
    name: "Scania",
    file: "/images/trucks/scania.jpg",
    specs: {
      motor: "Super",
      potencia: "460–560 cv",
      torque: "2.500–2.800 Nm",
      configuracao: "4x2 / 6x2 / 6x4",
    },
  },
];

export function getTruckBySlug(slug: string) {
  return trucks.find((t) => t.slug === slug);
}
