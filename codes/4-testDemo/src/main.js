import Vue from 'vue'
Vue.config.productionTip = false
import router from './router'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import locale from 'view-design/dist/locale/en-US';

Vue.use(ViewUI, { locale });

new Vue({
  router
}).$mount('#app')

// import App from './App.vue'
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
