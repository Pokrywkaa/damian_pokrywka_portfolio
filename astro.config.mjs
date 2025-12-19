import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages configuration
  site: 'https://pokrywkaa.github.io',
  base: '/damian_pokrywka_portfolio',
  
  // Static output for GitLab Pages
  output: 'static',
  
  // Build configuration
  build: {
    assets: 'assets',
  },
  
  // Optimizations
  compressHTML: true,
  
  // Vite configuration
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
