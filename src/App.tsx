import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, RefreshCcw, Feather } from 'lucide-react';

type ProfileId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface Option {
  text: string;
  profileId: ProfileId;
}

interface Question {
  id: number;
  dimension: string;
  scene: string;
  options: Option[];
}

interface Profile {
  id: ProfileId;
  title: string;
  maleChar: string;
  malePoem: string;
  femaleChar: string;
  femalePoem: string;
  analysis: string;
}

const questions: Question[] = [
  {
    id: 1,
    dimension: "抉择的沉重感",
    scene: "你站在一座即将崩塌的悬索桥上。桥的一端是你深爱的人，另一端是数百名无辜的陌生人。你手中的机关只能稳住一端，另一端将坠入深渊。",
    options: [
      { text: "闭上眼，拉向陌生人的一端。我的心会随爱人死去，但我的手必须服从理智。", profileId: 1 },
      { text: "毫不犹豫地拉向爱人。世界与我何干？我只守护我的宇宙。", profileId: 4 },
      { text: "斩断机关，用自己的身体去拉住两端的绳索，哪怕粉身碎骨。", profileId: 6 },
      { text: "坐在桥中间，看着一切坠落。既然无法两全，不如一起毁灭。", profileId: 3 }
    ]
  },
  {
    id: 2,
    dimension: "孤独的质感",
    scene: "你在一座永不天明的极夜之城醒来，四周只有无尽的风雪。你觉得这种寂寞是……",
    options: [
      { text: "一种恩赐。终于没有嘈杂的声音，我可以安静地听雪落下的声音。", profileId: 2 },
      { text: "一块画布。这纯白的荒芜，正好用来涂抹我心中的狂想与色彩。", profileId: 8 },
      { text: "一把利刃。它在切割我的灵魂，提醒我必须找到出路，或者点燃火焰。", profileId: 5 },
      { text: "一面镜子。它映照出我内心深处早已结冰的河流，我本就属于这里。", profileId: 7 }
    ]
  },
  {
    id: 3,
    dimension: "对权力的疏离或执着",
    scene: "一张古老的棋盘摆在你面前，传说赢了这局棋，就能掌控天下的兴衰。",
    options: [
      { text: "坐下对弈，步步为营。秩序需要有人建立，我不入局，便是将命运交于他人。", profileId: 7 },
      { text: "饶有兴致地拨弄棋子，但不按规则下。我享受的不是掌控天下，而是打破规则的愉悦。", profileId: 3 },
      { text: "挥剑将棋盘劈成两半。真正的力量不需要通过游戏来证明，我就是规则。", profileId: 5 },
      { text: "转身离开。天下的兴衰与这山间的清风明月相比，不过是庸人自扰。", profileId: 2 }
    ]
  },
  {
    id: 4,
    dimension: "审美的精神寄托",
    scene: "在一场惨烈的战役后，你走过满地狼藉的废墟。什么画面会让你停下脚步？",
    options: [
      { text: "一朵在焦土中绽放的白玫瑰，花瓣上沾着一滴未干的血。", profileId: 4 },
      { text: "一柄折断的剑，剑柄上还紧紧握着一只不屈的手。", profileId: 1 },
      { text: "废墟深处传来的一阵悠扬笛声，吹奏者不知生死。", profileId: 8 },
      { text: "阳光穿透厚重的阴霾，静静地洒在残破的雕像上。", profileId: 6 }
    ]
  },
  {
    id: 5,
    dimension: "面具下的真实",
    scene: "如果有一面能照出灵魂真实模样的魔镜，你认为镜中的你会是什么样子？",
    options: [
      { text: "一个戴着无数张面具的无面人，连我自己都忘了最初的模样。", profileId: 1 },
      { text: "一团燃烧的黑色火焰，吞噬着周围的光芒，充满危险的诱惑。", profileId: 8 },
      { text: "一座孤岛，四周是汹涌的海水，岛上开满了不为人知的花。", profileId: 2 },
      { text: "满身伤痕的野兽，虽然疲惫，但眼神依然桀骜不驯。", profileId: 5 }
    ]
  },
  {
    id: 6,
    dimension: "宿命与反抗",
    scene: "一本无字天书向你展示了你未来的结局——你将在一场背叛中孤独地死去。",
    options: [
      { text: "微微一笑，合上书本。既然结局已定，那我就把过程演绎得无比精彩。", profileId: 3 },
      { text: "提前布局，将所有可能的背叛者一一清除，哪怕错杀。", profileId: 1 },
      { text: "撕碎天书。我的命运只在我的剑锋之上，天若阻我，我便逆天。", profileId: 5 },
      { text: "平静接受。生如蜉蝣，死如秋叶，一切皆是因果流转。", profileId: 6 }
    ]
  },
  {
    id: 7,
    dimension: "情感的温度",
    scene: "你必须用一样东西来交换你最渴望的真相，你会交出什么？",
    options: [
      { text: "我的记忆。哪怕忘记一切，我也要看清这个世界的真实面目。", profileId: 8 },
      { text: "我的情感。从此我将不再有喜怒哀乐，成为绝对理性的旁观者。", profileId: 7 },
      { text: "我的双眼。真相不需要用眼睛看，用心去感知就足够了。", profileId: 6 },
      { text: "我的寿命。朝闻道，夕死可矣，哪怕只能活一秒，我也要死在真实中。", profileId: 4 }
    ]
  },
  {
    id: 8,
    dimension: "隐匿与显露",
    scene: "在一场盛大的假面舞会上，所有人都沉浸在狂欢中，而你……",
    options: [
      { text: "站在最高处的阳台上，冷眼俯视着这群愚蠢而快乐的蝼蚁。", profileId: 3 },
      { text: "戴着最华丽的面具，在人群中穿梭，挑拨着每一个人的情绪，享受混乱。", profileId: 8 },
      { text: "坐在最昏暗的角落里，独自饮酒，等待着舞会结束后的寂静。", profileId: 2 },
      { text: "摘下面具，走到舞台中央，用最真实的姿态打破这虚伪的和谐。", profileId: 7 }
    ]
  },
  {
    id: 9,
    dimension: "毁灭与重生",
    scene: "你拥有了一把可以焚毁一切的烈焰之剑，你会用它来做什么？",
    options: [
      { text: "烧毁那些陈旧的枷锁和腐朽的制度，在灰烬中建立新的秩序。", profileId: 7 },
      { text: "烧毁我自己的过去，让我从所有的羁绊和痛苦中彻底解脱。", profileId: 2 },
      { text: "烧毁世间的丑恶，只留下那些纯粹的、美丽的事物。", profileId: 4 },
      { text: "欣赏它燃烧时的绚丽光芒，至于烧毁了什么，我并不在乎。", profileId: 3 }
    ]
  },
  {
    id: 10,
    dimension: "终局的姿态",
    scene: "漫长的旅途终于到了终点，你站在世界的尽头，最后的回眸，你看到了什么？",
    options: [
      { text: "一盘尚未下完的残局，还有无数的变数在等待着后来者。", profileId: 1 },
      { text: "一场盛大的落雪，掩盖了所有的爱恨情仇，大地白茫茫一片真干净。", profileId: 6 },
      { text: "一簇永不熄灭的篝火，那是你曾经燃烧过的证明。", profileId: 5 },
      { text: "一面巨大的镜子，里面映出你似笑非笑的脸庞，仿佛一切只是个玩笑。", profileId: 4 }
    ]
  },
  {
    id: 11,
    dimension: "信任的代价",
    scene: "你身受重伤，被困在密室中。面前有两杯水，一杯是你曾经背叛过的旧友递来的，一杯是刚刚救了你的陌生人递来的。",
    options: [
      { text: "喝下旧友的水。背叛的债务需要偿还，如果这是毒药，我坦然接受。", profileId: 1 },
      { text: "都不喝。我只相信自己，哪怕渴死，也不将性命交于他人之手。", profileId: 2 },
      { text: "将两杯水混在一起喝下。生死有命，何必去猜忌这无聊的人心。", profileId: 3 },
      { text: "喝下陌生人的水。既然他救了我，我便用性命去赌他一次真诚。", profileId: 4 }
    ]
  },
  {
    id: 12,
    dimension: "记忆的重量",
    scene: "传说有一口遗忘之泉，喝下泉水就能忘记一生中最痛苦的记忆，但也会失去最珍贵的情感体验。",
    options: [
      { text: "拒绝喝下。痛苦是我存在的证明，没有这些伤痕，我就不再是我。", profileId: 5 },
      { text: "毫不犹豫地喝下。沉溺于过去是弱者的行为，我只需要轻装上阵迎接未来。", profileId: 8 },
      { text: "装作喝下，却偷偷倒掉。我需要保持清醒，同时让别人以为我已放下防备。", profileId: 7 },
      { text: "看着泉水发呆。痛苦与美好早已交织在一起，我不知道该如何剥离。", profileId: 6 }
    ]
  },
  {
    id: 13,
    dimension: "绝境的狂欢",
    scene: "敌军兵临城下，城破只在旦夕之间。作为守城者，你最后的命令是？",
    options: [
      { text: "打开城门，独自迎战。用我最后的鲜血，为这座城池谱写一曲壮烈的挽歌。", profileId: 5 },
      { text: "点燃整座城池。既然我守不住，那谁也别想得到，让一切在烈火中玉石俱焚。", profileId: 8 },
      { text: "安排百姓从密道撤离，自己坐在城头抚琴，静待敌军的到来。", profileId: 4 },
      { text: "换上敌军的铠甲，混入敌阵，寻找刺杀敌军首领的最后机会。", profileId: 1 }
    ]
  },
  {
    id: 14,
    dimension: "理想的幻灭",
    scene: "你毕生追求的乌托邦终于建立，却发现它建立在无数无辜者的白骨之上。你会怎么做？",
    options: [
      { text: "亲手摧毁它。建立在罪恶之上的理想，比现实更加令人作呕。", profileId: 5 },
      { text: "默默离开，隐居山林。我无法改变这肮脏的世界，只能保持自己的洁白。", profileId: 2 },
      { text: "继续维护它。牺牲已经做出，如果现在放弃，那些白骨就真的白白死去了。", profileId: 1 },
      { text: "成为这个乌托邦的统治者，用更残酷的手段掩盖真相，享受权力的果实。", profileId: 3 }
    ]
  },
  {
    id: 15,
    dimension: "传承与遗忘",
    scene: "你即将死去，你可以选择在世间留下一件物品作为你存在过的证明。",
    options: [
      { text: "一本记载了我所有阴谋与智慧的无名手札，留给有缘的聪明人。", profileId: 7 },
      { text: "一把沾满仇人鲜血的断剑，警告后人不要重蹈我的覆辙。", profileId: 5 },
      { text: "一朵被风干的白花，证明这个残酷的世界里，也曾有人温柔地爱过。", profileId: 4 },
      { text: "什么都不留。我来过，我战斗过，我毁灭过，这就足够了，不需要被记住。", profileId: 2 }
    ]
  }
];

