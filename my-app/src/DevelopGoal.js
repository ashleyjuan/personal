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
const DevelopGoal = () => {
    return (
        <>
            <Col span={24}>
                <Card >
                    <Breadcrumb>
                        <Breadcrumb.Item>你目前所在位置</Breadcrumb.Item>
                        <Breadcrumb.Item >系所簡介</Breadcrumb.Item>
                        <Breadcrumb.Item >發展目標</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row gutter={[8, 8]} justify='space-between' align={'middle'}>
                        <Col>
                            <Title level={3}>目標特色</Title>
                            <Col span={24} style={{ fontSize: '20px' }}>
                                <p style={{ fontWeight: 'bold' }}>課程目標</p>
                                本系之課程規劃強調數理及軟體設計技術課程。數理課程用意在培養學生抽象思考與解決問題能力，並可將學得之數學知識應用於軟體設計上。軟體設計課程除加強基本程式設計與系統分析能力外，並開設軟體開發方法、資訊系統架構、設計模式、人機介面 設計、軟體開發 專案管理、軟體成熟度評估等進階課程。因此，軟體工程系將以培養高級軟體開發與管理人才為發展特色，以軟體技術研發為主軸，希望能結合本校其他系所共同開發軟體應用。
                            </Col>
                            <Col span={24} style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                教育目標
                            </Col>
                            <Col span={24}>
                                <img width={"100%"} src='./img/goal.jpeg'></img>
                            </Col>
                        </Col>

                    </Row>
                </Card>
            </Col>
        </>
    )
}
export default DevelopGoal;