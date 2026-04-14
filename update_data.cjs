const fs = require('fs');

const data = fs.readFileSync('src/data.ts', 'utf8');

// Find the start of questions
const questionsStart = data.indexOf('// Map options to specific characters based on their traits');

const newContent = `import { Character, Question, Option } from './types';
import { maleCharacters } from './characters_male';
import { femaleCharacters } from './characters_female';

export { maleCharacters, femaleCharacters };
export type { Character, Question, Option };

` + data.substring(questionsStart);

fs.writeFileSync('src/data.ts', newContent);
console.log('Updated data.ts');
