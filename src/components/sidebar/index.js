import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { logoff } from '../../services/auth';

const Sidebar = props => {
  const exit = () => {
    logoff();
    props.history.push('/login');
  };

  return (
    <aside>
      <ul>
        <li>
          <Link to="/">Home Screen</Link>
        </li>
      </ul>
      <button onClick={exit}>Sair</button>
    </aside>
  );
};

export default withRouter(Sidebar);
