import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://qwertic.xyz",
  integrations: [sitemap({ lastmod: new Date() })],
  vite: {
    build: {
      // Lightning CSS folds animation-timeline into the animation shorthand, which browsers reject,
      // so production lost every scroll-driven animation. esbuild keeps the longhand as written.
      cssMinify: "esbuild",
    },
  },
});
