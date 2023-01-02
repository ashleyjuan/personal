import { Breadcrumb, Layout, Menu, Image, Row, Col, Button, Modal, Tour, Card, Input, Tabs, Typography, Checkbox, Carousel, FloatButton } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
const { Title, Paragraph, Text, Link } = Typography;
const Master = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const ref1 = useRef(null);

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
            title: '如果想更了解可以報名參加招生說明會喔～～！',
            description: '',
            target: () => ref1.current,
        },
    ];
    return (
        <>
            <Row gutter={[8, 8]}>
                <Col span={24}>
                    <Card >
                        <Breadcrumb>
                            <Breadcrumb.Item>你目前所在位置</Breadcrumb.Item>
                            <Breadcrumb.Item >招生專區</Breadcrumb.Item>
                            <Breadcrumb.Item>碩士班</Breadcrumb.Item>
                        </Breadcrumb>
                        <Row gutter={[8, 8]}>
                            <Col span={24}>
                                <Title level={3}>碩士班招生專區</Title>
                            </Col>
                            <Col span={24} style={{ fontSize: '20px', fontWeight: 'bold' }}>日間碩士班招生專區</Col>
                            <Col span={24} style={{ fontSize: '16px' }}>111 學年度研究所考試：</Col>
                            <Col span={24} style={{ fontSize: '16px' }}>11年碩士班招生簡章</Col>
                            <Col span={24} style={{ fontSize: '16px' }}> 1. 報名日期：110年12月13日(一)起至111年01月06日(四)止。</Col>
                            <Col span={24} style={{ fontSize: '16px' }}> 2. 面試日期： 111 年 2 月 18 日(星期五)。</Col>
                            <Col span={24} style={{ fontSize: '16px' }}> 3. 報名網址： 登入報名系統<a>https://sso.nknu.edu.tw/Recruit/index.aspx</a></Col>
                            <Col span={24} style={{ fontSize: '16px' }}>4. 報名方式：一律採用網路報名，郵寄報名相關表件。</Col>
                            <Col span={24}></Col>
                            <Col span={24} style={{ fontSize: '20px', fontWeight: 'bold' }}> 在職碩士班招生：</Col>
                            <Col span={24} style={{ fontSize: '16px' }}>111 學年度在職碩士班考試：</Col>
                            <Col span={24} style={{ fontSize: '16px', color: 'red' }}>*免筆試無相關科系限制</Col>
                            <div ref={ref1}>
                                <Col span={24} style={{ fontSize: '16px' }}>招生說明會： 110年 12 月 04 日 上午 10:50</Col>
                                <Col span={24} style={{ fontSize: '16px' }}> 地點：高雄師範大學和平校區 愛閱館</Col>
                            </div>
                            <Col span={24} style={{ fontSize: '16px' }}> 1. 報名日期： 110 年 11 月 16 日～ 111 年 2 月 7日。</Col>
                            <Col span={24} style={{ fontSize: '16px' }}> （ 請於 111年 2 月7 日  23:59 前報名並完成繳費，後續資料填寫至111年2月11日止 ）</Col>
                            <Col span={24} style={{ fontSize: '16px' }}> 2. 網路報名網址: <a>http://sso.nknu.edu.tw/Recruit/front.aspx?RegisterAction=M</a></Col>
                            <Col span={24} style={{ fontSize: '16px' }}> 3. 面試日期： 111 年 03 月 19 日。</Col>
                            <Col span={24} style={{ fontSize: '16px' }}> 4. 報名方式：一律採用網路報名，郵寄報名相關表件</Col>
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
export default Master;