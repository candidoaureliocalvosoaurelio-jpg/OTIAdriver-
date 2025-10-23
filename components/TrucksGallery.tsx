"use client";
import Image from "next/image";

const TRUCKS = [
  { name: "Volvo FH 2025", file: "/images/trucks/volvo.jpg" },
  { name: "DAF XF 2025 (Brasil Blue)", file: "/images/trucks/daf_brasil_blue.jpg" },
  { name: "Mercedes Actros 2025", file: "/images/trucks/mercedes.jpg" },
  { name: "VW Meteor 2025 (Azul Celeste)", file: "/images/trucks/meteor.jpg" },
  { name: "Iveco S-Way 2025 (Cinza Prata)", file: "/images/trucks/iveco.jpg" },
  { name: "Scania 2025 (Vermelha Ferrari)", file: "/images/trucks/scania.jpg" },
];

export default function TrucksGallery() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Frota OTIAdriver 2025
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRUCKS.map(({ name, file }) => (
          <figure
            key={file}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
          >
            <Image
              src={file}
              alt={name}
              width={1200}
              height={800}
              className="object-cover w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={name.includes("Volvo")} // carrega 1º mais rápido
            />
            <figcaption className="p-4 text-center text-gray-800 font-medium">
              {name}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
