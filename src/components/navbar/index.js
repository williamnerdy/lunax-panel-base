import React from 'react';
import { Layout } from 'antd';
import UserOptions from '../user-options';
import { APP_NAME } from '~/settings';
const { Header } = Layout;

const RestrictedLayout = ({ children }) => {
  return (
    <Header className="header" style={{ color: '#fff', background: '#2b2f3e' }}>
      <h3 style={{ float: 'left', color: '#fff' }}>{APP_NAME}</h3>
      <div style={{ float: 'right' }}>
        <UserOptions />
      </div>
    </Header>
  );
};

export default RestrictedLayout;
