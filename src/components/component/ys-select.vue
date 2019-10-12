<template>
<label class="ys-select-wrap">
      <h3 class="ys-select-title">{{title}}</h3>
        <select class="ys-select" name="line">
          <option v-for="list in items" :value="list.value">
            {{list.data}}
          </option>
        </select>
    </label>
</template>

<script>
export default {
  name: 'ys-select',
  props:{
    title: String,
    items: Array
  }
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
