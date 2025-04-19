import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1 className="site-title">BookBinder</h1>
        <div className="header-nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/stats" className="nav-item">Statistik</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
