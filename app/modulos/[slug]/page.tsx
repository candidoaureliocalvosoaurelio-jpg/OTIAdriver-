// app/modulos/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

type ModuloPageProps = {
  params: { slug: string };
};

export default function ModuloPage({ params }: ModuloPageProps) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "modulos",
    `${params.slug}.md`
  );

  // Se o arquivo .md não existir, mostra mensagem amigável
  if (!fs.existsSync(filePath)) {
    return (
      <main style={{ padding: 32 }}>
        <h1>Módulo não encontrado</h1>
        <p>Slug: {params.slug}</p>
        <p>Esperado em: {filePath}</p>
      </main>
    );
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
        <p className="text-gray-700 mb-6">{data.description}</p>
      )}

      <article
        className="prose prose-slate"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
