// data/trucks.ts
export type Truck = {
  slug: string;
  name: string;
  file: string;
  // opcional: lista de especificações (pode deixar vazio)
  specs?: Array<{ label: string; value: string }>;
};

export const trucks: Truck[] = [
  { slug: "volvo-fh-2025",     name: "Volvo FH",        file: "/images/trucks/volvo.jpg" },
  { slug: "daf-xf-2025",       name: "DAF XF",          file: "/images/trucks/daf_brasil_blue.jpg" },
  { slug: "mercedes-actros-2025", name: "Mercedes Actros", file: "/images/trucks/mercedes.jpg" },
  { slug: "vw-meteor-2025",    name: "VW Meteor",       file: "/images/trucks/meteor.jpg" },
  { slug: "iveco-sway-2025",   name: "Iveco S-Way",     file: "/images/trucks/iveco.jpg" },
];

// helper para buscar por slug
export function getTruckBySlug(slug: string): Truck | undefined {
  return trucks.find((t) => t.slug === slug);
  }
