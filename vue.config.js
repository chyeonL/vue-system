const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      // 请求以 /api 开头的
      "/api": {
        target: "http://localhost:80",
        pathRewrite: {
          "^/api": "/api", //也就是 /api 之前的所有东西都不要，换成target
        },
      },
    },
  },
  productionSourceMap:false,
  publicPath:process.env.NODE_ENV === 'production' ? './' : './',
});
