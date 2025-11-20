// app/modulos/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

type ModuloPageProps = {
  params: { slug: string };
};

const MODULES_DIR = path.join(process.cwd(), "content", "modulos");

// Gera as rotas estáticas com base nos arquivos .md
export async function generateStaticParams() {
  const files = fs.readdirSync(MODULES_DIR);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
    }));
}

export default function ModuloPage({ params }: ModuloPageProps) {
  const { slug } = params;

  const filePath = path.join(MODULES_DIR, `${slug}.md`);

  // Se não achar o arquivo .md, mostra mensagem amigável + lista de disponíveis
  if (!fs.existsSync(filePath)) {
    const available = fs
      .readdirSync(MODULES_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""));

    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold mb-4 text-red-700">
          Módulo não encontrado
        </h1>
        <p className="mb-4 text-gray-700">
          Não foi possível localizar o conteúdo do módulo:{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">
            {slug}
          </code>
        </p>

        {available.length > 0 && (
          <div className="mb-6">
            <p className="font-semibold mb-2">Módulos disponíveis em content/modulos:</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {available.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href="/caminhoes-eletricos"
          className="inline-block text-blue-600 hover:underline mt-4"
        >
          ← Voltar para o Portal de Certificação OTIAdriver
        </Link>
      </main>
    );
  }

  // Lê e processa o Markdown
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const html = marked.parse(content);

  const title =
    (data.title as string | undefined) ??
    "Módulo de Treinamento OTIAdriver";

  const description = data.description as string | undefined;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <article className="prose prose-slate max-w-none">
        <h1>{title}</h1>

        {description && (
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        )}

        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      <div className="mt-10">
        <Link
          href="/caminhoes-eletricos"
          className="inline-block text-blue-600 hover:underline"
        >
          ← Voltar para o Portal de Certificação OTIAdriver
        </Link>
      </div>
    </main>
  );
}
