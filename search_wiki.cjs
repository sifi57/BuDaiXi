const https = require('https');

function search(query) {
  return new Promise((resolve) => {
    https.get(`https://zh.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          console.log(`Query: ${query}`);
          if (json.query && json.query.search) {
            json.query.search.slice(0, 2).forEach(item => console.log(item.snippet.replace(/<[^>]+>/g, '')));
          }
        } catch (e) {}
        resolve();
      });
    }).on('error', () => resolve());
  });
}

async function run() {
  await search('"千雪孤鸣" 诗号');
  await search('"拂樱斋主" 诗号');
  await search('"黄泉" 诗号');
  await search('"啸日猋" 诗号');
  await search('"紫芒星痕" 诗号');
  await search('"百里潇湘" 诗号');
  await search('"暴雨心奴" 诗号');
  await search('"雪山银燕" 诗号');
  await search('"戮世摩罗" 诗号');
  await search('"剑无极" 诗号');
}
run();
