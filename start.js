const fs = require('fs');
const LRU = require('lru-cache')
const path = require('path');
const express = require('express');
const server = express();
server.use(express.static('dist'));

const microCache = LRU({
  max: 100,
  maxAge: 1000 // 重要提示：条目在 1 秒后过期。
})

const bundle = fs.readFileSync(path.resolve(__dirname, 'dist/server.js'), 'utf-8');
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
  template: fs.readFileSync(path.resolve(__dirname, 'dist/index.ssr.html'), 'utf-8') // 服务端渲染数据
});


server.get('*', (req, res) => {
  const hit = microCache.get(req.url)
  if (hit) {
    return res.end(hit)
  }
  renderer.renderToString((err, html) => {
    // console.log(html)
    if (err) {
      console.error(err);
      res.status(500).end('服务器内部错误');
      return;
    }
    res.end(html);
  })
});


server.listen(8010, () => {
  console.log('访问：http://127.0.0.1:8010');
});
