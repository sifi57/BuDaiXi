const fs = require('fs');

const maleChars = [
  { id: 'shiyanwen', name: '史艳文', poem: '回忆迷惘杀戮多，往事情仇待如何？绢写黑诗无限恨，夙兴夜寐枉徒劳。', traits: ['纯粹的仁慈与宽恕', '背负天下骂名的担当', '在理想与现实间的挣扎'] },
  { id: 'moshizhiyan', name: '末世之艳', poem: '末世之艳，艳绝末世。', traits: ['极致的华丽与毁灭', '对美的偏执追求', '在绝望中绽放的疯狂'] },
  { id: 'tianzhidao', name: '天之道', poem: '天之道，损有余而补不足。', traits: ['顺应天命的淡然', '平衡万物的智慧', '超脱世俗的冷眼旁观'] },
  { id: 'yexiaochai', name: '叶小钗', poem: '征衣红尘化云烟，江湖落拓不知年，剑痴刀狂世纷云，今将衣钵卸双肩。', traits: ['沉默无言的绝对忠诚', '剑道与刀道的极致追求', '历经沧桑后的返璞归真'] },
  { id: 'hudiejun', name: '阴川蝴蝶君', poem: '坏人有坏人的气魄，规矩有规矩的眉角，杀手有杀手的角度，游戏有游戏的魅力。', traits: ['傲娇外表下的深情', '对金钱与爱情的执着', '独特的杀手美学'] },
  { id: 'juanshoutian', name: '倦收天', poem: '江天一色无纤尘，鱼龙潜跃观道真。', traits: ['如旭日般的耀眼正气', '对剑道的纯粹信仰', '在光芒背后的孤独'] },
  { id: 'yuanwuxiang', name: '原无乡', poem: '原无乡，乡无原。', traits: ['银骠当家的责任感', '温润如玉的处世哲学', '为了大局的隐忍与牺牲'] },
  { id: 'tanwuyu', name: '谈无欲', poem: '真神真圣亦真仙，通儒通道是通贤；脑中玄机用不尽，统辖文武半边天。', traits: ['与素还真并立的傲气', '月才子的清冷与智谋', '从争名夺利到心系苍生的蜕变'] },
  { id: 'yiyeshu', name: '一页书', poem: '世事如棋，乾坤莫测，笑尽英雄啊！', traits: ['扫荡群邪的雷霆手段', '超越凡俗的佛门高僧', '为了正义不惜化身修罗的决绝'] },
  { id: 'liuhuocanglong', name: '六祸苍龙', poem: '天下无道，灾生四端，苍龙一吼，破天一剑！', traits: ['霸王之姿的野心', '在权力巅峰的迷失与顿悟', '对天下霸业的执着'] },
  { id: 'jingtaojun', name: '静涛君', poem: '静涛无波，暗流汹涌。', traits: ['深藏不露的智谋', '对道门的绝对忠诚', '在平静外表下的算计'] },
  { id: 'qingyangzi', name: '青阳子', poem: '万里黄沙不见僧，狂风暴雨掩儒生。三教原本道为首，焉能平坐共齐名。', traits: ['重振道门的宏大抱负', '雄才大略的领导力', '在挫折中不断崛起的韧性'] },
  { id: 'jingriguming', name: '竞日孤鸣', poem: '北龙归心叹长穹，孤鸣一意战群雄。', traits: ['北竞王的深沉城府', '为了王权的隐忍与算计', '在权力斗争中的孤独'] },
  { id: 'cangyueguming', name: '苍越孤鸣', poem: '苍狼孤影，越步天涯。', traits: ['从单纯王子到铁血君王的蜕变', '对苗疆的深沉热爱', '在背叛与痛苦中重生的坚韧'] },
  { id: 'qianxueguming', name: '千雪孤鸣', poem: '千雪孤鸣，狼族骄傲。', traits: ['重情重义的豪爽性格', '在兄弟与国家间的艰难抉择', '对自由的向往'] },
  { id: 'zanghunhuang', name: '葬魂皇', poem: '寰宇尽灭，葬魂称皇。', traits: ['毁灭一切的霸气', '对力量的绝对崇拜', '在杀戮中寻找存在的意义'] },
  { id: 'yuetianji', name: '阅天机', poem: '阅尽天机，算无遗策。', traits: ['洞悉未来的智慧', '在天命与人事间的博弈', '智者的孤独与无奈'] },
  { id: 'yushilun', name: '玉世论', poem: '玉世论，论世玉。', traits: ['温润如玉的君子风度', '对世事变迁的淡然', '在乱世中坚守本心'] },
  { id: 'gongwuhou', name: '宫无后', poem: '无后为大，宫中无后。', traits: ['凄美绝伦的悲剧色彩', '在残酷命运中的挣扎', '对自由与爱的渴望'] },
  { id: 'heiseshijiu', name: '黑色十九', poem: '黑色的十九，十九的黑色。', traits: ['冷酷无情的杀手本能', '在黑暗中寻找光明的渴望', '对宿命的反抗'] },
  { id: 'fengxiuzhuren', name: '枫岫主人', poem: '笑看嫣红染半山，逐风万里白云间，逍遥此身不为客，天地三才任平凡。', traits: ['神秘莫测的隐士风度', '运筹帷幄的深远智谋', '为了大局甘愿牺牲的伟大'] },
  { id: 'heibailangjun', name: '黑白郎君', poem: '别人的失败，就是我的快乐啦！', traits: ['狂傲不羁的武痴性格', '对挑战强者的无限渴望', '黑白分明的极致人生'] },
  { id: 'fuyingzhaizhu', name: '拂樱斋主', poem: '拂樱斋主，斋主拂樱。', traits: ['双重身份的复杂性', '在正邪之间的游走', '对友情的珍视与背叛'] },
  { id: 'luohou', name: '罗喉', poem: '吾之双足踏出战火，吾之双手紧握毁灭，吾名——罗喉。', traits: ['武君的绝对霸气', '被历史背叛的悲剧英雄', '在毁灭与救赎间的挣扎'] },
  { id: 'huangquan', name: '黄泉', poem: '黄泉路，路黄泉。', traits: ['傲娇与毒舌的外表', '对罗喉的复杂情感', '在复仇与守护间的成长'] },
  { id: 'zuiyinhuanglong', name: '醉饮黄龙', poem: '单刀残剑饮寒风，今朝有酒醉黄龙。', traits: ['御天五龙之首的责任', '豪放不羁的性格', '对兄弟的深厚情谊'] },
  { id: 'xiaojiandun', name: '笑剑钝', poem: '鹏抟九万，腰缠万贯，扬州鹤背骑来惯。事间关，景阑珊，黄金不富英雄汉。一片世情天地间。白，也是眼。青，也是眼。', traits: ['雅少的高贵与风雅', '在红尘中保持清醒的智慧', '对朋友的绝对忠诚'] },
  { id: 'xiaoribiao', name: '啸日猋', poem: '啸日猋，猋日啸。', traits: ['多重人格的疯狂与痛苦', '在混乱中寻找自我的挣扎', '对爱情的纯粹与执着'] },
  { id: 'modaojuechen', name: '漠刀绝尘', poem: '荒漠狂沙走万里，孤寂天涯一人行。', traits: ['沉默寡言的孤傲', '背负灭族之仇的沉重', '在刀道上的极致追求'] },
  { id: 'zimangxinghen', name: '紫芒星痕', poem: '紫芒星痕，星痕紫芒。', traits: ['冷酷的杀手本色', '在黑暗中寻找光明的渴望', '对宿命的反抗'] },
  { id: 'mowangzi', name: '魔王子', poem: '吾骗你的。', traits: ['绝对的虚无主义', '对世俗道德的彻底颠覆', '在疯狂中揭露人性的虚伪'] },
  { id: 'bailixiaoxiang', name: '百里潇湘', poem: '百里潇湘，潇湘百里。', traits: ['还珠楼代楼主的野心', '在权力斗争中的算计', '对温皇的复杂情感'] },
  { id: 'baoyuxinnu', name: '暴雨心奴', poem: '暴雨心奴，心奴暴雨。', traits: ['病态的痴恋与疯狂', '在嫉妒与仇恨中的沉沦', '对绮罗生的扭曲情感'] },
  { id: 'shangguanhongxin', name: '上官鸿信', poem: '雁王，王雁。', traits: ['雁王的深沉与冷酷', '对默苍离的复杂情感', '在绝望中寻找希望的挣扎'] },
  { id: 'xueshanyinyan', name: '雪山银燕', poem: '雪山银燕，银燕雪山。', traits: ['单纯鲁莽的热血青年', '在挫折中不断成长的坚韧', '对家人的深厚感情'] },
  { id: 'lushi', name: '戮世摩罗', poem: '戮世摩罗，摩罗戮世。', traits: ['修罗国度帝尊的霸气', '在正邪之间的游走', '对家人的复杂情感'] },
  { id: 'jianwuji', name: '剑无极', poem: '无极剑，剑无极。', traits: ['嘴贱心软的性格', '在挫折中不断成长的坚韧', '对凤蝶的深厚感情'] },
  { id: 'yinghuangzhuwu', name: '银鍠朱武', poem: '银鍠朱武，朱武银鍠。', traits: ['异度魔界战神的霸气', '在爱情与责任间的艰难抉择', '对和平的向往'] },
  { id: 'shangfengyue', name: '尚风悦', poem: '尚风悦，悦风尚。', traits: ['风雅的性格', '在红尘中保持清醒的智慧', '对朋友的绝对忠诚'] }
];

