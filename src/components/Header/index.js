import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'; 

function Header() {
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="Restaurant Logo" className="logo" />
        <span className="name">HomeMade Restaurant</span>
      </div>
      <div className="right">
        <div className="right">
          <Link to="/cart" className="button">Cart</Link> 
        </div>
      </div>
    </header>
  );
}

export default Header;
