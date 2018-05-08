import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goods from '@/components/goods/goods'
import seller from '@/components/seller/seller'
import ratings from '@/components/ratings/ratings'

Vue.use(Router)

// 2.定义路由 映射
const routes = [
  { path: '/', redirect: 'goods'}, 
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
]

// 3. 创建 router 实例，然后传 `routes` 配置
export default new Router({
  routes
})
