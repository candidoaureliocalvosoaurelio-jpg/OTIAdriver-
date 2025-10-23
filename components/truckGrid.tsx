import Image from "next/image";

const trucks = [
  {
    name: "Volvo FH 2025",
    image: "/trucks/volvo.jpg",
    link: "/marcas/volvo",
  },
  {
    name: "Mercedes Actros 2025",
    image: "/trucks/mercedes.jpg",
    link: "/marcas/mercedes",
  },
  {
    name: "Iveco S-Way",
    image: "/trucks/iveco.jpg",
    link: "/marcas/iveco",
  },
  {
    name: "Scania Electric",
    image: "/trucks/scania.jpg",
    link: "/marcas/scania",
  },
  {
    name: "VW Meteor",
    image: "/trucks/meteor.jpg",
    link: "/marcas/meteor",
  },
  {
    name: "DAF XF",
    image: "/trucks/daf.jpg",
    link: "/marcas/daf",
  },
];

export default function TruckGrid() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Caminhões em destaque
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {trucks.map((truck) => (
          <a
            key={truck.name}
            href={truck.link}
            className="block overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white hover:shadow-lg transition"
          >
            <div className="relative aspect-square">
              <Image
                src={truck.image}
                alt={truck.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 text-center font-semibold text-gray-800">
              {truck.name}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
