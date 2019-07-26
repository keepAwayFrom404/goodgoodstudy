<template>
  <div id="particles-js"></div>
</template>

<script>
import particlesOptions from '../data.json';
export default {
  name: 'ParticlesJS',
  mounted() {
    require('particles.js');
    particlesJS('particles-js', particlesOptions);
  },
  methods: {
    initParticlesJS() {
      particlesJS('particles-js', particlesOptions);
    }
  }
};
</script>

<style>
</style>
