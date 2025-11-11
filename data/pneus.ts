// data/pneus.ts

export type TireSlug = 'direcional-liso' | 'implementos' | 'tracao' | 'tracao-plus';

export type Tire = {
  slug: TireSlug;
  title: string;
  subtitle: string;
  image: string;   // caminho dentro de /public
  blurb: string;   // texto curto para o topo da página
};

export const pneus: Tire[] = [
  {
    slug: 'direcional-liso',
    title: 'Direcional Liso',
    subtitle: 'Eixo dianteiro • dirigibilidade e estabilidade em pista molhada',
    image: '/images/pneus/pneu_1.jpg',
    blurb:
      'Indicado para eixo dianteiro no rodoviário/urbano. Entrega direção precisa, boa frenagem em piso molhado e desgaste uniforme.',
  },
  {
    slug: 'implementos',
    title: 'Implementos',
    subtitle: 'Eixo livre (carretas) • baixa resistência ao rolamento',
    image: '/images/pneus/pneu_2.jpg',
    blurb:
      'Para carretas e eixos livres: prioriza estabilidade, segurança e menor aquecimento, reduzindo consumo e desgaste.',
  },
  {
    slug: 'tracao',
    title: 'Tração',
    subtitle: 'Eixos motrizes • alto poder de tração e robustez',
    image: '/images/pneus/pneu_3.jpg',
    blurb:
      'Desenho agressivo para eixos motrizes com excelente tração e durabilidade, mantendo desempenho no molhado.',
  },
  {
    slug: 'tracao-plus',
    title: 'Tração PLUS',
    subtitle: 'Eixos motrizes • bloco reforçado e alta aderência',
    image: '/images/pneus/pneu_4.jpg',
    blurb:
      'Versão reforçada para operações exigentes, com blocos mais robustos e maior proteção contra lascamento.',
  },
];

// helper para buscar por slug
export function getTireBySlug(slug: string) {
  return pneus.find((t) => t.slug === slug);
}
