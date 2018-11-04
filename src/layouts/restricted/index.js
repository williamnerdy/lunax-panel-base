import React from 'react';
import { Layout } from 'antd';
import Navbar from '~/components/navbar';
import Sidebar from '~/components/sidebar';
import { SCREENS } from '~/settings';

const { Content } = Layout;

const RestrictedLayout = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Navbar />
      <Layout>
        <Sidebar items={SCREENS} />
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: '24px', overflow: 'initial', position: 'relative' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default RestrictedLayout;
