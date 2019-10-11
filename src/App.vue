<template>
  <div id="app">
    <ys-header :title="headerTitle"></ys-header>
    <Guangzhou></Guangzhou>
    <dash-board></dash-board>
  </div>
</template>

<script>
import ysHeader from '@/components/ys-header.vue';
import Guangzhou from '@/views/Guangzhou-APM.vue';
import dashBoard from '@/components/dashboard.vue';

export default{
  name: 'App',
  components:{
    ysHeader,
    Guangzhou,
    dashBoard
  },
  data(){
    return{
      headerTitle: '昆特牌 提琴 烤蛋挞 苏打 马拉松',
      title: 'test'
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "微软雅黑", Microsoft YaHei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .options{
    width: 800px;
    padding: 32px;
  }
}
</style>
