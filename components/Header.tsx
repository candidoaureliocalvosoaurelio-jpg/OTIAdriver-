"use client";
import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-6xl flex items-center justify-start px-4 py-3">
        <Link href="/" className="flex items-center">
          <LogoMark size={90} />
        </Link>
      </div>
    </header>
  );
}
