import React, { Component } from 'react';
import { Icon, Input, InputNumber, Select, Slider, Row, Col, Radio } from 'antd';
import style from './TextPanel.css';
import iconFont from '../../../../assets/iconfonts/iconfont.css';
const RadioGroup = Radio.Group;
const Option = Select.Option;

const redirectOptions = ['textPages', 'textPhones'];

const hideRedirectItem = () => {
  redirectOptions.map(key => {
    const child = document.querySelector(`#${key}`);
    console.log(child);
    child.style.display = 'none';
  });
};

const showRedirectItem = (index) => {
  console.log(index);
  hideRedirectItem();
  console.log(redirectOptions);
  const selector = redirectOptions[index];
  console.log(selector);
  document.querySelector(`#${selector}`).style.display = 'flex';
};

class TextPanel extends Component{
  sliderLineHeightNumber = 1.5;
  sliderLetterSpaceNumber = 1.5;
  inputLineHeightNumber = 1.5;
  inputLetterSpaceNumber = 1.5;
  constructor(props){
    super(props);
    console.log(props, 'TextPanel');
  }
  closePanelAction(e){
    console.log(e.currentTarget);
    document.querySelector('#text').style.display = 'none';
  }
  changeModeAction(e){
    const _target = e.currentTarget;
    console.log(_target);
    const modeList = document.querySelector('#mode').querySelectorAll('a');
    for(let child of modeList){
      child.className = style['text-item'];
    }
    _target.className = style['text-item'] + ' ' + style['actived-item'];
  }
  selectOptions(e){
    console.log(e);
    const _index = e.target.value - 1;
    console.log(_index);
    _index >= 0 ? showRedirectItem(_index) : hideRedirectItem();
  }
  toggalExteriorPanel(e){
    const currentTarget = e.currentTarget;
    const selector = `.${style['panel-content']}`;
    console.log(selector);
    const _target = document.querySelector(selector);
    const _display = _target.style.display;
    console.log(_display === 'none');
    const icon = currentTarget.querySelector('i');
    console.log(icon);
    icon.className = _display === 'none' ? 'anticon anticon-caret-down' : 'anticon anticon-caret-right'
    console.log(icon);
    _target.style.display = _display === 'none' ? 'block' : 'none';
  }
  render(){
    const _func = this.props.func;
    const _props = this.props.textProps;
    // console.log(_func);
    return (
      <div
        id='text'
        className={style['operation-panel']}
        style={{zIndex: 1000, left: '0px', top: '0px'}}
      >

        <div className={style['operation-panel-head']}>
          <Row type='flex' justify='space-between' align='center'>
            <Col span={8}><div className={style['panel-head-title']}>文字设置</div></Col>
            <Col span={4}><div className={style['close-action']} onClick={(e) => this.closePanelAction(e)}><Icon type='close'/></div></Col>
          </Row>
        </div>

        <div className={style['operation-panel-content']}>

          <Row id='mode' className={style['panel-item']} style={{marginTop: '0px'}} type='flex' justify='space-between' align='center'>
            <Col span={10}><a className={style['text-item']+' '+style['actived-item']} onClick={(e) => this.changeModeAction(e)}>样式</a></Col>
            <Col span={10}><a className={style['text-item']} onClick={(e) => this.changeModeAction(e)}>动画</a></Col>
          </Row>

          <div className={style['panel-item']}>
            <Input placeholder='文字1' defaultValue='文字1' />
          </div>

          <div className={style['panel-item']}>
            <Input.TextArea autosize={{minRows: 4, maxRows: 4}} defaultValue='新婚快乐' />
          </div>

          <div className={style['panel-item']}>
            <span className={style['item-title']}>字体</span>
            <Select defaultValue='default' className={style['text-font-selector']}>
              <Option value='default'> 默认字体 </Option>
              <Option value='MicroSoft YaHei'> 微软雅黑 </Option>
              <Option value='Bold'> 黑体 </Option>
              <Option value='Song'> 宋体 </Option>
            </Select>
          </div>

          <div className={style['panel-item']}>
            <span className={style['item-title']}>字号</span>
            <div className={style['text-number-action']}>
              <Select defaultValue='14' className={style['text-number-selector']}>
                <Option value='14'> 14px </Option>
                <Option value='15'> 15px </Option>
                <Option value='16'> 16px </Option>
                <Option value='17'> 17px </Option>
                <Option value='18'> 18px </Option>
                <Option value='19'> 19px </Option>
              </Select>
              <div className={style['action-plus-minus']}>
                <a className={style['text-number-plus']}>A+</a>
                <a className={style['text-number-minus']}>A-</a>
              </div>
            </div>
          </div>

          <div className={style['panel-item']}>
            <div className={style['font-style-action']+' '+ iconFont.iconfont +' '+iconFont.iconZuoduiqi}></div>
            <div className={style['font-style-action']+' '+ iconFont.iconfont +' '+iconFont.iconJuzhong}></div>
            <div className={style['font-style-action']+' '+ iconFont.iconfont +' '+iconFont.iconYouduiqi}></div>
            <div className={style['font-style-action']+' '+ iconFont.iconfont +' '+iconFont.iconBold}></div>
            <div className={style['font-style-action']+' '+ iconFont.iconfont +' '+iconFont.iconXietiim}></div>
            <div className={style['font-style-action']+' '+ iconFont.iconfont +' '+iconFont.iconUnderline}></div>
            <div className={style['font-style-action']+' '+ iconFont.iconfont +' '+iconFont.iconQingchu}></div>
          </div>

          <div className={style['panel-item']}>
            <span className={style['item-title']}>文字颜色</span>
            <div className={style['font-color-list']}>
              <div id='#font' className={style['font-color-panel']+' '+style['color-blue']}></div>
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
            <span className={style['item-title']}>行高</span>
            <div className={style['adjust-action']}>
              <div className={style['inner-height-selector']}>
                <Slider
                  defaultValue={_props.defaultValue}
                  value={_props.lineHeight}
                  max={3}
                  min={0}
                  step={0.1}
                  onChange={(value) => _func.changeLineHeight(value)}
                />
              </div>
              <div className={style['inner-height-input']}>
                <InputNumber
                  max={3}
                  min={0}
                  step={0.1}
                  defaultValue={_props.defaultValue}
                  value={_props.lineHeight}
                  onChange={(value) => _func.changeLineHeight(value)}
                />
              </div>
            </div>
          </div>

          <div className={style['panel-item']}>
            <span className={style['item-title']}>字距</span>
            <div className={style['adjust-action']}>
              <div className={style['text-letterSpace-selector']}>
                <Slider
                  defaultValue={_props.letterSpace}
                  value={_props.letterSpace}
                  max={3}
                  min={0}
                  step={0.1}
                  onChange={(number) => _func.changeLetterSpace(number)}
                />
              </div>
              <div className={style['text-letterSpace-input']}>
                <InputNumber
                  max={3}
                  min={0}
                  step={0.1}
                  defaultValue={1.5}
                  value={this.inputLetterSpaceNumber}
                  onChange={(number) => _func.changeLetterSpace(number)}
                />
              </div>
            </div>
          </div>

          <div className={style['panel-item']}>
            <span className={style['line']}></span>
            <span className={style['title']}>功能设置</span>
            <span className={style['line']}></span>
          </div>

          <div className={style['panel-item']} style={{alignItems: 'flex-start'}}>
            <span className={style['item-title']}>点击跳转</span>
            <RadioGroup className={style['redirect-list']} defaultValue={0} onChange={(e) => this.selectOptions(e)}>
              <Radio className={style['redirect-item']} value={0}>无</Radio>
              <Radio className={style['redirect-item']} value={1}>页面</Radio>
              <Radio className={style['redirect-item']} value={2}>电话</Radio>
            </RadioGroup>
          </div>

          <div id='textPages' className={style['panel-item']} style={{display: 'none'}}>
            <span className={style['item-title']}>场景页面</span>
            <Select className={style['redirect-pages']} defaultValue={0}>
              <Option value={0}>选择要跳转的页面</Option>
              <Option value={1}>01</Option>
              <Option value={2}>02</Option>
            </Select>
          </div>

          <div id='textPhones' className={style['panel-item']} style={{display: 'none'}}>
            <span className={style['item-title']}>电话号码</span>
            <Input className={style['phone-number']} placeholder='020-77779999' />
          </div>

          <div className={style['exterior-panel']} onClick={this.toggalExteriorPanel}>
            <div className={style['exterior-title']}>
              <span className={style['item-title']}>外观</span>
              <Icon type="caret-right" style={{fontSize: '12px'}} />
            </div>
            <div className={style['panel-content']} style={{display: 'none'}}></div>
          </div>

        </div>

      </div>
    );
  }
};

export default TextPanel;