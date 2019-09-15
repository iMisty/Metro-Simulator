<template>
  <div id="options" class="flex column tWrap">
    <section class="this-station flex row">
    <label>
      <h3>当前站(中文):</h3>
      <input type="text" placeholder="中文" v-model="sStation" @keyup="elementMyValue">
    </label>
    <label>
      <h3>当前站(英文):</h3>
      <input type="text" placeholder="英文" v-model="eStation" @keyup="elementMyValue">
    </label>
    </section>
    <section class="next-station flex row">
          <label>
      <h3>下一站(中文):</h3>
      <input type="text" placeholder="中文" v-model="sNext">
    </label>
    <label>
      <h3>下一站(英文):</h3>
      <input type="text" placeholder="英文" v-model="eNext" @keyup="elementMyValue">
    </label>
    </section>
    <section class="line-options flex row">
          <label>
      <h3>线路:</h3>
      <select name="line" id="line-options" v-model="Line" @keyup="elementMyValue">
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
      <select name="platform" id="platform" v-model="platform" @select="elementMyValue">
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
      <input type="text" v-model="nStation" @keyup="elementMyValue">
    </label>
    </section>
    <span>{{sStation}},{{eStation}},{{sNext}},{{eNext}},{{Line}},{{nStation}},{{platform}}</span>
  </div>
</template>

<script>
import Bus from '../bus.js';
export default {
  name: 'options',
  data(){
    return{
      sStation: '大学城北',
      eStation: 'Sino-Singapore Guangzhou Knowledge City',
      sNext: '大学城南',
      eNext: 'Higher Education Mega Center S.',
      Line: '10',
      nStation: '40',
      platform: '4'
    }
  },
  methods:{
    elementMyValue: function(){
      const getSStation = this.$data.sStation;
      const getEStation = this.$data.eStation;
      const getSNext = this.$data.sNext;
      const getENext = this.$data.eNext;
      const getLine = this.$data.Line;
      const getNStation = this.$data.nStation;
      const getPlatform = this.$data.platform;
      Bus.$emit('getSStation',getSStation,getEStation,getSNext,getENext,getLine,getNStation,getPlatform);
      Bus.$emit('getEStation',getEStation);
      Bus.$emit('getSNext',getSNext);
      Bus.$emit('getENext',getENext);
      Bus.$emit('getNStation',getNStation);
    }
  },
  watch: {
    'sStation' : function(newVal){
      this.sStation = newVal;
      console.log(newVal);
    },
    'eStation' : function(newVal) {
      this.eStation = newVal;
      console.log(newVal);
    },
    'sNext' : function(newVal) {
      this.sNext = newVal;
      console.log(newVal);
    },
    'eNext' : function(newVal) {
      this.eNext = newVal;
      console.log(newVal);
    },
    'Line' : function(newVal) {
      this.Line = newVal;
      console.log(newVal);
    },
    'nStation' : function(newVal) {
      this.nStation = newVal;
      console.log(newVal);
    },
    'platform' : function(newVal) {
      this.platform = newVal;
      console.log(newVal);
    }
  }
}
</script>
