import BrandPage from "@/components/BrandPage";
import type { BrandData } from "@/components/BrandPage";

export default function Page() {
  const data: BrandData = {
    name: "Scania",
    heroImage: "/trucks/scania.jpg",
    logo: "/logos/scania.png",
    specs: [
      { label: "Motor", value: "A definir" },
      { label: "Torque", value: "A definir" },
      { label: "Eixos", value: "A definir" },
    ],
    gallery: ["/trucks/scania-1.jpg", "/trucks/scania-2.jpg"],
    videos: [{ title: "Scania série R", url: "https://www.youtube.com/embed/VIDEO_ID" }],
  };
  return <BrandPage data={data} />;
}
