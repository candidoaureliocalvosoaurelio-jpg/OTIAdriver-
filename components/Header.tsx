"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        
        {/* 🔹 Lado esquerdo — link Propósito */}
        <a
          href="/#proposito"
          className="text-sm font-semibold text-[#004AAD] hover:underline"
        >
          Propósito
        </a>

        {/* 🔹 Lado direito — logo / nome */}
        <Link href="/" className="text-xl font-extrabold tracking-tight text-gray-900">
          OTIAdriver
        </Link>
      </div>
    </header>
  );
}
