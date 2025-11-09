// data/tires.ts

export type TireSlug = "direcional" | "tracao" | "implemento";

export type TireCategory = {
  slug: TireSlug;
  title: string;
  subtitle: string;
  image: string;
  blurb: string;
};

export const tireCategories: TireCategory[] = [
  {
    slug: "direcional",
    title: "Direcional",
    subtitle: "Dianteiro • Guia/Controle",
    image: "/images/tires/direcional.jpg",
    blurb:
      "Aplicado no eixo dianteiro: estabilidade direcional, drenagem de água e resposta de direção. Inflagem correta e inspeção de desgaste irregular são essenciais.",
  },
  {
    slug: "tracao",
    title: "Tração",
    subtitle: "Eixos motrizes • Aderência",
    image: "/images/tires/tracao.jpg",
    blurb:
      "Desenho com blocos para força de tração e frenagem. Calibragem conforme carga e operação aumenta a durabilidade e reduz consumo de combustível.",
  },
  {
    slug: "implemento",
    title: "Implemento / Livre",
    subtitle: "Eixos livres • Reboque/Carreta",
    image: "/images/tires/implemento.jpg",
    blurb:
      "Projetado para rolagem leve e estabilidade lateral. Verifique balanceamento, alinhamento e pressão para evitar arraste e aquecimento.",
  },
];
