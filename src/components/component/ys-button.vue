<template>
  <div class="ys-buttons">
    <button class="ys-button">{{buttonText}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({
  components: {}
})
export default class ysButton extends Vue {
  @Prop({
    type: String,
    required: true,
    default: "Default Value"
  })
  buttonText!: String;
}
</script>
<style lang="less" scoped>
.ys-button {
  position: relative;
  padding: 0 16px;
  min-width: 88px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  outline: none;
  text-transform: uppercase;
  background-color: #E040FB;
  color: #fff;
  &:hover{
    background-color: lighten(#E040FB,8%);
  }
}
</style>
