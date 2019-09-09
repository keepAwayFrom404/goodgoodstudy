<template>
  <div class="user">
    <h1>The User Components</h1>
    <p>I am an question User!</p>
    <hr />
    <div class="user-content">
      <app-user-detail></app-user-detail>
      <app-user-edit></app-user-edit>
    </div>
  </div>
</template>

<script>
import UserDetail from './user-detail';
import UserEdit from './user-edit';
export default {
  name: 'user',
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style lang="scss" scoped>
</style>