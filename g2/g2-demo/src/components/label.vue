<template>
  <div id="g2-label">
    <div id="g2-map"></div>
    <div id="g2-map2"></div>
  </div>
</template>
<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 }
];
const data2 = [
  { name: 'Microsoft Internet Explorer', value: 56.33 },
  { name: 'Chrome', value: 24.03 },
  { name: 'Firefox', value: 10.38 },
  { name: 'Safari', value: 4.77 },
  { name: 'Opera', value: 0.91 },
  { name: 'Proprietary or Undetectable', value: 0.2 }
];
const data3 = [
  { name: '示例 A', value: 38.8 },
  { name: '示例 B', value: 9.15 },
  { name: '示例 C', value: 26.35 },
  { name: '示例 D ', value: 22.6 },
  { name: '示例 E', value: 3.1 }
];
let provinceChart;
function processData(mapData) {
  const userData = [];
  const features = mapData.features;
  for (let i = 0; i < features.length; i++) {
    const name = features[i].properties.name;
    userData.push({
      name,
      value: Math.round(Math.random() * 1000)
    });
  }
  const ds = new DataSet();
  const geoDataView = ds.createView().source(mapData, {
    type: 'GeoJSON'
  });
  const dvData = ds.createView().source(userData);
  dvData.transform({
    type: 'geo.region',
    field: 'name',
    geoDataView: geoDataView,
    as: ['longitude', 'latitude']
  });
  return dvData;
}

function renderProvinceChart(name) {
  const provinceData = ChinaGeoJSON[name];
  provinceChart && provinceChart.destroy();
  provinceChart = null;
  if (!provinceData) {
    return;
  }
  const dv = processData(provinceData);

  // start: 计算地图的最佳宽高
  const longitudeRange = dv.range('longitude');
  const latitudeRange = dv.range('latitude');
  const ratio =
    (longitudeRange[1] - longitudeRange[0]) /
    (latitudeRange[1] - latitudeRange[0]);
  let width;
  let height;
  if (ratio > 1) {
    width = 450;
    height = width / ratio;
  } else {
    width = 350 * ratio;
    height = 350;
  }
  // end: 计算地图的最佳宽高

  provinceChart = new G2.Chart({
    container: 'g2-map2',
    width,
    height,
    padding: 0
  });
  provinceChart.source(dv);
  provinceChart.axis(false);
  provinceChart.tooltip({
    showTitle: false
  });
  provinceChart
    .polygon()
    .position('longitude*latitude')
    .label('name', {
      textStyle: {
        fill: '#fff',
        fontSize: 10,
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)'
      }
    })
    .style({
      stroke: '#fff',
      lineWidth: 1
    })
    .color('value', '#BAE7FF-#1890FF-#0050B3');
  provinceChart.render();
}

