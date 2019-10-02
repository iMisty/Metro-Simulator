<template>
  <label class="ys-input-wrap" :class="{'ys-input-selected':inputSelected}">
    <input class="ys-input-area" type="text" maxlength="6" @focus="click()" @blur="blur()" v-model="inputText"/>
    <h3 class="ys-input-text">{{inputTitle}}</h3>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
@Component({
  components: {}
})
export default class ysInput extends Vue {
  private inputSelected:boolean = false;
  private inputText:string = '';

  @Prop({
    type: String,
    required: true,
    default: 'Default Value'
  })
  inputTitle !: string;

  //@Emit('inputTitle')send(inputTitle:string){};

  // 选中时改变框体
  private click() {
    this.inputSelected = true;
  }
  private blur(){
    if(this.inputText === ''){
      this.inputSelected = false;
    }else{
      return;
    }
  }
}
</script>
<style lang="less" scoped>
.ys-input-wrap{
  position: relative;
}
.ys-input-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: left;
  z-index: -1;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 400;
  transition-duration: .4s;
}
.ys-input-area {
  position: relative;
  border: none;
  outline: none;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  color: rgba(0, 0, 0, 0.54);
  background-color: transparent;
}
// 选中状态下
.ys-input-selected {
  .ys-input-text {
    top: -16px;
    left: -16px;
    transform: scale(.8);
    transition-duration: .4s;
  }
}
</style>
