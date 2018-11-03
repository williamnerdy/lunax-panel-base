import React from 'react';
import { Layout } from 'antd';
import UserOptions from '../user-options';
const { Header } = Layout;

const RestrictedLayout = ({ children }) => {
  return (
    <Header className="header" style={{ color: '#fff', background: '#2b2f3e' }}>
      <div style={{ float: 'right' }}>
        <UserOptions />
      </div>
    </Header>
  );
};

export default RestrictedLayout;
