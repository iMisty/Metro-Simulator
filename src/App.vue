<template>
  <div id="app">
    <ys-header></ys-header>
    <Guangzhou></Guangzhou>
    <optionss class="options"></optionss>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import ysHeader from '@/components/ys-header.vue';
import Guangzhou from '@/views/Guangzhou-APM.vue';
import options from '@/components/options.vue';
import option from '@/components/option.vue';
@Component({
  components:{
    ysHeader,
    Guangzhou,
    options,
    'optionss':option
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
