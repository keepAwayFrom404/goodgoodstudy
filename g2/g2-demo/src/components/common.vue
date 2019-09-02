<template>
  <div id="g2-common"></div>
</template>

<script>
import G2 from '@antv/g2';
import '@antv/g2-plugin-slider';

const data = [
  { month: '一月', temperature: 5, city: '北京' },
  { month: '二月', temperature: 10, city: '北京' },
  { month: '一月', temperature: 8, city: '南京' },
  { month: '二月', temperature: 14, city: '南京' }
];
export default {
  name: 'g2-common',
  mounted() {
    this.common();
  },
  methods: {
    common() {
      const chart = new G2.Chart({
        id: 'g2-common',
        width: 400,
        height: 200
      });
      chart.source(data);
      chart
        .point()
        .position('month*temperature')
        .color('city', ['#1890FF', '#2FC25B']);
      chart.render();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>