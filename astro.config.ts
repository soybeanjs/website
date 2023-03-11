import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import solidjs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import unocss from "@unocss/astro";

export default defineConfig({
  integrations: [
    react(),
    vue(),
    solidjs(),
    mdx(),
    svelte(),
    sitemap(),
    unocss(),
  ],
});
