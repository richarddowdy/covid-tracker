import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <div className="row navbar text-light bg-dark">
      <NavLink to="/" style={{float:'left', fontSize:"38px", color:"white"}}>Covid-Tracker</NavLink>
      <div style={{float: 'right'}} className="text-light">
        <NavLink className="text-white" to="/" style={{fontSize:"24px", marginRight: '15px'}}>Map</NavLink>
        <NavLink className="text-white" to="/states" style={{fontSize:"24px", marginRight: '15px'}}>List</NavLink>
      </div>
    </div>
  );
}

export default NavBar;