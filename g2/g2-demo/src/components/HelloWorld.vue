<template>
  <div id="hello"></div>
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
];
const data5 = [
  { year: 'Year 1800', region: 'Africa', population: 107 },
  { year: 'Year 1900', region: 'Africa', population: 133 },
  { year: 'Year 2012', region: 'Africa', population: 1052 },
  { year: 'Year 1800', region: 'America', population: 31 },
  { year: 'Year 1900', region: 'America', population: 156 },
  { year: 'Year 2012', region: 'America', population: 954 },
  { year: 'Year 1800', region: 'Asia', population: 635 },
  { year: 'Year 1900', region: 'Asia', population: 947 },
  { year: 'Year 2012', region: 'Asia', population: 4250 },
  { year: 'Year 1800', region: 'Europe', population: 203 },
  { year: 'Year 1900', region: 'Europe', population: 408 },
  { year: 'Year 2012', region: 'Europe', population: 740 },
  { year: 'Year 1800', region: 'Oceania', population: 2 },
  { year: 'Year 1900', region: 'Oceania', population: 6 },
  { year: 'Year 2012', region: 'Oceania', population: 38 }
];
const data6 = [
  { 部门: '部门0', 小组: '组名0', 完成人数: 37, 未完成人数: 9 },
  { 部门: '部门0', 小组: '组名2', 完成人数: 29, 未完成人数: 10 },
  { 部门: '部门0', 小组: '组名8', 完成人数: 59, 未完成人数: 14 },
  { 部门: '部门0', 小组: '组名9', 完成人数: 60, 未完成人数: 8 },
  { 部门: '部门0', 小组: '组名10', 完成人数: 83, 未完成人数: 14 },
  { 部门: '部门0', 小组: '组名12', 完成人数: 67, 未完成人数: 21 },
  { 部门: '部门0', 小组: '组名14', 完成人数: 46, 未完成人数: 18 },
  { 部门: '部门0', 小组: '组名17', 完成人数: 19, 未完成人数: 27 },
  { 部门: '部门0', 小组: '组名19', 完成人数: 74, 未完成人数: 17 },
  { 部门: '部门1', 小组: '组名15', 完成人数: 34, 未完成人数: 19 },
  { 部门: '部门1', 小组: '组名20', 完成人数: 71, 未完成人数: 25 },
  { 部门: '部门1', 小组: '组名26', 完成人数: 28, 未完成人数: 23 },
  { 部门: '部门1', 小组: '组名29', 完成人数: 90, 未完成人数: 24 },
  { 部门: '部门2', 小组: '组名7', 完成人数: 50, 未完成人数: 5 },
  { 部门: '部门2', 小组: '组名11', 完成人数: 86, 未完成人数: 26 },
  { 部门: '部门2', 小组: '组名13', 完成人数: 63, 未完成人数: 16 },
  { 部门: '部门2', 小组: '组名27', 完成人数: 76, 未完成人数: 2 },
  { 部门: '部门2', 小组: '组名28', 完成人数: 13, 未完成人数: 28 },
  { 部门: '部门3', 小组: '组名1', 完成人数: 33, 未完成人数: 16 },
  { 部门: '部门3', 小组: '组名3', 完成人数: 14, 未完成人数: 1 },
  { 部门: '部门3', 小组: '组名4', 完成人数: 43, 未完成人数: 25 },
  { 部门: '部门3', 小组: '组名16', 完成人数: 45, 未完成人数: 13 },
  { 部门: '部门3', 小组: '组名18', 完成人数: 50, 未完成人数: 21 },
  { 部门: '部门3', 小组: '组名22', 完成人数: 43, 未完成人数: 7 },
  { 部门: '部门3', 小组: '组名23', 完成人数: 38, 未完成人数: 6 },
  { 部门: '部门3', 小组: '组名24', 完成人数: 33, 未完成人数: 24 },
  { 部门: '部门3', 小组: '组名25', 完成人数: 13, 未完成人数: 27 },
  { 部门: '部门4', 小组: '组名5', 完成人数: 98, 未完成人数: 4 },
  { 部门: '部门4', 小组: '组名6', 完成人数: 88, 未完成人数: 12 },
  { 部门: '部门4', 小组: '组名21', 完成人数: 52, 未完成人数: 9 }
];
const data7 = [
  { country: 'Lithuania', litres: 501.9 },
  { country: 'Czech Republic', litres: 301.9 },
  { country: 'Ireland', litres: 201.1 },
  { country: 'Germany', litres: 165.8 },
  { country: 'Australia', litres: 139.9 },
  { country: 'Austria', litres: 128.3 },
  { country: 'UK', litres: 99 },
  { country: 'Belgium', litres: 60 },
  { country: 'The Netherlands', litres: 50 }
];
const data8 = [
  { name: 'Microsoft Internet Explorer', value: 30 },
  { name: 'Chrome', value: 20 },
  { name: 'Firefox', value: 10 },
  { name: 'Safari', value: 10 },
  { name: 'Opera', value: 15 },
  { name: 'Others', value: 15 }
];
const data9 = [
  // 数据
  { time: 1428163200000, start: 469, end: 480 },
  { time: 1428163203600, start: 480, end: 430 },
  { time: 1428163207200, start: 430, end: 410 },
  { time: 1428163210800, start: 410, end: 420 },
  { time: 1428163214400, start: 420, end: 440 },
  { time: 1428163218000, start: 440, end: 460 },
  { time: 1428163221600, start: 460, end: 410 },
  { time: 1428163225200, start: 410, end: 440 },
  { time: 1428163228800, start: 440, end: 490 }
];
const data10 = [
  { time: '2016-10-25 00:00:00', runCount: 4, type: 2, runTime: 2 },
  { time: '2016-10-25 00:30:00', runCount: 2, type: 6, runTime: 3 },
  { time: '2016-10-25 01:00:00', runCount: 13, type: 2, runTime: 5 },
  { time: '2016-10-25 01:30:00', runCount: 9, type: 9, runTime: 1 },
  { time: '2016-10-25 02:00:00', runCount: 5, type: 2, runTime: 3 },
  { time: '2016-10-25 02:30:00', runCount: 8, type: 2, runTime: 1 },
  { time: '2016-10-25 03:00:00', runCount: 13, type: 1, runTime: 2 },
  { time: '2016-10-25 03:30:00', runCount: 4, type: 2, runTime: 2 },
  { time: '2016-10-25 04:00:00', runCount: 2, type: 6, runTime: 3 },
  { time: '2016-10-25 04:30:00', runCount: 13, type: 2, runTime: 5 },
  { time: '2016-10-25 05:00:00', runCount: 9, type: 9, runTime: 1 },
  { time: '2016-10-25 05:30:00', runCount: 5, type: 2, runTime: 3 }
]
const data11 = [
  { month: 0, tem: 7, city: 'tokyo' },
  { month: 1, tem: 6.9, city: 'tokyo' },
  { month: 2, tem: 9.5, city: 'tokyo' },
  { month: 3, tem: 14.5, city: 'tokyo' },
  { month: 4, tem: 18.2, city: 'tokyo' },
  { month: 5, tem: 21.5, city: 'tokyo' },
  { month: 6, tem: 25.2, city: 'tokyo' },
  { month: 7, tem: 26.5, city: 'tokyo' },
  { month: 8, tem: 23.3, city: 'tokyo' },
  { month: 9, tem: 18.3, city: 'tokyo' },
  { month: 10, tem: 13.9, city: 'tokyo' },
  { month: 11, tem: 9.6, city: 'tokyo' },
  { month: 0, tem: -0.2, city: 'newYork' },
  { month: 1, tem: 0.8, city: 'newYork' },
  { month: 2, tem: 5.7, city: 'newYork' },
  { month: 3, tem: 11.3, city: 'newYork' },
  { month: 4, tem: 17, city: 'newYork' },
  { month: 5, tem: 22, city: 'newYork' },
  { month: 6, tem: 24.8, city: 'newYork' },
  { month: 7, tem: 24.1, city: 'newYork' },
  { month: 8, tem: 20.1, city: 'newYork' },
  { month: 9, tem: 14.1, city: 'newYork' },
  { month: 10, tem: 8.6, city: 'newYork' },
  { month: 11, tem: 2.5, city: 'newYork' },
  { month: 0, tem: -0.9, city: 'berlin' },
  { month: 1, tem: 0.6, city: 'berlin' },
  { month: 2, tem: 3.5, city: 'berlin' },
  { month: 3, tem: 8.4, city: 'berlin' },
  { month: 4, tem: 13.5, city: 'berlin' },
  { month: 5, tem: 17, city: 'berlin' },
  { month: 6, tem: 18.6, city: 'berlin' },
  { month: 7, tem: 17.9, city: 'berlin' },
  { month: 8, tem: 14.3, city: 'berlin' },
  { month: 9, tem: 9, city: 'berlin' },
  { month: 10, tem: 3.9, city: 'berlin' },
  { month: 11, tem: 1, city: 'berlin' }
]
const data12 = [
    { year: '1991', value: 15468 },
    { year: '1992', value: 16100 },
    { year: '1993', value: 15900 },
    { year: '1994', value: 17409 },
    { year: '1995', value: 17000 },
    { year: '1996', value: 31056 },
    { year: '1997', value: 31982 },
    { year: '1998', value: 32040 },
    { year: '1999', value: 33233 }
  ]
