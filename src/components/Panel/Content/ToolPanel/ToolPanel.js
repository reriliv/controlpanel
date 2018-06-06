import React, { Component } from 'react';
import { Icon } from 'antd';
import style from './ToolPanel.css';

class ToolPanel extends Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }
  render(){
    return (
      <div>
        <div className={style.toolItem}>
          <a><Icon type=''/><p>文本</p></a>
        </div>
        <div className={style.toolItem}>
          <a><Icon type='picture'/><p>图片</p></a>
        </div>
        <div className={style.toolItem}>
          <a><Icon type=''/><p>背景</p></a>
        </div>
        <div className={style.toolItem}>
          <a><Icon type=''/><p>形状</p></a>
        </div>
        <div className={style.toolItem}>
          <a><Icon type=''/><p>插件</p></a>
        </div>
        <div className={style.toolItem}>
          <a><Icon type='form'/><p>表单</p></a>
        </div>
        <div className={style.toolItem}>
          <a><Icon type=''/><p>特效</p></a>
        </div>
        <div className={style.toolItem}>
          <a><Icon type=''/><p>音乐</p></a>
        </div>
      </div>
    )
  }
};

export default ToolPanel;