const femaleChars = [
  { id: 'zhimengshi', name: '织梦师', poem: '江湖生涯如梦如幻，织梦一生转眼成空。', traits: ['编织梦境的神秘能力', '在虚幻与真实间的迷失', '对宿命的无奈与叹息'] },
  { id: 'helouqiongyu', name: '贺楼琼宇', poem: '贺楼琼宇，琼宇贺楼。', traits: ['高贵冷艳的气质', '在权力斗争中的算计', '对爱情的执着与疯狂'] },
  { id: 'hongchenxue', name: '红尘雪', poem: '凌波影里空留恨，红尘雪中暗伤神。', traits: ['洛神的高贵与风雅', '在红尘中保持清醒的智慧', '对爱情的纯粹与执着'] },
  { id: 'manxieyin', name: '曼邪音', poem: '曼邪音，音邪曼。', traits: ['修罗国度三尊之一的霸气', '在战场上的冷酷无情', '对帝鬼的绝对忠诚'] }
];

function generateAnalysis(char) {
  const bio = `【生平简介】\n${char.name}，布袋戏中的经典角色。其诗号“${char.poem}”道尽了一生的波澜壮阔。在风起云涌的武林中，${char.name}以其独特的性格和行事作风，在江湖的历史长河中留下了浓墨重彩的一笔。无论是面对权力的诱惑、生死的考验，还是情感的纠葛，${char.name}都展现出了令人难忘的特质。其一生，是一部充满戏剧张力的史诗，在爱恨情仇的交织中，谱写了一曲动人的悲歌，成为了无数戏迷心中不可磨灭的印记。`;
  
  const trait1 = `【${char.traits[0]}】\n你拥有着与${char.name}相似的灵魂特质，那是一种${char.traits[0]}的深刻体现。在你的内心深处，隐藏着一种不为人知的力量，这种力量驱使着你在面对困难和挑战时，能够展现出超乎常人的坚韧与决绝。你不会轻易被世俗的眼光所左右，你有着自己坚定不移的信念和原则。在复杂的人际关系中，你往往能够保持清醒的头脑，看透事物的本质。你的这种特质，让你在人群中显得卓尔不群，但也注定了你要承受更多的孤独与误解。你就像是一把隐藏在暗处的利刃，平时光华内敛，但在关键时刻，却能爆发出惊人的锋芒。`;
  
  const trait2 = `【${char.traits[1]}】\n你的性格中还包含着${char.traits[1]}的复杂面向。这使得你在处理问题时，往往会采取一种与众不同的方式。你可能在外表上显得冷酷无情，但内心却隐藏着最柔软的温情；或者你可能在外表上显得玩世不恭，但内心却有着最深沉的责任感。这种强烈的反差，让你成为了一个充满魅力的矛盾体。你善于在各种极端的境遇中寻找平衡，你能够在绝望中看到希望，也能够在繁华中看到虚无。你的这种特质，让你的人生充满了戏剧性，也让你在面对命运的捉弄时，能够展现出一种超然的从容。`;
  
  const trait3 = `【${char.traits[2]}】\n最终，你的人生轨迹将不可避免地走向${char.traits[2]}的宿命。你深知这个世界的残酷和人性的丑恶，但你并没有因此而放弃对美好的追求。你愿意为了你心中的理想和信念，付出一切代价，哪怕最终的结果是毁灭。你的这种悲剧美学倾向，让你在面对生死的抉择时，能够展现出一种令人震撼的决绝。你就像是一只扑火的飞蛾，明知是死，也要追求那一瞬间的极致光明。你的存在，是对这个平庸世界的一种无声反抗，你的故事，将成为江湖中永远流传的凄美传说。`;
  
  const resonance = `【灵魂共鸣】\n你与${char.name}的灵魂共鸣，在于你们都拥有一颗不甘平庸的心。你们都在试图用自己的方式，在这个浑浊的世界中寻找属于自己的位置。你们的孤独、你们的挣扎、你们的牺牲，都是为了证明自己曾经真实地存在过。在未来的道路上，愿你能像${char.name}一样，无论面对怎样的风雨，都能坚守本心，活出属于自己的精彩。`;

  return `${bio}\n\n${trait1}\n\n${trait2}\n\n${trait3}\n\n${resonance}`;
}

let maleContent = `import { Character } from './types';\n\nexport const newMaleCharacters: Character[] = [\n`;
maleChars.forEach(c => {
  maleContent += `  { id: '${c.id}', name: '${c.name}', poem: '${c.poem}', analysis: \`${generateAnalysis(c)}\` },\n`;
});
maleContent += `];\n`;

let femaleContent = `import { Character } from './types';\n\nexport const newFemaleCharacters: Character[] = [\n`;
femaleChars.forEach(c => {
  femaleContent += `  { id: '${c.id}', name: '${c.name}', poem: '${c.poem}', analysis: \`${generateAnalysis(c)}\` },\n`;
});
femaleContent += `];\n`;

fs.writeFileSync('src/new_chars.ts', maleContent + '\n' + femaleContent);
console.log('Generated new characters');
