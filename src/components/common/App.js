import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Redirect, Switch, Route} from 'react-router-dom';
import '../../styles/App.less';
import SideBar from './SideBar';
import HeaderBar from './HeaderBar';
import DashBoard from '../dashBoard/DashBoard';

const {Content, Footer} = Layout;
export default class App extends Component {
  state = {
    collapsed: localStorage.getItem("siderCollapsed") === "true",
  };

  toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    }, function () {
        localStorage.setItem("siderCollapsed", this.state.collapsed);
    });
  };
  
  componentDidMount() {
    //保存Sider收缩
    if (localStorage.getItem("siderCollapsed") === null) {
        localStorage.setItem("siderCollapsed", false);
    }
  }

  render() {
      const {collapsed} = this.state;
      const {location} = this.props;
      debugger;
      let name;
      if (localStorage.getItem("user") === null) {
          return <Redirect to="/login"/>
      } else {
          name = location.state === undefined ? JSON.parse(localStorage.getItem("user")).username : location.state.username;
      }
      return (
          <Layout className="ant-layout-has-sider" style={{height: '100%'}}>
              <SideBar collapsed={collapsed} path={location.pathname}/>
              <Layout>
                  <HeaderBar collapsed={collapsed} toggle={this.toggle} username={name}/>
                  <Content style={{margin: '0 16px'}}>
                      <Switch>
                          <Route exact path={'/app/home'} component={DashBoard} />
                          {/* <Route exact path={'/app/form'} component={UForm} />
                          <Route exact path={'/app/header/Calendars'} component={Calendars} />
                          <Route exact path={'/app/chart/echarts'} component={Echarts} />
                          <Route exact path={'/app/richText'} component={RichText} />
                          <Route exact path={'/app/upload'} component={UploadEditor} />
                          <Route component={noMatch} /> */}
                      </Switch>
                  </Content>
                  <Footer style={{textAlign: 'center'}}>
                      MSPA ©2017-2018 Created by zysoft
                  </Footer>
              </Layout>
          </Layout>
    );
  }
}