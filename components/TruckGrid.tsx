// components/TruckGrid.tsx

import Image from 'next/image';
import Link from 'next/link';
// O caminho abaixo deve apontar para o seu arquivo de dados (Ex: ../../data/trucks)
import { trucks } from "../../data/trucks"; 

// Exportação nomeada correta (sem o 'default')
export function TruckGrid() {
  return (
    <section className="py-8">
      
      {/* Adicionado Título (removido do app/page.tsx na última limpeza) */}
      <h2 className="text-2xl font-bold text-white mb-6">Caminhões em Destaque 🚛</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {trucks.map((t) => (
          <Link
            key={t.slug}
            // Link Dinâmico corrigido
            href={`/caminhoes/${t.slug}`} 
            className="group block rounded-2xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-[1.02]"
          >
            
            {/* Contêiner com proporção fixa e posição relativa */}
            <div className="relative w-full bg-gray-50" style={{ aspectRatio: "3 / 2" }}>
              <Image
                src={t.file}
                alt={t.name}
                fill
                className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>

            {/* Nome do caminhão - CORRIGIDO: Conteúdo DENTRO da DIV e com HOVER */}
            <div className="p-3 text-center font-bold text-zinc-900 group-hover:text-blue-600">
              {t.name}
            </div>
            
          </Link>
        ))}
        
      </div>
    </section>
  );
}
