import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/works", "/notes/*", "/api/og/*"],
      disallow: "/private/",
    },
    sitemap: "https://qwertic.dev/sitemap.xml",
  };
}
