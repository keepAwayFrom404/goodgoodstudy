<template>
  <div id="g2-animate">
    <button id="refresh">刷新</button>
  </div>
</template>

<script>
import G2 from '@antv/g2';
import '@antv/g2-plugin-slider';

export default {
  name: 'g2-animate',
  mounted() {
    this.animate();
  },
  methods: {
    animate() {
      const Animate = G2.Animate;
      Animate.registerAnimation(
        'appear',
        'delayScaleInY',
        (shape, animateCfg) => {
          const box = shape.getBBox(); // 获取柱子包围盒
          const origin = shape.get('origin'); // 获取柱子原始数据
          const points = origin.points; // 获取柱子顶点

          const centerX = (box.minX + box.maxX) / 2;
          let centerY;
          if (points[0].y - points[1].y <= 0) {
            centerY = box.maxY;
          } else {
            centerY = box.minY;
          }

          shape.attr('transform', [
            ['t', -centerX, -centerY],
            ['s', 1, 0.1],
            ['t', centerX, centerY]
          ]);
          const index = shape.get('index');
          let delay = animateCfg.delay;
          if (G2.Util.isFunction(delay)) {
            delay = animateCfg.delay(index);
          }
          let easing = animateCfg.easing;
          if (G2.Util.isFunction(easing)) {
            easing = animateCfg.easing(index);
          }

          shape.animate(
            {
              transform: [
                ['t', -centerX, -centerY],
                ['s', 1, 10],
                ['t', centerX, centerY]
              ]
            },
            animateCfg.duration,
            easing,
            animateCfg.callback,
            delay
          );
        }
      );
      const data = [];
      for (let i = 0; i < 50; i++) {
        data.push({
          x: i,
          y: (Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5
        });
      }
      const chart = new G2.Chart({
        container: 'g2-animate',
        forceFit: true,
        height: 400
      });
      chart.axis('x', false);
      chart.legend(false);
      chart.source(data);
      chart
        .interval()
        .position('x*y')
        .color('y', '#4a657a-#308e92-#b1cfa5-#f5d69f-#f5898b-#ef5055')
        .animate({
          appear: {
            animation: 'delayScaleInY',
            easing: 'easeElasticOut',
            delay: index => {
              return index * 10;
            }
          }
        });
      chart.render();

      document.getElementById('refresh').click(() => {
        chart.clear();
        chart
          .interval()
          .position('x*y')
          .color('y', '#4a657a-#308e92-#b1cfa5-#f5d69f-#f5898b-#ef5055')
          .animate({
            appear: {
              animation: 'delayScaleInY',
              easing: 'easeElasticOut',
              delay: index => {
                return index * 10;
              }
            }
          });
        chart.render();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>