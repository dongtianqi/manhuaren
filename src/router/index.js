import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import original from '@/components/more/original'
import details from '@/components/details/details'
import hua from '@/components/details/hua'
import fanwai from '@/components/details/fanwai'
import pinglun from '@/components/details/pinglun'

//VueResource使用做http请求的
//Vue.use(VueResource) 
Vue.use(Router)

const routes = [
{name:'home', path: '/home', component:home},
{name:'original', path: '/original', component: original},
{name:'details', path: '/details', component: details,
redirect:'/hua',
      children: [
        {
          path: '/hua',
          component: hua
        },
        {
          path: '/fanwai',
          component: fanwai
        },
        {
          path: '/pinglun',
          component: pinglun
        }
      ]}

]
 
 const router = new Router({
 routes // （缩写）相当于 routes: routes
 })

export default router
