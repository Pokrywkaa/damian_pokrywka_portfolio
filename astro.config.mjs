import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitLab Pages configuration
  // Update 'your-username' and 'portfolio' to match your GitLab repo
  site: 'https://your-username.gitlab.io',
  base: '/portfolio',
  
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
