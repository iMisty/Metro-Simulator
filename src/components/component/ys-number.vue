<template>
  <label class="ys-number-wrap">
    <h3 class="ys-number-title">{{title}}</h3>
    <input
      class="ys-number-area"
      type="number"
      :min="min"
      :max="max"
      v-model="inputNumber"
      :placeholder="defaultPlaceholder"
    />
  </label>
</template>

<script>
export default {
  name: 'ys-number',
  props:{
    title: String,
    min: Number,
    max: Number,
    defaultPlaceholder: String,
  },
  data(){
    return{
      inputNumber: 1
    }
  },
  methods: {
    numbers(){
      this.$emit('childByValue',this.childValue);
    }
  }

}
</script>
<style lang="less" scoped>
.ys-number-wrap{
  margin: 8px;
  flex: 1 1 100%;
}
.ys-number-title {
  text-align: left;
  font-size: 2rem;
  font-weight: 400;
  color: rgba(0, 0, 0, .54);
}
.ys-number-area {
  height: 36px;
  width: 100%;
  font-size: 16px;
  padding: 4px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  color: rgba(0, 0, 0, 0.87);
  background-color: transparent;
}
</style>
