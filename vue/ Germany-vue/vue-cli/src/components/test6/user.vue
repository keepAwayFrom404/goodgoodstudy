<template>
  <div class="user">
    <h1>The User Components</h1>
    <p>I am an question User!</p>
    <p>fuzujian: {{ name }}</p>
    <button @click="changeName">change my name</button>
    <hr />
    <div class="user-content">
      <app-user-detail
        :name="name"
        @nameWasChange="name = 'jiahua'"
      ></app-user-detail>
      <app-user-edit></app-user-edit>
    </div>
  </div>
</template>

<script>
import UserDetail from './user-detail';
import UserEdit from './user-edit';
export default {
  name: 'user',
  data() {
    return {
      name: 'lee'
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.name = 'anna';
    }
  }
};
</script>

<style >
.user-content {
  display: flex;
}
</style>