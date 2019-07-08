module.exports = {
  chainWebpack: config => {
    config.module
    .rule('csv-loader')
    .test(/\.csv$/)
      .use('csv-loader')
        .loader('csv-loader')
        .end()
  }
}