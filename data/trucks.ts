// data/trucks.ts
// Arquivo só de dados, sem TypeScript avançado (compatível com qualquer parser)

export const trucks = [
  {
    slug: "volvo-fh-2025",
    name: "Volvo FH 2025",
    file: "/images/trucks/volvo.jpg",
    specs: {
      Motor: "D13K 540",
      Potência: "540 cv",
      Transmissão: "I-Shift automatizada",
      PesoBruto: "45 toneladas"
    }
  },
  {
    slug: "daf-xf-2025",
    name: "DAF XF 2025",
    file: "/images/trucks/daf_brasil_blue.jpg",
    specs: {
      Motor: "PACCAR MX-13",
      Potência: "530 cv",
      Transmissão: "TraXon 12 velocidades",
      PesoBruto: "44 toneladas"
    }
  },
  {
    slug: "mercedes-actros-2025",
    name: "Mercedes Actros 2025",
    file: "/images/trucks/mercedes.jpg",
    specs: {
      Motor: "OM 471",
      Potência: "530 cv",
      Transmissão: "Powershift 3",
      PesoBruto: "45 toneladas"
    }
  }
] as const;

// Helper simples, opcional
export function getTruckBySlug(slug: string) {
  return trucks.find(t => t.slug === slug);
}
