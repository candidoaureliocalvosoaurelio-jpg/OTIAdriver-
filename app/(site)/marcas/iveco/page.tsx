import BrandPage from "@/components/BrandPage";
import type { BrandData } from "@/components/BrandPage";

export default function Page() {
  const data: BrandData = {
    name: "Iveco",
    heroImage: "/trucks/iveco.jpg",
    logo: "/logos/iveco.png",
    specs: [
      { label: "Motor", value: "A definir" },
      { label: "Potência", value: "A definir" },
      { label: "Torque", value: "A definir" },
      { label: "PBTC", value: "A definir" },
      { label: "Transmissão", value: "A definir" },
    ],
    gallery: ["/trucks/iveco-1.jpg", "/trucks/iveco-2.jpg"],
    videos: [{ title: "Apresentação Iveco", url: "https://www.youtube.com/embed/VIDEO_ID" }],
  };
  return <BrandPage data={data} />;
}
