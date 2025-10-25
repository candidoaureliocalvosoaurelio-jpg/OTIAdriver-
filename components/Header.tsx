"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        
        {/* 🔹 Logo / Nome OTIAdriver */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-[#004AAD]">
            OTI<span className="text-[#00C3A0]">Adriver</span>
          </span>
        </Link>

        {/* 🔹 MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Início</Link>
          <Link href="/caminhoes" className="hover:text-blue-600 transition">Caminhões</Link>
          <Link href="/caminhoes-eletricos" className="hover:text-blue-600 transition">Caminhões Elétricos ⚡</Link>

          {/* 🌍 Link Propósito — abre Missão, Visão, Valores */}
          <Link
            href="/proposito"
            className="text-sm font-semibold text-[#004AAD] hover:underline transition"
          >
            Propósito
          </Link>

          <Link href="/sobre" className="hover:text-blue-600 transition">Sobre</Link>
          <Link href="/contato" className="hover:text-blue-600 transition">Contato</Link>
        </nav>

        {/* 🔹 MENU MOBILE (botão hamburguer) */}
        <button
          className="md:hidden p-2 text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔹 MENU MOBILE ABERTO */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <nav className="flex flex-col p-4 space-y-3 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Início</Link>
            <Link href="/caminhoes" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Caminhões</Link>
            <Link href="/caminhoes-eletricos" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Caminhões Elétricos ⚡</Link>
            <Link href="/proposito" onClick={() => setIsOpen(false)} className="text-[#004AAD] font-semibold hover:underline">Propósito</Link>
            <Link href="/sobre" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Sobre</Link>
            <Link href="/contato" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contato</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
