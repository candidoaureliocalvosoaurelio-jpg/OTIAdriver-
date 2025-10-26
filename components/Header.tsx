// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

// Exportação nomeada é mais robusta, então removemos o 'default' para usar no layout.tsx
export function Header() { 
  return (
    // 'sticky' fixa o cabeçalho no topo da tela ao rolar
    <header className="sticky top-0 bg-zinc-900/95 backdrop-blur-sm z-50">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between border-b border-white/10">
        
        {/* Logo e Título (Link para Home) */}
        <Link href="/" className="flex items-center gap-2">
          {/* USANDO NEXT/IMAGE COM DIMENSÕES */}
          <Image
            src="/images/logo-otia.png"
            alt="Logo OTIAdriver"
            width={32} 
            height={32}
            className="h-8 w-auto"
          />
          {/* O seu Título estilizado, agora em tamanho de Topbar */}
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-[#1F6FEB]">OTIA</span>
            <span className="text-[#4E0E00]">driver</span>
          </span>
        </Link>
        
        {/* Navegação Principal */}
        <nav className="flex items-center gap-6 text-sm text-white/70 font-medium">
          <Link href="/caminhoes-eletricos" className="hover:text-white transition">
            Caminhões Elétricos
          </Link>
          <Link href="/planos" className="hover:text-white transition">
            Planos
          </Link>
          {/* Adicione outros links se houver */}
        </nav>
        
      </div>
    </header>
  );
}
