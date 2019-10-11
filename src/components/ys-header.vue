<template>
  <div class="ys-header">
    <div class="header-left flex row center">
      <div
        class="menu-icon"
        @click="sidebarOpen()"
        :class="{'menu-icon-selected': isSideBarClicked}"
      >
        <i class="menu menu-top" :class="{'menu-top-selected' : isSideBarClicked}"></i>
        <i class="menu menu-medium" :class="{'menu-medium-selected' : isSideBarClicked}"></i>
        <i class="menu menu-bottom" :class="{'menu-bottom-selected' : isSideBarClicked}"></i>
      </div>
      <div class="header-title">{{title}}</div>
    </div>
    <div class="header-right flex row center">
      <img src="../../src/assets/color.svg" alt="">
      <img src="../../src/assets/github.svg" alt="">
    </div>
    <ys-sidebar :class="{'sidebar-selected' : isSideBarClicked}"></ys-sidebar>
  </div>
</template>

<script>
import ysSidebar from "@/components/ys-sidebar";

export default {
  name: 'ys-header',
  components: {
    ysSidebar
  },
  props: {
    title: String
  },
  data(){
    return{
      isSideBarClicked : false
    }
  },
  methods: {
    sidebarOpen(){
      return this.$data.isSideBarClicked = !this.$data.isSideBarClicked;
    }
  }
}
</script>
<style lang="less" scoped>
@primany: #673ab7;
.ys-header {
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  padding: 0 32px;
  width: 100%;
  height: 64px;
  line-height: 64px;
  color: #fff;
  z-index: 8;
  background-color: @primany;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
div.menu-icon {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 64%;
  &:hover{
      background-color: rgba(254,254,254,.18);
    }
  .menu {
    position: absolute;
    left: 12px;
    width: 24px;
    height: 2px;
    z-index: 12;
    font-style: normal;
    background-color: #fff;
    border-radius: 2rem;
  }
  .menu-top {
    top: 14px;
    transition: all ease-in-out 0.4s;
  }
  .menu-medium {
    top: 22px;
    transform: scale(1);
    transform-origin: center;
    transition: all ease-in-out 0.4s;
  }
  .menu-bottom {
    top: 30px;
    transition: all ease-in-out 0.4s;
  }
  .menu-top-selected {
    top: 24px;
    transform: rotate(45deg);
    transition: all ease-in-out 0.4s;
  }
  .menu-medium-selected {
    transform: scale(0);
    transform-origin: center;
    transition: all ease-in-out 0.4s;
  }
  .menu-bottom-selected {
    top: 24px;
    transform: rotate(-45deg);
    transition: all ease-in-out 0.4s;
  }
}
.header-title{
  margin: 0 16px;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
}
</style>
