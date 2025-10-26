// app/layout.tsx
import './globals.css'; // Importa os estilos globais (Tailwind)
import { Header } from '@/components/Header'; // Importação do seu Header!

// Seus metadados globais
export const metadata = {
  title: 'OTIAdriver | Conhecimento Inteligente',
  description: 'Plataforma inteligente para motoristas do futuro.',
};

// Componente RootLayout que envolve todas as páginas
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Cor de fundo escura global
    <html lang="pt-BR" className="bg-zinc-900"> 
      <body>
        
        {/* O Header aparecerá em todas as páginas */}
        <Header /> 
        
        {/* 'children' é a página atual (app/page.tsx, etc.) */}
        {children}
        
        {/* O Footer Global (movido do app/page.tsx) */}
        <footer className="bg-gradient-to-r from-blue-900 to-green-600 text-white py-4 text-center mt-10 rounded-xl mx-auto max-w-6xl px-4">
            <p className="text-sm">
                Termos e Condições • Política de Privacidade <br />
                © 2025 <span className="font-bold">OTIAdriver</span> | Conhecimento Inteligente para Motoristas
            </p>
        </footer>
        
      </body>
    </html>
  );
}
