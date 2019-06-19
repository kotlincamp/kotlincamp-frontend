import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div id="header">
  <div className="container">
    <div id="logo">
      <h1><Link to="/">Kotlin Camp</Link></h1>
    </div>
    <nav id="nav">
      <ul>
        <li><Link to="/"><a>Home</a></Link></li>
        <li><Link to="/contact/"><a>Contact</a></Link></li>
      </ul>
    </nav>
  </div>
</div>
);

export default Header;
