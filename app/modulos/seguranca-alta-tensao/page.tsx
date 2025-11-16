// app/modulos/seguranca-alta-tensao/page.tsx

import { promises as fs } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { cache } from 'react'; // Importação recomendada pelo Next.js

// 1. CORREÇÃO DO CAMINHO: Usa path.resolve para garantir que o Vercel encontre o arquivo
const getContent = cache(async () => {
    const CONTENT_PATH = path.resolve(process.cwd(), 'content', 'modulos', 'seguranca-alta-tensao.md');
    
    let content;

    try {
        // Tenta ler o arquivo de conteúdo do disco
        content = await fs.readFile(CONTENT_PATH, 'utf-8');
    } catch (error) {
        // Se o arquivo não for encontrado, exibe a página 404
        console.error("Erro ao ler arquivo Markdown:", error);
        notFound();
    }

    // 2. Separa o Frontmatter (metadados) do conteúdo
    const { data: frontmatter, content: mdxContent } = matter(content);

    // 3. Serializa o conteúdo MDX para ser renderizado com segurança
    const source = await serialize(mdxContent, { parseFrontmatter: true });

    return { source, data: frontmatter };
});


// 4. Componente Principal (agora usando a função cacheada)
export default async function SegurancaAltaTensaoPage() {
    const { source, data } = await getContent();

    // Este código renderiza o seu conteúdo real
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">{data.title || "Título Não Encontrado"}</h1>
            <p className="text-gray-500 mb-8">Por: {data.author} | Data: {data.date}</p>
            
            {/* 5. Renderiza o conteúdo MDX */}
            <article className="prose lg:prose-xl">
                <MDXRemote {...source} />
            </article>
        </div>
    );
}
