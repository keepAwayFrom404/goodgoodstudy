<template>
  <div>
    <ul>
      <router-link to="/" active-class="active" exact>Home</router-link>
      <br />
      <router-link to="/user" active-class="active">user</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.active {
  color: red;
}
</style>