import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入sentry
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
Sentry.init({
  dsn: 'https://e4eaceb21f4043008cd4e9f100de79c4@sentry.io/3442431',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
  // 打开Vue自带的报错提示，如果设置成false，开发者无法在控制台看到log
  // logErrors: false
});

// import Raven from 'raven-js';
// import RavenVue from 'raven-js/plugins/vue';
// Raven
//   .config('https://e4eaceb21f4043008cd4e9f100de79c4@sentry.io/3442431')
//   .addPlugin(RavenVue, Vue)
//   .install();
// 全局引入iView
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
