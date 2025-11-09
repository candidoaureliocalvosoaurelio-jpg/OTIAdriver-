// data/tires.ts
export type TireCategory = {
  slug: "direcional" | "tracao" | "implemento";
  title: string;
  subtitle: string;
  image: string;
  blurb: string;
};

export const tireCategories: TireCategory[] = [
  {
    slug: "direcional",
    title: "Direcional",
    subtitle: "Eixo dianteiro",
    image: "/images/tires/direcional.jpg",
    blurb:
      "Pneus para eixo dianteiro, focados em dirigibilidade, estabilidade e segurança em pista molhada.",
  },
  {
    slug: "tracao",
    title: "Tração",
    subtitle: "Eixo de tração",
    image: "/images/tires/tracao.jpg",
    blurb:
      "Desenho robusto para transferir potência ao solo, com aderência em subidas, chuva e pisos mistos.",
  },
  {
    slug: "implemento",
    title: "Implemento / Livre",
    subtitle: "Carretas e eixos livres",
    image: "/images/tires/implemento.jpg",
    blurb:
      "Feitos para suportar carga e rodar frio, reduzindo desgaste irregular e consumo de combustível.",
  },
];
