import BrandPage from "@/components/BrandPage";
import type { BrandData } from "@/components/BrandPage";

export default function Page() {
  const data: BrandData = {
    name: "Volkswagen Meteor",
    heroImage: "/trucks/vw-meteor.jpg",
    logo: "/logos/volkswagen.png",
    specs: [
      { label: "Motor", value: "A definir" },
      { label: "Torque", value: "A definir" },
      { label: "Peso Bruto", value: "A definir" },
    ],
    gallery: ["/trucks/vw-meteor-1.jpg", "/trucks/vw-meteor-2.jpg"],
    videos: [{ title: "VW Meteor", url: "https://www.youtube.com/embed/VIDEO_ID" }],
  };
  return <BrandPage data={data} />;
}
