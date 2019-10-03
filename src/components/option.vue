<template>
  <div class="options">
    <section class="options-name flex row">
      <ys-input :inputTitle="chNowStation"></ys-input>
      <ys-input :inputTitle="enNowStation"></ys-input>
      <ys-input :inputTitle="chNextStation"></ys-input>
      <ys-input :inputTitle="enNextStation"></ys-input>
    </section>
    <section class="options-station-select flex row">
      <ys-select :title="line"></ys-select>
      <ys-select :title="platform"></ys-select>
      <ys-number :title="StationNumTitle"></ys-number>
    </section>
    <section class="options-station-check flex row">
      <ys-checkbox class="center" :title="isEnd"></ys-checkbox>
      <ys-checkbox class="center" :title="isExpress"></ys-checkbox>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ysInput from '@/components/component/ys-input.vue';
import ysSelect from '@/components/component/ys-select.vue';
import ysCheckbox from '@/components/component/ys-checkbox.vue';
import ysNumber from '@/components/component/ys-number.vue';
@Component({
components:{
  ysInput,ysSelect,ysCheckbox,ysNumber
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
  private isEnd:string = '是否为终点站';
  private isExpress:string = '是否为快车';
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
