const https = require('https');
https.get('https://zh.moegirl.org.cn/api.php?action=query&prop=extracts&titles=%E6%9A%AE%E6%88%90%E9%9B%AA&format=json', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(data.substring(0, 500));
  });
});
