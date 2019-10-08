<template>
  <div id="app">
    <ys-header :title="headerTitle" @mouseover.native="changeTitle()" @mouseout.native="restoreTitle()"></ys-header>
    <Guangzhou></Guangzhou>
    <dash-board></dash-board>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import ysHeader from '@/components/ys-header.vue';
import Guangzhou from '@/views/Guangzhou-APM.vue';
import dashBoard from '@/components/dashboard.vue';
@Component({
  components:{
    ysHeader,
    Guangzhou,
    dashBoard
  }
}
)
export default class App extends Vue {
  private headerTitle:String = '昆特牌 提琴 烤蛋挞 苏打 马拉松';
  private title:string = 'test';

  // 娱乐用
  private changeTitle(){
    return this.headerTitle = '㱎䖘䵈 䶁䘔 䶑䘓鋱 䩳䵷 㒪䪉䉥';
  }
  private restoreTitle(){
    return this.headerTitle = '昆特牌 提琴 烤蛋挞 苏打 马拉松';
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
