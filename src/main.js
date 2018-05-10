// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Explorer from './Explorer.vue'
import Cart from './Cart.vue'
import Me from './Me.vue'


Vue.use(VueRouter)
// Vue.config.productionTip = false
const router=new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
	    {name: 'Home', path: '/home',components: Home},
	    {name: 'Categories', path: '/explorer',components: Explorer},
	    {name: 'ShoppingCart', path: '/cart',components: Cart},
	    {name: 'Me', path: '/me',components: Me},
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})

