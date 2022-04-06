// 处理时间用 第三方库 day.js
const dayjs = require('dayjs')

const filetrTimes = (val,format ='YYYY-MM-DD') =>{
  if(!isNull(val)) {
    val = parseInt(val) * 1000
    return dayjs(val).format(format)
  }else {
    return '--'
  }
}

// 判断是否有值
export const isNull = (date) =>{
  if(!date) return true
  if(JSON.stringify(date) === '{}') return true
  if(JSON.stringify(date) ==='[]') return true
}

// 使用vue全局配置,使用filetrTimes方法，  在main.js中导入
export default app =>{
  app.config.globalProperties.$filters = {
    filetrTimes
  }
}