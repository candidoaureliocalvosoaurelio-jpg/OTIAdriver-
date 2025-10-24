// data/trucks.ts
export type Truck = {
  slug: string;
  name: string;
  file: string;
  specs?: Record<string, string>;
};

export const trucks: Truck[] = [
  { slug: "volvo-fh-2025", name: "Volvo FH", file: "/images/trucks/volvo.jpg" },
  { slug: "daf-xf-2025-brasil-blue", name: "DAF XF", (Brasil Blue)", file: "/images/trucks/daf_brasil_blue.jpg" },
  { slug: "mercedes-actros-2025", name: "Mercedes Actros", file: "/images/trucks/mercedes.jpg" },
  { slug: "vw-meteor-2025-azul-celeste", name: "VW Meteor", file: "/images/trucks/meteor.jpg" },
  { slug: "iveco-s-way-2025-cinza-prata", name: "Iveco S-Way", file: "/images/trucks/iveco.jpg" },
  { slug: "scania-2025-vermelha-ferrari", name: "Scania", file: "/images/trucks/scania.jpg" },
];

export const getTruckBySlug = (slug: string) => trucks.find(t => t.slug === slug);
