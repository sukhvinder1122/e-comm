import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="website-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">ShopHub</Link>
        </div>
        
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="header-actions">
          <Link to="/cart" className="action-btn">🛒 Cart</Link>
          <Link to="/account" className="action-btn">👤 Account</Link>
        </div>
      </div>
    </header>
  );
};
