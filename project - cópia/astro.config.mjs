import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://drgustavomendes.com',
  output: 'hybrid',
  adapter: cloudflare({
    mode: 'directory',
    imageService: 'cloudflare',
  }),
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  vite: {
    ssr: {
      external: ['node:buffer'],
    },
  },
});
