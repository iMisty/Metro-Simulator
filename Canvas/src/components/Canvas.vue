<template>
 <div>
   <canvas id="canvas" width="700px" height="168px"></canvas>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      background: '#444',
      chMainTitle: '科韵路',
      enTitle: 'Fo Wan Lou',
      chNextStation: '员村',
      enNextStation: 'Yuancun'
     }
   },
   components: {

   },
   mounted() {
      const ctx = document.getElementById('canvas').getContext('2d');
      // 绘制背景
      ctx.rect(0,0,700,168);
      ctx.fillStyle = this.$data.background;
      ctx.fillRect(0,148,700,24);
      // 编译完毕记得删掉下面的
      ctx.strokeStyle = 'blue';
      ctx.moveTo(350,0);
      ctx.lineTo(350,150);
      ctx.stroke();
      // 编译完毕记得删掉上面的
      // 绘制正中站点
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.font = '40px bolder Arial';
      ctx.fillText(this.$data.chMainTitle,350,70);
      ctx.font = '22px bolder Arial';
      ctx.fillText(this.$data.enTitle,350,102);
      // 绘制下一站
      ctx.font = '18px bolder Arial';
      ctx.fillText('下站',56,72);
      ctx.fillText(this.$data.chNextStation,108,72);
      ctx.font = '10px bolder Arial';
      ctx.fillText('Next',56,86);
      ctx.fillText(this.$data.enNextStation,108,86);
   }
 }
</script>

<style lang="less" scoped>
#canvas{
  border: 1px solid #444;
  margin: 4rem;
}
 
</style>
