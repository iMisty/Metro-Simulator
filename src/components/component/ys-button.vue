<template>
  <div class="ys-buttons">
    <button class="ys-button">{{title}}</button>
  </div>
</template>

<script>
export default {
  name: 'ys-button',
  props:{
    title: String
  },
  data(){
    return{
      //title: ''
    }
  }
}
</script>
<style lang="less" scoped>
.ys-button {
  position: relative;
  margin: 8px;
  padding: 0 16px;
  min-width: 88px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  outline: none;
  text-transform: uppercase;
  background-color: #673ab7;
  color: #fff;
  &:hover{
    background-color: lighten(#673ab7,8%);
  }
}
</style>