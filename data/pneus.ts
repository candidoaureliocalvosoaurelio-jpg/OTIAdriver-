// data/pneus.ts
export type Pneu = {
  slug: string;
  name: string;
  file: string;
};

export const pneus: Pneu[] = [
  {
    slug: "direcional-liso",
    name: "Direcional Liso",
    file: "/images/pneus/pneu_1.jpg",
  },
  {
    slug: "implementos",
    name: "Implementos",
    file: "/images/pneus/pneu_2.jpg",
  },
  {
    slug: "tracao",
    name: "Tração",
    file: "/images/pneus/pneu_3.jpg",
  },
  {
    slug: "tracao-plus",
    name: "Tração PLUS",
    file: "/images/pneus/pneu_4.jpg",
  },
];
