const fs = require('fs');
const path = require('path');

const files = [
  'blogTranslations.ts',
  'categoryTranslations.ts',
  'customOrderTranslations.ts',
  'homeTranslations.ts',
  'partnershipTranslations.ts',
  'productsTranslations.ts'
];

for (const file of files) {
  const filePath = path.join('c:/lasbekasi/src/utils', file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find where 'ar:' or '"ar":' or 'ar: {' starts
  // We look for ',\n    ar: ' or ',\r\n    ar: ' or ',\n  ar: '
  const arIndex = content.search(/,\s*ar:\s*\{/);
  
  if (arIndex !== -1) {
    // Truncate the content at arIndex and append '};'
    content = content.substring(0, arIndex) + '\n};\n';
    fs.writeFileSync(filePath, content);
    console.log(`Successfully trimmed ${file}`);
  } else {
    console.log(`Could not find 'ar:' in ${file}`);
  }
}
