"use client";
import Image from "next/image";
import Link from "next/link";
const trucks = [
  { key: "volvo",    title: "Volvo FH 2025",                 label: "Volvo",    file: "/images/trucks/volvo.jpg" },
  { key: "daf",      title: "DAF XF 2025 (Brasil Blue)",     label: "DAF",      file: "/images/trucks/daf_brasil_blue.jpg" },
  { key: "mercedes", title: "Mercedes Actros 2025",          label: "Mercedes", file: "/images/trucks/mercedes.jpg" },
  { key: "meteor",   title: "VW Meteor 2025 (Azul Celeste)", label: "Meteor",   file: "/images/trucks/meteor.jpg" },
  { key: "iveco",    title: "Iveco S-Way 2025 (Cinza Prata)",label: "Iveco",    file: "/images/trucks/iveco.jpg" },
  { key: "scania",   title: "Scania 2025 (Vermelha Ferrari)",label: "Scania",   file: "/images/trucks/scania.jpg" },
];
export default function TruckGrid() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Selecione sua marca</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {trucks.map((truck) => (
          <Link
            key={truck.name}
            href={truck.link}
            className="block bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Imagem dentro do card */}
    <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
            <div className="relative w-full h-56">
              <Image
                src={truck.image}
                alt={truck.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-700 to-emerald-500 text-white text-center font-bold text-lg">
              {truck.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
        }
        
