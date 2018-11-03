import React from 'react';
import { Layout } from 'antd';
import Navbar from '~/components/navbar';
import Sidebar from '~/components/sidebar';

const { Content } = Layout;

const sidebarItems = [
  { icon: 'home', name: 'Home', url: '/' },
  { icon: 'setting', name: 'Settings', url: '/settings' }
];

const RestrictedLayout = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Navbar />
      <Layout>
        <Sidebar items={sidebarItems} />
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: '24px', overflow: 'initial' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default RestrictedLayout;
