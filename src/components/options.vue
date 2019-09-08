<template>
  <div id="options" class="flex column tWrap">
    <section class="this-station flex row">
    <label>
      <h3>当前站(中文):</h3>
      <input type="text" placeholder="中文" v-model="sStation">
    </label>
    <label>
      <h3>当前站(英文):</h3>
      <input type="text" placeholder="英文" v-model="eStation">
    </label>
    </section>
    <section class="next-station flex row">
          <label>
      <h3>下一站(中文):</h3>
      <input type="text" placeholder="中文" v-model="sNext">
    </label>
    <label>
      <h3>下一站(英文):</h3>
      <input type="text" placeholder="英文" v-model="eNext">
    </label>
    </section>
    <section class="line-options flex row">
          <label>
      <h3>线路:</h3>
      <select name="line" id="line-options" v-model="Line">
        <option value="1">1 号线</option>
        <option value="2">2 号线</option>
        <option value="3">3 号线</option>
        <option value="4">4 号线</option>
        <option value="5">5 号线</option>
        <option value="6">6 号线</option>
        <option value="7">7 号线</option>
        <option value="8" selected>8 号线</option>
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
    <label>
      <h3>站台:</h3>
      <select name="platform" id="platform" v-model="platform">
        <option value="1">1 站台</option>
        <option value="2" selected>2 站台</option>
        <option value="3">3 站台</option>
        <option value="4">4 站台</option>
        <option value="5">5 站台</option>
        <option value="6">6 站台</option>
        <option value="7">7 站台</option>
      </select>
    </label>
    <label>
      <h3>站点编号:</h3>
      <input type="text" v-model="nStation">
    </label>
    </section>
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
