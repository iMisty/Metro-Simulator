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
    <ys-sidebar :class="{'sidebar-selected' : isSideBarClicked}"></ys-sidebar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ysSidebar from "@/components/ys-sidebar.vue";
import ysMask from '@/components/ys-mask.vue';
@Component({
  components: {
    ysSidebar,ysMask
  }
})
export default class ysHeader extends Vue {
  @Prop({
    type: String,
    required: false,
    default: "标题正在神游"
  })
  title!: string;

  // data
  private isSideBarClicked: boolean = false;
  // methods
  private sidebarOpen() {
    return (this.isSideBarClicked = !this.isSideBarClicked);
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
  width: 40px;
  height: 40px;
  .menu {
    position: absolute;
    left: 4px;
    width: 32px;
    height: 2px;
    z-index: 12;
    font-style: normal;
    background-color: #fff;
    border-radius: 2rem;
  }
  .menu-top {
    top: 10px;
    transition: all ease 0.4s;
  }
  .menu-medium {
    top: 18px;
    transform: scale(1);
    transform-origin: center;
    transition: all ease 0.4s;
  }
  .menu-bottom {
    top: 26px;
    transition: all ease 0.4s;
  }
  .menu-top-selected {
    top: 20px;
    transform: rotate(45deg);
    transition: all ease 0.4s;
  }
  .menu-medium-selected {
    transform: scale(0);
    transform-origin: center;
    transition: all ease 0.4s;
  }
  .menu-bottom-selected {
    top: 20px;
    transform: rotate(-45deg);
    transition: all ease 0.4s;
  }
}
.header-title{
  margin: 0 16px;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
}
</style>
