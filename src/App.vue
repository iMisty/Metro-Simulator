<template>
  <div id="app">
    <guangzhou></guangzhou>
    <Options></Options>
    <inst-canvas></inst-canvas>
  </div>
</template>

<script>
import guangzhou from './views/guangzhou';
import Options from './components/options';
import instCanvas from './components/output';
export default {
  components: {
    guangzhou,Options,instCanvas
  }
}
</script>

<style lang="less">
#app {
  font-family:  '微软雅黑',Microsoft YaHei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  .copyright{
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
