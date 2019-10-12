<template>
    <div class="medic flex row center">
      <span class="medic-left flex center" :class="[getColor]">{{ line }}</span>
      <span class="medic-right flex center" :class="[getColor]">{{ num }}</span>
    </div>
</template>

<script>

export default {
    components: {},
    props:{
      line: String,
      num: String
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
.medic{
  display: inline-flex;
  justify-content: flex-end;
  font-size: 1.8rem;
  .medic-left{
    width: 28px;
    height: 32px;
    font-weight: 400;
    background: transparent;
    border-width: 2px;
    border-style: solid;
    border-radius: 2rem 0 0 2rem;
  }
  .medic-right{
    width: 28px;
    height: 32px;
    font-weight: 400;
    background: transparent;
    border-width: 2px;
    border-style: solid;
    border-radius: 0 2rem 2rem 0;
    border-left: none;
  }
}
</style>