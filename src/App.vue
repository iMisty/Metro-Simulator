<template>
  <div id="app">
    <Home></Home>
    <Options></Options>
    <Button></Button>
    <article class="copyright">
      <h3>2019 Wednesday Teatime.Made by Koeri</h3>
    </article>
  </div>
</template>

<script>
import Home from './views/Home';
import Options from './components/options';
import Button from './components/button';
export default {
  components: {
    Home,Options,Button
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
