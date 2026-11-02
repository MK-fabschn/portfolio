// @ts-check
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

/**
 * Astro puts the `astro-island { display: contents }` rule as a <style> right before the first island, i.e. in
 * <body>, which the W3C validator rejects. After the build this moves it into <head>, where it does the same job.
 * @returns {import('astro').AstroIntegration}
 */
function islandStylesInHead() {
  const islandStyle = /<style>astro-island,astro-slot,astro-static-slot\{display:contents\}<\/style>/;
  return {
    name: 'island-styles-in-head',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const files = await readdir(dir, { recursive: true });
        let moved = 0;
        for (const file of files.filter((name) => name.endsWith('.html'))) {
          const url = new URL(file.replaceAll('\\', '/'), dir);
          const html = await readFile(url, 'utf8');
          const match = html.match(islandStyle);
          if (!match || html.indexOf(match[0]) < html.indexOf('</head>')) continue;
          await writeFile(url, html.replace(match[0], '').replace('</head>', `${match[0]}</head>`));
          moved++;
        }
        logger.info(`island style moved into <head> on ${moved} page(s)`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://fabian-trutschnig.dev',
  integrations: [react(), islandStylesInHead()],
});
