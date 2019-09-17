<template>
  <div>
      <div id="home" class="flex row center" :class="[setColor]" ref="imageTofile">
    <section class="left flex row flex-1">
      <article class="left-next sec-text flex column next-text">
        <h2>下站</h2>
        <h3>Next</h3>
      </article>
      <article class="left-text sec-text flex column next-title">
        <h2>{{ sNext }}</h2>
        <h3>{{ eNext }}</h3>
      </article>
      <svg t="1567945304723" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3199" width="32" height="32"><path d="M550.1 127.5c0 9-3.4 17.9-10.3 24.7L180.1 512l359.8 359.8c13.7 13.7 13.7 35.8 0 49.5-13.7 13.7-35.8 13.7-49.5 0L105.9 536.7c-13.7-13.7-13.7-35.8 0-49.5l384.5-384.5c13.7-13.7 35.8-13.7 49.5 0 6.8 6.9 10.2 15.8 10.2 24.8z" p-id="3200"></path><path d="M928.4 512c0 19.3-15.7 35-35 35H130.6c-19.3 0-35-15.7-35-35s15.7-35 35-35h762.7c19.4 0 35.1 15.7 35.1 35z" p-id="3201"></path></svg>
    </section>
    <section class="medium flex column flex-2">
      <article class="medium-text">
        <h1>{{ sStation }}</h1>
        <h2>{{ eStation }}</h2>
      </article>
    </section>
    <section class="right flex row flex-1 center">
      <article class="right-medic">
        <span class="medic-left">{{ Line }}</span>
        <span class="medic-right">{{ nStation }}</span>
      </article>
      <article class="right-station flex column center" :class="[setColor]">
        <h4>{{platform}}</h4>
        <h5>站台</h5>
        <h6>Platform</h6>
      </article>
    </section>
  </div>
  <button @click="toImage()">生成签名图</button>
  </div>

</template>

<script>
import Bus from '../bus.js';
import html2canvas from 'html2canvas';
export default {
  name: 'home',
  components: {
    html2canvas
  },
  data() {
    return{
      sStation: '芝士橙',
      eStation: 'Sino-Singapore Guangzhou Knowledge City',
      sNext: '枫下',
      eNext: 'Fengxia',
      Line: '14',
      nStation: '40',
      platform: '4',
      color: 'line14',
      htmlUrl:''
    }
  },
  mounted(){
    this.getSStation();
    this.getEStation();
    this.getSNext();
    this.getENext();
    this.getLine();
    this.getNStation();
    this.getPlatform();
  },
  methods: {
    getSStation() {
      const vm = this;
      Bus.$on('getSStation',getSStation => {
        vm.sStation = getSStation;
      });
    },
    getEStation() {
      const vm = this;
      Bus.$on('getEStation',getEStation => {
        vm.eStation = getEStation;
      });
    },
    getSNext() {
      const vm = this;
      Bus.$on('getSNext',getSNext => {
        vm.sNext = getSNext;
      });
    },    
    getENext() {
      const vm = this;
      Bus.$on('getENext',getENext => {
        vm.eNext = getENext;
      });
    },
    getLine() {
      const vm = this;
      Bus.$on('getLine',getLine => {
        vm.Line = getLine;
      });
    },
    getNStation(){
      const vm = this;
      Bus.$on('getNStation',getNStation => {
        vm.nStation = getNStation;
      })
    },
    getPlatform(){
      const vm = this;
      Bus.$on('getPlatform',getPlatform => {
        vm.platform = getPlatform;
      })
    },
    expressImage: function(){
      const image = this.$data.htmlUrl;
      Bus.$emit('image',image);
    },
    toImage(){
      html2canvas(this.$refs.imageTofile,{
        backgroundColor: null
      }).then((canvas) => {
        let url = canvas.toDataURL('image/png');
        this.htmlUrl = url;
        console.log(this.$data.htmlUrl);
        this.expressImage();
      })
    },
    download(downloadUrl){
      let aLink = document.createElement("a");
      aLink.style.display = "none";
      aLink.href = downloadUrl;
      aLink.download = "sign.png";
      // 触发点击-然后移除
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
    }
  },
  computed:{
    setColor: function(){
      return this.$data.color = 'line' + this.$data.Line;
    }
  },
  watch:{
    'sStation': function(){this.getSStation();},
    'eStation': function(){this.getEStation();},
    'sNext' : function(){this.getSNext();},
    'eNext': function(){this.getENext();},
    'Line': function(){this.getLine();},
    'nStation': function(){this.getNStation();}
  }
}
</script>

<style lang="less" scoped>
  #home{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 2rem;
    width: 700px;
    height: 168px;
    background-color: #fff;
    border: 1px solid #333;
    &::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1rem;      
    }
    &::before{
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      width: 5rem;
      height: 2rem;
      border: 1px solid #999;
      background: linear-gradient(90deg,#fff,84%,#888);
      z-index: 4;
      border-radius: 64%;
      transform: translateX(-50%);
    }
  }
  button{
    position: absolute;
    bottom: 44%;
    left: 42%;
    @media screen and (max-width: 775px){
      &{
        bottom: 38%;
        left: 50%;
        transform: translateX(-120%);
        border: 1px solid #dedede;
        background: transparent;
      }
    }
  }
</style>
