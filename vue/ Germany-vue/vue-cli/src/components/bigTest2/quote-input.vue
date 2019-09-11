<template>
  <div class="quote-input">
    <h3>Quote</h3>
    <textarea
      style="fontSize:18px"
      cols="80"
      rows="5"
      v-model="quoteText"
      @keyup.enter="addQuote"
    ></textarea>
    <el-button
      type="primary"
      style="display:block;margin:0 auto;"
      :disabled="!quoteText"
      @click="addQuote"
      >Add Quote</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      quoteText: ''
    };
  },
  methods: {
    addQuote(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
      this.$emit('addQuote', this.quoteText);
      this.quoteText = '';
    }
  }
};
</script>

<style scoped>
</style>