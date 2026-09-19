import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Domain produksi final.
const SITE_URL = 'https://primavieri.id';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
