// // router/index.js

// import modules from './modules'
// import Vue from 'vue'
// //这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
// import Router from 'uni-simple-router'

// Vue.use(Router)
// //初始化
// const router = new Router({
//     routes: [...modules]//路由表
// });

// //全局路由前置守卫
// router.beforeEach((to, from, next) => {
//   next()
// })
// // 全局路由后置守卫
// router.afterEach((to, from) => {
// })
// export default router;

// router设置
// mode改为history可以取消自动加#的问题
import Vue from 'vue'
import Router from 'uni-simple-router';
import index from '@/pages/components/index.vue'
import goods from '@/pages/components/Goods/Goods.vue'
import rattings from '@/pages/components/Rattings/Rattings.vue'
import sellers from '@/pages/components/Sellers/Sellers.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    // aliasPath:'/', // 设置默认显示内容
    name: 'index',
    component: index,
	children: [{
		path:'/sellers',
		name: 'sellers',
		component: sellers
	  },
	  {
		path:'/goods',
		name: 'goods',
		component: goods
	  },
	  {
		path:'/rattings',
		name: 'rattings',
		component: rattings
	  }]
  }
  ]

const router = new Router({
	h5:{
    vueRouterDev:true,  //完全使用vue-router开发 默认 false  
  },
  routes
  //mode: 'history'
})

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})

router.push('/goods')

export default router