import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="React Logo" />
    </header>
  );
}
 
export default Header;