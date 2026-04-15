const fs = require('fs');
const content = fs.readFileSync('src/new_chars.ts', 'utf8');
const regex = /id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*poem:\s*'([^']+)'/g;
let match;
while ((match = regex.exec(content)) !== null) {
  if (match[3].includes(match[2]) && match[3].length < 20) {
    console.log(`${match[1]}: ${match[2]} - ${match[3]}`);
  }
}
