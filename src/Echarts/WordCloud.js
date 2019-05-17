import React from 'react';
// 引入 ECharts 主模块
import cloud from '../static/base64/cloud'
const echarts = require('echarts');
require('echarts-wordcloud');

class WordCloud extends React.Component {
  componentDidMount() {
    var maskImage = new Image();
    // 基于准备好的dom，初始化echarts实例
    // 绘制图表
    maskImage.onload = function () {
      myChart.setOption({
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: `{b} : {c}`,
          fontSize: 14,
          // extraCssText: 'background-image:linear-gradient(90deg,rgba(31,118,255,0.7) 0%,rgba(255,255,255,0) 100%);border-radius:0'
        },
        series: [
          {
            type: 'wordCloud',
            top: 'center',
            left: 'center',
            width: '95%',
            height: '95%',
            sizeRange: [12, 28],
            rotationRange: [0, 0],
            maskImage: maskImage,
            emphasis: {
              show: true,
              shadowBlur: 10,
              shadowColor: '#333',
              label: {
                show: true,
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
            },
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
            textStyle: {
              normal: {
                color: function () {
                  const colors = ['rgba(255,255,255,0.7)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.4)', 'rgba(0,236,255,0.7)', 'rgba(255,255,255,0.8)', 'rgba(0,236,255,0.8)', '#00ECFF', '#fff', '#00ECFF', '#fff'];
                  return colors[parseInt(Math.random() * 10)];
                }
              },
            },
            data: [
              {
                name: '开机',
                value: 9867,
              },
              {
                name: '系统',
                value: 6181
              },
              {
                name: '显示',
                value: 4386
              },
              {
                name: '配置',
                value: 4055
              },
              {
                name: '内存',
                value: 2467
              },
              {
                name: '人工',
                value: 2244
              },
              {
                name: '查询',
                value: 1898
              },
              {
                name: '笔记本',
                value: 2467
              },
              {
                name: 'Office',
                value: 2244
              },
              {
                name: '游戏',
                value: 4456
              },
              {
                name: '声音',
                value: 2244
              },
              {
                name: '安装',
                value: 1898
              },
              {
                "name": "花鸟市场",
                "value": 1446
              },
              {
                "name": "汽车",
                "value": 9878
              },
              {
                "name": "视频",
                "value": 906
              },
              {
                "name": "电视",
                "value": 825
              },
              {
                "name": "Ninja",
                "value": 8789
              },
              {
                "name": "动漫",
                "value": 486
              },
              {
                "name": "音乐",
                "value": 7688
              },
              {
                "name": "直播",
                "value": 163
              },
              {
                "name": "广播电台",
                "value": 9769
              },
              {
                "name": "戏曲曲艺",
                "value": 17
              },
              {
                "name": "演出票务",
                "value": 6769
              },
              {
                "name": "给陌生的你听",
                "value": 9766
              },
              {
                "name": "资讯",
                "value": 1437
              },
              {
                "name": "商业财经",
                "value": 422
              },
              {
                "name": "娱乐八卦",
                "value": 9678
              },
              {
                "name": "军事",
                "value": 331
              },
              {
                "name": "科技资讯",
                "value": 313
              },
              {
                "name": "社会时政",
                "value": 307
              },
              {
                "name": "时尚",
                "value": 9678
              },
              {
                "name": "网络奇闻",
                "value": 6788
              },
              {
                "name": "旅游出行",
                "value": 438
              },
              {
                "name": "景点类型",
                "value": 957
              },
              {
                "name": "国内游",
                "value": 927
              },
              {
                "name": "远途出行方式",
                "value": 908
              },
              {
                "name": "酒店",
                "value": 693
              },
              {
                "name": "关注景点",
                "value": 611
              },
              {
                "name": "旅游网站偏好",
                "value": 512
              },
              {
                "name": "出国游",
                "value": 382
              },
              {
                "name": "交通票务",
                "value": 312
              },
              {
                "name": "旅游方式",
                "value": 9678
              },
              {
                "name": "旅游主题",
                "value": 163
              },
              {
                "name": "港澳台",
                "value": 104
              },
              {
                "name": "本地周边游",
                "value": 9678
              },
              {
                "name": "小卖家",
                "value": 1331
              },
              {
                "name": "全日制学校",
                "value": 941
              },
              {
                "name": "基础教育科目",
                "value": 585
              },
              {
                "name": "考试培训",
                "value": 473
              },
              {
                "name": "语言学习",
                "value": 358
              },
            ]
          }
        ]
      });
    }
    maskImage.src = cloud;
    const myChart = echarts.init(document.getElementById('wordcloud'));
  }
  render() {
    return (
      <div id="wordcloud" style={{ width: '100%', height: '100%' }}></div>
    );
  }
}

export default WordCloud;