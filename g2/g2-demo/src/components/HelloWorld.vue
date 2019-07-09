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
const data2 = [
  { value: 10, time: '2015-03-01T16:00:00.000Z' },
  { value: 15, time: '2015-03-01T16:10:00.000Z' },
  { value: 26, time: '2015-03-01T16:20:00.000Z' },
  { value: 9, time: '2015-03-01T16:30:00.000Z' },
  { value: 12, time: '2015-03-01T16:40:00.000Z' },
  { value: 23, time: '2015-03-01T16:50:00.000Z' },
  { value: 18, time: '2015-03-01T17:00:00.000Z' },
  { value: 21, time: '2015-03-01T17:10:00.000Z' },
  { value: 22, time: '2015-03-01T17:20:00.000Z' }
];
const data3 = [
  { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
  { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
  { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
  { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
  { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
  { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
  { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
  { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
  { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
  { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
  { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
  { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
  { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
  { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
  { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
];
const data4 = [
  { name: 'John', vote: 35654 },
  { name: 'Damon', vote: 65456 },
  { name: 'Patrick', vote: 45724 },
  { name: 'Mark', vote: 13654 }
]
const imageMap = {
  'John': 'https://zos.alipayobjects.com/rmsportal/mYhpaYHyHhjYcQf.png',
  'Damon': 'https://zos.alipayobjects.com/rmsportal/JBxkqlzhrlkGlLW.png',
  'Patrick': 'https://zos.alipayobjects.com/rmsportal/zlkGnEMgOawcyeX.png',
  'Mark': 'https://zos.alipayobjects.com/rmsportal/KzCdIdkwsXdtWkg.png'
}
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.axisLabel();
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
      const defs = {
        genre: {
          type: 'cat'
        },
        sold: {
          type: 'linear',
          alias: 'leeTest',
          min: 0,
          max: 200
        }
      };
      chart.source(data, defs);
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
        const dvForOneState = ds
          .createView('populationOfOneState')
          .source(dvForAll);
        dvForOneState
          .transform({
            type: 'filter',
            callback(row) {
              return row.state === ds.state.currentState;
            }
          })
          .transform({
            type: 'percent',
            field: 'population',
            dimension: 'age',
            as: 'percent'
          });
        const c1 = new G2.Chart({
          id: 'c1',
          forceFit: true,
          height: 400
        });
        c1.source(dvForAll);
        c1.legend({
          position: 'top'
        });
        c1.axis('population', {
          label: {
            formatter: val => {
              return val / 1000000 + 'M';
            }
          }
        });
        c1.intervalStack()
          .position('state*population')
          .color('age')
          .select(true, {
            mode: 'single',
            style: {
              stroke: 'red',
              strokeWidth: 5
            }
          });
        c1.on('tooltip:change', function(evt) {
          const items = evt.items || [];
          if (items[0]) {
            ds.setState('currentState', items[0].title);
          }
        });
        const c2 = new G2.Chart({
          container: 'c2',
          forceFit: true,
          height: 300,
          padding: 0
        });
        c2.source(dvForOneState);
        c2.coord('theta', {
          radius: 0.8
        });
        c2.legend(false);
        c2.intervalStack()
          .position('percent')
          .color('age')
          .label('age*percent', function(age, percent) {
            percent = (percent * 100).toFixed(2) + '%';
            return age + '  ' + percent;
          });
        c1.render();
        c2.render();
      });
    },
    customScale() {
      const chart = new G2.Chart({
        container: 'hello',
        forceFit: true,
        height: 300
      });
      chart.source(data2, {
        time: {
          type: 'time',
          nice: false,
          mask: 'HH:mm',
          alias: '时间'
        },
        value: {
          nice: false,
          min: 0,
          max: 30,
          formatter: val => val + 'k'
        }
      });
      chart
        .line()
        .position('time*value')
        .size(2)
        .shape('dot');
      chart.axis('time', {
        title: {
          textStyle: {
            fontSize: 12,
            textAlign: 'center',
            fill: 'pink'
          }
        },
        alias: '时间',
        line: {
          lineWidth: 5,
          stroke: 'green'
        },
        label: {
          offset: 20,
          textStyle: {
            textAlign: 'center',
            fill: 'pink',
            fontSize: 12,
            fontWeight: 'bold',
            rotate: 30,
            textBaseLine: 'middle'
          },
          formatter: val => val + 'li'
        }
      });
      chart.render();
    },
    axis() {
      const chart = new G2.Chart({
        container: 'hello',
        forceFit: true,
        height: 350,
        padding: [20, 0, 80, 80],
        plotBackground: {
          stroke: '#ccc', // 边颜色
          lineWidth: 1 // 边框粗细
        } // 绘图区域背景设置
      });
      chart.source(data3, {
        x: {
          alias: 'Daily fat intake', // 定义别名
          tickInterval: 5, // 自定义刻度间距
          nice: false, // 不对最大最小值优化
          max: 96, // 自定义最大值
          min: 62 // 自定义最小是
        },
        y: {
          alias: 'Daily sugar intake',
          tickInterval: 50,
          nice: false,
          max: 165,
          min: 0
        },
        z: {
          alias: 'Obesity(adults) %'
        }
      });
      chart.axis('x', {
        label: {
          formatter: val => val + ' gr'
        },
        grid: {
          lineStyle: {
            stroke: 'blue',
            lineWidth: 1,
            lineDash: [2, 2]
          }
        }
      });
      chart.axis('y', {
        title: {
          offset: 70
        },
        label: {
          formatter: val => {
            if (val > 0) {
              return val + ' gr';
            }
          }
        }
      });
      chart.legend(false);
      chart.tooltip({
        title: 'country'
      });
      chart
        .point()
        .position('x*y')
        .size('z', [10, 40])
        .label('name*country', {
          offset: 0,
          textStyle: {
            fill: '#000',
            fontWeight: 'bold', // 文本粗细
            shadowBlur: 5, // 文本阴影模糊
            shadowColor: '#fff' // 阴影颜色
          }
        })
        .color('#3182bd')
        .opacity(0.5)
        .shape('circle')
        .tooltip('x*y*z');
      chart.guide().line({
        start: [65, 'min'],
        end: [65, 'max'],
        text: {
          content: 'Safe fat intake 65g/day',
          position: 'end',
          autoRotate: false,
          style: {
            textAlign: 'start'
          }
        }
      });
      chart.guide().line({
        start: ['min', 50],
        end: ['max', 50],
        text: {
          content: 'Safe sugar intake 50g/day',
          position: 'end',
          style: {
            textAlign: 'end'
          }
        }
      });
      chart.render();
    },
    axisLabel() {
      const chart = new G2.Chart({
  container : 'hello',
  width : 600,
  height : 250
});
chart.source(data4, {
  vote: {
    min: 0
  }
});
chart.legend(false);
chart.axis('name', {
  label: {
    htmlTemplate: value => {
      return '<img src="' +imageMap[value] + '" style="width:30px;max-width:none;"/>';
    }
  },
  tickLine: null
});
chart.interval()
  .position('name*vote')
  .color('name', [ '#7f8da9', '#fec514', '#db4c3c', '#daf0fd' ])
  .size(20)
  .label('name');
chart.render();
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
