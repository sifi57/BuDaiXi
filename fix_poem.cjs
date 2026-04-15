const fs = require('fs');
const path = 'src/new_chars.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/poem: '贺楼琼宇，琼宇贺楼。'/g, "poem: '苍昊云旸照吾心，白玉梳篦铮剑鸣。饮岁月，映寒锋，一剑通神天下空。'");
content = content.replace(/其诗号“贺楼琼宇，琼宇贺楼。”道尽了/g, "其诗号“苍昊云旸照吾心，白玉梳篦铮剑鸣。饮岁月，映寒锋，一剑通神天下空。”道尽了");

fs.writeFileSync(path, content);
console.log('Successfully updated He Lou Qiong Yu poem in new_chars.ts');
