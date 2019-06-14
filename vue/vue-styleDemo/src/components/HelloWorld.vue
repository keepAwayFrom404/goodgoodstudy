<template>
  <div class="hello">
    <Child></Child>
    <Grandson></Grandson>
  </div>
</template>

<script>
import Child from '@/components/Child.vue'
import Grandson from '@/components/Grandson.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Child,
    Grandson
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// /deep/ .Child-container {
//   color: green;
//   font-size: 30px;
// }
</style>
