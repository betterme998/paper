<template>
  <el-dropdown @command="handleCommand">
    <svg-icon icon="language"></svg-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'">中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="currentLanguage === 'en'">Englist</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
// 从它身上取当前的语言
import { useI18n, usrI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useStore } from 'vuex'
const i18n = useI18n()
const store = useStore()
//当前的语言就是
const currentLanguage = computed(() =>{
  return i18n.locale.value
})

// 切换
const handleCommand = (val) => {
  console.log(val);
  i18n.locale.value = val
  store.commit('app/changLang', val)
  localStorage.setItem('lang', val)
}
</script>

<style lang="scss" scoped>

</style>