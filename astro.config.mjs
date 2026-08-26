import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yunlambert.github.io',
  output: 'static',
  build: {
    format: 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true
    }
  }
});
