// data/electricTrucks.ts
export type ElectricTruck = {
  slug: string;
  name: string;
  brand: string;
  file: string; // caminho da imagem em /public/images/electric
  pdfs?: { label: string; href: string }[];
  specs: {
    autonomia_km?: string;
    bateria_kwh?: string;
    potencia_kw?: string;
    torque_nm?: string;
    pbt_t?: string;
    configuracao?: string;
    recarga?: string;
    aplicacao?: string;
    pais?: string;
    observacoes?: string;
  };
};

// ------------------------------------------------------------
// 🚛 Lista de caminhões elétricos — OTIAdriver (2025)
// ------------------------------------------------------------
export const electricTrucks: ElectricTruck[] = [
  {
    slug: "volvo-fh-aero-electric",
    name: "Volvo FH Aero Electric",
    brand: "Volvo",
    file: "/images/electric/volvo-fh-aero-electric.png",
    pdfs: [{ label: "Ficha Técnica (PDF)", href: "/pdfs/electric/volvo/volvo-fh-aero-electric.pdf" }],
    specs: {
      autonomia_km: "650–700 km",
      bateria_kwh: "800 kWh (Solid-State)",
      potencia_kw: "650 kW (pico) / 500 kW (contínua)",
      torque_nm: "4.200 Nm",
      pbt_t: "44",
      configuracao: "6x4",
      recarga: "MCS até 1 MW ⚡ / 30 min",
      aplicacao: "Rodoviário",
      pais: "Suécia"
    }
  },
  {
    slug: "mercedes-eactros-600",
    name: "Mercedes-Benz eActros 600 Long Haul",
    brand: "Mercedes-Benz",
    file: "/images/electric/mercedes-eactros-600.png",
    specs: {
      autonomia_km: "500 km",
      bateria_kwh: "600 kWh (NMC)",
      potencia_kw: "400 kW (pico) / 330 kW (contínua)",
      torque_nm: "3.000 Nm",
      pbt_t: "44",
      configuracao: "4x2 / 6x2",
      recarga: "MCS 400 kW / 60 min",
      aplicacao: "Rodoviário",
      pais: "Alemanha"
    }
  },
  {
    slug: "mercedes-eactros-400",
    name: "Mercedes-Benz eActros 400",
    brand: "Mercedes-Benz",
    file: "/images/electric/mercedes-eactros-400.png",
    specs: {
      autonomia_km: "400 km",
      bateria_kwh: "448 kWh (NMC)",
      potencia_kw: "400 kW (pico) / 330 kW (contínua)",
      torque_nm: "3.000 Nm",
      pbt_t: "27",
      configuracao: "4x2 / 6x2",
      recarga: "CCS2 160 kW / 70–80 min",
      aplicacao: "Urbano / Rodoviário",
      pais: "Alemanha"
    }
  },
  {
    slug: "man-hydrogen-electric",
    name: "MAN Hydrogen-Electric",
    brand: "MAN",
    file: "/images/electric/man-hydrogen-electric.png",
    specs: {
      autonomia_km: "1.000 km (modo combinado)",
      bateria_kwh: "400 kWh + célula H₂ (120 kW)",
      potencia_kw: "550 kW (pico) / 420 kW (contínua)",
      torque_nm: "3.800 Nm",
      pbt_t: "44",
      configuracao: "6x2 / 6x4",
      recarga: "H₂ + MCS 400 kW / 40 min",
      aplicacao: "Rodoviário / Urbano",
      pais: "Alemanha"
    }
  },
  {
    slug: "tesla-semi",
    name: "Tesla Semi",
    brand: "Tesla",
    file: "/images/electric/tesla-semi.png",
    specs: {
      autonomia_km: "800 km (modo longo alcance)",
      bateria_kwh: "900 kWh (NMC)",
      potencia_kw: "750 kW (pico) / 500 kW (contínua)",
      torque_nm: "5.000 Nm",
      pbt_t: "40",
      configuracao: "6x4",
      recarga: "Megacharger 1 MW / 30 min",
      aplicacao: "Longa distância (IA integrada)",
      pais: "Estados Unidos"
    }
  },
  {
    slug: "freightliner-ecascadia",
    name: "Freightliner eCascadia",
    brand: "Freightliner",
    file: "/images/electric/freightliner-ecascadia.png",
    specs: {
      autonomia_km: "370 km",
      bateria_kwh: "438 kWh",
      potencia_kw: "240–350 kW",
      torque_nm: "2.700 Nm",
      pbt_t: "37",
      configuracao: "4x2 / 6x2",
      recarga: "CCS2 / MCS 350 kW / 70 min",
      aplicacao: "Rodoviário",
      pais: "Estados Unidos"
    }
  },
  {
    slug: "nikola-tre-electric",
    name: "Nikola Tre Electric",
    brand: "Nikola",
    file: "/images/electric/nikola-tre-electric.png",
    specs: {
      autonomia_km: "720 km",
      bateria_kwh: "733 kWh (NMC)",
      potencia_kw: "645 kW (pico) / 480 kW (contínua)",
      torque_nm: "3.600 Nm",
      pbt_t: "42",
      configuracao: "6x4",
      recarga: "MCS 500 kW / 50 min",
      aplicacao: "Rodoviário / Longa Distância",
      pais: "Estados Unidos"
    }
  },
  {
    slug: "ashok-leyland-electric",
    name: "Ashok Leyland Electric",
    brand: "Ashok Leyland",
    file: "/images/electric/ashok-leyland-electric.png",
    specs: {
      autonomia_km: "450–500 km",
      bateria_kwh: "620 kWh (LFP)",
      potencia_kw: "480 kW (pico) / 400 kW (contínua)",
      torque_nm: "3.200 Nm",
      pbt_t: "44",
      configuracao: "6x4",
      recarga: "CCS2 350 kW / 55 min",
      aplicacao: "Rodoviário / Longa Distância",
      pais: "Índia"
    }
  },
  {
    slug: "iveco-sway-electric",
    name: "IVECO S-Way Electric",
    brand: "IVECO",
    file: "/images/electric/iveco-sway-electric.png",
    specs: {
      autonomia_km: "600 km (versão HD BEV)",
      bateria_kwh: "738 kWh (9 módulos)",
      potencia_kw: "480 kW",
      torque_nm: "—",
      pbt_t: "44",
      configuracao: "4x2 / 6x2 / 6x4",
      recarga: "MCS 350 kW / 60 min",
      aplicacao: "Rodoviário",
      pais: "Itália"
    }
  },
  {
    slug: "ud-qon-electric",
    name: "UD Trucks Qon Electric",
    brand: "UD Trucks",
    file: "/images/electric/ud-qon-electric.png",
    specs: {
      autonomia_km: "550 km",
      bateria_kwh: "700 kWh (NMC)",
      potencia_kw: "520 kW (pico) / 430 kW (contínua)",
      torque_nm: "3.400 Nm",
      pbt_t: "44",
      configuracao: "6x2 / 6x4",
      recarga: "CCS2/CHAdeMO 450 kW / 70 min",
      aplicacao: "Rodoviário / Regional",
      pais: "Japão"
    }
  },
  {
    slug: "isuzu-giga-electric",
    name: "Isuzu Giga Electric",
    brand: "Isuzu",
    file: "/images/electric/isuzu-giga-electric.png",
    specs: {
      autonomia_km: "500 km",
      bateria_kwh: "620 kWh (NCM)",
      potencia_kw: "480 kW (pico) / 400 kW (contínua)",
      torque_nm: "3.200 Nm",
      pbt_t: "44",
      configuracao: "6x2 / 6x4",
      recarga: "CCS2/CHAdeMO 400 kW / 55 min",
      aplicacao: "Rodoviário / Regional",
      pais: "Japão"
    }
  },
  {
    slug: "hino-z-ev",
    name: "Hino Z EV",
    brand: "Hino",
    file: "/images/electric/hino-z-ev.png",
    specs: {
      autonomia_km: "400–450 km",
      bateria_kwh: "480 kWh (NCM)",
      potencia_kw: "420 kW (pico) / 340 kW (contínua)",
      torque_nm: "2.700 Nm",
      pbt_t: "18",
      configuracao: "4x2 / 6x2",
      recarga: "CCS2 250 kW / —",
      aplicacao: "Urbano / Regional",
      pais: "Japão"
    }
  },
  {
    slug: "sany-electric",
    name: "SANY Elétrico",
    brand: "SANY",
    file: "/images/electric/sany-electric.png",
    specs: {
      autonomia_km: "500–600 km",
      bateria_kwh: "800 kWh (LFP)",
      potencia_kw: "550 kW (pico) / 420 kW (contínua)",
      torque_nm: "4.000 Nm",
      pbt_t: "49",
      configuracao: "6x4 / 8x4",
      recarga: "MCS 400 kW / 40 min",
      aplicacao: "Pesado / Extra Pesado",
      pais: "China"
    }
  }
];

// Função auxiliar
export function getElectricTruckBySlug(slug: string) {
  return electricTrucks.find((t) => t.slug === slug);
}
