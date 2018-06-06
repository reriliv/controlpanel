import React, { Component } from 'react';
import style from './DividingRule.css';
import DividingItem from './DividingItem';

const getContentWidth = () => {
  const screenInnerWidth = window.innerWidth;
  console.log(screenInnerWidth - 60 -270, 'Rule');
};

class DividingRule extends Component{
  constructor(props){
    super(props);
  }
  handleDrag(event){
    console.log(event);
    // 
  }
  render(){
    const [width, ruleClass] = [getContentWidth(), this.props.className + ' rule'];
    return (
      <div className={ruleClass} style={{width: width+'px'}}>
        {
          <DividingItem />
        }
      </div>
    );
  }
};

export default DividingRule;