import React, { Component } from 'react';
import style from './Header.css';
import { Icon, Row, Col, Layout } from 'antd';
const { Header } = Layout;

class Headers extends Component{
  constructor(props){
    super(props)
    console.log(props, '头部');
  }
  render(){
    return (
      <Header className={style.header}>
        <Row type='flex' justify='center' align='center'>
          <Col span={8}>
            <div className={style.backAction}>
              <a href="#/user">
                <Icon type='left-circle' style={{fontSize: '18px'}} />
                <span>返回会员中心</span>
              </a>
            </div>
          </Col>
          <Col span={8}>
            <Row type='flex' justify='center' align='center'>
              <Col span={6}>
                <div className={style.modeItem}>
                  <Icon type="check-square-o" style={{fontSize: 18}} />
                  <p>急速模式</p>
                </div>
              </Col>
              <Col span={6}>
                <div className={style.modeItem}>
                  <Icon type="check-square-o" style={{fontSize: 18}} />
                  <p>自由模式</p>
                </div>
              </Col>
              <Col span={6}>
                <div className={style.modeItem}>
                  <Icon type="check-square-o" style={{fontSize: 18}} />
                  <p>专家模式</p>
                </div>
              </Col>
            </Row>
            <div className={style.modeContent}>
              <span></span>
            </div>
          </Col>
          <Col span={8}>
            <div className={style.operaAction}>
              <div className={style.zoom}>
                <div className={style.zoomAction}>
                  <a className={style.zoomMinusAction}>
                    <Icon type="minus" style={{fontSize: 16, fontWeight: 'bold'}} />
                  </a>
                  <span className={style.zoomSearch}>
                    <Icon type="search" style={{fontSize: 16, fontWeight: 'bold'}} />
                  </span>
                  <a className={style.zoomPlusAction}>
                    <Icon type="plus" style={{fontSize: 16, fontWeight: 'bold'}} />
                  </a>
                </div>
                <p className={style.zoomRate}>80%</p>
              </div>
            </div>
          </Col>
        </Row>
      </Header>
    )
  }
}

export default Headers;