// app/modulos/seguranca-alta-tensao/page.tsx

import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { cache } from "react";

const getContent = cache(async () => {
  const CONTENT_PATH = path.join(
    process.cwd(),
    "content",
    "modulos",
    "seguranca-alta-tensao.md"
  );

  try {
    const raw = await fs.readFile(CONTENT_PATH, "utf-8");
    const { data: frontmatter, content: mdxContent } = matter(raw);
    const source = await serialize(mdxContent, { parseFrontmatter: true });
    return { source, data: frontmatter };
  } catch (error) {
    // log para debug (local ou Vercel)
    console.error("[SegurancaAltaTensao] Erro lendo/serializando:", error);
    return null; // tratamos na rota
  }
});

export default async function SegurancaAltaTensaoPage() {
  const result = await getContent();
  if (!result) {
    // se não encontrou/ocorreu erro -> 404 do Next
    return notFound();
  }

  const { source, data } = result;

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">
        {data?.title ?? "Título Não Encontrado"}
      </h1>
      <p className="text-gray-500 mb-8">
        Por: {data?.author ?? "Autor não definido"} | Data: {data?.date ?? "—"}
      </p>

      <article className="prose lg:prose-xl">
        <MDXRemote {...source} />
      </article>
    </div>
  );
}
