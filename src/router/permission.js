// 路由守卫
import router from './index'
import store from '@/store'

// 定义白名单，没有登录也可以访问
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  // 判断是否登录 通过token判断，token保存在vuex中
  if(store.getters.token) {
    if (to.path === '/login'){
      next('/');
    }else {
      next()
    }
  }else {
    if(whiteList.includes(to.path)){
      next()
    }else {
      next('/login')
    }
  }
})