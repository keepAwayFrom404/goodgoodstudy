<template>
  <div class="baidu-map">
    <baidu-map
      class="baidu-map"
      :center="{ lng: 116.404, lat: 39.915 }"
      :zoom="14"
      mapType="BMAP_SATELLITE_MAP"
      @mousemove="syncPolyline"
      @click="paintPolyline"
      @rightclick="newPolyline"
    >
      <bm-control
        ><button @click="toggle('polyline')">
          {{ polyline.editing ? "停止绘制" : "开始绘制" }}
        </button></bm-control
      >
      <bm-polyline
        :path="path"
        v-for="(path, index) of polyline.paths"
        :key="index"
      ></bm-polyline>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      polyline: {
        editing: false,
        paths: []
      }
    };
  },
  methods: {
    toggle(name) {
      this[name].editing = !this[name].editing;
    },
    syncPolyline(e) {
      if (!this.polyline.editing) {
        return;
      }
      const { paths } = this.polyline;
      if (!paths.length) {
        return;
      }
      const path = paths[paths.length - 1];
      if (!path.length) {
        return;
      }
      if (path.length === 1) {
        path.push(e.point);
      }
      this.$set(path, path.length - 1, e.point);
      console.log(path);
    },
    newPolyline() {
      if (!this.polyline.editing) {
        return;
      }
      const { paths } = this.polyline;
      if (!paths.length) {
        paths.push([]);
      }
      const path = paths[paths.length - 1];
      path.pop();
      if (path.length) {
        paths.push([]);
      }
    },
    paintPolyline(e) {
      if (!this.polyline.editing) {
        return;
      }
      const { paths } = this.polyline;
      !paths.length && paths.push([]);
      paths[paths.length - 1].push(e.point);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.baidu-map {
  width: 100%;
  height: 400px;
}
</style>
