// data/electricTrucks.ts
export const electricTrucks = [
  {
    slug: "volvo-fh-aero-electric",
    name: "Volvo FH Aero Electric",
    brand: "Volvo",
    file: "/images/electric/volvo-fh-aero-electric.png",
  },
  {
    slug: "mercedes-eactros-600",
    name: "Mercedes-Benz eActros 600",
    brand: "Mercedes-Benz",
    file: "/images/electric/mercedes-eactros-600.png",
  },
  {
    slug: "tesla-semi",
    name: "Tesla Semi",
    brand: "Tesla",
    file: "/images/electric/tesla-semi.png",
  }
];

export function getElectricTruckBySlug(slug: string) {
  return electricTrucks.find((t) => t.slug === slug);
}
