"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white border-b border-white/20 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Título à esquerda (sem 2ª linha) */}
        <Link href="/" className="font-semibold text-sm md:text-base tracking-tight">
          🌐 Plataforma Oficial <span className="font-extrabold">OTIAdriver</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline">Início</Link>
          <Link href="/proposito" className="hover:underline">Propósito</Link>
          <Link href="/caminhoes-eletricos" className="hover:underline">Caminhões Elétricos <span aria-hidden>⚡</span></Link>
          <Link href="/planos" className="hover:underline">Planos</Link>
          <Link href="/pneus" className="hover:underline">Pneus</Link>
          <Link href="/inspecao-manutencao" className="hover:underline">Inspeção e Manutenção</Link>
        </nav>

        {/* Menu mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-white/10"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden px-4 pb-3 pt-1 text-sm font-medium bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] border-t border-white/20">
          <Link href="/" className="block py-1.5" onClick={() => setMenuOpen(false)}>Início</Link>
          <Link href="/proposito" className="block py-1.5" onClick={() => setMenuOpen(false)}>Propósito</Link>
          <Link href="/caminhoes-eletricos" className="block py-1.5" onClick={() => setMenuOpen(false)}>Caminhões Elétricos ⚡</Link>
          <Link href="/planos" className="block py-1.5" onClick={() => setMenuOpen(false)}>Planos</Link>
          <Link href="/pneus" className="block py-1.5" onClick={() => setMenuOpen(false)}>Pneus</Link>
          <Link href="/inspecao-manutencao" className="block py-1.5" onClick={() => setMenuOpen(false)}>Inspeção e Manutenção</Link>
        </nav>
      )}
    </header>
  );
}
