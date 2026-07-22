import { readFile, writeFile } from 'fs/promises';

const patches = [
  {
    file: 'generate-pdf.mjs',
    description: 'PDF margins 0.6in → 0.2in (CSS @page constant)',
    find: `const PDF_PAGE_MARGIN = '0.6in';`,
    replace: `const PDF_PAGE_MARGIN = '0.2in';`,
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
