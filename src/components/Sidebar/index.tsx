import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import {
  Layout,
  Menu,
} from 'antd';
import {
  TrophyOutlined,
  BarsOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const MAPPED_KEYED_PATHS: { [key: string]: string } = {
  '/': '1',
  '/quiz': '3',
};

type SidebarProps = {
  collapsed: boolean
};

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const location = useLocation();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        {collapsed ? 'Eng' : 'English Teacher'}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[MAPPED_KEYED_PATHS[location?.pathname] || '1']}
        items={[
          {
            key: '1',
            icon: <BarsOutlined />,
            label: <Link to="/">Learn</Link>,
          },
          {
            key: '3',
            icon: <TrophyOutlined />,
            label: <Link to="/quiz">Quiz</Link>,
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
