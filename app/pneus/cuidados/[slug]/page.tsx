import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type TireCarePageProps = {
  params: { slug: string };
};

const PNEUS_DIR = path.join(process.cwd(), "content", "pneus");

// Gera rotas estáticas com base nos arquivos .md em content/pneus
export function generateStaticParams() {
  if (!fs.existsSync(PNEUS_DIR)) return [];

  return fs
    .readdirSync(PNEUS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
    }));
}

// Conversor MUITO simples de markdown -> HTML (títulos, parágrafos e listas)
function simpleMarkdownToHtml(md: string): string {
  const lines = md.split("\n");
  const htmlLines: string[] = [];

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) {
      htmlLines.push("");
      continue;
    }

    if (line.startsWith("### ")) {
      htmlLines.push(`<h3>${line.slice(4)}</h3>`);
    } else if (line.startsWith("## ")) {
      htmlLines.push(`<h2>${line.slice(3)}</h2>`);
    } else if (line.startsWith("# ")) {
      htmlLines.push(`<h1>${line.slice(2)}</h1>`);
    } else if (line.startsWith("- ")) {
      htmlLines.push(`<li>${line.slice(2)}</li>`);
    } else {
      htmlLines.push(`<p>${line}</p>`);
    }
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

export default function TireCareModulePage({ params }: TireCarePageProps) {
  const { slug } = params;
  const filePath = path.join(PNEUS_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    const available = fs
      .readdirSync(PNEUS_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""));

    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold mb-4 text-red-700">
          Módulo de Pneus não encontrado
        </h1>
        <p className="mb-4 text-gray-700">
          O arquivo <code>{slug}.md</code> não existe dentro de{" "}
          <code>content/pneus</code>.
        </p>

        {available.length > 0 && (
          <div className="mb-6">
            <p className="font-semibold mb-2">
              Módulos disponíveis em <code>content/pneus</code>:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {available.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href="/pneus/cuidados"
          className="inline-block text-sky-600 hover:underline mt-4"
        >
          ← Voltar para Cuidados com Pneus
        </Link>
      </main>
    );
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const htmlContent = simpleMarkdownToHtml(content);
  const title =
    (data.title as string | undefined) ?? "Módulo de Cuidados com Pneus";
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
          className="mt-6 prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

      <div className="mt-10 flex justify-between text-sm">
        <Link
          href="/pneus/cuidados"
          className="inline-block text-sky-600 hover:underline"
        >
          ← Voltar à lista de módulos
        </Link>
        <Link
          href="/pneus/cuidados"
          className="inline-block text-slate-500 hover:text-slate-700"
        >
          Cuidados Operacionais com Pneus
        </Link>
      </div>
    </main>
  );
}
