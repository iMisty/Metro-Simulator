<template>
  <div class="station-wrap">
    <next-station class="module-next-station" v-if="isEnd"></next-station>
    <div>
      <arrow class="module-arrow module-arrow-island" v-if="isIslandStation"></arrow>
    </div>
    <this-station class="module-this-station"></this-station>
    <div>
      <arrow class="module-arrow module-arrow-side" :isSideStation="true" v-if="isSideStation"></arrow>
    </div>
    <medic class="module-medic"></medic>
    <platform class="module-platform"></platform>
    <light class="module-light"></light>
    <bottom class="module-bottom"></bottom>
  </div>
</template>

<script>
import nextStation from "@/components/images/nextStation";
import thisStation from "@/components/images/thisStation";
import medic from "@/components/images/medic";
import light from "@/components/images/light";
import platform from "@/components/images/platform";
import arrow from "@/components/images/arrow";
import bottom from "@/components/images/bottom";
export default {
  components: {
    nextStation,
    thisStation,
    medic,
    light,
    platform,
    arrow,
    bottom
  },
  data() {
    return {
      isEnd: true,
      isIslandStation: false,
      isSideStation: true
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
.station-wrap {
  position: relative;
  display: grid;
  grid-template-rows: repeat(2, 56px) 32px;
  grid-template-columns: 168px 32px 294px 32px 76px 98px;
  max-width: 100%;
  width: 700px;
  height: 166px;
  padding-top: 24px;

  .module-next-station {
    grid-row: span 2;
  }
  .module-this-station {
    grid-row: span 2;
  }
  .module-arrow {
    position: relative;
    grid-row: span 2;
    top: 32px;
  }
  .module-medic {
    grid-row: span 2;
  }
  .module-platform {
    grid-row: span 2;
    padding-right: 32px;
  }
  .module-light {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
  .module-bottom {
    grid-column: span 6;
  }

  @media screen and (max-width: 800px){
    &{
      overflow: scroll;
    }
  }
}
</style>