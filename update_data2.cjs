const fs = require('fs');

const dataContent = `import { Character, Question, Option } from './types';
import { maleCharacters as oldMale } from './characters_male';
import { femaleCharacters as oldFemale } from './characters_female';
import { newMaleCharacters, newFemaleCharacters } from './new_chars';

// Fix Mu Chengxue and Changqin Wuyan
const fixedFemale = oldFemale.map(c => {
  if (c.id === 'muchengxue') {
    return {
      ...c,
      poem: '朝如青丝暮成雪，一夕风霜倾海楼。',
      analysis: c.analysis.replace('天佛原乡的守护人', '烈武坛三罡之青霜台').replace('有情无情，皆是红尘；暮色成雪，一剑断魂', '朝如青丝暮成雪，一夕风霜倾海楼。')
    };
  }
  if (c.id === 'changqin') {
    return {
      ...c,
      analysis: c.analysis.replace('帝鬼', '凶岳疆朝').replace('暗盟', '幽暗联盟')
    };
  }
  return c;
});

export const maleCharacters: Character[] = [...oldMale, ...newMaleCharacters];
export const femaleCharacters: Character[] = [...fixedFemale, ...newFemaleCharacters];

export const questions: Question[] = [
  {
    id: 1,
    dimension: "面对背叛",
    scene: "你最信任的盟友在关键时刻出卖了你，导致你全军覆没。你侥幸逃生后，会怎么做？",
    options: [
      { text: "在暗处静观其变，分析其背叛的深层动机，将其作为下一盘更大棋局的弃子。", maleIds: ['mocangli', 'wenhuang', 'yuxingyi', 'wumengsheng', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'bailixiaoxiang', 'shangguanhongxin'], femaleIds: ['huanghou', 'weishanhu', 'yaomingyue', 'helouqiongyu'] },
      { text: "化身修罗，以雷霆万钧之势将其连根拔起，让背叛的代价成为世人的警钟。", maleIds: ['fengduyue', 'fojian', 'yiqixing', 'yiyeshu', 'liuhuocanglong', 'zanghunhuang', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'baoyuxinnu', 'lushi', 'yinghuangzhuwu'], femaleIds: ['jinyanxia', 'muchengxue', 'manxieyin'] },
      { text: "探寻背后的无奈与苦衷，若为苍生大义，便将这份仇恨深埋心底，独自承受。", maleIds: ['suhuanzhen', 'qiaorulai', 'quezhou', 'shiyanwen', 'tianzhidao', 'yuanwuxiang', 'qingyangzi', 'cangyueguming', 'yushilun', 'zuiyinhuanglong', 'xueshanyinyan'], femaleIds: ['changqin', 'linruomei', 'zhimengshi'] },
      { text: "将过往情谊随风飘散，提一壶浊酒，踏上新的旅程，不再回头。", maleIds: ['jianzi', 'longxiu', 'qiluosheng', 'zuiguangyin', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'qianxueguming', 'gongwuhou', 'heiseshijiu', 'heibailangjun', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'jianwuji', 'shangfengyue'], femaleIds: ['jiwuxia', 'fengdie', 'hanyancui', 'hongchenxue'] }
    ]
  },
  {
    id: 2,
    dimension: "权力的诱惑",
    scene: "一个可以让你统治整个武林，但需要你献祭一半寿命和所有情感的王座摆在面前。",
    options: [
      { text: "将其视为实现终极理想的工具，毫不犹豫地接纳，因为情感本就是多余的羁绊。", maleIds: ['mocangli', 'wenhuang', 'liuhuocanglong', 'jingriguming', 'zanghunhuang', 'luohou', 'mowangzi', 'shangguanhongxin', 'lushi'], femaleIds: ['huanghou', 'yaomingyue', 'weishanhu', 'helouqiongyu'] },
      { text: "以剑锋回应这份傲慢的施舍，真正的王者之路，应当由自己一步步踏出。", maleIds: ['yiqixing', 'fojian', 'fengduyue', 'yiyeshu', 'heibailangjun', 'huangquan', 'zimangxinghen', 'yinghuangzhuwu'], femaleIds: ['muchengxue', 'jiwuxia', 'manxieyin'] },
      { text: "深知其带来的灾难，选择将其永久封印，并以自身为锁，承受永世的孤独。", maleIds: ['quezhou', 'suhuanzhen', 'qiaorulai', 'wumengsheng', 'shiyanwen', 'tianzhidao', 'tanwuyu', 'jingtaojun', 'qingyangzi', 'cangyueguming', 'yuetianji', 'fengxiuzhuren', 'zuiyinhuanglong'], femaleIds: ['changqin', 'linruomei', 'zhimengshi'] },
      { text: "轻笑一声，转身离去。比起冰冷的王座，江湖的烟雨与知己的琴音更令人沉醉。", maleIds: ['jianzi', 'longxiu', 'qiluosheng', 'zuiguangyin', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'bailixiaoxiang', 'baoyuxinnu', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['fengdie', 'hanyancui', 'jinyanxia', 'hongchenxue'] }
    ]
  },
  {
    id: 3,
    dimension: "绝境的选择",
    scene: "你和你的爱人/挚友被困在绝谷，只有一份解药，你会怎么做？",
    options: [
      { text: "将解药融入对方的饮水中，微笑着目送其离开，将所有的痛苦与遗憾留给自己。", maleIds: ['suhuanzhen', 'qiaorulai', 'yuxingyi', 'wumengsheng', 'shiyanwen', 'yuanwuxiang', 'cangyueguming', 'qianxueguming', 'zuiyinhuanglong', 'xueshanyinyan'], femaleIds: ['linruomei', 'hanyancui', 'fengdie', 'hongchenxue'] },
      { text: "强行将解药喂给对方，然后决绝地转身跃下深渊，不留一丝挽留的余地。", maleIds: ['qiluosheng', 'zuiguangyin', 'longxiu', 'yexiaochai', 'juanshoutian', 'gongwuhou', 'heiseshijiu', 'huangquan', 'xiaojiandun', 'modaojuechen', 'jianwuji'], femaleIds: ['jiwuxia', 'muchengxue'] },
      { text: "理智地分析存活概率，若自己活下去能创造更大的价值，便会毫不犹豫地服下解药。", maleIds: ['mocangli', 'wenhuang', 'kouyinzi', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'bailixiaoxiang', 'shangguanhongxin'], femaleIds: ['huanghou', 'yaomingyue', 'weishanhu', 'helouqiongyu'] },
      { text: "毁掉解药。既然命运如此安排，那便在生命的最后一刻，共同迎接毁灭的绚烂。", maleIds: ['fengduyue', 'fojian', 'moshizhiyan', 'tianzhidao', 'hudiejun', 'yiyeshu', 'liuhuocanglong', 'qingyangzi', 'zanghunhuang', 'yushilun', 'heibailangjun', 'fuyingzhaizhu', 'luohou', 'xiaoribiao', 'zimangxinghen', 'mowangzi', 'baoyuxinnu', 'lushi', 'yinghuangzhuwu', 'shangfengyue'], femaleIds: ['jinyanxia', 'changqin', 'zhimengshi', 'manxieyin'] }
    ]
  },
  {
    id: 4,
    dimension: "对弱者的态度",
    scene: "路遇一群流民被强盗屠杀，而你正赶往一个关乎天下苍生的重要会谈，迟到将引发战争。",
    options: [
      { text: "权衡利弊后，选择继续赶路。局部的牺牲是成就宏大和平的必然代价。", maleIds: ['mocangli', 'wenhuang', 'yuxingyi', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'shangguanhongxin'], femaleIds: ['huanghou', 'weishanhu', 'yaomingyue', 'helouqiongyu'] },
      { text: "以极端的武力瞬间抹杀所有强盗，不留活口，随后冷漠地离开。", maleIds: ['fojian', 'yiqixing', 'jianzi', 'yiyeshu', 'liuhuocanglong', 'zanghunhuang', 'heibailangjun', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['jiwuxia', 'muchengxue', 'manxieyin'] },
      { text: "放弃会谈，留下来保护并安顿流民。因为真正的苍生，就在眼前。", maleIds: ['suhuanzhen', 'qiaorulai', 'quezhou', 'wumengsheng', 'shiyanwen', 'tianzhidao', 'yuanwuxiang', 'qingyangzi', 'cangyueguming', 'yushilun', 'zuiyinhuanglong', 'xueshanyinyan'], femaleIds: ['changqin', 'linruomei', 'zhimengshi'] },
      { text: "留下足以自保的武器和财富，让他们学会在残酷的世界中自我救赎。", maleIds: ['longxiu', 'qiluosheng', 'zuiguangyin', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'qianxueguming', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'bailixiaoxiang', 'baoyuxinnu', 'jianwuji', 'shangfengyue'], femaleIds: ['fengdie', 'hanyancui', 'jinyanxia', 'hongchenxue'] }
    ]
  },
  {
    id: 5,
    dimension: "武道/智道的终极",
    scene: "你毕生追求的境界终于达到，却发现高处不胜寒，再无敌手。",
    options: [
      { text: "将整个天下作为新的棋盘，以众生为子，开始一场没有对手的博弈。", maleIds: ['wenhuang', 'mocangli', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'bailixiaoxiang', 'shangguanhongxin'], femaleIds: ['huanghou', 'yaomingyue', 'helouqiongyu'] },
      { text: "将过往的荣耀与兵刃一同埋葬，隐入烟尘，只留下一段供后人评说的传说。", maleIds: ['jianzi', 'longxiu', 'zuiguangyin', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'baoyuxinnu', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['changqin', 'fengdie', 'hongchenxue'] },
      { text: "化身为传道者，将毕生所学倾囊相授，期望能培养出超越自己的后继者。", maleIds: ['suhuanzhen', 'qiaorulai', 'quezhou', 'shiyanwen', 'tianzhidao', 'qingyangzi', 'cangyueguming', 'zuiyinhuanglong'], femaleIds: ['linruomei', 'weishanhu', 'zhimengshi'] },
      { text: "向未知的命运或天道发起挑战，哪怕最终的结局是粉身碎骨，也要探寻极限。", maleIds: ['yiqixing', 'fojian', 'fengduyue', 'kouyinzi', 'yiyeshu', 'liuhuocanglong', 'zanghunhuang', 'heibailangjun', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['jiwuxia', 'muchengxue', 'jinyanxia', 'manxieyin'] }
    ]
  },
  {
    id: 6,
    dimension: "面对流言蜚语",
    scene: "江湖上到处流传着关于你的恶毒谣言，说你是一个欺师灭祖的伪君子。",
    options: [
      { text: "不仅不辩解，反而推波助澜，利用这种恐惧和误解来达成自己的隐秘目的。", maleIds: ['mocangli', 'wenhuang', 'fengduyue', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'shangguanhongxin'], femaleIds: ['huanghou', 'yaomingyue', 'weishanhu', 'helouqiongyu'] },
      { text: "如清风拂山岗，不作任何回应。懂我者谓我心忧，不懂我者谓我何求。", maleIds: ['yiqixing', 'jianzi', 'longxiu', 'zuiguangyin', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'bailixiaoxiang', 'baoyuxinnu', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['jiwuxia', 'muchengxue', 'changqin', 'hongchenxue'] },
      { text: "抽丝剥茧，找出幕后黑手，用最无懈可击的证据和手段，让其在阳光下身败名裂。", maleIds: ['suhuanzhen', 'yuxingyi', 'qiaorulai', 'wumengsheng', 'shiyanwen', 'tianzhidao', 'qingyangzi', 'cangyueguming', 'zuiyinhuanglong'], femaleIds: ['linruomei', 'fengdie', 'zhimengshi'] },
      { text: "以最直接的暴力回应，用鲜血洗刷污名，让所有造谣者永远闭嘴。", maleIds: ['fojian', 'qiluosheng', 'kouyinzi', 'yiyeshu', 'liuhuocanglong', 'zanghunhuang', 'heibailangjun', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['jinyanxia', 'hanyancui', 'manxieyin'] }
    ]
  },
  {
    id: 7,
    dimension: "宿命的抗争",
    scene: "预言说你注定会死于你最爱的人之手，且无法更改。",
    options: [
      { text: "在预言实现之前，亲手斩断这段情缘，将命运的主动权牢牢握在自己手中。", maleIds: ['wenhuang', 'fengduyue', 'kouyinzi', 'liuhuocanglong', 'zanghunhuang', 'luohou', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['huanghou', 'yaomingyue', 'manxieyin'] },
      { text: "带着从容的微笑迎接这一刻。如果这是命运的馈赠，那便是一场最凄美的献祭。", maleIds: ['qiluosheng', 'zuiguangyin', 'longxiu', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'huangquan', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'bailixiaoxiang', 'baoyuxinnu', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['hanyancui', 'jinyanxia', 'muchengxue', 'hongchenxue'] },
      { text: "选择自我放逐，在无尽的孤独中寻找那一丝破局的可能，哪怕耗尽一生。", maleIds: ['suhuanzhen', 'qiaorulai', 'yuxingyi', 'shiyanwen', 'tianzhidao', 'qingyangzi', 'cangyueguming', 'zuiyinhuanglong'], femaleIds: ['linruomei', 'fengdie', 'weishanhu', 'zhimengshi'] },
      { text: "将这个预言作为筹码，布下一个跨越生死的惊天大局，让死亡成为胜利的序章。", maleIds: ['mocangli', 'quezhou', 'fojian', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'yiyeshu', 'heibailangjun', 'zimangxinghen', 'shangguanhongxin'], femaleIds: ['changqin', 'jiwuxia', 'helouqiongyu'] }
    ]
  },
  {
    id: 8,
    dimension: "对待过去的态度",
    scene: "你获得了一次回到过去的机会，可以改变一件你最后悔的事情。",
    options: [
      { text: "拒绝这种虚妄的诱惑。正是那些无法挽回的遗憾，雕刻出了现在真实而残缺的我。", maleIds: ['yiqixing', 'fojian', 'jianzi', 'yiyeshu', 'heibailangjun', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['jiwuxia', 'changqin', 'manxieyin'] },
      { text: "不惜引发时空崩塌的代价，也要强行扭转那个悲剧的节点，哪怕与整个世界为敌。", maleIds: ['fengduyue', 'kouyinzi', 'liuhuocanglong', 'zanghunhuang', 'baoyuxinnu'], femaleIds: ['jinyanxia', 'hanyancui', 'muchengxue'] },
      { text: "化作一阵不可见的微风，只为再看一眼那个早已消逝在岁月深处的背影。", maleIds: ['qiluosheng', 'zuiguangyin', 'longxiu', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'bailixiaoxiang', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['fengdie', 'linruomei', 'hongchenxue'] },
      { text: "将这次机会视为修正历史轨迹的工具，提前落子，为未来的宏大目标铺平道路。", maleIds: ['mocangli', 'wenhuang', 'yuxingyi', 'wumengsheng', 'suhuanzhen', 'qiaorulai', 'shiyanwen', 'tianzhidao', 'tanwuyu', 'jingtaojun', 'qingyangzi', 'jingriguming', 'cangyueguming', 'yuetianji', 'fengxiuzhuren', 'zuiyinhuanglong', 'shangguanhongxin'], femaleIds: ['huanghou', 'weishanhu', 'yaomingyue', 'helouqiongyu', 'zhimengshi'] }
    ]
  },
  {
    id: 9,
    dimension: "审美的偏好",
    scene: "如果要在以下四种场景中选择一处作为你的长眠之地，你会选择：",
    options: [
      { text: "深邃无光的幽暗深渊，让一切秘密与算计都在绝对的死寂中归于虚无。", maleIds: ['mocangli', 'fengduyue', 'kouyinzi', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'bailixiaoxiang', 'shangguanhongxin'], femaleIds: ['yaomingyue', 'weishanhu', 'helouqiongyu'] },
      { text: "凛冽孤高的雪峰之巅，在绝对的纯粹与洁白中，俯瞰这苍茫而污浊的人间。", maleIds: ['yiqixing', 'fojian', 'quezhou', 'yiyeshu', 'liuhuocanglong', 'zanghunhuang', 'heibailangjun', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['jiwuxia', 'muchengxue', 'manxieyin'] },
      { text: "落英缤纷的华丽庭院，在悠扬的琴音与醇厚的酒香中，完成最后一场华丽的谢幕。", maleIds: ['longxiu', 'qiluosheng', 'wenhuang', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'baoyuxinnu', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['huanghou', 'changqin', 'hanyancui', 'hongchenxue'] },
      { text: "喧嚣平凡的市井小巷，化作一抔春泥，悄然融入这充满烟火气的滚滚红尘。", maleIds: ['suhuanzhen', 'qiaorulai', 'jianzi', 'zuiguangyin', 'shiyanwen', 'tianzhidao', 'qingyangzi', 'cangyueguming', 'zuiyinhuanglong'], femaleIds: ['linruomei', 'fengdie', 'jinyanxia', 'zhimengshi'] }
    ]
  },
  {
    id: 10,
    dimension: "终局的姿态",
    scene: "漫长的旅途终于到了终点，你站在世界的尽头，最后的回眸，你看到了什么？",
    options: [
      { text: "一盘错综复杂的残局，无数的变数与陷阱仍在等待着后来者去解开。", maleIds: ['mocangli', 'wenhuang', 'yuxingyi', 'wumengsheng', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'shangguanhongxin'], femaleIds: ['huanghou', 'weishanhu', 'helouqiongyu'] },
      { text: "一场掩盖一切的苍茫大雪，所有的爱恨情仇都在这片纯白中得到了最终的净化。", maleIds: ['quezhou', 'jianzi', 'qiaorulai', 'suhuanzhen', 'shiyanwen', 'tianzhidao', 'qingyangzi', 'cangyueguming', 'zuiyinhuanglong'], femaleIds: ['changqin', 'jiwuxia', 'zhimengshi'] },
      { text: "一簇在风中摇曳却永不熄灭的篝火，那是你曾经炽热燃烧过的唯一证明。", maleIds: ['fojian', 'yiqixing', 'kouyinzi', 'yiyeshu', 'liuhuocanglong', 'zanghunhuang', 'heibailangjun', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['linruomei', 'jinyanxia', 'manxieyin'] },
      { text: "一面映照出你似笑非笑脸庞的巨大水镜，仿佛这波澜壮阔的一生，不过是一场荒诞的幻梦。", maleIds: ['longxiu', 'qiluosheng', 'zuiguangyin', 'fengduyue', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'bailixiaoxiang', 'baoyuxinnu', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['yaomingyue', 'muchengxue', 'hanyancui', 'fengdie', 'hongchenxue'] }
    ]
  },
  {
    id: 11,
    dimension: "信任的代价",
    scene: "你身受重伤，被困在密室中。面前有两杯水，一杯是你曾经背叛过的旧友递来的，一杯是刚刚救了你的陌生人递来的。",
    options: [
      { text: "端起旧友的水一饮而尽。若这是复仇的毒药，那便是我应得的归宿，我坦然受之。", maleIds: ['suhuanzhen', 'qiaorulai', 'yuxingyi', 'shiyanwen', 'tianzhidao', 'qingyangzi', 'cangyueguming', 'zuiyinhuanglong'], femaleIds: ['linruomei', 'fengdie', 'zhimengshi'] },
      { text: "将两杯水尽数倾倒。在这个世界上，除了自己，没有任何人值得托付性命。", maleIds: ['mocangli', 'wenhuang', 'fengduyue', 'wumengsheng', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'bailixiaoxiang', 'shangguanhongxin'], femaleIds: ['huanghou', 'yaomingyue', 'weishanhu', 'helouqiongyu'] },
      { text: "将两杯水混合后饮下。生死不过是一场概率游戏，何必去揣测那深不可测的人心。", maleIds: ['jianzi', 'longxiu', 'zuiguangyin', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'baoyuxinnu', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['changqin', 'hanyancui', 'hongchenxue'] },
      { text: "毫不犹豫地喝下陌生人的水。既然他赐予了我生机，我便用这残躯去赌他一次纯粹的善意。", maleIds: ['qiluosheng', 'yiqixing', 'fojian', 'kouyinzi', 'yiyeshu', 'liuhuocanglong', 'zanghunhuang', 'heibailangjun', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['jiwuxia', 'muchengxue', 'jinyanxia', 'manxieyin'] }
    ]
  },
  {
    id: 12,
    dimension: "记忆的重量",
    scene: "传说有一口遗忘之泉，喝下泉水就能忘记一生中最痛苦的记忆，但也会失去最珍贵的情感体验。",
    options: [
      { text: "冷漠地拒绝。那些刻骨铭心的痛苦，才是我存在于这个世界的唯一锚点。", maleIds: ['fojian', 'yiqixing', 'kouyinzi', 'yiyeshu', 'liuhuocanglong', 'zanghunhuang', 'heibailangjun', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['jinyanxia', 'muchengxue', 'manxieyin'] },
      { text: "果断地饮下。沉溺于过往的虚妄情感是弱者的表现，我只需要绝对的理智来迎接未来。", maleIds: ['mocangli', 'wenhuang', 'fengduyue', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'bailixiaoxiang', 'shangguanhongxin'], femaleIds: ['huanghou', 'yaomingyue', 'helouqiongyu'] },
      { text: "假意饮下，实则暗中倒弃。我需要保持绝对的清醒，同时用这副伪装来麻痹所有的敌人。", maleIds: ['yuxingyi', 'suhuanzhen', 'qiaorulai', 'wumengsheng', 'shiyanwen', 'tianzhidao', 'qingyangzi', 'cangyueguming', 'zuiyinhuanglong'], femaleIds: ['weishanhu', 'linruomei', 'zhimengshi'] },
      { text: "凝视着泉水陷入长久的沉默。痛苦与美好早已如藤蔓般交织，强行剥离只会让灵魂支离破碎。", maleIds: ['qiluosheng', 'zuiguangyin', 'longxiu', 'jianzi', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'baoyuxinnu', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['fengdie', 'hanyancui', 'changqin', 'jiwuxia', 'hongchenxue'] }
    ]
  },
  {
    id: 13,
    dimension: "绝境的狂欢",
    scene: "敌军兵临城下，城破只在旦夕之间。作为守城者，你最后的命令是？",
    options: [
      { text: "大开城门，单枪匹马迎向千军万马。用我沸腾的鲜血，为这座城池谱写最后一曲壮烈的挽歌。", maleIds: ['fojian', 'yiqixing', 'qiluosheng', 'yiyeshu', 'liuhuocanglong', 'zanghunhuang', 'heibailangjun', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['jiwuxia', 'muchengxue', 'jinyanxia', 'manxieyin'] },
      { text: "下令点燃整座城池。既然注定无法守住，那便让一切在这场玉石俱焚的烈火中化为灰烬。", maleIds: ['fengduyue', 'kouyinzi', 'wenhuang', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'bailixiaoxiang', 'shangguanhongxin'], femaleIds: ['yaomingyue', 'huanghou', 'helouqiongyu'] },
      { text: "安排无辜百姓从密道悄然撤离，自己则端坐城头抚琴，在琴音中静待敌军的屠刀。", maleIds: ['quezhou', 'jianzi', 'longxiu', 'zuiguangyin', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'baoyuxinnu', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['changqin', 'hanyancui', 'hongchenxue'] },
      { text: "换上敌军的铠甲，如幽灵般混入敌阵，在混乱中寻找那唯一一次刺杀敌军首领的机会。", maleIds: ['mocangli', 'suhuanzhen', 'qiaorulai', 'yuxingyi', 'wumengsheng', 'shiyanwen', 'tianzhidao', 'qingyangzi', 'cangyueguming', 'zuiyinhuanglong'], femaleIds: ['weishanhu', 'linruomei', 'fengdie', 'zhimengshi'] }
    ]
  },
  {
    id: 14,
    dimension: "理想的幻灭",
    scene: "你毕生追求的乌托邦终于建立，却发现它建立在无数无辜者的白骨之上。你会怎么做？",
    options: [
      { text: "毫不犹豫地亲手将其摧毁。建立在罪恶与谎言之上的虚伪理想，比残酷的现实更加令人作呕。", maleIds: ['fojian', 'yiqixing', 'qiluosheng', 'yiyeshu', 'liuhuocanglong', 'zanghunhuang', 'heibailangjun', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['jiwuxia', 'muchengxue', 'jinyanxia', 'manxieyin'] },
      { text: "带着深深的幻灭感默默离开，隐居于无人知晓的山林。既然无法改变这肮脏的世界，只能选择独善其身。", maleIds: ['jianzi', 'longxiu', 'zuiguangyin', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'baoyuxinnu', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['changqin', 'fengdie', 'hongchenxue'] },
      { text: "强忍着内心的煎熬继续维护它。牺牲已经铸就，若此时放弃，那些白骨便真的成了毫无意义的牺牲品。", maleIds: ['mocangli', 'suhuanzhen', 'qiaorulai', 'yuxingyi', 'shiyanwen', 'tianzhidao', 'qingyangzi', 'cangyueguming', 'zuiyinhuanglong'], femaleIds: ['weishanhu', 'linruomei', 'zhimengshi'] },
      { text: "顺理成章地成为这个乌托邦的独裁者，用更加残酷的手段掩盖血腥的真相，安然享受权力的甘甜果实。", maleIds: ['wenhuang', 'fengduyue', 'kouyinzi', 'tanwuyu', 'jingtaojun', 'jingriguming', 'yuetianji', 'fengxiuzhuren', 'bailixiaoxiang', 'shangguanhongxin'], femaleIds: ['huanghou', 'yaomingyue', 'hanyancui', 'helouqiongyu'] }
    ]
  },
  {
    id: 15,
    dimension: "传承与遗忘",
    scene: "你即将死去，你可以选择在世间留下一件物品作为你存在过的证明。",
    options: [
      { text: "一本记载了你毕生阴谋、算计与智慧的无名手札，静待下一个能在乱世中搅动风云的聪明人。", maleIds: ['mocangli', 'wenhuang', 'yuxingyi', 'suhuanzhen', 'wumengsheng', 'shiyanwen', 'tianzhidao', 'tanwuyu', 'jingtaojun', 'qingyangzi', 'jingriguming', 'cangyueguming', 'yuetianji', 'fengxiuzhuren', 'zuiyinhuanglong', 'shangguanhongxin'], femaleIds: ['huanghou', 'weishanhu', 'changqin', 'helouqiongyu', 'zhimengshi'] },
      { text: "一把沾满仇人鲜血、剑刃残缺的断剑，作为一种无声的警告，告诫后人不要重蹈你那充满杀戮的覆辙。", maleIds: ['fojian', 'yiqixing', 'fengduyue', 'kouyinzi', 'yiyeshu', 'liuhuocanglong', 'zanghunhuang', 'heibailangjun', 'luohou', 'huangquan', 'zimangxinghen', 'mowangzi', 'lushi', 'yinghuangzhuwu'], femaleIds: ['muchengxue', 'yaomingyue', 'manxieyin'] },
      { text: "一朵被岁月风干的白花，它微弱地证明着，在这个残酷无情的世界里，也曾有人温柔而深沉地爱过。", maleIds: ['qiluosheng', 'longxiu', 'zuiguangyin', 'qiaorulai', 'moshizhiyan', 'yexiaochai', 'hudiejun', 'juanshoutian', 'yuanwuxiang', 'qianxueguming', 'yushilun', 'gongwuhou', 'heiseshijiu', 'fuyingzhaizhu', 'xiaojiandun', 'xiaoribiao', 'modaojuechen', 'bailixiaoxiang', 'baoyuxinnu', 'xueshanyinyan', 'jianwuji', 'shangfengyue'], femaleIds: ['hanyancui', 'fengdie', 'linruomei', 'jinyanxia', 'hongchenxue'] },
      { text: "什么都不留。我来过，我战斗过，我毁灭过，这一切便已足够。我不需要被任何人记住，也不在乎被遗忘。", maleIds: ['quezhou', 'jianzi'], femaleIds: ['jiwuxia'] }
    ]
  }
];
`;

fs.writeFileSync('src/data.ts', dataContent);
console.log('Updated data.ts');
