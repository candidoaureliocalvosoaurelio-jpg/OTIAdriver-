"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white border-b border-white/20 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* LOGO / MARCA */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <div className="leading-tight">
            {/* Linha 1 – Plataforma Oficial */}
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold">
              <span className="mr-1" aria-hidden>
                🌐
              </span>
              Plataforma Oficial
            </span>

            {/* Linha 2 – OTIAdriver com cores de marca */}
            <span className="block text-sm sm:text-base md:text-lg font-extrabold tracking-tight">
              <span className="text-[#003F9A]">OTIA</span>
              <span className="text-[#15B8B2]">driver</span>
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-bold">
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
          {/* NOVO LINK – SÍMBOLOS DO PAINEL */}
          <Link href="/simbolos-painel" className="hover:underline">
            Símbolos do Painel
          </Link>
        </nav>

        {/* BOTÃO MENU MOBILE */}
        <button
          className="md:hidden p-2 rounded hover:bg-white/10"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
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

      {/* MENU MOBILE ABERTO */}
      {menuOpen && (
        <nav className="md:hidden px-6 pb-4 text-sm font-semibold bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] border-t border-white/20">
          <Link
            href="/"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            href="/proposito"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Propósito
          </Link>
          <Link
            href="/caminhoes-eletricos"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Caminhões Elétricos <span aria-hidden>⚡</span>
          </Link>
          <Link
            href="/planos"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Planos
          </Link>
          <Link
            href="/pneus"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Pneus
          </Link>
          <Link
            href="/inspecao-manutencao"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Inspeção e Manutenção
          </Link>
          {/* NOVO LINK – SÍMBOLOS DO PAINEL (MOBILE) */}
          <Link
            href="/simbolos-painel"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Símbolos do Painel
          </Link>
        {/* AQUI: novo item */}
          <Link href="/ebook-driver" className="text-sky-300 font-medium hover:text-sky-200">
            Ebook Driver
          </Link>
        </nav>
      </div>
    </header>
  );
}
