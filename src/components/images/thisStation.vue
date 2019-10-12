<template>
    <div class="img-this-station flex column">
      <h1 class="ch-this-station">{{chThisStation}}</h1>
      <h2 class="en-this-station">{{enThisStation}}</h2>
    </div>
</template>

<script>

export default {
    components: {},
    props:{
      chThisStation: String,
      enThisStation: String
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
  h1.ch-this-station{
    font-size: 6rem;
    font-weight: 600;
  }
  h2.en-this-station{
    font-size: 2.8rem;
    line-height: 1;
    font-weight: 500;
  }

</style>