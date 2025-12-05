// data/trucks.ts
// Caminhões a Diesel — cards da página inicial OTIAdriver

export type Truck = {
  slug: string;
  name: string;
  file: string; // caminho dentro de /public
  description?: string;
  specs?: Record<string, string>;
};

export const trucks: Truck[] = [
  // 1) VOLVO FH – topo da vitrine
  {
    slug: "volvo-fh-2025",
    name: "Volvo FH",
    file: "/images/trucks/volvo-fh.jpg", // ajuste se o nome for diferente
    description:
      "Plataforma rodoviária premium da Volvo para longa distância, focada em segurança, conforto e baixo consumo.",
    specs: {
      Motor: "D13K 500–540",
      Potência: "até 540 cv",
      Transmissão: "I-Shift (automatizada)",
      Aplicação: "Longa distância / cargas pesadas",
    },
  },

  // 2) VOLVO FMX – fora de estrada / construção
  {
    slug: "volvo-fmx",
    name: "Volvo FMX",
    file: "/images/trucks/volvo-fmx.jpg",
    description:
      "Caminhão vocacional fora de estrada da Volvo, projetado para construção pesada, mineração e operações severas.",
    specs: {
      Motor: "D13K 420–500",
      Potência: "até 500 cv",
      Transmissão: "I-Shift com super-reduzidas",
      Aplicação: "Construção pesada / mineração / fora de estrada",
    },
  },

  // 3) VOLVO VM / VMX – distribuição e aplicações regionais
  {
    slug: "volvo-vm-vmx",
    name: "Volvo VM / VMX",
    file: "/images/trucks/volvo-vm-vmx.jpg", // crie a imagem quando estiver pronto
    description:
      "Linha versátil da Volvo para distribuição urbana, regional e aplicações vocacionais customizadas.",
    specs: {
      Motor: "D8K / D11K (conforme versão)",
      Potência: "até ~360 cv (aplicações típicas)",
      Transmissão: "I-Shift (automatizada) ou manual",
      Aplicação: "Distribuição, betoneira, coleta de resíduos, serviços",
    },
  },

  // 4) SCANIA SUPER – novo conteúdo
  {
    slug: "scania-super",
    name: "Scania Super",
    file: "/images/trucks/scania-super.jpg",
    description:
      "Plataforma Scania Super de 13 litros, referência em eficiência de combustível, torque alto em baixa rotação e TCO otimizado.",
    specs: {
      Motor: "Scania Super 13L",
      Potência: "420–560 hp",
      Torque: "2.300–2.800 Nm",
      Transmissão: "Opticruise (automatizada)",
      Aplicação: "Longa distância, regional e cargas pesadas",
    },
  },

  // 5) DAF XF
  {
    slug: "daf-xf-2025",
    name: "DAF XF",
    file: "/images/trucks/daf_brasil_blue.jpg",
    description:
      "Caminhão rodoviário de longa distância com foco em aerodinâmica, conforto e alta eficiência de combustível.",
    specs: {
      Motor: "PACCAR MX-13",
      Potência: "até 530 cv",
      Transmissão: "TraXon 12v automatizada",
      Aplicação: "Transporte rodoviário nacional e internacional",
    },
  },

  // 6) MERCEDES-BENZ ACTROS
  {
    slug: "mercedes-actros-2025",
    name: "Mercedes-Benz Actros",
    file: "/images/trucks/mercedes.jpg",
    description:
      "Linha premium da Mercedes-Benz para longa distância, com tecnologia avançada de segurança e conectividade.",
    specs: {
      Motor: "OM 471",
      Potência: "até 530 cv",
      Transmissão: "Powershift (automatizada)",
      Aplicação: "Longa distância / logística pesada",
    },
  },

  // 7) VW METEOR
  {
    slug: "volkswagen-meteor-2025",
    name: "Volkswagen Meteor",
    file: "/images/trucks/meteor.jpg",
    description:
      "Cavalo-mecânico extrapesado da VW Caminhões, projetado para alta produtividade e robustez.",
    specs: {
      Motor: "MAN D26",
      Potência: "até 520 cv",
      Transmissão: "Automatizada",
      Aplicação: "Transporte rodoviário de carga geral",
    },
  },

  // 8) IVECO S-WAY
  {
    slug: "iveco-s-way-2025",
    name: "Iveco S-Way",
    file: "/images/trucks/iveco.jpg",
    description:
      "Caminhão rodoviário Iveco com foco em design aerodinâmico, conforto de cabine e economia.",
    specs: {
      Motor: "Cursor 13",
      Potência: "até 570 cv",
      Transmissão: "Hi-Tronix 12v",
      Aplicação: "Longa distância e regional",
    },
  },

  // 9) SCANIA GENÉRICO (linha S/R/XT) — se você ainda quiser manter
  {
    slug: "scania-2025",
    name: "Scania (S/R/XT)",
    file: "/images/trucks/scania.jpg",
    description:
      "Geração modular Scania para aplicações rodoviárias e vocacionais, com motores de 13L e V8 de alto desempenho.",
    specs: {
      Motor: "D13 / DC16 (V8)",
      Potência: "420–770 cv (conforme versão)",
      Transmissão: "Opticruise",
      Aplicação: "Longa distância, pesado indivisível, vocacional XT",
    },
  },
];

// Helper
export function getTruckBySlug(slug: string) {
  return trucks.find((t) => t.slug === slug);
}
