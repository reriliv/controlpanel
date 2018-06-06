import React from 'react';
import { connect } from 'dva';
import Divider from '../components/DividingRule';
import style from './DividingRule.css';

const DividingRule = ({dispatch, dividingRule}) => {
  // console.log(dividingRule, 'routes');
  function handleClick(){
    console.log('dispatch');
    dispatch({
      type: 'dividingRule/click',
    })
  }
  let list = [];
  /*dividingRule.length.map(number => {
    console.log(number);
  });*/
  console.log(dividingRule.length%100);
  const dividerLength = dividingRule.length/100;
  for(let i = 0; i <= dividerLength; i++){
    // if (i === 0 || dividingRule.length%(i*100) === 0) {
      list.push(i*100);
    // }
  }
  console.log(list);
  /*for (let i = 0; i < dividingRule.length; i++) {
    list.push({child: <span>{i}</span>});
  }
  console.log(list, 17);*/
  return (
    <Divider onClick={handleClick} divider={dividingRule}>
      {
        list.map((number) => {
          return (
            <span className={style.spanName} key={number}>{number}</span>
          )
        })
      }
    </Divider>
  )
};

export default connect(({ dividingRule }) => ({
  dividingRule
}))(DividingRule);