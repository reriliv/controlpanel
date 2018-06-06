import React, {Component} from 'react';
import style from './Slider.css';

const initialProps = () => {
  const defaultProps = {
    max: 10,
    min: 0,
    step: 1,
    defaultValue: 0,
  };
  return defaultProps;
};

const parseProps = (props) => {
  const _props = props ? props : initialProps();
  console.log(_props);
  // _props.length ? console.log('有配置') : 
  const [lineListLength, lineItemLength] = [_props.max/_props.step, _props.step];

  return (
    <div className={style['xtb-slider-content']}>
      <div className={style['xtb-slider']}>
        <div className={style['xtb-progress-panel']}>
          <span>1.5</span>
        </div>
        <div className={style['xtb-slider-line']} style={{width: _props.max}}></div>
        <div className={style['xtb-slider-ball']} onMouseOver={(e) => showProgress(e)} onMouseOut={(e) => hideProgress(e)}>
          <span className={style['xtb-slider-ball-dot']}></span>
        </div>
      </div>
    </div>
  );
};

const disabledSelectText = (selector) => {
  const _dom = document.querySelector(selector);
  _dom.onmousedown = function(){
    return false;
  }
};

const hover = () => {
  console.log(this, '浮在上面');
  /*const _selector = document.querySelector(selector);
  console.log(_selector);
  _selector.onmouseover = function(){
    // console.log(this);
    showProgress();
  }
  _selector.onmouseout = function(){
    console.log(this);
  }*/
};

const showProgress = (e) => {
  console.log('show');
  const _dom = e.currentTarget;
  // console.log(_dom);
  const _progress = _dom.parentNode.querySelector(`.${style['xtb-progress-panel']}`);
  // console.log(_progress);
  _progress.style.display = 'block';
};

const hideProgress = (e) => {
  console.log('hide');
  const _dom = e.currentTarget;
  // console.log(_dom);
  const _progress = _dom.parentNode.querySelector(`.${style['xtb-progress-panel']}`);
  // console.log(_progress);
  _progress.style.display = 'none';
};

class Slider extends Component{
  dom = '';
  componentWillMount(){
    // this.dom = parseProps(this.props);
  }
  componentDidMount(){
    disabledSelectText(`.${style['xtb-slider-content']}`);
    // hover(`.${style['xtb-slider-ball']}`);
  }
  render(){
    return (
      // this.dom
      parseProps(this.props)
    );
  }
};

export default Slider;