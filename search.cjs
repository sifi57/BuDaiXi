const https = require('https');
https.get('https://baike.baidu.com/item/%E6%9A%AE%E6%88%90%E9%9B%AA', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/诗[\s\S]{0,20}号[\s\S]{0,50}?>(.*?)<\//);
    if (match) console.log("Poem:", match[1].replace(/<[^>]+>/g, ''));
    const desc = data.match(/<meta name="description" content="(.*?)">/);
    if (desc) console.log("Desc:", desc[1]);
  });
});
