import React from 'react';
import PanelComponent from '../../components/Panel/OperationPanel';
import { connect } from 'dva';

const Panel = ({dispatch}) => {

  function turboModeAction(){
    console.log('急速模式');
  }

  function freeModeAction(){
    console.log('自由模式');
  }

  function expertModeAction(){
    console.log('专家模式');
  }

  const headerProps = {
    backUrl: '/user',
    backText: '返回会员中心',
    mode: [
      {icon: '', name: '急速模式', func: turboModeAction},
      {icon: '', name: '自由模式', func: freeModeAction},
      {icon: '', name: '专家模式', func: expertModeAction},
    ],
  };

  const toolbarProps = {
    toolList: [
      {icon: '', name: '文本'},
      {icon: 'picture', name: '图片'},
      {icon: '', name: '背景'},
      {icon: '', name: '形状'},
      {icon: '', name: '插件'},
      {icon: 'form', name: '表单'},
      {icon: '', name: '特效'},
      {icon: '', name: '音乐'},
    ]
  };

  const pagesControlProps = {};

  const componentsSettingProps = {};

  return (
    <div>
      <PanelComponent
        headerProps={headerProps}
        toolbarProps={toolbarProps}
        pagesControlProps={pagesControlProps}
        componentsSettingProps={componentsSettingProps}
        dispatch={dispatch}
      />
    </div>
  )
}

export default connect()(Panel);