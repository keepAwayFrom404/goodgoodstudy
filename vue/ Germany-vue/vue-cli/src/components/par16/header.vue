<template>
  <div>
    <ul>
      <router-link to="/" active-class="active" exact>Home</router-link>
      <br />
      <router-link to="/user/1" active-class="active">user1</router-link>
      <br />
      <router-link to="/user/2" active-class="active">user2</router-link>
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