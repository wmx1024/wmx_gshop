/*
  路由器对象模块
*/

// 导入所需模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所以路由
  routes: [
    // 路由重定向
    {
      path: '/',
      redirect: '/msite'
    },
    // 首页组件
    {
      path: '/msite',
      name: 'Msite',
      component: () => import('@/pages/Msite/Msite'),
      meta: {
        showFooter: true
      }
    },
    // 订单组件
    {
      path: '/order',
      name: 'Order',
      component: () => import('@/pages/Order/Order'),
      meta: {
        showFooter: true
      }
    },
    // 个人组件
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/pages/Profile/Profile'),
      meta: {
        showFooter: true
      }
    },
    // 搜索组件
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/pages/Search/Search'),
      meta: {
        showFooter: true
      }
    },
    // 登录组件
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login/Login'),
      meta: {
        showFooter: false
      }
    }
  ]
})
