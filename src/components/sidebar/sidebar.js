// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import SidebarItem from '../sidebar-item';
import { logoff } from '../../services/auth';

type Props = {
  items: Array<{ url: string, icon: string, name: string }>
};

const Sidebar = (props: Props) => {
  const exit = () => {
    logoff();
    props.history.push('/login');
  };

  return (
    <aside>
      <ul>
        {props.items.map((item, i) => (
          <SidebarItem key={i} url={item.url} icon={item.icon}>
            {item.name}
          </SidebarItem>
        ))}
      </ul>
      <button onClick={exit}>Sair</button>
    </aside>
  );
};

export default withRouter(Sidebar);
