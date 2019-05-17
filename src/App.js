import React from 'react';
import PieChart from './Echarts/PieChart'
import BarChart from './Echarts/BarChart'
import Progress from './Echarts/Progress'
import WordCloud from './Echarts/3dwordcloud'
// import WordCloud from './Echarts/WordCloud'
import MapChart from './Echarts/MapChart'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1 className="title huge">机器人服务大数据</h1>
      <div className="flex-wrap">
        <div>
          <div className="flex-wrap">
            <div className="wrap-27">
              <section className="real-time">
                <p className="title">机器人实时累计数据</p>
                <div className="flex-wrap">
                  <section className="number-wrap">
                    <p>业务量</p>
                    <div className="number-group">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                    </div>
                  </section>
                  <section className="number-wrap">
                    <p>数据量</p>
                    <div className="number-group">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                    </div>
                  </section>
                </div>
              </section>
              <section className="pie-wrap">
                <p className="title">机器人业务量渠道占比及质量数据</p>
                <div className="piechart"><PieChart /></div>
                <section className="channel-wrap">
                  <div className="channel">
                    <p className="subtitle">桌面网站</p>
                    <div className="channel-box">
                      <p>解决率<span>22.1%</span></p>
                      <p>解决率<span>22.1%</span></p>
                    </div>
                  </div>
                  <div className="channel">
                    <p className="subtitle">桌面网站</p>
                    <div className="channel-box">
                      <p>解决率<span>22.1%</span></p>
                      <p>解决率<span>22.1%</span></p>
                    </div>
                  </div>
                  <div className="channel">
                    <p className="subtitle">桌面网站</p>
                    <div className="channel-box">
                      <p>解决率<span>22.1%</span></p>
                      <p>解决率<span>22.1%</span></p>
                    </div>
                  </div>
                  <div className="channel">
                    <p className="subtitle">桌面网站</p>
                    <div className="channel-box">
                      <p>解决率<span>22.1%</span></p>
                      <p>解决率<span>22.1%</span></p>
                    </div>
                  </div>
                </section>
              </section>
            </div>
            <section className="map-wrap wrap-30">
              <MapChart />
            </section>
          </div>
          <section className="bar-wrap">
            <p className="title">机器人业务量渠道占比及质量数据</p>
            <div className="barchart"><BarChart /></div>
          </section>
        </div>
        <div className="wrap-27">
          <section className="progress-wrap">
            <p className="title">机器人TOP10问题排名</p>
            <div className="progress"><Progress /></div>
          </section><section className="word-cloud-wrap">
            <p className="title">机器人TOP50词云</p>
            <div className="wordcloud"><WordCloud /></div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App;
