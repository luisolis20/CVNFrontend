const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/cvn/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.110/cvn',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});

