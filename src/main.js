// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuesax from 'vuesax'
import blog from '@/components/Blog'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

Vue.config.productionTip = false
Vue.use(Vuesax)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, blog },
  template: '<App/>'
})
