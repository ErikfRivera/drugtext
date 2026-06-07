import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://www.drugtext.org';

const PRIORITY_MAP = {
  '/': { priority: 1.0, changefreq: 'daily' },
  '/about': { priority: 0.7, changefreq: 'monthly' },
  '/mission': { priority: 0.7, changefreq: 'monthly' },
  '/contact': { priority: 0.5, changefreq: 'monthly' },
  '/terms': { priority: 0.3, changefreq: 'yearly' },
  '/privacy': { priority: 0.3, changefreq: 'yearly' },
  '/brands/mynd-mushroom-chocolates': { priority: 0.8, changefreq: 'monthly' },
  '/peptides': { priority: 0.8, changefreq: 'weekly' },
  '/peptides/semax': { priority: 0.8, changefreq: 'monthly' },
};

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
    format: 'file',
  },
  compressHTML: true,
  integrations: [
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname.replace(/\/$/, '') || '/';
        const meta = PRIORITY_MAP[path];
        if (meta) {
          item.priority = meta.priority;
          item.changefreq = meta.changefreq;
        }
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
