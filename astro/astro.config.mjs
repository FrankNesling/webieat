// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://franknesling.github.io',
  base: '/webieat',
  build: {
    assetsPrefix: './webieat',
  },
  vite: {
    plugins: [tailwindcss()]
  }
})