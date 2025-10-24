// components/TruckGrid.tsx
import Image from "next/image";

const trucks = [
  { name: "Volvo FH", file: "/images/trucks/volvo.jpg" },
  { name: "DAF XF", file: "/images/trucks/daf_brasil_blue.jpg" },
  { name: "Mercedes Actros", file: "/images/trucks/mercedes.jpg" },
  { name: "VW Meteor", file: "/images/trucks/meteor.jpg" },
  { name: "Iveco S-Way", file: "/images/trucks/iveco.jpg" },
  { name: "Scania", file: "/images/trucks/scania.jpg" },
];

export default function TruckGrid() {
  return (
    <section className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trucks.map((t) => (
          <div key={t.file} className="rounded-2xl overflow-hidden shadow bg-white">
            <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
              <Image src={t.file} alt={t.name} fill className="object-contain p-3" />
            </div>
            <div className="p-4 text-center font-medium text-gray-800">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
