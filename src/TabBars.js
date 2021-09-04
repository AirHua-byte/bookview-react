import React from 'react'
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router'
import './static/css/tabbar.css'

class TabBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: false,
      noRenderContent: false
    };
  }

  render() {
    return (
      <div className="clear">
        <div style={{position:'fixed',width:'100%',bottom:0}}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="首页"
              key="home"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url('+require('./static/img/首页.png').default+') center center /  21px 21px no-repeat' }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url('+require('./static/img/首页 (1).png').default+') center center /  21px 21px no-repeat' }}
              />
              }
              selected={this.state.selectedTab === 'home'}
              onPress={() => {
                this.props.history.push('/')
                this.setState({
                  selectedTab: 'home',
                });
              }}
              data-seed="logId"
            >
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url('+require('./static/img/我的书架.png').default+') center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url('+require('./static/img/我的书架 (1).png').default+') center center /  21px 21px no-repeat' }}
                />
              }
              title="书架"
              key="bookcase"
              selected={this.state.selectedTab === 'bookcase'}
              onPress={() => {
                this.props.history.push('/bookcase')
                this.setState({
                  selectedTab: 'bookcase',
                });
              }}
              data-seed="logId1"
            >
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url('+require('./static/img/分类.png').default+') center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url('+require('./static/img/分类 (1).png').default+') center center /  21px 21px no-repeat' }}
                />
              }
              title="分类"
              key="type"
              selected={this.state.selectedTab === 'type'}
              onPress={() => {
                this.props.history.push('/type')
                this.setState({
                  selectedTab: 'type',
                });
              }}
            >
            </TabBar.Item>
            <TabBar.Item
              /* icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }} */
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url('+require('./static/img/我的.png').default+') center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url('+require('./static/img/我的 (1).png').default+') center center /  21px 21px no-repeat' }}
                />
              }
              title="我的"
              key="my"
              selected={this.state.selectedTab === 'my'}
              onPress={() => {
                this.props.history.push('/my')
                this.setState({
                  selectedTab: 'my',
                });
              }}
            >
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}

export default withRouter(TabBars);