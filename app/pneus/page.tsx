// app/pneus/page.tsx
import Image from "next/image";
import Link from "next/link";
import { pneus } from "@/data/pneus";

export default function PneusPage() {
  return (
    <main className="min-h-screen w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl px-4 mt-8">
        {pneus.map((p) => (
          <div key={p.slug} className="text-center">
            {/* IMAGEM */}
            <div className="relative mx-auto overflow-hidden rounded-2xl bg-white border shadow-sm">
  <Image
    src={p.file}
    alt={p.name}
    width={900}
    height={600}
    className="object-contain p-4 w-full h-auto"
  />
</div>
            <h2 className="text-xl font-bold mt-3">{p.name}</h2>
            <Link href={`/pneus/${p.slug}`} className="group">
  <span
    className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold
               shadow-sm select-none
               bg-black !bg-black text-white !text-white
               hover:bg-black/90 active:translate-y-px transition"
    style={{ backgroundColor: "#000" }}   // garantia extra
  >
    Ver Pneus
  </span>
</Link>
