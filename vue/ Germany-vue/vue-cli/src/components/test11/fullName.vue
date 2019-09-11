<template>
  <div>
    <div class="form-group">
      <label for="firstName">
        firstName:
      </label>
      <input
        type="text"
        :value="firstName"
        @input="nameChange(true, $event)"
        id="firstName"
      />
    </div>
    <div class="form-group">
      <label for="lastName">
        lastName:
      </label>
      <input
        type="text"
        :value="lastName"
        @input="nameChange(false, $event)"
        id="lastName"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    firstName() {
      return this.value.split(' ')[0] || '';
    },
    lastName() {
      return this.value.split(' ')[1] || '';
    }
  },
  methods: {
    nameChange(isFirst, event) {
      let name = '';
      if (isFirst) {
        name = event.target.value + ' ' + this.lastName;
      } else {
        name = this.firstName + ' ' + event.target.value;
      }
      this.$emit('input', name);
    }
  }
};
</script>

<style scoped>
</style>