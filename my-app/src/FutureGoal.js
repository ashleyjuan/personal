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
const FutureGoal = () => {
    return (
        <>
            <Col span={24}>
                <Card >
                    <Breadcrumb>
                        <Breadcrumb.Item>你目前所在位置</Breadcrumb.Item>
                        <Breadcrumb.Item >系所簡介</Breadcrumb.Item>
                        <Breadcrumb.Item >未來發展</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row gutter={[8, 8]} justify='space-between' align={'middle'}>
                        <Col>
                            <Title level={3}>未來發展</Title>
                            <Col span={24} style={{ fontSize: '20px' }}>
                                臺灣的資訊相關產業在全球排名當中，位列於第四名，但台灣在資訊業發展的重心，截至目前為止都停留在半導體的開發與生產 ，在資訊服務等軟體相關產業上仍是落後於其他國家；相較於印度等國，台灣仍停留在屬於資訊產業的工業階段，而不是服務業階段。
                            </Col>
                            <Col span={24} style={{ fontSize: '20px' }}>
                                本系所：
                            </Col>
                            <Col span={24}>
                                <img width={"100%"} src='./img/future1.jpeg'></img>
                            </Col>
                            <Col span={24}>
                                <img width={"100%"} src='./img/future2.jpeg'></img>
                            </Col>
                        </Col>

                    </Row>
                </Card>
            </Col>
        </>
    )
}
export default FutureGoal;