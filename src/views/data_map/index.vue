<template>
  <div>
    <header class="header">
      <h3>VUE-3.0</h3>
    </header>
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row fill-h">

          <div class="col-lg-3 fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-2">
              <div class="xpanel">
                
                <div class="fill-h" id="scatterMap"></div>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-2">
              <div class="xpanel">
                <!-- 世界地图 -->
                <div class="fill-h" id="worldMap"></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-1">
              <div class="xpanel">
                <!-- 地图飞线 --> 
                <div class="fill-h" id="flyMap"></div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-3">
              <div class="xpanel">
                <!-- 省份地图 -->
                <div class="fill-h" id="provinceMap"></div>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-3">
              <div class="xpanel">
                <!-- 城市地图 -->
                <div class="fill-h" id="cityMap"></div>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-3">
              <div class="xpanel">
                <!-- 区县地图 -->
                <div class="fill-h" id="countyMap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Her from '../entertainment'
import { reactive, onMounted } from "vue";
import echarts from "echarts";
import "echarts/map/js/china";
import "echarts/map/js/world";
import "echarts/map/js/province/jiangsu";
export default {
  name: "App",
  components:{Her},
  setup() {
    const state = reactive({ chart: null });
    onMounted(() => {
      $(function () {
        /******************* 地图飞线(中) ******************/
        //初始化echarts实例
        const flyMap = echarts.init(document.getElementById("flyMap"));
        //城市经纬度
        const originName = "洛阳";
        const flyGeo = {
          洛阳: [112.460299, 34.62677],
          西安: [108.946466, 34.347269],
          兰州: [103.84044, 36.067321],
          乌鲁木齐: [87.62444, 43.830763],
          包头: [109.846544, 40.662929],
          西宁: [101.78443, 36.623393],
          银川: [106.258602, 38.487834],
          成都: [104.081534, 30.655822],
          重庆: [106.558434, 29.568996],
          拉萨: [91.120789, 29.65005],
          昆明: [102.852448, 24.873998],
          贵阳: [106.636577, 26.653325],
          太原: [112.534919, 37.873219],
          武汉: [114.311582, 30.598467],
          长沙: [112.945473, 28.234889],
          南昌: [115.864589, 28.689455],
          合肥: [117.233443, 31.826578],
          杭州: [120.215503, 30.253087],
          广州: [113.271431, 23.135336],
          北京: [116.413384, 39.910925],
          天津: [117.209523, 39.093668],
        };
        //飞线数据
        var flyVal = [
          [{ name: "洛阳" }, { name: "洛阳", value: 100 }],
          [{ name: "洛阳" }, { name: "西安", value: 35 }],
          [{ name: "洛阳" }, { name: "兰州", value: 25 }],
          [{ name: "洛阳" }, { name: "乌鲁木齐", value: 55 }],
          [{ name: "洛阳" }, { name: "包头", value: 60 }],
          [{ name: "洛阳" }, { name: "西宁", value: 45 }],
          [{ name: "洛阳" }, { name: "银川", value: 35 }],
          [{ name: "洛阳" }, { name: "成都", value: 35 }],
          [{ name: "洛阳" }, { name: "重庆", value: 40 }],
          [{ name: "洛阳" }, { name: "拉萨", value: 45 }],
          [{ name: "洛阳" }, { name: "昆明", value: 50 }],
          [{ name: "洛阳" }, { name: "贵阳", value: 55 }],
          [{ name: "洛阳" }, { name: "太原", value: 60 }],
          [{ name: "洛阳" }, { name: "武汉", value: 65 }],
          [{ name: "洛阳" }, { name: "长沙", value: 70 }],
          [{ name: "洛阳" }, { name: "南昌", value: 75 }],
          [{ name: "洛阳" }, { name: "合肥", value: 80 }],
          [{ name: "洛阳" }, { name: "杭州", value: 85 }],
          [{ name: "洛阳" }, { name: "广州", value: 90 }],
          [{ name: "洛阳" }, { name: "北京", value: 95 }],
          [{ name: "洛阳" }, { name: "天津", value: 60 }],
        ];
        //数据转换，转换后格式：[{fromName:'cityName', toName:'cityName', coords:[[lng, lat], [lng, lat]]}, {...}]
        const convertFlyData = function (data) {
          let res = [];
          for (let i = 0; i < data.length; i++) {
            let dataItem = data[i];
            let toCoord = flyGeo[dataItem[0].name];
            let fromCoord = flyGeo[dataItem[1].name];
            if (fromCoord && toCoord) {
              res.push({
                fromName: dataItem[1].name,
                toName: dataItem[0].name,
                coords: [fromCoord, toCoord],
              });
            }
          }
          return res;
        };
        //报表配置
        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
        const flySeries = [];
        [[originName, flyVal]].forEach(function (item, i) {
          flySeries.push(
            {
              name: item[0],
              type: "lines",
              zlevel: 1,
              symbol: ["none", "none"],
              symbolSize: 0,
              effect: {
                //特效线配置
                show: true,
                period: 5, //特效动画时间，单位s
                trailLength: 0, //特效尾迹的长度，从0到1
                symbol: planePath,  //飞行图标
                symbolSize: 15,
              },
              lineStyle: {
                normal: {
                  color: "#43d0d6",
                  width: 1,
                  opacity: 0.6,
                  curveness: 0.2, //线的平滑度
                },
              },
              data: convertFlyData(item[1]),
            },
            {
              name: item[0],
              type: "effectScatter",
              coordinateSystem: "geo",
              zlevel: 2,
              rippleEffect: {
                //涟漪特效
                period: 5, //特效动画时长
                scale: 4, //波纹的最大缩放比例
                brushType: "stroke", //波纹的绘制方式：stroke | fill
              },
              label: {
                normal: {
                  show: false,
                  position: "right",
                  formatter: "{b}",
                },
              },
              symbol: "circle",
              symbolSize: function (val) {
                //根据某项数据值设置符号大小
                return val[2] / 10;
              },
              itemStyle: {
                normal: {
                  color: "#43d0d6",
                },
              },
              data: item[1].map(function (dataItem) {
                return {
                  name: dataItem[1].name,
                  value: flyGeo[dataItem[1].name].concat([dataItem[1].value]),
                };
              }),
            },
            {
              //与上层的点叠加
              name: item[0],
              type: "scatter",
              coordinateSystem: "geo",
              zlevel: 3,
              symbol: "circle",
              symbolSize: function (val) {
                //根据某项数据值设置符号大小
                return val[2] / 15;
              },
              itemStyle: {
                normal: {
                  color: "red",
                },
              },
              data: item[1].map(function (dataItem) {
                return {
                  name: dataItem[1].name,
                  value: flyGeo[dataItem[1].name].concat([dataItem[1].value]),
                };
              }),
            }
          );
        });

        //报表配置项
        const flyMapOpt = {
          title: {
            show: false,
            text: "地图飞线",
            x: "center",
            textStyle: {
              color: "#fff",
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value) {
                return params.name + " : " + params.value[2];
              } else {
                return params.name;
              }
            },
          },
          geo: {
            map: "china",
            roam: false, //开启鼠标缩放和漫游
            zoom: 1, //地图缩放级别
            selectedMode: false, //选中模式：single | multiple
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            layoutCenter: ["50%", "50%"], //设置后left/right/top/bottom等属性无效
            layoutSize: "100%", //保持地图宽高比
            label: {
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                areaColor: "#101f32",
                borderWidth: 1,
                borderColor: "#43d0d6",
                shadowBlur: 15,
                shadowColor: '#3a73c0',
                shadowOffsetX: 7,
                shadowOffsetY: 6,
              },
              emphasis: {
                areaColor: "#069",
              },
            },
          },
          series: flySeries,
        };
        //渲染报表
        flyMap.setOption(flyMapOpt);

        /***************** 地图散点(左1) ******************/
        //初始化echarts实例
        const scatterMap = echarts.init(document.getElementById("scatterMap"));
        var data_data = [
            [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
            [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
        ];

        const sactterMapOpt = {
                    textStyle: {
              color: "white",
            },
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                offset: 0,
                color: '#083651'
            }, {
                offset: 1,
                color: '#083651'
            }]),
            title: {
                text: '1990 与 2015 年各国家人均寿命与 GDP',
                textStyle:{
                  color:'white',
                   fontSize:14
                }
                
            },
            legend: {
                right: 10,
                data: ['1990', '2015']
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: [{
                name: '1990',
                data: data_data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(251, 118, 123)'
                    }, {
                        offset: 1,
                        color: 'rgb(204, 46, 72)'
                    }])
                }
            }, {
                name: '2015',
                data: data_data[1],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(129, 227, 238)'
                    }, {
                        offset: 1,
                        color: 'rgb(25, 183, 207)'
                    }])
                }
            }]
        };

        //渲染报表
        scatterMap.setOption(sactterMapOpt);

        /******************* 世界地图(左2) ******************/
        //初始化echarts实例
        const worldMap = echarts.init(document.getElementById("worldMap"));
        const worldMapOpt = {
          geo: {
            map: "world",
            roam: false, //开启鼠标缩放和漫游
            zoom: 1, //地图缩放级别
            selectedMode: false, //选中模式：single | multiple
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            layoutCenter: ["50%", "50%"], //设置后left/right/top/bottom等属性无效
            layoutSize: "100%",
            label: {
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                areaColor: "#101f32",
                borderWidth: 1.1,
                borderColor: "#43d0d6",
              },
              emphasis: {
                areaColor: "#069",
              },
            },
          },
        };
        worldMap.setOption(worldMapOpt);

        /******************* 省份地图(右1) ******************/
        //初始化echarts实例
        const provinceMap = echarts.init(
          document.getElementById("provinceMap")
        );
        const provinceMapOpt = {
          geo: {
            map: "江苏",
            roam: false, //开启鼠标缩放和漫游
            zoom: 1, //地图缩放级别
            selectedMode: false, //选中模式：single | multiple
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            layoutCenter: ["50%", "50%"], //设置后left/right/top/bottom等属性无效
            layoutSize: "100%", //保持地图宽高比
            label: {
              emphasis: {
                show: true,
                color: "#f19000",
              },
            },
            itemStyle: {
              normal: {
                areaColor: "#101f32",
                borderWidth: 1.1,
                borderColor: "#43d0d6",
              },
              emphasis: {
                areaColor: "#069",
              },
            },
          },
        };
        provinceMap.setOption(provinceMapOpt);

        /******************* 城市地图(右2) ******************/
        //初始化echarts实例
          const cityMap = echarts.init(document.getElementById("cityMap"));
          var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
          var datas = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
          var yMax = 500;
          var dataShadow = [];

          for (var i = 0; i < datas.length; i++) {
              dataShadow.push(yMax);
          }
         const options = {
              title: {
                  text: '特性示例：渐变色 阴影 点击缩放',
                  subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
                  textStyle:{
                    color:"white"
                  }
              },
              xAxis: {
                  data: dataAxis,
                  axisLabel: {
                      inside: true,
                      textStyle: {
                          color: '#fff'
                      }
                  },
                  axisTick: {
                      show: false
                  },
                  axisLine: {
                      show: false
                  },
                  z: 10
              },
              yAxis: {
                  axisLine: {
                      show: false
                  },
                  axisTick: {
                      show: false
                  },
                  axisLabel: {
                      textStyle: {
                          color: '#999'
                      }
                  }
              },
              dataZoom: [
                  {
                      type: 'inside'
                  }
              ],
              series: [
                  { // For shadow
                      type: 'bar',
                      itemStyle: {
                          color: 'rgba(0,0,0,0.05)'
                      },
                      barGap: '-100%',
                      barCategoryGap: '40%',
                      data: dataShadow,
                      animation: false
                  },
                  {
                      type: 'bar',
                      itemStyle: {
                          color: new echarts.graphic.LinearGradient(
                              0, 0, 0, 1,
                              [
                                  {offset: 0, color: '#83bff6'},
                                  {offset: 0.5, color: '#188df0'},
                                  {offset: 1, color: '#188df0'}
                              ]
                          )
                      },
                      emphasis: {
                          itemStyle: {
                              color: new echarts.graphic.LinearGradient(
                                  0, 0, 0, 1,
                                  [
                                      {offset: 0, color: '#2378f7'},
                                      {offset: 0.7, color: '#2378f7'},
                                      {offset: 1, color: '#83bff6'}
                                  ]
                              )
                          }
                      },
                      data: datas
                  }
              ]
          };
          // Enable data zoom when user click bar.
          var zoomSize = 6;
          cityMap.on('click', function (params) {
              console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
              cityMap.dispatchAction({
                  type: 'dataZoom',
                  startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                  endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, datas.length - 1)]
              });
          });
           cityMap.setOption(options);
        /******************* 区县地图(右3) ******************/
        //初始化echarts实例
          const myChart = echarts.init(document.getElementById("countyMap"));
          //渲染
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
        /********** 浏览器窗口改变时，重置报表大小 ****************/
        window.onresize = function () {


          flyMap.resize();
          scatterMap.resize();
          worldMap.resize();
          provinceMap.resize();
          cityMap.resize();
          myChart.resize();
        };
      });
    });
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./css/index1.css";
</style>