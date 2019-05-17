import React from 'react';
// 引入 ECharts 主模块
const echarts = require('echarts');

class PieCharts extends React.Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('pie'));
    // 绘制图表
    myChart.setOption({
      legend: {
        type: 'plain',
        orient: 'vertical',
        x: 'center',
        y: 'center',
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: '#fff',
          fontSize: 14
        },
        data: ['桌面网站', '移动网站', '微信小程序', '微信公众号']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: [84, 109],
          legendHoverLink: false,
          label: {
            formatter: `{b|{b}}\n占比: {d|{d}%}`,
            fontSize: 14,
            color: '#fff',
            rich: {
              b: {
                color: '#fff',
                align: 'center',
                lineHeight: 22,
                fontSize: 14
              },
              d: {
                color: '#00ECFF',
                fontSize: 14
              }
            }
          },
          labelLine: {
            lineStyle: {
              color: '#00ECFF'
            }
          },
          emphasis: {
            label: {
              show: true,
              formatter: `{b|{b}}\n占比: {d|{d}%}`,
              fontWeight: 'bold',
              color: '#fff',
              rich: {
                b: {
                  color: '#fff',
                  align: 'center',
                  lineHeight: 22,
                  fontWeight: 'bold',
                },
                d: {
                  color: '#00ECFF',
                  fontWeight: 'bold',
                }
              }
            }
          },
          data: [
            {
              value: 235, name: '桌面网站', itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#5EC0EF' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#1B76C4' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              }
            },
            {
              value: 274, name: '移动网站', itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#56D09D' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#1A9062' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              }
            },
            {
              value: 310, name: '微信小程序', itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#BB8AF1' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#7232E1' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              }
            },
            {
              value: 310, name: '微信公众号', itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#E1F18A' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#DCE132' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              }
            },
          ],

        },
        {
          name: '图例背景',
          type: 'pie',
          selectedMode: 'single',
          hoverAnimation: false,
          radius: [0, 71],
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 1, name: '' }
          ],
          itemStyle: {
            color: 'rgba(43,98,193,0.27)',
          }
        },
      ]
    });

    window.onresize = function () {
      myChart.resize()
    }
  }
  render() {
    return (
      <div id="pie" style={{ width: '100%', height: '100%' }}></div>
    );
  }
}

export default PieCharts;