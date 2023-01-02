import { Breadcrumb, Layout, Menu, Image, Row, Col, Button, Modal, Tour, Card, Input, Tabs, Typography, Table, Carousel, FloatButton, Form } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Column, P } from '@antv/g2plot';
import axios from 'axios';
const { Title, Paragraph, Text, Link } = Typography;
const TableHeader = styled.span`
  font-size:24px;
  font-weight:700
`;
const CourseGoal = () => {
    return (
        <>
            <Col span={24}>
                <Card >
                    <Breadcrumb>
                        <Breadcrumb.Item>你目前所在位置</Breadcrumb.Item>
                        <Breadcrumb.Item >系所簡介</Breadcrumb.Item>
                        <Breadcrumb.Item >系所簡介</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row gutter={[8, 8]} justify='space-between' align={'middle'}>
                        <Col>
                            <Title level={3}>系所簡介</Title>
                            <Col span={24} style={{ fontSize: '20px' }}>
                                <p style={{ fontWeight: 'bold' }}>課程規劃</p>
                                本系課程設計採模組課程，共有二個模組：資訊技術模組與資訊應用模組，毎個模組最少須修畢24學分，學生畢業前最少須修畢一個模組課程。學生們可以依照自已的興趣，選擇適合的模組。除了模組課程外，本系也依教師專長及配合系上開設的課程推動辦理教育部「匯流平台整合與應用」認證課程，修畢課程的學生，可獲得由教育部數位匯流教學聯盟署名之「匯流平台整合與應用」學程證書。透過這個課程，讓學生具備數位匯流領域的專業知識與實務經驗，這對學生升學與就業都有很大的助益。
                            </Col>
                            <Col span={24} style={{ fontSize: '20px' }}>
                                <p style={{ fontWeight: 'bold' }}>架構規劃</p>
                                軟體工程學系之課程規劃，依照課程深淺，由基礎能力往應用延伸。並搭配軟體工程課程，進行專題製作與管理；並且進入企業實習，確保所學符合企業軟體管理的需要。
                            </Col>
                            <Col span={24}>
                                <img width={"100%"} src='./img/class.png'></img>
                            </Col>
                        </Col>

                    </Row>
                </Card>
            </Col>
        </>
    )
}
export default CourseGoal;