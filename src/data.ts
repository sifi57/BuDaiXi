export interface Character {
  id: string;
  name: string;
  poem: string;
  analysis: string;
}

export interface Option {
  text: string;
  maleIds: string[];
  femaleIds: string[];
}

export interface Question {
  id: number;
  dimension: string;
  scene: string;
  options: Option[];
}

export const maleCharacters: Character[] = [
  {
    id: 'mocangli',
    name: '默苍离',
    poem: '历史的空白，由我来填补；你的愚蠢，由我来终结。',
    analysis: '【绝对理性的殉道者】\n你是一个绝对理性的信徒，以天下为棋局，以众生为棋子。你拥有超乎常人的洞察力和冷酷的清醒，能够在极度混乱中直击核心。为了更宏大的目标，你甚至不惜将自己也作为一枚棋子算计在内，独自背负所有的罪与罚。'
  },
  {
    id: 'quezhou',
    name: '缺舟一帆渡',
    poem: '千年共修，缺舟一帆。无边沉沦，法海渡航。',
    analysis: '【普度众生的云水行者】\n你拥有大智慧与大悲悯，试图以无我之境渡化世人。你平视着世间的一切罪恶与美好，善于用智慧去化解危机，用慈悲去感化敌人。你的力量如水般包容与渗透，是真正的和平主义者。'
  },
  {
    id: 'kouyinzi',
    name: '鷇音子',
    poem: '玄歌浪蹈，幻中道真，太誓无极，无字天书。',
    analysis: '【顺应天道的炼火之姿】\n你掌握天机，顺应天道。你以炼火之姿，焚尽世间罪恶，背负着沉重的宿命。你行事果决，不拘泥于世俗的眼光，为了心中的正道，甘愿承受烈火的淬炼。'
  },
  {
    id: 'suhuanzhen',
    name: '素还真',
    poem: '半神半圣亦半仙，全儒全道是全贤；脑中真书藏万卷，掌握文武半边天。',
    analysis: '【运筹帷幄的盛世基石】\n你将天下兴亡视为己任，在波谲云诡的局势中始终保持清醒。你拥有非凡的政治智慧和海纳百川的胸襟，善于在各种势力之间周旋、妥协、平衡，是引领众人走出黑暗的灵魂人物。'
  },
  {
    id: 'wenhuang',
    name: '神蛊温皇',
    poem: '功名爵禄尽迷津，贝叶菩提不受尘，久住青山无白眼，巢禽穴兽四时驯。',
    analysis: '【操弄规则的幕后黑手】\n你将世界视为巨大游乐场，在权力与智谋的巅峰翩翩起舞。你享受将所有人玩弄于股掌之间、看着他们按照你的剧本挣扎求生的极致愉悦。你是一个天生的导演，天下都是你的舞台。'
  },
  {
    id: 'fengduyue',
    name: '酆都月',
    poem: '剑锋所指，皆是虚妄；入魔之念，方为真实。',
    analysis: '【潜行于暗影的执念之鬼】\n你对某种事物（如剑法、艺术或情感）有着极致的偏执。为了追求巅峰，你不惜入魔，在理智与疯狂的边缘痛苦挣扎。你有一种强烈的自我毁灭倾向，在生死边缘感受真实的活着。'
  },
  {
    id: 'zuiguangyin',
    name: '最光阴',
    poem: '蹉跎错，消磨过，最是光阴化浮沫。',
    analysis: '【岁月长河中的守望者】\n你是一个游离于喧嚣之外的独行客，为了守护契约与朋友，在漫长的岁月中孤独等待。你历经沧桑却保有纯真，对时间和宿命有着独特的感知，用纯粹抵御着岁月的侵蚀。'
  },
  {
    id: 'qiluosheng',
    name: '绮罗生',
    poem: '百代繁华一朝都，谁非过客；千秋明月吹角寒，花是主人。',
    analysis: '【血色浪漫的践行者】\n你白衣沽酒，重情重义。为了兄弟和爱人，你甘愿染血，在杀戮中始终坚守着内心的温柔与风骨。你是一个在残酷现实中死守着最后一点诗意的浪漫主义者。'
  },
  {
    id: 'yiqixing',
    name: '意琦行',
    poem: '古岂无人，孤标凌云谁与客；至今有剑，冷芒照月剑皆鸣。',
    analysis: '【孤高绝尘的傲骨剑宿】\n你孤高绝尘，有着强烈的傲骨与对极致的追求。你不屑于世俗的蝇营狗苟，始终保持着自己的骄傲与底线。你的存在本身就是一种对平庸的拒绝。'
  },
  {
    id: 'yuxingyi',
    name: '欲星移',
    poem: '观星望斗觉天机，参禅论道悟佛理。',
    analysis: '【在理想与现实中挣扎的智者】\n你身兼多重身份与责任，在理想与现实、家国与天下之间痛苦挣扎。你有着极高的智谋，却也背负着沉重的道德枷锁，最终往往选择牺牲自我来成全大局。'
  },
  {
    id: 'jianzi',
    name: '剑子仙迹',
    poem: '何须剑道争锋？千人指，万人封；可问江湖鼎峰，三尺秋水尘不染，天下无双。',
    analysis: '【豁达幽默的入世高人】\n你豁达幽默，心怀天下。你以轻松的姿态化解危机，在谈笑间樯橹灰飞烟灭。你重情重义，为了朋友可以两肋插刀，是乱世中难得的一抹亮色。'
  },
  {
    id: 'longxiu',
    name: '疏楼龙宿',
    poem: '华阳初上鸿门红，疏楼更迭，龙麟不减风采；紫金箫，白玉琴，宫灯夜明昙华正盛，共饮逍遥一世悠然。',
    analysis: '【华丽无双的傲娇贵族】\n你追求极致的华丽与享受，外表傲娇、毒舌，内心却极度重情。在利益与朋友之间，你最终总是会选择朋友。你用华丽掩饰真心，是一个充满魅力的矛盾体。'
  },
  {
    id: 'fojian',
    name: '佛剑分说',
    poem: '杀生为护生，斩业非斩人。',
    analysis: '【坚定不移的修罗行者】\n你意志坚定，不为外物所动。你深知“杀生为护生”的残酷真理，为了斩断世间罪业，你甘愿化身修罗，背负所有的杀戮与骂名，你的信念如磐石般不可动摇。'
  },
  {
    id: 'qiaorulai',
    name: '俏如来',
    poem: '红尘轮回众生顾，因果循环有定数。',
    analysis: '【在血火中蜕变的仁慈领袖】\n你本性纯真仁慈，却被命运推上了风口浪尖。在血与火的淬炼中，你学会了智谋与决断，从一个青涩的修行者成长为担起天下重任的领袖，但你的内心始终保留着那一抹悲悯。'
  }
];

