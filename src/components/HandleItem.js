import React, { Component } from 'react';
import { Divider } from 'antd';

class HandleItem extends Component{
  constructor(props){
    super(props);
    console.log(props, 'handleitem');
  }
  render(){
    if (this.props.style) {
      return(
        <div
          className={this.props.className}
          >
          <Divider type='vertical' style={this.props.style}/>
          <span>{this.props.title}</span>
        </div>
      );
    }else{
      return (
        <div
          className={this.props.className}
          >
          <Divider type='vertical'/>
          <span>{this.props.title}</span>
        </div>
      );
    }
  }
};

export default HandleItem;