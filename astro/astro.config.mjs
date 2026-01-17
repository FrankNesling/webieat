// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://franknesling.github.io/webieat',
  base: '',
  build: {
    assetsPrefix: './webieat',
  },
  vite: {
    plugins: [tailwindcss()]
  }
})