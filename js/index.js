/*
 * @Descripttion:
 * @version:
 * @Author: chenying
 * @Date: 2020-06-18 12:14:23
 * @LastEditors: chenying
 * @LastEditTime: 2020-06-18 15:37:53
 */
var myMap = null;
window.onload = function () {
  // 地图部分
  myMap = echarts.init(document.getElementById("map"));
  myColumn = echarts.init(document.getElementById("column"));
  myPie = echarts.init(document.getElementById("pie"));
  myLine = echarts.init(document.getElementById("line"));
  drawMap();
  drawColumn();
  drawPie();
  drawLine();
  setTimeout(() => {
    window.onresize = function () {
      myMap.resize();
      myColumn.resize();
      myPie.resize();
      myLine.resize();
    };
  }, 200);
};
function drawMap() {
  myMap.setOption({
    roam: true, //开启鼠标缩放和平移漫游。默认不开启
    scaleLimit: {
      //控制鼠标缩放比例
      min: 1,
      max: 2,
    },

    series: [
      {
        type: "map",
        map: "china",
        itemStyle: {
          areaColor: "#0529A2",
          color: "#0529A2 ",
          borderColor: "#1D4DAB",
          borderWidth: 2,
        },
        emphasis: {
          label: {
            color: "#c3cbde",
          },
          itemStyle: {
            areaColor: "#083FFF",
          },
        },
      },
    ],
  });
}

function drawColumn() {
  myColumn.setOption({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    color: ["#1572E8", "#0090FF", "#01DCE7", "#31CE36", "#FBD34F"],
    grid: {
      left: 16,
      right: 16,
      bottom: 16,
      top: 16,
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        splitLine: {
          show: false,
          lineStyle: {
            color: "red",
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            align: "center",
            color: "#6C757D", //更改坐标x轴文字颜色
            fontSize: 10, //更改坐标x轴文字大小
          },
          showMinLabel: true,
        },
        axisLine: {
          onZero: true,
          lineStyle: {
            color: "#192238", //x轴分隔线颜色
            width: 1, //这里是为了突出显示加上的
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          show: true,
          margin:20,
          textStyle: {
            align: "center",
            color: "#6C757D", //更改坐标y轴文字颜色
            fontSize: 10, //更改坐标x轴文字大小
          },
          showMinLabel: true,
        },
        axisLine: {
          onZero: true,
          lineStyle: {
            color: "#192238", //y轴分隔线颜色
            width: 1, //这里是为了突出显示加上的
          },
        },
        splitLine: {
          lineStyle:{
            color:'#192238'
          }
        },
      },
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "邮件营销",
        type: "bar",
        stack: "广告",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "联盟广告",
        type: "bar",
        stack: "广告",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "视频广告",
        type: "bar",
        stack: "广告",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "搜索引擎",
        type: "bar",
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        markLine: {
          lineStyle: {
            type: "dashed",
          },
          data: [[{ type: "min" }, { type: "max" }]],
        },
      },
      {
        name: "百度",
        type: "bar",
        barWidth: 5,
        stack: "搜索引擎",
        data: [620, 732, 701, 734, 1090, 1130, 1120],
      },
      {
        name: "谷歌",
        type: "bar",
        stack: "搜索引擎",
        data: [120, 132, 101, 134, 290, 230, 220],
      },
      {
        name: "必应",
        type: "bar",
        stack: "搜索引擎",
        data: [60, 72, 71, 74, 190, 130, 110],
      },
      {
        name: "其他",
        type: "bar",
        stack: "搜索引擎",
        data: [62, 82, 91, 84, 109, 110, 120],
      },
    ],
  });
}
function drawPie() {
  myPie.setOption({
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    color: ["#1572E8", "#0090FF", "#01DCE7", "#31CE36", "#FBD34F"],
    series: [
      {
        type: "pie",
        radius: ["50%", "70%"],
        center: ["50%", "50%"],
        selectedMode: "single",
        data: [
          { value: 1548, name: "幽州" },
          { value: 535, name: "荆州" },
          { value: 510, name: "兖州" },
          { value: 634, name: "益州" },
          { value: 735, name: "西凉" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  });
}
function drawLine() {
  myLine.setOption({
    tooltip: {
      trigger: "axis",
      axisPointer:{
        type:'line',
        lineStyle:{
          color:'#8F96A6'
        }
      }
    },
    color: ["#1572E8", "#FFAD46"],
    grid: {
      top: 16,
      left: 16,
      right: 16,
      bottom: 16,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: "#192238",
        },
      },
      axisLabel: {
        show: true,
        interArrival: 0,
        rotate: 45,
        textStyle: {
          color: "#6C757D", //更改坐标轴文字颜色
          fontSize: 10, //更改坐标轴文字大小
        },
      },
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#192238",
        },
      },
      axisLabel: {
        show: true,
        interArrival: 0,
        textStyle: {
          color: "#6C757D", //更改坐标轴文字颜色
          fontSize: 10, //更改坐标轴文字大小
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#192238",
        },
      },
    },
    series: [
      {
        name: "设备数量",
        type: "line",
        symbol:'triangle',
        symbolSize:20,
        symbolKeepAspect:true,
        smooth: true,
        areaStyle:{
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#1B4580' // 0% 处的颜色
            }, {
                offset: 1, color: '#1F2C47' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "在线数量",
        type: "line",
        symbol:'roundRect',
        symbolSize:15,
        symbolKeepAspect:true,
        smooth: true,
        data: [220, 182, 191, 234, 290, 330, 310],
      },
    ],
  });
}
