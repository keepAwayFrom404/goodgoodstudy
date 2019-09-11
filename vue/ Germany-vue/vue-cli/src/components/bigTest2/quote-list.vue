<template>
  <div class="quote-list">
    <div
      class="quote-item"
      v-for="(quote, index) in quoteList"
      :key="index"
      @click="deleteQuote(index)"
    >
      {{ quote }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quoteList: Array
  },
  methods: {
    deleteQuote(index) {
      this.$emit('changeProgress');
      this.quoteList.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.quote-list {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  margin-top: 50px;
}
.quote-item {
  position: relative;
  min-width: 200px;
  min-height: 60px;
  padding: 8px 14px;
  margin-bottom: 20px;
  margin-right: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  font-family: Brush Script MT;
  font-size: 18px;
  cursor: pointer;
}
.quote-item:hover {
  background-color: #ccc;
}
.quote-item:hover::before {
  content: '删除';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>