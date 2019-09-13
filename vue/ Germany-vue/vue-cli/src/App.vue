<template>
  <div id="app">
    <transition name="reverse" mode="out-in">
      <component
        :is="currentCom"
        @newQuestion="currentCom = 'super-quiz'"
        @resultPage="currentCom = 'result-quiz'"
        class="test"
      ></component>
    </transition>
  </div>
</template>

<script>
import SuperQuiz from './components/test14/super-quiz';
import ResultQuiz from './components/test14/result-quiz';
export default {
  data() {
    return {
      currentCom: 'super-quiz'
    };
  },
  components: {
    SuperQuiz,
    ResultQuiz
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
