<template>
  <div>
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid blue;
  background-color: lightblue;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>