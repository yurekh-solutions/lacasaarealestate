const fs = require('fs');
let content = fs.readFileSync('src/pages/Index.tsx', 'utf8');
content = content.replace(/  <\/>\n\);/g, '  </>\n  );\n};');
fs.writeFileSync('src/pages/Index.tsx', content);
console.log('Fixed!');
