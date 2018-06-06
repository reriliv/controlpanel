import React, { Component } from 'react';
import { Icon, Divider, Button, List } from 'antd';
import style from './PagesPanel.css';
const Item = List.Item;
let innerHeight = window.innerHeight - 170;

class PagesPanel extends Component{
  loading = true;
  pageUp(e){
    console.log(e);
  }
  addPage(){
    console.log('添加一页');
  }
  copyPage(){
    console.log('复制一页');
  }
  delPage(){
    console.log('删除一页');
  }
  componentDidMount(){
    const list = document.querySelector('#pagesPanel');
    console.log(list);
    this.loading = false;
  }
  render(){
    return (
      <div className={style.pagesPanel}>
        <div className={style.pagesHead}>
          <div className={style.headTitle}>页面管理</div>
          <div className={style.pagesAction}>
            <a className={style.actionItem} onClick={this.addPage}><Icon/>添加</a>
            <Divider type='vertical' style={{height: '27px'}}/>
            <a className={style.actionItem} onClick={this.copyPage}><Icon/>复制</a>
            <Divider type='vertical' style={{height: '27px'}}/>
            <a className={style.actionItem} onClick={this.delPage}><Icon/>删除</a>
          </div>
        </div>
        <div className={style.pagesContent} style={{height: innerHeight+'px'}}>
          <List id='pagesPanel' loading={this.loading}>

            <Item>
              <div className={style.pageThumbItem}>
                <div className={style.pagesNumber}>1</div>
                <div className={style.thumbPage} style={{background: `url('/src/assets/images/defaultPages01.png')`}} />
                <div className={style.pagesPositionAction}>
                  <Button disabled type='primary' className={style.upAction} onClick={this.pageUp}><Icon type="up" /></Button>
                  <Button type='primary' className={style.downAction}><Icon type="down" /></Button>
                </div>
              </div>
            </Item>

            <Item>
              <div className={style.pageThumbItem}>
                <div className={style.pagesNumber}>2</div>
                <div className={style.thumbPage} style={{background: `url('/src/assets/images/defaultPages02.png')`}} />
                <div className={style.pagesPositionAction}>
                  <Button type='primary' className={style.upAction} onClick={(e) => this.pageUp(e)}><Icon type="up" /></Button>
                  <Button type='primary' className={style.downAction}><Icon type="down" /></Button>
                </div>
              </div>
            </Item>

            <Item>
              <div className={style.pageThumbItem}>
                <div className={style.pagesNumber}>3</div>
                <div className={style.thumbPage} style={{background: `url('/src/assets/images/defaultPages02.png')`}} />
                <div className={style.pagesPositionAction}>
                  <Button type='primary' className={style.upAction} onClick={(e) => this.pageUp(e)}><Icon type="up" /></Button>
                  <Button type='primary' className={style.downAction}><Icon type="down" /></Button>
                </div>
              </div>
            </Item>

            <Item>
              <div className={style.pageThumbItem}>
                <div className={style.pagesNumber}>3</div>
                <div className={style.thumbPage} style={{background: `url('/src/assets/images/defaultPages02.png')`}} />
                <div className={style.pagesPositionAction}>
                  <Button type='primary' className={style.upAction} onClick={(e) => this.pageUp(e)}><Icon type="up" /></Button>
                  <Button disabled type='primary' className={style.downAction}><Icon type="down" /></Button>
                </div>
              </div>
            </Item>

          </List>

        </div>
      </div>
    )
  }
};

export default PagesPanel;