import React, { Component } from 'react';
import { Row, Col, Radio, Checkbox, Icon, Select, Input, Slider, InputNumber } from 'antd';
import style from './ComponentsPanel.css';
const [RadioGroup, CheckboxGroup, Option] = [Radio.Group, Checkbox.Group, Select.Option];

const imageActionOptions = ['上下', '左右'];
/*let [flag, componentPosition, poorValue] = [false, {x: 0, y: 0}, {x: 0, y: 0}];

const isMoveArea = (e) => {
  const _target = e.currentTarget;
  let flag = false;
  const [topLeftX, topLeftY] = [document.body.offsetWidth - 60 - 270 - 300, _target.clientTop];
  console.log(topLeftX, topLeftY, '左上角点');
  const [bottomRightX, bottomRightY] = [topLeftX + 300, topLeftY + 50];
  console.log(bottomRightX, bottomRightY, '右下角点');
  const [mousePositionX, mousePositionY] = [e.clientX - 60, e.clientY - 70];
  console.log(mousePositionX, mousePositionY, '鼠标位置');
  flag = mousePositionX >= topLeftX ? true : false;
  flag = mousePositionX <= bottomRightX ? true : false;
  flag = mousePositionY >= topLeftY ? true : false;
  flag = mousePositionY <= bottomRightY ? true : false;
  console.log(mousePositionX >= topLeftX, mousePositionX <= bottomRightX, mousePositionY >= topLeftY, mousePositionY <= bottomRightY);
  return  flag;
};*/

