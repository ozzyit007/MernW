import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props =>{

    return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>BUISNESS</NavLink>
    </li>
    <li>
      <NavLink to="/u1/places">LATEST</NavLink>
    </li>
    <li>
      <NavLink to="/places/new" >MARKET</NavLink>
    </li>
    <li>
      <NavLink to="/aut" >TEC-SCI</NavLink>
    </li>
    <li>
      <NavLink to="/aut" >ABOUT</NavLink>
    </li>
    </ul>

};
export default NavLinks;
