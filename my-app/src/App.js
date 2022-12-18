import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Breadcrumb, Layout, Menu, theme, Image, Row, Col, Tabs } from 'antd';
import { FacebookOutlined, PhoneOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const App = () => {
  const [key, setKey] = useState('/');
  const onSelect = (e) => {
    setKey([e.key])
  }
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <Row gutter={16} style={{ justifyContent: 'end' }}>
          <Col>
            <a href='#/'>Home</a>
          </Col>
          <Col>
            <a href='#/about'>About</a>
          </Col>
          <Col>
            <a href='#/experience'>Experience</a>
          </Col>
          <Col>
            <a href='#/contact'>Contact</a>
          </Col>
        </Row>

        {/* <Menu
          onSelect={onSelect}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={key}
          items={[{
            key: '/',
            label: `Home`,
          }, {
            key: '/about',
            label: `About`,

          }, {
            key: '/experience',
            label: `Experience`,
          }, {
            key: '/contact',
            label: `Contact`,
          },]}
          style={{ justifyContent: 'end' }}
        >
        </Menu> */}
        {/* <Tabs
          defaultActiveKey="1"
          // onChange={onChange}
          items={[
            {
              label: `Tab 1`,
              key: '1',
              children: `Content of Tab Pane 1`,
            },
            {
              label: `Tab 2`,
              key: '2',
              children: `Content of Tab Pane 2`,
            },
            {
              label: `Tab 3`,
              key: '3',
              children: `Content of Tab Pane 3`,
            },
          ]}
        /> */}
      </Header>
      <Content
        className="site-layout"
      >
        <div
          style={{
            // padding: 24,
            minHeight: 380,
          }}
        >
          <div id='/' style={{ background: 'url(/header.jpg) repeat 0 0' }}>

          </div>
          <div id="/about">
            12421
          </div>
          <div id="/experience">
            12421
          </div>
          <div id="/contact">
            12421
          </div>
        </div>
      </Content>
      <Footer
      >
        <Row>
          <Col span={11} >
            <Row style={{ padding: '5px' }}>
              <Col center style={{ fontSize: '20px' }}>
                <FacebookOutlined /> 阮奕瑄
              </Col>
            </Row>
            <Row style={{ padding: '5px' }}>
              <Col center style={{ fontSize: '20px' }}>
                <PhoneOutlined />   0932-337-284
              </Col>
            </Row>
            <Row style={{ padding: '5px' }}>
              <Col center style={{ fontSize: '20px' }}>
                <InstagramOutlined />  ashley910521
              </Col>
            </Row>
            <Row style={{ padding: '5px' }}>
              <Col center style={{ fontSize: '20px' }}>
                <MailOutlined />  ashley910521@gmail.com
              </Col>
            </Row>
          </Col>
          <hr></hr>
          <Col span={11}>col-12</Col>
        </Row>
      </Footer>
    </Layout >
  );
};
export default App;