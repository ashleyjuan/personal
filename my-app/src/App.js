import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Image, Row, Col } from 'antd';
import { FacebookOutlined, PhoneOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[{
            key: 1,
            label: `Home`,
          }, {
            key: 2,
            label: `About`,
          }, {
            key: 3,
            label: `Experience`,
          }, {
            key: 4,
            label: `Contact`,
          },]}
          style={{ justifyContent: 'end' }}
        />
      </Header>
      <Content
        className="site-layout"
      >
        <div
          style={{
            // padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          <div style={{
            backgroundImage: `url(/header.png)`,
          }}>
            {/* <Image preview={false} style={{ width: "100%" }} src='/header.jpg'></Image> */}
          </div>
          <div key={2}>11111 </div>
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