<template>
<div class="output flex column align-center">
  <button @click="image()">下载签名图</button>
  <img class="real_pic" :src="htmlUrl" v-if="htmlUrl!= ''"/>
</div>
</template>

<script>
import Bus from '../bus.js';
import html2canvas from 'html2canvas';
export default{
  components:{
    html2canvas
  },
  data(){
    return{
      htmlUrl: ''
    }
  },
  mounted(){
    this.getImage();
  },
  methods:{
    getImage(){
      const vm = this;
      Bus.$on('image',image => {
        vm.htmlUrl = image;
      });
    },
    download(htmlUrl){
      let aLink = document.createElement("a");
      aLink.style.display = "none";
      aLink.href = htmlUrl;
      aLink.download = "sign.png";
      // 触发点击-然后移除
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
    },
    image(){
      const vm = this;
      console.log(this.$data.htmlUrl);
      let img = this.$data.htmlUrl;
      if(img === ''){
        alert('请先点击生成签名档再下载');
      }else{
        this.download(vm.htmlUrl);
      }
    }
  }
}
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
