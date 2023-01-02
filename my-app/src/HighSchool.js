import { Breadcrumb, Layout, Menu, Image, Row, Col, Button, Modal, Tour, Card, Input, Tabs, Typography, Checkbox, Carousel, FloatButton } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
const { Title, Paragraph, Text, Link } = Typography;
const HighSchool = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const ref1 = useRef();
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    //網站指引的地方，可進行編輯，target為所指派的區域
    const steps = [
        {
            title: '可以透過這些網站更認識我們系所～',
            description: '',
            target: () => ref1.current,
        },
        {
            title: '如想更了解學校生活可以看這部影片！',
            description: '',
            target: () => ref2.current,
        },
        {
            title: '若想瞭解更多資訊，可以點擊招生專區的學士班',
            description: '',
            // target: () => ref3.current,
        },
    ];
    return (
        <>
            <Row gutter={[8, 8]}>
                <Col span={24}>
                    <Card >
                        <Breadcrumb>
                            <Breadcrumb.Item>你目前所在位置</Breadcrumb.Item>
                            <div >
                                <Breadcrumb.Item>高中生專區</Breadcrumb.Item>
                            </div>
                        </Breadcrumb>
                        <Row gutter={[8, 8]}>
                            <Col span={16}>
                                <div ref={ref1}>
                                    <Row gutter={[8, 8]} >
                                        <Title level={3}>高中生專區</Title>
                                        <Col span={24} style={{ fontSize: '18px' }}>高中生專區：<a onClick={e => window.open('https://sso.nknu.edu.tw/AcademicAffairs/RecruitMeeting/highSchoolStu.aspx')}>https://sso.nknu.edu.tw/AcademicAffairs/RecruitMeeting/highSchoolStu.aspx</a></Col>
                                        <Col md={{ span: 6 }} sm={{ span: 12 }}>
                                            <Card style={{ height: "100%" }} hoverable onClick={e => window.open('https://www.104.com.tw/jb/career/department/view?sid=5012000000&mid=480317&degree=3')}><img width={'150 % '} src="https://static.104.com.tw/logo/104logo_2023newyear.gif" no-repeat></img></Card>
                                        </Col>
                                        <Col md={{ span: 6 }} sm={{ span: 12 }}>
                                            <Card style={{ height: "100%" }} hoverable onClick={e => window.open('https://university.1111.com.tw/company.asp?sid=153&pgtp=4&codeNo=1000120204#gsc.tab=0')}><img width={'150 %'} src='./img/大學網logo.png'></img></Card>
                                        </Col>
                                        <Col md={{ span: 6 }} sm={{ span: 12 }}>
                                            <Card style={{ height: "100%" }} hoverable onClick={e => window.open('https://www.unews.com.tw/School/Department/12/429')}><img width={'150 %'} src='./img/大學問logo.png'></img></Card>
                                        </Col>
                                        <Col md={{ span: 6 }} sm={{ span: 12 }}>
                                            <Card style={{ height: "100%" }} hoverable onClick={e => window.open('https://collego.edu.tw/Highschool/DepartmentIntro?dept_id=022009')}><img width={'150 %'} src='./img/Collego.png'></img></Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <div ref={ref2}>
                                <Col span={6}>
                                    <Col>
                                        <Title level={3} style={{ whiteSpace: 'nowrap' }}>瞭解更多</Title>
                                        <iframe src="https://www.youtube.com/embed/JUypKTwXerI" title="軟體工程與管理學系" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </Col>
                                </Col>
                            </div>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Tour open={open} onClose={e => setOpen(false)} steps={steps} arrow={false} />
            <FloatButton
                icon={<QuestionCircleOutlined />}
                type="primary"
                description="網站導覽"
                shape="square"
                style={{
                    right: 24,
                }}
                onClick={e => setOpen(true)}
            />
        </>
    )
}
export default HighSchool;