const data13 = [{ year: '1991',value: 3}, 
    { year: '1992',value: 4}, 
    { year: '1993',value: 3.5}, 
    { year: '1994',value: 5}, 
    { year: '1995',value: 4.9}, 
    { year: '1996',value: 6}, 
    { year: '1997',value: 7}, 
    { year: '1998',value: 9}, 
    { year: '1999',value: 13}];
const data14 = [
  { gender: '男', count: 40, class: '一班', grade: '一年级' },
  { gender: '女', count: 30, class: '一班', grade: '一年级' },
  { gender: '男', count: 35, class: '二班', grade: '一年级' },
  { gender: '女', count: 45, class: '二班', grade: '一年级' },
  { gender: '男', count: 20, class: '三班', grade: '一年级' },
  { gender: '女', count: 35, class: '三班', grade: '一年级' },
  { gender: '男', count: 30, class: '一班', grade: '二年级' },
  { gender: '女', count: 40, class: '一班', grade: '二年级' },
  { gender: '男', count: 25, class: '二班', grade: '二年级' },
  { gender: '女', count: 32, class: '二班', grade: '二年级' },
  { gender: '男', count: 28, class: '三班', grade: '二年级' },
  { gender: '女', count: 36, class: '三班', grade: '二年级' }
];
const imageMap = {
  John: 'https://zos.alipayobjects.com/rmsportal/mYhpaYHyHhjYcQf.png',
  Damon: 'https://zos.alipayobjects.com/rmsportal/JBxkqlzhrlkGlLW.png',
  Patrick: 'https://zos.alipayobjects.com/rmsportal/zlkGnEMgOawcyeX.png',
  Mark: 'https://zos.alipayobjects.com/rmsportal/KzCdIdkwsXdtWkg.png'
};
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.baseChart();
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
        padding: [50,50,80,50],
        // 绘制区域样式
        // plotBackground: {
        //   stroke: 'red'
        // },
        renderer: 'svg'
      });
      const defs = {
        genre: {
          type: 'cat'
        },
        sold: {
          type: 'linear',
          alias: 'leeTest',
        }
      };
      chart.source(data, defs);
      chart
        .interval()
        .position('genre*sold')
        .color('genre')
        .label('sold', {
          offset: 20,
          textStyle: {
            textAlign: 'center',
            fill: ''
          }
        })
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
        container: 'hello',
        forceFit: true,
        height: 250
      });
      chart.source(data4, {
        vote: {
          min: 0
        }
      });
      chart.legend(false);
      chart.axis('name', {
        label: {
          offset: 20,
          htmlTemplate: value => {
            return (
              '<img src="' +
              imageMap[value] +
              '" style="width:30px;max-width:none;"/>'
            );
          }
        },
        tickLine: {
          lineWidth: 3,
          length: -10,
          stroke: 'red',
          alignWithLabel: true
        },
        subTickCount: 3,
        subTickLine: {
          length: 3,
          stroke: '#545454',
          lineWidth: 1,
          length: -5
        },
        grid: {
          type: 'line',
          lineStyle: {
            stroke: '#d9d9d9',
            lineWidth: 1
          },
          align: 'center'
        }
      });
      chart
        .interval()
        .position('name*vote')
        .color('name', ['#7f8da9', '#fec514', '#db4c3c', '#daf0fd'])
        .size(20)
        .label('name');
      chart.render();
    },
    legend() {
      const chart = new G2.Chart({
        container: 'hello',
        width: 600,
        height: 350,
        padding: [20, 90, 95, 180]
      });
      chart.source(data5);
      // chart.coord().transpose()
      chart.legend({
        title: null,
        marker: 'square',
        allowAllCanceled: true,
        textStyle: {
          fill: 'red'
        },

        itemFormatter: val => {
          return val + 'lee';
        }
      });
      chart
        .intervalDodge()
        .position('region*population')
        .color('year')
        .label('population');
      chart.render();
    },
    legend2() {
      const DataView = DataSet.DataView;
      const dv = new DataView();
      dv.source(data6)
        .transform({
          type: 'sort',
          callback: (obj1, obj2) => {
            return obj1['部门'] > obj2['部门'] ? 1 : -1;
          }
        })
        .transform({
          type: 'map',
          callback: obj => {
            obj['完成人数'] *= -1;
            return obj;
          }
        })
        .transform({
          type: 'fold',
          fields: ['完成人数', '未完成人数'],
          key: '完成状态',
          value: '人数'
        });
      const chart = new G2.Chart({
        container: 'hello',
        forceFit: true,
        height: 400,
        padding: [5, 100, 80]
      });
      chart.source(dv);
      chart.filter('部门', val => {
        return val === '部门0';
      });
      chart.coord().transpose();
      chart.legend('部门', {
        selectedMode: 'single',
        position: 'right-bottom',
        hoverable: false
      });
      chart.axis('人数', {
        label: {
          formatter: value => {
            value = parseInt(value);
            return Math.abs(value);
          }
        }
      });
      chart
        .interval()
        .position('小组*人数')
        .color('部门')
        .shape('完成状态', ['rect', 'hollowRect'])
        .style({ lineWidth: 1 });
      chart.render();
      chart.on('tooltip:change', function(ev) {
        // console.log(ev.items)
      });
    },
    legend3() {
      const ds = new DataSet();
      const dv = ds
        .createView()
        .source(data7)
        .transform({
          type: 'percent',
          field: 'litres',
          dimension: 'country',
          as: 'percent'
        });
      const chart = new G2.Chart({
        container: 'hello',
        forceFit: true,
        height: 500,
        padding: [20, 220, 20, 160]
      });
      chart.source(dv, {
        percent: {
          formatter: val => {
            val = (val * 100).toFixed(2) + '%';
            return val;
          }
        },
        nice: false
      });
      chart.coord('theta', {
        innerRadius: 0.3,
        radius: 1
      });
      chart.tooltip({
        showTitle: false, // 不展示标题
        itemTpl:
          '<li data-index={index}><span style="color:{color}">{name}:</span>{value}</li>'
      });
      chart.legend({
        useHtml: true,
        position: 'right',
        containerTpl:
          '<div class="g2-legend">' +
          '<table class="g2-legend-list" style="list-style-type:none;margin:0;padding:0;"></table>' +
          '</div>',
        itemTpl: (value, color, checked, index) => {
          const obj = dv.rows[index];
          checked = checked ? 'checked' : 'unChecked';
          return (
            '<tr class="g2-legend-list-item item-' +
            index +
            ' ' +
            checked +
            '" data-value="' +
            value +
            '" data-color=' +
            color +
            ' style="cursor: pointer;font-size: 14px;">' +
            '<td width=150 style="border: none;padding:0;"><i class="g2-legend-marker" style="width:10px;height:10px;display:inline-block;margin-right:10px;background-color:' +
            color +
            ';"></i>' +
            '<span class="g2-legend-text">' +
            value +
            '</span></td>' +
            '<td style="text-align: right;border: none;padding:0;">' +
            obj.litres +
            '</td>' +
            '</tr>'
          );
        },
        offsetX: 15,
        'g2-legend': {
          marginLeft: '100px',
          marginTop: '-107px'
        },
        'g2-legend-list': {
          border: 'none'
        }
      });
      chart
        .intervalStack()
        .position('percent')
        .color('country', [
          '#67b7dc',
          '#84b761',
          '#fdd400',
          '#cc4748',
          '#cd82ad',
          '#2f4074',
          '#448e4d',
          '#b7b83f',
          '#b9783f'
        ])
        .label('percent', {
          formatter: (val, item) => {
            return item.point.country + ': ' + val;
          }
        })
        .style({
          lineWidth: 2,
          stroke: '#fff'
        });
      chart.render();
    },
    tooltip() {
      const chart = new G2.Chart({
        container: 'hello',
        forceFit: true,
        height: 400
      });
      chart.source(data8);
      chart.coord('theta', {
        innerRadius: 0.6,
        radius: 0.8
      });
      chart.tooltip({
        showTitle: false,
        itemTpl: `<li>{name}:{value}</li>`
      });
      chart
        .intervalStack()
        .position('value')
        .color('name')
        .tooltip('name*value', (name, value) => {
          return {
            name,
            value: value + '%'
          };
        });
      chart.render();
    },
    tooltip2() {
      const DataView = DataSet.DataView;
      const dv = new DataView();
      dv.source(data9).transform({
        type: 'map',
        callback: obj => {
          obj.range = [obj.start, obj.end];
          obj.trend = obj.start <= obj.end ? '上涨' : '下跌';
          return obj;
        }
      });
      const chart = new G2.Chart({
        container: 'hello',
        width: 800,
        height: 400,
        padding: [20, 50, 95, 80]
      });
      chart.source(dv, {
        time: {
          // 设置日期类型
          type: 'time',
          mask: 'YYYY-MM-DD HH:MM:ss'
        },
        trend: {
          alias: '趋势'
        }
      });
      chart
        .interval()
        .position('time*range')
        .color('trend', ['#1bbd19', '#fa513a'])
        .size(20);
      chart.render();
      chart.on('tooltip:change', function (ev) {
        const items = ev.items
        const origin = items[0]
        const range = origin.point._origin.range
        items.splice(0)
        items.push(Object.assign({
          name: '开始值',
          marker: true,
          value: range[0]
        }, origin))
        items.push(Object.assign({
          name: '结束值',
          marker: true,
          value: range[1]
        }, origin));
      })
    },
    tooltip3() {
      const chart = new G2.Chart({
          container: 'hello',
          forceFit: true,
          height: 300,
          padding: [ 50, 80 ]
        });
        chart.source(data10);
        chart.scale('time',{
          type: 'timeCat',
          mask: 'HH:MM',
          tickCount:12,
          nice:true,
        });
        chart.scale('runCount', {
          alias: '运行数量',
          min: 0
        });
        chart.scale('runTime', {
          alias: '运行时间(ms)'
        });
        chart.tooltip({
          triggerOn: 'click'
        })
        chart.line()
          .position('time*runTime')
          .color('#5ed470')
          .size(2)
          .shape('smooth'); // 绘制曲线图
        chart.point()
          .position('time*runTime')
          .color('#5ed470')
          .size(5)
          .shape('circle')
          .style({
            cursor: 'pointer'
          }); // 绘制点图
        chart.render();
        chart.showTooltip(chart.get('plotRange').br)
    },
    guide() {
      const chart = new G2.Chart({
        container: 'hello',
        forceFit: true,
        height: 450
      })
      chart.source(data11)
      chart.line().position('month*tem').color('city',['red','yellow','pink'])
      chart.guide().region({
        start: [5, 'min'],
        end: [7, 'max']
      })
      chart.render()
    },
    guide2() {
      const chart = new G2.Chart({
        container: 'hello',
        forceFit: true,
        height: 450
      })
      chart.source(data12)
      chart.scale({
        value: {
          min: 10000
        },
        year: {
          range: [0,1]
        }
      })
      chart.axis('value', {
        label: {
          formatter: val => (val/1000).toFixed(1) + 'k'
        }
      })
      chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      chart.line().position('year*value').size(2)
      chart.guide().regionFilter({
        start: ['1991', 'min'],
        end: ['1995', 'max'],
        color: 'pink'
      })
      chart.guide().regionFilter({
        start: ['1995', 'min'],
        end: ['1999', 'max'],
        color: 'yellow'
      })
      chart.render()
    },
    guide3() {
      const chart = new G2.Chart({
        container: 'hello',
        forceFit: true,
        height: 450
      })
      chart.source(data13)
      chart.scale({
        value: {
          min: 0
        },
        year: {
          range: [0,1]
        }
      })
      chart.line().position('year*value').size(2)
      chart.guide().dataMarker({
        position: ['1997', 7],
        content: '特殊标记点'
      })
      chart.render()
    },
    guide4() {
      const chart = new G2.Chart({
        container: 'hello',
        forceFit: true,
        height: 450
      })
      chart.source(data13)
      chart.scale({
        value: {
          min: 0
        },
        year: {
          range: [0,1]
        }
      })
      chart.line().position('year*value').size(2)
      chart.guide().dataRegion({
        start: ['1994', 5],
        end: ['1996', 6],
        content: '数据区间标注',
        lineLength: 50
      })
      chart.render()
    },
    guide5() {
      const data = []
      const time = Math.floor((new Date()).getTime()/1000)*1000
      for(let i = -19;i <= 0;i ++) {
        data.push({
          time: time+i*3*1000,
          value: Math.random()+0.25
        })
      }
      function findMax() {
        let maxVal = 0
        let maxObj = null
        data.forEach(obj => {
          if(obj.value > maxVal) {
            maxVal = obj.value
            maxObj = obj
          }
        })
        return maxObj
      }
      const chart = new G2.Chart({
        container: 'hello',
        forceFit: true,
        height: 450
      })
      chart.source(data, {
        time: {
          type: 'time',
          mask: 'HH:mm:ss'
        }
      })
      chart.line().position('time*value').size(2)
      chart.guide().line({
        start: ['min', 0.25],
        end: ['max', 0.25],
        content: '数据区间标注',
      })
      chart.guide().text({
        position() {
          const obj = findMax()
          return [obj.time, obj.value]
        },
        content: '最大值'
      })
      chart.render()
      setInterval(function() {
        data.shift()
        data.push({
          time: new Date().getTime(),
          value: Math.random() + .25
        })
        chart.changeData(data)
      },3000)
    },
    facet() {
      const DataView = DataSet.DataView
      const chart = new G2.Chart({
        container: 'hello',
        width: 800,
        height: 400,
        // animate: false,
        padding: [0, 90, 80, 80]
      })
      chart.source(data14)
      chart.coord('theta')
      chart.tooltip({
        showTitle: false
      })
      chart.facet('tree', {
        fields: ['grade', 'class'],
        line: {
          stroke: '#00a3d7'
        },
        lineSmooth: true,
        eachView(view, facet) {
          const data = facet.data
          const dv = new DataView()
          dv.source(data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'gender',
            as: 'percent'
          })
          view.source(dv, {
            percent: {
              formatter(val) {
                return (val*100).toFixed(2)+'%'
              }
            }
          })
          view.intervalStack().position('percent').color('gender')
        }
      })
      chart.render()
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
