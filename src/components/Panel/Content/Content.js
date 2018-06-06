import React, { Component } from 'react';
import { Layout } from 'antd';
import style from './Content.css';
// import Rule from './DividingRule/DividingRule';
import ToolPanel from './ToolPanel/ToolPanel';
import PagesPanel from './PagesPanel/PagesPanel';
import TextPanel from './TextPanel/TextPanel';
import ComponentsPanel from './ComponentsPanel/ComponentsPanel';
import Showcase from './Showcase/Showcase';
import Move from './move';
const { Content, Sider } = Layout;

let innerHeight = window.innerHeight;

const setContentHeight = (height) => {
  return height + 'px';
};

let [textIndex, componentIndex] = [1000, 1000];

/*window.onresize = () => {
  console.log('resize');
  innerHeight = window.innerHeight - 70;
  let heightText = setContentHeight(innerHeight);
  document.querySelector('#content').style.height = heightText;
}*/

let [defaultValue, lineHeight, letterSpace] = [1.5, 1.5, 1.5];

let textProps = {
  default: defaultValue,
  lineHeight: lineHeight,
  letterSpace: letterSpace
};

const changeLineHeight = (value) => {
  console.log(value);
  lineHeight = value;
};

const changeLetterSpace = (value) => {
  console.log(value);
  letterSpace = value;
};

const _func = {
  changeLineHeight: changeLineHeight,
  changeLetterSpace: changeLetterSpace
};

class Contents extends Component{

	constructor(props){
		super(props);
    console.log(props, '正文');
	}
  componentWillMount(){
    // console.log('即将渲染');
  }
  componentDidMount(){
    // console.log('渲染结束');
    Move('#content');
  }
  render(){
    // const _func = this.props.wordsSettingProps.func;
    // console.log(this.textPosition, this.componentPosition);
    return (
      <Layout id='content' style={{height: setContentHeight(innerHeight - 70)}}>
        <Sider className={style.toolsPanel}>
          <ToolPanel />
        </Sider>
        <Content className={style.content}>
          <TextPanel zIndex={textIndex} func={_func} textProps={textProps} />
          <Showcase/>
          <ComponentsPanel zIndex={componentIndex} />
        </Content>
        <Sider className={style.pagesControl}>
          <PagesPanel />
        </Sider>
      </Layout>
    )
  }
};

export default Contents;