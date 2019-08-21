<template>
  <div id="home">
    <section class="left flex row flex-1">
      <article class="left-next sec-text">
        <h2>下站</h2>
        <h3>Next</h3>
      </article>
      <article class="left-text sec-text">
        <h2>{{ sNext }}</h2>
        <h3>{{ eNext }}</h3>
      </article>
    </section>
    <section class="medium flex column flex-2">
      <article class="medium-text">
        <h1>{{ sStation }}</h1>
        <h2>{{ eStation }}</h2>
      </article>
    </section>
    <section class="right flex row flex-1">
      <article class="right-medic">
        <span>{{ Line }}</span>
        <span>{{ nStation }}</span>
      </article>
      <article class="right-station">
        <h4>2</h4>
        <h5>站台</h5>
        <h6>Platform</h6>
      </article>
    </section>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    
  },
  data() {
    return{
    sStation: '一大团广场',
    eStation: 'YiDaTuan Square',
    sNext: '北京路',
    eNext: 'BeiJing Lu',
    Line: '10',
    nStation: '40'
    }
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
  }
</style>
