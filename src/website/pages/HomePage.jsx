import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to ShopHub</h1>
          <p>Discover amazing products at great prices</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose ShopHub</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🚚 Fast Shipping</h3>
            <p>Free delivery on orders over $50</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure Payment</h3>
            <p>100% secure checkout process</p>
          </div>
          <div className="feature-card">
            <h3>↩️ Easy Returns</h3>
            <p>30-day return policy</p>
          </div>
          <div className="feature-card">
            <h3>🎧 24/7 Support</h3>
            <p>Always here to help you</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h3>Electronics</h3>
            <p>Gadgets & Devices</p>
          </div>
          <div className="category-card">
            <h3>Fashion</h3>
            <p>Clothing & Accessories</p>
          </div>
          <div className="category-card">
            <h3>Home</h3>
            <p>Furniture & Decor</p>
          </div>
          <div className="category-card">
            <h3>Sports</h3>
            <p>Fitness & Outdoor</p>
          </div>
        </div>
      </section>
    </div>
  );
};
