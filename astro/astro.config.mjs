// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://franknesling.github.io',
  base: '/webieat',
  vite: {
    plugins: [tailwindcss()]
  }
})