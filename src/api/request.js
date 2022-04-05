import axios from "axios";
import { ElMessage } from 'element-plus'
import { diffTokenTime } from '@/Utils/auth'
import store from "@/store";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 将每个接口添加token（令牌）信息
// 请求拦截器
service.interceptors.request.use((config) => {
  // 判断是否超时
  if (localStorage.getItem('token')) {
    if(diffTokenTime()){
      store.dispatch('app/logout')
      return Promise.reject(new Error('token 失效了')) //过期后执行一个退出操作，在vuex中执行
    }
  }
  config.headers.Authorization = localStorage.getItem('token');
  return config
}, error => {
  return Promise.reject(new Error(error))
})

// 响应拦截器
service.interceptors.response.use((response) => {
  const {data, meta} = response.data
  //成功与失败时
  if(meta.status === 200 || meta.status ===201) {
    return data
  }else {
    ElMessage.error(meta.msg)
    return Promise.reject(new Error(meta.msg))
  }
},error =>{
  //没有响应时
  error.response && Promise.error(error.response.data)
  return Promise.reject(new Error(error.response.data))
})
export default service