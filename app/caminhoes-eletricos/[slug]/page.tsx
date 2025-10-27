// app/caminhoes-eletricos/[slug]/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from "next/navigation"; 

// CORREÇÃO: Importa apenas a lista 'trucks', que é a única exportação que temos.
import { trucks } from "../../../data/trucks"; 

// NOTA: Se você não tiver as interfaces Truck e Props definidas em outro lugar, use as que estão abaixo:
interface Truck {
    slug: string;
    name: string;
    file: string;
    description: string;
    specs: { label: string; value: string }[];
}

interface Props {
  params: {
    slug: string;
  };
}

// Para rotas estáticas do Next.js (opcional, mas bom para desempenho)
export async function generateStaticParams() {
  return trucks.map((truck) => ({
    slug: truck.slug,
  }));
}

// FUNÇÃO DE METADADOS CORRIGIDA: Usa trucks.find() e sintaxe correta
export function generateMetadata({ params }: Props) {
    // CORREÇÃO: Usa trucks.find() em vez do inexistente getTruckBySlug
    const truck = trucks.find(t => t.slug === params.slug);
    
    if (!truck) {
        return {
            title: "Caminhão Não Encontrado | OTIAdriver",
        };
    }

    return {
        title: `${truck.name} | Ficha Técnica | OTIAdriver`,        
    };
}

// Componente principal da página
export default function TruckPage({ params }: Props) {
  
  // CORREÇÃO: Encontra o caminhão usando .find()
  const truck = trucks.find(t => t.slug === params.slug) as Truck | undefined;

  // Se o caminhão não for encontrado, chama a página 404 do Next.js
  if (!truck) return notFound(); 

  // Preparação de dados para a seção de especificações (adaptado do seu código)
  const s = truck.specs || [];
  const rows = [
    // Certifique-se de que os dados aqui batem com a estrutura de truck.specs em data/trucks.ts
    // Exemplo: Se specs for um array de objetos {label, value}, o map abaixo deve ser usado
    // Se specs for um objeto direto (como motor, potencia), a lógica de mapeamento deve ser refeita.
  ];
  
  // Como o seu código em 1000228920.jpg sugere que specs é um objeto, vamos usar a estrutura da sua última imagem:
  // const s = truck.specs || {};
  // const rows = [
  //   ["Motor", s.motor],
  //   ["Potência", s.potencia],
  //   // ... outros campos ...
  // ]; 
  
  // No código fornecido na sua imagem (1000228920.jpg), você tem uma lógica de rows complexa que depende da estrutura de `truck.specs`.
  // Para evitar mais erros, vamos usar a estrutura de lista simples que o seu código anterior (100022898.jpg) sugere.

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      
      {/* Título e Navegação */}
      <div className="mb-8">
        <Link href="/caminhoes" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Voltar para Caminhões
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
            priority // Adicionado para carregar a imagem principal rapidamente
          />
        </div>

        {/* Coluna da Informação (Descrição e Specs) */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Ficha Técnica e Suporte</h2>
          
          <p className="text-gray-300 mb-6">{truck.description}</p>

          <div className="bg-zinc-800 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-white mb-3 border-b border-zinc-700 pb-2">Especificações Principais</h3>
            <ul className="space-y-2 text-gray-400">
              {/* CORREÇÃO: Usa o map correto para a estrutura {label, value} */}
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
