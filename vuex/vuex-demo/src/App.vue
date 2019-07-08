<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{count}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState({count: 'count'})
  },
  methods: {
    ...mapMutations([
      'add'
    ]),
    ...mapActions([
      'increment'
    ])
  },
  created() {
    // this.add({amount: 10})
    // this.increment().then(res => {
    //   console.log('res')
    // })
    console.log(this.$store.state.a.count)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
