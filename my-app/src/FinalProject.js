import { Breadcrumb, Layout, Menu, Image, Row, Col, Button, Modal, Tour, Card, Input, Tabs, Typography, Checkbox, Carousel, FloatButton } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Title, Paragraph, Text, Link } = Typography;
const FinalProject = () => {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const ref1 = useRef(null);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const steps = [
        {
            title: '點擊可查看更多專題內容喔～',
            description: '',
            target: () => ref1.current,
        },
    ];
    useEffect(() => {
        axios
            .get('./110.json', {})
            .then((response) => {
                setData1(response.data);
            })
        axios
            .get('./109.json', {})
            .then((response) => {
                setData2(response.data);
            })
    }, [])
    return (
        <>
            <Col span={24}>
                <Card >
                    <Breadcrumb>
                        <Breadcrumb.Item>你目前所在位置</Breadcrumb.Item>
                        <Breadcrumb.Item>歷年專題</Breadcrumb.Item>
                    </Breadcrumb>
                    <Title level={2}>歷年專題</Title>
                    <Title level={3}>110年</Title>
                    <Row gutter={[8, 8]} justify={'center'}>
                        {data1.map((value, index) => {
                            const img = `./img/finalproject/${value.img}.png`;
                            return (
                                <Col md={{ span: 6 }} sm={{ span: 12 }}>
                                    <Card bordered
                                        cover={<img src={img} />}>
                                        <Title level={3}>{value.name}</Title>
                                        <p style={{ fontSize: '1rem' }}>{value.content}</p>
                                        {value.content == '' ?
                                            <>
                                                <div ref={ref1}>
                                                    <Button block style={{ color: 'black' }}>查看更多 -></Button>
                                                </div>
                                            </> :
                                            <>
                                                <Button block style={{ color: 'black' }}>前往查看</Button>
                                            </>}
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                    <Title level={3}>109年</Title>
                    <Row gutter={[8, 8]} justify={'center'}>
                        {data2.map((value, index) => {
                            const img = `./img/finalproject/${value.img}.png`;
                            return (
                                <Col md={{ span: 6 }} sm={{ span: 12 }}>
                                    <Card bordered
                                        cover={<img src={img} />}>
                                        <Title level={3}>{value.name}</Title>
                                        <p style={{ fontSize: '1rem' }}>{value.content}</p>
                                        {value.content == '' ?
                                            <>
                                                <Button block style={{ color: 'black' }}>查看更多 -></Button>
                                            </> :
                                            <>
                                                <Button block style={{ color: 'black' }}>前往查看</Button>
                                            </>}
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>

                </Card >
            </Col >
            <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
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
export default FinalProject;