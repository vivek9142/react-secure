import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navigation = (props) => {
  const {isAuthenticated,loginWithRedirect,logout} = useAuth0();
  return (
    <div className="header">
      {!isAuthenticated && (
        <ul className="nav nav-pills pull-right">
          <li><button onClick={()=>loginWithRedirect({})}>Log in</button></li>
      </ul>
      )}

      {isAuthenticated && (
        <ul className="nav nav-pills pull-right">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><button onClick={()=>logout()}>Logout</button></li>
      </ul>
      )}

      <h3 className="text-muted">Securing React</h3>
    </div>
  );
}

export default Navigation; 
