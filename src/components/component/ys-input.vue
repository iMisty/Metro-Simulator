<template>
  <label class="ys-input-wrap" :class="{'ys-input-selected':inputSelected}">
    <input class="ys-input-area" type="text" maxlength="6" @focus="click()" @blur="blur()" v-model="inputText"/>
    <h3 class="ys-input-text">{{title}}</h3>
  </label>
</template>

<script>
export default {
  name: ys-input,
  props: {
    title: String
  },
  data(){
    return{
      inputSelected: false,
      inputText: ''
    }
  },
  methods:{
    click(){
      return this.$data.inputSelected = true;
    },
    blur(){
      if(this.$data.inputText === ''){
        this.$data.inputSelected = false;
      }else{
        return;
      }
    }
  }
}
</script>
<style lang="less" scoped>
.ys-input-wrap{
  position: relative;
  flex: 1 1 40%;
  height: 48px;
  margin: 8px;
}
.ys-input-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: left;
  font-size: 2rem;
  z-index: 1;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 400;
  transition-duration: .2s;
  transform-origin: left;
}
.ys-input-area {
  position: relative;
  border: none;
  outline: none;
  width: 100%;
  height: 36px;
  z-index: 4;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  color: rgba(0, 0, 0, 0.54);
  background-color: transparent;
}
// 选中状态下
.ys-input-selected {
  .ys-input-text {
    top: -16px;
    left: 0;
    transform: scale(.8) translateY(0);
    transition-duration: .2s;
    transform-origin: left;
  }
}
</style>
