<template>
  <div id="app">
    <!-- <h1>Quotes Addad</h1>
    <quote-progress
      :totalNum="totalNum"
      :maxNum="maxNum"
      :progress="progress"
    ></quote-progress>
    <quote-input @addQuote="handleAddQuote"></quote-input>
    <quote-list
      :quoteList="quoteList"
      @changeProgress="deleteItem"
    ></quote-list>
    <div class="footer-tip">Info: Click on a Quote to delete it.</div>
    <custom-switch
      :value="switchType"
      @input="switchType = $event"
    ></custom-switch> -->
    <!-- <form-test></form-test> -->
    <p v-text="'hello world'"></p>
    <p v-html="'<strong>hello world</strong>'"></p>
    <hr />
    <p v-myon:click="addNum">Click</p>
    <p>{{ totalNum }}</p>
  </div>
</template>

<script>
import QuoteProgress from './components/bigTest2/quote-progress';
import QuoteInput from './components/bigTest2/quote-input';
import QuoteList from './components/bigTest2/quote-list';
import CustomSwitch from './components/custom-switch';
import FormTest from './components/test11/form-test';
export default {
  data() {
    return {
      totalNum: 0,
      maxNum: 10,
      quoteList: [],
      switchType: true
    };
  },
  components: {
    QuoteInput,
    QuoteList,
    QuoteProgress,
    CustomSwitch,
    FormTest
  },
  computed: {
    progress() {
      return (this.totalNum / this.maxNum) * 100 + '%';
    }
  },
  methods: {
    addNum() {
      this.totalNum++;
    },
    handleAddQuote(e) {
      if (this.quoteList.length >= this.maxNum) {
        alert(`最多可输入${this.maxNum}条名言`);
        return false;
      }
      this.quoteList.push(e);
      this.totalNum++;
    },
    deleteItem() {
      this.totalNum--;
    }
  }
};
</script>
<style>
#app {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-tip {
  width: 1000px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  border-radius: 2px;
  background: #dbeef4;
}
</style>
