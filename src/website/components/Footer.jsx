import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="website-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ShopHub</h3>
            <p>Your trusted online marketplace</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/products" className="footer-link">Products</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          
          <div className="footer-section">
            <h4>Customer Service</h4>
            <Link to="/help" className="footer-link">Help Center</Link>
            <Link to="/shipping" className="footer-link">Shipping Info</Link>
            <Link to="/returns" className="footer-link">Returns</Link>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
