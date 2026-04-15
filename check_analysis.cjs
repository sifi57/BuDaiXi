const fs = require('fs');
const content = fs.readFileSync('src/new_chars.ts', 'utf8');
const regex = /name:\s*'([^']+)',\s*poem:\s*'[^']+',\s*analysis:\s*`([^`]+)`/g;
let match;
let count = 0;
while ((match = regex.exec(content)) !== null) {
  if (match[2].includes('布袋戏中的经典角色')) {
    console.log(match[1]);
    count++;
  }
}
console.log(`Total generic: ${count}`);
