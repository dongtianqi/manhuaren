// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//import home from './components/home/home'

new Vue({
router,
store,
template: '<App/>',
components: {App}
}).$mount('#app')



router.push('home')
