<template>
  <div id="guide" @click.prevent.stop="handleGuide">
    <svg-icon icon="guide"></svg-icon>
  </div>
</template>

<script setup>
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
// 当dom全部加载完成后进行new操作
import { onMounted } from 'vue'
import { steps } from './steps'
import { watchLang } from '@/i18n/watchlang'
// 使用i18n改变引导弹框的内容 国际化操作
import i18n from '@/i18n'
const t = i18n.global.t

let driver
onMounted(()=>{
 initDriver()
})

const initDriver = () =>{
  driver = new Driver({
  animate: false,                    // 动画
  opacity: 0.75,                    // 透明的
  padding: 10,                      // 内间距
  allowClose: true,                 // 遮罩层是否关闭
  overlayClickNext: false,          // Whether the click on overlay should move next
  doneBtnText: t('driver.doneBtnText'),              // Text on the final button
  closeBtnText: t('driver.closeBtnText'),            // Text on the close button for this step
  stageBackground: t('driver.stageBackground'),       // Background color for the staged behind highlighted element
  nextBtnText: t('driver.nextBtnText'),              // Next button text for this step
  prevBtnText: t('driver.prevBtnText'),          // Previous button text for this step
 });
}

// 监听时执行一次
watchLang(initDriver)

const handleGuide = () =>{
  driver.defineSteps(steps(t))  //配置
  driver.start(); //启动
}
</script>

<style lang="scss" scoped>

</style>