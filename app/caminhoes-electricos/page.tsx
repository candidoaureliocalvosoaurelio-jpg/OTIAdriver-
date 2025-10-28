      import Image from "next/image";
import Link from "next/link";
import { electricTrucks } from "@/data/electricTrucks";

export const metadata = {
  title: "Caminhões Elétricos ⚡ | OTIAdriver",
  description: "Galeria dos caminhões elétricos — inovação, eficiência e sustentabilidade com a OTIAdriver.",
};

export default function ElectricTrucksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Título e Introdução */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Caminhões Elétricos ⚡
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Inovação e sustentabilidade sobre rodas — conheça os modelos elétricos mais avançados.
        </p>
      </div>

      {/* Galeria de Caminhões */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {electricTrucks.map((truck) => (
          <Link
            key={truck.slug}
            href={`/caminhoes-eletricos/${truck.slug}`}
            className="group block bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
              <Image
                src={truck.file}
                alt={truck.name}
                fill
                className="object-contain p-4 group-hover:scale-[1.02] transition-transform"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg text-gray-800">{truck.name}</h2>
              {truck.description && (
                <p className="text-sm text-gray-500 mt-1">{truck.description}</p>
              )}
            </div>
          </Link>
        ))}
      </section>

      {/* Rodapé da seção */}
      <div className="text-center mt-12 text-gray-600">
        <p>🚚 A nova era do transporte começa com energia limpa e inteligência OTIAdriver.</p>
      </div>
    </main>
  );
}                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg text-gray-800">{truck.name}</h2>
              {truck.description && (
                <p className="text-sm text-gray-500 mt-1">{truck.description}</p>
              )}
            </div>
          </Link>
        ))}
      </section>

      {/* Rodapé da seção */}
      <div className="text-center mt-12 text-gray-600">
        <p>🚚 A nova era do transporte começa com energia limpa e inteligência OTIAdriver.</p>
      </div>
    </main>
  }                className="object-contain p-4 group-hover:scale-[1.02] transition-transform"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            <div className="p-4 text-center">
  <h2 className="font-semibold text-lg text-gray-800">{truck.name}</h2>
  {truck.description && (
    <p className="text-sm text-gray-500 mt-1">{truck.description}</p>
  )}
</div>
          </Link>
        ))}
      </section>

      {/* Rodapé da seção */}
      <div className="text-center mt-12 text-gray-600">
        <p>🚚 A nova era do transporte começa com energia limpa e inteligência OTIAdriver.</p>
      </div>
    </main>
