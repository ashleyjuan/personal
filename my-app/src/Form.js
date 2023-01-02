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
const Forms = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [data_tmp, setDataTmp] = useState([]);
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
            title: '可以搜尋想尋找的檔案名稱或分類名稱～',
            description: '',
            target: () => ref1.current,
        },
    ];
    useEffect(() => {
        //從Form.json拿取資料
        axios
            .get('./data/Form.json', {})
            .then((response) => {
                //一組資料是用來顯示的，一組資料是用來filter，當預設的姿料
                setData(response.data);
                setDataTmp(response.data);
            })
    }, [])
    const columns = [
        {
            title: '分類',
            dataIndex: 'type',
            filters: [
                {
                    text: '一般表單',
                    value: '一般表單',
                },
                {
                    text: '系所資訊',
                    value: '系所資訊',
                },
                {
                    text: '學務相關',
                    value: '學務相關',
                },
                {
                    text: '教務相關',
                    value: '教務相關',
                },
                {
                    text: '修業要點',
                    value: '修業要點',
                },
                {
                    text: '在職專班碩士',
                    value: '在職專班碩士',
                },
                {
                    text: '日間碩士',
                    value: '日間碩士',
                },
                {
                    text: '實習相關',
                    value: '實習相關',
                },
            ],
            onFilter: (value, record) => record.type.indexOf(value) === 0,
            sorter: (a, b) => a.type.length - b.type.length,
            sortDirections: ['descend'],
        },
        {
            title: '檔案名稱',
            dataIndex: 'name',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: '檔案下載',
            dataIndex: 'type',
            render: (text) => <Button type="primary">下載</Button>,
        },
    ];
    const handleOnSearch = () => {
        const data_tmp = [];
        data.filter(row => {
            if (query === '') {
                data_tmp.push(row);
                //當名稱及類別有符合的字時將當筆資料加入
            } else if (String(row.name).toLowerCase().includes(String(query).toLowerCase()) || String(row.type).toLowerCase().includes(String(query).toLowerCase())) {
                data_tmp.push(row);
            }
        })
        setDataTmp(data_tmp);
    }
    //使用監聽器，搜尋匡變動時就被呼叫
    useEffect(() => {
        handleOnSearch();
    }, [query])
    return (
        <>
            <Col span={24}>
                <Card >
                    <Breadcrumb>
                        <Breadcrumb.Item>你目前所在位置</Breadcrumb.Item>
                        <Breadcrumb.Item >文件下載</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row gutter={[8, 8]} justify='space-between' align={'middle'}>
                        <Col>
                            <Title level={3}>文件下載</Title>
                        </Col>
                        <Col >
                            <div ref={ref1}>
                                <Input placeholder="請輸入想查詢的檔案名稱及分類"
                                    style={{
                                        width: 250,
                                    }}
                                    onChange={e => setQuery(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col span={24}></Col>
                        <Col span={20}>
                            <Table columns={columns} dataSource={data_tmp} />
                        </Col>
                    </Row>
                </Card>
            </Col>
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
export default Forms;