"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white border-b border-white/20 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* LOGOMARCA + TEXTO 🌐 Plataforma Oficial OTIAdriver */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-otia.png" // caminho da logo no /public/images
            alt="Logomarca OTIAdriver"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xs sm:text-sm md:text-base font-semibold leading-tight">
            <span className="mr-1" aria-hidden>
              🌐
            </span>
            Plataforma Oficial{" "}
            <span className="font-extrabold">OTIAdriver</span>
          </span>
        </Link>

        {/* MENU DESKTOP – PREMIUM ++ */}
        <nav className="hidden md:flex items-center gap-8 text-sm md:text-base font-bold">
          <Link href="/" className="hover:underline">
            Início
          </Link>
          <Link href="/proposito" className="hover:underline">
            Propósito
          </Link>
          <Link href="/caminhoes-eletricos" className="hover:underline">
            Caminhões Elétricos <span aria-hidden>⚡</span>
          </Link>
          <Link href="/planos" className="hover:underline">
            Planos
          </Link>
          <Link href="/pneus" className="hover:underline">
            Pneus
          </Link>
          <Link href="/inspecao-manutencao" className="hover:underline">
            Inspeção e Manutenção
          </Link>
        </nav>

        {/* BOTÃO MENU MOBILE */}
        <button
          className="md:hidden p-2 rounded hover:bg-white/10"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* MENU MOBILE – GLASS EFFECT PREMIUM */}
      {menuOpen && (
        <nav
          className="
            md:hidden 
            px-6 pb-4 pt-2 
            text-base font-semibold
            bg-white/10 
            backdrop-blur-md 
            border-t border-white/20 
            shadow-lg
          "
        >
          <Link
            href="/"
            className="block py-2.5 border-b border-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </Link>

          <Link
            href="/proposito"
            className="block py-2.5 border-b border-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Propósito
          </Link>

          <Link
            href="/caminhoes-eletricos"
            className="block py-2.5 border-b border-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Caminhões Elétricos <span aria-hidden>⚡</span>
          </Link>

          <Link
            href="/planos"
            className="block py-2.5 border-b border-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Planos
          </Link>

          <Link
            href="/pneus"
            className="block py-2.5 border-b border-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Pneus
          </Link>

          <Link
            href="/inspecao-manutencao"
            className="block py-2.5"
            onClick={() => setMenuOpen(false)}
          >
            Inspeção e Manutenção
          </Link>
        </nav>
      )}
    </header>
  );
}
