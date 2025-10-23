"use client";
import Image from "next/image";
import Link from "next/link";

const trucks = [
  {
    name: "Volvo",
    image: "/assets/trucks/volvo.jpg",
    link: "/marcas/volvo",
  },
  {
    name: "Mercedes",
    image: "/assets/trucks/mercedes.jpg",
    link: "/marcas/mercedes",
  },
  {
    name: "Iveco",
    image: "/assets/trucks/iveco.jpg",
    link: "/marcas/iveco",
  },
  {
    name: "Scania",
    image: "/assets/trucks/scania.jpg",
    link: "/marcas/scania",
  },
  {
    name: "Meteor",
    image: "/assets/trucks/meteor.jpg",
    link: "/marcas/meteor",
  },
  {
    name: "DAF",
    image: "/assets/trucks/daf.jpg",
    link: "/marcas/daf",
  },
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
