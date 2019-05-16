import React from 'react';
import geoCoordMap from '../static/geoCoord'
import 'echarts/map/js/china' // 引入中国地图
// 引入 ECharts 主模块
const echarts = require('echarts');
const data = [
  {
    name: '北京',
    value: 200
  },
  {
    name: '天津',
    value: 300
  },
  {
    name: '河北',
    value: 44
  },
  {
    name: '山西',
    value: 200
  },
  {
    name: '内蒙古',
    value: 200
  },
  {
    name: '辽宁',
    value: 200
  },
  {
    name: '吉林',
    value: 678
  },
  {
    name: '黑龙江',
    value: 666
  },
  {
    name: '上海',
    value: 200
  },
  {
    name: '江苏',
    value: 200
  },
  {
    name: '浙江',
    value: 888
  },
  {
    name: '安徽',
    value: 200
  },
  {
    name: '福建',
    value: 200
  },
  {
    name: '江西',
    value: 200
  },
  {
    name: '山东',
    value: 200
  },
  {
    name: '河南',
    value: 200
  },
  {
    name: '湖北',
    value: 200
  },
  {
    name: '安徽',
    value: 200
  },
  {
    name: '福建',
    value: 200
  },
  {
    name: '江西',
    value: 200
  },
  {
    name: '湖北',
    value: 200
  },
  {
    name: '湖南',
    value: 200
  },
  {
    name: '广东',
    value: 200
  },
  {
    name: '广西',
    value: 200
  },
  {
    name: '海南',
    value: 200
  },
  {
    name: '重庆',
    value: 200
  },
  {
    name: '四川',
    value: 200
  },
  {
    name: '贵州',
    value: 200
  },
  {
    name: '云南',
    value: 200
  },
  {
    name: '西藏',
    value: 200
  },
  {
    name: '陕西',
    value: 200
  },
  {
    name: '甘肃',
    value: 200
  },
  {
    name: '青海',
    value: 200
  },
  {
    name: '宁夏',
    value: 200
  },
  {
    name: '新疆',
    value: 200
  },
  {
    name: '香港',
    value: 200
  },
  {
    name: '澳门',
    value: 200
  },
  {
    name: '台湾',
    value: 200
  }
]

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

class MapChart extends React.Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('mapchart'));
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return params.name + ' : ' + params.value[2];
        }
      },
      geo: {
        map: 'china',
        label: {
          emphasis: {
            show: false
          }
        },
        left: 0,
        right: 0,
        top: 0,
        itemStyle: {
          areaColor: 'rgba(43,98,193,0.27)',
          borderWidth: 1,
          borderColor: '#00ECFF',
          emphasis: {
            areaColor: 'rgba(43,87,193,0.7)'
          },
          shadowColor: 'rgba(0,236,255, 0.27)',
          shadowBlur: 7
        },
        // color: {
        //   type: 'radial',
        //   x: 0.5,
        //   y: 0.5,
        //   r: 0.5,
        //   colorStops: [{
        //     offset: 0, color: 'red' // 0% 处的颜色
        //   }, {
        //     offset: 1, color: 'blue' // 100% 处的颜色
        //   }],
        //   global: false // 缺省为 false
        // },
        // regions: convertData(data.sort(function (a, b) {
        //   return b.value - a.value;
        // }).map((i)=>{
        //   return {
        //     name: i.name,
        //     itemStyle: {
        //       areaColor: 'rgba(43,87,193,0.7)',
        //     }
        //   }
        // }))
        regions: [{
          name: '吉林',
          itemStyle: {
            areaColor: 'rgba(43,87,193,0.7)',
          }
        }]
      },
      series: [
        {
          name: '增加用户数',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: 6,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: '#F6F600'
            }
          }
        },
        {
          name: 'Top5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(data.sort(function (a, b) {
            return b.value - a.value;
          }).slice(0, 5)),
          symbolSize: 10,
          showEffectOn: 'render',
          hoverAnimation: true,
          label: {
            normal: {
              formatter: function (params) {
                return `${params.data.name}+${params.value[2]}`
              },
              position: 'right',
              show: true
            },
            emphasis: {
              show: true
            }
          },
          rippleEffect: {
            period: 3,
            scale: 2.5,
            brushType: 'fill'
          },
          itemStyle: {
            normal: {
              color: '#F6F600',
              shadowBlur: 10,
              shadowColor: '#333',
              fontSize: 14
            }
          },
          zlevel: 1
        }
      ]
    });
  }
  render() {
    return (
      <div id="mapchart" style={{ width: '100%', height: '100%'}}></div>
    );
  }
}

export default MapChart;