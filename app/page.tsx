// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

// Importa o componente do grid de caminhões
import { TruckGrid } from "@/components/TruckGrid"; 

// Seus metadados globais (correto)
export const metadata = {
  title: "OTIAdriver | Conhecimento Inteligente para Motoristas",
  description: "A OTIAdriver é a plataforma inteligente que conecta tecnologia, aprendizado e inovação para motoristas do futuro.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      
      {/* SEÇÃO DE CAMINHÕES (AGORA USANDO APENAS O COMPONENTE) */}
      <TruckGrid /> 
      
      {/* BLOCO DE PROPÓSITO (Correto, conforme suas imagens) */}
      <section className="mt-16 border-t border-blue-100 rounded-2xl p-8 bg-blue-50">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Nosso Propósito 🎯</h2>
        
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          
          {/* Missão */}
          <div className="rounded-xl bg-white border p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">🚀 Missão</h3>
            <p>Proporcionar conhecimento inteligente e acessível para motoristas em todo o mundo, unindo tecnologia, educação e inovação para elevar a segurança, a eficiência e o prestígio da profissão.</p>
          </div>
          
          {/* Visão */}
          <div className="rounded-xl bg-white border p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">👁️ Visão</h3>
            <p>Ser a plataforma de IA número 1 do mundo na capacitação de motoristas, reconhecida por transformar o transporte em uma experiência inteligente, segura e sustentável.</p>
          </div>
          
          {/* Valores */}
          <div className="rounded-xl bg-white border p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">💙 Valores</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Inovação constante e ética.</li>
              <li>Educação prática e acessível.</li>
              <li>Segurança e responsabilidade nas estradas.</li>
              <li>Sustentabilidade e eficiência global.</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Link para a página Sobre (correto) */}
      <div className="text-center mt-8">
        <Link 
          href="/proposito" 
          className="inline-flex items-center gap-2 rounded-lg border border-blue-500 text-blue-700 px-4 py-2 font-medium hover:bg-blue-50 transition"
        >
          Ver Propósito →
        </Link>
      </div>

    </main>
  );
}

