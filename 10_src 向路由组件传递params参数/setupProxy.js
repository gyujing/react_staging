const { createProxyMiddleware }  = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/api1",
    createProxyMiddleware( {  //遇见/api1前缀的请求，就会触发该代理配置
      target: "http://localhost:5000",   //请求转发给谁
      // changeOrigin为true，服务器知道host是http://localhost:3000
      // changeOrigin为false，骗过服务器以为host是http://localhost:5000
      changeOrigin: true,  //控制服务器收到的请求头中Host字段的值
      pathRewrite: { '^/api1': '' }   //真实接口没有api1，重写
    }),
  )
  app.use(
    "/api2",
    createProxyMiddleware({
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { '^/api2': '' } //真实接口没有api1，替换掉
    })
  )
}
