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
  const data = await fetch('https://home.gamer.com.tw/creationDetail.php?sn=2334814');
  const match = data.match(/詩號：(.*?)<br/);
  console.log('原无乡:', match ? match[1] : 'Not found');
}
run();
