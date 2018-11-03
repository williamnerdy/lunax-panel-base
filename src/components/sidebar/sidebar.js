// @flow
import React from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import SidebarItem from '../sidebar-item';

const { Sider } = Layout;

type Props = {
  items: Array<{ url: string, icon: string, name: string }>
};

const Sidebar = (props: Props) => {
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        background: '#2b2f3e'
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[props.location.pathname]}
        defaultSelectedKeys={['/']}
        style={{ background: '#2b2f3e' }}
      >
        {props.items.map(item => (
          <SidebarItem key={item.url} url={item.url} icon={item.icon}>
            {item.name}
          </SidebarItem>
        ))}
      </Menu>
    </Sider>
  );
};

export default withRouter(Sidebar);
