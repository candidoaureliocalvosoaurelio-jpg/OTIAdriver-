// data/electricTrucks.ts

export type ElectricTruck = {
  slug: string;
  name: string;
  file: string;
  description?: string;
  specs?: Record<string, string>;
};

export const electricTrucks: ElectricTruck[] = [
  // ... seus modelos atuais ...

  // ==== NOVOS MODELOS DA FICHA TÉCNICA ====
  {
    slug: "volvo-fm-electric",
    name: "Volvo FM Electric",
    file: "/images/trucks-eletricos/volvo-fm-electric.jpg",
    description:
      "Caminhão elétrico pesado da Volvo para transporte urbano e regional, conforme ficha técnica OTIAdriver.",
  },
  {
    slug: "foton-iblue-electric",
    name: "Foton iBlue Electric",
    file: "/images/trucks-eletricos/foton-iblue-electric.jpg",
    description:
      "Modelo elétrico Foton iBlue para operação urbana, com foco em entregas e serviços, conforme ficha técnica OTIAdriver.",
  },
  {
    slug: "mercedes-e-accelo",
    name: "Mercedes-Benz e-Accelo",
    file: "/images/trucks-eletricos/mercedes-e-accelo.jpg",
    description:
      "Versão elétrica do consagrado Accelo, voltada à distribuição urbana sustentável.",
  },
  {
    slug: "byd-etm",
    name: "BYD ETM",
    file: "/images/trucks-eletricos/byd-etm.jpg",
    description:
      "Caminhão elétrico BYD ETM, focado em transporte urbano e regional limpo e silencioso.",
  },
  {
    slug: "agrale-electric",
    name: "Agrale Electric",
    file: "/images/trucks-eletricos/agrale-electric.jpg",
    description:
      "Agrale Electric para aplicações urbanas, utilitárias e serviços públicos com emissão zero.",
  },
  {
    slug: "mercedes-eactros-600-longhaul",
    name: "Mercedes-Benz eActros 600 (LongHaul)",
    file: "/images/trucks-eletricos/mercedes-eactros-600-longhaul.jpg",
    description:
      "eActros 600 LongHaul, caminhão elétrico pesado para longas distâncias na Europa.",
  },
  {
    slug: "scania-bev",
    name: "Scania BEV",
    file: "/images/trucks-eletricos/scania-bev.jpg",
    description:
      "Plataforma BEV da Scania para transporte pesado elétrico com foco em eficiência e conectividade.",
  },
  {
    slug: "man-etgx",
    name: "MAN eTGX",
    file: "/images/trucks-eletricos/man-etgx.jpg",
    description:
      "Caminhão elétrico MAN eTGX, ideal para distribuição regional e rodoviária.",
  },
  {
    slug: "renault-e-tech-t",
    name: "Renault E-Tech T",
    file: "/images/trucks-eletricos/renault-e-tech-t.jpg",
    description:
      "Renault E-Tech T, caminhão elétrico europeu para longa distância com emissão zero.",
  },
  {
    slug: "byd-etm-2050",
    name: "BYD ETM 2050",
    file: "/images/trucks-eletricos/byd-etm-2050.jpg",
    description:
      "Versão futurizada BYD ETM 2050, com foco em autonomia ampliada e telemetria avançada.",
  },
  {
    slug: "jac-iev1200t-2050",
    name: "JAC iEV1200T 2050",
    file: "/images/trucks-eletricos/jac-iev1200t-2050.jpg",
    description:
      "JAC iEV1200T 2050, caminhão elétrico asiático voltado para distribuição urbana e serviços.",
  },
  {
    slug: "sany-electric-2050",
    name: "SANY Electric 2050",
    file: "/images/trucks-eletricos/sany-electric-2050.jpg",
    description:
      "SANY Electric 2050, solução asiática para transporte pesado elétrico com foco em automação.",
  },
  {
    slug: "isuzu-giga-electric-2050",
    name: "Isuzu Giga Electric 2050",
    file: "/images/trucks-eletricos/isuzu-giga-electric-2050.jpg",
    description:
      "Isuzu Giga Electric 2050, caminhão japonês de alta tecnologia com condução assistida.",
  },
  {
    slug: "man-hydrogen-electric-2050",
    name: "MAN Hydrogen-Electric 2050",
    file: "/images/trucks-eletricos/man-hydrogen-electric-2050.jpg",
    description:
      "Projeto híbrido MAN Hydrogen-Electric 2050, combinando célula de hidrogênio e tração elétrica.",
  },
  {
    slug: "mercedes-eactros-400",
    name: "Mercedes-Benz eActros 400",
    file: "/images/trucks-eletricos/mercedes-eactros-400.jpg",
    description:
      "Mercedes-Benz eActros 400, variante elétrica para operações urbanas e regionais na Europa.",
  },
];
