// components/TruckGrid.tsx
import Image from "next/image";

const trucks = [
  { name: "Volvo FH 2025", file: "/images/trucks/volvo.jpg" },
  { name: "DAF XF 2025 (Brasil Blue)", file: "/images/trucks/daf_brasil_blue.jpg" },
  { name: "Mercedes Actros 2025", file: "/images/trucks/mercedes.jpg" },
  { name: "VW Meteor 2025 (Azul Celeste)", file: "/images/trucks/meteor.jpg" },
  { name: "Iveco S-Way 2025 (Cinza Prata)", file: "/images/trucks/iveco.jpg" },
  { name: "Scania 2025 (Vermelha Ferrari)", file: "/images/trucks/scania.jpg" },
];

export default function TruckGrid() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Frota OTIAdriver 2025
      </h2>

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
