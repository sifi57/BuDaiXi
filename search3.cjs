const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=%E6%9A%AE%E6%88%90%E9%9B%AA+%E8%AF%97%E5%8F%B7+%E9%9C%B9%E9%9D%82', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/<a class="result__snippet[^>]*>(.*?)<\/a>/g);
    if (matches) {
      matches.forEach(m => console.log(m.replace(/<[^>]+>/g, '')));
    }
  });
});
