import BrandPage, { BrandData } from "../../../components/BrandPage";

export default function Page() {
  const data: BrandData = {
    name: "Volvo",
    heroImage: "/trucks/volvo.jpg",
    logo: "/logos/volvo.png",
    specs: [
      { label: "Motor", value: "A definir" },
      { label: "Autonomia", value: "A definir" },
      { label: "Torque", value: "A definir" },
      { label: "Cabine", value: "A definir" },
    ],
    gallery: ["/trucks/volvo-1.jpg", "/trucks/volvo-2.jpg"],
    videos: [{ title: "Volvo Globetrotter", url: "https://www.youtube.com/embed/VIDEO_ID" }],
  };
  return <BrandPage data={data} />;
}
