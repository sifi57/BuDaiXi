const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=%E9%95%BF%E7%90%B4%E6%97%A0%E7%84%B0+%E9%87%91%E5%85%89', {
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
