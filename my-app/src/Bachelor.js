import { Breadcrumb, Layout, Menu, Image, Row, Col, Button, Modal, Tour, Card, Input, Tabs, Typography, Checkbox, Carousel, FloatButton, Table } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
const { Title, Paragraph, Text, Link } = Typography;

const Bachelor = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const ref1 = useRef();
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    //網站指引的地方，可進行編輯，target為所指派的區域
    const steps = [
        {
            title: '可在上方瞭解更多資訊喔～',
            description: '',
            target: () => ref1.current,
        },
    ];
    const dataSource = [{
        type: "一般組",
        num1: "10",
        num2: "50",
        num3: "1",
        num4: "0",
        num5: "1200",
        date: '111.05.23',
        test: '否',
        way: '是'
    }, {
        type: "APCS組",
        num1: "3",
        num2: "15",
        num3: "0",
        num4: "0",
        num5: "1200",
        date: '111.05.23',
        test: '否',
        way: '是'
    }]
    const columns = [{
        title: '組別',
        key: 'type',
        dataIndex: 'type',
    }, {
        title: '招生名額',
        key: 'num1',
        dataIndex: 'num1',
    }, {
        title: '甄試人數',
        key: 'num2',
        dataIndex: 'num2',
    }, {
        title: '原住民外加名額',
        key: 'num3',
        dataIndex: 'num3',
    }, {
        title: '離島外加名額',
        key: 'num4',
        dataIndex: 'num4',
    }, {
        title: '甄試費',
        key: 'num5',
        dataIndex: 'num5',
    }, {
        title: '甄試日期',
        key: 'date',
        dataIndex: 'date',
    }, {
        title: '術科考試',
        key: 'test',
        dataIndex: 'test',
    }, {
        title: '扶弱措施',
        key: 'way',
        dataIndex: 'way',
    }, {
        title: '校系分則詳細資料',
        key: 'type',
        dataIndex: 'type',
        render: (text) => <a>各學系招生簡章內容</a>,
    }]
    return (
        <>
            <Row gutter={[8, 8]}>
                <Col span={24}>
                    <Card >
                        <Breadcrumb>
                            <Breadcrumb.Item>你目前所在位置</Breadcrumb.Item>
                            <Breadcrumb.Item >招生專區</Breadcrumb.Item>
                            <Breadcrumb.Item>學士班</Breadcrumb.Item>
                        </Breadcrumb>
                        <div ref={ref1}>
                            <Tabs
                                defaultActiveKey="1"
                                centered
                                items={[{
                                    key: 1,
                                    label: '繁星推薦入學',
                                    children: (<>
                                        <Title level={2} style={{ textAlign: 'center' }}>111學年度大學繁星推薦入學</Title>
                                        <p style={{ fontSize: '16px' }}>111學年度本校大學「繁星推薦」入學公告事項：有關本校111學年度各學系繁星推薦簡章內容，請至大學甄選入學委員會繁星推薦校系分則網站查詢</p>
                                        <p style={{ fontSize: '16px' }}>網址：<a>https://www.cac.edu.tw/star111/query.php</a></p>
                                        <p style={{ fontSize: '16px' }}>一、111學年度大學繁星推薦入學錄取名單111.03.22（二）於大學甄選入學委員會網站公告，同學可自行上網查詢</p>
                                        <p style={{ fontSize: '16px' }}><a>111繁星推薦招生名額榜單</a>、<a>外加名額榜單</a></p>
                                        <p style={{ fontSize: '16px' }}>二、本校繁星推薦錄取生通知單預計於111.03.23（三）前以限時專送寄出。</p>
                                        <p style={{ fontSize: '16px' }}>三、分發錄取生即取得本校之入學資格，若欲放棄入學資格者，應於 111 年 3 月 22 日至111 年 3 月 24 日每日上午 9 時至下午 9 時止，至甄選委員會網址(https://www.cac.edu.tw/)，選擇「繁星推薦」，進入「網路聲明放棄」後，點選「聲明放棄入學資格登錄作業」選項，輸入個人證號後，完成網路聲明放棄入學資格作業，否則不得參加當學年度「大學分發入學招生」、「科技校院四年制及專科學校二年制甄選入學招生」及「科技校院四年制及專科學校二年制日間部聯合登記分發入學招生」。</p>
                                    </>)
                                }, {
                                    key: 2,
                                    label: '申請入學',
                                    children: (<>
                                        <Title level={2}>招生名額一覽</Title>
                                        <Col span={24}>
                                            <Table
                                                dataSource={dataSource}
                                                columns={columns}
                                                pagination={false}
                                            ></Table>
                                        </Col>
                                        <Title level={2}>申請入學相關連結</Title>
                                        <Col span={24}>
                                            <Table
                                                dataSource={[{
                                                    name: '111學年度大學申請入學資訊',
                                                    content: '請至大學甄選入學委員會大學申請入學招生校系分則網站查詢，網址：https://www.cac.edu.tw/apply111/query.php'
                                                }, {
                                                    name: '各學系招生簡章內容',
                                                    content: '點我下載'
                                                }, {
                                                    name: '各學系第二階段指定項目報名相關資訊',
                                                    content: '點我下載',
                                                }, {
                                                    name: '公告111學年度大學申請入學錄取名單',
                                                    content: '【錄取名單】、【成績複查申請書】'
                                                }]}
                                                columns={[
                                                    {
                                                        title: '111學年度大學申請入學資訊',
                                                        key: 'name',
                                                        dataIndex: 'name',
                                                    }, {
                                                        title: '資訊下載連結',
                                                        key: 'content',
                                                        dataIndex: 'content',
                                                        render: (text) => <a>{text}</a>,
                                                    }]}
                                                pagination={false}
                                            ></Table>
                                        </Col>
                                    </>)
                                }, {
                                    key: 3,
                                    label: '轉學入學（寒假）',
                                    children: (<>
                                        <Title level={2} style={{ textAlign: 'center' }}>110學年度學士班寒假轉學招生</Title>
                                        <p style={{ fontSize: '16px' }}> 一、報名時間：110年11月29日（上午9時起） 至 110年12月23日止</p>
                                        <p style={{ fontSize: '16px' }}>二、報名方式：一律採用網路登錄報名資料後，郵寄相關表件</p>
                                        <p style={{ fontSize: '16px' }}>三、考試日期：111年01月24日（星期一）～01月25日（星期二） (<a>詳見簡章各學系規定</a>)</p>
                                        <p style={{ fontSize: '16px' }}> 四、<a onClick={e => window.open('https://sso.nknu.edu.tw/Recruit/index.aspx')}>登入報名系統</a></p>
                                        <p style={{ fontSize: '16px' }}>五、<a>110錄取名單</a></p>
                                    </>)
                                }, {
                                    key: 4,
                                    label: '轉學入學（暑假）',
                                    children: (<>
                                        <Title level={2} style={{ textAlign: 'center' }}>110學年度學士班暑假轉學招生</Title>
                                        <p style={{ fontSize: '16px' }}>一、報名時間：110年05月17日（上午9時起） 至 110年06月10日止</p>
                                        <p style={{ fontSize: '16px' }}>二、報名方式：一律採用網路登錄報名資料後，郵寄相關表件</p>
                                        <p style={{ fontSize: '16px' }}>三、筆試日期：110年07月14日（星期三）</p>
                                        <p style={{ fontSize: '16px' }}>四、面試日期：110年07月13日（星期二） 至 110年07月14日（星期三）(<a>詳見簡章各學系規定</a>)</p>
                                        <p style={{ fontSize: '16px' }}>五、<a>登入報名系統</a></p>
                                    </>)
                                }, {
                                    key: 5,
                                    label: '特殊選才入學',
                                    children: (<>
                                        <Title level={2} style={{ textAlign: 'center' }}>111學年度本校學士班特殊選才招生考試</Title>
                                        <p style={{ fontSize: '16px' }}>1. 上網輸入基本資料取得繳款帳號：110年11月05日09時起 至 110年11月15日22時止。</p>
                                        <p style={{ fontSize: '16px' }}>2. 繳費日期：110年11月05日09時起 至 110年11月15日23時59分止。</p>
                                        <p style={{ fontSize: '16px' }}>3. 填寫編輯報考資料、下載列印報名表：110年11月05日09時起 至 110年11月15日23時59分止。</p>
                                        <p style={{ fontSize: '16px' }}>4. 郵寄報名資料：110年11月16日止(郵戳為憑)。</p>
                                        <p style={{ fontSize: '16px' }}>5. 報名方式：一律採用網路登錄報名資料後，郵寄相關表件(詳細報名流程請詳閱簡章說明)。</p>
                                        <p style={{ fontSize: '16px' }}>6. 參與特殊選才招生學系：國文學系、地理學系、音樂學系、數學系(數學組、應用數學組)、化學系、生物科技系、工業設計學系 、工業科技教育學系科技教育與訓練組、軟體工程與管理學系。</p>
                                        <p style={{ fontSize: '16px' }}>7. <a>特殊選才招生簡章</a></p>
                                        <p style={{ fontSize: '16px' }}>8. <a>報名系統</a></p>
                                        <p style={{ fontSize: '16px' }}><a>111學年度特殊選才通過複審名單</a></p>
                                        <p style={{ fontSize: '16px' }}><a>111學年度特殊選才錄取名單</a></p>
                                    </>)
                                }]}
                            />
                        </div>
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
export default Bachelor;