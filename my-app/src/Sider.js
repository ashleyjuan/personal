import React, { useEffect, useState, useRef } from 'react';
import { Menu, Layout, Col, FloatButton, Tour } from 'antd';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('系所簡介', '/personal/Introduce'),
    getItem('發展目標', '/personal/DevelopGoal'),
    getItem('未來發展', '/personal/FutureGoal'),
    getItem('課程規劃', '/personal/CourseGoal'),
];
const Siders = () => {
    const navigate = useNavigate();
    const ref1 = useRef();
    const [open, setOpen] = useState(false);
    const [selecte_keys, setSelectedKeys] = useState(window.location.pathname);
    const onSelect = (e) => {
        // if (e.key == '/home') {
        //     console.log(123);
        // }
        navigate(e.key)
        // document.title = titles[e.key]
        setSelectedKeys([e.key])
    }
    //網站指引的地方，可進行編輯，target為所指派的區域
    const steps = [
        {
            title: '可點選想查看的內容喔～',
            description: '',
            target: () => ref1.current,
        },
    ];
    return (
        <>
            <Layout>
                {/* 旁邊的sider */}
                <Sider style={{ backgroundColor: '#ffffff' }}>
                    <div ref={ref1}>
                        <Menu
                            onSelect={onSelect}
                            // defaultSelectedKeys={['/personal/Introduce']}
                            defaultOpenKeys={selecte_keys}
                            mode="inline"
                            items={items}
                        />
                    </div>
                </Sider>
                <Content>
                    <Col span={24}>
                        <Outlet />
                    </Col>
                </Content>
            </Layout >
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
    );
};
export default Siders;