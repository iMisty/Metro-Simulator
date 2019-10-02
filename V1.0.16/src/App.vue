<template>
  <div id="app">
  <Guangzhou style="display: none;"></Guangzhou>
  <ys-input :inputTitle="title"></ys-input>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Guangzhou from './views/Guangzhou.vue';
import ysInput from '@/components/component/ys-input.vue';

@Component({
  components:{
    Guangzhou,
    ysInput
  }
}
)
export default class App extends Vue {
  private title:string = 'test';
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
  justify-content: center;
  align-items: center;
}
</style>
