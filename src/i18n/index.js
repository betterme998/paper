import { createI18n } from "vue-i18n";
import EN from './en'
import ZH from "./zh";
// 数据源
const messages = {
  // 不同语言对应的对象
  en: {
    ...EN
  },
  zh: {
    ...ZH
  }
}

// 设置当前语言
const getCurrentLanguage = () => {
  //通过浏览器设置语言
  const UAlang = navigator.language //
  const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
  localStorage.setItem('lang', langCode)
  return langCode
}

// 创建i18n
const i18n = createI18n({
  legacy:false,
  globalInjection:true,
  locale:getCurrentLanguage() || 'zh',
  messages:messages
})

// 导出
export default i18n