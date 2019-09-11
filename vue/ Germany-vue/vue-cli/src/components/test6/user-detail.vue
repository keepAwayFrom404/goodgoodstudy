<template>
  <div class="user-detail">
    <h3>You may view the user details here</h3>
    <p>many details</p>
    <p>my name is: {{ name }}</p>
    <button @click="changeName">change name</button>
  </div>
</template>

<script>
export default {
  name: 'user-detail',
  props: ['name'],
  methods: {
    changeName() {
      this.$emit('nameWasChange');
    }
  }
};
</script>

<style >
.user-detail {
  width: 400px;
  height: 150px;
  background: red;
  margin-right: 20px;
}
</style>