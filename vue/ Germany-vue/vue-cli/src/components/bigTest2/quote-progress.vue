<template>
  <div class="quote-progress">
    <div class="quote-num">{{ totalNum }}/{{ maxNum }}</div>
    <div class="quote-progress-bar" :style="{ width: progress }"></div>
  </div>
</template>

<script>
export default {
  props: ['totalNum', 'maxNum', 'progress']
};
</script>

<style scoped>
.quote-progress {
  position: relative;
  width: 1000px;
  height: 20px;
  background: #f8f8f8;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
}
.quote-num {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.quote-progress-bar {
  width: 0;
  height: 100%;
  border-radius: 4px;
  background-color: #4680b1;
  transition: width 0.5s;
}
</style>