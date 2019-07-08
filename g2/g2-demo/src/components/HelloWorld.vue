<template>
  <div id="hello">
    <div class="c1"></div>
    <div class="c2"></div>
  </div>
</template>

<script>
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 }
];
const data1 = [];
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
import $ from 'jquery'
// import data2 from '@/assets/dataSet.csv';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.dataSet();
  },
  methods: {
    baseChart() {
      const chart = new G2.Chart({
        container: document.getElementById('hello'),
        forceFit: true,
        height: 400,
        // 图表整体的样式
        background: {
          fill: 'pink', // backgroundColor
          fillOpacity: 0.1, // backgroundOpacity
          stroke: 'green', // borderColor
          strokeOpacity: 0.2, // 图表边框透明度
          opacity: 0.8, // wholeOpacity
          lineWidth: 10, // borderWidth
          radius: 50 // borderRadius
        },
        // 绘制区域样式
        plotBackground: {
          stroke: 'red'
        },
        theme: 'dark',
        renderer: 'svg'
      });
      chart.source(data);
      chart
        .interval()
        .position('genre*sold')
        .color('genre');
      chart.render();
    },
    dataSet() {
      const ds = new DataSet({
        state: {
          currentState: 'WY'
        }
      });
      $.get('../assets/dataSet.csv', data => {
        const dvForAll = ds
        .createView('populationByAge', {
          watchingStates: []
        })
        .source(data, {
          type: 'csv'
        });
        dvForAll.transform({
        type: 'fold',
        fields: [
          '小于5岁',
          '5至13岁',
          '14至17岁',
          '18至24岁',
          '25至44岁',
          '45至64岁',
          '65岁及以上'
        ],
        key: 'age',
        value: 'population'
      });
      const dvForOneState = ds.createView('populationOfOneState').source(dvForAll)
      dvForOneState.transform({
        type: 'filter',
        callback(row) {
          return row.state === ds.state.currentState
        }
      }).transform({
        type: 'percent',
        field: 'population',
        dimension: 'age',
        as: 'percent'
      })
      const c1 = new G2.Chart({
        id: 'c1',
        forceFit: true,
        height: 400
      })
      c1.source(dvForAll)
      c1.legend({
        position: 'top'
      })
      c1.axis('population', {
        label: {
          formatter: val => {
            return val / 1000000 + 'M'
          }
        }
      })
      c1.intervalStack().position('state*population').color('age').select(true, {
        mode: 'single',
        style: {
          stroke: 'red',
          strokeWidth: 5
        }
      })
      c1.on('tooltip:change', function (evt) {
        const items = evt.items || []
        if(items[0]) {
          ds.setState('currentState', items[0].title)
        }
      })
      const c2 = new G2.Chart({
        container: 'c2',
        forceFit: true,
        height: 300,
        padding: 0
      })
      c2.source(dvForOneState)
      c2.coord('theta', {
        radius: 0.8
      })
      c2.legend(false)
      c2.intervalStack()
      .position('percent')
      .color('age')
      .label('age*percent', function (age, percent) {
        percent = (percent*100).toFixed(2) + '%'
        return age + '  ' + percent
      })
      c1.render()
      c2.render()
      })
      
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
