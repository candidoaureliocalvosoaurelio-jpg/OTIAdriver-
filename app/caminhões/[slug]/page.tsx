Componente principal da página
export default function TruckPage({ params }: Props) {
  
  // CORREÇÃO: Encontra o caminhão usando .find()
  const truck = trucks.find(t => t.slug === params.slug) as Truck | undefined;

  // Se o caminhão não for encontrado, chama a página 404 do Next.js
  if (!truck) return notFound(); 

  // Estrutura de exibição dos detalhes do caminhão
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      
      {/* Título e Navegação */}
      <div className="mb-8">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Voltar para Galeria
        </Link>
        <h1 className="text-4xl font-extrabold text-white mt-2">{truck.name}</h1>
      </div>

      {/* Layout de Duas Colunas: Imagem e Especificações */}
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Coluna da Imagem */}
        <div className="relative w-full bg-white rounded-2xl shadow-lg" style={{ aspectRatio: "4 / 3" }}>
          <Image
            src={truck.file}
            alt={truck.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Coluna da Informação (Descrição e Specs) */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Ficha Técnica e Suporte</h2>
          
          <p className="text-gray-300 mb-6">{truck.description}</p>

          <div className="bg-zinc-800 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-white mb-3 border-b border-zinc-700 pb-2">Especificações Principais</h3>
            <ul className="space-y-2 text-gray-400">
              {truck.specs.map((spec, index) => (
                <li key={index} className="flex justify-between border-b border-zinc-700/50 pb-1">
                  <span className="font-medium text-white">{spec.label}:</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
