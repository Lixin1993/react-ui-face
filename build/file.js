const path = require('path');
const glob = require('glob');
const fs = require('fs');

const deleteFiles = glob.sync(path.resolve(__dirname, '..', 'dist', '**', 'index.css.js'))


deleteFiles.forEach(file => fs.unlink(file, (err) => {
  if (err) throw err;
  console.info(`${file} was deleted`);
}))

// package.json 拷贝
try {
  fs.copyFileSync('package.json', 'dist/package.json')
 
} catch(err) {
  console.info(err);
}

