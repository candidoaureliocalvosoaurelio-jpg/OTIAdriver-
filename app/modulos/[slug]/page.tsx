// app/modulos/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";

type ModuloPageProps = {
  params: { slug: string };
};

const MODULOS_DIR = path.join(process.cwd(), "content", "modulos");

// Gera as rotas estáticas com base nos arquivos .md em content/modulos
export async function generateStaticParams() {
  const files = fs.readdirSync(MODULOS_DIR);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }));
}

export default function ModuloPage({ params }: ModuloPageProps) {
  const filePath = path.join(MODULOS_DIR, `${params.slug}.md`);

  // Se não achar o arquivo .md, manda para 404
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const html = marked(content);

  return (
    <main className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">
        {data.title || params.slug}
      </h1>

      {data.description && (
        <p className="text-gray-600 mb-6">{data.description}</p>
      )}

      <article
        className="prose prose-slate"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
