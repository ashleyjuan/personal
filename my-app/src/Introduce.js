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
const Introduce = () => {
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
                                軟體工程與管理學系(以下簡稱本系或軟體系)於2007年8月成立，以培養資訊軟體人才為目的。除了以一般資訊科系之計算機科學暨資訊工程技術為發展方向之外，同時訓練學生具有紮實的軟體工程理論及團隊溝通與合作的能力，並將軟體工程技術投入特定應用領域，例如：電子商務、數位匯流、寬頻網路、人工智慧、醫療資訊、及多媒體等。
                            </Col>
                            <Col span={24} style={{ fontSize: '20px' }}>
                                本系於2015年8月本系與本校教育學院之資訊教育研究所合併，遂改名為軟體工程與管理學系。
                            </Col>
                            <Col span={24}>
                                <img width={"100%"} src='./img/intro.jpeg'></img>
                            </Col>
                        </Col>

                    </Row>
                </Card>
            </Col>
        </>
    )
}
export default Introduce;