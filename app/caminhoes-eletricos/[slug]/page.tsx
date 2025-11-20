// app/caminhoes-eletricos/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: { slug: string };
};

const DIR = path.join(process.cwd(), "content", "caminhoes-eletricos");

export async function generateStaticParams() {
  const files = fs.readdirSync(DIR);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
    }));
}

export default async function TruckPage({ params }: PageProps) {
  const { slug } = params;

  const filePath = path.join(DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-red-700 font-bold text-2xl">Página não encontrada</h1>
        <p>O caminhão solicitado não possui conteúdo markdown.</p>

        <Link href="/caminhoes-eletricos" className="text-blue-600 underline mt-6 block">
          ← Voltar
        </Link>
      </main>
    );
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <article className="prose prose-slate max-w-none">
        <h1>{data.title}</h1>

        {data.image && (
          <div className="w-full mb-6">
            <Image
              src={data.image}
              alt={data.title}
              width={900}
              height={500}
              className="rounded-xl"
            />
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>

      <Link href="/caminhoes-eletricos" className="block mt-10 text-blue-600 underline">
        ← Voltar para caminhões
      </Link>
    </main>
  );
}
