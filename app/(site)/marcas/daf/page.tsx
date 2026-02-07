import BrandPage from "@/components/BrandPage";
import type { BrandData } from "@/components/BrandPage";

export default function Page() {
  const data: BrandData = {
    name: "DAF",
    heroImage: "/trucks/daf.jpg",
    logo: "/logos/daf.png",
    specs: [
      { label: "Motor", value: "A definir" },
      { label: "Transmissão", value: "A definir" },
      { label: "Cabine", value: "A definir" },
    ],
    gallery: ["/trucks/daf-1.jpg", "/trucks/daf-2.jpg"],
    videos: [{ title: "DAF série XF", url: "https://www.youtube.com/embed/VIDEO_ID" }],
  };
  return <BrandPage data={data} />;
}
