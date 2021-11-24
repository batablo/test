import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 開発モード警告文をconsoleで出すかどうか
Vue.config.productionTip = false;

/**
 * https://qiita.com/teinen_qiita/items/ed1bb1909a17f9ca9daa
 * hはhyperscriptの略で、仮想DOM実装時によく使われるらしい
 * $mountはマウントするelementを渡す
 */
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
