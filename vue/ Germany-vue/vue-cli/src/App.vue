<template>
  <div id="app">
    <el-button type="primary" class="btn " @click="currentCom = 'app-blue'">
      load blue template
    </el-button>
    <el-button type="success" class="btn " @click="currentCom = 'app-green'">
      load green template
    </el-button>
    <el-button type="danger" class="btn " @click="currentCom = 'app-red'">
      load red template
    </el-button>
    <hr />
    <component :is="currentCom">
      <template v-slot:header
        ><h1>{{ currentCom }} header</h1>
      </template>
      <template v-slot:main
        ><p>{{ currentCom }} main</p>
      </template>
      <template v-slot:footer
        >{{ currentCom }} footer
      </template>
    </component>
  </div>
</template>

<script>
import Blue from './components/test8/blue';
import Red from './components/test8/red';
import Green from './components/test8/green';
export default {
  data() {
    return {
      currentCom: 'app-blue'
    };
  },
  components: {
    'app-blue': Blue,
    'app-red': Red,
    'app-green': Green
  }
};
</script>
<style>
</style>
