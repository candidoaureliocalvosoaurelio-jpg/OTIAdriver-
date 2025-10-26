export interface Truck {
  slug: string;
  name: string;
  file: string; // Caminho da imagem em /public/images/trucks
  description?: string;
  specs?: Record<string, string>; // Lista de especificações
}

export const trucks: Truck[] = [
  {
    slug: "volvo-fh-2025",
    name: "Volvo FH 2025",
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
    name: "DAF XF 2025",
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
    name: "Mercedes Actros 2025",
    file: "/images/trucks/mercedes.jpg",
    specs: {
      Motor: "OM 471",
      Potência: "530 cv",
      Transmissão: "Powershift 3 automatizada",
      PesoBruto: "45 toneladas",
    },
  },
  {
    slug: "vw-meteor-2025",
    name: "VW Meteor 2025",
    file: "/images/trucks/vw_meteor.jpg",
    specs: {
      Motor: "MAN D26 13L",
      Potência: "520 cv",
      Transmissão: "ZF TraXon 12 velocidades",
      PesoBruto: "45 toneladas",
    },
  },
  {
    slug: "iveco-s-way-2025",
    name: "Iveco S-Way 2025",
    file: "/images/trucks/iveco_sway.jpg",
    specs: {
      Motor: "Cursor 13 Euro 6",
      Potência: "570 cv",
      Transmissão: "HI-TRONIX 12 velocidades",
      PesoBruto: "44 toneladas",
    },
  },
  {
    slug: "scania-2025",
    name: "Scania 2025",
    file: "/images/trucks/scania.jpg",
    specs: {
      Motor: "DC16 770 V8",
      Potência: "770 cv",
      Transmissão: "Opticruise 12 velocidades",
      PesoBruto: "45 toneladas",
    },
  },
];