class ComponentsPanel extends Component{
  currentZIndex = 0;
  constructor(props){
    super(props);
    console.log(this.props);
  }
  closePanelAction(){
    const _content = document.querySelector('#component');
    _content.style.display = 'none';
  }
  changeModeAction(e){
    console.log(e);
  }
  componentWillMount(){
    this.currentZIndex = this.props.zIndex;
  }
  showExterior(e){
    const _target = e.currentTarget;
    console.log(_target);
    const [_content, _icon] = [_target.parentNode.querySelector(`.${style['exterior-content']}`), _target.querySelector('i')];
    console.log(_content, _icon);
    const _display = _content.style.display === 'none' || _content.style.display == '' ? 'block' : 'none';
    _icon.className = _content.style.display === 'none' || _content.style.display == '' ? 'anticon anticon-caret-down' : 'anticon anticon-caret-right';
    _content.style.display = _display;
  }
  render(){
    return (
      <div
        id='component'
        className={style['operation-panel']}
        style={{left: '800px', top: '0px', zIndex: 1000}}
      >

        <div className={style['operation-panel-head']} >
          <Row type='flex' justify='space-between' align='center'>
            <Col span={8}><div className={style['panel-head-title']}>文字设置</div></Col>
            <Col span={4}><div className={style['close-action']} onClick={(e) => this.closePanelAction()}><Icon type='close'/></div></Col>
          </Row>
        </div>

        <div className={style['operation-scroll-content']}>
          <div className={style['operation-panel-content']}>

            <Row id='mode' className={style['panel-item']} style={{marginTop: '0px'}} type='flex' justify='space-between' align='center'>
              <Col span={10}><a className={style['text-item']+' '+style['actived-item']} onClick={(e) => this.changeModeAction(e)}>样式</a></Col>
              <Col span={10}><a className={style['text-item']} onClick={(e) => this.changeModeAction(e)}>动画</a></Col>
            </Row>

            <div className={style['panel-item']}>
              <Input placeholder='图片1' defaultValue='图片1' />
            </div>

            <div className={style['panel-item']}>
              <div className={style['image-show-area']}>
                <img src='' alt='展示图片'/>
              </div>
            </div>

            <div className={style['panel-item']}>
              <a className={style['image-actioni-tem']}>裁剪图片</a>
              <a className={style['image-actioni-tem']}>更换图片</a>
            </div>

            <div className={style['panel-item']}>
              <span className={style['item-title']}>图片翻转</span>
              <CheckboxGroup options={imageActionOptions} />
            </div>

            <div className={style['panel-item']}>
              <span className={style.line}></span>
              <span className={style.title}>功能设置</span>
              <span className={style.line}></span>
            </div>

            <div className={style['panel-item']} style={{alignItems: 'flex-start'}}>
              <span className={style['item-title']}>点击跳转</span>
              <RadioGroup className={style['redirect-list']} defaultValue={0}>
                <Radio className={style['redirect-item']} value={0}>无</Radio>
                <Radio className={style['redirect-item']} value={1}>页面</Radio>
                <Radio className={style['redirect-item']} value={2}>电话</Radio>
              </RadioGroup>
            </div>

            <div className={style['panel-item']}>
              <span className={style['item-title']}>场景页面</span>
              <Select className={style['redirect-pages']} defaultValue={0}>
                <Option value={0}>选择要跳转的页面</Option>
                <Option value={1}>01</Option>
                <Option value={2}>02</Option>
              </Select>
            </div>

            <div className={style['panel-item']}>
              <span className={style['item-title']}>电话号码</span>
              <Input className={style['phone-number']} placeholder='020-77779999' />
            </div>

            <div className={style['exterior-panel']}>
              <div className={style['exterior-action']} onClick={(e) => this.showExterior(e)}>
                <span className={style['item-title']}>外观</span>
                <Icon type="caret-right" style={{fontSize: '12px'}} />
              </div>
              <div className={style['exterior-content']}>

                <div className={style['control-position-list']}>
                  <div className={style['control-position-item']}>
                    <Icon />
                  </div>
                </div>

                <div className={style['panel-item']}>
                  <span className={style['item-title']}>背景颜色</span>
                  <div className={style['font-color-list']}>
                    <div id='#background' className={style['font-color-panel']+' '+style['color-verdancy']}></div>
                    <div className={style['color-selector']}>
                      <div className={style['color-white']}></div>
                      <div className={style['color-orange']}></div>
                      <div className={style['color-brown']}></div>
                      <div className={style['color-yellow']}></div>
                      <div className={style['color-verdancy']}></div>
                      <div className={style['color-blue']}></div>
                      <div className={style['color-deongaree']}></div>
                      <div className={style['color-purple']}></div>
                      <div className={style['color-gray']}></div>
                      <div className={style['color-black']}></div>
                    </div>
                  </div>
                </div>

                <div className={style['panel-item']}>
                  <span className={style['item-title']}>旋转</span>
                  <div className={style['adjust-action']}>
                    <div className={style['inner-height-selector']}>
                      <Slider
                        defaultValue={15}
                        // value={this.sliderLineHeightNumber}
                        max={100}
                        min={0}
                        step={1}
                        // onChange={(number) => this.changeInputLineHeight(number)}
                      />
                    </div>
                    <div className={style['inner-height-input']}>
                      <InputNumber
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={15}
                        // value={this.inputLineHeightNumber}
                        // onChange={(value) => this.changeSliderLineHeight(value)}
                      />
                    </div>
                  </div>
                </div>

                <div className={style['panel-item']}>
                  <span className={style['item-title']}>透明度</span>
                  <div className={style['adjust-action']}>
                    <div className={style['inner-height-selector']}>
                      <Slider
                        defaultValue={15}
                        // value={this.sliderLineHeightNumber}
                        max={100}
                        min={0}
                        step={1}
                        // onChange={(number) => this.changeInputLineHeight(number)}
                      />
                    </div>
                    <div className={style['inner-height-input']}>
                      <InputNumber
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={15}
                        formatter={value => `${value}%`}
                        parser={value => value.replace('%', '')}
                        // value={this.inputLineHeightNumber}
                        // onChange={(value) => this.changeSliderLineHeight(value)}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
};

export default ComponentsPanel;