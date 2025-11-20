// app/modulos/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

type ModuloPageProps = {
  params: { slug: string };
};

// Caminho dos arquivos .md
const MODULES_DIR = path.join(process.cwd(), "content", "modulos");

// Gera as páginas a partir dos arquivos .md
export async function generateStaticParams() {
  if (!fs.existsSync(MODULES_DIR)) return [];

  // Lista todos os arquivos .md e gera rotas
  return fs
    .readdirSync(MODULES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
    }));
}

export default async function ModuloPage({ params }: ModuloPageProps) {
  const { slug } = params;

  const filePath = path.join(MODULES_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold mb-4 text-red-700">
          Módulo não encontrado
        </h1>

        <p className="mb-4 text-gray-700">
          O arquivo <code>{slug}.md</code> não existe dentro de{" "}
          <code>content/modulos</code>.
        </p>

        <Link href="/caminhoes-eletricos" className="text-blue-600 hover:underline">
          ← Voltar ao portal
        </Link>
      </main>
    );
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  const title = data.title ?? "Módulo OTIAdriver";
  const description = data.description ?? "";

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <article className="prose prose-slate max-w-none">
        <h1>{title}</h1>
        {description && <p className="text-gray-600">{description}</p>}

        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>

      <Link href="/caminhoes-eletricos" className="text-blue-600 hover:underline mt-10 inline-block">
        ← Voltar ao Portal de Certificação OTIAdriver
      </Link>
    </main>
  );
}
