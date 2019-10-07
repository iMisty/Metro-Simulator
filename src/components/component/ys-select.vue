<template>
<label class="ys-select-wrap">
      <h3 class="ys-select-title">{{title}}</h3>
        <select class="ys-select" name="line">
          <option value="1">1 号线</option>
          <option value="2">2 号线</option>
          <option value="3">3 号线</option>
          <option value="4">4 号线</option>
          <option value="5">5 号线</option>
          <option value="6">6 号线</option>
          <option value="7">7 号线</option>
          <option value="8">8 号线</option>
          <option value="9">9 号线</option>
          <option value="10">10 号线</option>
          <option value="11">11 号线</option>
          <option value="12">12 号线</option>
          <option value="13">13 号线</option>
          <option value="14">14 号线</option>
          <option value="15">15 号线</option>
          <option value="16">16 号线</option>
          <option value="17">17 号线</option>
          <option value="18">18 号线</option>
          <option value="19">19 号线</option>
          <option value="20">20 号线</option>
          <option value="21">21 号线</option>
          <option value="22">22 号线</option>
          <option value="GF">广佛线</option>
          <option value="APM">APM线</option>
        </select>
    </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({
  components: { }
})

export default class ysSelect extends Vue {
  @Prop({
    type: String,
    required: true,
    default: 'Default Value'
  })title !: string;
  @Prop()items !: Array<String>;
  @Prop() isClicked !:boolean;
}
</script>
<style lang="less" scoped>
.ys-select-wrap{
  margin: 8px;
  flex: 1 1 100%;
}
.ys-select-title{
  text-align: left;
  font-size: 2rem;
  font-weight: 400;
  color: rgba(0,0,0,.54)
}
.ys-select{
  position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 2.4rem;
    width: 100%;
    height: 3.6rem;
    font-size: 16px;
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(0,0,0,.18);
    border-radius: 0;
    color: rgba(0,0,0,.87);
    background-color: transparent;
    background-image: url(../../assets/arrow.png);
    background-size: 16px 16px;
    background-repeat: no-repeat;
    background-position: right;
}
</style>
