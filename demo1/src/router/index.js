import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('../views/home/Home')
const Cart=()=>import('../views/cart/Cart')
const Cate=()=>import('../views/cate/Cate')
const My=()=>import('../views/my/My')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/cate',
      component: Cate
    },
    {
      path: '/my',
      component: My
    }
  ],
  mode:'history'
})
