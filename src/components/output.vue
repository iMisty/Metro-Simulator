<template>
<div class="output flex column align-center">
    <div>生成签名图</div>
  <div>下载签名图</div>
  <img class="real_pic" :src="htmlUrl" v-if="htmlUrl!= ''"/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
export default class output extends Vue {
  private htmlUrl:string = '';
}/*
import Bus from '../bus.js';
import html2canvas from 'html2canvas';
export default{
  components: {
    html2canvas,
  },
  data() {
    return{
      htmlUrl: '',
    }
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage() {
      const vm = this;
      Bus.$on('image', image => {
        vm.htmlUrl = image;
      });
    },
    private toImage() {
      let scale = window.devicePixelRatio;
      html2canvas({
        backgroundColor: null,
        scale: scale
      }).then((canvas:string) => {
        let url = canvas.toDataURL<string>('image/png');
        this.htmlUrl = url;
        this.expressImage();
      })
    }
    public download(downloadUrl:string) {
      const aLink = document.createElement('a');
      aLink.style.display = 'none';
      aLink.href = downloadUrl;
      aLink.download = 'sign.png';
      // 触发点击-然后移除
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
    },
    download(htmlUrl) {
      const aLink = document.createElement('a');
      aLink.style.display = 'none';
      aLink.href = htmlUrl;
      aLink.download = 'sign.png';
      // 触发点击-然后移除
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
    },
    image() {
      const vm = this;
      const img = this.$data.htmlUrl;
      if (img === '') {
        alert('请先点击生成签名档再下载');
      }else {
        this.download(vm.htmlUrl);
      }
    }
  }
}
*/
</script>
<style lang="less" scoped>
.real_pic{
  max-width: 98vw;
  transform: scale(.6);
}
button{
    position: absolute;
    bottom: 44%;
    left: 52%;
    @media screen and (max-width: 775px){
      &{
        bottom: 38%;
        left: 50%;
        transform: translateX(0%);
        border: 1px solid #dedede;
        background: transparent;
      }
    }
}
</style>
