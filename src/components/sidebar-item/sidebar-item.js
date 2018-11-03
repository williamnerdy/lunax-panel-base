// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

type Props = {
  children: string,
  url: string,
  icon: string
};

const SidebarItem = ({ url, icon, children, ...props }: Props) => {
  return (
    <Menu.Item {...props}>
      <Link to={url}>
        <Icon type={icon} />
        <span className="nav-text">{children}</span>
      </Link>
    </Menu.Item>
  );
};

export default SidebarItem;
