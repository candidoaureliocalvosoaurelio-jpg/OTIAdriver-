import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    // ✅ ID fixo do app (importante para Android/Chrome)
    id: "/",

    name: "OTIAdriver",
    short_name: "OTIAdriver",
    description: "Conhecimento Inteligente para Motoristas",

    start_url: "/",
    scope: "/",

    display: "standalone",

    background_color: "#ffffff",
    theme_color: "#0ea5e9",

    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
