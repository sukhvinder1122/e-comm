import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  const getClass = ({ isActive }) =>
    `nav-item ${isActive ? 'active' : ''}`;

  return (
    <aside className="sidebar" id="sidebar">
      {/* Logos */}
      <div className="logo s1-only">
        <div className="logo-dot"></div>NodePath
      </div>

      <div className="nav-label">Main Menu</div>

      <NavLink to="/" className={getClass}>
        <span className="nav-icon">▣</span> Dashboard
      </NavLink>

      <NavLink to="/products" className={getClass}>
        <span className="nav-icon">▷</span> Products
      </NavLink>

      <NavLink to="/orders" className={getClass}>
        <span className="nav-icon">✦</span> Orders
      </NavLink>

      <NavLink to="/create-order" className={getClass}>
        <span className="nav-icon">➕</span> Create Order
      </NavLink>

      <NavLink to="/" className={getClass}>
        <span className="nav-icon">◈</span> Customers
      </NavLink>

      <div className="nav-label" style={{ marginTop: '14px' }}>
        Account
      </div>

      <NavLink to="/" className={getClass}>
        <span className="nav-icon">◉</span> Analytics
      </NavLink>

      <NavLink to="/" className={getClass}>
        <span className="nav-icon">⚙</span> Settings
      </NavLink>

      {/* Bottom Profile */}
      <div className="sidebar-bottom">
        <div className="avatar">
          <div className="avatar-img">A</div>
          <div>
            <div className="avatar-name">Arjun</div>
            <div className="avatar-role">Store Manager · Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
};