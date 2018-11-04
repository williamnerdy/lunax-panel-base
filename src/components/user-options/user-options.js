import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Dropdown, Button, Icon } from 'antd';
import { logoff } from '../../services/auth';

const UserOptions = props => {
  const exit = () => {
    logoff();
    props.history.push('/login');
  };

  const UserMenu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="1" onClick={exit}>
        <span>Exit</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={UserMenu} trigger={['click']}>
      <Button ghost className="ant-dropdown-link">
        <span>Opções</span>
        <Icon type="down" />
      </Button>
    </Dropdown>
  );
};

export default withRouter(UserOptions);