const profiles: Record<ProfileId, Profile> = {
  1: {
    id: 1,
    title: "执棋的殉道者",
    maleChar: "默苍离",
    malePoem: "历史的空白，由我来填补；你的愚蠢，由我来终结。",
    femaleChar: "未珊瑚",
    femalePoem: "海面之下的暗流，才是决定汪洋方向的力量。",
    analysis: "【化身生平印记】\n男相·默苍离：墨家九算之首，以天下为棋局，以众生为棋子。他冷酷无情却心怀大义，为了诛魔之局，不惜将自己也算计在内，最终死于徒弟剑下，完成殉道。\n女相·未珊瑚：海境鳞王之妃，深藏不露，智计无双。为了海境的未来与自身的野心，她在暗流涌动的宫廷中步步为营，以柔弱之姿行雷霆之腕。\n\n【宿命与理性的极致交响】\n\n你是一个绝对理性的信徒，一个在命运棋盘上孤独博弈的殉道者。在你的精神世界里，情感被视为一种奢侈的消耗品，而大局、秩序与最终的胜利才是永恒的追求。你拥有着超乎常人的洞察力和冷酷的清醒，能够在极度混乱与危机中迅速剥离表象，直击事物的核心。当面临道德与利益的终极抉择时，你总是那个愿意承担最沉重罪恶感的人。你深知，真正的慈悲往往伴随着残酷的牺牲，为了更宏大的目标，你甚至不惜将自己也作为一枚棋子算计在内。\n\n【深渊中的孤独守望】\n\n你的孤独并非那种无人理解的自怨自艾，而是一种主动选择的、高高在上的隔离。你站在理智的巅峰，俯瞰着众生的喜怒哀乐。你的心中或许也曾有过波澜，但你的手腕却永远稳如磐石。你习惯于将真实的自我深深隐藏在层层布局与无尽的算计之下，用冷酷、刻薄甚至残忍的面具来抵御外界的窥探与自身的软弱。你不需要世俗的同情，也不渴望后世的赞美，因为你唯一的信仰就是你心中那盘必须赢下的大棋。\n\n【羁绊的抗拒与隐秘的悲悯】\n\n在人际关系中，你往往显得极度疏离、难以靠近，甚至令人生畏。你害怕情感的羁绊会成为你致命的软肋，因此你总是刻意与所有人保持着绝对的安全距离。然而，在你那如钢铁般冷硬的外表下，其实隐藏着一种深沉而隐秘的悲悯。你所做的一切冷血之举，最终都是为了守护你认为值得守护的终极价值。你就像是在漫长黑夜中默默前行的守夜人，独自背负着所有的罪与罚，只为给这个残破的世界换取黎明的一线生机。\n\n【逆天改命的执念】\n\n你的宿命感极强，但你绝不是命运的奴隶。你相信一切皆有因果，而你，就是要成为那个强行扭转因果齿轮的人。你不会向任何既定的悲剧低头，哪怕前方是万丈深渊，哪怕代价是粉身碎骨，你也会毫不犹豫地踏出那一步。因为你知道，历史的空白，需要有人用鲜血、决绝与不容置疑的意志去填补。你，就是那个在黑暗中执棋的殉道者，用自己的毁灭，成就一场完美的胜局。"
  },
  2: {
    id: 2,
    title: "风雪的独行客",
    maleChar: "最光阴",
    malePoem: "蹉跎错，消磨过，最是光阴化浮沫。",
    femaleChar: "霁无瑕",
    femalePoem: "满夕霜雪人独影，红尘今古几月明？笑寒饮，惯新晴，千山已过风云行。",
    analysis: "【化身生平印记】\n男相·最光阴：时间城的光之少年，为了守护契约与朋友，在漫长的岁月中孤独等待。他历经沧桑却保有纯真，是时间长河中不变的守望者。\n女相·霁无瑕：曾是冷酷无情的魔剑，化为人身后却拥有了最纯粹的灵魂。她在风雪中寻找自我，最终为了大义牺牲，如快雪时晴般短暂而绚烂。\n\n【冰雪封冻的纯粹灵魂】\n\n你是一个游离于喧嚣之外的独行客，灵魂深处覆盖着一层终年不化的皑皑白雪。在你的世界里，时间仿佛流淌得比别人更慢，你以一种近乎永恒的姿态，静静地注视着红尘的翻滚与变迁。你对世俗的名利、权力的争夺毫无兴趣，甚至感到厌倦。你追求的是一种极致的纯粹与内心的宁静。你的孤独不是被迫的放逐，而是灵魂的自我保全。在风雪交加的旅途中，你学会了与寂寞为伴，甚至在寂寞中品尝出了一种清冷的诗意。\n\n【镜面般的自我审视】\n\n你有着极强的自我意识，你的内心就像一面澄澈的冰镜，时刻映照着自己的本心。你害怕被这个浑浊的世界同化，因此你总是小心翼翼地守护着内心的那片净土。你对外界的防御机制极高，很少有人能真正走进你的内心世界。你习惯了用冷漠和疏离来伪装自己，但实际上，你比任何人都渴望遇到那个能与你灵魂共振的同类。只是，在漫长的等待中，你已经习惯了失望，习惯了将那份渴望深深埋藏。\n\n【不合时宜的浪漫与执着】\n\n尽管你外表冷若冰霜，但你的骨子里却流淌着一种不合时宜的浪漫主义血液。你会在血雨腥风中为一朵凋零的花而驻足，会在生死关头坚守一个看似毫无意义的承诺。你的执着往往不为世人所理解，但你却甘之如饴。你对待感情极度专一且深沉，一旦认定，便是沧海桑田、至死不渝。你就像是一把藏在风雪中的绝世名剑，平时光华内敛，但在关键时刻，却能爆发出惊穿岁月的璀璨锋芒。\n\n【岁月长河中的守望者】\n\n你对时间和宿命有着独特的感知。你深知生命的短暂与无常，因此你更加珍惜那些真实存在的瞬间。你不会去强求改变命运的洪流，而是选择在洪流中保持自己的姿态。你是一个安静的守望者，看着花开花落，看着人聚人散。你的存在本身，就是对这个浮躁世界的一种无声反抗。你用你的孤独，丈量着时光的长度，用你的纯粹，抵御着岁月的侵蚀。"
  },
  3: {
    id: 3,
    title: "戏梦的愉悦犯",
    maleChar: "神蛊温皇",
    malePoem: "功名爵禄尽迷津，贝叶菩提不受尘，久住青山无白眼，巢禽穴兽四时驯。",
    femaleChar: "凰后",
    femalePoem: "权力，是女人最好的胭脂；而天下，不过是我的梳妆匣。",
    analysis: "【化身生平印记】\n男相·神蛊温皇：苗疆第一智者，亦正亦邪，以天下群雄为戏弄对象。他追求极致的愉悦与挑战，深不可测，将世间一切视为一场华丽的游戏。\n女相·凰后：墨家九算之一，野心勃勃，艳丽而致命。她将权力视为最美的装饰，在乱世中翻云覆雨，享受着将众生玩弄于股掌之间的快感。\n\n【操弄规则的幕后黑手】\n\n你是一个将世界视为巨大游乐场的愉悦犯，一个在权力与智谋的巅峰翩翩起舞的优雅狂徒。对你而言，世俗的道德、法律甚至生死，都不过是这场游戏中的设定与筹码。你拥有着令人胆寒的高超智商和深不可测的城府，你享受的不是权力本身带来的利益，而是那种将所有人玩弄于股掌之间、看着他们按照你的剧本挣扎求生的极致愉悦。你是一个天生的导演，而整个天下，都是你的舞台。\n\n【深渊边缘的华丽试探】\n\n你的内心深处隐藏着一种对无聊的极度恐惧。为了打破这种无聊，你不断地在危险的边缘疯狂试探。你喜欢挑战人性的底线，喜欢看着那些自诩正义的人在绝境中露出伪善的破绽。你的审美极度偏执且华丽，你认为即使是毁灭，也要伴随着最绚烂的烟火和最优雅的姿态。你用慵懒和漫不经心来掩饰你内心的疯狂与野心，在别人眼中，你是一个永远带着神秘微笑的谜团，危险却又散发着致命的吸引力。\n\n【绝对掌控与情感的虚无】\n\n在你的格局观中，没有什么是不可替代的，也没有什么是不能被牺牲的。你对权力的执着并非出于贪婪，而是出于对秩序的绝对控制欲。你渴望成为那个制定规则的神。然而，在这一切华丽的掌控背后，你的情感世界却是一片荒芜的虚无。你很难真正去爱一个人，因为在你的逻辑里，所有的情感都可以被量化、被利用、被背叛。你用傲慢来掩饰内心的空洞，用一场又一场的胜利来填补灵魂的饥渴。\n\n【华丽面具下的虚无主义】\n\n你深知这个世界的荒谬与虚无，因此你选择用一种玩世不恭的态度来对抗它。你的社交面具完美无瑕，你可以在任何场合游刃有余，但你的灵魂却始终在冷眼旁观。你是一个彻底的虚无主义者，你不在乎结局是喜剧还是悲剧，你只在乎过程是否足够精彩。你就像是一杯淬了毒的绝世美酒，明知饮下会万劫不复，却依然让人忍不住想要一探究竟。"
  },
  4: {
    id: 4,
    title: "染血的白月光",
    maleChar: "绮罗生",
    malePoem: "百代繁华一朝都，谁非过客；千秋明月吹角寒，花是主人。",
    femaleChar: "暮成雪",
    femalePoem: "有情无情，皆是红尘；暮色成雪，一剑断魂。",
    analysis: "【化身生平印记】\n男相·绮罗生：白衣沽酒，刀法绝伦，重情重义。为了兄弟和爱人，他甘愿染血，在杀戮中始终坚守着内心的温柔与风骨。\n女相·暮成雪：孤傲清冷的女剑客，背负着沉重的恩怨。她的剑法凌厉如霜雪，却在无情的江湖中苦苦寻找着一丝温情与救赎。\n\n【血色浪漫的践行者】\n\n你是一个在残酷现实中死守着最后一点诗意的浪漫主义者，一抹染血的白月光。你的灵魂是由最柔软的丝绸和最锋利的刀刃交织而成的。在你的世界观里，美是超越一切的存在，甚至超越了生命本身。你对这个充满了杀戮和背叛的世界感到深深的厌倦，但你却无法真正抽身离去。你选择用一种近乎偏执的优雅来对抗这世间的丑恶，哪怕你的双手沾满鲜血，你的心中依然供奉着一朵洁白无瑕的玫瑰。\n\n【极致的深情与极致的决绝】\n\n你的情感极其丰富且浓烈，你是一个愿意为了知己、为了爱人、为了一个虚无缥缈的承诺而倾尽所有的人。你的温柔是不合时宜的，但在那些被你温柔以待的人眼中，你就是他们在黑暗中唯一的救赎。然而，你的深情往往伴随着极致的决绝。当你的底线被触碰，当你的信仰被践踏，你会瞬间化身为最冷酷的修罗。你的爱与恨都如烈火般纯粹，没有丝毫的杂质与妥协。\n\n【破碎的审美与宿命的悲剧】\n\n你有一种强烈的悲剧美学倾向。你似乎总是被那些注定会破碎的美好所吸引，你甚至会在潜意识里去迎合那种宿命般的悲剧结局。你认为，只有在毁灭的那一刻，美才能达到永恒的巅峰。你经常陷入一种深深的自我矛盾中：你渴望平静的生活，却又无法拒绝风暴的呼唤；你厌恶杀戮，却又总是被卷入杀戮的漩涡。你就像是一只扑火的飞蛾，明知是死，也要追求那一瞬间的极致光明。\n\n【面具下的脆弱与坚守】\n\n你用华丽的辞藻、优雅的举止和看似漫不经心的微笑来掩饰你内心的脆弱与伤痕。你害怕被看穿，害怕别人发现你那颗千疮百孔却依然在跳动的心。你是一个孤独的守夜人，守护着那些早已被世人遗忘的古典美德——忠诚、信义、风骨。在这个礼崩乐坏的时代，你的存在本身就是一首凄美的挽歌。你用你的生命，诠释了什么叫做真正的风华绝代。"
  },
  5: {
    id: 5,
    title: "破晓的狂战士",
    maleChar: "罗喉",
    malePoem: "吾之双足踏出战火，吾之双手紧握毁灭，吾名——罗喉。",
    femaleChar: "戢武王",
    femalePoem: "太初之杀，戢武；混沌之战，雅狄。",
    analysis: "【化身生平印记】\n男相·罗喉：曾经的武君，为了拯救苍生斩杀魔神，却被世人背叛。他带着无尽的愤怒与力量复活，最终在毁灭与杀戮中寻找到了属于自己的救赎。\n女相·戢武王：碎岛之王，女扮男装，背负着沉重的王权与宿命。为了国家的生存和尊严，她以铁血手腕征战四方，是一位充满悲剧色彩的王者。\n\n【撕裂黑暗的狂暴先锋】\n\n你是一个不折不扣的破局者，一个用绝对力量撕裂旧世界法则的狂战士。在你的字典里，没有妥协，没有委曲求全，只有前进、征服与毁灭。你对那些繁文缛节、虚伪的道德和复杂的算计嗤之以鼻，你信仰的是最原始、最纯粹的力量。当面对阻碍时，你不会选择绕行，而是会拔出你的利刃，将前方的一切障碍劈得粉碎。你就像是一轮在黑夜中强行升起的烈日，用最霸道的方式驱散所有的阴霾。\n\n【孤独的王者与不屈的战魂】\n\n你的孤独是一种高处不胜寒的王者之寂。你走在所有人的前面，你的思想和行动往往超越了你所处的时代，因此你注定要承受世人的误解、恐惧甚至背叛。但你从不在乎这些，你的内心犹如钢铁般坚硬，外界的诋毁只会让你的战意更加高昂。你是一个天生的领袖，你的魅力来自于你那无可匹敌的自信和一往无前的气魄。你不需要追随者，但人们总是会被你的光芒所吸引，不由自主地臣服于你的脚下。\n\n【直面真实的坦荡与决绝】\n\n在伪装与面具横行的世界里，你是罕见的真实存在。你从不掩饰你的野心、你的愤怒和你的欲望。你的爱恨分明，恩怨必报。你厌恶一切阴谋诡计，你认为真正的强者应该在阳光下堂堂正正地决一死战。这种直来直去的性格让你在复杂的政治斗争中容易吃亏，但这也正是你最迷人的地方。你活得比任何人都坦荡，比任何人都热烈，你用你的生命在天地间刻下了最浓墨重彩的一笔。\n\n【毁灭与新生的悖论】\n\n你的宿命往往伴随着巨大的毁灭。你为了建立你心中的理想国，不惜将现有的世界付之一炬。你是一个悲剧性的英雄，你的双手沾满了鲜血，你的脚下踏着无数的尸骨。你深知自己的罪孽，但你从不后悔。你相信，只有彻底的毁灭，才能迎来真正的重生。你就像是神话中的普罗米修斯，为了给人类带来火种，甘愿承受永恒的折磨。你的存在，就是对命运最强烈的反抗。"
  },
  6: {
    id: 6,
    title: "悲悯的渡航者",
    maleChar: "缺舟一帆渡",
    malePoem: "千年共修，缺舟一帆。无边沉沦，法海渡航。",
    femaleChar: "练娥眉",
    femalePoem: "山为萍，云为涛，绝俗红尘任逍遥。",
    analysis: "【化身生平印记】\n男相·缺舟一帆渡：大智慧的化身，拥有无上修为。他试图以无我之境渡化世人，在红尘中悲悯地注视着众生的沉沦，宛如苦海中的一叶扁舟。\n女相·练娥眉：道界一代宗师，超凡脱俗，武功登峰造极。为了对抗邪恶势力，她毅然入世，最终羽化登仙，留下一段超然物外的神话。\n\n【普度众生的云水行者】\n\n你是一个拥有着大智慧与大悲悯的渡航者，灵魂深处回荡着悠远的梵音。你早已看透了红尘的虚妄、名利的浮云以及人性的贪嗔痴，但你并没有选择独善其身的避世，而是选择了最艰难的入世修行。你的心中装的不是个人的恩怨情仇，而是天下苍生的苦难。你以一种近乎神性的宽容，平视着世间的一切罪恶与美好。你试图用你的智慧和慈悲，去化解那些看似不可调和的矛盾，去渡化那些深陷泥沼的灵魂。\n\n【无我境界的孤独与坚韧】\n\n你的孤独是一种超越了世俗情感的“无我”之境。你将自己的小我融入了天地大道之中，因此你不再感到寂寞。然而，在世人眼中，你却是一个难以理解的异类。你的境界太高，以至于很少有人能真正与你对话。你默默地承受着世人的误解、质疑甚至攻击，但你的内心却始终平静如水。你的坚韧不是来自于对胜利的渴望，而是来自于对信仰的绝对忠诚。你就像是一座屹立在狂风暴雨中的灯塔，无论风浪多大，都始终散发着柔和而坚定的光芒。\n\n【化解干戈的无形之力】\n\n在面对权力和争斗时，你展现出的是一种“不争之争”的最高境界。你深知暴力的局限性，你相信真正的征服是心灵的降服。你善于用智慧去化解危机，用慈悲去感化敌人。你的力量不是来自于剑锋的锐利，而是来自于如水般的包容与渗透。你能够在最激烈的冲突中找到那个微妙的平衡点，让剑拔弩张的双方放下屠刀。你是一个真正的和平主义者，但你的和平绝不是软弱的妥协，而是建立在强大实力与高远智慧之上的从容。\n\n【宿命的超脱与无尽的修行】\n\n你对宿命有着最深刻的理解。你明白因果循环的铁律，但你并不因此而感到绝望。相反，你将每一次的劫难都视为一次修行的机缘。你不会去强求逆天改命，而是顺应天道，在因果的缝隙中寻找那一线生机。你的生命就是一场没有终点的渡航，只要世间还有苦难，你的帆就不会落下。你用你的悲悯，为这个冰冷的世界注入了一丝最温暖的底色。"
  },
  7: {
    id: 7,
    title: "入世的掌舵人",
    maleChar: "素还真",
    malePoem: "半神半圣亦半仙，全儒全道是全贤；脑中真书藏万卷，掌握文武半边天。",
    femaleChar: "长琴无焰",
    femalePoem: "尘世无情，长琴无焰；一曲广陵，天下安澜。",
    analysis: "【化身生平印记】\n男相·素还真：清香白莲，武林的中流砥柱。他智慧与武功并重，为了天下苍生奔波劳碌，忍辱负重，是正道永远的精神领袖。\n女相·长琴无焰：胜弦尊，琴艺高超，智谋深远。她在复杂的局势中运筹帷幄，以柔克刚，为了和平与秩序默默付出，是暗流中的定海神针。\n\n【运筹帷幄的盛世基石】\n\n你是一个将天下兴亡视为己任的掌舵人，一个在波谲云诡的局势中始终保持清醒的入世智者。你拥有着非凡的政治智慧、卓越的领导才能和海纳百川的胸襟。你深知世界的复杂性，明白黑白之间存在着广阔的灰色地带。因此，你从不拘泥于死板的教条，而是善于在各种势力之间周旋、妥协、平衡，以求达到利益的最大化和局势的最优化。你是那个在风暴中心稳住阵脚、引领众人走出黑暗的灵魂人物。\n\n【忍辱负重的孤独担当】\n\n你的孤独是一种沉甸甸的责任感。你站在权力的中心，享受着万众瞩目的荣光，但也承受着常人难以想象的压力与非议。为了大局，你经常需要做出违背个人情感的艰难抉择，甚至需要背负上“伪善”、“冷酷”的骂名。你将所有的委屈、痛苦和疲惫都深深地隐藏在温和的微笑之下，独自咽下所有的苦涩。你深知，作为一个领导者，你没有软弱的权利。你的肩膀必须足够宽广，才能扛起整个天下的重量。\n\n【圆融通达的处世哲学】\n\n你的社交面具堪称完美。你能够在不同的场合、面对不同的人，展现出最恰当的姿态。你既有雷厉风行的手段，又有如沐春风的温柔。你善于倾听，善于用人，能够将各种性格迥异、能力各异的人才聚集在你的麾下，为同一个目标而奋斗。你的权谋不是为了满足个人的私欲，而是为了建立和维护一个更加稳定、繁荣的秩序。你是一个真正的实用主义者，但你的实用主义背后，却有着最坚定的理想主义内核。\n\n【在妥协中坚守的底线】\n\n在漫长的岁月中，你见证了太多的背叛与杀戮，但你始终没有对人性彻底绝望。你深知人性的弱点，但你依然愿意去相信那些美好的事物。你在不断的妥协中艰难地推进着你的理想，但你心中始终有一条不可逾越的底线。当这条底线被触碰时，你会展现出令人震惊的雷霆之怒。你就像是一棵扎根于大地的参天大树，任凭风吹雨打，始终屹立不倒，为世人撑起一片可以栖息的绿荫。"
  },
  8: {
    id: 8,
    title: "幽微的潜行者",
    maleChar: "酆都月",
    malePoem: "剑锋所指，皆是虚妄；入魔之念，方为真实。",
    femaleChar: "曼邪音",
    femalePoem: "正邪不过是世人编织的谎言，唯有力量与欲望，才是永恒的真理。",
    analysis: "【化身生平印记】\n男相·酆都月：还珠楼副楼主，对剑法有着极致的偏执。为了追求剑道巅峰，他不惜入魔，在理智与疯狂的边缘痛苦挣扎。\n女相·曼邪音：魔世女将，妖娆妩媚，行事狠辣。她信奉力量与欲望，在残酷的魔世生存法则中如鱼得水，是暗影中绽放的恶之花。\n\n【潜行于暗影的执念之鬼】\n\n你是一个游走在光明与黑暗边缘的潜行者，一个被内心深处某种极致执念所驱使的幽微灵魂。你的世界不是非黑即白的，而是由无数种深浅不一的灰色交织而成。你对主流的价值观和道德规范抱有深深的怀疑甚至蔑视，你更愿意相信那些隐藏在人性阴暗面中的真实欲望。你拥有着极其敏锐的直觉和洞察力，能够轻易地看穿别人极力掩饰的弱点和恐惧。你就像是一条潜伏在深渊中的毒蛇，安静、隐忍，却随时准备给出致命的一击。\n\n【极致的偏执与自我毁灭的诱惑】\n\n你的内心深处燃烧着一团名为“执念”的黑色火焰。为了达到你的目的，或者为了追寻你心中的某种极致境界（无论是武道、艺术还是某种扭曲的情感），你可以不择手段，甚至不惜将自己逼入走火入魔的绝境。你有一种强烈的自我毁灭倾向，你觉得只有在生死边缘的极限拉扯中，才能感受到自己真实的活着。你的孤独是一种病态的沉迷，你享受那种被全世界抛弃、只剩下自己与执念为伴的绝望感。\n\n【撕裂的面具与扭曲的真实】\n\n你的社交面具往往是极度反差的。你可能外表看起来温文尔雅、甚至有些懦弱，但内心却疯狂而残忍；你也可能外表放荡不羁、玩世不恭，但内心却有着极其冷酷的算计。你享受这种戴着面具欺骗世人的快感，但同时，你又在极度渴望有人能撕下你的面具，看清你那扭曲而真实的灵魂。你是一个矛盾的结合体，你在自我厌恶与自我欣赏之间不断徘徊，在清醒与疯狂之间反复横跳。\n\n【对力量的纯粹渴望与虚无的终局】\n\n你对权力本身并没有太大的兴趣，你渴望的是纯粹的力量——那种能够打破一切规则、碾压一切阻碍的绝对力量。你认为，在这个弱肉强食的世界里，只有力量才是唯一的真理。然而，当你真正攀上力量的高峰时，你往往会陷入一种更深的虚无之中。你发现，你所追求的极致，最终不过是一场虚幻的泡影。你的一生，就像是一场华丽而诡异的梦魇，在无尽的追逐中，最终走向了彻底的迷失。"
  }
};

