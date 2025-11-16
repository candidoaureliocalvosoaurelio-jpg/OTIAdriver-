// app/modulos/seguranca-alta-tensao/page.tsx

import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { cache } from "react";

const getContent = cache(async () => {
    // Usa path.resolve para criar um caminho absoluto a partir da raiz do projeto
    const CONTENT_PATH = path.resolve(process.cwd(), 'content', 'modulos', 'seguranca-alta-tensao.md');
    
    let content;

    try {
        // Tenta ler o arquivo de conteúdo
        content = await fs.readFile(CONTENT_PATH, 'utf-8');
    } catch (error) {
        // Registra o erro e retorna nulo para evitar o crash do build
        console.error("ERRO CRÍTICO DE BUILD: Não foi possível ler o arquivo Markdown:", CONTENT_PATH, error);
        return null;
    }

    // Se o conteúdo for lido com sucesso:
    const { data: frontmatter, content: mdxContent } = matter(content);

    // Finaliza a serialização
    const source = await serialize(mdxContent, { parseFrontmatter: true });
    return { source, data: frontmatter };
  } catch (error) {
    // log para debug (local ou Vercel)
    console.error("[SegurancaAltaTensao] Erro lendo/serializando:", error);
    return null; // tratamos na rota
  }
});

// 4. Componente Principal (agora usando a função cacheada)
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
