import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import path from 'path';

export default defineConfig({
  plugins: [
    nunjucks({
      templateDirs: [path.resolve(__dirname, 'src/templates')]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/templates/index.njk'),
        about: path.resolve(__dirname, 'src/templates/about.njk'),
        contact: path.resolve(__dirname, 'src/templates/contact.njk')
      },
      output: {
        dir: 'dist'
      }
    }
  },
  server: {
    port: 5173
  }
});
