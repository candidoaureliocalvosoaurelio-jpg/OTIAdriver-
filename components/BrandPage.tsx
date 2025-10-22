import Image from "next/image";

export type BrandData = {
  name: string;
  heroImage: string;      // /trucks/volvo.jpg
  logo?: string;          // /logos/volvo.png (opcional)
  specs?: Array<{ label: string; value: string }>;
  gallery?: string[];     // caminhos /trucks/volvo-1.jpg etc.
  videos?: Array<{ title: string; url: string }>; // youtube/embed
};

export default function BrandPage({ data }: { data: BrandData }) {
  const { name, heroImage, logo, specs = [], gallery = [], videos = [] } = data;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* NAV VOLTAR */}
      <div className="mb-4">
        <a href="/" className="text-sm text-blue-700 hover:underline">&larr; Voltar</a>
      </div>

      {/* HERO */}
      <section className="rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white shadow-sm">
        <div className="relative h-56 sm:h-80">
          <Image src={heroImage} alt={${name} hero} fill className="object-cover" priority />
        </div>
        <div className="p-5 flex items-center gap-4">
          {logo && (
            <Image src={logo} alt={${name} logo} width={56} height={56} className="object-contain" />
          )}
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            {name} — Linha OTIAdriver
          </h1>
        </div>
      </section>

      {/* FICHA TÉCNICA */}
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-3">Ficha Técnica</h2>
        {specs.length === 0 ? (
          <div className="rounded-xl p-4 bg-gray-50 text-gray-600">
            <p>Adicione aqui os dados técnicos (ex.: potência, torque, autonomia, PBTC, cabine, transmissão, eixos, etc.).</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl ring-1 ring-black/5 bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {specs.map((s, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <th className="w-1/3 p-3 font-semibold text-gray-800">{s.label}</th>
                    <td className="p-3 text-gray-700">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* GALERIA */}
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-3">Galeria de Fotos</h2>
        {gallery.length === 0 ? (
          <div className="rounded-xl p-4 bg-gray-50 text-gray-600">
            <p>Inclua imagens em <code>/public/trucks/&lt;marca&gt;-*.jpg</code> e liste-as no array <code>gallery</code>.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-black/5 bg-white">
                <Image src={src} alt={${name} foto ${i + 1}} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* VÍDEOS */}
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-3">Vídeos</h2>
        {videos.length === 0 ? (
          <div className="rounded-xl p-4 bg-gray-50 text-gray-600">
            <p>Adicione URLs do YouTube (embed) no array <code>videos</code>.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {videos.map((v, i) => (
              <div key={i} className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-white">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={v.url}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-3 text-sm font-semibold">{v.title}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* PLANOS / CTA */}
      <section className="mt-10">
        <h2 className="text-xl font-bold mb-3">Planos OTIAdriver</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/#planos" className="rounded-2xl p-5 bg-white ring-1 ring-black/5 shadow-sm hover:shadow-md transition text-center">
            <div className="text-lg font-bold">Free</div>
            <div className="text-gray-600">Introdução ao conteúdo</div>
          </a>
          <a href="/#planos" className="rounded-2xl p-5 bg-white ring-1 ring-black/5 shadow-sm hover:shadow-md transition text-center">
            <div className="text-lg font-bold">Premium</div>
            <div className="text-gray-600">Recursos avançados e treinamentos</div>
          </a>
          <a href="/#planos" className="rounded-2xl p-5 bg-white ring-1 ring-black/5 shadow-sm hover:shadow-md transition text-center">
            <div className="text-lg font-bold">Corporativo</div>
            <div className="text-gray-600">Soluções para frotas e empresas</div>
          </a>
        </div>
      </section>

      {/* SUPORTE */}
      <section className="mt-10">
        <h2 className="text-xl font-bold mb-3">Suporte</h2>
        <div className="rounded-2xl p-5 bg-white ring-1 ring-black/5">
          <p className="text-gray-700">
            Precisa de ajuda sobre {name}? Fale conosco em <a href="/#suporte" className="text-blue-700 underline">/suporte</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
