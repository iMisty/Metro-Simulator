<template>
  <label class="ys-number-wrap">
    <h3 class="ys-number-title">{{title}}</h3>
    <input
      class="ys-number-area"
      type="number"
      :min="min"
      :max="max"
      maxlength="2"
      v-model="inputNumber"
      :placeholder="defaultPlaceholder"
    />
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({
  components: {}
})
export default class ysNumber extends Vue {
  private inputNumber: Number = 1;
  @Prop({
    type: String,
    required: true,
    default: "Default Value"
  })
  title!: String;
  @Prop(Number)
  min!: Number;
  @Prop(Number)
  max!: Number;
  @Prop(String)
  defaultPlaceholder!: String;
}
</script>
<style lang="less" scoped>
.ys-number-wrap{
  margin: 8px;
  flex: 1 1 100%;
}
.ys-number-title {
  text-align: left;
  font-size: 2rem;
  font-weight: 400;
  color: rgba(0, 0, 0, .54);
}
.ys-number-area {
  height: 36px;
  width: 100%;
  font-size: 16px;
  padding: 4px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  color: rgba(0, 0, 0, 0.87);
  background-color: transparent;
}
</style>
