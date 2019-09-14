<template>
  <div>
    新
    <div class="quiz">
      <div class="quiz-title">What is {{ firstNum }} + {{ secondNum }} ?</div>
      <div class="quiz-content">
        <el-button
          @click="checkResult(item)"
          type="primary"
          v-for="(item, index) in resultList"
          :key="index"
          >{{ item }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    firstNum() {
      return Math.floor(Math.random() * 100) + 1;
    },
    secondNum() {
      return Math.floor(Math.random() * 100) + 1;
    },
    resultList() {
      let result = this.firstNum + this.secondNum;
      const arr = [];
      while (arr.length < 3) {
        let num = Math.max(
          Math.floor(Math.random() * (result + 20)) + 1,
          result - 20
        );
        if (!arr.includes(num) && num !== result) {
          arr.push(num);
        }
      }
      let pos = Math.floor(Math.random() * (arr.length + 1));
      arr.splice(pos, 0, result);
      return arr;
    }
  },
  methods: {
    checkResult(correct) {
      if (correct === this.firstNum + this.secondNum) {
        this.$emit('resultPage');
      } else {
        alert('you are wrong, choose again!');
      }
    }
  }
};
</script>

<style scoped>
.quiz {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 200px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
}
.quiz-title {
  width: 100%;
  box-sizing: border-box;
  background-color: #f8f8f8;
  padding: 10px 20px;
  text-align: center;
}
.quiz-content {
  margin: 30px;
}
</style>