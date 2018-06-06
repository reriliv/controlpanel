import React, { Component } from 'react';
import HandleItem from './HandleItem';

const getClientHeight = () => {
  console.log(window.innerWidth, window.innerHeight);
  const clientHeight = window.innerHeight;
  return clientHeight;
}

class OperationPanel extends Component{
  constructor(props){
    super(props);
    console.log(this.props, 'components');
  }
  render(){
    let height = getClientHeight();
    console.log(height);
    React.Children.map(this.props.children, (child) => {
      console.log(child);
    });
    return (
      <div className={this.props.className} onClick={(e) => this.props.onClick(e)}>
        {
          React.Children.map(this.props.children, (child, key) => {
            console.log(child.props, 'child')
            if (!key || key%10 === 0) {
              // 段头
              return(
                <HandleItem
                  title={child.props.title}
                  className={child.props.className}
                  style={{height: '100% !important',}}
                />
              )
            }
              return(
                <HandleItem
                  title={child.props.title}
                  className={child.props.className}
                />
              )
          })
        }
      </div>
    )
  }
};

export default OperationPanel;