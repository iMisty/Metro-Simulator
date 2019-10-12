<template>
  <div class="platform flex column center">
    <article class="platform-wrap">
      <h4>{{platform}}</h4>
      <h5>站台</h5>
      <h6>Platform</h6>
    </article>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    platform: String
  },
  data() {
    return {
      //platform: 1
    };
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
.platform-wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #6b2c2d;
    width: 56px;
    height: 56px;
    border-radius: 64%;
    color: #fff;
}
h4 {
  line-height: 1;
  font-size: 2.75rem;
  font-weight: 300;
  color: #fff;
}
h5 {
  line-height: 0.8;
  letter-spacing: 1px;
  font-weight: 400;
}
h6 {
  transform: scale(0.8);
  font-weight: 400;
}
</style>