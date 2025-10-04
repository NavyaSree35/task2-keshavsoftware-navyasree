// build.js
import fs from 'fs';
import path from 'path';
import nunjucks from 'nunjucks';

// Paths
const templatesDir = path.join(process.cwd(), 'src/templates');
const distDir = path.join(process.cwd(), 'dist');

// Create dist folder if it doesn't exist
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

// Configure Nunjucks
nunjucks.configure(templatesDir, { autoescape: true });

// List of templates to render
const files = ['index.njk', 'about.njk', 'contact.njk'];

files.forEach(file => {
  const rendered = nunjucks.render(file);
  const outPath = path.join(distDir, file.replace('.njk', '.html'));
  fs.writeFileSync(outPath, rendered);
  console.log(`${file} → ${outPath}`);
});
