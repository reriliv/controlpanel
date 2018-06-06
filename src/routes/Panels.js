import React from 'react';
import { connect } from 'dva';
import OperationPanel from '../components/OperationPanel';
import style from './Panels.css';

// console.log(HandleItem);

const Panels = ({dispatch}) => {
  function onClick(event){
    dispatch({
      type: 'panels/opera',
      payload: {e: event}
    })
  }
  function MouseDonw(event){
    console.log(event.clientX, event.clientY, '鼠标按下')
    dispatch({
      type: 'panels/mouse',
      payload: {
        x: event.clientX,
        y: event.clientY,
        mouse: 'down'
      }
    })
  }
  function MouseUp(event){
    console.log(event.clientX, event.clientY, '鼠标松开')
    dispatch({
      type: 'panels/mouse',
      payload: {
        x: event.clientX,
        y: event.clientY,
        mouse: 'down'
      }
    })
  }
  console.log(MouseDonw, MouseUp, 'route');
  return (
    <OperationPanel onClick={onClick} className={style.operaPanel}>
      <span className={style.movePoint} title='123'></span>
      <span className={style.movePoint} title='456'></span>
      <span className={style.movePoint} title='789'></span>
      <span className={style.movePoint} title='987'></span>
      <span className={style.movePoint} title='654'></span>
      <span className={style.movePoint} title='321'></span>
    </OperationPanel>
  )
};

export default connect()(Panels);