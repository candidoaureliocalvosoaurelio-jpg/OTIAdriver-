"use client";
import Image from "next/image";

export default function TrucksGallery() {
  const trucks = [
    { name: "Volvo FH 2025", file: "/images/trucks/volvo.jpg" },
    { name: "DAF XF 2025 (Brasil Blue)", file: "/images/trucks/daf_brasil_blue.jpg" },
    { name: "Mercedes Actros 2025", file: "/images/trucks/mercedes.jpg" },
    { name: "VW Meteor 2025 (Azul Celeste)", file: "/images/trucks/meteor.jpg" },
    { name: "Iveco S-Way 2025 (Cinza Prata)", file: "/images/trucks/iveco.jpg" },
    { name: "Scania 2025 (Vermelha Ferrari)", file: "/images/trucks/scania.jpg" },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Frota OTIAdriver 2025
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trucks.map((t) => (
          <div key={t.file} className="rounded-2xl overflow-hidden shadow bg-white">
            <Image src={t.file} alt={t.name} width={1200} height={800} className="object-cover" />
            <div className="p-4 text-center font-medium text-gray-800">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
