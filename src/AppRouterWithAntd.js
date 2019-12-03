import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

import Index from "./Pages/Index";
import ReactBai from "./Pages/ReactBai";
import NodeBai from "./Pages/NodeBai";

const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class RouterApp extends Component {
	state = {
		routeConfig: [
			{
				key: 'sub1',
				title: {
					icon: 'pie-chart',
					text: '首页'
				},
				children: [
					{
						key: 'sub1-1',
						title: {
							text: 'Index',
							linkTo: '/'
						}
					},
					{
						key: 'sub1-2',
						title: {
							text: 'ReactBai',
							linkTo: '/ReactBai'
						}
					},
					{
						key: 'sub1-3',
						title: {
							text: 'NodeBai',
							linkTo: '/NodeBai'
						}
					},
				]
			},
			{
				key: 'sub2',
				title: {
					icon: 'pie-chart',
					text: '其他'
				},
				children: [
					{
						key: 'sub2-1',
						title: {
							text: '其他1',
							linkTo: ''
						}
					},
					{
						key: 'sub2-2',
						title: {
							text: '其他2',
							linkTo: ''
						}
					},
					{
						key: 'sub2-3',
						title: {
							text: '其他3',
							linkTo: ''
						}
					},
				]
			},
		]
	}
  render() {
		const { routeConfig } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: "100vh", borderRight: "1px solid #ddd" }}>
          <Sider theme="light" style={{background: 'f00'}}>
            <h2
              style={{
                textAlign: "center",
                background: "#ccc",
                height: "60px",
                lineHeight: "60px"
              }}
            >
              {/* baiyunfei's blog */}
            </h2>
            <Menu defaultSelectedKeys={["sub1-1"]} mode="inline" theme="light">
							{
								routeConfig && routeConfig.map((routeItem, index) => {
									return (
										<SubMenu
											key={routeItem.key}
											title={
												<span>
													<Icon type={routeItem.title.icon} />
													<span>{routeItem.title.text}</span>
												</span>
											}
										>
											{
												routeItem.children && routeItem.children.length > 0 && routeItem.children.map((menuItem, menuIndex) => {
													return (
														<Menu.Item key={menuItem.key}>
															<span>{menuItem.title.text}</span>
															<Link to={menuItem.title.linkTo} />
														</Menu.Item>
													)
												})
											}
										</SubMenu>
									)
								})
							}
            </Menu>
          </Sider>
          <Layout>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Route exact path="/" component={Index} />
              <Route path="/ReactBai" component={ReactBai} />
              <Route path="/NodeBai" component={NodeBai} />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              baiyunfei429's blog ©2019 Created by baiyunfei429
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default RouterApp;
