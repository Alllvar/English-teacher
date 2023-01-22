import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {
  Layout,
} from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import Sidebar from 'components/Sidebar';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Content } = Layout;

const AppRouter: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <HashRouter>
      <Layout>
        <Sidebar collapsed={collapsed} />
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content className="site-layout-background-content">
            <Routes>
              <Route path="/" element={<Learn />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </HashRouter>
  );
};

export default AppRouter;
