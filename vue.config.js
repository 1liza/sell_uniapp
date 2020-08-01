module.exports = {
  devServer: {
    before (app) {
      // 这里的app相当于express
      var appData = require('./data.json')
      var seller = appData.seller
      var goods = appData.goods
      var ratings = appData.ratings
      app.get('/api/seller', (req, res) => {
        res.json({
          errno: 0,
          data: seller
        })
      })
      // app is the express instance that the dev server uses
      app.get('/api/goods', (req, res) => {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings', (req, res) => {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  }
  // chainWebpack(config) {
  //   // 配置相对路径
  //   config.resolve.alias
  //     .set('components', resolve('src/components'))
  //     .set('common', resolve('src/common'))
  //     .set('api', resolve('src/api'))
  //   // ContextReplacementPlugin 配置
  //   config.plugin('context')
  //     .use(webpack.ContextReplacementPlugin,
  //       [/moment[/\\]locale$/, /zh-cn/])
  // },
  // baseUrl: ''
}
console.log('数据挂载')
