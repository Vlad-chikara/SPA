import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <NavLink to="/about">Про мене</NavLink>
      <NavLink to="/my-city">Моє місто</NavLink>
      <NavLink to="/my-future">Моє майбутнє</NavLink>
    </nav>
  </header>
);

export default Header;