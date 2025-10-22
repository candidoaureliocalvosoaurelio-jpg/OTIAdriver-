// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#0A2A6C] text-white shadow-md">
      {/* Logo → página inicial */}
      <Link href="/" className="flex items-center gap-2">
        {/* Troque o src se seu arquivo for outro ou remova o <Image /> */}
        <Image src="/favicon.png" alt="OTIAdriver" width={28} height={28} priority />
        <span className="font-semibold tracking-wide">OTIAdriver</span>
      </Link>

      {/* Navegação simples (ajuste os links conforme suas rotas) */}
      <nav className="flex items-center gap-4 text-sm">
        <Link href="/essencia" className="hover:underline">Essência</Link>
        <Link href="/planos" className="hover:underline">Planos</Link>
        <Link href="/suporte" className="hover:underline">Suporte</Link>
      </nav>
    </header>
  );
}
