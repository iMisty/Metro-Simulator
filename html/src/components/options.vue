<template>
  <div id="options">
    <label>
      <h3>当前站:</h3>
      <input type="text" placeholder="中文" v-model="sStation">
      <input type="text" placeholder="英文" v-model="eStation">
    </label>
    <label>
      <h3>下一站:</h3>
      <input type="text" placeholder="中文" v-model="sNext">
      <input type="text" placeholder="英文" v-model="eNext">
    </label>
    <label>
      <h3>线路:</h3>
      <select name="line" id="line-options" v-model="Line">
        <option value="1">1号线</option>
        <option value="2">2号线</option>
        <option value="3">3号线</option>
        <option value="4">4号线</option>
        <option value="5">5号线</option>
        <option value="6">6号线</option>
        <option value="7">7号线</option>
        <option value="8" selected>8号线</option>
        <option value="9">9号线</option>
        <option value="10">10号线</option>
        <option value="11">11号线</option>
        <option value="12">12号线</option>
        <option value="13">13号线</option>
        <option value="14">14号线</option>
        <option value="15">15号线</option>
        <option value="16">16号线</option>
        <option value="17">17号线</option>
        <option value="18">18号线</option>
        <option value="19">19号线</option>
        <option value="20">20号线</option>
        <option value="21">21号线</option>
        <option value="22">22号线</option>
        <option value="GF">广佛线</option>
        <option value="APM">APM线</option>
      </select>
    </label>
    <span>{{ Line }}</span>
    <label>
      <h3>站台:</h3>
      <select name="platform" id="platform" v-model="platform">
        <option value="pf1">1 站台</option>
        <option value="pf2">2 站台</option>
        <option value="pf3">3 站台</option>
        <option value="pf4">4 站台</option>
        <option value="pf5">5 站台</option>
        <option value="pf6">6 站台</option>
        <option value="pf7">7 站台</option>
      </select>
    </label>
    <label>
      <h3>站点编号:</h3>
      <input type="text" v-model="nStation">
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'options',
  data(){
    return{
      sStation: '大学城北',
      eStation: 'Higher Education Mega Center N.',
      sNext: '大学城南',
      eNext: 'Higher Education Mega Center S.',
      Line: '10',
      nStation: '40',
      platform: '4'
    }
  }
}
</script>
<style lang="less" scoped>
</style>
