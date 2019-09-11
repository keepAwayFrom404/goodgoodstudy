<template>
  <div class="custom-switch">
    <div id="on" @click="switched(true)" :class="{ active: value }">ON</div>
    <div id="off" @click="switched(false)" :class="{ active: !value }">OFF</div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    switched(isOn) {
      this.$emit('input', isOn);
    }
  }
};
</script>

<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgrey;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
}
#on.active {
  background-color: lightgreen;
}
#off.active {
  background-color: lightcoral;
}
</style>