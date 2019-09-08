<template>
  <div id="app">
    <Home></Home>
    <Options></Options>
  </div>
</template>

<script>
import Home from './views/Home';
import Options from './components/options';
export default {
  components: {
    Home,Options
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
  margin: 0 auto;
}
</style>
