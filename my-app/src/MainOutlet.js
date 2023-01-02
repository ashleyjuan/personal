import { Breadcrumb, Layout, Menu, Image, Row, Col, Button, Input, Tour, FloatButton } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

const MainOutlet = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [selecte_keys, setSelectedKeys] = useState(window.location.pathname);
    const onSelect = (e) => {
        navigate(e.key)
        // document.title = titles[e.key]
        setSelectedKeys([e.key])
    }
    useEffect(() => {
        setSelectedKeys([window.location.pathname])
    }, [window.location.pathname])
    useEffect(() => {
        // setOpen(true)
        // if (localStorage.getItem('count') != 1) {
        //     setOpen(true)
        //     // localStorage.setItem('count', 1);
        // }
    }, [])

    useEffect(() => {
        setOpen(true)
    }, [])
    return (
        <Layout >
            <Header style={{ backgroundColor: '#ffffff' }}>

                <Row gutter={[8, 8]}>
                    <Col span={4} onClick={e => navigate('/personal/Home')}>
                        <img width="100%" src='./img/sem.png'></img>
                    </Col>
                    <Col span={20}>
                        {/* 控制上面header的內容 */}
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['/personal/Home']}
                            selectedKeys={selecte_keys}
                            onSelect={onSelect}
                            items={[
                                {
                                    key: "/personal/Home",
                                    label: `首頁`,
                                },
                                {
                                    key: "/personal/Introduce",
                                    label: `系所簡介`,
                                    children: [
                                        {

                                            label: '系所簡介',
                                            key: '/personal/Introduce',
                                        },
                                        {

                                            label: '發展目標',
                                            key: '/personal/DevelopGoal',
                                        },
                                        {
                                            label: '未來發展',
                                            key: '/personal/FutureGoal',
                                        },
                                        {
                                            label: '課程規劃',
                                            key: '/personal/CourseGoal',
                                        },
                                    ]
                                },
                                {
                                    key: "/personal/Teachers",
                                    label: `系所師資`,
                                },
                                {
                                    key: "/personal/Admissions",
                                    label: `招生專區`,
                                    children: [
                                        {
                                            label: '學士班',
                                            key: '/personal/Bachelor',
                                        },
                                        {
                                            label: '碩士班',
                                            key: '/personal/Master',
                                        },
                                    ]
                                },
                                {
                                    key: "/personal/Form",
                                    label: `文件下載`,
                                },
                                {
                                    key: "/personal/HighSchool",
                                    label: `高中生專區`,
                                    // children: [
                                    //     {
                                    //         label: '高中生專區',
                                    //         key: '/personal/HighSchool',
                                    //     },
                                    //     {
                                    //         label: '系學會',
                                    //         key: 'https://www.facebook.com/sed.sa.nknu/',
                                    //     },
                                    // ]
                                },
                                {
                                    key: "/personal/FinalProject",
                                    label: `歷年專題`,
                                },
                                {
                                    key: "/personal/Contact",
                                    label: `聯絡我們`,
                                }
                            ]
                            }
                        />
                    </Col>

                </Row>
            </Header>
            <Content
                style={{
                    padding: '30px 50px',
                    fontSize: "18px"
                }}
            >
                <Row>
                    <Col span={24}>
                        <Outlet />
                    </Col>
                </Row>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                <Row gutter={16} justify="center" style={{ textAlign: 'center' }}>
                    <Col>
                        <Row>©2022  國立高雄師範大學 軟體工程與管理學系</Row>
                        <div ref={ref1}>
                            <Row>電話: 07-7172930 ext.8001 </Row>
                            <Row>E-Mail:<a href='mailto:s9150@nknu.edu.tw?body=您好：%0D%0A我想問的事情是%0D%0A回信請回到'>s9150@nknu.edu.tw</a> </Row>
                        </div>
                    </Col>
                </Row>
                <FloatButton.BackTop />

            </Footer>
        </Layout >
    )
};
export default MainOutlet;