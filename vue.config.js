module.exports = {
  baseUrl: './',
  outputDir: 'dist',
  lintOnSave: false,
  runtimeCompiler: true, 
  chainWebpack: () => {},
  configureWebpack: () => {},
  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 12450,
    https: false,
    hotOnly: false,
    proxy: null, // string | Object
    before: app => {}
  }
}