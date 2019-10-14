<template>
  <div class="next-station flex row align-center">
    <article class="flex column next-title">
      <h2 class="ch-next-title">下站</h2>
      <h3 class="en-next-title">Next</h3>
    </article>
    <article class="flex column next-text">
      <h2 class="ch-next-text">{{ this.$store.state.chNextStation }}</h2>
      <h3 class="en-next-text">{{ this.$store.state.enNextStation }}</h3>
    </article>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    chNextStation: String,
    enNextStation: String
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.next-station {
  position: relative;
  justify-content: space-evenly;
  padding-left: 32px;
  transform: translateY(-16px);
  h2 {
    font-size: 2.4rem;
    font-weight: 400;
  }
  h3 {
    position: absolute;
    top: 24px;
    left: 50%;
    width: 100%;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 400;
    transform: translateX(-50%);
  }
  .next-title {
    position: relative;
    flex: 2;
  }
  .next-text {
    position: relative;
    flex: 4;
  }
}
</style>