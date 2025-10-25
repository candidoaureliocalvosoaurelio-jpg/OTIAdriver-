// data/trucks.ts
export type Truck = {
  slug: string;
  name: string;
  file: string; // Caminho da imagem dentro de /public/images/trucks
};

// ------------------------------------------------------------
// 🚛 Lista de Caminhões — Frota Principal OTIAdriver
// ------------------------------------------------------------
export const trucks: Truck[] = [
  {
    slug: "volvo-fh",
    name: "Volvo FH",
    file: "/images/trucks/volvo.jpg",
  },
  {
    slug: "daf-xf",
    name: "DAF XF",
    file: "/images/trucks/daf_brasil_blue.jpg",
  },
  {
    slug: "mercedes-actros",
    name: "Mercedes Actros",
    file: "/images/trucks/mercedes.jpg",
  },
  {
    slug: "vw-meteor",
    name: "VW Meteor",
    file: "/images/trucks/meteor.jpg",
  },
  {
    slug: "iveco-sway",
    name: "Iveco S-Way",
    file: "/images/trucks/iveco.jpg",
  },
  {
    slug: "scania-2025",
    name: "Scania 2025",
    file: "/images/trucks/scania.jpg",
  },
];

// ------------------------------------------------------------
// 🔍 Função auxiliar — buscar caminhão pelo slug
// ------------------------------------------------------------
export function getTruckBySlug(slug: string) {
  return trucks.find((t) => t.slug === slug);
}
