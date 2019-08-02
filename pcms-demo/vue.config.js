const SrcCompileWebpackPlugin = require('webpack-gt-src-compile')
module.exports = {
  configureWebpack: {
    resolve: {
      mainFields: ['src:main', 'main']
    },
    plugins: [new SrcCompileWebpackPlugin()]
  }
}