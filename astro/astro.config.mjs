// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://webie.at',
  build: {
    assetsPrefix: './astro',
  },
  vite: {
    plugins: [tailwindcss()]
  }
})