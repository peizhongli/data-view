import React from 'react';
// 引入 ECharts 主模块
class WordCloud extends React.Component {
  componentDidMount() {
    var tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag") : getClass("tag")
    var paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0];
    var RADIUS = 140,
      fallLength = 500,
      tags = [],
      angleX = Math.PI / 500,
      angleY = Math.PI / 500,
      CX = paper.offsetWidth / 2,
      CY = paper.offsetHeight / 2,
      EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
      EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;

    function getClass(className) {
      var ele = document.getElementsByTagName("*");
      var classEle = [];
      for (var i = 0; i < ele.length; i++) {
        var cn = ele[i].className;
        if (cn === className) {
          classEle.push(ele[i]);
        }
      }
      return classEle;
    }

    function innit() {
      const colors = ['rgba(0,236,255,0.8)', '#00ECFF', 'rgba(0,236,255,0.9)', '#00ECFF', '#00ECFF', 'rgba(255,255,255,0.9)', '#fff', '#fff', '#fff', 'rgba(255,255,255,0.8)'];
      for (var i = 0; i < tagEle.length; i++) {
        var a, b;
        var k = -1 + (2 * (i + 1) - 1) / tagEle.length;
        var a = Math.acos(k);
        var b = a * Math.sqrt(tagEle.length * Math.PI);
        var x = RADIUS * 1.15* Math.sin(a) * Math.cos(b);
        var y = RADIUS * Math.sin(a) * Math.sin(b);
        var z = RADIUS * Math.cos(a);
        var t = new tag(tagEle[i], x, y, z);
        tagEle[i].style.color = colors[parseInt(Math.random() * 10)];
        tags.push(t);
        t.move();
      }
    }

    Array.prototype.forEach = function (callback) {
      for (var i = 0; i < this.length; i++) {
        callback.call(this[i]);
      }
    }

    function animate() {
      rotateX();
      rotateY();
      tags.forEach(function () {
        this.move();
      });

      requestAnimationFrame(animate);
    }

    // if ("addEventListener" in window) {
    //   paper.addEventListener("mousemove", function(event) {
    //     var x = event.clientX - EX - CX;
    //     var y = event.clientY - EY - CY;
    //     angleY = x * 0.0001;
    //     angleX = y * 0.0001;
    //   });
    // }
    // else {
    //   paper.attachEvent("onmousemove", function(event) {
    //     var x = event.clientX - EX - CX;
    //     var y = event.clientY - EY - CY;
    //     angleY = x * 0.0001;
    //     angleX = y * 0.0001;
    //   });
    // }

    function rotateX() {
      var cos = Math.cos(angleX);
      var sin = Math.sin(angleX);
      tags.forEach(function () {
        var y1 = this.y * cos - this.z * sin;
        var z1 = this.z * cos + this.y * sin;
        this.y = y1;
        this.z = z1;
      })

    }

    function rotateY() {
      var cos = Math.cos(angleY);
      var sin = Math.sin(angleY);
      tags.forEach(function () {
        var x1 = this.x * cos - this.z * sin;
        var z1 = this.z * cos + this.x * sin;
        this.x = x1;
        this.z = z1;
      })
    }

    var tag = function (ele, x, y, z) {
      this.ele = ele;
      this.x = x;
      this.y = y;
      this.z = z;
    }

    tag.prototype = {
      move: function () {
        var scale = fallLength / (fallLength - this.z);
        var alpha = (this.z + RADIUS) / (2 * RADIUS);
        var left = this.x + CX - this.ele.offsetWidth / 2 + "px";
        var top = this.y + CY - this.ele.offsetHeight / 2 + "px";
        var transform = 'translate(' + left + ', ' + top + ') scale(' + scale + ')';
        this.ele.style.opacity = alpha + 0.1;
        this.ele.style.zIndex = parseInt(scale * 100);
        this.ele.style.transform = transform;
        this.ele.style.webkitTransform = transform;
      }
    }
    innit();
    animate();
  }
  render() {
    return (
      <ul className="tagBall">
        <li className="tag">
          <span>主机</span>
          <p className="value-tag">主机：320000</p>
        </li>
        <li className="tag"><span>笔记本</span>
          <p className="value-tag">笔记本：320000</p></li>
        <li className="tag"><span>系统</span>
          <p className="value-tag">系统：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>
          <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
        <li className="tag"><span>主机</span>           <p className="value-tag">主机：320000</p></li>
      </ul>
    );
  }
}

export default WordCloud;