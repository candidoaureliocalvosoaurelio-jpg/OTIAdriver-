import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 bg-zinc-900/95 backdrop-blur-sm z-50">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between border-b border-white/10">
        {/* LOGO + TÍTULO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-otia.png"
            alt="Logo OTIAdriver"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-lg font-extrabold tracking-tight">
            <span className="text-[#1F6FEB]">OTIA</span>
            <span className="text-[#40E0D0]">driver</span>
          </span>
        </Link>

        {/* NAVEGAÇÃO PRINCIPAL */}
        <nav className="flex items-center gap-6 text-sm text-white/80 font-medium">
          <Link href="/caminhoes-eletricos" className="hover:text-white transition">
            Caminhões Elétricos
          </Link>
          <Link href="/planos" className="hover:text-white transition">
            Planos
          </Link>
          <Link href="/inspecao-manutencao" className="hover:text-white transition">
            Inspeção e Manutenção
          </Link>
        </nav>
      </div>
    </header>
  );
}
