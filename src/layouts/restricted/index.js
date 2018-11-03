import React from 'react';
import { Layout } from 'antd';
import Sidebar from '~/components/sidebar';

const { Content } = Layout;

const sidebarItems = [
  { icon: 'home', name: 'Home', url: '/' },
  { icon: 'setting', name: 'Settings', url: '/settings' }
];

const RestrictedLayout = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar items={sidebarItems} />
      <Layout style={{ marginLeft: 200 }}>
        <Content
          style={{ minHeight: '100vh', margin: '24px', overflow: 'initial' }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default RestrictedLayout;
