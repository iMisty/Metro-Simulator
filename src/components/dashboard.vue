<template>
  <div class="dash-board">
    <section class="options-name flex row">
      <ys-input :title="chNowStation"></ys-input>
      <ys-input :title="enNowStation"></ys-input>
      <ys-input :title="chNextStation"></ys-input>
      <ys-input :title="enNextStation"></ys-input>
    </section>
    <section class="options-station-select flex row">
      <ys-select :title="line" :items="listData" v-model="Line" @change="getLine()"></ys-select>
      <ys-select :title="platform"></ys-select>
      <ys-number :title="StationNumTitle" :min="-9" :max="99"></ys-number>
      <ys-number :title="BarrierTitle" :min="1" :max="99"></ys-number>
    </section>
    <section class="options-station-check flex row">
      <ys-checkbox class="center" :title="isEnd"></ys-checkbox>
      <ys-checkbox class="center" :title="isExpress"></ys-checkbox>
    </section>
    <section class="option-station-button flex row center">
      <ys-button :title="createImg"></ys-button>
      <ys-button :title="downloadImg"></ys-button>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ysInput from '@/components/component/ys-input.vue';
import ysSelect from '@/components/component/ys-select.vue';
import ysCheckbox from '@/components/component/ys-checkbox.vue';
import ysNumber from '@/components/component/ys-number.vue';
import ysButton from '@/components/component/ys-button.vue';
@Component({
components:{
  ysInput,ysSelect,ysCheckbox,ysNumber,ysButton
}
})
export default class dashBoard extends Vue{
  private chNowStation:string = '当前站(中文)';
  private enNowStation:string = '当前站(英文)';
  private chNextStation:string = '下一站(中文)';
  private enNextStation:string = '下一站(英文)';
  private line:string = '线路编号';
  private platform:string = '站台编号';
  private StationNumTitle:string = '站点编号';
  private BarrierTitle:string = '屏蔽门编号';
  private isEnd:string = '是否为终点站';
  private isExpress:string = '是否为快车';
  private createImg:string = '生成图片';
  private downloadImg:string = '下载图片';

  private Line:string = '';

  getLine(){
    console.log(this.$emit);
  }
  
  private listData:Object[] = [
    {'data':'1号线','value':'1'},
    {'data':'2号线','value':'2'},
    {'data':'3号线','value':'3'},
    {'data':'4号线','value':'4'},
    {'data':'5号线','value':'5'},
    {'data':'6号线','value':'6'},
    {'data':'7号线','value':'7'},
    {'data':'8号线','value':'8'},
    {'data':'9号线','value':'9'},
    {'data':'10号线','value':'10'},
    {'data':'11号线','value':'11'},
    {'data':'12号线','value':'12'},
    {'data':'13号线','value':'13'},
    {'data':'14号线','value':'14'},
    {'data':'15号线','value':'15'},
    {'data':'16号线','value':'16'},
    {'data':'17号线','value':'17'},
    {'data':'18号线','value':'18'},
    {'data':'19号线','value':'19'},
    {'data':'20号线','value':'20'},
    {'data':'21号线','value':'21'},
    {'data':'22号线','value':'22'},
    {'data':'23号线','value':'23'},
    {'data':'广佛线','value':'gf'},
    {'data':'广佛肇环线','value':'gfz'},
    {'data':'APM线','value':'apm'},
    ];
}
</script>
<style lang="less" scoped>
.options-name{
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 32px;
}
.options-station-select{
  justify-content: space-between;
}
.options-station-check{
  padding: 16px 0;
}
</style>
