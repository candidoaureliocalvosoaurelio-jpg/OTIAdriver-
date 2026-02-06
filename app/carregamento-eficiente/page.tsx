// app/carregamento-eficiente/page.tsx
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const FILE_PATH = path.join(
  process.cwd(),
  "content",
  "modulos",
  "carregamento-eficiente.md"
);

// Escape básico (evita injetar HTML cru do markdown)
function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Conversor simples de Markdown → HTML (sem libs, build-safe)
function simpleMarkdownToHtml(md: string): string {
  const lines = md.split("\n");
  const htmlLines: string[] = [];

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) {
      htmlLines.push("");
      continue;
    }

    if (line.startsWith("### "))
      htmlLines.push(`<h3>${escapeHtml(line.slice(4))}</h3>`);
    else if (line.startsWith("## "))
      htmlLines.push(`<h2>${escapeHtml(line.slice(3))}</h2>`);
    else if (line.startsWith("# "))
      htmlLines.push(`<h1>${escapeHtml(line.slice(2))}</h1>`);
    else if (line.startsWith("- "))
      htmlLines.push(`<li>${escapeHtml(line.slice(2))}</li>`);
    else htmlLines.push(`<p>${escapeHtml(line)}</p>`);
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

export default async function CarregamentoEficientePage() {
  let raw = "";
  try {
    raw = await fs.readFile(FILE_PATH, "utf8");
  } catch {
    return notFound();
  }

  const { data, content } = matter(raw);

  const title = (data?.title as string | undefined) ?? "Carregamento Eficiente";
  const author = (data?.author as string | undefined) ?? "OTIAdriver";
  const date = (data?.date as string | undefined) ?? "";
  const description = (data?.description as string | undefined) ?? "";

  const htmlContent = simpleMarkdownToHtml(content);

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/treinamentos"
            className="text-sm text-sky-700 hover:underline font-semibold"
          >
            ← Voltar para Treinamentos
          </Link>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-slate-50">
            Módulo • OTIAdriver
          </span>
        </div>

        <header className="mt-6 border-b border-slate-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h1>

          {(author || date) && (
            <p className="mt-2 text-sm text-slate-500">
              {author ? `Por: ${author}` : ""}
              {author && date ? " • " : ""}
              {date ? `Data: ${date}` : ""}
            </p>
          )}

          {description && (
            <p className="mt-3 text-slate-600 leading-relaxed">{description}</p>
          )}
        </header>

        <article className="prose prose-slate max-w-none mt-8">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>

        <div className="mt-10">
          <Link
            href="/treinamentos"
            className="text-sm text-sky-700 hover:underline font-semibold"
          >
            ← Voltar para Treinamentos
          </Link>
        </div>
      </section>
    </main>
  );
}
