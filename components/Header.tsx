// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo-otiadriver.png"
              alt="OTIAdriver Logo"
              width={40}
              height={40}
              priority
            />
            <span className="font-extrabold text-xl text-gray-900">
              OTIAdriver
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-blue-600">
              Início
            </Link>
            <Link href="/caminhoes" className="hover:text-blue-600">
              Caminhões
            </Link>
            <Link href="/caminhoes-eletricos" className="hover:text-blue-600">
              Caminhões Elétricos ⚡
            </Link>
            <Link href="/sobre" className="hover:text-blue-600">
              Sobre
            </Link>
            <Link href="/contato" className="hover:text-blue-600">
              Contato
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-3 text-sm font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Início
            </Link>
            <Link href="/caminhoes" onClick={() => setIsOpen(false)}>
              Caminhões
            </Link>
            <Link href="/caminhoes-eletricos" onClick={() => setIsOpen(false)}>
              Caminhões Elétricos ⚡
            </Link>
            <Link href="/sobre" onClick={() => setIsOpen(false)}>
              Sobre
            </Link>
            <Link href="/contato" onClick={() => setIsOpen(false)}>
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
          }
