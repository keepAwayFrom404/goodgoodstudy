<template>
  <div id="app">
    <div id="particles-js"></div>
    <div class="background-image">
      <img src="./assets/background.png" alt="" />
    </div>
    <swiper class="swiper-group" :options="swiperOption">
      <swiper-slide class="swiper-item">I'm Slide 1</swiper-slide>
      <swiper-slide class="swiper-item">I'm Slide 2</swiper-slide>
      <swiper-slide class="swiper-item">I'm Slide 3</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'particles.js';
import particlesOptions from './data.json';

export default {
  name: 'app',
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    };
  },
  mounted() {
    particlesJS('particles-js', particlesOptions);
  },
  methods: {}
};
</script>

<style>
* {
  margin: 0;
}
#particles-js {
  height: 99%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -2;
}
.background-image > img {
  width: 100%;
  height: 100%;
}
.swiper-group {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.swiper-item {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
}
</style>