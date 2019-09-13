<template>
  <div class="result">
    <h1>That is Correct!</h1>
    <el-button type="primary" @click="nextQuestion">Next Question</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    nextQuestion() {
      this.$emit('newQuestion');
    }
  }
};
</script>

<style scoped>
.result {
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightgreen;
  border-radius: 4px;
}
h1 {
  margin: 24px 0 40px;
}
</style>