// app/modulos/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

type ModuloPageProps = {
  params: { slug: string };
};

const MODULOS_DIR = path.join(process.cwd(), "content", "modulos");

// Gera as rotas estáticas com base nos arquivos .md em content/modulos
export async function generateStaticParams() {
  const exists = fs.existsSync(MODULOS_DIR);
  const files = exists ? fs.readdirSync(MODULOS_DIR) : [];

  console.log("generateStaticParams -> MODULOS_DIR =", MODULOS_DIR);
  console.log("generateStaticParams -> exists      =", exists);
  console.log("generateStaticParams -> files       =", files);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }));
}

export default function ModuloPage({ params }: ModuloPageProps) {
  const filePath = path.join(MODULOS_DIR, `${params.slug}.md`);
  const exists = fs.existsSync(filePath);

  console.log("ModuloPage -> MODULOS_DIR =", MODULOS_DIR);
  console.log("ModuloPage -> filePath    =", filePath);
  console.log("ModuloPage -> exists      =", exists);

  // Em vez de mandar 404, vamos mostrar debug na tela se não achar
  if (!exists) {
    return (
      <main style={{ padding: 32 }}>
        <h1>DEBUG – Arquivo não encontrado</h1>
        <p>
          <strong>Slug:</strong> {params.slug}
        </p>
        <p>
          <strong>MODULOS_DIR:</strong> {MODULOS_DIR}
        </p>
        <p>
          <strong>filePath:</strong> {filePath}
        </p>
        <p>
          <strong>fs.existsSync(filePath):</strong> {String(exists)}
        </p>
        <p>
          Verifique se esse caminho existe exatamente no Windows Explorer.
        </p>
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
        <p className="text-gray-600 mb-6">{data.description}</p>
      )}

      <article
        className="prose prose-slate"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