export const femaleCharacters: Character[] = [
  {
    id: 'jiwuxia',
    name: '霁无瑕',
    poem: '满夕霜雪人独影，红尘今古几月明？笑寒饮，惯新晴，千山已过风云行。',
    analysis: '【冰雪封冻的纯粹灵魂】\n你曾经历过黑暗，却最终拥有了最纯粹的灵魂。你在风雪中寻找自我，侠肝义胆，为了大义可以毫不犹豫地牺牲自己，如快雪时晴般短暂而绚烂。'
  },
  {
    id: 'huanghou',
    name: '凰后',
    poem: '权力，是女人最好的胭脂；而天下，不过是我的梳妆匣。',
    analysis: '【艳丽致命的权力女王】\n你野心勃勃，艳丽而致命。你将权力视为最美的装饰，在乱世中翻云覆雨，享受着将众生玩弄于股掌之间的快感。你深谙人性弱点，是危险的带刺玫瑰。'
  },
  {
    id: 'muchengxue',
    name: '暮成雪',
    poem: '有情无情，皆是红尘；暮色成雪，一剑断魂。',
    analysis: '【孤傲清冷的悲情剑客】\n你孤傲清冷，背负着沉重的恩怨。你的行事凌厉如霜雪，却在无情的江湖中苦苦寻找着一丝温情与救赎。你的爱与恨都极其纯粹，不留退路。'
  },
  {
    id: 'weishanhu',
    name: '未珊瑚',
    poem: '海面之下的暗流，才是决定汪洋方向的力量。',
    analysis: '【深藏不露的隐忍智者】\n你深藏不露，智计无双。为了未来的野心，你在暗流涌动的局势中步步为营，以柔弱之姿行雷霆之腕。你极具耐心，是隐藏在幕后的真正执棋者。'
  },
  {
    id: 'changqin',
    name: '长琴无焰',
    poem: '尘世无情，长琴无焰；一曲广陵，天下安澜。',
    analysis: '【沉稳睿智的定海神针】\n你琴艺高超，智谋深远。你在复杂的局势中运筹帷幄，以柔克刚，为了和平与秩序默默付出。你情绪稳定，格局宏大，是众人可以依赖的定海神针。'
  },
  {
    id: 'jinyanxia',
    name: '锦烟霞',
    poem: '寒云笼月，冷雨泣花，百年遗恨，一朝雪洗。',
    analysis: '【爱恨交织的痴情烈女】\n你背负着沉重的百年情仇，爱恨分明。你为了复仇与救赎在红尘中痛苦挣扎，你的情感如烈火般炽热，一旦爱上便倾尽所有，一旦被背叛便化为修罗。'
  },
  {
    id: 'linruomei',
    name: '凛若梅',
    poem: '霜雪梅花，傲骨凌冬。',
    analysis: '【坚韧不拔的傲骨寒梅】\n你坚韧不拔，孝顺重情。在残酷的江湖中，你始终保持着内心的善良与底线。你如寒冬中的梅花，越是环境恶劣，越能绽放出令人敬佩的傲骨与芬芳。'
  },
  {
    id: 'hanyancui',
    name: '寒烟翠',
    poem: '芳华刹那，痴心不悔。',
    analysis: '【飞蛾扑火的执着痴恋】\n你痴情且执着，为了心中的爱恋，甘愿牺牲一切。你不在乎世俗的眼光，不计较得失，哪怕最终的结果是毁灭，你也如飞蛾扑火般义无反顾。'
  },
  {
    id: 'yaomingyue',
    name: '姚明月',
    poem: '顺我者昌，逆我者亡。',
    analysis: '【残忍疯狂的权力暴君】\n你对权力有着极度的渴望，行事残忍嗜杀。你以美貌与毒辣闻名，为了达到目的不择手段。你享受掌控他人生死的快感，是一个令人战栗的疯狂存在。'
  },
  {
    id: 'fengdie',
    name: '凤蝶',
    poem: '蝶舞风中，剑影留痕。',
    analysis: '【冷酷外表下的柔软温情】\n你外表是冷酷无情的杀手，执行任务时干净利落。但你的内心却有着最柔软的温情，对于你真正在乎的人，你愿意付出生命去守护，是典型的外冷内热。'
  }
];

