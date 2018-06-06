import React, { Component } from 'react';
import { Icon } from 'antd';
import style from './DragPanel.css';

class DragPanel extends Component{
  constructor(props){
    super(props);
  }
  handleDrag(event){
    console.log(event);
    // 
  }
  render(){
    return (
      <div className={style.dragPanel}>
        <div className={style.panelHead}>
          <span className={style.headTitle}>{this.props.title}</span>
          <span className={style.headClose} onClick={() => this.props.onClick()}>
            <Icon type="close" />
          </span>
        </div>
        <div className={style.dragContent}>
          {}
        </div>
      </div>
    )
  }
};

export default DragPanel;