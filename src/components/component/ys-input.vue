<template>
  <label class="ys-input-switch flex row">
    <input type="checkbox" name class="ys-input" />
    <h3 class="ys-input-switch-text">{{inputName}}</h3>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({
  components: {}
})
export default class mdInput extends Vue {
  private inputName:string = '检测是否为快车站';
}
</script>
<style lang="less" scoped>
@primaryColor: #673ab7;
@lightPrimaryColor: #d1c4e9;
.ys-input-switch{
  align-items: center;
  flex: 1 1 100%;
  .ys-input-switch-text{
    font-size: 2rem;
    font-weight: 384;
    color: #212121;
  }
}
.ys-input {
  -webkit-appearance: none;
  display: inline-block;
  outline: none;
  position: relative;
  width: 3.2em;
  height: 1.2rem;
  border-radius: 6.4rem;
  background-color: rgba(0, 0, 0, 0.12);
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  &::before {
    content: "";
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: -0.4rem;
    left: 0;
    z-index: 2;
    background-color: #bdbdbd;
    border-radius: 64%;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    background-color: #fafafa;
    transition-property: all;
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:checked {
    background-color: @lightPrimaryColor;
    transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    &::before {
      left: 1.6rem;
      background-color: @primaryColor;
      transition-property: all;
      transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}
</style>
