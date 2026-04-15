const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');
data = data.replace(/poem: '贺楼琼宇，琼宇贺楼。'/, "poem: '苍昊云旸照吾心，白玉梳篦铮剑鸣。饮岁月，映寒锋，一剑通神天下空。'");
fs.writeFileSync('src/data.ts', data);
console.log('Poem updated.');
