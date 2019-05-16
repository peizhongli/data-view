import React from 'react';
// 引入 ECharts 主模块
const echarts = require('echarts');
require('echarts-wordcloud');

class WordCloud extends React.Component {
  componentDidMount() {
    var maskImage = new Image();
    // 基于准备好的dom，初始化echarts实例
    // 绘制图表
    maskImage.onload = function () {
      myChart.setOption({
        series: [
          {
            type: 'wordCloud',
            sizeRange: [12, 55],
            rotationRange: [0, 0],
            maskImage: maskImage,
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
                value: 10000,
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
                value: 1898
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
                "value": 928
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
                "name": "Lover Boy 88",
                "value": 514
              },
              {
                "name": "动漫",
                "value": 486
              },
              {
                "name": "音乐",
                "value": 53
              },
              {
                "name": "直播",
                "value": 163
              },
              {
                "name": "广播电台",
                "value": 86
              },
              {
                "name": "戏曲曲艺",
                "value": 17
              },
              {
                "name": "演出票务",
                "value": 6
              },
              {
                "name": "给陌生的你听",
                "value": 1
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
                "value": 353
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
                "value": 43
              },
              {
                "name": "网络奇闻",
                "value": 15
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
                "value": 187
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
                "value": 3
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
              {
                "name": "留学",
                "value": 246
              },
              {
                "name": "K12课程培训",
                "value": 207
              },
              {
                "name": "艺术培训",
                "value": 194
              },
              {
                "name": "技能培训",
                "value": 104
              },
              {
                "name": "IT培训",
                "value": 87
              },
              {
                "name": "高等教育专业",
                "value": 63
              },
              {
                "name": "家教",
                "value": 48
              },
              {
                "name": "体育培训",
                "value": 23
              },
              {
                "name": "职场培训",
                "value": 5
              },
              {
                "name": "金融财经",
                "value": 1328
              },
            ]
          }
        ]
      });
    }
    maskImage.src = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgNTQ4LjE3NiA1NDguMTc2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NDguMTc2IDU0OC4xNzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNTI0LjE4MywyOTcuMDY1Yy0xNS45ODUtMTkuODkzLTM2LjI2NS0zMi42OTEtNjAuODE1LTM4LjM5OWM3LjgxLTExLjk5MywxMS43MDQtMjUuMTI2LDExLjcwNC0zOS4zOTkgICBjMC0yMC4xNzctNy4xMzktMzcuNDAxLTIxLjQwOS01MS42NzhjLTE0LjI3My0xNC4yNzItMzEuNDk4LTIxLjQxMS01MS42NzUtMjEuNDExYy0xOC4yNzEsMC0zNC4wNzEsNS45MDEtNDcuMzksMTcuNzAzICAgYy0xMS4yMjUtMjcuMDI4LTI5LjA3NS00OC45MTctNTMuNTI5LTY1LjY2N2MtMjQuNDYtMTYuNzQ2LTUxLjcyOC0yNS4xMjUtODEuODAyLTI1LjEyNWMtNDAuMzQ5LDAtNzQuODAyLDE0LjI3OS0xMDMuMzUzLDQyLjgzICAgYy0yOC41NTMsMjguNTQ0LTQyLjgyNSw2Mi45OTktNDIuODI1LDEwMy4zNTFjMCwyLjg1NiwwLjE5MSw2Ljk0NSwwLjU3MSwxMi4yNzVjLTIyLjA3OCwxMC4yNzktMzkuODc2LDI1LjgzOC01My4zODksNDYuNjg2ICAgQzYuNzU5LDI5OS4wNjcsMCwzMjIuMDU1LDAsMzQ3LjE4YzAsMzUuMjExLDEyLjUxNyw2NS4zMzMsMzcuNTQ0LDkwLjM1OWMyNS4wMjgsMjUuMDMzLDU1LjE1LDM3LjU0OCw5MC4zNjIsMzcuNTQ4aDMxMC42MzYgICBjMzAuMjU5LDAsNTYuMDk2LTEwLjcxNSw3Ny41MTItMzIuMTIxYzIxLjQxMy0yMS40MTIsMzIuMTIxLTQ3LjI0OSwzMi4xMjEtNzcuNTE1ICAgQzU0OC4xNzIsMzM5Ljc1Nyw1NDAuMTc0LDMxNi45NTIsNTI0LjE4MywyOTcuMDY1eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=';
    const myChart = echarts.init(document.getElementById('wordcloud'));
  }
  render() {
    return (
      <div id="wordcloud" style={{ width: '100%', height: '100%' }}></div>
    );
  }
}

export default WordCloud;