// app/sitemap.ts
import type { MetadataRoute } from "next";
import alertas from "@/data/alertas.json";

const SITE_URL = "https://www.otiadriver.com.br";

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/planos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/simbolos-painel`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const pagesFromJson: MetadataRoute.Sitemap = (alertas as any[])
    .filter((a) => a?.slug && a.slug !== "slug")
    .map((a) => ({
      url: `${SITE_URL}/${a.slug}`,
      lastModified: a.updatedAt ? new Date(a.updatedAt) : new Date(),
      changeFrequency: (a.changefreq as ChangeFreq) || "monthly",
      priority: typeof a.priority === "number" ? a.priority : 0.7,
    }));

  return [...base, ...pagesFromJson];
}
