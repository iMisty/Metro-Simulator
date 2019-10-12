<template>
    <div class="arrow">
      <svg
          t="1567945304723"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3199"
          width="32"
          height="32" 
          :class="{rotate : isSideStation}"
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
    </div>
</template>

<script>

export default {
    components: {},
    props:{
      isSideStation: Boolean
    },
    data() {
        return {

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
    activated() {},
    }
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.rotate{
  transform: rotate(180deg);
}

</style>