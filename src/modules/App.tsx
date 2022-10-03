import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LearnPage } from './IntroductionPage';
import { CompetitionPage } from './CompetitionPage';
import { StudyingPage } from './StudyingPage';
import {
    Layout,
    Menu
} from 'antd';
import {
    FileSearchOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyOutlined,
    BarsOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import './App.css'

const { Header, Sider, Content } = Layout;

export const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapsed}>
                        <div className="logo">
                            {collapsed ? 'Eng' : 'English Teacher'}
                        </div>
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            items={[
                              {
                                  key: '1',
                                  icon: <BarsOutlined />,
                                  label: <Link to='/'>Introduction</Link>,
                              },
                              {
                                  key: '2',
                                  icon: <FileSearchOutlined />,
                                  label: <Link to='/studying'>Studying</Link>,
                              },
                              {
                                  key: '3',
                                  icon: <TrophyOutlined />,
                                  label: <Link to='/competition'>Competition</Link>,
                              },
                            ]}
                        />
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background">
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                              className: 'trigger',
                              onClick: () => setCollapsed(!collapsed),
                            })}
                        </Header>
                        <Content className="site-layout-background-content">
                            <Routes>
                                <Route path="/" element={<LearnPage words={[]} />} />
                                <Route path="/studying" element={<StudyingPage />} />
                                <Route path="/competition" element={<CompetitionPage />} />
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        </>
  );
}

