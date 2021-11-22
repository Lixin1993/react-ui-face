/**
 * version 校验，是否升级过版本
 * 目前只判断了版本是否不一致
 * */ 
const path = require('path');
const fs = require('fs');

try {
  const distPackageJsonPath = path.resolve(__dirname, '..', 'dist', 'package.json')
  const mainContent = fs.readFileSync('package.json', { flag: 'as+', encoding: 'utf8' })
  const distContent = fs.readFileSync(distPackageJsonPath, { flag: 'as+', encoding: 'utf8' })
  const distData = JSON.parse(distContent)
  const mainData = JSON.parse(mainContent)

  if (distData.version === mainData.version) {
    process.exit()
    throw new Error('please update package.json version')
  }
 
} catch(err) {
  console.info(err);
}