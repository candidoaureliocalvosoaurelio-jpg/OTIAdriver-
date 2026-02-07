import BrandPage, { BrandData } from "../../../components/BrandPage";

export default function Page() {
  const data: BrandData = {
    name: "Mercedes-Benz",
    heroImage: "/trucks/mercedes.jpg",
    logo: "/logos/mercedes.png",
    specs: [
      { label: "Motor", value: "A definir" },
      { label: "Potência", value: "A definir" },
      { label: "Transmissão", value: "A definir" },
    ],
    gallery: ["/trucks/mercedes-1.jpg", "/trucks/mercedes-2.jpg"],
    videos: [{ title: "Mercedes Actros", url: "https://www.youtube.com/embed/VIDEO_ID" }],
  };
  return <BrandPage data={data} />;
}
