const https = require('https');

function fetch(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', () => resolve(''));
  });
}

async function run() {
  const data = await fetch('https://baike.baidu.com/item/%E5%8E%9F%E6%97%A0%E4%B9%A1');
  const match = data.match(/诗\s*号.*?<dd.*?>(.*?)<\/dd>/s);
  console.log('原无乡:', match ? match[1].replace(/<[^>]+>/g, '').trim() : 'Not found');
}
run();
