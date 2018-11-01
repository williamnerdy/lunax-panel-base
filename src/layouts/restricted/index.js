import React from 'react';
import Sidebar from '~/components/sidebar';

const RestrictedLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default RestrictedLayout;
