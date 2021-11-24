module.exports = {
  // distのhtmlファイル内のパス設定(初期は'/')
  // publicPath: '',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/sass/main.scss";',
      },
    },
  },
};
