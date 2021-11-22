const fs = require('fs');
const path = require('path')

const componentName = process.argv[2]
const filePath = path.resolve(__dirname, '..', 'src')
const pagesPath = path.resolve(__dirname, '..', 'pages')
let conponentsPath = path.resolve(__dirname, '..', 'src/components')

// 创建component文件
try {
    fs.mkdirSync(`${conponentsPath}/${componentName}`)
    conponentsPath = `${conponentsPath}/${componentName}`
    fs.openSync(`${conponentsPath}/index.tsx`, 'as+')
    fs.openSync(`${conponentsPath}/index.scss`, 'as+')
} catch (err) {
    console.error(`create component fail by ${err}`);    
}

// 创建 pages 页面
try {
    const pageName = componentName.toLowerCase()
    fs.readFileSync(`${pagesPath}/${pageName}.tsx`, { flag: 'as+' })
    const content = 
`import React from 'react'
import ${componentName} from '../src/components/${componentName}'

const ${componentName}View = () => {
    return (
        <>
            <${componentName}></${componentName}>
        </>
    )
}

export default ${componentName}View`

    fs.writeFileSync(`${pagesPath}/${pageName}.tsx`, content)
} catch (err) {
    console.error(`create page fail by ${err}`);    
}


// 在 index.ts 中添加组件导出
try {
    const content = fs.readFileSync(`${filePath}/index.ts`, { encoding: 'utf8', flag: 'as+' })
    // 组件重名
    if (content.indexOf(`(./${componentName})`) !== -1) {
        throw new error('components already export!')
    }
    // 解析节点
    const index = content.indexOf('// inject point')
    // 插入对应的字符串
    const str = `get ${componentName}() {
        return require('./${componentName}').default;
    },
    `
    // 文件内容
    const result = content.slice(0, index) + str + content.slice(index)
    fs.writeFileSync(`${filePath}/index.ts`, result)
} catch (err) {
    console.error(`index.ts create page fail by ${err}`);    
}

// 在 index.scss 中添加组件样式引用
try {
    const content = fs.readFileSync(`${filePath}/index.scss`, { encoding: 'utf8', flag: 'as+' })
    // 组件重名
    if (content.indexOf(`/${componentName}/index.scss`) !== -1) {
        throw new error('components scss already existence!')
    }
    // 插入对应的字符串
    const str = `\n@import './components/${componentName}/index.scss';`
    // 文件内容
    const result = content + str
    fs.writeFileSync(`${filePath}/index.scss`, result)
} catch (err) {
    console.error(`index.scss create page fail by ${err}`);    
}