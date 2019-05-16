import React from 'react';
import topImages from '../static/base64/topImage'
// 引入 ECharts 主模块
const echarts = require('echarts');

class Progress extends React.Component {
  componentDidMount() {
    const top1 = new Image
    top1.src = '../static/images/1.png'
    console.log(top1)
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('progress'));
    // 绘制图表
    myChart.setOption({
      grid: {
        x: 160,
        y: 0,
        x2: 60,
        y2: 0,
      },
      xAxis: {
        show: false,
        splitLine: {
          show: false
        }
      },
      yAxis: [
        {
          position: 'left',
          offset: 135,
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: 14,
              align: 'center'
            },
            rich: {
              a: {
                backgroundColor: {
                  image: topImages.top1,
                  repeat: 'no-repeat'
                },
                width: 15,
                height: 20,
              },
              b: {
                backgroundColor: {
                  image: topImages.top2,
                  repeat: 'no-repeat'
                },
                width: 15,
                height: 20,
              },
              c: {
                backgroundColor: {
                  image: topImages.top3,
                  repeat: 'no-repeat'
                },
                width: 15,
                height: 20,
              },
              d: {
                color: '#fff',
                fontSize: 14
              }
            },
            formatter: function (params) {
              if (params == 1) {
                return `{a|}`
              } else if (params == 2) {
                return `{b|}`
              } else if (params == 3) {
                return `{c|}`
              } else {
                return `{d|${params}}`
              }
            },
          },
          data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
        },
        {
          position: 'left',
          offset: 110,
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: 14,
              align: 'left'
            }
          },
          data: ['服务站地址', '服务站地址', '服务站地址', '服务站地址', '服务站地址', '服务站地址', '服务站地址', '服务站地址服务站', '略略略', '她她她']
        },
        {
          position: 'right',
          offset: -10,
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#00ECFF',
              fontSize: 14
            }
          },
          axisTick: 'none',
          data: [111111, 222222, 333333, 444444, 555555, 666666, 777777, 888888, 999999, 1111111]
        }
      ],
      series: [
        {
          name: '内容条',
          type: 'bar',
          barWidth: 6,
          barCategoryGap: '60%',
          z: 2,
          data: [111111, 222222, 333333, 444444, 555555, 666666, 777777, 888888, 999999, 1111111],
          itemStyle: {
            barBorderRadius: 5,
            fontSize: 14,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#FFB739' // 0% 处的颜色
              }, {
                offset: 1, color: '#00E0FF' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
        },
        {
          name: '背景条',
          type: 'bar',
          barWidth: 6,
          z: 1,
          barGap: '-100%',
          barCategoryGap: '60%',
          itemStyle: {
            color: '#2B62C1',
            barBorderRadius: 5,
            opacity: 0.27
          },
          data: [1111111, 1111111, 1111111, 1111111, 1111111, 1111111, 1111111, 1111111, 1111111, 1111111]
        }
      ]
    });
    myChart.resize()
  }
  render() {
    return (
      <div id="progress" style={{ width: '100%', height: '100%' }}></div>
    );
  }
}

export default Progress;