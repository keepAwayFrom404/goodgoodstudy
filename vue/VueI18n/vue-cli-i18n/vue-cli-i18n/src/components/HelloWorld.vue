<i18n>
  {
    "en": {
    "hello": "hello world!"
  },
  "ja": {
    "hello": "こんにちは、世界！"
  }
  }
</i18n>
<template>
  <div id="helloworld">
    <label for="locale">locale</label>
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`lang${i}`" :value="lang">{{lang}}</option>
    </select>
    <p>message: {{$t('hello')}}</p>
  </div>
</template>

<script>
export default {
  name: 'helloworld',
  data() {
    return {
      langs: ['en', 'ja']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.helloworld >>> p {
  color: #42b883;
}
</style>
