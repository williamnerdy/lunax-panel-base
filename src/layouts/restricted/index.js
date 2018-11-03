import React from 'react';
import Sidebar from '~/components/sidebar';

const sidebarItems = [{ icon: 'home', name: 'Home', url: '/' }];

const RestrictedLayout = ({ children }) => {
  return (
    <div>
      <Sidebar items={sidebarItems} />
      <main>{children}</main>
    </div>
  );
};

export default RestrictedLayout;
