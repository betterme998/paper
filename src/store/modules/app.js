import { login as loginApi} from '@/api/login'
import router from '@/router'
// 登录是设置时间
import { setTokenTime } from '@/Utils/auth'
export default {
  namespaced: true,
  state: () =>({
    token: localStorage.getItem('token') || '',
    siderTyoe: true,
    lang:localStorage.getItem('lang') || 'zh'
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token',token)
    },
    changeSiderType(state) {
      state.siderTyoe = !state.siderTyoe
    },
    changLang (state, lang) {
      state.lang = lang
    }
  },
  actions: {
    login({commit}, userInfo){
      return new Promise((resolve, reject) => {
        loginApi(userInfo).then(res =>{
          console.log(res);
          commit('setToken', res.token)
          setTokenTime()
          // 成功之后要跳转首页 要导入路由
          router.replace('/')
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出
    logout({commit}){
      localStorage.clear()
      sessionStorage.clear()
      commit('setToken','')
      router.replace('/login')
    }
  }
}