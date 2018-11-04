import React from 'react';
import { Layout } from 'antd';
import UserOptions from '../user-options';
import { APP_NAME } from '~/settings';
import Logo from '~/images/logo-small.png';

const { Header } = Layout;

const RestrictedLayout = ({ children }) => {
  return (
    <Header className="header" style={{ color: '#fff', background: '#2b2f3e' }}>
      <div style={{ float: 'left', color: '#fff' }}>
        <img src={Logo} alt="Logo" />
        <span style={{ marginLeft: '15px' }}>{APP_NAME}</span>
      </div>
      <div style={{ float: 'right' }}>
        <UserOptions />
      </div>
    </Header>
  );
};

export default RestrictedLayout;
