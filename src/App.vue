<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    // 初始化 用户信息
    this.$store.commit('initUserInfo')
  }
}
</script>

