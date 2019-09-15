<template>
  <div id="app">
    <h1>routing</h1>
    <hr />
    <router-view name="header-top"></router-view>
    <transition name="reverse" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="header-bottom"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      }
    };
  },
  methods: {
    submit() {
      this.$http
        .post('https://vuejs-http.firebaseio.com/test.json', this.user)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
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
