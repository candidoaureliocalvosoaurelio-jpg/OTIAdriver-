import BrandPage, { BrandData } from "../../../components/BrandPage";

export default function Page() {
  const data: BrandData = {
    name: "Volvo FH 2025",
    heroImage: "/trucks/volvo.jpg",
    logo: "/logos/volvo.png",

    specs: [
      { label: "Modelo", value: "Volvo FH 540 6x4" },
      { label: "Motor", value: "Volvo D13K Euro 6 – 6 cilindros em linha, 12.8L" },
      { label: "Potência", value: "540 cv (397 kW) @ 1.450–1.900 rpm" },
      { label: "Torque", value: "2.600 Nm @ 1.000–1.450 rpm" },
      { label: "Transmissão", value: "I-Shift automatizada de 12 marchas com modo inteligente" },
      { label: "Tanque de Combustível", value: "600 + 600 litros de alumínio (opcional)" },
      { label: "PBTC (Peso Bruto Total Combinado)", value: "74 toneladas" },
      { label: "Cabine", value: "Globetrotter XL – design aerodinâmico e climatização inteligente" },
      { label: "Tecnologias", value: "Volvo Dynamic Steering, I-See, I-Cruise e freio motor VEB+" },
      { label: "Conectividade", value: "Sistema Volvo Connect e telemetria completa" },
    ],

    gallery: [
      "/trucks/volvo.jpg",
      "/trucks/volvo-1.jpg",
      "/trucks/volvo-2.jpg",
    ],

    videos: [
      {
        title: "Volvo FH 2025 — Inteligência, conforto e desempenho",
        url: "https://www.youtube.com/embed/ZfaS7RuFY-M",
      },
      {
        title: "Tecnologia I-Shift e segurança ativa Volvo Trucks",
        url: "https://www.youtube.com/embed/F5_r4P5Ck0o",
      },
    ],
  };

  return <BrandPage data={data} />;
}
