<template>
  <div id="app">
    <ys-header :title="headerTitle"></ys-header>
    <station class="border-1"></station>
    <dash-board></dash-board>
    <ys-footer></ys-footer>
  </div>
</template>

<script>
import ysHeader from '@/components/ys-header.vue';
import station from '@/components/station.vue';
import dashBoard from '@/components/dashboard.vue';
import ysFooter from '@/components/footer.vue'

export default{
  name: 'App',
  components:{
    ysHeader,
    station,
    dashBoard,
    ysFooter
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
  .border-1{
    margin-top: 16px;
    border: 1px solid #222;
  }
}
</style>
