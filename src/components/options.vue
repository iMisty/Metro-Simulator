<template>
  <div class="options">
    <section class="options-name flex row">
      <ys-input :title="chNowStation"></ys-input>
      <ys-input :title="enNowStation"></ys-input>
      <ys-input :title="chNextStation"></ys-input>
      <ys-input :title="enNextStation"></ys-input>
    </section>
    <section class="options-station-select flex row">
      <ys-select :title="line"></ys-select>
      <ys-select :title="platform" :items="listData"></ys-select>
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
export default class option extends Vue{
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
  
  private listData:Object[] = ['1号线','2号线','3号线','4号线','5号线','6号线','7号线','8号线','9号线','10号线','11号线','12号线','13号线','14号线','15号线','16号线','17号线','18号线','19号线','20号线','21号线','22号线','23号线','广佛线','APM线',];
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
