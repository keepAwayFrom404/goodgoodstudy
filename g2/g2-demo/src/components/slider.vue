<template>
  <div id="g2-slider"></div>
</template>

<script>
const newData = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 }
];
import G2 from '@antv/g2';
import '@antv/g2-plugin-slider';

export default {
  name: 'g2-slider',
  mounted() {
    this.changeDataApi2();
  },
  methods: {
    changeDataApi() {
      const data = [];
      const chart = new G2.Chart({
        container: 'g2-slider',
        forceFit: true,
        height: 400
      });
      chart.source(data);
      chart
        .interval()
        .position('genre*sold')
        .color('genre');
      chart.render();
      setTimeout(() => {
        chart.changeData(newData);
      }, 1500);
    },
    changeDataApi2() {
      const base = +new Date(2014, 9, 3);
      const oneDay = 24 * 3600 * 1000;
      // const date = [];

      const data = [];
      const values = [Math.random() * 150];
      let now = new Date(base);

      function addData() {
        const item = {};
        now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
        item.date = now;
        item.value = (Math.random() - 0.4) * 10 + values[values.length - 1];
        values.push(item.value);
        now = new Date(+new Date(now) + oneDay);
        data.push(item);
      }

      const chart = new G2.Chart({
        container: 'g2-slider',
        forceFit: true, // 宽度自适应
        height: 400
      });
      chart.source(data);
      chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      });
      chart
        .line()
        .position('date*value')
        .color('#f80')
        .size(3);
      chart
        .area()
        .position('date*value')
        .color('#f80');

      let init = true;
      setInterval(() => {
        if (init) {
          for (let i = 1; i < 100; i++) {
            addData();
          }
          init = false;
        }
        addData();
        chart.changeData(data);
      }, 700);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>