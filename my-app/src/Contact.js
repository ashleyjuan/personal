import { Breadcrumb, Layout, Menu, Image, Row, Col, Button, Modal, Tour, Card, Input, Tabs, Typography, Checkbox, Carousel, FloatButton } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;
const Contact = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const steps = [
        {
            title: '聯絡我們',
            description: '如果需要聯絡我們可以點擊信箱！',
            // cover: (
            //     <img
            //         alt="tour.png"
            //         src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
            //     />
            // ),
            target: () => ref1.current,
        },
        {
            title: '交通位置',
            description: '拖移即可放大縮小',
            target: () => ref2.current,
        },
    ];
    // useEffect(() => {
    //     setOpen(true)
    // }, [])
    return (
        <>
            <Col span={24}>
                <Card >
                    <Breadcrumb>
                        <Breadcrumb.Item>你目前所在位置</Breadcrumb.Item>
                        {/* <Breadcrumb.Item style={{ cursor: 'pointer' }} onClick={e => navigate('/personal')}>首頁</Breadcrumb.Item> */}
                        <Breadcrumb.Item>聯絡我們</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row gutter={[8, 8]}>
                        <Col span={12}>
                            <Title level={2}>聯絡我們</Title>
                            <Col span={24} style={{ fontSize: '18px' }}>聯絡人: 趙小姐</Col>
                            <Col span={24} style={{ fontSize: '18px' }}>電話: 07-7172930 ext.8001</Col>
                            <div ref={ref1} >
                                <Col span={24} style={{ fontSize: '18px' }}> E-Mail: <a href='mailto:s9150@nknu.edu.tw?body=您好：%0D%0A我想問的事情是%0D%0A回信請回到'>s9150@nknu.edu.tw</a> </Col>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div ref={ref2}>
                                <Title level={3}>交通資訊</Title>
                            </div>
                            {/* 可至google map複製位置更改區域 */}
                            <div style={{ position: 'relative', paddingBottom: ' 75%', height: 0, overflow: 'hidden' }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3630600428!2d120.40313847437905!3d22.789007279338154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e13b8c1ea9687%3A0x2d489fa4078d3ac1!2z5ZyL56uL6auY6ZuE5bir56-E5aSn5a2454eV5bei5qCh5Y2A6Ie055CG5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1672121759160!5m2!1szh-TW!2stw" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Col>
                    </Row>

                </Card>
            </Col>
            <Tour open={open} onClose={() => setOpen(false)} steps={steps} arrow={false} />
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
export default Contact;