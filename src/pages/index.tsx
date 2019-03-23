import React from 'react';
// import styles from './index.css';

export default function() {
  return (
    <div>
      <div className="nav-container">
        <div className="nav">
            <a href="/"><img className="index-logo" src={require("../assets/logo.png")} /></a>

            <div className="phone-box">
                <ul className="tel">
                    <li>固定电话：0757-22115439</li>
                    <li>QQ/wechat：2977703246</li>
                </ul>
            </div>
        </div>
      </div>

      <div className="video-container">
          <div className="video-mask"></div>
          <img className="video" src={require("../assets/00F03CBAC421A0439B59B2102F7F6569.jpg")} />
          <div className="video-desc">
              <div className="container">
                  <div className="row">
                      <div className="col-md-3"></div>
                      <div className="col-md-6 heading">国际先进儿童早期教育理念</div>
                      <div className="col-md-3"></div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          <p className="intro">
                          贝尔乐早教中心创办于2013年，以立足家庭教育，采用现代育儿的最新理念，融合东西方文化之优点，传播正确的育儿观和家庭早期教育的科学知识和方法，帮助家长逐步接受现代育儿的科学理念，掌握现代育儿的科学方法和技巧，使婴幼儿从出生起就步入健康成长的轨道。
                          </p>    
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                          <a href="#contact">
                              <div className="ex-class" ng-click="auditions()">预约试听</div>
                          </a>
                      </div>
                      <div className="col-md-6">
                          <a href="#contact" ng-click="join()">
                              <div className="join">加盟我们</div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div id="contact" className="bottom clearfix">
          <div className="bottom-container">
              <div className="bottom-left">
                  <p className="font-0">BEL FAMILY CLUB</p>
                  <p className="font-1">地&nbsp;&nbsp;址 : 佛山市顺德区乐从镇威斯广场步行街二层怡景轩201号铺</p>
                  <p className="font-2">联系电话：0757-22115439</p>
                  <p className="font-2">电子邮箱：kf@bel.org.cn</p>
                  <p className="foot-2">版权所有：佛山市亲贝文化艺术有限公司</p>
              </div>
              <div className="bottom-right">
                  <img style={{width: '150px'}} src={require("../assets/qrcode.jpg")} alt="" />
              </div>
          </div>
      </div>

      <div className="footer">
        COPYRIGHT © 2013-2019 贝尔乐早教 ALL RESERVED
        <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备16025303号-1</a>
      </div>
      </div>
  );
}
