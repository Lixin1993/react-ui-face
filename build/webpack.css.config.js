// 打包样式文件
const glob = require('glob');
const path = require('path');
const sourcePath = path.resolve(__dirname, '..', 'src')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// 所有的组件或入口scss文件都用index.scss
const indexScss = path.resolve(sourcePath, 'index.scss');
const componentsScss = glob.sync(path.join(sourcePath, 'components', '**', 'index.scss'));

let entries = {};

// 所有业务组件css文件单独打包
componentsScss.forEach(file => {
  const scssPath = file.match(/\/src(\/.*\/index\.scss)/)[1];
  const cssPath = scssPath.replace(/scss/, 'css');
  entries[cssPath] = file
})

// index.scss 打包
const indeScssPath = indexScss.match(/\/src(\/index\.scss)/)[1];
const indeScssFile = indeScssPath.replace(/scss/, 'css');
entries[indeScssFile] = indexScss

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[id].js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024000 // 1MB
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js')
              }
            }
          },
          { loader: 'sass-loader'}
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]'
    })
  ]
}