// Map options to specific characters based on their traits
export const questions: Question[] = [
  {
    id: 1,
    dimension: "面对背叛",
    scene: "你最信任的盟友在关键时刻出卖了你，导致你全军覆没。你侥幸逃生后，会怎么做？",
    options: [
      { text: "冷静分析局势，布下一个更庞大的局，让他失去一切，生不如死。", maleIds: ['mocangli', 'wenhuang', 'yuxingyi'], femaleIds: ['huanghou', 'weishanhu', 'yaomingyue'] },
      { text: "直接杀上门去，用最残忍的方式将其碎尸万段，以泄心头之恨。", maleIds: ['fengduyue', 'fojian', 'yiqixing'], femaleIds: ['jinyanxia', 'muchengxue'] },
      { text: "探明他背叛的苦衷，如果情有可原，便留他一命，但从此恩断义绝。", maleIds: ['suhuanzhen', 'qiaorulai', 'quezhou'], femaleIds: ['changqin', 'linruomei'] },
      { text: "一笑置之，认为这是命运的考验，独自饮下一壶烈酒，重新开始。", maleIds: ['jianzi', 'longxiu', 'qiluosheng', 'zuiguangyin'], femaleIds: ['jiwuxia', 'fengdie', 'hanyancui'] }
    ]
  },
  {
    id: 2,
    dimension: "权力的诱惑",
    scene: "一个可以让你统治整个武林，但需要你献祭一半寿命和所有情感的王座摆在面前。",
    options: [
      { text: "毫不犹豫地坐上去。情感是软肋，权力才是永恒的真理。", maleIds: ['mocangli', 'wenhuang'], femaleIds: ['huanghou', 'yaomingyue', 'weishanhu'] },
      { text: "一剑劈碎王座。我命由我不由天，不需要这种肮脏的施舍。", maleIds: ['yiqixing', 'fojian', 'fengduyue'], femaleIds: ['muchengxue', 'jiwuxia'] },
      { text: "将其封印。这种力量太危险，不能落入任何人手中，我来承担看守的责任。", maleIds: ['quezhou', 'suhuanzhen', 'qiaorulai'], femaleIds: ['changqin', 'linruomei'] },
      { text: "转身离开。高处不胜寒，不如与知己在江湖中逍遥快活。", maleIds: ['jianzi', 'longxiu', 'qiluosheng', 'zuiguangyin'], femaleIds: ['fengdie', 'hanyancui', 'jinyanxia'] }
    ]
  },
  {
    id: 3,
    dimension: "绝境的选择",
    scene: "你和你的爱人/挚友被困在绝谷，只有一份解药，你会怎么做？",
    options: [
      { text: "把解药给对方，自己坦然赴死，并在死前为对方安排好一切退路。", maleIds: ['suhuanzhen', 'qiaorulai', 'yuxingyi'], femaleIds: ['linruomei', 'hanyancui', 'fengdie'] },
      { text: "把解药给对方，然后自己跳下悬崖，不让对方看到自己毒发的样子。", maleIds: ['qiluosheng', 'zuiguangyin', 'longxiu'], femaleIds: ['jiwuxia', 'muchengxue'] },
      { text: "自己吃下解药。活下去才能复仇，死人的深情毫无意义。", maleIds: ['mocangli', 'wenhuang', 'kouyinzi'], femaleIds: ['huanghou', 'yaomingyue', 'weishanhu'] },
      { text: "将解药毁掉。既然不能同生，那便一起死在这里，永远不分离。", maleIds: ['fengduyue', 'fojian'], femaleIds: ['jinyanxia', 'changqin'] }
    ]
  },
  {
    id: 4,
    dimension: "对弱者的态度",
    scene: "路遇一群流民被强盗屠杀，而你正赶往一个关乎天下苍生的重要会谈，迟到将引发战争。",
    options: [
      { text: "视而不见，径直赶路。大局为重，几条人命与天下苍生相比微不足道。", maleIds: ['mocangli', 'wenhuang', 'yuxingyi'], femaleIds: ['huanghou', 'weishanhu', 'yaomingyue'] },
      { text: "雷霆出手，瞬间秒杀强盗，然后继续赶路，不留姓名。", maleIds: ['fojian', 'yiqixing', 'jianzi'], femaleIds: ['jiwuxia', 'muchengxue'] },
      { text: "留下来保护流民，安顿好他们。至于会谈，我会用其他方式阻止战争。", maleIds: ['suhuanzhen', 'qiaorulai', 'quezhou'], femaleIds: ['changqin', 'linruomei'] },
      { text: "随手抛下一些金银和暗器，让他们自己保护自己，生死由命。", maleIds: ['longxiu', 'qiluosheng', 'zuiguangyin'], femaleIds: ['fengdie', 'hanyancui', 'jinyanxia'] }
    ]
  },
  {
    id: 5,
    dimension: "武道/智道的终极",
    scene: "你毕生追求的境界终于达到，却发现高处不胜寒，再无敌手。",
    options: [
      { text: "感到极度的空虚和无聊，开始自己给自己制造麻烦，甚至培养敌人。", maleIds: ['wenhuang', 'mocangli'], femaleIds: ['huanghou', 'yaomingyue'] },
      { text: "封剑退隐，从此不问世事，在山水间寻找内心的平静。", maleIds: ['jianzi', 'longxiu', 'zuiguangyin'], femaleIds: ['changqin', 'fengdie'] },
      { text: "开宗立派，将自己的所学传承下去，教导后人。", maleIds: ['suhuanzhen', 'qiaorulai', 'quezhou'], femaleIds: ['linruomei', 'weishanhu'] },
      { text: "向天道发起挑战，哪怕粉身碎骨，也要追求更高的未知。", maleIds: ['yiqixing', 'fojian', 'fengduyue', 'kouyinzi'], femaleIds: ['jiwuxia', 'muchengxue', 'jinyanxia'] }
    ]
  },
  {
    id: 6,
    dimension: "面对流言蜚语",
    scene: "江湖上到处流传着关于你的恶毒谣言，说你是一个欺师灭祖的伪君子。",
    options: [
      { text: "顺水推舟，坐实这些谣言，让恐惧成为你最好的武器。", maleIds: ['mocangli', 'wenhuang', 'fengduyue'], femaleIds: ['huanghou', 'yaomingyue', 'weishanhu'] },
      { text: "清者自清，不屑解释。时间会证明一切，懂我的人自然懂。", maleIds: ['yiqixing', 'jianzi', 'longxiu', 'zuiguangyin'], femaleIds: ['jiwuxia', 'muchengxue', 'changqin'] },
      { text: "暗中调查，揪出造谣者，用最温和的手段让他身败名裂。", maleIds: ['suhuanzhen', 'yuxingyi', 'qiaorulai'], femaleIds: ['linruomei', 'fengdie'] },
      { text: "直接杀到流言的源头，用剑让所有闭嘴。", maleIds: ['fojian', 'qiluosheng', 'kouyinzi'], femaleIds: ['jinyanxia', 'hanyancui'] }
    ]
  },
  {
    id: 7,
    dimension: "宿命的抗争",
    scene: "预言说你注定会死于你最爱的人之手，且无法更改。",
    options: [
      { text: "提前杀掉那个预言中会杀死我的人，把命运掌握在自己手里。", maleIds: ['wenhuang', 'fengduyue', 'kouyinzi'], femaleIds: ['huanghou', 'yaomingyue'] },
      { text: "坦然接受。如果死在爱人手里是宿命，那也是一种浪漫的归宿。", maleIds: ['qiluosheng', 'zuiguangyin', 'longxiu'], femaleIds: ['hanyancui', 'jinyanxia', 'muchengxue'] },
      { text: "远离爱人，独自承受孤独，用尽一生去寻找打破预言的方法。", maleIds: ['suhuanzhen', 'qiaorulai', 'yuxingyi'], femaleIds: ['linruomei', 'fengdie', 'weishanhu'] },
      { text: "将计就计，利用这个预言布下一个大局，在死前完成自己的终极目标。", maleIds: ['mocangli', 'quezhou', 'fojian'], femaleIds: ['changqin', 'jiwuxia'] }
    ]
  },
  {
    id: 8,
    dimension: "对待过去的态度",
    scene: "你获得了一次回到过去的机会，可以改变一件你最后悔的事情。",
    options: [
      { text: "放弃这个机会。过去的遗憾造就了现在的我，改变过去就是否定自己。", maleIds: ['yiqixing', 'fojian', 'jianzi'], femaleIds: ['jiwuxia', 'changqin'] },
      { text: "回到过去，不择手段地阻止那场悲剧，哪怕引发更大的灾难。", maleIds: ['fengduyue', 'kouyinzi'], femaleIds: ['jinyanxia', 'hanyancui', 'muchengxue'] },
      { text: "回到过去，只做一个旁观者，默默地再看一眼那个已经失去的人。", maleIds: ['qiluosheng', 'zuiguangyin', 'longxiu'], femaleIds: ['fengdie', 'linruomei'] },
      { text: "利用这个机会回到过去，提前布局，获取更多的利益和权力。", maleIds: ['mocangli', 'wenhuang', 'yuxingyi'], femaleIds: ['huanghou', 'weishanhu', 'yaomingyue'] }
    ]
  },
  {
    id: 9,
    dimension: "审美的偏好",
    scene: "如果要在以下四种场景中选择一处作为你的长眠之地，你会选择：",
    options: [
      { text: "冰冷幽暗的深渊，只有无尽的黑暗与死寂作伴。", maleIds: ['mocangli', 'fengduyue', 'kouyinzi'], femaleIds: ['yaomingyue', 'weishanhu'] },
      { text: "落雪的孤峰之巅，俯瞰着苍茫大地，干净而纯粹。", maleIds: ['yiqixing', 'fojian', 'quezhou'], femaleIds: ['jiwuxia', 'muchengxue'] },
      { text: "繁花似锦的庭院，伴随着美酒与琴音，华丽地落幕。", maleIds: ['longxiu', 'qiluosheng', 'wenhuang'], femaleIds: ['huanghou', 'changqin', 'hanyancui'] },
      { text: "平凡的市井小巷，化作春泥，融入这充满烟火气的人间。", maleIds: ['suhuanzhen', 'qiaorulai', 'jianzi', 'zuiguangyin'], femaleIds: ['linruomei', 'fengdie', 'jinyanxia'] }
    ]
  },
  {
    id: 10,
    dimension: "终局的姿态",
    scene: "漫长的旅途终于到了终点，你站在世界的尽头，最后的回眸，你看到了什么？",
    options: [
      { text: "一盘尚未下完的残局，还有无数的变数在等待着后来者。", maleIds: ['mocangli', 'wenhuang', 'yuxingyi'], femaleIds: ['huanghou', 'weishanhu'] },
      { text: "一场盛大的落雪，掩盖了所有的爱恨情仇，大地白茫茫一片真干净。", maleIds: ['quezhou', 'jianzi', 'qiaorulai'], femaleIds: ['changqin', 'jiwuxia'] },
      { text: "一簇永不熄灭的篝火，那是你曾经燃烧过的证明。", maleIds: ['fojian', 'yiqixing', 'kouyinzi'], femaleIds: ['linruomei', 'jinyanxia'] },
      { text: "一面巨大的镜子，里面映出你似笑非笑的脸庞，仿佛一切只是个玩笑。", maleIds: ['longxiu', 'qiluosheng', 'zuiguangyin', 'fengduyue'], femaleIds: ['yaomingyue', 'muchengxue', 'hanyancui', 'fengdie'] }
    ]
  },
  {
    id: 11,
    dimension: "信任的代价",
    scene: "你身受重伤，被困在密室中。面前有两杯水，一杯是你曾经背叛过的旧友递来的，一杯是刚刚救了你的陌生人递来的。",
    options: [
      { text: "喝下旧友的水。背叛的债务需要偿还，如果这是毒药，我坦然接受。", maleIds: ['suhuanzhen', 'qiaorulai', 'yuxingyi'], femaleIds: ['linruomei', 'fengdie'] },
      { text: "都不喝。我只相信自己，哪怕渴死，也不将性命交于他人之手。", maleIds: ['mocangli', 'wenhuang', 'fengduyue'], femaleIds: ['huanghou', 'yaomingyue', 'weishanhu'] },
      { text: "将两杯水混在一起喝下。生死有命，何必去猜忌这无聊的人心。", maleIds: ['jianzi', 'longxiu', 'zuiguangyin'], femaleIds: ['changqin', 'hanyancui'] },
      { text: "喝下陌生人的水。既然他救了我，我便用性命去赌他一次真诚。", maleIds: ['qiluosheng', 'yiqixing', 'fojian', 'kouyinzi'], femaleIds: ['jiwuxia', 'muchengxue', 'jinyanxia'] }
    ]
  },
  {
    id: 12,
    dimension: "记忆的重量",
    scene: "传说有一口遗忘之泉，喝下泉水就能忘记一生中最痛苦的记忆，但也会失去最珍贵的情感体验。",
    options: [
      { text: "拒绝喝下。痛苦是我存在的证明，没有这些伤痕，我就不再是我。", maleIds: ['fojian', 'yiqixing', 'kouyinzi'], femaleIds: ['jinyanxia', 'muchengxue'] },
      { text: "毫不犹豫地喝下。沉溺于过去是弱者的行为，我只需要轻装上阵迎接未来。", maleIds: ['mocangli', 'wenhuang', 'fengduyue'], femaleIds: ['huanghou', 'yaomingyue'] },
      { text: "装作喝下，却偷偷倒掉。我需要保持清醒，同时让别人以为我已放下防备。", maleIds: ['yuxingyi', 'suhuanzhen', 'qiaorulai'], femaleIds: ['weishanhu', 'linruomei'] },
      { text: "看着泉水发呆。痛苦与美好早已交织在一起，我不知道该如何剥离。", maleIds: ['qiluosheng', 'zuiguangyin', 'longxiu', 'jianzi'], femaleIds: ['fengdie', 'hanyancui', 'changqin', 'jiwuxia'] }
    ]
  },
  {
    id: 13,
    dimension: "绝境的狂欢",
    scene: "敌军兵临城下，城破只在旦夕之间。作为守城者，你最后的命令是？",
    options: [
      { text: "打开城门，独自迎战。用我最后的鲜血，为这座城池谱写一曲壮烈的挽歌。", maleIds: ['fojian', 'yiqixing', 'qiluosheng'], femaleIds: ['jiwuxia', 'muchengxue', 'jinyanxia'] },
      { text: "点燃整座城池。既然我守不住，那谁也别想得到，让一切在烈火中玉石俱焚。", maleIds: ['fengduyue', 'kouyinzi', 'wenhuang'], femaleIds: ['yaomingyue', 'huanghou'] },
      { text: "安排百姓从密道撤离，自己坐在城头抚琴，静待敌军的到来。", maleIds: ['quezhou', 'jianzi', 'longxiu', 'zuiguangyin'], femaleIds: ['changqin', 'hanyancui'] },
      { text: "换上敌军的铠甲，混入敌阵，寻找刺杀敌军首领的最后机会。", maleIds: ['mocangli', 'suhuanzhen', 'qiaorulai', 'yuxingyi'], femaleIds: ['weishanhu', 'linruomei', 'fengdie'] }
    ]
  },
  {
    id: 14,
    dimension: "理想的幻灭",
    scene: "你毕生追求的乌托邦终于建立，却发现它建立在无数无辜者的白骨之上。你会怎么做？",
    options: [
      { text: "亲手摧毁它。建立在罪恶之上的理想，比现实更加令人作呕。", maleIds: ['fojian', 'yiqixing', 'qiluosheng'], femaleIds: ['jiwuxia', 'muchengxue', 'jinyanxia'] },
      { text: "默默离开，隐居山林。我无法改变这肮脏的世界，只能保持自己的洁白。", maleIds: ['jianzi', 'longxiu', 'zuiguangyin'], femaleIds: ['changqin', 'fengdie'] },
      { text: "继续维护它。牺牲已经做出，如果现在放弃，那些白骨就真的白白死去了。", maleIds: ['mocangli', 'suhuanzhen', 'qiaorulai', 'yuxingyi'], femaleIds: ['weishanhu', 'linruomei'] },
      { text: "成为这个乌托邦的统治者，用更残酷的手段掩盖真相，享受权力的果实。", maleIds: ['wenhuang', 'fengduyue', 'kouyinzi'], femaleIds: ['huanghou', 'yaomingyue', 'hanyancui'] }
    ]
  },
  {
    id: 15,
    dimension: "传承与遗忘",
    scene: "你即将死去，你可以选择在世间留下一件物品作为你存在过的证明。",
    options: [
      { text: "一本记载了我所有阴谋与智慧的无名手札，留给有缘的聪明人。", maleIds: ['mocangli', 'wenhuang', 'yuxingyi', 'suhuanzhen'], femaleIds: ['huanghou', 'weishanhu', 'changqin'] },
      { text: "一把沾满仇人鲜血的断剑，警告后人不要重蹈我的覆辙。", maleIds: ['fojian', 'yiqixing', 'fengduyue', 'kouyinzi'], femaleIds: ['muchengxue', 'yaomingyue'] },
      { text: "一朵被风干的白花，证明这个残酷的世界里，也曾有人温柔地爱过。", maleIds: ['qiluosheng', 'longxiu', 'zuiguangyin', 'qiaorulai'], femaleIds: ['hanyancui', 'fengdie', 'linruomei', 'jinyanxia'] },
      { text: "什么都不留。我来过，我战斗过，我毁灭过，这就足够了，不需要被记住。", maleIds: ['quezhou', 'jianzi'], femaleIds: ['jiwuxia'] }
    ]
  }
];
