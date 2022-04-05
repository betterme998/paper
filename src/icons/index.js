import SvgIcon from '@/components/SvgIcon'

// 用到webpack 获取该文件下所有svg文件，并暴漏出来
const svgRequired = require.context('./svg',false,/\.svg$/)
svgRequired.keys().forEach((item) => svgRequired(item));

export default app => {
  app.component('svg-icon', SvgIcon)
}