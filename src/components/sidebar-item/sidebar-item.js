// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

type Props = {
  children: string,
  url: string,
  icon: string
};

const SidebarItem = (props: Props) => {
  return (
    <li>
      <Link to={props.url}>
        <Icon type={props.icon} />
        <span>{props.children}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
