import { Character, Question, Option } from './types';
import { maleCharacters } from './characters_male';
import { femaleCharacters } from './characters_female';

export { maleCharacters, femaleCharacters };
export type { Character, Question, Option };

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
