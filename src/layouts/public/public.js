import React from 'react';
import './public.css';

const PublicLayout = ({ children }) => {
  return (
    <div className="container">
      <main className="form-wrapper">{children}</main>;
    </div>
  );
};

export default PublicLayout;
