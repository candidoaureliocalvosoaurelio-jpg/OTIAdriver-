"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/proposito", label: "Propósito" },
  { href: "/caminhoes-eletricos", label: "Caminhões Elétricos ⚡" },
  { href: "/planos", label: "Planos" },
  { href: "/pneus", label: "Pneus" },
  { href: "/inspecao-manutencao", label: "Inspeção e Manutenção" },
  { href: "/treinamentos", label: "Treinamentos" },
  { href: "/simbolos-painel", label: "Símbolos do Painel" },
];

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

            {/* Linha 2 – OTIAdriver */}
            <span className="block text-sm sm:text-base md:text-lg font-extrabold tracking-tight">
              <span className="text-[#003F9A]">OTIA</span>
              <span className="text-[#15B8B2]">driver</span>
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP (ESTILO BARRA + MAIÚSCULAS + SEPARADORES) */}
        <nav className="hidden md:flex items-center text-[12px] lg:text-[13px] font-extrabold uppercase tracking-wide">
          {navLinks.map((item, idx) => (
            <div key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className="px-3 py-2 hover:underline underline-offset-4"
              >
                {item.label}
              </Link>

              {/* Separador | (não aparece no último item) */}
              {idx < navLinks.length - 1 && (
                <span className="mx-1 text-white/80 select-none" aria-hidden>
                  |
                </span>
              )}
            </div>
          ))}

          {/* EBOOK (destaque) */}
          <span className="mx-1 text-white/80 select-none" aria-hidden>
            |
          </span>
          <Link
            href="/ebook-driver"
            className="px-3 py-2 hover:underline underline-offset-4 text-yellow-300"
          >
            Ebook Driver Economy
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

      {/* MENU MOBILE (mantém padrão atual) */}
      {menuOpen && (
        <nav className="md:hidden px-6 pb-4 text-sm font-semibold bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] border-t border-white/20">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/ebook-driver"
            className="block py-2 text-yellow-200"
            onClick={() => setMenuOpen(false)}
          >
            Ebook Driver Economy
          </Link>
        </nav>
      )}
    </header>
  );
}
