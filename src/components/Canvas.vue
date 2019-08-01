<template>
 <div>
   <canvas id="canvas"></canvas>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       background: '#444'
     }
   },
   components: {

   },
   mounted() {
      const ctx = document.getElementById('canvas').getContext('2d');
      ctx.rect(0,0,700,176);
      ctx.stroke();
      ctx.fillStyle = this.$data.background;
      ctx.fillRect(0,0,700,32);
   }
 }
</script>

<style lang="less" scoped>
#canvas{
  width: 700px;
  height: 176px;
  border: 1px solid #444;
  margin: 4rem;
}
 
</style>
