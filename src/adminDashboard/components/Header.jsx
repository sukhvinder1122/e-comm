import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

export const Header = ({ onToggleSidebar, sidebarCollapsed }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: 'New order received', message: 'Order #1234 has been placed', time: '2 min ago', type: 'order' },
    { id: 2, title: 'Product low stock', message: 'Product SKU-5678 is running low', time: '15 min ago', type: 'warning' },
    { id: 3, title: 'System update', message: 'Dashboard will be updated tonight', time: '1 hour ago', type: 'info' },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'order': return '📦';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📢';
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <button 
          className="menu-toggle"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <span className={`hamburger ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        
        <div className="search-bar">
          <input type="text" placeholder="Search products, orders, customers..." />
          <button className="search-btn" aria-label="Search">
            🔍
          </button>
        </div>
      </div>

      <div className="header-right">
        <div className="header-actions">
          {/* Notifications */}
          <div className="notification-wrapper" ref={notificationRef}>
            <button 
              className="notification-btn"
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
            >
              <span className="notification-icon">🔔</span>
              <span className="notification-badge">3</span>
            </button>
            
            {showNotifications && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h3>Notifications</h3>
                  <button className="mark-all-read">Mark all as read</button>
                </div>
                <div className="notification-list">
                  {notifications.map(notification => (
                    <div key={notification.id} className="notification-item">
                      <span className="notification-type-icon">
                        {getNotificationIcon(notification.type)}
                      </span>
                      <div className="notification-content">
                        <div className="notification-title">{notification.title}</div>
                        <div className="notification-message">{notification.message}</div>
                        <div className="notification-time">{notification.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="notification-footer">
                  <button className="view-all-notifications">View all notifications</button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="profile-wrapper" ref={profileRef}>
            <button 
              className="profile-btn"
              onClick={() => setShowProfile(!showProfile)}
              aria-label="Profile menu"
            >
              <div className="profile-avatar">
                <span>A</span>
              </div>
              <div className="profile-info">
                <div className="profile-name">Arjun</div>
                <div className="profile-role">Admin</div>
              </div>
              <span className="profile-chevron">▼</span>
            </button>
            
            {showProfile && (
              <div className="profile-dropdown">
                <div className="profile-header">
                  <div className="profile-avatar-large">
                    <span>A</span>
                  </div>
                  <div className="profile-details">
                    <div className="profile-name">Arjun</div>
                    <div className="profile-email">arjun@company.com</div>
                    <div className="profile-role">Store Manager · Admin</div>
                  </div>
                </div>
                <div className="profile-menu">
                  <button className="profile-menu-item">
                    <span className="menu-icon">👤</span>
                    My Profile
                  </button>
                  <button className="profile-menu-item">
                    <span className="menu-icon">⚙️</span>
                    Settings
                  </button>
                  <button className="profile-menu-item">
                    <span className="menu-icon">💳</span>
                    Billing
                  </button>
                  <button className="profile-menu-item">
                    <span className="menu-icon">❓</span>
                    Help & Support
                  </button>
                  <div className="profile-divider"></div>
                  <button className="profile-menu-item logout">
                    <span className="menu-icon">🚪</span>
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
