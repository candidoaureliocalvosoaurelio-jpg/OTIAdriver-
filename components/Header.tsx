"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-otia.png"
            alt="Logo OTIAdriver"
            width={42}
            height={42}
            className="object-contain"
          />
          <div className="leading-tight">
            <span className="font-extrabold text-xl tracking-tight">
              OTIAdriver
            </span>
            <div className="text-[11px] text-white/90">
              Conhecimento Inteligente para Motoristas
            </div>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <Link href="/" className="hover:underline">Início</Link>
          <Link href="/proposito" className="hover:underline">Propósito</Link>
          <Link href="/caminhoes-eletricos" className="hover:underline">
            Caminhões Elétricos ⚡
          </Link>
          <Link href="/planos" className="hover:underline">Planos</Link>
          <Link href="/pneus" className="hover:underline">Pneus</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] px-6 py-4 space-y-3 text-white font-medium border-t border-white/20">
          <Link href="/" className="block" onClick={() => setMenuOpen(false)}>
            Início
          </Link>
          <Link href="/proposito" className="block" onClick={() => setMenuOpen(false)}>
            Propósito
          </Link>
          <Link href="/caminhoes-eletricos" className="block" onClick={() => setMenuOpen(false)}>
            Caminhões Elétricos ⚡
          </Link>
          <Link href="/planos" className="block" onClick={() => setMenuOpen(false)}>
            Planos
          </Link>
          <Link href="/pneus" className="block" onClick={() => setMenuOpen(false)}>
            Pneus
          </Link>
          <Link href="/Inspeção e Manutenção" className="block" onClick={() => setMenuOpen(false)}>
            Inspeção e Manutenção
          </Link>
        </nav>
      )}
    </header>
  );
}
