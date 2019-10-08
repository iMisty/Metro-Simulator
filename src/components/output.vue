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
<option value="1">1 号线</option>
          <option value="2">2 号线</option>
          <option value="3">3 号线</option>
          <option value="4">4 号线</option>
          <option value="5">5 号线</option>
          <option value="6">6 号线</option>
          <option value="7">7 号线</option>
          <option value="8">8 号线</option>
          <option value="9">9 号线</option>
          <option value="10">10 号线</option>
          <option value="11">11 号线</option>
          <option value="12">12 号线</option>
          <option value="13">13 号线</option>
          <option value="14">14 号线</option>
          <option value="15">15 号线</option>
          <option value="16">16 号线</option>
          <option value="17">17 号线</option>
          <option value="18">18 号线</option>
          <option value="19">19 号线</option>
          <option value="20">20 号线</option>
          <option value="21">21 号线</option>
          <option value="22">22 号线</option>
          <option value="GF">广佛线</option>
          <option value="APM">APM线</option>
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
