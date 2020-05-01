import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <div className="row navbar text-light bg-dark">
      <h1 style={{float:'left'}}>Covid-Tracker</h1>
      <div style={{float: 'right'}} className="text-light">
        <NavLink to="/" style={{marginRight: '15px'}}>Map</NavLink>
        {/* <NavLink to=""></NavLink> */}
      </div>
    </div>
  );
}

export default NavBar;