import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://ngdat.com",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark"
      }
    }), 
    sitemap()
  ],
  output: "static",
  adapter: cloudflare(),
  build: {
    assets: "assets",
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/noop"
    }
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark"
    }
  }
});