export default {
  name: 'g2-label',
  mounted() {
    this.interaction();
  },
  methods: {
    label() {
      const chart = new G2.Chart({
        container: 'g2-label',
        height: 300,
        forceFit: true,
        padding: [40, 20, 95, 80]
      });
      chart.source(data, {
        genre: {
          alias: '游戏类'
        },
        sold: {
          alias: '销售类'
        }
      });
      chart
        .interval()
        .position('genre*sold')
        .color('genre')
        .label('sold');
      chart.render();
    },
    labelFormater() {
      const dv = new DataSet.DataView();
      dv.source(data2).transform({
        type: 'percent',
        field: 'value',
        dimension: 'name',
        as: 'percent'
      });
      const chart = new G2.Chart({
        container: 'g2-label',
        height: 400,
        width: 800
      });
      chart.source(dv);
      chart.coord('theta', {
        radius: 0.8
      });
      chart.tooltip({
        showTitle: false
      });
      chart
        .intervalStack()
        .position('percent')
        .color('name')
        .tooltip('name*percent', (name, percent) => {
          return {
            name,
            value: (percent * 100).toFixed(2) + '%'
          };
        })
        .label('name', {
          formatter: (text, item, index) => {
            const point = item.point;
            let percent = point['percent'];
            percent = (percent * 100).toFixed(2) + '%';
            return text + ' ' + percent;
          }
        });
      chart.render();
    },
    labelCustom() {
      const dv = new DataSet.DataView();
      dv.source(data3).transform({
        type: 'percent',
        field: 'value',
        dimension: 'name',
        as: 'percent'
      });
      const chart = new G2.Chart({
        container: 'g2-label',
        height: 400,
        width: 800
      });
      chart.source(dv);
      chart.coord('theta', {
        radius: 0.8
      });
      chart.tooltip({
        showTitle: false
      });
      chart
        .intervalStack()
        .position('percent')
        .color('name')
        .tooltip('name*percent', (name, percent) => {
          return {
            name,
            value: (percent * 100).toFixed(2) + '%'
          };
        })
        .label('name', {
          labelLine: false,
          offset: 30,
          htmlTemplate: (text, item, index) => {
            const point = item.point;
            let percent = point['percent'];
            percent = (percent * 100).toFixed(2) + '%';
            return `<span class="title" style="display:inline-block;width:50px">${text}</span><br><span style="color:${point.color}">${percent}</span>`;
          }
        });
      chart.render();
    },
    event() {
      const dv = new DataSet.DataView();
      dv.source(data2).transform({
        type: 'percent',
        field: 'value',
        dimension: 'name',
        as: 'percent'
      });
      const chart = new G2.Chart({
        container: 'g2-label',
        forceFit: true,
        height: 400
      });
      chart.source(dv);
      chart.coord('theta', {
        radius: 0.8
      });
      chart.tooltip({
        showTitle: false
      });
      chart
        .intervalStack()
        .position('percent')
        .color('name')
        .tooltip('name*percent', (name, percent) => {
          return {
            name,
            value: (percent * 100).toFixed(2) + '%'
          };
        })
        .style({
          cursor: 'pointer'
        })
        .label('name');
      chart.render();
      chart.on('interval:click', ev => {
        const data = ev.data;
        if (data) {
          const name = data._origin['name'];
          window.open('http:/www.baidu.com/s?wd=' + name);
        }
      });
    },
    event2() {
      const dv = new DataSet.DataView();
      dv.source(data3).transform({
        type: 'percent',
        field: 'value',
        dimension: 'name',
        as: 'percent'
      });
      const chart = new G2.Chart({
        container: 'g2-label',
        width: 800,
        height: 400
      });
      chart.source(dv);
      chart.coord('theta', {
        radius: 0.8
      });
      chart.tooltip({
        showTitle: false
      });
      chart
        .intervalStack()
        .position('percent')
        .color('name');
      chart.render();
      chart.on('tooltip:change', ev => {
        const item = ev.items[0];
        item.value = '格式化-' + (item.value * 100).toFixed(2) + '%';
      });
    },
    interaction() {
      const mapData = ChinaGeoJSON['China'];
      const chinaDv = processData(mapData);
      const longitudeRange = chinaDv.range('longitude');
      const latitudeRange = chinaDv.range('latitude');
      const ratio =
        (longitudeRange[1] - longitudeRange[0]) /
        (latitudeRange[1] - latitudeRange[0]);
      const chart = new G2.Chart({
        container: 'g2-map',
        width: 250,
        height: 250 / ratio,
        padding: 0,
        animate: false
      });
      chart.source(chinaDv);
      chart.tooltip({
        showTitle: false
      });
      chart.axis(false);
      chart
        .polygon()
        .position('longitude*latitude')
        .tooltip('name')
        .style({
          stroke: '#bfbfbf',
          lineWidth: 1,
          fill: '#e3e3e3',
          globalAlpha: 0.85,
          cursor: 'pointer' // 设置鼠标手势
        })
        .select({
          mdoe: 'single',
          style: {
            fill: '#1890ff'
          }
        });
      chart.render();
      const shapes = chart.getAllGeoms()[0].getShapes();
      for (let i = 0, len = shapes.length; i < len; i++) {
        const shape = shapes[i];
        const origin = shape.get('origin')['_origin'];
        const name = origin.name;
        if (name === '浙江') {
          renderProvinceChart(name);
          chart.getAllGeoms()[0].setShapeSelected(shape);
        }
      }
      chart.on('plotclick', ev => {
        const shape = ev.shape;
        if (!shape || !shape.name) {
          return false;
        }
        if (shape.get('selected')) {
          const item = shape.get('origin');
          const data = item['_origin'];
          const name = data.name;
          renderProvinceChart(name);
        } else {
          provinceChart && provinceChart.clear();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>