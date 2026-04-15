const https = require('https');

function search(name) {
  return new Promise((resolve) => {
    https.get(`https://baike.baidu.com/item/${encodeURIComponent(name)}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/诗\s*号.*?<dd.*?>(.*?)<\/dd>/s) || data.match(/诗号：(.*?)<br/);
        if (match) {
          console.log(`${name}: ${match[1].replace(/<[^>]+>/g, '').trim()}`);
        } else {
          console.log(`${name}: Not found`);
        }
        resolve();
      });
    }).on('error', () => {
      console.log(`${name}: Error`);
      resolve();
    });
  });
}

async function run() {
  const names = ['末世之艳', '天之道', '原无乡', '千雪孤鸣', '玉世论', '拂樱斋主', '黄泉', '啸日猋', '紫芒星痕', '百里潇湘', '暴雨心奴', '雪山银燕', '戮世摩罗', '剑无极', '尚风悦'];
  for (const name of names) {
    await search(name);
  }
}
run();
