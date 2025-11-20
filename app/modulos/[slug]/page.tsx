// app/modulos/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type ModuloPageProps = {
  params: { slug: string };
};

const MODULES_DIR = path.join(process.cwd(), "content", "modulos");

// Gera rotas estáticas a partir dos .md
export function generateStaticParams() {
  if (!fs.existsSync(MODULES_DIR)) return [];

  return fs
    .readdirSync(MODULES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
    }));
}

// Conversor simples de Markdown → HTML (sem remark)
function simpleMarkdownToHtml(md: string): string {
  const lines = md.split("\n");
  const htmlLines: string[] = [];

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) {
      htmlLines.push("");
      continue;
    }

    if (line.startsWith("### ")) htmlLines.push(`<h3>${line.slice(4)}</h3>`);
    else if (line.startsWith("## ")) htmlLines.push(`<h2>${line.slice(3)}</h2>`);
    else if (line.startsWith("# ")) htmlLines.push(`<h1>${line.slice(2)}</h1>`);
    else if (line.startsWith("- ")) htmlLines.push(`<li>${line.slice(2)}</li>`);
    else htmlLines.push(`<p>${line}</p>`);
  }

  // Agrupa <li> em <ul>
  const finalHtml: string[] = [];
  let inList = false;

  for (const l of htmlLines) {
    if (l.startsWith("<li>")) {
      if (!inList) {
        finalHtml.push("<ul>");
        inList = true;
      }
      finalHtml.push(l);
    } else {
      if (inList) {
        finalHtml.push("</ul>");
        inList = false;
      }
      if (l) finalHtml.push(l);
    }
  }
  if (inList) finalHtml.push("</ul>");

  return finalHtml.join("\n");
}

export default function ModuloPage({ params }: ModuloPageProps) {
  const filePath = path.join(MODULES_DIR, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold mb-4 text-red-700">Módulo não encontrado</h1>
        <p className="mb-4 text-gray-700">
          O arquivo <code>{params.slug}.md</code> não existe dentro de <code>content/modulos</code>.
        </p>
        <Link href="/caminhoes-eletricos" className="text-blue-600 hover:underline">
          ← Voltar ao portal
        </Link>
      </main>
    );
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const htmlContent = simpleMarkdownToHtml(content);

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
