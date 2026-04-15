const https = require('https');

function search(query) {
  return new Promise((resolve) => {
    https.get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/<a class="result__snippet[^>]*>(.*?)<\/a>/g)];
        console.log(`Query: ${query}`);
        matches.slice(0, 3).forEach(m => console.log(m[1].replace(/<[^>]+>/g, '')));
        resolve();
      });
    }).on('error', () => resolve());
  });
}

async function run() {
  await search('"原无乡" 诗号');
  await search('"天之道" 诗号');
  await search('"千雪孤鸣" 诗号');
  await search('"玉世论" 诗号');
  await search('"拂樱斋主" 诗号');
  await search('"黄泉" 诗号 霹雳');
  await search('"啸日猋" 诗号');
  await search('"紫芒星痕" 诗号');
  await search('"百里潇湘" 诗号');
  await search('"暴雨心奴" 诗号');
  await search('"雪山银燕" 诗号');
  await search('"戮世摩罗" 诗号');
  await search('"剑无极" 诗号');
  await search('"尚风悦" 诗号');
}
run();
