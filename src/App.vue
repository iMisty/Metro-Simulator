<template>
  <div id="app">
    <Home></Home>
    <Options></Options>
    <inst-canvas></inst-canvas>
    <article class="copyright">
      <h3>2019 Wednesday Teatime.Made by Koeri</h3>
      <a href="https://github.com/iMisty/GM-Simulator">开源于GitHub</a>
    </article>
  </div>
</template>

<script>
import Home from './views/Home';
import Options from './components/options';
import instCanvas from './components/output';
export default {
  components: {
    Home,Options,instCanvas
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
  margin: 8px auto;
  min-height: 100vh;
  overflow: hidden;
  .copyright{
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
