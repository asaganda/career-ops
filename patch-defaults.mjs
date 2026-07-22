import { readFile, writeFile } from 'fs/promises';

const patches = [
  {
    file: 'generate-pdf.mjs',
    description: 'PDF margins 0.6in → 0.2in',
    find: `      margin: {
        top: '0.6in',
        right: '0.6in',
        bottom: '0.6in',
        left: '0.6in',
      },`,
    replace: `      margin: {
        top: '0.2in',
        right: '0.2in',
        bottom: '0.2in',
        left: '0.2in',
      },`,
  },
  {
    file: 'modes/_shared.md',
    description: 'Template reference → cv-template-custom.html',
    find: '| Read | cv.md, _profile.md, article-digest.md, cv-template.html |',
    replace: '| Read | cv.md, _profile.md, article-digest.md, cv-template-custom.html |',
  },
];

let applied = 0;
let skipped = 0;

for (const patch of patches) {
  const content = await readFile(patch.file, 'utf8');

  if (content.includes(patch.replace)) {
    console.log(`⏭  Already applied: ${patch.description}`);
    skipped++;
    continue;
  }

  if (!content.includes(patch.find)) {
    console.log(`⚠️  Not found (may have changed upstream): ${patch.description}`);
    skipped++;
    continue;
  }

  await writeFile(patch.file, content.replace(patch.find, patch.replace));
  console.log(`✅ Patched: ${patch.description}`);
  applied++;
}

console.log(`\nDone. ${applied} applied, ${skipped} skipped.`);
