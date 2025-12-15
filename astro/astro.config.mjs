// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://webie.at',

  vite: {
    plugins: [tailwindcss()]
  }
})