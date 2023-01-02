import { Breadcrumb, Layout, Menu, Image, Row, Col, Button, Input, Space, Tour, Card, Avatar, Tabs, Typography, Checkbox, Carousel, FloatButton } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { QuestionCircleOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Title, Paragraph, Text, Link } = Typography;
const { Search } = Input;
const Teachers = () => {
    const [data, setData] = useState([]);
    const [data_tmp, setDataTmp] = useState([]);
    const [query, setQuery] = useState('');
    const ref1 = useRef(null);
    const [open, setOpen] = useState(false);
    const steps = [
        {
            title: '尋找老師',
            description: '可在輸入匡輸入各種資訊！',
            // cover: (
            //     <img
            //         alt="tour.png"
            //         src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
            //     />
            // ),
            target: () => ref1.current,
        }
    ];
    const handleOnSearch = () => {
        const data_tmp = [];
        data.filter(row => {
            if (query === '') {
                data_tmp.push(row);
                //當姓名、專長、信箱有符合的字時將當筆資料加入
            } else if (String(row.name).toLowerCase().includes(String(query).toLowerCase()) || String(row.expertise).toLowerCase().includes(String(query).toLowerCase()) || String(row.phone).toLowerCase().includes(String(query).toLowerCase()) || String(row.email).toLowerCase().includes(String(query).toLowerCase())) {
                data_tmp.push(row);
            }
        })
        setDataTmp(data_tmp);
    }
    useEffect(() => {
        axios
            .get('./data/teachers.json', {})
            .then((response) => {
                //一組資料是用來顯示的，一組資料是用來filter，當預設的姿料
                setData(response.data);
                setDataTmp(response.data);
            })
    }, [])
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
                        {/* <Breadcrumb.Item style={{ cursor: 'pointer' }} onClick={e => navigate('/personal')}>首頁</Breadcrumb.Item> */}
                        <Breadcrumb.Item>系所師資</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row gutter={[8, 8]} justify={'space-between'}>
                        <Col >
                            <Title level={2}>系所師資</Title>
                        </Col>
                        <Col >
                            <div ref={ref1}>
                                <Input placeholder="請輸入想查詢的資訊"
                                    style={{
                                        width: 200,
                                    }}
                                    onChange={e => setQuery(e.target.value)} />
                            </div>
                        </Col>
                        <Col span={24}></Col>
                        {/* 拿取json資料放入 */}
                        {data_tmp && data_tmp.map((value, index) => {
                            return (
                                <Col md={{ span: 12 }} sm={{ span: 24 }}>
                                    <Card>
                                        <Row>
                                            <Col md={{ span: 6 }} sm={{ span: 24 }}>
                                                <Avatar size={81} icon={<UserOutlined />} />
                                            </Col>
                                            <Col md={{ span: 18 }} sm={{ span: 24 }}>
                                                <Col span={24}>
                                                    <span style={{ fontSize: '18px' }}>職稱：{value.name}</span>
                                                </Col>
                                                {value.expertise ?
                                                    <>
                                                        <Col span={24}>
                                                            <span style={{ fontSize: '18px' }}>專長：{value.expertise}</span>
                                                        </Col>
                                                    </> : null}
                                                <Col span={24}>
                                                    <span style={{ fontSize: '18px' }}>電話：{value.phone}</span>
                                                </Col>
                                                <Col span={24}>
                                                    <span style={{ fontSize: '18px' }}>Email：{value.email}</span>
                                                </Col>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            )
                        })
                        }
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
export default Teachers;