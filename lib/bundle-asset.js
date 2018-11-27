// posthtml-cli でうまく動かすことができない
const fs       = require('fs')
const path     = require('path')
const posthtml = require('posthtml')
const chdir    = require('chdir')

const src_path  = 'src/index.html'
const dest_path = 'dist/index.html'
const src       = fs.readFileSync(src_path, 'utf-8')

var transformed;

// なぜか cwd オプションがうまく動かない
chdir(path.dirname(src_path), function() {
  promise = posthtml([
    require('posthtml-inline-assets')({
      cwd: path.dirname(src_path)
    })
  ]).process(src)
})

promise.then(r => {
  fs.writeFileSync(dest_path, r.html, 'utf-8')
})
