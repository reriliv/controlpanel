import React, { Component } from 'react';
import { Layout } from 'antd';
// import style from './Panel.css';
import Header from './Header/Header';
import Content from './Content/Content';

class Panel extends Component{
  constructor(props){
    super(props);
    console.log(props);
  }
  handleDrop(event){
    event.preventDefault();
  }
  render(){
    return (
      <Layout style={this.props.style}>
        <Header headerProps={this.props.headerProps} />
        <Content
          toolbarProps={this.props.toolbarProps}
          pagesControlProps={this.props.pagesControlProps}
          wordsSettingProps={this.props.wordsSettingProps}
          componentsSettingProps={this.props.componentsSettingProps}
          dispatch={this.props.dispatch}
        />
      </Layout>
    )
  }
};

export default Panel;