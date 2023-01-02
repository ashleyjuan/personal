import { Breadcrumb, Tag, Space, Input, Row, Col, Button, Table, Tour, Card, notification, Tabs, Typography, Checkbox, Carousel, FloatButton } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
const { Title, Paragraph, Text, Link } = Typography;
const Home = () => {
    const [data, setData] = useState([]);
    const [data_tmp, setDataTmp] = useState([]);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    //下方最新消息中的標籤列
    const [tag, setTags] = useState([
        {
            label: `全部公告`,
            key: '1',
        },
        {
            label: `行政資訊`,
            key: '2',
        },
        {
            label: `招生考試`,
            key: '3',
        },
        {
            label: `活動快報`,
            key: '4',
        },
        {
            label: `校聞亮點`,
            key: '5',
        },
        {
            label: `境外學生`,
            key: '6',
        },
    ])
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = useState(false);
    const [first, setFirst] = useState(false);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    //網站指引的地方，可進行編輯，target為所指派的區域
    const steps = [
        {
            title: '最新消息',
            description: '可查看最近活動資訊喔～',
            target: () => ref1.current,
        },
        {
            title: '顯示目前所在位置',
            description: '點擊即可到當頁',
            target: () => ref2.current,
        },
        {
            title: '系上消息資訊都在這裡喔',
            description: '',
            target: () => ref3.current,
        },
        {
            title: '可在輸入匡輸入各種資訊！',
            description: '可在輸入匡輸入各種資訊！',
            target: () => ref4.current,
        }
    ];
    //這邊可以設定一開始跳出的通知
    const openNotification = () => {
        api.open({
            description: <>
                <Row gutter={[8, 8]}>
                    <Col span={12}>
                        <Card hoverable>
                            <img onClick={e => navigate('/personal/HighSchool')} height={"150px"} src='./img/highschool.png'></img>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card hoverable>
                            <img onClick={e => navigate('/personal/Master')} height={"150px"} src='./img/College.png'></img>
                        </Card>
                    </Col>
                </Row>
            </>,
        });
        api.onClose = { first }
    };
    useEffect(() => {
        handleOnSearch();
    }, [search])
    const columns = [
        {
            title: '',
            key: 'type',
            dataIndex: 'type',
        },
        {
            title: '',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '',
            dataIndex: 'date',
            key: 'date',
        },
    ];
    useEffect(() => {
        openNotification();
        axios
            .get('./data/News.json', {})
            .then((response) => {
                //一組資料是用來顯示的，一組資料是用來filter，當預設的姿料
                setData(response.data);
                setDataTmp(response.data);
            })
    }, [])
    useEffect(() => {
        //設定初始tab為空的
        let type = ''
        //用迴圈跑，尋找現在哪個type
        tag.map((value, index) => {
            if (value.key == query) {
                type = value.label;
            }
        })
        handleOnTab(type);
    }, [query])
    const handleOnTab = (type) => {
        const data_tmp = [];
        data.filter(row => {
            if (type === '全部公告') {
                data_tmp.push(row);
                //將這類的type加入
            } else if (String(row.type).toLowerCase().includes(String(type).toLowerCase())) {
                data_tmp.push(row);
            }
        })
        setDataTmp(data_tmp);
    }
    const handleOnSearch = () => {
        const data_tmp = [];
        data.filter(row => {
            if (search === '') {
                data_tmp.push(row);
                //將這類的type加入
            } else if (String(row.name).toLowerCase().includes(String(search).toLowerCase()) || String(row.type).toLowerCase().includes(String(search).toLowerCase())) {
                data_tmp.push(row);
            }
        })
        setDataTmp(data_tmp);
    }
    return (
        <>
            {contextHolder}
            <Row gutter={[8, 8]}>
                <Col span={24}>
                    <Card >
                        <div ref={ref1}>
                            {/* 此區可以放置照片 進行更動 */}
                            <Carousel autoplay>
                                <div>
                                    <img width={"100%"} src="./img/大合照-01.jpg"></img>
                                </div>
                                <div>
                                    <img width={"100%"} src="./img/頒獎-01.jpg"></img>
                                </div>
                                <div>
                                    <img width={"100%"} src="./img/學生1-01.jpg"></img>
                                </div>
                                <div>
                                    <img width={"100%"} src="./img/學生2-01.jpg"></img>
                                </div>
                            </Carousel>
                        </div>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card >
                        <Breadcrumb>
                            <Breadcrumb.Item>你目前所在位置</Breadcrumb.Item>
                            <div ref={ref2}>
                                <Breadcrumb.Item>首頁</Breadcrumb.Item>
                            </div>
                        </Breadcrumb>
                        <Row gutter={[8, 8]} justify={'space-between'}>
                            <Col>
                                <div ref={ref3}>
                                    <Title level={3}>本系消息園地</Title>
                                </div>
                            </Col>
                            <Col >
                                <div ref={ref4}>
                                    <Input placeholder="請輸入想查詢的資訊"
                                        style={{
                                            width: 200,
                                        }}
                                        onChange={e => setSearch(e.target.value)} />
                                </div>
                            </Col>
                            <Col span={23}>
                                <Tabs
                                    defaultActiveKey="1"
                                    onChange={key => setQuery(key)}
                                    items={tag && tag.map((value, index) => {
                                        return {
                                            key: value.key,
                                            label: value.label,
                                            children: (<Table columns={columns} dataSource={data_tmp} pagination={false} />)
                                        }
                                    })}
                                />
                            </Col>
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
export default Home;