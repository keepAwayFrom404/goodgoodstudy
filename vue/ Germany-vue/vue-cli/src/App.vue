<template>
  <div id="app">
    <count></count>
    <other-count></other-count>
    <result></result>
    <other-result></other-result>
    <hr />
    <input type="text" v-model="value" />
    <p>{{ value }}</p>
  </div>
</template>

<script>
import Result from './components/vuex/result';
import Count from './components/vuex/count';
import OtherCount from './components/vuex/other-count';
import OtherResult from './components/vuex/other-result';
export default {
  components: {
    Result,
    Count,
    OtherResult,
    OtherCount
  },
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      }
    }
  }
};
</script>
<style>
#app {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tip {
  width: 700px;
  height: 80px;
  line-height: 80px;
  margin-top: 20px;
  background: gold;
  text-align: center;
}
.test {
  transform: rotateY(0deg);
}
.reverse-enter {
}
.reverse-enter-active {
  animation: reverse-in 2s ease-out forwards;
}
.reverse-leave {
}
.reverse-leave-active {
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  animation: reverse-out 0.5s ease-out forwards;
}
@keyframes reverse-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
@keyframes reverse-in {
  0% {
    /* transform: rotateY(90deg); */
    transform: translateX(0);
  }
  25% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
