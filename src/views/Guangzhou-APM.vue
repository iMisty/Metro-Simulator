<template>
  <div>
    <div id="home" class="flex row center" :class="[getColor]">
      <section class="left flex row flex-1">
        <article class="left-next sec-text flex column next-text">
          <h2>下站</h2>
          <h3>Next</h3>
        </article>
        <article class="left-text sec-text flex column next-title">
          <h2>{{ sNext }}</h2>
          <h3>{{ eNext }}</h3>
        </article>
        <svg
          t="1567945304723"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3199"
          width="32"
          height="32"
        >
          <path
            d="M550.1 127.5c0 9-3.4 17.9-10.3 24.7L180.1 512l359.8 359.8c13.7 13.7 13.7 35.8 0 49.5-13.7 13.7-35.8 13.7-49.5 0L105.9 536.7c-13.7-13.7-13.7-35.8 0-49.5l384.5-384.5c13.7-13.7 35.8-13.7 49.5 0 6.8 6.9 10.2 15.8 10.2 24.8z"
            p-id="3200"
          />
          <path
            d="M928.4 512c0 19.3-15.7 35-35 35H130.6c-19.3 0-35-15.7-35-35s15.7-35 35-35h762.7c19.4 0 35.1 15.7 35.1 35z"
            p-id="3201"
          />
        </svg>
      </section>
      <section class="medium flex column flex-2">
        <article class="medium-text">
          <h1>{{ sStation }}</h1>
          <h2>{{ eStation }}</h2>
        </article>
      </section>
      <section class="right flex row flex-1 center">
        <article class="right-medic">
          <span class="medic-left flex center" :class="[getColor]">{{ Line }}</span>
          <span class="medic-right flex center" :class="[getColor]">{{ nStation }}</span>
        </article>
        <article class="right-station flex column center" :class="[getColor]">
          <h4>{{platform}}</h4>
          <h5>站台</h5>
          <h6>Platform</h6>
        </article>
      </section>
    </div>
  </div>
</template>

<style lang="less" scoped>
#home {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto;
  padding: 0 2rem;
  width: 700px;
  height: 168px;
  background-color: #fff;
  border: 1px solid #333;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3rem;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 5rem;
    height: 2rem;
    border: 1px solid #d59850;
    background: linear-gradient(90deg, #ec9b3b, #d2852b, #d59850);
    z-index: 4;
    border-radius: 32%;
    transform: translateX(-50%);
  }
}
</style>

<script>
import dashBoard from '@/components/dashboard';

export default {
  components: {
    dashBoard
  },
  data(){
    return{
      sStation : '芝士橙',
      eStation : 'Sino-Singapore Guangzhou Knowledge City',
      sNext : '枫下',
      eNext : 'Fengxia',
      Line : '14',
      nStation :  '40',
      platform:  '4',
      color :  'line14',
      htmlUrl :  '',
      isAPM :  false
    }
  },
  mounted (){
      this.getAPM;
    },
    methods: {
      getAPM(){
        let line = this.$data.line;
      if(line === 'APM'){
        this.$data.isAPM = true;
      }
      }
    },
    computed: {
      getColor(){
        return this.$data.color = 'line' + this.$data.Line;
      }
    }
}
  /*
  @watch()
    'sStation': function(){ this.getSStation(); },
    'eStation': function(){ this.getEStation(); },
    'sNext' : function(){ this.getSNext(); },
    'eNext': function(){ this.getENext(); },
    'Line': function(){ this.getLine(); },
    'nStation': function(){ this.getNStation(); },
  */
</script>