const fs = require('fs');

function updateFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const r of replacements) {
    content = content.replace(r.search, r.replace);
  }
  fs.writeFileSync(filePath, content);
}

const newCharsReplacements = [
  {
    search: /poem: '末世之艳，艳绝末世。'/g,
    replace: "poem: '君不见蕣华不终朝，须臾淹冉零落销，盛年妖艳浮华辈，不久亦当诣冢头。为此令人多悲悒，君当纵意多熙怡。'"
  },
  {
    search: /其诗号“末世之艳，艳绝末世。”道尽了/g,
    replace: "其诗号“君不见蕣华不终朝，须臾淹冉零落销，盛年妖艳浮华辈，不久亦当诣冢头。为此令人多悲悒，君当纵意多熙怡。”道尽了"
  },
  {
    search: /poem: '曼邪音，音邪曼。'/g,
    replace: "poem: '闼婆曼姿，了却病苦短事；食香谁主，喟叹长生不如。'"
  },
  {
    search: /其诗号“曼邪音，音邪曼。”道尽了/g,
    replace: "其诗号“闼婆曼姿，了却病苦短事；食香谁主，喟叹长生不如。”道尽了"
  },
  {
    search: /poem: '银鍠朱武，朱武银鍠。'/g,
    replace: "poem: '浪荡江山，撇置图腾，雄心懒逐。半生闲赋，满目繁华，一剑终束。'"
  },
  {
    search: /其诗号“银鍠朱武，朱武银鍠。”道尽了/g,
    replace: "其诗号“浪荡江山，撇置图腾，雄心懒逐。半生闲赋，满目繁华，一剑终束。”道尽了"
  },
  {
    search: /poem: '千雪孤鸣，狼族骄傲。'/g,
    replace: "poem: '千年雪峰无人迹，苍鹰孤鸣自为王。'"
  },
  {
    search: /其诗号“千雪孤鸣，狼族骄傲。”道尽了/g,
    replace: "其诗号“千年雪峰无人迹，苍鹰孤鸣自为王。”道尽了"
  },
  {
    search: /poem: '天下无道，灾生四端，苍龙一吼，破天一剑！'/g,
    replace: "poem: '天下无道，灾生四端，苍龙飞升，六祸禁绝。'"
  },
  {
    search: /其诗号“天下无道，灾生四端，苍龙一吼，破天一剑！”道尽了/g,
    replace: "其诗号“天下无道，灾生四端，苍龙飞升，六祸禁绝。”道尽了"
  }
];

updateFile('src/new_chars.ts', newCharsReplacements);

const femaleCharsReplacements = [
  {
    search: /poem: '尘世无情，长琴无焰；一曲广陵，天下安澜。'/g,
    replace: "poem: '玉律惊声动幽冥，风起榣山舞凤鸣；抚驭烽火无焰色，长琴响彻胜弦名。'"
  }
];

updateFile('src/characters_female.ts', femaleCharsReplacements);

console.log('Successfully updated poems.');
