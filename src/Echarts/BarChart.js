import React from 'react';
// 引入 ECharts 主模块
const echarts = require('echarts');

class BarCharts extends React.Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('bar'));
    // 绘制图表
    myChart.setOption({
      grid: {
        x: 50,
        y: 0,
        x2: 217,
        y2: 50,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        }
      },
      xAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#00ECFF'
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 14
        },
      },
      yAxis: {
        position: 'left',
        axisLine: {
          lineStyle: {
            color: '#00ECFF'
          }
        },
        axisTick: {
          alignWithLabel: true,
          lineStyle: {
            color: '#00ECFF'
          },
        },
        axisLabel: {
          color: '#fff',
          fontSize: 14
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      legend: {
        type: 'plain',
        orient: 'vertical',
        right: 0,
        top: 0,
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
          name: '桌面网站',
          type: 'bar',
          stack: '1',
          barMaxWidth: 8,
          itemStyle: {
            color: '#00ECFF',
          },
          data: [200000, 150000, 240000, 330000, 200000, 150000, 240000, 330000, 200000, 150000, 240000, 330000]
        },
        {
          name: '移动网站',
          type: 'bar',
          stack: '1',
          barMaxWidth: 8,
          itemStyle: {
            color: '#64FC91',
          },
          data: [200000, 150000, 240000, 330000, 200000, 150000, 240000, 330000, 200000, 150000, 240000, 330000]
        },
        {
          name: '微信小程序',
          type: 'bar',
          stack: '1',
          barMaxWidth: 8,
          itemStyle: {
            color: '#F0A137',
          },
          data: [200000, 150000, 240000, 330000, 200000, 150000, 240000, 330000, 200000, 150000, 240000, 330000]
        },
        {
          name: '微信公众号',
          type: 'bar',
          stack: '1',
          barMaxWidth: 8,
          barCategoryGap: 8,
          itemStyle: {
            color: '#EDFF13',
          },
          data: [200000, 150000, 240000, 330000, 200000, 150000, 240000, 330000, 200000, 150000, 240000, 330000]
        }
      ]
    });
  }
  render() {
    return (
      <div id="bar" style={{ width: '100%', height: '100%' }}></div>
    );
  }
}

export default BarCharts;