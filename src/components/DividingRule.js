import React, { Component } from 'react';
import { Popconfirm, Divider } from 'antd';

class Dividers extends Component{
  render(){
    // console.log('render', 12);
    // console.log(React.Children, 13);
      return (
        <div>
          {
            React.Children.map(this.props.children, (child) => {
              return (
                <Popconfirm>
                  <Divider type={this.props.divider.typeName} />
                  {child}
                </Popconfirm>
              );
            })
          }
        </div>
    );
  }
};

export default Dividers;