export default function App() {
  const [gameState, setGameState] = useState<'START' | 'QUIZ' | 'CALCULATING' | 'RESULT'>('START');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<ProfileId, number>>({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
  });
  const [resultProfile, setResultProfile] = useState<Profile | null>(null);

  const handleStart = () => {
    setGameState('QUIZ');
    setCurrentQuestionIndex(0);
    setScores({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 });
  };

  const handleOptionClick = (profileId: ProfileId) => {
    const newScores = { ...scores, [profileId]: scores[profileId] + 1 };
    setScores(newScores);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState('CALCULATING');
      setTimeout(() => {
        calculateResult(newScores);
      }, 2500);
    }
  };

  const calculateResult = (finalScores: Record<ProfileId, number>) => {
    let maxScore = -1;
    let maxProfileId: ProfileId = 1;

    for (const [idStr, score] of Object.entries(finalScores)) {
      const id = parseInt(idStr) as ProfileId;
      if (score > maxScore) {
        maxScore = score;
        maxProfileId = id;
      }
    }

    setResultProfile(profiles[maxProfileId]);
    setGameState('RESULT');
  };

  const renderStart = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen p-6 text-center"
    >
      <div className="mb-8">
        <Feather className="w-12 h-12 mx-auto mb-6 text-yellow-600 opacity-80" />
        <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-widest mb-4 text-glow">
          布袋戏人格镜像测试
        </h1>
        <p className="text-gray-400 text-lg md:text-xl tracking-wide max-w-xl mx-auto leading-relaxed">
          在血雨腥风与诗酒风流之间，<br/>寻找那个与你灵魂共振的江湖倒影。
        </p>
      </div>
      
      <button 
        onClick={handleStart}
        className="group relative px-8 py-3 overflow-hidden rounded-sm bg-transparent border border-yellow-700/50 hover:border-yellow-500 transition-colors duration-500"
      >
        <div className="absolute inset-0 w-0 bg-yellow-900/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative flex items-center text-yellow-500 tracking-widest font-serif text-lg">
          入局 <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
    </motion.div>
  );

  const renderQuiz = () => {
    const question = questions[currentQuestionIndex];
    return (
      <motion.div 
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col min-h-screen p-6 max-w-3xl mx-auto justify-center"
      >
        <div className="mb-12 text-center">
          <span className="text-yellow-700/60 text-sm tracking-widest font-serif mb-4 block">
            — 卷之{question.id} · {question.dimension} —
          </span>
          <h2 className="text-2xl md:text-3xl font-serif leading-relaxed text-gray-200">
            {question.scene}
          </h2>
        </div>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.profileId)}
              className="w-full text-left p-6 glass-panel hover:bg-white/5 transition-all duration-300 group rounded-sm border-l-2 border-l-transparent hover:border-l-yellow-600"
            >
              <p className="text-gray-300 font-serif text-lg leading-relaxed group-hover:text-yellow-50 transition-colors">
                {option.text}
              </p>
            </button>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            {questions.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 w-8 rounded-full transition-all duration-500 ${
                  idx === currentQuestionIndex ? 'bg-yellow-600' : 
                  idx < currentQuestionIndex ? 'bg-yellow-900/50' : 'bg-gray-800'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderCalculating = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-6"
    >
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-t-2 border-yellow-600 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-r-2 border-yellow-800 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <Feather className="absolute inset-0 m-auto w-8 h-8 text-yellow-700 opacity-50" />
      </div>
      <p className="text-xl font-serif tracking-widest text-gray-400 animate-pulse">
        勘破命盘，寻觅倒影...
      </p>
    </motion.div>
  );

  const renderResult = () => {
    if (!resultProfile) return null;

    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen py-16 px-6 max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-yellow-600/80 tracking-widest text-sm mb-4 font-serif">你的灵魂镜像</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-glow mb-2">
            {resultProfile.title}
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Male Character */}
          <div className="glass-panel p-8 rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-900/10 rounded-bl-full -z-10 group-hover:bg-yellow-900/20 transition-colors"></div>
            <h3 className="text-gray-400 text-sm tracking-widest mb-2">男相化身</h3>
            <h2 className="text-3xl font-serif text-yellow-500 mb-6">{resultProfile.maleChar}</h2>
            <p className="font-serif text-gray-300 italic leading-loose border-l-2 border-yellow-800/50 pl-4">
              "{resultProfile.malePoem}"
            </p>
          </div>

          {/* Female Character */}
          <div className="glass-panel p-8 rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-900/10 rounded-br-full -z-10 group-hover:bg-yellow-900/20 transition-colors"></div>
            <h3 className="text-gray-400 text-sm tracking-widest mb-2">女相化身</h3>
            <h2 className="text-3xl font-serif text-yellow-500 mb-6">{resultProfile.femaleChar}</h2>
            <p className="font-serif text-gray-300 italic leading-loose border-l-2 border-yellow-800/50 pl-4">
              "{resultProfile.femalePoem}"
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-sm mb-16">
          <h3 className="text-2xl font-serif text-yellow-600 mb-8 text-center tracking-widest border-b border-yellow-900/30 pb-4">
            灵魂深度解析
          </h3>
          <div className="space-y-6 font-serif text-gray-300 leading-loose text-lg text-justify">
            {resultProfile.analysis.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('【')) {
                const title = paragraph.match(/【(.*?)】/)?.[1];
                const content = paragraph.replace(/【.*?】\n?/, '');
                return (
                  <div key={idx} className="mb-8">
                    <h4 className="text-xl text-yellow-500 mb-4 tracking-wide">{title}</h4>
                    <p>{content}</p>
                  </div>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>
        </div>

        <div className="text-center pb-12">
          <button 
            onClick={handleStart}
            className="inline-flex items-center px-6 py-3 text-gray-400 hover:text-yellow-500 transition-colors font-serif tracking-widest"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            重入江湖
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen selection:bg-yellow-900/50 selection:text-yellow-100">
      <AnimatePresence mode="wait">
        {gameState === 'START' && renderStart()}
        {gameState === 'QUIZ' && renderQuiz()}
        {gameState === 'CALCULATING' && renderCalculating()}
        {gameState === 'RESULT' && renderResult()}
      </AnimatePresence>
    </div>
  );
}
