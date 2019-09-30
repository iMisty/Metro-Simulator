<template>
  <div id="app">
    <Guangzhou></Guangzhou>
  </div>
</template>

<script>
import Guangzhou from './views/Guangzhou';
export default {
  components: {
    Guangzhou,
  }
}
</script>

<style lang="less">
#app {
  font-family: '微软雅黑',Microsoft YaHei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height:100vh;
}
</style>
