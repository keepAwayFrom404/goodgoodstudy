<template>
  <div class="form-test">
    <form action="post" v-if="!submit">
      <full-name v-model="form.fullName"></full-name>
      <div class="form-group">
        <label for="email">
          email:
        </label>
        <input type="email" v-model="form.email" id="email" />
      </div>
      <div class="form-group">
        <label for="password">
          password:
        </label>
        <input type="password" v-model="form.password" id="password" />
      </div>
      <div class="form-group">
        <label for="yes">
          <input type="radio" id="yes" v-model="form.check" value="yes" />Yes
        </label>
        <label for="no">
          <input type="radio" id="no" v-model="form.check" value="no" />No
        </label>
        <br />
        <button type="submit" @click.prevent="submit = true">Submit</button>
      </div>
    </form>
    <div class="form show" v-else>
      <p>fullName: {{ form.fullName }}</p>
      <p>email: {{ form.email }}</p>
      <p>password: {{ form.password }}</p>
      <p>check: {{ form.check }}</p>
    </div>
  </div>
</template>

<script>
import FullName from './fullName';
export default {
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        password: '',
        check: 'yes'
      },
      submit: false
    };
  },
  components: { FullName }
};
</script>

<style scoped>
</style>