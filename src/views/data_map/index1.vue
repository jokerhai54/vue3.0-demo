<template>
  <div class="API">
    <div id="airLine" style="width: 800px; height: 800px"></div>
    <div id="main"></div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import echarts from "echarts";
import option from "./map-option";
let $ = require("jquery");
console.log($);
export default {
  name: "App",
  setup() {
    const state = reactive({ chart: null });
    onMounted(() => {
      // 绘制图表
      var myChart = echarts.init(document.getElementById("main"));
      myChart.setOption({
        textStyle: {
          color: "white",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
      //地图
      state.chart = echarts.init(
        document.getElementById("airLine"),
        "macarons"
      );
      state.chart.setOption(option);
    });
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/style/mixin.scss";
.API {
  // height: 100%;
  // @include bgImgCover("bg02.png");
  // @include horizontal-vertical-center;
  // position: relative;
}
</style>