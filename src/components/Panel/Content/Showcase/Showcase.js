import React, {Component} from 'react';
import style from './Showcase.css';

class Showcase extends Component{
	render(){
    return (
      // <span>展示台</span>
      <div className={style['show-case']}></div>
    )
  }
};

export default Showcase;